import type { Variants, TargetAndTransition } from "motion/react";

// ==========================================
// MOTION TIMING & EASING SYSTEM
// ==========================================
const ease = {
  // Premium smooth ease-out (fast out, slow in)
  out: [0.16, 1, 0.3, 1] as [number, number, number, number],
};

/**
 * Check if the user prefers reduced motion
 */
export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

const timing = {
  reveal: 0.6, // 0.45s - 0.7s
};

// Keep content visible in the server-rendered HTML and after hydration.
// This avoids mobile browsers waiting for a scroll event before resolving
// IntersectionObserver-based reveal animations.
export const viewportReveal = {
  initial: false as const,
  animate: "visible" as const,
};

// ==========================================
// REUSABLE VARIANTS
// ==========================================

export const staggerContainer = (
  staggerChildren = 0.1,
  delayChildren = 0
): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: timing.reveal,
      ease: ease.out,
    },
  },
};

export const blurFadeUp: Variants = {
  hidden: { opacity: 0, y: 32, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: ease.out,
    },
  },
};

/**
 * Modern slide-in-from-right animations with progressive optical blur.
 * Designed for horizontal sections, card carousels, and side-reveal components.
 */
export const slideFromRight: Variants = {
  hidden: { opacity: 0, x: 80, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.75,
      ease: ease.out,
    },
  },
};

export const slideFromRightTrack: Variants = {
  hidden: { opacity: 0, x: 140, filter: "blur(12px)", scale: 0.98 },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    scale: 1,
    transition: {
      duration: 0.9,
      delay: 0.1,
      ease: ease.out,
    },
  },
};

export const slideFromRightSubtle: Variants = {
  hidden: { opacity: 0, x: 40, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.65,
      delay: 0.2,
      ease: ease.out,
    },
  },
};

/**
 * Child variant for stagger groups. Use with `staggerRevealProps` on the
 * parent and spread this on each sibling `motion.*` child.
 */
export const fadeUpItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: ease.out,
    },
  },
};

/**
 * Ready-to-spread props for a stagger container whose content is visible
 * immediately instead of waiting for a viewport observer.
 *
 * @example
 * <motion.div {...staggerRevealProps()} className="grid ...">
 *   <motion.div variants={fadeUpItem}>...</motion.div>
 *   <motion.div variants={fadeUpItem}>...</motion.div>
 * </motion.div>
 */
export const staggerRevealProps = (
  staggerChildren = 0.1,
  delayChildren = 0
) => ({
  variants: staggerContainer(staggerChildren, delayChildren),
  initial: false as const,
  animate: "visible" as const,
});

// ==========================================
// INTERACTION (HOVER & TAP)
// ==========================================

export const hoverLift: TargetAndTransition = {
  filter: "brightness(1.08)",
  transition: {
    duration: 0.2,
    ease: "easeOut"
  },
};

export const tapScale: TargetAndTransition = {
  scale: 0.97, // Subtle, realistic physical press
  transition: {
    type: "spring",
    stiffness: 600,
    damping: 30,
  },
};
