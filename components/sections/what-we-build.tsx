"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeftIcon } from "@animateicons/react/lucide/chevron-left-icon";
import { ChevronRightIcon } from "@animateicons/react/lucide/chevron-right-icon";
import { m as motion, useReducedMotion } from "motion/react";
import { AnimatedIcon } from "@/components/ui/animated-icon";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { HOME_SERVICES, SERVICES_SECTION_CONTENT, WHAT_WE_BUILD_NAV_COPY } from "@/lib/data/home-services";
import { slideFromRight, slideFromRightTrack, slideFromRightSubtle, viewportReveal } from "@/lib/motion";
import { WhatWeBuildCard } from "./what-we-build/what-we-build-card";

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

  // Drag refs
  const isDraggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragScrollLeftRef = useRef(0);
  const hasDraggedRef = useRef(false);
  const lastClientXRef = useRef(0);
  const lastTimeRef = useRef(0);
  const velocityRef = useRef(0);
  const rafIdRef = useRef<number | null>(null);
  const targetScrollLeftRef = useRef(0);
  const snapRestoreTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const dragCleanupRef = useRef<(() => void) | null>(null);

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

  // Cleanup timers and active listeners on unmount
  useEffect(() => {
    const slider = sliderRef.current;
    return () => {
      if (hoverTimerRef.current) clearTimeout(hoverTimerRef.current);
      if (snapRestoreTimerRef.current) clearTimeout(snapRestoreTimerRef.current);
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
      if (dragCleanupRef.current) {
        dragCleanupRef.current();
        dragCleanupRef.current = null;
      }
      if (slider) {
        slider.style.cursor = "";
        slider.style.userSelect = "";
      }
    };
  }, []);

  // --- Smooth Drag Handlers ---
  const handleMouseDown = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (e.button !== 0) return;
    const slider = sliderRef.current;
    if (!slider) return;

    if (snapRestoreTimerRef.current) {
      clearTimeout(snapRestoreTimerRef.current);
      snapRestoreTimerRef.current = null;
    }
    if (rafIdRef.current) {
      cancelAnimationFrame(rafIdRef.current);
      rafIdRef.current = null;
    }
    if (dragCleanupRef.current) {
      dragCleanupRef.current();
      dragCleanupRef.current = null;
    }

    isDraggingRef.current = true;
    hasDraggedRef.current = false;
    dragStartXRef.current = e.clientX;
    dragScrollLeftRef.current = slider.scrollLeft;
    targetScrollLeftRef.current = slider.scrollLeft;
    lastClientXRef.current = e.clientX;
    lastTimeRef.current = performance.now();
    velocityRef.current = 0;

    // Temporarily disable CSS scroll-snapping so dragging is completely smooth without jitter
    slider.style.scrollSnapType = "none";
    slider.style.scrollBehavior = "auto";
    slider.style.cursor = "grabbing";
    slider.style.userSelect = "none";

    const handleWindowMouseMove = (ev: MouseEvent) => {
      if (!isDraggingRef.current) return;
      const currentSlider = sliderRef.current;
      if (!currentSlider) return;

      const dx = ev.clientX - dragStartXRef.current;
      if (Math.abs(dx) > 4) {
        hasDraggedRef.current = true;
      }

      const now = performance.now();
      const dt = now - lastTimeRef.current;
      if (dt > 8) {
        const currentV = (ev.clientX - lastClientXRef.current) / dt;
        velocityRef.current = 0.6 * currentV + 0.4 * velocityRef.current;
        lastClientXRef.current = ev.clientX;
        lastTimeRef.current = now;
      }

      const newScrollLeft = dragScrollLeftRef.current - dx;
      targetScrollLeftRef.current = newScrollLeft;

      if (!rafIdRef.current) {
        rafIdRef.current = requestAnimationFrame(() => {
          if (sliderRef.current) {
            sliderRef.current.scrollLeft = targetScrollLeftRef.current;
          }
          rafIdRef.current = null;
        });
      }
    };

    const cleanupDragListeners = () => {
      window.removeEventListener("mousemove", handleWindowMouseMove);
      window.removeEventListener("mouseup", handleWindowMouseUp);
      if (dragCleanupRef.current === cleanupDragListeners) {
        dragCleanupRef.current = null;
      }
    };

    const handleWindowMouseUp = () => {
      cleanupDragListeners();

      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
        rafIdRef.current = null;
      }

      const currentSlider = sliderRef.current;
      if (!currentSlider) return;

      isDraggingRef.current = false;
      currentSlider.style.cursor = "";
      currentSlider.style.userSelect = "";

      if (hasDraggedRef.current) {
        // Project position based on drag velocity
        const momentumDistance = velocityRef.current * 180;
        const projectedScrollLeft = currentSlider.scrollLeft - momentumDistance;

        // Find best matching card index for the projected landing position
        const sliderLeft = currentSlider.getBoundingClientRect().left;
        const firstCard = currentSlider.firstElementChild as HTMLElement | null;
        let bestIndex = activeIndex;

        if (firstCard) {
          const gutter = firstCard.getBoundingClientRect().left - sliderLeft + currentSlider.scrollLeft;
          const children = Array.from(currentSlider.children) as HTMLElement[];
          let minDistance = Number.POSITIVE_INFINITY;

          children.forEach((child, idx) => {
            const cardLeft = child.getBoundingClientRect().left - sliderLeft + currentSlider.scrollLeft - gutter;
            const dist = Math.abs(cardLeft - projectedScrollLeft);
            if (dist < minDistance) {
              minDistance = dist;
              bestIndex = idx;
            }
          });
        }

        bestIndex = Math.max(0, Math.min(bestIndex, DISPLAY_SERVICES.length - 1));

        // Smoothly glide to the target card
        scrollToIndex(bestIndex);
        setActiveIndex(bestIndex);
        setAnimatingCard(DISPLAY_SERVICES[bestIndex]?.id ?? "");

        // Re-enable scroll snap after glide settles
        snapRestoreTimerRef.current = setTimeout(() => {
          if (sliderRef.current) {
            sliderRef.current.style.scrollSnapType = "";
            sliderRef.current.style.scrollBehavior = "";
          }
        }, 400);
      } else {
        currentSlider.style.scrollSnapType = "";
        currentSlider.style.scrollBehavior = "";
      }
    };

    dragCleanupRef.current = cleanupDragListeners;
    window.addEventListener("mousemove", handleWindowMouseMove, { passive: true });
    window.addEventListener("mouseup", handleWindowMouseUp);
  }, [activeIndex, scrollToIndex]);

  // Intercept click if the user was dragging
  const handleSliderClickCapture = useCallback((e: React.MouseEvent) => {
    if (hasDraggedRef.current) {
      e.preventDefault();
      e.stopPropagation();
      hasDraggedRef.current = false;
    }
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
              <WhatWeBuildCard
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
