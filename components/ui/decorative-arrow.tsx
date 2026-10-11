"use client";

import { m as motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

const ARROWS = {
  "hook-down": {
    viewBox: "0 0 48 48",
    curve: "M6 9C24 8 37 23 34 39",
    head: "M29.5 30L34 39L41.5 32.3",
  },
  "down-right": {
    viewBox: "0 0 48 48",
    curve: "M6 8C26 8 38 20 38 38",
    head: "M31 31L38 38L45 31",
  },
  "down-left": {
    viewBox: "0 0 48 48",
    curve: "M42 8C22 8 10 20 10 38",
    head: "M3 31L10 38L17 31",
  },
  "up-right": {
    viewBox: "0 0 48 48",
    curve: "M8 40C8 24 22 10 40 10",
    head: "M33 3L40 10L33 17",
  },
  right: {
    viewBox: "0 0 56 32",
    curve: "M6 24C22 24 28 8 48 8",
    head: "M41 2L48 8L41 14",
  },
  down: {
    viewBox: "0 0 48 64",
    curve: "M14 7C14 27 30 35 30 55",
    head: "M23 48L30 55L37 48",
  },
} as const;

interface DecorativeArrowProps {
  direction?: keyof typeof ARROWS;
  className?: string;
  /** When supplied, preserve the section's draw-in reveal. */
  draw?: boolean;
  delay?: number;
}

export function DecorativeArrow({
  direction = "down-right",
  className,
  draw,
  delay = 0,
}: DecorativeArrowProps) {
  const arrow = ARROWS[direction];
  const reducedMotion = useReducedMotion();
  const reveal = draw !== undefined && !reducedMotion;

  return (
    <svg
      data-slot="decorative-arrow"
      data-direction={direction}
      viewBox={arrow.viewBox}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
      focusable="false"
      className={cn("block h-8 w-8 shrink-0 pointer-events-none overflow-visible", className)}
    >
      {reveal ? (
        <>
          <motion.path
            d={arrow.curve}
            vectorEffect="non-scaling-stroke"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: draw ? 1 : 0 }}
            transition={{ duration: 0.65, delay, ease: "easeInOut" }}
          />
          <motion.path
            d={arrow.head}
            vectorEffect="non-scaling-stroke"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: draw ? 1 : 0, opacity: draw ? 1 : 0 }}
            transition={{ duration: 0.2, delay: delay + 0.65, ease: "easeOut" }}
          />
        </>
      ) : (
        <>
          <path d={arrow.curve} vectorEffect="non-scaling-stroke" />
          <path d={arrow.head} vectorEffect="non-scaling-stroke" />
        </>
      )}
    </svg>
  );
}
