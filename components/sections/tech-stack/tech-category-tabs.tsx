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
    <div className="relative">
      {/* Playful Handwritten Annotation: "Tools we love" + Curved Arrow pointing right to the tab */}
      <div className="absolute -top-12 sm:-top-16 left-1 sm:left-4 md:left-8 lg:left-14 z-20 pointer-events-none select-none flex items-end gap-2 sm:gap-4 scale-90 sm:scale-100 origin-bottom-left">
        <span
          className="font-handwriting text-base sm:text-xl font-bold text-slate-800 dark:text-slate-200 -rotate-10 leading-tight tracking-wide"
        >
          {TECH_CATEGORY_TABS_COPY.tools}<br />{TECH_CATEGORY_TABS_COPY.weLove}</span>
        <div className="ml-0.5 sm:ml-1 text-primary-hover dark:text-rose-400">
          <svg width="34" height="34" viewBox="0 0 38 38" fill="none" className="w-7 h-7 sm:w-9 sm:h-9">
            <path
              d="M 4 4 C 15 4, 28 12, 24 28"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M 16 22 L 24 28 L 26 19"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
        </div>
      </div>

      {/* Tabs Bar */}
      <div
        className="ts-tabs grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-center gap-1.5 sm:gap-2 w-full max-w-lg sm:max-w-none mx-auto"
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
              className={`relative isolate px-3 sm:px-4.5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-primary/50 flex items-center justify-start sm:justify-center gap-1.5 sm:gap-2 w-full sm:w-auto ${
                isActive
                  ? "text-white shadow-lg shadow-primary-hover/25"
                  : "border border-slate-200/80 dark:border-border/70 text-slate-600 dark:text-muted-foreground bg-white dark:bg-card/80 hover:text-slate-900 dark:hover:text-foreground hover:border-slate-300 dark:hover:border-border"
              }`}
            >
              {/* Active tab pill background */}
              {isActive && (
                <motion.span
                  layoutId="tech-active-pill"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-hover via-primary-hover to-primary-hover"
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
                    : "bg-slate-100 dark:bg-muted/60 text-slate-500 dark:text-muted-foreground"
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
