"use client";

import { WORK_CONTROLS_COPY } from "@/lib/content/projects";

import { useState } from "react";
import { ChevronDownIcon } from "@animateicons/react/lucide/chevron-down-icon";
import { AnimatedIcon, type AnimatedIconName } from "@/components/ui/animated-icon";
import { AnimatedX } from "@/components/ui/animated-icons/convenience-icons";
import { cn } from "@/lib/utils";
import { FILTER_SERVICES } from "@/lib/content/projects";
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

  return (
    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 sm:pb-8 border-b border-surface-elevated">
      {/* ── Filter Pills ── */}
      <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-2 sm:gap-2 w-full sm:w-auto">
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
                "group relative flex items-center justify-center sm:justify-start gap-2 px-3.5 sm:px-4.5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer w-full sm:w-auto",
                isActive
                  ? "bg-gradient-to-r from-primary to-primary text-white shadow-elevated scale-102"
                  : "bg-white/90 hover:bg-white text-muted-foreground border border-surface-elevated hover:border-primary/30 shadow-2xs"
              )}
            >
              {Icon && (
                <AnimatedIcon
                  name={Icon as AnimatedIconName}
                  size={15}
                  className={cn(
                    "transition-transform",
                    isActive ? "text-white" : "text-muted-foreground group-hover:scale-110"
                  )}
                />
              )}
              <span>{tab.label}</span>
              <span
                className={cn(
                  "text-xs font-bold px-2 py-0.5 rounded-full transition-colors",
                  isActive
                    ? "bg-white/20 text-white backdrop-blur-xs"
                    : "bg-surface-elevated text-muted-foreground group-hover:bg-surface-elevated"
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
        {/* Search Pill */}
        <div className="relative flex-1 sm:flex-initial">
          <AnimatedIcon
            name="search"
            size={15}
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
          />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder={WORK_CONTROLS_COPY.searchProjects}
            aria-label={WORK_CONTROLS_COPY.searchProjects2}
            className="w-full sm:w-56 pl-9 pr-4 py-2 bg-background hover:bg-background border border-surface-elevated rounded-full text-xs sm:text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:bg-white transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange("")}
              aria-label={WORK_CONTROLS_COPY.clearSearch}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              <AnimatedX size={14} />
            </button>
          )}
        </div>

        {/* Sort Pill Dropdown */}
        <div className="relative">
          <button
            type="button"
            onClick={() => setIsSortOpen((prev) => !prev)}
            className="bg-white border border-surface-elevated rounded-full px-3.5 sm:px-4.5 py-2 text-xs sm:text-sm font-medium text-foreground flex items-center gap-2 hover:bg-background cursor-pointer shadow-sm transition-all group"
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
            <div className="absolute right-0 top-full mt-2 w-40 bg-white rounded-2xl shadow-xl border border-surface-elevated py-1.5 z-30 animate-in fade-in zoom-in-95 duration-150">
              <button
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
