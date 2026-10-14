"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeftIcon } from "@animateicons/react/lucide/chevron-left-icon";
import { ChevronRightIcon } from "@animateicons/react/lucide/chevron-right-icon";
import { m as motion } from "motion/react";
import { AnimatedIcon } from "@/components/ui/animated-icon";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { SERVICES_LIST, SERVICES_SECTION_CONTENT, WHAT_WE_BUILD_NAV_COPY } from "@/lib/content/services";
import { fadeUp, viewportReveal } from "@/lib/motion";
import { WhatWeBuildCard } from "./what-we-build/what-we-build-card";

export function WhatWeBuild() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollPrevious, setCanScrollPrevious] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);
  const displayServices = SERVICES_LIST.slice(0, 8);

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

  const scrollSlider = (direction: "previous" | "next") => {
    const slider = sliderRef.current;
    if (!slider) return;

    const targetIndex = direction === "next"
      ? Math.min(activeIndex + 1, displayServices.length - 1)
      : Math.max(activeIndex - 1, 0);
    const target = slider.children[targetIndex] as HTMLElement | undefined;
    if (!target) return;

    const firstCard = slider.firstElementChild as HTMLElement | null;
    if (!firstCard) return;
    const sliderLeft = slider.getBoundingClientRect().left;
    const gutter = firstCard.getBoundingClientRect().left - sliderLeft + slider.scrollLeft;
    const targetLeft = target.getBoundingClientRect().left - sliderLeft + slider.scrollLeft - gutter;
    const maxScroll = Math.max(0, slider.scrollWidth - slider.clientWidth);
    slider.scrollTo({ left: Math.min(targetLeft, maxScroll), behavior: "smooth" });
  };

  return (
    <Section id="capabilities" className="overflow-hidden bg-background font-satoshi">
      <div className="relative flex flex-col gap-8 lg:gap-10">
        <Container>
          <motion.div variants={fadeUp} {...viewportReveal}>
            <SectionHeader
              title={SERVICES_SECTION_CONTENT.title}
              highlightedText={SERVICES_SECTION_CONTENT.highlightedText}
              description={SERVICES_SECTION_CONTENT.description}
              centered
              maxWidth="max-w-3xl"
            />
          </motion.div>
        </Container>

        <div
          ref={sliderRef}
          id="what-we-build-slider"
          className="wwb-slider-track flex w-full snap-x snap-mandatory gap-5 overflow-x-auto no-scrollbar lg:gap-6"
        >
          {displayServices.map((service, index) => (
            <WhatWeBuildCard key={service.id} service={service} isActive={index === activeIndex} />
          ))}
        </div>

        <Container className="flex items-center justify-between gap-4">
          {/* Left: label + live count */}
          <div className="flex items-center gap-3" aria-live="polite" aria-atomic="true">
            <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block shrink-0" aria-hidden="true" />
            <span className="text-xs font-semibold text-muted-foreground tracking-wide">
              {WHAT_WE_BUILD_NAV_COPY.slideToExplore}
            </span>
            <span className="text-xs font-semibold tabular-nums text-muted-foreground tracking-wide">
              <span className="text-foreground">{String(activeIndex + 1).padStart(2, "0")}</span>
              <span className="mx-1 text-border">/</span>
              {String(displayServices.length).padStart(2, "0")}
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
        </Container>
      </div>
    </Section>
  );
}
