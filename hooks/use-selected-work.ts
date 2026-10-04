"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { PROJECTS } from "@/lib/content/projects";

export function useSelectedWork() {
  const [activeFilter, setActiveFilter] = useState<string>("Websites");

  const filteredProjects = useMemo(
    () => PROJECTS.filter((p) => p.serviceType === activeFilter),
    [activeFilter]
  );

  const displayProjects = useMemo(
    () => filteredProjects.slice(0, 3),
    [filteredProjects]
  );

  const [activeId, setActiveId] = useState<string>(displayProjects[0]?.id || "");

  useEffect(() => {
    if (!displayProjects.find((p) => p.id === activeId) && displayProjects.length > 0) {
      setActiveId(displayProjects[0].id);
    }
  }, [activeFilter, displayProjects, activeId]);

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
