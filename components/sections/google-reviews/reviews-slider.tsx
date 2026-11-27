"use client";

import { AnimatedIcon } from "@/components/ui/animated-icon";
import {
  GOOGLE_REVIEWS_COPY,
  type NormalizedGoogleReview,
} from "@/lib/data/google-reviews";
import { cn } from "@/lib/utils";
import { ChevronLeftIcon } from "@animateicons/react/lucide/chevron-left-icon";
import { ChevronRightIcon } from "@animateicons/react/lucide/chevron-right-icon";
import Image from "next/image";
import { useCallback, useRef, useState } from "react";

const SWIPE_THRESHOLD_PX = 40;
const LONG_REVIEW_CHAR_THRESHOLD = 320;

function Stars({ rating }: { rating: number }) {
  return (
    <span className="inline-flex items-center gap-0.5" role="img" aria-label={GOOGLE_REVIEWS_COPY.starsLabel(rating)}>
      {Array.from({ length: 5 }, (_, index) => (
        <svg
          key={index}
          aria-hidden="true"
          viewBox="0 0 20 20"
          className={cn(
            "size-4",
            index < rating ? "fill-amber-400 text-amber-400" : "fill-slate-200 text-slate-200"
          )}
        >
          <path d="M10 1.7 12.5 7l5.8.7-4.2 4 .9 5.7-5-2.8-5 2.8.9-5.7-4.2-4L7.5 7 10 1.7Z" />
        </svg>
      ))}
    </span>
  );
}

function reviewerInitials(name: string) {
  const words = name.trim().split(/\s+/).filter(Boolean);
  const first = words[0]?.charAt(0) ?? "";
  const last = words.length > 1 ? words.at(-1)?.charAt(0) ?? "" : "";
  return `${first}${last}`.toLocaleUpperCase();
}

function formatReviewDate(value: string) {
  return new Intl.DateTimeFormat("en-IN", {
    dateStyle: "medium",
    timeZone: "UTC",
  }).format(new Date(`${value}T00:00:00Z`));
}

function ReviewText({ text }: { text: string }) {
  const [expanded, setExpanded] = useState(false);

  if (text.length <= LONG_REVIEW_CHAR_THRESHOLD) {
    return <p className="text-sm leading-relaxed text-foreground sm:text-base">{text}</p>;
  }

  return (
    <div className="flex flex-col items-start gap-3">
      <p className={cn("text-sm leading-relaxed text-foreground sm:text-base", !expanded && "line-clamp-5")}>
        {text}
      </p>
      <button
        type="button"
        onClick={() => setExpanded((current) => !current)}
        aria-expanded={expanded}
        className="text-sm font-semibold text-primary underline-offset-4 hover:underline focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
      >
        {expanded ? GOOGLE_REVIEWS_COPY.readLess : GOOGLE_REVIEWS_COPY.readMore}
      </button>
    </div>
  );
}

function ReviewCard({
  review,
  position,
  total,
}: {
  review: NormalizedGoogleReview;
  position: number;
  total: number;
}) {
  return (
    <article
      className="w-full shrink-0"
      aria-label={GOOGLE_REVIEWS_COPY.reviewCardLabel(position, total, review.reviewer.name)}
    >
      <div className="flex h-full min-h-64 flex-col justify-between gap-6 rounded-2xl border border-border bg-white p-6 font-satoshi sm:p-8">
        <div className="flex flex-col gap-5">
          <div className="flex items-start justify-between gap-4">
            <div className="flex min-w-0 items-center gap-3.5">
              {review.reviewer.profileImageUrl ? (
                <Image
                  unoptimized
                  src={review.reviewer.profileImageUrl}
                  alt=""
                  width={44}
                  height={44}
                  className="size-11 shrink-0 rounded-full border border-border object-cover"
                />
              ) : (
                <span
                  aria-hidden="true"
                  className="flex size-11 shrink-0 items-center justify-center rounded-full border border-border bg-secondary text-sm font-semibold text-primary"
                >
                  {reviewerInitials(review.reviewer.name)}
                </span>
              )}

              <div className="flex min-w-0 flex-col gap-0.5">
                <span className="truncate text-sm font-semibold text-foreground sm:text-base">
                  {review.reviewer.name}
                </span>
                <time className="text-xs text-muted-foreground" dateTime={review.reviewedAt}>
                  {formatReviewDate(review.reviewedAt)}
                </time>
              </div>
            </div>

            <span translate="no" className="shrink-0 text-xs font-semibold tracking-wide text-muted-foreground">
              {GOOGLE_REVIEWS_COPY.attribution}
            </span>
          </div>

          <Stars rating={review.rating} />
          <ReviewText text={review.text} />
        </div>

        <div className="border-t border-border pt-4 text-xs">
          <a
            className="font-semibold text-primary underline-offset-4 hover:underline focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            href={review.reviewUrl}
            target="_blank"
            rel="noreferrer"
          >
            {GOOGLE_REVIEWS_COPY.viewReview}
          </a>
        </div>
      </div>
    </article>
  );
}

