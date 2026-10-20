"use client";

import { useEffect, useState } from "react";
import {
  AnimatePresence,
  m as motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { StaticIcon } from "@/components/ui/static-icon";
import { SCROLL_HUD_COPY } from "@/lib/content/ui";

const RING_RADIUS = 16;
const RING_CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS;

export function ScrollHud() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY, scrollYProgress } = useScroll();
  const prefersReduced = useReducedMotion();

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 24,
    mass: 0.3,
    restDelta: 0.001,
  });

  const strokeDashoffset = useTransform(
    smoothProgress,
    [0, 1],
    [RING_CIRCUMFERENCE, 0]
  );

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setIsVisible(latest > 280);
    });
  }, [scrollY]);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 12 }}
          transition={{
            duration: prefersReduced ? 0.15 : 0.35,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="fixed bottom-20 right-4 z-40 md:bottom-8 md:right-8"
        >
          <button
            type="button"
            onClick={handleScrollToTop}
            aria-label={SCROLL_HUD_COPY.scrollToTop}
            className="group relative flex size-12 items-center justify-center rounded-full border border-border/80 bg-card/90 text-primary shadow-elevated backdrop-blur-xl transition-all duration-300 hover:border-primary/50 hover:bg-card hover:shadow-luxury hover:scale-105 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            {/* Background Track Ring */}
            <svg
              className="absolute inset-0 size-full -rotate-90 pointer-events-none"
              viewBox="0 0 44 44"
              fill="none"
              aria-hidden="true"
            >
              <circle
                cx="22"
                cy="22"
                r={RING_RADIUS}
                stroke="currentColor"
                strokeWidth="2.5"
                className="text-border/60"
              />
              <motion.circle
                cx="22"
                cy="22"
                r={RING_RADIUS}
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                className="text-primary"
                style={{
                  strokeDasharray: RING_CIRCUMFERENCE,
                  strokeDashoffset,
                }}
              />
            </svg>

            {/* Center Arrow Icon */}
            <span className="relative z-10 flex items-center justify-center transition-transform duration-200 group-hover:-translate-y-0.5">
              <StaticIcon name="arrow-up" size={17} className="text-primary" />
            </span>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
