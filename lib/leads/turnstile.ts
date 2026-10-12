/** Cloudflare's public test sitekey is restricted to the Next.js development build. */
export function getTurnstileSiteKey() {
  return process.env.NODE_ENV === "development"
    ? "1x00000000000000000000AA"
    : process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY?.trim();
}