export function ReviewsSlider({ reviews }: { reviews: readonly NormalizedGoogleReview[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);
  const total = reviews.length;
  const hasMultiple = total > 1;
  const safeIndex = activeIndex < total ? activeIndex : 0;

  const goToIndex = useCallback((targetIndex: number) => {
    setActiveIndex(((targetIndex % total) + total) % total);
  }, [total]);

  if (total === 0) return null;

  if (!hasMultiple) {
    return <ReviewCard review={reviews[0]} position={1} total={1} />;
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goToIndex(safeIndex - 1);
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      goToIndex(safeIndex + 1);
    }
  };

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    const touch = event.touches[0];
    if (touch) touchStartRef.current = { x: touch.clientX, y: touch.clientY };
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    const start = touchStartRef.current;
    const touch = event.changedTouches[0];
    touchStartRef.current = null;
    if (!start || !touch) return;

    const deltaX = touch.clientX - start.x;
    const deltaY = touch.clientY - start.y;
    if (Math.abs(deltaX) > SWIPE_THRESHOLD_PX && Math.abs(deltaX) > Math.abs(deltaY)) {
      goToIndex(deltaX < 0 ? safeIndex + 1 : safeIndex - 1);
    }
  };

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label={GOOGLE_REVIEWS_COPY.sliderLabel}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="flex w-full flex-col gap-5 focus-visible:rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
    >
      <div className="overflow-hidden rounded-2xl">
        <div
          id="google-reviews-slider"
          className="flex transition-transform duration-300 ease-out motion-reduce:transition-none"
          style={{ transform: `translateX(-${safeIndex * 100}%)` }}
        >
          {reviews.map((review, index) => (
            <ReviewCard key={review.id} review={review} position={index + 1} total={total} />
          ))}
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5" aria-label={GOOGLE_REVIEWS_COPY.slideToExplore}>
            {reviews.map((review, index) => (
              <button
                key={review.id}
                type="button"
                aria-current={index === safeIndex ? "true" : undefined}
                aria-label={GOOGLE_REVIEWS_COPY.goToReview(index + 1, total)}
                onClick={() => goToIndex(index)}
                className={cn(
                  "h-2 rounded-full transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
                  index === safeIndex ? "w-6 bg-primary" : "w-2 bg-slate-300 hover:bg-slate-400"
                )}
              />
            ))}
          </div>
          <span className="text-xs font-semibold tabular-nums tracking-wide text-muted-foreground" aria-live="polite">
            <span className="text-foreground">{String(safeIndex + 1).padStart(2, "0")}</span>
            <span className="px-1 text-border">/</span>
            {String(total).padStart(2, "0")}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => goToIndex(safeIndex - 1)}
            aria-label={GOOGLE_REVIEWS_COPY.previousReview}
            aria-controls="google-reviews-slider"
            className="flex size-10 items-center justify-center rounded-xl border border-border bg-white text-primary transition-colors hover:border-primary/40 hover:bg-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            <AnimatedIcon icon={ChevronLeftIcon} size={17} />
          </button>
          <button
            type="button"
            onClick={() => goToIndex(safeIndex + 1)}
            aria-label={GOOGLE_REVIEWS_COPY.nextReview}
            aria-controls="google-reviews-slider"
            className="flex size-10 items-center justify-center rounded-xl border border-border bg-white text-primary transition-colors hover:border-primary/40 hover:bg-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            <AnimatedIcon icon={ChevronRightIcon} size={17} />
          </button>
        </div>
      </div>
    </div>
  );
}
