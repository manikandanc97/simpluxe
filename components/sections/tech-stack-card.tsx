"use client";

import { TECH_STACK_CARD_COPY } from "@/lib/content/tech-stack";


import { type TechItem } from "@/types/tech";
import { m as motion } from "motion/react";
import { CldImage } from "@/components/ui/cld-image";

import { fadeUp, hoverLift } from "@/lib/motion";

export function TechCard({ tech }: { tech: TechItem }) {
  return (
    <motion.div
      layout
      variants={fadeUp}
      whileHover={hoverLift}
      className="group relative flex flex-col items-center text-center gap-4 p-4 sm:p-6 rounded-2xl border border-border bg-card/95 shadow-card hover:shadow-elevated transition-colors duration-300 overflow-hidden h-full"
    >
      {/* Official Brand Logo Squircle Container */}
      <div className="relative w-15 h-15 rounded-2xl bg-muted/40 border border-border/60 flex items-center justify-center p-4 shadow-sm group-hover:scale-105 transition-transform duration-300">
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

      <div className="flex flex-col items-center gap-1.5 flex-1 justify-center">
        <h3 className="type-h3 !text-base text-foreground group-hover:text-primary transition-colors">
          {tech.name}
        </h3>

        {/* 2-line Description */}
        <p className="text-xs leading-relaxed text-muted-foreground text-center min-h-9 flex items-center justify-center">
          {tech.description}
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-1.5 mt-auto">
        <span className="px-2.5 py-0.5 rounded-md type-label font-medium bg-muted/50 text-muted-foreground border border-border/50">
          {tech.badge}
        </span>
      </div>
    </motion.div>
  );
}

// ─── Main Section ────────────────────────────────────────────────────────────


