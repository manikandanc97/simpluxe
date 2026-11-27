import { Suspense } from "react";
import { GOOGLE_REVIEWS_COPY } from "@/lib/data/google-reviews";
import { getGoogleReviews, type GooglePlaceReviews } from "@/lib/google-reviews";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { Skeleton } from "@/components/ui/skeleton";
import { ReviewsSlider } from "@/components/sections/google-reviews/reviews-slider";

const REVIEW_POLICY_URL = "https://support.google.com/contributionpolicy/answer/7400114";

function ArrowUpRight() {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" className="size-3.5 shrink-0 fill-none stroke-current">
      <path d="M4 12 12 4M6 4h6v6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Stars({ rating }: { rating: number }) {
  const roundedRating = Math.round(rating);

  return (
    <span className="inline-flex items-center gap-0.5" role="img" aria-label={GOOGLE_REVIEWS_COPY.starsLabel(rating)}>
      {Array.from({ length: 5 }, (_, index) => (
        <svg
          key={index}
          aria-hidden="true"
          viewBox="0 0 20 20"
          className={index < roundedRating ? "size-4 fill-amber-400 text-amber-400" : "size-4 fill-slate-200 text-slate-200"}
        >
          <path d="M10 1.7 12.5 7l5.8.7-4.2 4 .9 5.7-5-2.8-5 2.8.9-5.7-4.2-4L7.5 7 10 1.7Z" />
        </svg>
      ))}
    </span>
  );
}

function ReviewLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      className="group inline-flex items-center gap-1.5 text-sm font-semibold text-primary underline-offset-4 hover:underline focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {children}
      <span className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
        <ArrowUpRight />
      </span>
    </a>
  );
}

function ReviewActions({ viewUrl, writeUrl }: { viewUrl?: string; writeUrl?: string }) {
  if (!viewUrl && !writeUrl) return null;

  return (
    <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
      {viewUrl ? <ReviewLink href={viewUrl}>{GOOGLE_REVIEWS_COPY.viewAll}</ReviewLink> : null}
      {writeUrl ? <ReviewLink href={writeUrl}>{GOOGLE_REVIEWS_COPY.writeReview}</ReviewLink> : null}
    </div>
  );
}

function RatingSummary({
  place,
  viewUrl,
  writeUrl,
}: {
  place: GooglePlaceReviews;
  viewUrl?: string;
  writeUrl?: string;
}) {
  const hasRating = place.rating !== undefined && place.userRatingCount !== undefined;

  return (
    <div className="flex w-full flex-col gap-5 rounded-2xl border border-border bg-white p-5 sm:p-6">
      <div className="flex flex-col items-start gap-1">
        <span translate="no" className="text-xs font-semibold tracking-widest text-primary uppercase">
          {GOOGLE_REVIEWS_COPY.attribution}
        </span>
        <p className="text-sm font-semibold text-foreground">{place.displayName.text}</p>
      </div>

      {hasRating ? (
        <div
          className="flex items-center gap-3.5"
          aria-label={GOOGLE_REVIEWS_COPY.overallLabel(place.rating!, place.userRatingCount!)}
        >
          <span className="text-4xl font-semibold tracking-tight text-foreground tabular-nums">
            {place.rating!.toFixed(1)}
          </span>
          <div className="flex flex-col items-start gap-1">
            <Stars rating={place.rating!} />
            <span className="text-xs font-medium text-muted-foreground">
              {GOOGLE_REVIEWS_COPY.reviewsLabel(place.userRatingCount!)}
            </span>
          </div>
        </div>
      ) : null}

      {viewUrl || writeUrl ? (
        <div className="border-t border-border pt-4">
          <ReviewActions viewUrl={viewUrl} writeUrl={writeUrl} />
        </div>
      ) : null}
    </div>
  );
}

function EmptyReviewsCard({ place }: { place: GooglePlaceReviews }) {
  const hasRating = place.rating !== undefined && place.userRatingCount !== undefined;

  return (
    <div className="flex w-full flex-col gap-4 rounded-2xl border border-border bg-white p-6 font-satoshi sm:p-8">
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-col gap-1">
          <span translate="no" className="text-xs font-semibold tracking-widest text-primary uppercase">
            {GOOGLE_REVIEWS_COPY.attribution}
          </span>
          <h3 className="text-lg font-semibold text-foreground">{GOOGLE_REVIEWS_COPY.noWrittenReviewsTitle}</h3>
        </div>
        {hasRating ? <Stars rating={place.rating!} /> : null}
      </div>

      <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
        {GOOGLE_REVIEWS_COPY.noWrittenReviewsBody}
      </p>
    </div>
  );
}

function ReviewsShell({ children }: { children: React.ReactNode }) {
  return (
    <Section
      id="google-reviews"
      className="overflow-hidden border-y border-border/60 bg-background font-satoshi"
      aria-labelledby="google-reviews-heading"
    >
      <Container className="flex flex-col gap-8 sm:gap-10">{children}</Container>
    </Section>
  );
}

