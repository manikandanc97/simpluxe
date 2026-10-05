"use client";

import { cn } from "@/lib/utils";
import { useRef, useId } from "react";
import { m as motion, Variants } from "motion/react";
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
  const headerRef = useRef<HTMLDivElement>(null);
  // Unique ID per instance
  const uid = useId().replace(/:/g, "-");

  return (
    <motion.div
      ref={headerRef}
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

      <div className={cn("overflow-hidden pb-1 -mb-1 w-full flex flex-wrap items-center gap-1", centered ? "justify-center" : "justify-start")}>
        <motion.h2
          variants={itemVariants}
          data-sh-id={`${uid}-title`}
          className={cn("type-h2 text-foreground will-change-transform flex flex-wrap items-center", centered ? "justify-center" : "justify-start")}
        >
          {typeof title === "string" ? <AnimatedText text={title} el="span" /> : title}
          {highlightedText && (
            <>
              {" "}
              <span className="relative inline-block brand-gradient-text pb-1 ml-2">
                <AnimatedText text={highlightedText} el="span" asTypewriter={true} />
                <motion.svg
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  data-sh-id={`${uid}-svg`}
                  className="absolute -bottom-1 sm:-bottom-1.5 left-0 w-full h-3 text-primary overflow-visible pointer-events-none"
                  viewBox="0 0 200 20"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <motion.path 
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                    d="M4 12 C50 4, 130 5, 195 10" 
                    stroke="currentColor" 
                    strokeWidth="4" 
                    strokeLinecap="round" 
                  />
                  <motion.path 
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                    viewport={{ once: true }}
                    d="M30 15 C90 11, 150 12, 185 14" 
                    stroke="#D23D78" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeOpacity="0.8" 
                  />
                </motion.svg>
              </span>
            </>
          )}
        </motion.h2>
      </div>

      {description && (
        <motion.p
          variants={itemVariants}
          data-sh-id={`${uid}-desc`}
          className="type-lead text-muted-foreground"
        >
          {typeof description === "string" ? <AnimatedText text={description} el="span" staggerDelay={0.015} /> : description}
        </motion.p>
      )}
    </motion.div>
  );
}
