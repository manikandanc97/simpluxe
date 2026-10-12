import "server-only";
import { getTurnstileSiteKey } from "./turnstile";

/** Configured widgets must always be verified on the server, even for direct POSTs. */
export async function verifyLeadChallenge(token: FormDataEntryValue | null): Promise<"valid" | "invalid" | "unavailable"> {
  const siteKey = getTurnstileSiteKey();
  const secret = process.env.TURNSTILE_SECRET_KEY?.trim();
  if (!siteKey || !secret) return "unavailable";
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
    if (!response.ok) return "unavailable";
    const result: { success?: boolean; action?: string; hostname?: string } = await response.json();
    if (result.success !== true || result.action !== "lead") return "invalid";
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
    if (siteUrl && process.env.NODE_ENV === "production") {
      const hostname = new URL(siteUrl).hostname.replace(/^www\./, "");
      if (result.hostname !== hostname && result.hostname !== `www.${hostname}`) {
        return "invalid";
      }
    }
    return "valid";
  } catch {
    return "unavailable";
  }
}
