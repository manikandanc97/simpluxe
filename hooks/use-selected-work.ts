"use client";

import { useState, useCallback, useMemo } from "react";
import { PROJECTS, PROJECT_FILTER_TABS } from "@/lib/content/projects";

export function useSelectedWork() {
  const [activeFilter, setActiveFilter] = useState<string>(PROJECT_FILTER_TABS[0]);

  const filteredProjects = useMemo(
    () => PROJECTS.filter((p) => p.serviceType === activeFilter),
    [activeFilter]
  );

  const displayProjects = useMemo(
    () => filteredProjects.slice(0, 3),
    [filteredProjects]
  );

  const [selectedId, setActiveId] = useState<string>(displayProjects[0]?.id || "");
  const activeId = displayProjects.some((project) => project.id === selectedId)
    ? selectedId
    : displayProjects[0]?.id || "";

  const activeProjectIndex = displayProjects.findIndex((p) => p.id === activeId);
  const activeProject = displayProjects[activeProjectIndex] || displayProjects[0];

  const handleNext = useCallback(() => {
    if (displayProjects.length === 0) return;
    const nextIdx = (activeProjectIndex + 1) % displayProjects.length;
    setActiveId(displayProjects[nextIdx].id);
  }, [displayProjects, activeProjectIndex]);

  const handlePrev = useCallback(() => {
    if (displayProjects.length === 0) return;
    const prevIdx = (activeProjectIndex - 1 + displayProjects.length) % displayProjects.length;
    setActiveId(displayProjects[prevIdx].id);
  }, [displayProjects, activeProjectIndex]);

  return {
    activeFilter,
    setActiveFilter,
    filteredProjects,
    displayProjects,
    activeId,
    setActiveId,
    activeProject,
    handleNext,
    handlePrev,
  };
}
