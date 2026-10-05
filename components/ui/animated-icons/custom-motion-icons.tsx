"use client";

import { cn } from "@/lib/utils";
import { m as motion, useAnimation } from "motion/react";
import React, { forwardRef, useCallback, useImperativeHandle, useRef } from "react";
import { type AnimateIconHandle, type CustomIconProps } from "./types";

/* ─────────────────────────────────────────────────────────────
   PaletteIcon (Built with exact AnimateIcons Motion architecture)
───────────────────────────────────────────────────────────── */
export const PaletteIcon = forwardRef<AnimateIconHandle, CustomIconProps>(
  ({ onMouseEnter, onMouseLeave, className, size = 24, duration = 1, isAnimated = true, color, ...props }, ref) => {
    const controls = useAnimation();
    const hasRef = useRef(false);

    useImperativeHandle(ref, () => {
      hasRef.current = true;
      return {
        startAnimation: () => controls.start("animate"),
        stopAnimation: () => controls.start("normal"),
      };
    });

    const handleMouseEnter = useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isAnimated) return;
        if (hasRef.current) {
          onMouseEnter?.(e);
        } else {
          controls.start("animate");
        }
      },
      [controls, isAnimated, onMouseEnter]
    );

    const handleMouseLeave = useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        if (hasRef.current) {
          onMouseLeave?.(e);
        } else {
          controls.start("normal");
        }
      },
      [controls, onMouseLeave]
    );

    const bodyVariants = {
      normal: { rotate: 0, scale: 1 },
      animate: {
        rotate: [0, -14, 14, -6, 0],
        scale: [1, 1.08, 1.04, 1],
        transition: { duration: 0.75 * duration, ease: "easeInOut" as const },
      },
    };

    const dotVariants = {
      normal: { scale: 1, opacity: 1 },
      animate: {
        scale: [1, 1.4, 0.9, 1],
        opacity: [1, 0.7, 1],
        transition: { duration: 0.6 * duration, ease: "easeOut" as const },
      },
    };

    return (
      <div
        className={cn("inline-flex items-center justify-center select-none", className)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ color, ...props.style }}
        {...props}
      >
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          animate={controls}
          initial="normal"
          variants={bodyVariants}
        >
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
          <motion.circle cx="13.5" cy="6.5" r=".5" fill="currentColor" variants={dotVariants} />
          <motion.circle cx="17.5" cy="10.5" r=".5" fill="currentColor" variants={dotVariants} />
          <motion.circle cx="8.5" cy="7.5" r=".5" fill="currentColor" variants={dotVariants} />
          <motion.circle cx="6.5" cy="12.5" r=".5" fill="currentColor" variants={dotVariants} />
        </motion.svg>
      </div>
    );
  }
);
PaletteIcon.displayName = "PaletteIcon";

/* ─────────────────────────────────────────────────────────────
   BriefcaseIcon (Built with exact AnimateIcons Motion architecture)
───────────────────────────────────────────────────────────── */
export const BriefcaseIcon = forwardRef<AnimateIconHandle, CustomIconProps>(
  ({ onMouseEnter, onMouseLeave, className, size = 24, duration = 1, isAnimated = true, color, ...props }, ref) => {
    const controls = useAnimation();
    const hasRef = useRef(false);

    useImperativeHandle(ref, () => {
      hasRef.current = true;
      return {
        startAnimation: () => controls.start("animate"),
        stopAnimation: () => controls.start("normal"),
      };
    });

    const handleMouseEnter = useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isAnimated) return;
        if (hasRef.current) {
          onMouseEnter?.(e);
        } else {
          controls.start("animate");
        }
      },
      [controls, isAnimated, onMouseEnter]
    );

    const handleMouseLeave = useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        if (hasRef.current) {
          onMouseLeave?.(e);
        } else {
          controls.start("normal");
        }
      },
      [controls, onMouseLeave]
    );

    const containerVariants = {
      normal: { y: 0, rotate: 0 },
      animate: {
        y: [0, -3, 1, 0],
        rotate: [0, -4, 4, 0],
        transition: { duration: 0.65 * duration, ease: "easeInOut" as const },
      },
    };

    const handleVariants = {
      normal: { y: 0 },
      animate: {
        y: [0, -2, 0],
        transition: { duration: 0.5 * duration, ease: "easeOut" as const },
      },
    };

    return (
      <div
        className={cn("inline-flex items-center justify-center select-none", className)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ color, ...props.style }}
        {...props}
      >
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          animate={controls}
          initial="normal"
          variants={containerVariants}
        >
          <motion.path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" variants={handleVariants} />
          <rect width="20" height="14" x="2" y="6" rx="2" />
        </motion.svg>
      </div>
    );
  }
);
BriefcaseIcon.displayName = "BriefcaseIcon";
