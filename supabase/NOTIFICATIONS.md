# Enquiry notifications

Each new enquiry queues two independent emails: Zoho SMTP sends the complete enquiry to the team, and Resend sends a short acknowledgement to the customer. Replies to the team alert go to the customer; replies to the acknowledgement go to your team mailbox. The form reports success after saving the enquiry. Email acceptance or failure never changes that result.

## Activate

1. Create a **Free** account at [Resend](https://resend.com/signup). Add **simpluxe.in** as the sending domain and configure the DNS records Resend provides. Wait for verification. Use the existing `connect@simpluxe.in` mailbox as the sender and reply address. Preserve the existing mailbox MX records when adding Resend's records; Resend delivers outbound email and does not host your receiving mailbox.
2. Create a sending API key. Put the following in `.env.local` and Vercel's Production environment; never put the real key in `.env.example`:

   ```env
   RESEND_API_KEY=YOUR_RESEND_KEY
   LEAD_EMAIL_FROM=Simpluxe <connect@simpluxe.in>
   LEAD_REPLY_TO_EMAIL=connect@simpluxe.in
   ZOHO_SMTP_HOST=smtp.zoho.in
   ZOHO_SMTP_PORT=465
   ZOHO_SMTP_USER=connect@simpluxe.in
   ZOHO_SMTP_PASSWORD=YOUR_ZOHO_APP_PASSWORD
   ZOHO_TEAM_EMAIL=connect@simpluxe.in
   CRON_SECRET=YOUR_RANDOM_SERVER_SECRET
   ```

   Use the exact SMTP host shown by the Zoho account's server configuration; Indian accounts normally use `smtp.zoho.in`. Generate the password under Zoho Accounts → Security → App Passwords and never commit it. Generate a long random `CRON_SECRET` and reuse the same value in step 5.
3. Run [lead-notifications.sql](lead-notifications.sql) in the Supabase SQL editor. Run it once before testing the updated form. It adds the notification queue, atomic insert trigger, and worker claim function. It leaves existing enquiries untouched and does not send anything for them.
4. Deploy the updated code, restart your local dev server, and run `npm.cmd run check:notifications`. This verifies configuration presence and table access; it does not send test emails or validate DNS/provider delivery.
5. In Supabase Vault, add `lead_notification_url` with `https://simpluxe.in/api/lead-notifications` and `lead_notification_cron_secret` with the same value as `CRON_SECRET`. Run [notification-scheduler.sql](notification-scheduler.sql). It enables Supabase Cron/pg_net and invokes the protected endpoint every five minutes. Use the real production origin if different. This avoids requiring Vercel's paid cron frequency. Check the Cron job's run history and `net._http_response` for successful HTTP responses.
6. Submit an enquiry using an email inbox you control. Check the Zoho team inbox and customer inbox (including spam), and check `lead_notifications` for two `accepted` jobs. With incomplete configuration, jobs remain `pending`. `accepted` means the relevant provider accepted the email, not that it reached the inbox; use Resend's delivery logs for the customer email and Zoho's Sent/inbox views for the team email.

## Free limits and WhatsApp

Resend's [free sending plan](https://resend.com/pricing) currently allows 100 emails/day and 3,000/month. Only the customer acknowledgement uses Resend, so one enquiry consumes one Resend email and permits up to about 100 enquiries/day within the separate monthly limit. The internal team alert uses Zoho SMTP and is subject to Zoho's account and reputation-based limits. This implementation does not purchase add-ons or use Resend's paid Automations product. Free hosting/database tiers also have usage limits and no enterprise availability guarantee.

The team alert contains a **Contact customer on WhatsApp** link for numbers supplied with `+` and country code. This opens a conversation for a person to send; it is not an automatic WhatsApp notification. [Official WhatsApp Business outbound messaging](https://whatsappbusiness.com/products/platform-pricing/) can incur charges, so it is deliberately excluded from this zero-cost setup. Customer acknowledgement is email only.

## Retry and operations

### Sender rejected with HTTP 403

`resend_sender_domain_unverified` (or the older `resend_http_403`) can occur when the sender's exact domain is not verified. For `connect@simpluxe.in`, add and verify **simpluxe.in** in the same Resend account as your sending key. The old `enquiries@mail.simpluxe.in` sender required verification of **mail.simpluxe.in**, which is a different domain. Add the DNS records shown in Resend, wait for **Verified**, and update Vercel/redeploy when changing the sender or key. Sending-only keys are appropriate; they cannot list domains, which does not mean email sending is broken.

After correcting the sender, submit a fresh test enquiry first. Existing `failed` jobs do not retry automatically, and their stored email payload retains the old sender. For jobs with a confirmed 403 rejection and no provider acceptance, you may use the following in the Supabase SQL editor. Replace the UUID with the one enquiry you intend to resend; do not retry all past enquiries. This resets only definitely rejected jobs and assigns new job IDs/idempotency keys so a corrected sender can be used:

```sql
update public.lead_notifications
set id = gen_random_uuid(), status = 'pending', attempts = 0,
    email_payload = null, first_attempt_at = null, last_error = null,
    lease_token = null, locked_at = null, next_attempt_at = now()
where lead_id = 'REPLACE_WITH_ENQUIRY_UUID'::uuid
  and status = 'failed' and provider_id is null and accepted_at is null
  and last_error in ('resend_http_403', 'resend_sender_domain_unverified',
                     'resend_testing_recipient_restricted', 'resend_sending_permission_denied');
```

The scheduler then picks up those jobs. Check their new IDs and Resend's delivery logs. Do not use this reset for timeouts or ambiguous send outcomes; verify provider logs before attempting those again.

Jobs use row locks and lease tokens to coordinate concurrent workers. Failed network requests, rate limits, and server errors retry with backoff; missing credentials defer without consuming attempts. Email bodies and recipients are frozen before sending. Customer jobs use a stable Resend idempotency key and stop ambiguous retries after 20 hours, within [Resend's 24-hour idempotency window](https://resend.com/docs/dashboard/emails/idempotency-keys). SMTP has no equivalent idempotency guarantee, so a rare connection loss after Zoho accepts a message can produce a duplicate team alert on retry. Up to eight provider attempts are allowed. Permanent provider failures and exhausted retries require manual review. Interrupted workers become claimable after ten minutes. Credentials and customer details are excluded from application logs.

Watch `pending` jobs that remain pending, any `failed` jobs, Resend bounce/suppression logs, and the Zoho Sent folder. After correcting a failed customer job, check Resend for its idempotency key/provider ID before manually retrying; resending outside the provider's idempotency window can duplicate mail. The free setup does not implement provider delivery webhooks or guarantee exactly-once inbox delivery. Do not backfill old enquiries unless you intend to email those customers.

`npm.cmd run check:notifications` checks the real configured database without reading enquiry rows or making notification provider calls.
