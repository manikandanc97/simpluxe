"use client";

import * as React from "react";
import { motion, useInView, Variants } from "motion/react";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  text: string | React.ReactNode;
  el?: React.ElementType;
  className?: string;
  once?: boolean;
  staggerDelay?: number;
  /** Typewriter mode: chars appear one-by-one */
  asTypewriter?: boolean;
  delay?: number;
  /**
   * charClassName — applied to each individual word/char span.
   * Use this for gradient text so background-clip:text works on
   * each element independently (avoids the parent-clip inheritance issue).
   */
  charClassName?: string;
  /**
   * priority / useCssAnimation: Renders using lightweight CSS keyframe animations
   * instead of Motion initial="hidden". This ensures the text is immediately
   * visible in SSR HTML and starts animating at FCP without waiting for JS hydration,
   * completely avoiding LCP element render delays.
   */
  priority?: boolean;
  useCssAnimation?: boolean;
}

const defaultItemVariants: Variants = {
  hidden: {
    y: "40%",
    opacity: 0,
    filter: "blur(8px)",
  },
  visible: {
    y: "0%",
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const typewriterCharVariants: Variants = {
  hidden: { opacity: 0, y: 8, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

export function AnimatedText({
  text,
  el: Wrapper = "span",
  className,
  once = true,
  staggerDelay = 0.03,
  asTypewriter = false,
  delay = 0,
  charClassName,
  priority = false,
  useCssAnimation = false,
}: AnimatedTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isPriority = priority || useCssAnimation;
  // initial:true sets the starting state to "in view" so elements already visible
  // at page load (like the hero section) animate in immediately on mount.
  const isInView = useInView(ref, { once, amount: 0, initial: true });

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: asTypewriter ? 0.04 : staggerDelay,
        delayChildren: delay + (asTypewriter ? 0.2 : 0.05),
      },
    },
  };

  // Priority / CSS keyframe mode: eliminates LCP element render delay by avoiding
  // Motion's initial="hidden" SSR inline styles (opacity: 0, blur(8px), translateY).
  // Starts animating immediately during initial paint (FCP) via pure CSS.
  if (isPriority) {
    if (typeof text !== "string") {
      return (
        <Wrapper className={cn("inline-block overflow-hidden", className)}>
          <span
            ref={ref}
            className={cn("inline-block animate-hero-word-reveal", charClassName)}
            style={{ animationDelay: `${delay}s` }}
          >
            {text}
          </span>
        </Wrapper>
      );
    }

    return (
      <Wrapper className={cn("inline-block", className)}>
        <span ref={ref} className="inline-block">
          {text.split(" ").map((word, wordIndex) => (
            <span key={wordIndex} className="inline-block overflow-hidden whitespace-nowrap">
              <span
                className={cn("inline-block animate-hero-word-reveal", charClassName)}
                style={{
                  animationDelay: `${delay + wordIndex * staggerDelay}s`,
                }}
              >
                {word}
              </span>
              <span className="inline-block select-none">&nbsp;</span>
            </span>
          ))}
        </span>
      </Wrapper>
    );
  }

  // Non-string (React node) fallback — animate as a single block
  if (typeof text !== "string") {
    return (
      <Wrapper className={cn("inline-block overflow-hidden", className)}>
        <motion.span
          ref={ref}
          variants={defaultItemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="inline-block"
        >
          {text}
        </motion.span>
      </Wrapper>
    );
  }

  // Typewriter mode: char-by-char
  if (asTypewriter) {
    return (
      <Wrapper className={cn("inline", className)}>
        <motion.span
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="inline-block"
          aria-label={text}
        >
          {text.split("").map((char, i) => (
            <motion.span
              key={i}
              variants={typewriterCharVariants}
              className={cn("inline-block", charClassName)}
              style={char === " " ? { width: "0.3em" } : undefined}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.span>
      </Wrapper>
    );
  }

  // Default: word-reveal mode
  return (
    <Wrapper className={cn("inline-block", className)}>
      <motion.span
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="inline-block"
      >
        {text.split(" ").map((word, wordIndex) => (
          <span key={wordIndex} className="inline-block overflow-hidden whitespace-nowrap">
            <motion.span
              variants={defaultItemVariants}
              className={cn("inline-block", charClassName)}
            >
              {word}
            </motion.span>
            <span className="inline-block select-none">&nbsp;</span>
          </span>
        ))}
      </motion.span>
    </Wrapper>
  );
}
