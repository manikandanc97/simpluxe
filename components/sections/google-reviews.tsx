import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { ReviewsSlider } from "@/components/sections/google-reviews/reviews-slider";
import { GOOGLE_REVIEWS_COPY } from "@/lib/data/google-reviews";
import { getGoogleReviews } from "@/lib/google-reviews";

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

function GoogleProfileLink({ href }: { href: string }) {
  return (
    <a
      className="group inline-flex items-center gap-1.5 text-sm font-semibold text-primary underline-offset-4 hover:underline focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {GOOGLE_REVIEWS_COPY.viewAll}
      <span className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
        <ArrowUpRight />
      </span>
    </a>
  );
}

export function GoogleReviews() {
  const collection = getGoogleReviews();
  const summary = collection.ratingSummary;

  return (
    <Section
      id="google-reviews"
      className="border-y border-border/60 bg-slate-50 font-satoshi"
      aria-labelledby="google-reviews-heading"
    >
      <Container className="grid grid-cols-1 items-start gap-8 sm:gap-10 lg:grid-cols-12 lg:items-center lg:gap-12 xl:gap-16">
        <div className="flex flex-col items-start gap-6 lg:col-span-5">
          <SectionHeader
            eyebrow={GOOGLE_REVIEWS_COPY.eyebrow}
            title={GOOGLE_REVIEWS_COPY.title}
            description={GOOGLE_REVIEWS_COPY.description}
            headingId="google-reviews-heading"
            className="items-start text-left"
            maxWidth="max-w-lg"
          />

          <div className="flex w-full flex-col gap-4 rounded-2xl border border-border bg-white p-5 sm:p-6">
            <div className="flex flex-col gap-1">
              <span translate="no" className="text-xs font-semibold tracking-widest text-primary uppercase">
                {GOOGLE_REVIEWS_COPY.attribution}
              </span>
              <p className="text-sm font-semibold text-foreground">{collection.businessName}</p>
            </div>

            {summary ? (
              <div
                className="flex items-center gap-3.5"
                aria-label={GOOGLE_REVIEWS_COPY.overallLabel(summary.rating, summary.reviewCount)}
              >
                <span className="text-4xl font-semibold tracking-tight text-foreground tabular-nums">
                  {summary.rating.toFixed(1)}
                </span>
                <div className="flex flex-col items-start gap-1">
                  <Stars rating={summary.rating} />
                  <span className="text-xs font-medium text-muted-foreground">
                    {GOOGLE_REVIEWS_COPY.reviewsLabel(summary.reviewCount)}
                  </span>
                </div>
              </div>
            ) : null}

            {collection.businessProfileUrl ? (
              <div className="border-t border-border pt-4">
                <GoogleProfileLink href={collection.businessProfileUrl} />
              </div>
            ) : null}
          </div>
        </div>

        <div className="flex min-w-0 w-full flex-col gap-5 lg:col-span-7">
          {collection.reviews.length ? (
            <ReviewsSlider reviews={collection.reviews} />
          ) : (
            <div className="flex min-h-64 flex-col items-start justify-center gap-3 rounded-2xl border border-border bg-white p-6 sm:p-8">
              <h3 className="text-lg font-semibold text-foreground">
                {GOOGLE_REVIEWS_COPY.noWrittenReviewsTitle}
              </h3>
              <p className="max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                {GOOGLE_REVIEWS_COPY.noWrittenReviewsBody}
              </p>
              {collection.businessProfileUrl ? (
                <GoogleProfileLink href={collection.businessProfileUrl} />
              ) : null}
            </div>
          )}

          <div className="flex flex-col items-start gap-1.5 border-t border-border/60 pt-5 text-xs leading-relaxed text-muted-foreground">
            <p>{GOOGLE_REVIEWS_COPY.verificationNotice}</p>
            <a
              className="underline underline-offset-2 hover:text-foreground focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              href={REVIEW_POLICY_URL}
              target="_blank"
              rel="noreferrer"
            >
              {GOOGLE_REVIEWS_COPY.reviewPolicy}
            </a>
          </div>
        </div>
      </Container>
    </Section>
  );
}
