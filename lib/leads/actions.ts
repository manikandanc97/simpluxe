"use server";

import { LEAD_ACTIONS_COPY } from "@/lib/content/leads";

import { SITE } from "@/lib/content/site";
import { createClient } from "@supabase/supabase-js";
import { after } from "next/server";
import { deliverLeadNotifications } from "./notifications";
import { leadSchema, type LeadState } from "./schema";
import { verifyLeadChallenge } from "./security";
import { randomUUID } from "node:crypto";

export async function submitLead(
  _prevState: LeadState,
  formData: FormData
): Promise<LeadState> {
  const result = await captureLead(formData);
  // Turnstile tokens are single-use. Remount the widget after every failed attempt.
  return result.ok ? result : { ...result, verificationAttempt: randomUUID() };
}

async function captureLead(formData: FormData): Promise<LeadState> {
  const website = formData.get("website");
  if (typeof website === "string" && website.trim()) return { ok: true };
  const rawData: Record<string, unknown> = {
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    email: formData.get("email"),
    phone: formData.get("phone") ?? "",
    company: formData.get("company") || undefined,
    projectType: formData.get("projectType") || undefined,
    goal: formData.get("goal") || undefined,
    stage: formData.get("stage") || undefined,
    description: formData.get("description"),
    source: formData.get("source"),
    blueprintSummary: formData.get("blueprintSummary") || undefined,
    website: formData.get("website") || undefined,
    t: formData.get("t"),
    consent: formData.get("consent") === "true" || formData.get("consent") === "on",
  };

  const parsed = leadSchema.safeParse(rawData);

  if (!parsed.success) {
    const fieldErrors: Record<string, string[]> = {};
    for (const [field, errors] of Object.entries(parsed.error.flatten().fieldErrors)) {
      if (errors) {
        fieldErrors[field] = errors;
      }
    }
    return {
      ok: false,
      message: LEAD_ACTIONS_COPY.pleaseCorrectTheHighlightedErrors,
      fieldErrors,
    };
  }

  const data = parsed.data;

  // Timing is a supplemental heuristic, not proof that the submitter is human.
  const elapsed = Date.now() - data.t;
  if (elapsed < 2000) {
    return { ok: false, message: LEAD_ACTIONS_COPY.submittedTooQuickly };
  }

  const verification = await verifyLeadChallenge(formData.get("cf-turnstile-response"));
  if (verification !== "valid") {
    return {
      ok: false,
      message: verification === "invalid"
        ? LEAD_ACTIONS_COPY.verificationRequired
        : LEAD_ACTIONS_COPY.verificationUnavailable,
    };
  }

  const supabaseUrl = process.env.SUPABASE_URL?.trim()
    || process.env.NEXT_PUBLIC_SUPABASE_URL?.trim();
  const supabaseKey = process.env.SUPABASE_SECRET_KEY?.trim()
    || process.env.SUPABASE_SERVICE_ROLE_KEY?.trim();

  if (!supabaseUrl || !supabaseKey) {
    console.error("[Lead capture] Missing server environment variables:",
      [!supabaseUrl && "SUPABASE_URL or NEXT_PUBLIC_SUPABASE_URL",
        !supabaseKey && "SUPABASE_SECRET_KEY or SUPABASE_SERVICE_ROLE_KEY"]
        .filter(Boolean).join(", "));

    const contactChannels: string[] = [];
    if (SITE.email) contactChannels.push(LEAD_ACTIONS_COPY.emailChannel(SITE.email));
    if (SITE.whatsapp) contactChannels.push(LEAD_ACTIONS_COPY.whatsappChannel);

    const fallbackMessage = contactChannels.length > 0
      ? LEAD_ACTIONS_COPY.unavailableWithContacts(contactChannels)
      : LEAD_ACTIONS_COPY.unavailable;

    return {
      ok: false,
      message: fallbackMessage,
    };
  }

  try {
    const supabase = createClient(supabaseUrl, supabaseKey, {
      auth: { persistSession: false, autoRefreshToken: false },
    });

    // Persisted across server restarts and instances; supplement the bot challenge.
    // This limits ordinary repeated submissions, not simultaneous request floods.
    const { count, error: limitError } = await supabase.from("leads")
      .select("id", { count: "exact", head: true })
      .ilike("email", data.email.replace(/[%_\\]/g, "\\$&"))
      .gte("created_at", new Date(Date.now() - 15 * 60 * 1000).toISOString())
      .abortSignal(AbortSignal.timeout(10000));
    if (limitError) return { ok: false, message: LEAD_ACTIONS_COPY.unavailable };
    if ((count ?? 0) >= 3) return { ok: false, message: LEAD_ACTIONS_COPY.tooManyRequests };

    const { data: savedLead, error } = await supabase.from("leads").insert({
      name: `${data.firstName} ${data.lastName}`,
      email: data.email,
      phone: data.phone,
      company: data.company || null,
      project_type: data.projectType,
      goal: data.goal || null,
      stage: data.stage || null,
      description: data.description,
      source: data.source,
      blueprint_summary: data.blueprintSummary || null,
    }).select("id").abortSignal(AbortSignal.timeout(10000)).single();

    if (error) {
      // Log diagnostic codes in production without credentials or submitted data.
      console.error("[Lead capture] Supabase insert failed:", { code: error.code });
      return {
        ok: false,
        message: LEAD_ACTIONS_COPY.failedToSaveYourSubmissionPlease,
      };
    }

    // The database trigger queues notifications atomically with the saved enquiry.
    // Delivery failures cannot turn a saved enquiry into a failed submission.
    if (savedLead) {
      try {
        after(async () => {
          try {
            await deliverLeadNotifications(savedLead.id);
          } catch {
            console.error("[Lead notifications] Initial delivery deferred; check queue migration and scheduler.");
          }
        });
      } catch {
        console.error("[Lead notifications] Background delivery unavailable; scheduler will retry.");
      }
    }
    return { ok: true };
  } catch (error) {
    console.error("[Lead capture] Submission failed:", {
      name: error instanceof Error ? error.name : "UnknownError",
    });
    return {
      ok: false,
      message: LEAD_ACTIONS_COPY.anUnexpectedErrorOccurredPleaseReach,
    };
  }
}
