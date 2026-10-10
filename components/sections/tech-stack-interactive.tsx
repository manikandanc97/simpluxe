"use client";

import { TECH_STACK_INTERACTIVE_COPY } from "@/lib/content/tech-stack";

import { useMemo, useState } from "react";
import { AnimatePresence, m as motion } from "motion/react";
import { staggerContainer } from "@/lib/motion";
import { CATEGORIES, TECH_STACK, type Category } from "@/lib/content/tech-stack";
import { TechCard } from "./tech-stack-card";
import { TechCategoryTabs } from "./tech-stack/tech-category-tabs";
import { fadeUp, viewportReveal } from "@/lib/motion";

export function TechStackInteractive() {
  const [activeCategory, setActiveCategory] = useState<Category>(CATEGORIES[0]);

  // Counts per category
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const tech of TECH_STACK) {
      counts[tech.category] = (counts[tech.category] || 0) + 1;
    }
    return counts;
  }, []);

  // Filtered list by active category
  const filtered = useMemo(() => {
    return TECH_STACK.filter((tech) => tech.category === activeCategory);
  }, [activeCategory]);

  return (
    <>
      {/* ── Category Pill Tabs with "Tools we love" Handwritten Annotation ──── */}
      <motion.div variants={fadeUp} {...viewportReveal}>
        <TechCategoryTabs
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
          categoryCounts={categoryCounts}
        />
      </motion.div>

      {/* ── Tech Cards Grid ─────────────────────────────────────────────────── */}
      <div
        role="region"
        aria-label={TECH_STACK_INTERACTIVE_COPY.technologiesLabel(activeCategory)}
        className="relative min-h-65"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={staggerContainer(0.08, 0)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px 0px -50px 0px" }}
            exit="hidden"
            className={`grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 ${
              filtered.length <= 5
                ? "lg:grid-cols-5"
                : filtered.length === 6
                ? "lg:grid-cols-6"
                : "lg:grid-cols-6"
            } gap-4.5 sm:gap-4`}
          >
            {filtered.map((tech) => (
              <TechCard key={tech.slug} tech={tech} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
}
