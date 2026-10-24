"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronDownIcon } from "@animateicons/react/lucide/chevron-down-icon";
import { AnimatedIcon } from "@/components/ui/animated-icon";
import { SearchInput } from "@/components/ui/search-input";
import { INSIGHTS, INSIGHTS_PAGE_COPY } from "@/lib/data/insights";
import { cn } from "@/lib/utils";

export type SortOption = "latest" | "oldest" | "name";

const SORT_OPTIONS: readonly { id: SortOption; label: string }[] = [
  { id: "latest", label: INSIGHTS_PAGE_COPY.latestFirst },
  { id: "oldest", label: INSIGHTS_PAGE_COPY.oldestFirst },
  { id: "name", label: INSIGHTS_PAGE_COPY.alphabetical },
] as const;

const CONTROL_TRIGGER_CLASS =
  "h-10 rounded-xl border border-border bg-white px-3.5 text-xs font-medium text-foreground shadow-2xs transition-all hover:border-primary/40 hover:bg-background focus-visible:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/15 sm:h-10.5 sm:px-4 sm:text-sm";

interface ControlsProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  sortOption: SortOption;
  onSortChange: (option: SortOption) => void;
}

export function Controls({
  activeCategory,
  onCategoryChange,
  searchQuery,
  onSearchChange,
  sortOption,
  onSortChange,
}: ControlsProps) {
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  const sortMenuRef = useRef<HTMLDivElement>(null);
  const categoryMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isSortOpen && !isCategoryOpen) return;

    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target as Node;
      if (isSortOpen && !sortMenuRef.current?.contains(target)) {
        setIsSortOpen(false);
      }
      if (isCategoryOpen && !categoryMenuRef.current?.contains(target)) {
        setIsCategoryOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsSortOpen(false);
        setIsCategoryOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isSortOpen, isCategoryOpen]);

  const categoryOptions = useMemo(() => {
    const counts = new Map<string, number>();
    for (const post of INSIGHTS) {
      counts.set(post.category, (counts.get(post.category) ?? 0) + 1);
    }
    return [
      { id: "all", label: INSIGHTS_PAGE_COPY.allTopics, count: INSIGHTS.length },
      ...Array.from(counts.entries()).map(([name, count]) => ({
        id: name,
        label: name,
        count,
      })),
    ];
  }, []);

  const currentCategory = categoryOptions.find((c) => c.id === activeCategory) ?? categoryOptions[0];
  const currentSort = SORT_OPTIONS.find((s) => s.id === sortOption) ?? SORT_OPTIONS[0];

  const handleCategorySelect = (categoryId: string) => {
    onCategoryChange(categoryId);
    setIsCategoryOpen(false);
  };

  const handleSortSelect = (option: SortOption) => {
    onSortChange(option);
    setIsSortOpen(false);
  };

  return (
    <div className="flex flex-col justify-between gap-4 border-b border-border/70 pb-6 sm:flex-row sm:items-center sm:pb-8">
      {/* Category Dropdown Filter */}
      <div ref={categoryMenuRef} className="relative">
        <button
          type="button"
          onClick={() => {
            setIsCategoryOpen((prev) => !prev);
            setIsSortOpen(false);
          }}
          aria-expanded={isCategoryOpen}
          aria-haspopup="menu"
          className={cn(
            CONTROL_TRIGGER_CLASS,
            "group flex w-full cursor-pointer items-center justify-between gap-3 sm:w-auto"
          )}
        >
          <div className="flex min-w-0 items-center gap-2">
            <span className="shrink-0 text-muted-foreground">{INSIGHTS_PAGE_COPY.topicLabel}</span>
            <span className="truncate font-semibold text-foreground">
              {currentCategory.label}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span
              className={cn(
                "rounded-md px-1.5 py-0.5 text-2xs font-mono font-bold leading-none",
                activeCategory === "all"
                  ? "bg-surface-elevated text-muted-foreground"
                  : "bg-primary text-white"
              )}
            >
              {currentCategory.count}
            </span>
            <AnimatedIcon
              icon={ChevronDownIcon}
              size={14}
              className={cn(
                "text-muted-foreground transition-transform duration-200",
                isCategoryOpen && "rotate-180"
              )}
            />
          </div>
        </button>

        {isCategoryOpen && (
          <div
            role="menu"
            className="absolute left-0 top-full z-30 w-full translate-y-2 animate-in rounded-xl border border-border bg-white py-1.5 shadow-xl fade-in zoom-in-95 duration-150 sm:w-64"
          >
            {categoryOptions.map((option) => {
              const isActive = activeCategory === option.id;
              return (
                <button
                  key={option.id}
                  type="button"
                  role="menuitem"
                  onClick={() => handleCategorySelect(option.id)}
                  className={cn(
                    "flex w-full cursor-pointer items-center justify-between gap-3 px-4 py-2.5 text-xs font-medium transition-colors hover:bg-background sm:text-sm",
                    isActive ? "bg-primary/5 font-bold text-primary" : "text-foreground"
                  )}
                >
                  <span>{option.label}</span>
                  <span
                    className={cn(
                      "rounded-md px-1.5 py-0.5 text-2xs font-mono font-bold leading-none",
                      isActive
                        ? "bg-primary text-white"
                        : "bg-surface-elevated text-muted-foreground"
                    )}
                  >
                    {option.count}
                  </span>
                </button>
              );
            })}
          </div>
        )}
      </div>

      <div className="flex items-center gap-3 sm:gap-4">
        <SearchInput
          value={searchQuery}
          onValueChange={onSearchChange}
          placeholder={INSIGHTS_PAGE_COPY.searchPlaceholder}
          ariaLabel={INSIGHTS_PAGE_COPY.searchAriaLabel}
          clearLabel={INSIGHTS_PAGE_COPY.clearSearch}
          className="min-w-0 flex-1 sm:w-56 sm:flex-none"
        />

        {/* Sort Pill Dropdown */}
        <div ref={sortMenuRef} className="relative">
          <button
            type="button"
            onClick={() => {
              setIsSortOpen((prev) => !prev);
              setIsCategoryOpen(false);
            }}
            aria-expanded={isSortOpen}
            aria-haspopup="menu"
            className={cn(
              CONTROL_TRIGGER_CLASS,
              "group flex shrink-0 cursor-pointer items-center justify-between gap-2"
            )}
          >
            <span>{currentSort.label}</span>
            <AnimatedIcon
              icon={ChevronDownIcon}
              size={14}
              className={cn(
                "text-muted-foreground transition-transform duration-200",
                isSortOpen && "rotate-180"
              )}
            />
          </button>

          {isSortOpen && (
            <div
              role="menu"
              className="absolute right-0 top-full translate-y-2 w-40 bg-white rounded-xl shadow-xl border border-surface-elevated py-1.5 z-30 animate-in fade-in zoom-in-95 duration-150"
            >
              {SORT_OPTIONS.map((option) => (
                <button
                  key={option.id}
                  type="button"
                  role="menuitem"
                  onClick={() => handleSortSelect(option.id)}
                  className={cn(
                    "w-full text-left px-4 py-2 text-xs sm:text-sm font-medium hover:bg-background transition-colors cursor-pointer",
                    sortOption === option.id ? "text-primary font-bold" : "text-muted-foreground"
                  )}
                >
                  {option.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
