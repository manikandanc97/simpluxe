import "server-only";
import { getTurnstileSiteKey } from "./turnstile";
import { SITE } from "@/lib/data/site";

/** Configured widgets must always be verified on the server, even for direct POSTs. */
export async function verifyLeadChallenge(token: FormDataEntryValue | null): Promise<"valid" | "invalid" | "unavailable"> {
  const siteKey = getTurnstileSiteKey();
  const secret = process.env.TURNSTILE_SECRET_KEY?.trim();
  if (!siteKey || !secret) {
    console.error("[Turnstile] Required server configuration missing.");
    return "unavailable";
  }
  if (/^[123]x0{10}/.test(siteKey) || /^[123]x0{10}/.test(secret)) {
    return "unavailable";
  }
  if (typeof token !== "string" || !token || token.length > 2048) return "invalid";

  try {
    const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      body: new URLSearchParams({ secret, response: token }),
      signal: AbortSignal.timeout(10000),
      cache: "no-store",
    });
    if (!response.ok) {
      console.error("[Turnstile] Siteverify HTTP failure:", response.status);
      return "unavailable";
    }
    const result: { success?: boolean; action?: string; hostname?: string; "error-codes"?: unknown } = await response.json();
    if (result.success !== true) {
      const knownCodes = new Set([
        "missing-input-secret", "invalid-input-secret", "missing-input-response",
        "invalid-input-response", "bad-request", "timeout-or-duplicate", "internal-error",
      ]);
      const codes = Array.isArray(result["error-codes"])
        ? result["error-codes"].filter((code): code is string => typeof code === "string" && knownCodes.has(code))
        : [];
      console.warn("[Turnstile] Siteverify rejected the token:", { codes });
      return codes.some((code) => ["missing-input-secret", "invalid-input-secret", "internal-error"].includes(code))
        ? "unavailable"
        : "invalid";
    }
    if (result.action !== "lead") {
      console.warn("[Turnstile] Siteverify action mismatch.");
      return "invalid";
    }
    const hostname = new URL(SITE.url).hostname.replace(/^www\./, "");
    const isLocalDevelopment = process.env.NODE_ENV === "development"
      && ["localhost", "127.0.0.1", "::1", "[::1]"].includes(result.hostname ?? "");
    if (!isLocalDevelopment && result.hostname !== hostname && result.hostname !== `www.${hostname}`) {
      console.warn("[Turnstile] Siteverify hostname mismatch.");
      return "invalid";
    }
    console.info("[Turnstile] Siteverify accepted the lead token.");
    return "valid";
  } catch {
    console.error("[Turnstile] Siteverify request unavailable.");
    return "unavailable";
  }
}
