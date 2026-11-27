type GoogleReviewRating = 1 | 2 | 3 | 4 | 5;

export interface NormalizedGoogleReview {
  id: string;
  externalReviewId?: string;
  source: "google";
  reviewer: {
    name: string;
    profileImageUrl?: string;
  };
  rating: GoogleReviewRating;
  text: string;
  reviewedAt: string;
  reviewUrl: string;
  languageCode?: string;
}

interface VerifiedGoogleRatingSummary {
  rating: number;
  reviewCount: number;
  verifiedAt: string;
}

export interface GoogleReviewCollection {
  source: "google";
  businessName: string;
  businessProfileUrl?: string;
  ratingSummary?: VerifiedGoogleRatingSummary;
  reviews: readonly NormalizedGoogleReview[];
}

/**
 * Add only genuine Google reviews that Simpluxe has verified and has permission
 * to display. The UI reads this collection directly; no component edits are needed.
 * Keep ratingSummary absent unless its rating and total count are verified together.
 */
export const MANUAL_GOOGLE_REVIEWS: GoogleReviewCollection = {
  source: "google",
  businessName: "Simpluxe Technologies",
  reviews: [],
};

export const GOOGLE_REVIEWS_COPY = {
  eyebrow: "Client perspectives",
  title: "Good work. Genuine feedback.",
  description: "What our clients share about working with us.",
  viewAll: "View on Google",
  writeReview: "Share your experience",
  viewReview: "View review on Google Maps",
  readMore: "Read full review",
  readLess: "Show less",
  published: "Reviewed",
  verificationNotice: "Customer review information is manually verified against its linked Google review before publication.",
  reviewPolicy: "Review policy",
  providerPrefix: "Additional data attribution:",
  sliderLabel: "Google client reviews",
  slideToExplore: "Client reviews",
  previousReview: "Show previous review",
  nextReview: "Show next review",
  pauseAutoplay: "Pause review rotation",
  playAutoplay: "Resume review rotation",
  goToReview: (position: number, total: number) => `Show review ${position} of ${total}`,
  noWrittenReviewsTitle: "Verified reviews are being prepared",
  noWrittenReviewsBody: "We are preparing customer reviews for publication with permission. You can view the current public profile directly on Google.",
  unavailable: "Current review details are temporarily unavailable.",
  attribution: "Google Maps",
  starsLabel: (rating: number) => `${rating} out of 5 stars`,
  reviewsLabel: (count: number) => `${count} ${count === 1 ? "review" : "reviews"}`,
  overallLabel: (rating: number, count: number) => `Google rating: ${rating} out of 5 from ${count} ${count === 1 ? "review" : "reviews"}`,
  reviewCardLabel: (position: number, total: number, reviewer: string) => `Review ${position} of ${total} by ${reviewer}`,
} as const;
