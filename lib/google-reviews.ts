import "server-only";

import {
  MANUAL_GOOGLE_REVIEWS,
  type GoogleReviewCollection,
} from "@/lib/data/google-reviews";
import { z } from "zod";

const httpsUrl = z.string().url().refine((value) => value.startsWith("https://"));
const imageUrl = z.string().refine(
  (value) => value.startsWith("/") || httpsUrl.safeParse(value).success,
  "Profile images must use a local path or HTTPS URL."
);
const isoDate = z.iso.date();

const reviewSchema = z.object({
  id: z.string().trim().min(1),
  externalReviewId: z.string().trim().min(1).optional(),
  source: z.literal("google"),
  reviewer: z.object({
    name: z.string().trim().min(1).max(100),
    profileImageUrl: imageUrl.optional(),
  }),
  rating: z.union([
    z.literal(1),
    z.literal(2),
    z.literal(3),
    z.literal(4),
    z.literal(5),
  ]),
  text: z.string().trim().min(1).max(5000),
  reviewedAt: isoDate,
  reviewUrl: httpsUrl,
  languageCode: z.string().trim().min(2).max(16).optional(),
});

const collectionSchema = z.object({
  source: z.literal("google"),
  businessName: z.string().trim().min(1).max(150),
  businessProfileUrl: httpsUrl.optional(),
  ratingSummary: z.object({
    rating: z.number().min(1).max(5),
    reviewCount: z.number().int().positive(),
    verifiedAt: isoDate,
  }).optional(),
  reviews: z.array(reviewSchema),
});

function optionalHttpsUrl(value: string | undefined) {
  const result = httpsUrl.safeParse(value?.trim());
  return result.success ? result.data : undefined;
}

/**
 * Returns the normalized collection consumed by the UI. A future authorized
 * Business Profile adapter can produce this same shape without changing views.
 */
export function getGoogleReviews(): GoogleReviewCollection {
  const parsed = collectionSchema.safeParse(MANUAL_GOOGLE_REVIEWS);

  if (!parsed.success) {
    throw new Error("Manual Google review data failed validation.");
  }

  return {
    ...parsed.data,
    businessProfileUrl:
      parsed.data.businessProfileUrl ?? optionalHttpsUrl(process.env.GOOGLE_REVIEW_URL),
  };
}
