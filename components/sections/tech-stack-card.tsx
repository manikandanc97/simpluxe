import { TECH_STACK_CARD_COPY } from "@/lib/data/tech-stack";


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
      style={{
        "--tech-accent": tech.accentColor,
        "--tech-glow": `${tech.accentColor}40`,
        "--tech-glow-subtle": `${tech.accentColor}20`,
      } as React.CSSProperties}
      className="relative flex flex-col items-center justify-center text-center gap-3 p-4 rounded-2xl border border-slate-200/80 bg-slate-50 shadow-xs overflow-hidden sm:p-5 tech-stack-card group"
    >
      {/* Official Brand Logo Squircle Container */}
      <div className="relative w-14 h-14 rounded-2xl bg-white border border-slate-200/70 flex items-center justify-center p-3.5 shadow-2xs transition-transform duration-300 sm:w-15 sm:h-15 sm:p-4 group-hover:scale-105">
        <CldImage
          src={`simpluxe/tech/${tech.slug}`}
          alt={TECH_STACK_CARD_COPY.logoAlt(tech.name)}
          width={38}
          height={38}
          className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      {/* Brand-Colored Heading */}
      <h3
        className="text-xs font-medium leading-tight transition-all group-hover:brightness-110 sm:text-sm"
        style={{ color: tech.accentColor }}
      >
        {tech.name}
      </h3>
    </motion.div>
  );
}

// ─── Main Section ────────────────────────────────────────────────────────────


