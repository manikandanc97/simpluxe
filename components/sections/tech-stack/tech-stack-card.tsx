import { type TechItem } from "@/types/tech";
import { m as motion } from "motion/react";
import { CloudinaryTechLogo } from "@/components/ui/cloudinary-tech-logo";

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
      <CloudinaryTechLogo slug={tech.slug} className="sm:size-15" />

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