function GoogleReviewsSkeleton() {
  return (
    <ReviewsShell>
      <div
        role="status"
        aria-label={GOOGLE_REVIEWS_COPY.loading}
        className="grid grid-cols-1 items-start gap-8 sm:gap-10 lg:grid-cols-12 lg:items-center lg:gap-12 xl:gap-16"
      >
        <div className="flex flex-col items-start gap-6 lg:col-span-5">
          <div className="flex w-full flex-col gap-4">
            <Skeleton className="h-4 w-36" />
            <Skeleton className="h-10 w-full max-w-sm" />
            <Skeleton className="h-5 w-full max-w-xs" />
          </div>
          <Skeleton className="h-44 w-full rounded-2xl" />
        </div>
        <div className="w-full lg:col-span-7">
          <Skeleton className="h-64 w-full rounded-2xl" />
        </div>
      </div>
    </ReviewsShell>
  );
}

function ReviewDisclosures({ place }: { place: GooglePlaceReviews }) {
  return (
    <div className="flex flex-col items-start gap-1.5 border-t border-border/60 pt-6 text-xs leading-relaxed text-muted-foreground">
      {place.reviews.length ? <p>{GOOGLE_REVIEWS_COPY.orderingNotice}</p> : null}
      <p>
        {GOOGLE_REVIEWS_COPY.verificationNotice}{" "}
        <a
          className="underline underline-offset-2 hover:text-foreground focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          href={REVIEW_POLICY_URL}
          target="_blank"
          rel="noreferrer"
        >
          {GOOGLE_REVIEWS_COPY.reviewPolicy}
        </a>
      </p>
      {place.attributions.length ? (
        <p className="flex flex-wrap gap-2">
          <span>{GOOGLE_REVIEWS_COPY.providerPrefix}</span>
          {place.attributions.map((attribution) => (
            <a
              key={attribution.providerUri}
              className="underline underline-offset-2 hover:text-foreground focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              href={attribution.providerUri}
              target="_blank"
              rel="noreferrer"
            >
              {attribution.provider}
            </a>
          ))}
        </p>
      ) : null}
    </div>
  );
}

async function GoogleReviewsContent() {
  const result = await getGoogleReviews();

  if (result.status === "unavailable") {
    if (!result.fallbackReviewUrl) return null;

    return (
      <ReviewsShell>
        <div className="grid grid-cols-1 items-start gap-8 sm:gap-10 lg:grid-cols-12 lg:items-center lg:gap-12 xl:gap-16">
          <div className="flex flex-col items-start gap-6 lg:col-span-5">
            <SectionHeader
              eyebrow={GOOGLE_REVIEWS_COPY.eyebrow}
              title={GOOGLE_REVIEWS_COPY.title}
              description={GOOGLE_REVIEWS_COPY.description}
              headingId="google-reviews-heading"
              className="items-start text-left"
              maxWidth="max-w-lg"
            />
          </div>
          <div className="w-full lg:col-span-7">
            <div className="flex flex-col items-start gap-5 rounded-2xl border border-border bg-white p-6 sm:p-8">
              <p className="text-sm text-muted-foreground">{GOOGLE_REVIEWS_COPY.unavailable}</p>
              <ReviewActions viewUrl={result.fallbackReviewUrl} writeUrl={result.fallbackReviewUrl} />
            </div>
          </div>
        </div>
      </ReviewsShell>
    );
  }

  const { place } = result;
  const viewUrl = place.googleMapsLinks?.reviewsUri ?? place.googleMapsUri ?? result.fallbackReviewUrl;
  const writeUrl = place.googleMapsLinks?.writeAReviewUri ?? result.fallbackReviewUrl;

  return (
    <ReviewsShell>
      <div className="grid grid-cols-1 items-start gap-8 sm:gap-10 lg:grid-cols-12 lg:items-center lg:gap-12 xl:gap-16">
        <div className="flex flex-col items-start gap-6 sm:gap-7 lg:col-span-5">
          <SectionHeader
            eyebrow={GOOGLE_REVIEWS_COPY.eyebrow}
            title={GOOGLE_REVIEWS_COPY.title}
            description={GOOGLE_REVIEWS_COPY.description}
            headingId="google-reviews-heading"
            className="items-start text-left"
            maxWidth="max-w-lg"
          />
          <RatingSummary place={place} viewUrl={viewUrl} writeUrl={writeUrl} />
        </div>

        <div className="min-w-0 w-full lg:col-span-7">
          {place.reviews.length ? (
            <ReviewsSlider reviews={place.reviews} />
          ) : (
            <EmptyReviewsCard place={place} />
          )}
        </div>
      </div>

      <ReviewDisclosures place={place} />
    </ReviewsShell>
  );
}

export function GoogleReviews() {
  return (
    <Suspense fallback={<GoogleReviewsSkeleton />}>
      <GoogleReviewsContent />
    </Suspense>
  );
}
