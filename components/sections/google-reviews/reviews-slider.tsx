"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeftIcon } from "@animateicons/react/lucide/chevron-left-icon";
import { ChevronRightIcon } from "@animateicons/react/lucide/chevron-right-icon";
import { AnimatedIcon } from "@/components/ui/animated-icon";
import { GOOGLE_REVIEWS_COPY } from "@/lib/data/google-reviews";
import type { GooglePlaceReviews } from "@/lib/google-reviews";
import { cn } from "@/lib/utils";

type GoogleReview = GooglePlaceReviews["reviews"][number];

const AUTOPLAY_INTERVAL_MS = 6000;
const SWIPE_THRESHOLD_PX = 40;
const LONG_REVIEW_CHAR_THRESHOLD = 320;

function PauseIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" className="size-3.5 fill-current">
      <rect x="3.5" y="3" width="3" height="10" rx="0.75" />
      <rect x="9.5" y="3" width="3" height="10" rx="0.75" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" className="size-3.5 fill-current">
      <path d="M4.5 3.25a.5.5 0 0 1 .76-.43l7.5 4.75a.5.5 0 0 1 0 .86l-7.5 4.75a.5.5 0 0 1-.76-.43V3.25Z" />
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
          className={cn(
            "size-4",
            index < roundedRating ? "fill-amber-400 text-amber-400" : "fill-slate-200 text-slate-200"
          )}
        >
          <path d="M10 1.7 12.5 7l5.8.7-4.2 4 .9 5.7-5-2.8-5 2.8.9-5.7-4.2-4L7.5 7 10 1.7Z" />
        </svg>
      ))}
    </span>
  );
}

function formatPublishedDate(value: string) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return undefined;
  return new Intl.DateTimeFormat("en-IN", {
    dateStyle: "medium",
    timeZone: "Asia/Kolkata",
  }).format(date);
}

