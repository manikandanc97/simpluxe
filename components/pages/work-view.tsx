"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useMemo, useState } from "react";
import { ShowcaseSkeleton } from "@/components/ui/skeleton";
import { PROJECTS } from "@/lib/content/projects";
import { FILTER_SERVICES } from "@/lib/content/projects";
import { WorkHero } from "@/components/work/work-hero";
import { WorkControls } from "@/components/work/work-controls";
import { Container } from "@/components/ui/container";
import { AnimatePresence, m as motion } from "motion/react";
import { ProjectTemplateCard } from "@/components/work/project-template-card";
import { WORK_VIEW_COPY } from "@/lib/content/projects";

function WorkInteractiveSectionWithQuery() {
  const searchParams = useSearchParams();
  const rawServiceParam = searchParams.get("service")?.toLowerCase();
  const service = FILTER_SERVICES.find((item) => item.id === rawServiceParam)?.id || "websites";

  return <WorkInteractiveSection key={service} initialFilter={service} />;
}

function WorkInteractiveSection({ initialFilter }: { initialFilter: string }) {
  const [activeFilter, setActiveFilter] = useState(initialFilter);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState<"latest" | "oldest" | "name">("latest");

  // Filter & Sort logic
  const filteredProjects = useMemo(() => {
    let result = [...PROJECTS];

    // Filter by Service Type
    const serviceType = FILTER_SERVICES.find((filter) => filter.id === activeFilter)?.serviceType;
    if (serviceType) {
      result = result.filter((project) => project.serviceType === serviceType);
    }

    // Filter by Search Query
    if (searchQuery.trim()) {
      const q = searchQuery.trim().toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.stack.some((t: string) => t.toLowerCase().includes(q))
      );
    }

    // Sort
    if (sortOption === "name") {
      result.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOption === "oldest") {
      result.sort((a, b) => Number(a.year) - Number(b.year) || Number(a.number) - Number(b.number));
    } else {
      result.sort((a, b) => Number(b.year) - Number(a.year) || Number(b.number) - Number(a.number));
    }

    return result;
  }, [activeFilter, searchQuery, sortOption]);

  return (
    <div className="w-full">
      {/* Top Control Bar: Filters, Search & Sort */}
      <WorkControls
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        sortOption={sortOption}
        onSortChange={setSortOption}
        allProjects={PROJECTS}
      />

      {/* ── Main Showcase: Responsive Grid of Template Cards with Hover Scroll ── */}
      <div className="pt-6 sm:pt-8">
        <AnimatePresence mode="wait">
          {filteredProjects.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-16 px-4 bg-background rounded-2xl border border-dashed border-surface-elevated flex flex-col items-center gap-4"
            >
              <p className="text-sm text-muted-foreground font-medium">
                {WORK_VIEW_COPY.noProjectsFoundMatchingYourCriteria}
              </p>
              <button
                onClick={() => {
                  setActiveFilter("websites");
                  setSearchQuery("");
                }}
                className="text-xs font-bold text-primary hover:underline cursor-pointer"
              >
                {WORK_VIEW_COPY.resetFilters}
              </button>
            </motion.div>
          ) : (
            <motion.div
              key={activeFilter + searchQuery + sortOption}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.08, delayChildren: 0.05 },
                },
              }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch"
            >
              {filteredProjects.map((project) => (
                <ProjectTemplateCard
                  key={project.id}
                  project={project}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </div>
  );
}

export function WorkView() {
  return (
    <div className="min-h-screen w-full bg-background text-foreground flex flex-col">
      {/* ── Fixed navbar height spacer so full-width banner starts cleanly below the header ── */}
      <div className="h-16 w-full shrink-0" aria-hidden="true" />

      {/* ── 1. Full-Width Hero Section ── */}
      <WorkHero />

      {/* ── Main Structured Showcase Area ── */}
      <Container
        id="work-projects-container"
        className="pt-10 sm:pt-12 lg:pt-14 pb-20 md:pb-24 lg:pb-32 flex flex-col gap-14 sm:gap-16"
      >
        {/* ── 2. Showcase Controls and Split View ── */}
        <Suspense fallback={<ShowcaseSkeleton />}>
          <WorkInteractiveSectionWithQuery />
        </Suspense>
      </Container>
    </div>
  );
}

