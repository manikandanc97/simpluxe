"use client";

import { type Project } from "@/types/project";
import { cn } from "@/lib/utils";
import { ChevronRightIcon } from "@animateicons/react/lucide/chevron-right-icon";
import { AnimatedIcon } from "@/components/ui/animated-icon";
import { m as motion } from "motion/react";
import Image from "next/image";
import { getProjectBadge } from "./project-badge";
import { BrowserMockup } from "./browser-mockup";

interface SelectedWorkProjectItemProps {
  project: Project;
  isActive: boolean;
  onSelect: () => void;
}

export function SelectedWorkProjectItem({
  project,
  isActive,
  onSelect,
}: SelectedWorkProjectItemProps) {
  const badge = getProjectBadge(project);

  return (
    <motion.div
      onClick={onSelect}
      variants={{
        hidden: { opacity: 0, y: 16 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
      }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className={cn(
        "sw-project-item group p-4 sm:p-4.5 rounded-2xl flex flex-col gap-4 sm:gap-4 cursor-pointer transition-colors border relative w-full",
        isActive
          ? "bg-card border-primary/20 shadow-elevated ring-1 ring-primary/20 translate-x-0 lg:translate-x-3 z-10"
          : "bg-transparent border-transparent hover:bg-card/40 hover:border-border hover:translate-x-0 lg:hover:translate-x-1"
      )}
    >
      {/* Top Row: Number, Logo, Details, Chevron */}
      <div className="flex items-center gap-4 sm:gap-4 w-full">
        {/* Project Number */}
        <span 
          className={cn(
            "text-base sm:text-base font-bold w-6 shrink-0 transition-colors",
            isActive ? "text-primary" : "text-slate-400"
          )}
        >
          {project.number}
        </span>

        {/* Authentic Brand Logo */}
        <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 flex items-center justify-center rounded-xl bg-white border border-slate-200/80 p-1.5 shadow-2xs">
          <Image
            src={project.logo || `https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${project.url}&size=128`}
            alt={`${project.name} Logo`}
            width={48}
            height={48}
            className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).srcset = "https://res.cloudinary.com/drdl4pdnx/image/upload/f_auto,q_auto/simpluxe/projects/logo/logo";
            }}
          />
        </div>

        {/* Content Details: Title, Badge, Description, Tags */}
        <div className="flex-1 min-w-0 flex flex-col justify-center gap-1">
          {/* Line 1: Title + Result Badge */}
          <div className="flex flex-wrap items-center gap-2 min-w-0">
            <h3 
              className={cn(
                "font-bold text-sm sm:text-base truncate tracking-tight transition-colors max-w-full",
                isActive ? "text-foreground" : "text-slate-800 group-hover:text-foreground"
              )}
            >
              {project.name}
            </h3>
            
            <span 
              className={cn(
                "text-xs sm:text-xs font-bold px-2 py-0.5 rounded-full inline-flex items-center gap-1 whitespace-nowrap",
                badge.bg,
                badge.text
              )}
            >
              {badge.icon}
              {badge.label}
            </span>
          </div>

          {/* Line 2: Tech Stack (Visible only when Active) */}
          <div className={cn(
            "flex flex-col gap-1 overflow-hidden transition-all duration-300 ease-in-out",
            isActive ? "max-h-24 opacity-100 pt-1" : "max-h-0 opacity-0"
          )}>
            <div className="flex flex-wrap items-center gap-1.5 min-w-0 pt-0.5">
              {project.stack.slice(0, 3).map((tag) => (
                <span 
                  key={tag} 
                  className="text-xs sm:text-xs bg-background/80 text-muted-foreground px-1.5 py-0.5 rounded font-medium whitespace-nowrap"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Chevron Button */}
        <div 
          className={cn(
            "shrink-0 w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300",
            isActive 
              ? "bg-primary border-primary text-white shadow-md" 
              : "bg-white/80 border-slate-100 text-slate-400 group-hover:text-slate-700 shadow-sm group-hover:translate-x-1"
          )}
        >
          <AnimatedIcon icon={ChevronRightIcon} size={15} />
        </div>
      </div>

      {/* Mobile Mockup (Visible only when active and on mobile) */}
      {isActive && (
        <div className="block lg:hidden w-full pt-2 pb-1 h-[350px] xs:h-[400px] sm:h-[450px]">
          <BrowserMockup activeProject={project} />
        </div>
      )}
    </motion.div>
  );
}
