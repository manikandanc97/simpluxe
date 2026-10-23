"use client";

import { WORK_CONTROLS_COPY } from "@/lib/data/projects";

import { useEffect, useRef, useState } from "react";
import { ChevronDownIcon } from "@animateicons/react/lucide/chevron-down-icon";
import { AnimatedIcon, type AnimatedIconName } from "@/components/ui/animated-icon";
import { SearchInput } from "@/components/ui/search-input";
import { cn } from "@/lib/utils";
import { FILTER_SERVICES } from "@/lib/data/projects";
import { type Project } from "@/types/project";

interface WorkControlsProps {
  activeFilter: string;
  onFilterChange: (id: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  sortOption: "latest" | "oldest" | "name";
  onSortChange: (option: "latest" | "oldest" | "name") => void;
  allProjects: Project[];
}

export function WorkControls({
  activeFilter,
  onFilterChange,
  searchQuery,
  onSearchChange,
  sortOption,
  onSortChange,
  allProjects,
}: WorkControlsProps) {
  const [isSortOpen, setIsSortOpen] = useState(false);
  const sortMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isSortOpen) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (!sortMenuRef.current?.contains(event.target as Node)) {
        setIsSortOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsSortOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isSortOpen]);

  return (
    <div className="flex flex-col justify-between gap-4 pb-6 border-b border-border/60 lg:flex-row lg:items-center sm:pb-8">
      {/* ── Filter Pills ── */}
      <div className="grid grid-cols-2 items-center gap-2 w-full sm:flex sm:flex-wrap sm:w-auto">
        {FILTER_SERVICES.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeFilter === tab.id;
          const count = allProjects.filter((p) => p.serviceType === tab.serviceType).length;

          return (
            <button
              key={tab.id}
              aria-pressed={isActive}
              onClick={() => onFilterChange(tab.id)}
              className={cn(
                "group relative flex items-center justify-center sm:justify-start gap-2 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer w-full sm:w-auto",
                isActive
                  ? "bg-primary text-white shadow-sm"
                  : "bg-white/80 hover:bg-white text-muted-foreground border border-border/60 hover:border-primary/25 shadow-2xs hover:shadow-card"
              )}
            >
              {Icon && (
                <AnimatedIcon
                  name={Icon as AnimatedIconName}
                  size={14}
                  className={cn(
                    "transition-transform",
                    isActive ? "text-white" : "text-muted-foreground group-hover:scale-110"
                  )}
                />
              )}
              <span>{tab.label}</span>
              <span
                className={cn(
                  "text-xs font-bold px-1.5 py-0.5 rounded-full transition-colors",
                  isActive
                    ? "bg-white/20 text-white"
                    : "bg-surface-elevated text-muted-foreground"
                )}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* ── Search & Sort Controls ── */}
      <div className="flex items-center gap-4">
        <SearchInput
          value={searchQuery}
          onValueChange={onSearchChange}
          placeholder={WORK_CONTROLS_COPY.searchProjects}
          ariaLabel={WORK_CONTROLS_COPY.searchProjects2}
          clearLabel={WORK_CONTROLS_COPY.clearSearch}
          className="flex-1 sm:w-56 sm:flex-none"
        />

        {/* Sort Pill Dropdown */}
        <div ref={sortMenuRef} className="relative">
          <button
            type="button"
            onClick={() => setIsSortOpen((prev) => !prev)}
            aria-expanded={isSortOpen}
            aria-haspopup="menu"
            className="bg-white border border-surface-elevated rounded-xl px-3.5 py-2 text-xs font-medium text-foreground flex items-center gap-2 cursor-pointer shadow-sm transition-all sm:px-4.5 sm:text-sm hover:bg-background group"
          >
            <span>
              {sortOption === "latest"
                ? WORK_CONTROLS_COPY.latestFirst
                : sortOption === "oldest"
                ? WORK_CONTROLS_COPY.oldestFirst
                : WORK_CONTROLS_COPY.alphabetical}
            </span>
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
            <div role="menu" className="absolute right-0 top-full translate-y-2 w-40 bg-white rounded-xl shadow-xl border border-surface-elevated py-1.5 z-30 animate-in fade-in zoom-in-95 duration-150">
              <button
                type="button"
                role="menuitem"
                onClick={() => {
                  onSortChange("latest");
                  setIsSortOpen(false);
                }}
                className={cn(
                  "w-full text-left px-4 py-2 text-xs sm:text-sm font-medium hover:bg-background transition-colors",
                  sortOption === "latest" ? "text-primary font-bold" : "text-muted-foreground"
                )}
              >
                {WORK_CONTROLS_COPY.latestFirst}</button>
              <button
                type="button"
                role="menuitem"
                onClick={() => {
                  onSortChange("oldest");
                  setIsSortOpen(false);
                }}
                className={cn(
                  "w-full text-left px-4 py-2 text-xs sm:text-sm font-medium hover:bg-background transition-colors",
                  sortOption === "oldest" ? "text-primary font-bold" : "text-muted-foreground"
                )}
              >
                {WORK_CONTROLS_COPY.oldestFirst}</button>
              <button
                type="button"
                role="menuitem"
                onClick={() => {
                  onSortChange("name");
                  setIsSortOpen(false);
                }}
                className={cn(
                  "w-full text-left px-4 py-2 text-xs sm:text-sm font-medium hover:bg-background transition-colors",
                  sortOption === "name" ? "text-primary font-bold" : "text-muted-foreground"
                )}
              >
                {WORK_CONTROLS_COPY.alphabetical}</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
