"use client";

import { cn } from "@/lib/utils";
import { useId } from "react";
import type { Variants } from "motion/react";
import { m as motion } from "motion/react";
import { AnimatedText } from "./animated-text";

export interface SectionHeaderProps {
  eyebrow?: string;
  title: React.ReactNode;
  highlightedText?: string;
  description?: React.ReactNode;
  className?: string;
  maxWidth?: string;
  centered?: boolean;
}

const headerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

import { fadeUp, viewportReveal } from "@/lib/motion";

const itemVariants: Variants = fadeUp;

export function SectionHeader({
  eyebrow,
  title,
  highlightedText,
  description,
  className,
  maxWidth = "max-w-3xl",
  centered = false,
}: SectionHeaderProps) {
  const uid = useId().replace(/:/g, "-");

  return (
    <motion.div
      variants={headerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={viewportReveal.viewport}
      className={cn(
        maxWidth,
        "flex flex-col gap-4 font-satoshi",
        centered ? "mx-auto text-center items-center" : "items-start",
        className
      )}
    >
      {eyebrow && (
        <motion.div
          variants={itemVariants}
          data-sh-id={`${uid}-eyebrow`}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/85 backdrop-blur-md border border-border shadow-sm"
        >
          <span className="w-2 h-2 rounded-full bg-primary inline-block" />
          <span className="type-label font-extrabold tracking-wide text-foreground/90 uppercase">
            {typeof eyebrow === "string" ? <AnimatedText text={eyebrow} el="span" /> : eyebrow}
          </span>
        </motion.div>
      )}

      <motion.h2
        variants={itemVariants}
        data-sh-id={`${uid}-title`}
        className={cn("type-h2 text-foreground will-change-transform", centered ? "text-center" : "text-left")}
      >
        {title}
        {highlightedText && (
          <span className="brand-gradient-text"> {highlightedText}</span>
        )}
      </motion.h2>

      {description && (
        <motion.p
          variants={itemVariants}
          data-sh-id={`${uid}-desc`}
          className="text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
