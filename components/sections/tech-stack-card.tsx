"use client";

import { TECH_STACK_CARD_COPY } from "@/lib/content/tech-stack";


import { type TechItem } from "@/types/tech";
import { m as motion } from "motion/react";
import { CldImage } from "@/components/ui/cld-image";

import { fadeUp } from "@/lib/motion";

export function TechCard({ tech }: { tech: TechItem }) {
  return (
    <motion.div
      layout
      variants={fadeUp}
      whileHover={{
        y: -4,
        transition: { duration: 0.25, ease: "easeOut" },
      }}
      data-invert={tech.invertInDark ? "true" : undefined}
      style={{
        "--tech-accent": tech.accentColor,
        "--tech-glow": `${tech.accentColor}40`,
        "--tech-glow-subtle": `${tech.accentColor}20`,
      } as React.CSSProperties}
      className="tech-stack-card group relative flex flex-col items-center text-center gap-4 p-4 sm:p-5 rounded-2xl border border-slate-200/80 dark:border-border/70 bg-slate-50 dark:bg-card/70 shadow-xs overflow-hidden h-full"
    >
      {/* Official Brand Logo Squircle Container */}
      <div className="relative w-15 h-15 rounded-2xl bg-white dark:bg-muted/40 border border-slate-200/70 dark:border-border/60 flex items-center justify-center p-4 shadow-2xs group-hover:scale-105 transition-transform duration-300">
        <CldImage
          src={`simpluxe/tech/${tech.slug}`}
          alt={TECH_STACK_CARD_COPY.logoAlt(tech.name)}
          width={38}
          height={38}
          className={`w-full h-full object-contain transition-transform duration-300 group-hover:scale-110 ${
            tech.invertInDark ? "dark:invert dark:brightness-125" : ""
          }`}
        />
      </div>

      <div className="flex flex-col items-center gap-1.5 flex-1 justify-center w-full">
        {/* Brand-Colored Heading */}
        <h3
          className={`type-h3 !text-base font-bold transition-all group-hover:brightness-110 ${
            tech.invertInDark ? "dark:!text-white" : ""
          }`}
          style={{ color: tech.accentColor }}
        >
          {tech.name}
        </h3>

        {/* 2-line Description */}
        <p className="text-xs leading-5 text-muted-foreground text-center line-clamp-2 min-h-10 flex items-center justify-center w-full px-1">
          {tech.description}
        </p>
      </div>

      <div className="flex items-center justify-center mt-auto w-full pt-1">
        <span
          className={`text-xs font-semibold whitespace-nowrap text-center tracking-wide ${
            tech.invertInDark ? "dark:!text-white" : ""
          }`}
          style={{ color: tech.accentColor }}
        >
          {tech.badge}
        </span>
      </div>
    </motion.div>
  );
}

// ─── Main Section ────────────────────────────────────────────────────────────


