"use client";

import { TECH_CATEGORY_TABS_COPY } from "@/lib/content/tech-stack";

import { AnimatedIcon } from "@/components/ui/animated-icon";
import { CATEGORIES, CATEGORY_ICONS, type Category } from "@/lib/content/tech-stack";
import { m as motion } from "motion/react";

const SPRING = { type: "spring" as const, stiffness: 340, damping: 28 };

interface TechCategoryTabsProps {
  activeCategory: Category;
  onSelectCategory: (category: Category) => void;
  categoryCounts: Record<string, number>;
}

export function TechCategoryTabs({
  activeCategory,
  onSelectCategory,
  categoryCounts,
}: TechCategoryTabsProps) {
  return (
    <div className="relative sm:mx-auto sm:w-fit sm:max-w-full">
      {/* Tabs Bar */}
      <div
        className="grid grid-cols-2 items-center justify-center gap-1.5 w-full max-w-lg mx-auto sm:flex sm:flex-wrap sm:gap-2 sm:max-w-none ts-tabs"
        role="group"
        aria-label={TECH_CATEGORY_TABS_COPY.technologyCategories}
      >
        {CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat;
          const count = categoryCounts[cat] || 0;
          const Icon = CATEGORY_ICONS[cat];

          return (
            <button
              key={cat}
              aria-pressed={isActive}
              onClick={() => onSelectCategory(cat)}
              id={`tech-tab-${cat.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
              className={`relative isolate px-3 sm:px-4.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-primary/50 flex items-center justify-start sm:justify-center gap-1.5 sm:gap-2 w-full sm:w-auto ${
                isActive
                  ? "text-white shadow-lg shadow-primary-hover/25"
                  : "border border-slate-200/80 dark:border-border/70 text-slate-600 dark:text-muted-foreground bg-slate-50 dark:bg-card/80 hover:text-slate-900 dark:hover:text-foreground hover:bg-slate-100/90 hover:border-slate-300 dark:hover:border-border"
              }`}
            >
              {/* Active tab background */}
              {isActive && (
                <motion.span
                  layoutId="tech-active-pill"
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary-hover via-primary-hover to-primary-hover"
                  style={{ zIndex: -1 }}
                  transition={SPRING}
                />
              )}

              {/* Category Icon */}
              <AnimatedIcon
                name={Icon}
                size={15}
                className={`relative z-10 ${
                  isActive ? "text-white" : "text-slate-500 dark:text-muted-foreground"
                }`}
              />

              {/* Category Name */}
              <span className="relative z-10">{cat}</span>

              {/* Count Pill */}
              <span
                className={`relative z-10 text-xs font-medium px-2 py-0.5 rounded-full hidden sm:inline-block ${
                  isActive
                    ? "bg-white/20 text-white"
                    : "bg-white dark:bg-muted/60 text-slate-500 dark:text-muted-foreground border border-slate-200/60"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
