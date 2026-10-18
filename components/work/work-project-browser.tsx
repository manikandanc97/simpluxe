"use client";

import { ProjectTemplateCard } from "@/components/work/project-template-card";
import { WorkControls } from "@/components/work/work-controls";
import { FILTER_SERVICES, PROJECTS, WORK_VIEW_COPY } from "@/lib/content/projects";
import { AnimatePresence, m as motion } from "motion/react";
import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";

type SortOption = "latest" | "oldest" | "name";

export function WorkProjectBrowser() {
  const searchParams = useSearchParams();
  const requestedService = searchParams.get("service")?.toLowerCase();
  const initialFilter = FILTER_SERVICES.find((item) => item.id === requestedService)?.id ?? "websites";

  return <WorkProjectResults key={initialFilter} initialFilter={initialFilter} />;
}

function WorkProjectResults({ initialFilter }: { initialFilter: string }) {
  const [activeFilter, setActiveFilter] = useState(initialFilter);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState<SortOption>("latest");

  const filteredProjects = useMemo(() => {
    const serviceType = FILTER_SERVICES.find((filter) => filter.id === activeFilter)?.serviceType;
    const query = searchQuery.trim().toLowerCase();
    const projects = PROJECTS.filter((project) => {
      const matchesService = !serviceType || project.serviceType === serviceType;
      const matchesQuery = !query
        || project.name.toLowerCase().includes(query)
        || project.category.toLowerCase().includes(query)
        || project.stack.some((technology) => technology.toLowerCase().includes(query));

      return matchesService && matchesQuery;
    });

    return projects.sort((a, b) => {
      if (sortOption === "name") return a.name.localeCompare(b.name);
      const direction = sortOption === "oldest" ? 1 : -1;
      return direction * (Number(a.year) - Number(b.year) || Number(a.number) - Number(b.number));
    });
  }, [activeFilter, searchQuery, sortOption]);

  return (
    <div className="w-full">
      <WorkControls
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        sortOption={sortOption}
        onSortChange={setSortOption}
        allProjects={PROJECTS}
      />

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
                type="button"
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
                <ProjectTemplateCard key={project.id} project={project} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
