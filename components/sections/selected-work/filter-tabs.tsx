"use client";

import { cn } from "@/lib/utils";
import { m as motion } from "motion/react";
import { PROJECTS } from "@/lib/content/projects";

const FILTER_TABS = ["Websites", "Web Apps", "Mobile Apps"] as const;

interface FilterTabsListProps {
  activeFilter: string;
  onSelectFilter: (tab: string) => void;
  layoutIdPrefix: string;
}

export function FilterTabsList({
  activeFilter,
  onSelectFilter,
  layoutIdPrefix,
}: FilterTabsListProps) {
  return (
    <div className="flex items-center gap-1 p-1 bg-slate-100/70 backdrop-blur-xl rounded-full border border-slate-200/60 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] w-max max-w-full shadow-inner">
      {FILTER_TABS.map((tab) => {
        const isActiveTab = activeFilter === tab;
        const count = PROJECTS.filter((p) => p.serviceType === tab).length;

        return (
          <button 
            key={tab}
            onClick={() => onSelectFilter(tab)}
            className={cn(
              "relative px-4 py-1.5 sm:px-6 sm:py-2 rounded-full text-xs sm:text-sm font-bold flex items-center gap-2 whitespace-nowrap transition-colors duration-300 cursor-pointer outline-none select-none",
              isActiveTab ? "text-white" : "text-slate-600 hover:text-primary"
            )}
          >
            {isActiveTab && (
              <motion.div 
                layoutId={`activeFilterTab-${layoutIdPrefix}`}
                className="absolute inset-0 bg-primary rounded-full shadow-md z-0"
                transition={{ type: "spring", stiffness: 350, damping: 28 }}
              />
            )}
            <span className="relative z-10">{tab}</span>
            <span 
              className={cn(
                "relative z-10 px-1.5 py-0.2 rounded-full text-xs sm:text-xs font-bold flex items-center justify-center min-w-[20px] transition-all duration-300",
                isActiveTab ? "bg-white/20 text-white shadow-sm" : "bg-white text-slate-500 shadow-sm border border-slate-200/60"
              )}
            >
              {count}
            </span>
          </button>
        );
      })}
    </div>
  );
}


