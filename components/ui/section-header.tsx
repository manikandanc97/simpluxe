import { cn } from "@/lib/utils";
import { useId } from "react";
import type { Variants } from "motion/react";
import * as motion from "motion/react-m";

export interface SectionHeaderProps {
  eyebrow?: string;
  title: React.ReactNode;
  highlightedText?: string;
  description?: React.ReactNode;
  className?: string;
  maxWidth?: string;
  centered?: boolean;
  inverted?: boolean;
  headingId?: string;
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
  inverted = false,
  headingId,
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
        centered ? "self-center text-center items-center" : "items-start",
        className
      )}
    >
      {eyebrow && (
        <motion.div
          variants={itemVariants}
          data-sh-id={`${uid}-eyebrow`}
          className={cn(
            "text-xs font-semibold tracking-widest uppercase",
            inverted ? "text-sky-300" : "text-primary"
          )}
        >
          {eyebrow}
        </motion.div>
      )}

      <motion.h2
        id={headingId}
        variants={itemVariants}
        data-sh-id={`${uid}-title`}
        className={cn(
          "type-h2 will-change-transform",
          inverted ? "text-white" : "text-foreground",
          centered ? "text-center" : "text-left"
        )}
      >
        {title}
        {highlightedText && (
          <span className={inverted ? "text-primary-foreground" : "text-primary"}>
            {" "}
            {highlightedText}
          </span>
        )}
      </motion.h2>

      {description && (
        <motion.p
          variants={itemVariants}
          data-sh-id={`${uid}-desc`}
          className={cn(
            "text-sm leading-relaxed sm:text-base",
            inverted ? "text-sky-100/90" : "text-muted-foreground"
          )}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
