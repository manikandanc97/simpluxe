import "server-only";

import { createClient } from "@supabase/supabase-js";
import { createLeadEmail } from "@/lib/content/lead-emails";

type Job = {
  id: string;
  lead_id: string;
  kind: "team_email" | "customer_email";
  attempts: number;
  lease_token: string;
  first_attempt_at: string | null;
  email_payload: Record<string, unknown> | null;
};

// Provider acceptance is recorded separately from inbox delivery.
export async function deliverLeadNotifications(leadId?: string) {
  const url = process.env.SUPABASE_URL?.trim() || process.env.NEXT_PUBLIC_SUPABASE_URL?.trim();
  const key = process.env.SUPABASE_SECRET_KEY?.trim() || process.env.SUPABASE_SERVICE_ROLE_KEY?.trim();
  if (!url || !key) throw new Error("Missing Supabase configuration");
  const client = createClient(url, key, { auth: { persistSession: false, autoRefreshToken: false } });
  const { data, error } = await client.rpc("claim_lead_notifications", {
    batch_size: leadId ? 2 : 10,
    target_lead: leadId || null,
  });
  if (error) {
    console.error("[Lead notifications] Queue unavailable:", { code: error.code });
    throw new Error("Notification queue unavailable; run supabase/lead-notifications.sql");
  }

  const jobs = (data || []) as Job[];
  const summary = { processed: jobs.length, accepted: 0, deferred: 0, failed: 0 };
  // Serial sending respects Resend's default request rate and bounds runtime.
  for (const job of jobs) {
    const update = async (values: Record<string, unknown>) => {
      const { data: owned, error: updateError } = await client.from("lead_notifications")
        .update(values).eq("id", job.id).eq("lease_token", job.lease_token)
        .eq("status", "processing").select("id").maybeSingle();
      if (updateError || !owned) throw new Error("Notification lease update failed");
    };
    const finish = (values: Record<string, unknown>) => update({ locked_at: null, lease_token: null, ...values });
    const apiKey = process.env.RESEND_API_KEY?.trim();
    const from = process.env.LEAD_EMAIL_FROM?.trim();
    const teamTo = process.env.LEAD_NOTIFY_EMAIL?.trim();
    const replyTo = process.env.LEAD_REPLY_TO_EMAIL?.trim();
    if (!apiKey || !from || !teamTo || !replyTo) {
      await finish({ status: "pending", last_error: "missing_email_configuration",
        next_attempt_at: new Date(Date.now() + 15 * 60000).toISOString() });
      summary.deferred++;
      continue;
    }

    // Resend's idempotency window is 24h. Stop ambiguous retries before it expires.
    if (job.attempts >= 8 || (job.first_attempt_at && Date.now() - Date.parse(job.first_attempt_at) > 20 * 3600000)) {
      await finish({ status: "failed", last_error: "retry_limit_manual_review_required" });
      summary.failed++;
      continue;
    }

    let payload = job.email_payload;
    if (!payload) {
      const { data: lead, error: leadError } = await client.from("leads")
        .select("id,name,email,phone,company,project_type,goal,stage,description,source,blueprint_summary")
        .eq("id", job.lead_id).single();
      if (leadError || !lead) {
        await finish({ status: "pending", last_error: "lead_lookup_failed",
          next_attempt_at: new Date(Date.now() + 15 * 60000).toISOString() });
        summary.deferred++;
        continue;
      }
      payload = { from, to: [job.kind === "team_email" ? teamTo : lead.email],
        ...createLeadEmail(lead, job.kind, replyTo) };
    }
    // Freeze the email body and recipients before the first provider call so retries
    // reuse the same idempotency key AND payload even if settings change.
    await update({ email_payload: payload, attempts: job.attempts + 1,
      first_attempt_at: job.first_attempt_at || new Date().toISOString() });

    let providerId: string | undefined;
    let failure = "network_or_timeout";
    let retryable = true;
    let delayMs = Math.min(60 * 60000, 60000 * 2 ** job.attempts);
    try {
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST", cache: "no-store", signal: AbortSignal.timeout(10000),
        headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json",
          "Idempotency-Key": `lead-email/${job.id}` },
        body: JSON.stringify(payload),
      });
      if (response.ok) {
        const body = await response.json() as { id?: string };
        providerId = body.id;
        if (!providerId) failure = "invalid_provider_response";
      } else {
        failure = `resend_http_${response.status}`;
        if (response.status === 403) {
          // Keep only known diagnostic codes, never raw provider messages (which
          // may include addresses). A sending-only API key is valid for this call.
          const body = await response.json().catch(() => null) as { name?: string; message?: string } | null;
          const message = typeof body?.message === "string" ? body.message.toLowerCase() : "";
          if (body?.name === "validation_error" && /domain.*not verified/.test(message)) {
            failure = "resend_sender_domain_unverified";
          } else if (body?.name === "validation_error" && message.includes("testing emails")) {
            failure = "resend_testing_recipient_restricted";
          } else if (body?.name === "suspended_api_key") {
            failure = "resend_api_key_suspended";
          } else if (body?.name === "restricted_api_key" || body?.name === "invalid_permission") {
            failure = "resend_sending_permission_denied";
          }
        }
        retryable = response.status === 429 || response.status >= 500;
        if (response.status === 429) delayMs = 60 * 60000;
      }
    } catch {
      // Do not log provider response bodies or customer details.
    }

    if (providerId) {
      await finish({ status: "accepted", provider_id: providerId,
        accepted_at: new Date().toISOString(), last_error: null });
      summary.accepted++;
    } else {
      const failed = !retryable || job.attempts + 1 >= 8;
      await finish({ status: failed ? "failed" : "pending", last_error: failure,
        next_attempt_at: new Date(Date.now() + delayMs).toISOString() });
      if (failed) summary.failed++;
      else summary.deferred++;
    }
  }
  console.info("[Lead notifications] Batch complete:", summary);
  return summary;
}