function formatVisitDate(visitDate: { year: number; month: number }) {
  return new Intl.DateTimeFormat("en-IN", {
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(Date.UTC(visitDate.year, visitDate.month - 1, 1)));
}

function ReviewText({ text, onToggle }: { text: string; onToggle?: (expanded: boolean) => void }) {
  const [expanded, setExpanded] = useState(false);

  if (text.length <= LONG_REVIEW_CHAR_THRESHOLD) {
    return <p className="text-sm leading-relaxed text-foreground sm:text-base">{text}</p>;
  }

  const handleToggle = () => {
    const next = !expanded;
    setExpanded(next);
    onToggle?.(next);
  };

  return (
    <div className="flex flex-col items-start gap-3">
      <p
        className={cn(
          "text-sm leading-relaxed text-foreground sm:text-base",
          !expanded && "line-clamp-5"
        )}
      >
        {text}
      </p>
      <button
        type="button"
        onClick={handleToggle}
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
  onExpandChange,
}: {
  review: GoogleReview;
  position: number;
  total: number;
  onExpandChange?: (expanded: boolean) => void;
}) {
  const author = review.authorAttribution;
  const reviewText = review.originalText?.text ?? review.text?.text;
  const formattedPublished = review.publishTime ? formatPublishedDate(review.publishTime) : undefined;
  const dateDisplay = review.relativePublishTimeDescription ?? formattedPublished;

  return (
    <article
      className="w-full shrink-0"
      aria-label={GOOGLE_REVIEWS_COPY.reviewCardLabel(position, total, author.displayName)}
    >
      <div className="flex h-full flex-col justify-between gap-6 rounded-2xl border border-border bg-white p-6 font-satoshi sm:p-8">
        <div className="flex flex-col gap-5">
          <div className="flex items-start justify-between gap-4">
            <div className="flex min-w-0 items-center gap-3.5">
              {author.photoUri ? (
                <Image
                  unoptimized
                  src={author.photoUri}
                  alt={author.displayName}
                  width={44}
                  height={44}
                  className="size-11 shrink-0 rounded-full border border-border/60 object-cover"
                />
              ) : (
                <span
                  aria-hidden="true"
                  className="flex size-11 shrink-0 items-center justify-center rounded-full border border-border bg-secondary text-sm font-semibold text-primary"
                >
                  {author.displayName.charAt(0).toLocaleUpperCase()}
                </span>
              )}

              <div className="flex min-w-0 flex-col gap-0.5">
                {author.uri ? (
                  <a
                    className="truncate text-sm font-semibold text-foreground transition-colors hover:text-primary focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring sm:text-base"
                    href={author.uri}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {author.displayName}
                  </a>
                ) : (
                  <span className="truncate text-sm font-semibold text-foreground sm:text-base">
                    {author.displayName}
                  </span>
                )}
                {dateDisplay ? (
                  <span
                    className="text-xs text-muted-foreground"
                    title={formattedPublished ? `${GOOGLE_REVIEWS_COPY.published} ${formattedPublished}` : undefined}
                  >
                    {dateDisplay}
                  </span>
                ) : null}
              </div>
            </div>

            <span translate="no" className="shrink-0 text-xs font-semibold tracking-wide text-muted-foreground">
              {GOOGLE_REVIEWS_COPY.attribution}
            </span>
          </div>

          <Stars rating={review.rating} />

          <div className="flex flex-col gap-3">
            {reviewText ? (
              <ReviewText text={reviewText} onToggle={onExpandChange} />
            ) : (
              <p className="text-sm leading-relaxed text-muted-foreground">{GOOGLE_REVIEWS_COPY.ratingOnlyReview}</p>
            )}
            {review.visitDate ? (
              <p className="text-xs text-muted-foreground">
                {GOOGLE_REVIEWS_COPY.visitDate} {formatVisitDate(review.visitDate)}
              </p>
            ) : null}
          </div>
        </div>

        {review.googleMapsUri || review.flagContentUri ? (
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-border pt-4 text-xs">
            {review.googleMapsUri ? (
              <a
                className="font-semibold text-primary underline-offset-4 hover:underline focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                href={review.googleMapsUri}
                target="_blank"
                rel="noreferrer"
              >
                {GOOGLE_REVIEWS_COPY.viewReview}
              </a>
            ) : null}
            {review.flagContentUri ? (
              <a
                className="text-muted-foreground underline-offset-4 hover:text-foreground hover:underline focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                href={review.flagContentUri}
                target="_blank"
                rel="noreferrer"
              >
                {GOOGLE_REVIEWS_COPY.reportReview}
              </a>
            ) : null}
          </div>
        ) : null}
      </div>
    </article>
  );
}

export function ReviewsSlider({ reviews }: { reviews: GoogleReview[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isUserPaused, setIsUserPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);

  const total = reviews.length;
  const hasMultiple = total > 1;
  const safeIndex = activeIndex < total ? activeIndex : 0;

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReducedMotion(mediaQuery.matches);
    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);
    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  const isAutoplayActive = hasMultiple && !reducedMotion && !isUserPaused && !isHovered && !isFocused && !isExpanded;

  useEffect(() => {
    if (!isAutoplayActive) return;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % total);
    }, AUTOPLAY_INTERVAL_MS);

    return () => window.clearInterval(timer);
  }, [isAutoplayActive, total]);

  const goToIndex = useCallback(
    (targetIndex: number, pauseForInteraction = false) => {
      const normalized = ((targetIndex % total) + total) % total;
      setActiveIndex(normalized);
      if (pauseForInteraction) {
        setIsUserPaused(true);
      }
    },
    [total]
  );

  if (total === 0) return null;

  if (!hasMultiple) {
    return <ReviewCard review={reviews[0]} position={1} total={1} />;
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goToIndex(safeIndex - 1, true);
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      goToIndex(safeIndex + 1, true);
    }
  };

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    const touch = event.touches[0];
    if (!touch) return;
    touchStartRef.current = { x: touch.clientX, y: touch.clientY };
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    const start = touchStartRef.current;
    const touch = event.changedTouches[0];
    touchStartRef.current = null;
    if (!start || !touch) return;

    const deltaX = touch.clientX - start.x;
    const deltaY = touch.clientY - start.y;
    if (Math.abs(deltaX) > SWIPE_THRESHOLD_PX && Math.abs(deltaX) > Math.abs(deltaY)) {
      goToIndex(deltaX < 0 ? safeIndex + 1 : safeIndex - 1, true);
    }
  };

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label={GOOGLE_REVIEWS_COPY.sliderLabel}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocusCapture={() => setIsFocused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setIsFocused(false);
        }
      }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="flex w-full flex-col gap-5 focus-visible:rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
    >
      <div className="overflow-hidden rounded-2xl">
        <div
          id="google-reviews-slider"
          className="flex transition-transform duration-500 ease-out motion-reduce:transition-none"
          style={{ transform: `translateX(-${safeIndex * 100}%)` }}
        >
          {reviews.map((review, index) => (
            <ReviewCard
              key={review.name}
              review={review}
              position={index + 1}
              total={total}
              onExpandChange={(expanded) => setIsExpanded(expanded)}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5" role="tablist" aria-label={GOOGLE_REVIEWS_COPY.slideToExplore}>
            {reviews.map((review, index) => {
              const isCurrent = index === safeIndex;
              return (
                <button
                  key={review.name}
                  type="button"
                  role="tab"
                  aria-selected={isCurrent}
                  aria-label={GOOGLE_REVIEWS_COPY.goToReview(index + 1, total)}
                  onClick={() => goToIndex(index, true)}
                  className={cn(
                    "h-2 rounded-full transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
                    isCurrent ? "w-6 bg-primary" : "w-2 bg-slate-300 hover:bg-slate-400"
                  )}
                />
              );
            })}
          </div>

          <span className="text-xs font-semibold tabular-nums tracking-wide text-muted-foreground" aria-live="polite" aria-atomic="true">
            <span className="text-foreground">{String(safeIndex + 1).padStart(2, "0")}</span>
            <span className="px-1 text-border">/</span>
            {String(total).padStart(2, "0")}
          </span>
        </div>

        <div className="flex items-center gap-2">
          {!reducedMotion ? (
            <button
              type="button"
              onClick={() => setIsUserPaused((paused) => !paused)}
              aria-label={isUserPaused ? GOOGLE_REVIEWS_COPY.playAutoplay : GOOGLE_REVIEWS_COPY.pauseAutoplay}
              aria-pressed={isUserPaused}
              className="flex size-10 items-center justify-center rounded-xl border border-border bg-white text-muted-foreground transition-colors hover:border-primary/40 hover:bg-secondary hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              {isUserPaused ? <PlayIcon /> : <PauseIcon />}
            </button>
          ) : null}

          <button
            type="button"
            onClick={() => goToIndex(safeIndex - 1, true)}
            aria-label={GOOGLE_REVIEWS_COPY.previousReview}
            aria-controls="google-reviews-slider"
            className="flex size-10 items-center justify-center rounded-xl border border-border bg-white text-primary transition-colors hover:border-primary/40 hover:bg-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            <AnimatedIcon icon={ChevronLeftIcon} size={17} />
          </button>

          <button
            type="button"
            onClick={() => goToIndex(safeIndex + 1, true)}
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
