"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeftIcon } from "@animateicons/react/lucide/chevron-left-icon";
import { ChevronRightIcon } from "@animateicons/react/lucide/chevron-right-icon";
import { m as motion, useReducedMotion } from "motion/react";
import { AnimatedIcon } from "@/components/ui/animated-icon";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { HOME_SERVICES, SERVICES_SECTION_CONTENT, WHAT_WE_BUILD_NAV_COPY } from "@/lib/data/what-we-build";
import { slideFromRight, slideFromRightTrack, slideFromRightSubtle, viewportReveal } from "@/lib/motion";
import { ServiceCard } from "./what-we-build/service-card";
import { useSliderDrag } from "./what-we-build/use-slider-drag";

const DISPLAY_SERVICES = HOME_SERVICES;
const HOVER_DELAY_MS = 0;

export function WhatWeBuild() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  // animatingCard: tracks which card mockup is currently playing
  const [animatingCard, setAnimatingCard] = useState<string>(DISPLAY_SERVICES[0]?.id ?? "");
  const [canScrollPrevious, setCanScrollPrevious] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);
  const prefersReduced = useReducedMotion();

  // Hover delay refs
  const hoverCardRef = useRef<string | null>(null);
  const hoverTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const activeSlideId = DISPLAY_SERVICES[activeIndex]?.id ?? "";

  const updateSliderState = useCallback(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const maxScroll = Math.max(0, slider.scrollWidth - slider.clientWidth);
    setCanScrollPrevious(slider.scrollLeft > 2);
    setCanScrollNext(slider.scrollLeft < maxScroll - 2);

    const sliderLeft = slider.getBoundingClientRect().left;
    const firstCard = slider.firstElementChild as HTMLElement | null;
    if (!firstCard) return;
    const gutter = firstCard.getBoundingClientRect().left - sliderLeft + slider.scrollLeft;
    const nearestIndex = Array.from(slider.children).reduce((nearest, child, index) => {
      const distance = Math.abs((child as HTMLElement).getBoundingClientRect().left - sliderLeft - gutter);
      return distance < nearest.distance ? { index, distance } : nearest;
    }, { index: 0, distance: Number.POSITIVE_INFINITY }).index;

    setActiveIndex(nearestIndex);
  }, []);

  const scrollToIndex = useCallback((targetIndex: number) => {
    const slider = sliderRef.current;
    if (!slider) return;

    const clampedIndex = Math.max(0, Math.min(targetIndex, DISPLAY_SERVICES.length - 1));
    const target = slider.children[clampedIndex] as HTMLElement | undefined;
    if (!target) return;

    const firstCard = slider.firstElementChild as HTMLElement | null;
    if (!firstCard) return;

    const sliderLeft = slider.getBoundingClientRect().left;
    const gutter = firstCard.getBoundingClientRect().left - sliderLeft + slider.scrollLeft;
    const targetLeft = target.getBoundingClientRect().left - sliderLeft + slider.scrollLeft - gutter;
    const maxScroll = Math.max(0, slider.scrollWidth - slider.clientWidth);

    slider.scrollTo({ left: Math.max(0, Math.min(targetLeft, maxScroll)), behavior: "smooth" });
  }, []);

  // Called by the drag hook when momentum resolves to a best-fit card index
  const handleSnap = useCallback((bestIndex: number) => {
    setActiveIndex(bestIndex);
    setAnimatingCard(DISPLAY_SERVICES[bestIndex]?.id ?? "");
  }, []);

  // Drag and momentum handlers from the dedicated hook
  const { onMouseDown: handleMouseDown, onClickCapture: handleSliderClickCapture } = useSliderDrag(
    sliderRef,
    {
      activeIndex,
      scrollToIndex,
      onSnap: handleSnap,
      totalItems: DISPLAY_SERVICES.length,
    },
  );

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    updateSliderState();
    const resizeObserver = new ResizeObserver(updateSliderState);
    resizeObserver.observe(slider);
    slider.addEventListener("scroll", updateSliderState, { passive: true });

    return () => {
      resizeObserver.disconnect();
      slider.removeEventListener("scroll", updateSliderState);
    };
  }, [updateSliderState]);

  // Keep animatingCard in sync with the active slide when no hover is pending
  useEffect(() => {
    if (!hoverCardRef.current) {
      setAnimatingCard(activeSlideId);
    }
  }, [activeSlideId]);

  // Hover enter: immediately switch animation to hovered card
  const handleCardHoverEnter = useCallback((serviceId: string) => {
    if (hoverTimerRef.current) {
      clearTimeout(hoverTimerRef.current);
      hoverTimerRef.current = null;
    }
    hoverCardRef.current = serviceId;
    hoverTimerRef.current = setTimeout(() => {
      if (hoverCardRef.current === serviceId) {
        setAnimatingCard(serviceId);
      }
    }, HOVER_DELAY_MS);
  }, []);

  // Hover leave: cancel timer, restore active slide animation
  const handleCardHoverLeave = useCallback(() => {
    if (hoverTimerRef.current) {
      clearTimeout(hoverTimerRef.current);
      hoverTimerRef.current = null;
    }
    hoverCardRef.current = null;
    setAnimatingCard(activeSlideId);
  }, [activeSlideId]);

  // Cleanup hover timer on unmount
  useEffect(() => {
    return () => {
      if (hoverTimerRef.current) clearTimeout(hoverTimerRef.current);
    };
  }, []);

  const scrollSlider = (direction: "previous" | "next") => {
    const targetIndex = direction === "next"
      ? Math.min(activeIndex + 1, DISPLAY_SERVICES.length - 1)
      : Math.max(activeIndex - 1, 0);
    scrollToIndex(targetIndex);
  };

  return (
    <Section id="capabilities" className="overflow-hidden bg-white font-satoshi">
      <div className="relative flex flex-col gap-8 lg:gap-10">
        <Container>
          <motion.div
            variants={prefersReduced ? undefined : slideFromRight}
            {...viewportReveal}
          >
            <SectionHeader
              eyebrow={SERVICES_SECTION_CONTENT.eyebrow}
              title={SERVICES_SECTION_CONTENT.title}
              highlightedText={SERVICES_SECTION_CONTENT.highlightedText}
              description={SERVICES_SECTION_CONTENT.description}
              centered
              maxWidth="max-w-3xl"
            />
          </motion.div>
        </Container>

        <motion.div
          variants={prefersReduced ? undefined : slideFromRightTrack}
          {...viewportReveal}
        >
          <div
            ref={sliderRef}
            id="what-we-build-slider"
            className="flex w-full snap-x snap-mandatory gap-5 overflow-x-auto cursor-grab select-none lg:gap-6 active:cursor-grabbing wwb-slider-track no-scrollbar"
            onMouseDown={handleMouseDown}
            onClickCapture={handleSliderClickCapture}
          >
            {DISPLAY_SERVICES.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                isCurrentSlide={index === activeIndex}
                isAnimating={service.id === animatingCard}
                onActivate={handleCardHoverEnter}
                onDeactivate={handleCardHoverLeave}
              />
            ))}
          </div>
        </motion.div>

        <Container>
          <motion.div
            variants={prefersReduced ? undefined : slideFromRightSubtle}
            {...viewportReveal}
            className="flex items-center justify-between gap-4"
          >
            {/* Left: label + live count */}
            <div className="flex items-center gap-3" aria-live="polite" aria-atomic="true">
              <span className="size-1.5 rounded-full bg-primary inline-block shrink-0" aria-hidden="true" />
              <span className="text-xs font-semibold text-muted-foreground tracking-wide">
                {WHAT_WE_BUILD_NAV_COPY.slideToExplore}
              </span>
              <span className="text-xs font-semibold tabular-nums text-muted-foreground tracking-wide">
                <span className="text-foreground">{String(activeIndex + 1).padStart(2, "0")}</span>
                <span className="px-1 text-border">/</span>
                {String(DISPLAY_SERVICES.length).padStart(2, "0")}
              </span>
            </div>

            {/* Right: arrows grouped */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => scrollSlider("previous")}
                disabled={!canScrollPrevious}
                aria-label={WHAT_WE_BUILD_NAV_COPY.previousService}
                aria-controls="what-we-build-slider"
                className="flex size-11 items-center justify-center rounded-2xl border border-border bg-white text-primary shadow-sm transition-colors hover:border-primary/40 hover:bg-secondary disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-300 disabled:shadow-none"
              >
                <AnimatedIcon icon={ChevronLeftIcon} size={17} />
              </button>
              <button
                type="button"
                onClick={() => scrollSlider("next")}
                disabled={!canScrollNext}
                aria-label={WHAT_WE_BUILD_NAV_COPY.nextService}
                aria-controls="what-we-build-slider"
                className="flex size-11 items-center justify-center rounded-2xl border border-border bg-white text-primary shadow-sm transition-colors hover:border-primary/40 hover:bg-secondary disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-300 disabled:shadow-none"
              >
                <AnimatedIcon icon={ChevronRightIcon} size={17} />
              </button>
            </div>
          </motion.div>
        </Container>
      </div>
    </Section>
  );
}
