"use client";

import { SCROLL_TO_TOP_COPY } from "@/lib/content/ui";

import { useEffect, useState } from "react";
import { m as motion, useScroll, useSpring } from "motion/react";
import { ArrowUpIcon } from "@animateicons/react/lucide/arrow-up-icon";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress, scrollY } = useScroll();
  
  // Smooth out the progress value for the circular indicator
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      // Show button after scrolling down 300px
      setIsVisible(latest > 300);
    });
  }, [scrollY]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ 
        opacity: isVisible ? 1 : 0,
        scale: isVisible ? 1 : 0.8,
        pointerEvents: isVisible ? "auto" : "none",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className="flex flex-col items-center justify-end overflow-hidden"
    >
      <motion.button
        tabIndex={isVisible ? 0 : -1}
        aria-hidden={!isVisible}
        onClick={scrollToTop}
        initial={{ scale: 0.5, y: 20 }}
        animate={{ 
          scale: isVisible ? 1 : 0.5,
          y: isVisible ? 0 : 20,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative z-40 flex items-center justify-center w-10 h-10 sm:w-10.5 sm:h-10.5 rounded-full bg-card shadow-elevated border border-border group mb-2"
        aria-label={SCROLL_TO_TOP_COPY.scrollToTop}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 48 48"
          className="absolute inset-0 -rotate-90 pointer-events-none"
        >
          <circle
            cx="24"
            cy="24"
            r="22"
            fill="none"
            stroke="currentColor"
            className="text-muted border-border"
          />
          <motion.circle
            cx="24"
            cy="24"
            r="22"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            className="text-primary"
            style={{
              pathLength: smoothProgress,
            }}
          />
        </svg>
        <ArrowUpIcon size={18} className="text-foreground group-hover:text-primary transition-colors" />
      </motion.button>
    </motion.div>
  );
}
