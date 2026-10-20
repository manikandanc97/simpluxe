"use client";

import { m as motion } from "motion/react";
import { fadeUp, blurFadeUp, viewportReveal } from "@/lib/motion";
import type { ReactNode } from "react";

interface FadeUpWrapperProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "blur";
}

export function FadeUpWrapper({
  children,
  className,
  variant = "blur",
}: FadeUpWrapperProps) {
  return (
    <motion.div
      variants={variant === "blur" ? blurFadeUp : fadeUp}
      {...viewportReveal}
      className={className}
    >
      {children}
    </motion.div>
  );
}
