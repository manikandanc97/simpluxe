/** Use the owner's real widget in local development and production. */
export function getTurnstileSiteKey() {
  return process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY?.trim();
}
