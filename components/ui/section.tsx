import { cn } from "@/lib/utils";
import React from "react";
import type { HTMLMotionProps } from "motion/react";
import * as motion from "motion/react-m";

interface SectionProps extends HTMLMotionProps<"section"> {
  children: React.ReactNode;
  padding?: "standard" | "tight" | "none";
}

import { fadeUp, viewportReveal } from "@/lib/motion";

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ children, className, padding = "standard", ...props }, ref) => {
    return (
      <motion.section
        ref={ref}
        {...viewportReveal}
        variants={fadeUp}
        className={cn(
          "relative w-full",
          {
            "py-12 md:py-16 lg:py-24": padding === "standard",
            "py-8 md:py-12 lg:py-16": padding === "tight",
            "py-0": padding === "none",
          },
          className
        )}
        {...props}
      >
        {children}
      </motion.section>
    );
  }
);
Section.displayName = "Section";
