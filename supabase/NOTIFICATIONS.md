# Enquiry notifications

Each new enquiry queues two independent emails: a complete enquiry for the team and a short acknowledgement for the customer. Replies to the team alert go to the customer; replies to the acknowledgement go to your team mailbox. The form reports success after saving the enquiry. Email acceptance or failure never changes that result.

## Activate

1. Create a **Free** account at [Resend](https://resend.com/signup). Add your sending domain and configure the DNS records Resend provides. Wait for verification. A sending subdomain, such as `mail.simpluxe.in`, keeps this separate from existing mailbox DNS. Use the sender address from that verified domain. Resend delivers outbound email; it does not create a mailbox for `connect@simpluxe.in`.
2. Create a sending API key. Put the following in `.env.local` and Vercel's Production environment; never put the real key in `.env.example`:

   ```env
   RESEND_API_KEY=YOUR_RESEND_KEY
   LEAD_EMAIL_FROM=Simpluxe <enquiries@mail.simpluxe.in>
   LEAD_NOTIFY_EMAIL=connect@simpluxe.in
   LEAD_REPLY_TO_EMAIL=connect@simpluxe.in
   CRON_SECRET=YOUR_RANDOM_SERVER_SECRET
   ```

   `LEAD_NOTIFY_EMAIL` and `LEAD_REPLY_TO_EMAIL` must be an inbox you can receive mail in. A Gmail address is also fine. Generate a long random `CRON_SECRET` and reuse the same value in step 5.
3. Run [lead-notifications.sql](lead-notifications.sql) in the Supabase SQL editor. Run it once before testing the updated form. It adds the notification queue, atomic insert trigger, and worker claim function. It leaves existing enquiries untouched and does not send anything for them.
4. Deploy the updated code, restart your local dev server, and run `npm.cmd run check:notifications`. This verifies configuration presence and table access; it does not send test emails or validate DNS/provider delivery.
5. In Supabase Vault, add `lead_notification_url` with `https://simpluxe.in/api/lead-notifications` and `lead_notification_cron_secret` with the same value as `CRON_SECRET`. Run [notification-scheduler.sql](notification-scheduler.sql). It enables Supabase Cron/pg_net and invokes the protected endpoint every five minutes. Use the real production origin if different. This avoids requiring Vercel's paid cron frequency. Check the Cron job's run history and `net._http_response` for successful HTTP responses.
6. Submit an enquiry using an email inbox you control. Check both the team inbox and customer inbox (including spam), and check `lead_notifications` for two `accepted` jobs. With incomplete configuration, jobs remain `pending`. `accepted` means Resend accepted the email, not that it reached the inbox; use Resend's delivery/bounce logs for that check.

## Free limits and WhatsApp

Resend's [free sending plan](https://resend.com/pricing) currently allows 100 emails/day and 3,000/month. This flow uses two emails per enquiry, so allow about 50 enquiries/day and 1,500/month before other sending activity. Stay on the Free plan; this implementation does not purchase add-ons or use Resend's paid Automations product. Higher volume can delay or exhaust notifications. Free hosting/database tiers also have usage limits and no enterprise availability guarantee.

The team alert contains a **Contact customer on WhatsApp** link for numbers supplied with `+` and country code. This opens a conversation for a person to send; it is not an automatic WhatsApp notification. [Official WhatsApp Business outbound messaging](https://whatsappbusiness.com/products/platform-pricing/) can incur charges, so it is deliberately excluded from this zero-cost setup. Customer acknowledgement is email only.

## Retry and operations

Jobs use row locks and lease tokens to coordinate concurrent workers. Failed network requests, rate limits, and server errors retry with backoff; missing credentials defer without consuming attempts. Email bodies/recipients are frozen before sending, and each job uses a stable Resend idempotency key. Up to eight provider attempts are allowed, within a 20-hour window, shorter than [Resend's 24-hour idempotency window](https://resend.com/docs/dashboard/emails/idempotency-keys). Permanent provider failures, exhausted retries, or expired windows require manual review. Interrupted workers become claimable after ten minutes. Credentials and customer details are excluded from application logs.

Watch `pending` jobs that remain pending, any `failed` jobs, and Resend bounce/suppression logs. After correcting a failed job, check Resend for its idempotency key/provider ID before manually retrying; resending outside the provider's idempotency window can duplicate mail. The free setup does not implement provider delivery webhooks or guarantee exactly-once inbox delivery. Do not backfill old enquiries unless you intend to email those customers.

`npm.cmd run test:notifications` runs mocked regression checks without sending mail. `npm.cmd run check:notifications` checks the real configured database without reading enquiry rows or making notification provider calls.
