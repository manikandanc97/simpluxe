import "server-only";

import { cache } from "react";
import { io } from "next/cache";
import { z } from "zod";

const GOOGLE_PLACES_ENDPOINT = "https://places.googleapis.com/v1/places";
const GOOGLE_FIELD_MASK = [
  "id",
  "displayName",
  "rating",
  "userRatingCount",
  "googleMapsUri",
  "googleMapsLinks",
  "reviews",
  "attributions",
].join(",");
const REQUEST_TIMEOUT_MS = 10_000;
const MAX_REQUEST_ATTEMPTS = 2;
const RETRY_DELAY_MS = 250;

// Keep the reusable Places integration dormant until the official Business Profile
// integration is ready. No Google request, retry, warning, quota, or billing is used.
const LIVE_GOOGLE_REVIEWS_ENABLED = false;

const httpsUrl = z.string().url().refine((value) => value.startsWith("https://"));
const localizedTextSchema = z.object({
  text: z.string(),
  languageCode: z.string().optional(),
});
const reviewSchema = z.object({
  name: z.string(),
  relativePublishTimeDescription: z.string().optional(),
  text: localizedTextSchema.optional(),
  originalText: localizedTextSchema.optional(),
  rating: z.number().min(1).max(5),
  authorAttribution: z.object({
    displayName: z.string(),
    uri: httpsUrl.optional(),
    photoUri: httpsUrl.optional(),
  }),
  publishTime: z.string().datetime({ offset: true }).optional(),
  flagContentUri: httpsUrl.optional(),
  googleMapsUri: httpsUrl.optional(),
  visitDate: z.object({
    year: z.number().int().min(1),
    month: z.number().int().min(1).max(12),
    day: z.number().int().min(0).max(31).optional(),
  }).optional(),
});
const placeSchema = z.object({
  id: z.string(),
  displayName: localizedTextSchema,
  rating: z.number().min(1).max(5).optional(),
  userRatingCount: z.number().int().nonnegative().optional(),
  googleMapsUri: httpsUrl.optional(),
  googleMapsLinks: z.object({
    placeUri: httpsUrl.optional(),
    writeAReviewUri: httpsUrl.optional(),
    reviewsUri: httpsUrl.optional(),
  }).optional(),
  reviews: z.array(reviewSchema).optional().default([]),
  attributions: z.array(z.object({
    provider: z.string(),
    providerUri: httpsUrl,
  })).optional().default([]),
});

const placeIdSchema = z.string().trim().regex(/^[A-Za-z0-9_-]{10,}$/);

export type GooglePlaceReviews = z.infer<typeof placeSchema>;

export type GoogleReviewsResult =
  | { status: "ready"; place: GooglePlaceReviews; fallbackReviewUrl?: string }
  | { status: "unavailable"; fallbackReviewUrl?: string };

function optionalHttpsUrl(value: string | undefined) {
  const result = httpsUrl.safeParse(value?.trim());
  return result.success ? result.data : undefined;
}

function requestFailureReason(error: unknown) {
  if (error instanceof Error && error.name === "TimeoutError") return "timeout";
  if (error instanceof SyntaxError) return "invalid response";

  const cause = error instanceof Error ? error.cause : undefined;
  if (cause && typeof cause === "object" && "code" in cause && typeof cause.code === "string") {
    return `network (${cause.code})`;
  }

  return "network";
}

function waitBeforeRetry() {
  return new Promise((resolve) => setTimeout(resolve, RETRY_DELAY_MS));
}

async function googleErrorDetails(response: Response, apiKey: string) {
  try {
    const body: unknown = await response.json();
    if (!body || typeof body !== "object" || !("error" in body)) return undefined;

    const error = body.error;
    if (!error || typeof error !== "object") return undefined;

    const status = "status" in error && typeof error.status === "string" ? error.status : undefined;
    const message = "message" in error && typeof error.message === "string"
      ? error.message.replaceAll(apiKey, "[redacted]").replaceAll(/\s+/g, " ").slice(0, 300)
      : undefined;

    return [status, message].filter(Boolean).join(": ") || undefined;
  } catch {
    return undefined;
  }
}

async function requestGoogleReviews(): Promise<GoogleReviewsResult> {
  const fallbackReviewUrl = optionalHttpsUrl(process.env.GOOGLE_REVIEW_URL);

  if (!LIVE_GOOGLE_REVIEWS_ENABLED) {
    return { status: "unavailable", fallbackReviewUrl };
  }

  // Keep Google content out of the prerendered shell and all persistent caches.
  await io();
  const apiKey = process.env.GOOGLE_PLACES_API_KEY?.trim();
  const placeId = placeIdSchema.safeParse(process.env.GOOGLE_PLACE_ID);

  if (!apiKey || !placeId.success) {
    return { status: "unavailable", fallbackReviewUrl };
  }

  for (let attempt = 1; attempt <= MAX_REQUEST_ATTEMPTS; attempt += 1) {
    try {
      const response = await fetch(`${GOOGLE_PLACES_ENDPOINT}/${encodeURIComponent(placeId.data)}?languageCode=en`, {
        cache: "no-store",
        headers: {
          "X-Goog-Api-Key": apiKey,
          "X-Goog-FieldMask": GOOGLE_FIELD_MASK,
        },
        signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
      });

      if (!response.ok) {
        const details = await googleErrorDetails(response, apiKey);
        console.warn(
          `Google Places review request failed with HTTP ${response.status}${details ? ` (${details})` : ""}`
        );
        return { status: "unavailable", fallbackReviewUrl };
      }

      const parsed = placeSchema.safeParse(await response.json());
      if (!parsed.success || parsed.data.id !== placeId.data) {
        const issues = !parsed.success
          ? parsed.error.issues.map((issue) => `${issue.path.join(".") || "response"}: ${issue.code}`).join(", ")
          : "id: mismatch";
        console.warn(`Google Places returned an unexpected review response (${issues})`);
        return { status: "unavailable", fallbackReviewUrl };
      }

      return { status: "ready", place: parsed.data, fallbackReviewUrl };
    } catch (error) {
      const reason = requestFailureReason(error);

      if (attempt < MAX_REQUEST_ATTEMPTS) {
        console.warn(`Google Places review request failed (${reason}); retrying once`);
        await waitBeforeRetry();
        continue;
      }

      console.warn(`Google Places review request failed after retry (${reason})`);
    }
  }

  return { status: "unavailable", fallbackReviewUrl };
}

// React cache only deduplicates identical calls during a single server render. It
// does not persist Google Maps content between requests.
export const getGoogleReviews = cache(requestGoogleReviews);
