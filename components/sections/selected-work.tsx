"use client";

import { PROJECTS } from "@/lib/data/projects";
import { ArrowRightIcon } from "@animateicons/react/lucide/arrow-right-icon";
import { AnimatedIcon } from "@/components/ui/animated-icon";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useRef } from "react";
import { SectionHeader } from "@/components/ui/section-header";
import { useSelectedWork } from "@/hooks/use-selected-work";
import { BrowserMockup } from "./selected-work/browser-mockup";
import { FilterTabsList } from "./selected-work/filter-tabs";
import { SelectedWorkProjectItem } from "./selected-work/project-item";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";

export function SelectedWork() {
  const containerRef = useRef<HTMLElement>(null);
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
    <Section 
      id="selected-work" 
      ref={containerRef}
      className="font-satoshi selection:bg-primary/20 selection:text-primary overflow-hidden"
    >
      {/* ── Background Decorative Elements ── */}
      <div 
        className="absolute left-0 top-0 bottom-0 w-full max-w-96 pointer-events-none opacity-40 z-0"
        style={{
          backgroundImage: "radial-gradient(#94A3B8 1.4px, transparent 1.4px)",
          backgroundSize: "20px 20px",
          maskImage: "linear-gradient(to right, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0) 100%)",
          WebkitMaskImage: "linear-gradient(to right, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0) 100%)",
        }}
      />

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
           
          {/* ── LEFT COLUMN: Heading & Project List ── */}
          <div className="lg:col-span-5 flex flex-col gap-6 min-w-0">
            <SectionHeader
              eyebrow="Our Work"
              title="Selected"
              highlightedText="Work."
              description="Live client systems and digital products engineered for measurable scale."
              className="items-start text-left mx-0"
              maxWidth="max-w-2xl"
            />

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
            <div className="flex items-center justify-between">
              <Link 
                href="/work" 
                className="inline-flex items-center gap-2 text-sm font-bold text-foreground hover:text-primary transition-colors group"
              >
                View complete portfolio archive 
                <AnimatedIcon icon={ArrowRightIcon} size={15} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <span className="text-sm font-medium text-slate-400">
                {filteredProjects.length} of {PROJECTS.length} builds
              </span>
            </div>
          </div>

          {/* ── RIGHT COLUMN: Browser Mockup & Live Hero View ── */}
          <div className="hidden lg:flex lg:col-span-7 flex-col gap-4 relative pt-2 lg:pt-0 min-w-0">
            
            {/* Top Header: Filter Tabs & Live Client Site Badge + Prev/Next Arrows */}
            <div className="sw-filter flex items-center justify-between gap-4 relative z-10">
              
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
                    Live Client Site
                  </span>
                  <svg width="42" height="34" viewBox="0 0 42 34" fill="none" className="text-primary -ml-1 drop-shadow-sm">
                    <path d="M4 4 C 14 10, 24 18, 30 26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
                    <path d="M22 28 L 30 26 L 32 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  </svg>
                </div>

              </div>
            </div>

            {/* ── Browser Window Mockup Frame ── */}
            <div className="sw-browser flex-1 relative min-h-[400px]">
              <div className="sw-browser-parallax absolute inset-0 w-full h-full">
                {activeProject && <BrowserMockup activeProject={activeProject} />}
              </div>
            </div>

          </div>
        </div>
      </Container>
    </Section>
  );
}
