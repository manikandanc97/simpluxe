"use client";

import { WHAT_WE_BUILD_NAV_COPY } from "@/lib/content/services";

import { m as motion } from "motion/react";
import { MousePointerIcon } from "@animateicons/react/lucide/mouse-pointer-icon";
import { ChevronLeftIcon } from "@animateicons/react/lucide/chevron-left-icon";
import { ChevronRightIcon } from "@animateicons/react/lucide/chevron-right-icon";
import { AnimatedIcon } from "@/components/ui/animated-icon";
import { SERVICES_LIST } from "@/lib/content/services";

interface WhatWeBuildNavProps {
  services: typeof SERVICES_LIST;
  activeIndex: number;
  onSelectIndex: (index: number) => void;
  onPrev: () => void;
  onNext: () => void;
}

export function WhatWeBuildNav({
  services,
  activeIndex,
  onSelectIndex,
  onPrev,
  onNext,
}: WhatWeBuildNavProps) {
  return (
    <div className="wwb-nav flex items-center justify-between max-w-4xl mx-auto px-2 font-satoshi w-full gap-2">
      <div className="hidden sm:flex items-center gap-2 text-muted-foreground">
        <span className="hidden xs:inline text-xs sm:text-sm font-semibold text-muted-foreground select-none">
          {WHAT_WE_BUILD_NAV_COPY.dragToExplore}</span>
        <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-foreground">
          <MousePointerIcon size={12} />
        </div>
        <svg width="28" height="18" viewBox="0 0 35 20" fill="none" className="text-primary -ml-0.5 transform -scale-x-100">
          <path
            d="M32 16 C20 18, 10 12, 4 4"
            stroke="currentColor"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M10 3 L3 4 L6 11"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      </div>

      {/* Dot indicators */}
      <div className="flex items-center gap-0.5 sm:gap-1">
        {services.map((service, i) => (
          <motion.button
            key={i}
            type="button"
            onClick={() => onSelectIndex(i)}
            aria-label={WHAT_WE_BUILD_NAV_COPY.showServiceLabel(service.name)}
            aria-pressed={activeIndex === i}
            className="w-5 h-9 sm:w-6 flex items-center justify-center rounded-full cursor-pointer focus-visible:outline-2 focus-visible:outline-primary"
          >
            <motion.span
              aria-hidden="true"
              animate={{
                width: activeIndex === i ? 18 : 6,
                backgroundColor: activeIndex === i ? "#922F55" : "#CBD5E1",
              }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              className="block h-1.5 rounded-full"
            />
          </motion.button>
        ))}
      </div>

      {/* Nav buttons */}
      <div className="flex items-center gap-2">
        <motion.button
          type="button"
          onClick={onPrev}
          aria-label={WHAT_WE_BUILD_NAV_COPY.previousService}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-foreground/10 shadow-sm text-foreground flex items-center justify-center cursor-pointer group"
        >
          <AnimatedIcon icon={ChevronLeftIcon} size={16} />
        </motion.button>
        <motion.button
          type="button"
          onClick={onNext}
          aria-label={WHAT_WE_BUILD_NAV_COPY.nextService}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-foreground/10 shadow-sm text-foreground flex items-center justify-center cursor-pointer group"
        >
          <AnimatedIcon icon={ChevronRightIcon} size={16} />
        </motion.button>
      </div>
    </div>
  );
}
