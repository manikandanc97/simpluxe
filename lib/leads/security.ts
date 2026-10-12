import "server-only";
import { getTurnstileSiteKey } from "./turnstile";
import { SITE } from "@/lib/content/site";

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
    const hostname = new URL(SITE.url).hostname.replace(/^www\./, "");
    const isLocalDevelopment = process.env.NODE_ENV === "development"
      && ["localhost", "127.0.0.1", "::1", "[::1]"].includes(result.hostname ?? "");
    if (!isLocalDevelopment && result.hostname !== hostname && result.hostname !== `www.${hostname}`) {
      return "invalid";
    }
    return "valid";
  } catch {
    return "unavailable";
  }
}
