"use client";

import { SELECTED_WORK_INTERACTIVE_COPY } from "@/lib/content/projects";

import { PROJECTS, SELECTED_WORK_CONTENT } from "@/lib/content/projects";
import { ArrowRightIcon } from "@animateicons/react/lucide/arrow-right-icon";
import { AnimatedIcon } from "@/components/ui/animated-icon";
import { AnimatePresence, m as motion } from "motion/react";
import Link from "next/link";
import { useSelectedWork } from "@/hooks/use-selected-work";
import { BrowserMockup } from "./selected-work/browser-mockup";
import { FilterTabsList } from "./selected-work/filter-tabs";
import { SelectedWorkProjectItem } from "./selected-work/project-item";

export function SelectedWorkInteractive() {
  const {
    activeFilter,
    setActiveFilter,
    filteredProjects,
    displayProjects,
    activeId,
    setActiveId,
    activeProject,
  } = useSelectedWork();

  return (
    <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch mt-6">
      {/* ── LEFT COLUMN: Project List ── */}
      <div className="lg:col-span-5 flex flex-col gap-6 min-w-0">
        {/* Mobile Filter & Nav (Visible only on < lg) */}
        <div className="sw-filter flex lg:hidden w-full mb-2">
          <div className="flex items-center justify-start gap-4 relative z-10 w-full overflow-hidden">
            <FilterTabsList
              activeFilter={activeFilter}
              onSelectFilter={setActiveFilter}
              layoutIdPrefix="mobile"
            />
          </div>
        </div>

        {/* Project List: Max 3 Cards on Home Page */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1, delayChildren: 0.1 }
              }
            }}
            className="flex flex-col gap-4"
          >
            {displayProjects.map((project) => (
              <SelectedWorkProjectItem
                key={project.id}
                project={project}
                isActive={project.id === activeId}
                onSelect={() => setActiveId(project.id)}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* List Footer */}
        <div className="flex items-center justify-between mt-auto">
          <Link 
            href="/work" 
            className="inline-flex items-center gap-2 text-sm font-bold text-foreground hover:text-primary transition-colors group"
          >
            {SELECTED_WORK_CONTENT.archiveLinkText} 
            <AnimatedIcon icon={ArrowRightIcon} size={15} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <span className="text-sm font-medium text-slate-400">
            {filteredProjects.length} {SELECTED_WORK_INTERACTIVE_COPY.of}{PROJECTS.length} {SELECTED_WORK_CONTENT.buildsTextSuffix}
          </span>
        </div>
      </div>

      {/* ── RIGHT COLUMN: Browser Mockup & Live Hero View ── */}
      <div className="hidden lg:flex lg:col-span-7 flex-col gap-4 relative pt-2 lg:pt-0 min-w-0">
        
        {/* Top Header: Filter Tabs & Live Client Site Badge + Prev/Next Arrows */}
        <div className="sw-filter flex flex-wrap items-center justify-between gap-4 relative z-10">
          
          {/* Left: Filter Tabs */}
          <FilterTabsList
            activeFilter={activeFilter}
            onSelectFilter={setActiveFilter}
            layoutIdPrefix="desktop"
          />

          {/* Right: Live Client Site Badge & Nav Buttons */}
          <div className="flex items-center gap-4 sm:gap-6 shrink-0">
            {/* Handwritten "Live Client Site" badge positioned left of arrows */}
            <div className="sw-live-badge hidden sm:flex pointer-events-none items-center gap-2 z-30 select-none">
              <span className="font-handwriting text-lg text-primary font-bold -rotate-2 tracking-wide drop-shadow-sm">
                {SELECTED_WORK_CONTENT.liveClientSiteText}
              </span>
              <svg width="42" height="34" viewBox="0 0 42 34" fill="none" className="text-primary -ml-1 drop-shadow-sm">
                <path d="M4 4 C 14 10, 24 18, 30 26" stroke="currentColor" strokeLinecap="round" fill="none" />
                <path d="M22 28 L 30 26 L 32 18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
            </div>
          </div>
        </div>

        {/* ── Browser Window Mockup Frame ── */}
        <div className="sw-browser flex-1 relative min-h-100">
          <div className="sw-browser-parallax absolute inset-0 w-full h-full">
            {activeProject && <BrowserMockup activeProject={activeProject} />}
          </div>
        </div>

      </div>
    </div>
  );
}
