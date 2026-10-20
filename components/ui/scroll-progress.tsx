"use client";

import { m as motion, useReducedMotion, useScroll, useSpring } from "motion/react";
import { cn } from "@/lib/utils";

interface ScrollProgressProps {
  className?: string;
}

export function ScrollProgress({ className }: ScrollProgressProps) {
  const { scrollYProgress } = useScroll();
  const prefersReduced = useReducedMotion();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 260,
    damping: 30,
    mass: 0.2,
    restDelta: 0.0001,
  });

  if (prefersReduced) return null;

  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none fixed inset-x-0 top-0 z-50 h-0.5 w-full bg-transparent",
        className
      )}
    >
      <motion.div
        style={{ scaleX, transformOrigin: "0%" }}
        className="h-full w-full bg-gradient-to-r from-sky-400 via-primary to-cyan-300 shadow-sm"
      />
    </div>
  );
}
