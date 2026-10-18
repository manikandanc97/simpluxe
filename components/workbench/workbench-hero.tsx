"use client";

import { useLead } from "@/components/leads/lead-provider";
import { AnimatedIcon } from "@/components/ui/animated-icon";
import { Button } from "@/components/ui/button";
import { CldImage } from "@/components/ui/cld-image";
import { Container } from "@/components/ui/container";
import { HERO_CONTENT, WORKBENCH_COPY } from "@/lib/content/hero";
import { PROJECTS } from "@/lib/content/projects";
import { ArrowUpRightIcon } from "@animateicons/react/lucide/arrow-up-right-icon";
import { BriefcaseIcon } from "@animateicons/react/lucide/briefcase-icon";
import { ChevronDownIcon } from "@animateicons/react/lucide/chevron-down-icon";
import {
  AnimatePresence,
  m as motion,
} from "motion/react";
import { useEffect, useRef, useState } from "react";

const showcasedProjects = PROJECTS.slice(0, 4).map((project) => ({
  name: project.name,
  desktopImage: project.desktopImage ?? project.mobileImage ?? "",
  mobileImage: project.mobileImage ?? project.desktopImage ?? "",
  category: project.category.split("·")[0].trim(),
  result: project.result,
  number: project.number,
}));

export function WorkbenchHero() {
  const { openLead } = useLead();
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [isMobileProjectMenuOpen, setIsMobileProjectMenuOpen] = useState(false);
  const mobileProjectMenuRef = useRef<HTMLDivElement>(null);
  const activeProject = showcasedProjects[activeProjectIndex];

  useEffect(() => {
    if (!isMobileProjectMenuOpen) return;

    const closeOnOutsideClick = (event: PointerEvent) => {
      if (!mobileProjectMenuRef.current?.contains(event.target as Node)) {
        setIsMobileProjectMenuOpen(false);
      }
    };

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMobileProjectMenuOpen(false);
    };

    document.addEventListener("pointerdown", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.removeEventListener("pointerdown", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [isMobileProjectMenuOpen]);

  const handleWorkClick = () => {
    const target = document.getElementById("selected-work-scroll-anchor");
    const header = document.querySelector("header");

    if (!target) return;

    const headerBottom = header?.getBoundingClientRect().bottom ?? 0;
    const targetTop = target.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: Math.max(0, targetTop - headerBottom - 16),
      behavior: "smooth",
    });
  };

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-background pb-14 pt-16 text-white sm:pb-20 sm:pt-20 lg:pb-24 lg:pt-24"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-svh bg-primary" aria-hidden="true" />

      <Container
        size="wide"
        className="relative z-10 flex flex-col items-center gap-14 sm:gap-16 lg:gap-20"
      >
        <motion.div
          className="flex w-full max-w-4xl flex-col items-center gap-5 text-center sm:gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="font-satoshi text-4xl font-bold leading-tight tracking-tighter text-white xs:text-5xl sm:text-5xl lg:text-6xl">
            <span className="block">{HERO_CONTENT.headlineLine1}</span>
            <span className="block">
              {HERO_CONTENT.headlineLine2Prefix}{" "}
              <span className="text-sky-100">{HERO_CONTENT.headlineHighlight}</span>
            </span>
          </h1>

          <p className="max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
            {HERO_CONTENT.description}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button
              id="hero-start-project"
              onClick={() => openLead({ source: "cta" })}
              size="lg"
              disableScrollAnimation
              className="group bg-white text-primary hover:bg-slate-100"
            >
              {HERO_CONTENT.ctaPrimary}
              <AnimatedIcon
                icon={ArrowUpRightIcon}
                size={16}
                className="text-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Button>

            <button
              type="button"
              onClick={handleWorkClick}
              className="group flex items-center gap-3 rounded-lg px-1.5 py-1 text-left outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <span className="flex flex-col gap-0.5">
                <span className="text-sm font-bold leading-tight text-white transition-colors group-hover:text-sky-300 sm:text-base">
                  {HERO_CONTENT.ctaSecondaryTitle}
                </span>
                <span className="text-xs font-medium text-slate-300">
                  {HERO_CONTENT.ctaSecondarySubtitle}
                </span>
              </span>
              <span className="flex size-11 shrink-0 items-center justify-center rounded-lg border border-primary/15 bg-white text-primary shadow-sm transition-all group-hover:border-primary/30 group-hover:bg-secondary group-hover:shadow-md">
                <AnimatedIcon icon={BriefcaseIcon} size={16} />
              </span>
            </button>
          </div>
        </motion.div>

        <motion.div
          className="relative w-full max-w-6xl"
          initial={{ opacity: 0, y: 36, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative flex flex-col gap-3 overflow-hidden rounded-3xl border border-slate-200/70 bg-slate-100/70 p-3 shadow-elevated backdrop-blur-xl sm:gap-5 sm:p-5 lg:p-7">
            <div className="flex items-center justify-between gap-4 px-1">
              <div className="flex min-w-0 items-center gap-2">
                <span className="font-mono font-bold text-primary text-xs">{WORKBENCH_COPY.sectionNumber}</span>
                <span className="bg-primary/30 w-8 sm:w-14 h-px" />
                <span className="truncate font-semibold text-2xs text-muted-foreground sm:text-xs uppercase tracking-widest">
                  {WORKBENCH_COPY.selectedWork}
                </span>
              </div>
              <span className="hidden shrink-0 font-semibold text-muted-foreground text-xs uppercase tracking-wider lg:block">
                {WORKBENCH_COPY.tagline}
              </span>
            </div>

            <div
              ref={mobileProjectMenuRef}
              className="relative z-30 flex flex-col gap-2 rounded-xl border border-border/70 bg-slate-50/95 p-3 lg:hidden"
            >
              <p className="text-xs font-semibold text-muted-foreground">{WORKBENCH_COPY.chooseProject}</p>
              <button
                type="button"
                aria-haspopup="listbox"
                aria-expanded={isMobileProjectMenuOpen}
                aria-controls="mobile-project-options"
                onClick={() => setIsMobileProjectMenuOpen((isOpen) => !isOpen)}
                className="flex h-12 w-full items-center justify-between rounded-lg border border-primary/20 bg-slate-100 px-2.5 text-left shadow-sm outline-none transition-colors hover:border-primary/40 hover:bg-secondary focus-visible:ring-2 focus-visible:ring-primary/20"
              >
                <span className="flex min-w-0 items-center gap-3">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-md bg-primary font-mono text-xs font-bold text-white">
                    {activeProject.number}
                  </span>
                  <span className="truncate text-sm font-bold text-heading">{activeProject.name}</span>
                </span>
                <span
                  className={`flex size-8 shrink-0 items-center justify-center rounded-md bg-white text-primary shadow-sm transition-transform ${
                    isMobileProjectMenuOpen ? "rotate-180" : ""
                  }`}
                >
                  <AnimatedIcon icon={ChevronDownIcon} size={16} />
                </span>
              </button>

              <AnimatePresence>
                {isMobileProjectMenuOpen && (
                  <motion.div
                    id="mobile-project-options"
                    role="listbox"
                    aria-label={WORKBENCH_COPY.chooseProject}
                    className="absolute inset-x-3 top-full z-40 translate-y-2 overflow-hidden rounded-xl border border-border bg-slate-50 p-1.5 shadow-elevated"
                    initial={{ opacity: 0, y: -6, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -4, scale: 0.98 }}
                    transition={{ duration: 0.16 }}
                  >
                    {showcasedProjects.map((project, index) => {
                      const isSelected = activeProjectIndex === index;

                      return (
                        <button
                          key={project.name}
                          type="button"
                          role="option"
                          aria-selected={isSelected}
                          onClick={() => {
                            setActiveProjectIndex(index);
                            setIsMobileProjectMenuOpen(false);
                          }}
                          className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left outline-none transition-colors focus-visible:ring-2 focus-visible:ring-primary/30 ${
                            isSelected
                              ? "bg-primary text-white shadow-sm"
                              : "text-heading hover:bg-slate-100"
                          }`}
                        >
                          <span
                            className={`font-mono text-xs font-bold ${
                              isSelected ? "text-sky-100" : "text-primary"
                            }`}
                          >
                            {project.number}
                          </span>
                          <span className="flex min-w-0 flex-col gap-0.5">
                            <span className="block truncate text-sm font-bold">{project.name}</span>
                            <span
                              className={`block truncate text-xs ${
                                isSelected ? "text-sky-100" : "text-muted-foreground"
                              }`}
                            >
                              {project.category}
                            </span>
                          </span>
                        </button>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="grid gap-3 lg:grid-cols-12 lg:gap-5">
              <div className="hidden rounded-2xl border border-border/70 bg-slate-50/95 p-4 lg:col-span-3 lg:flex lg:flex-col lg:gap-4">
                <div className="flex flex-1 flex-col gap-3">
                  <p className="px-2 font-bold text-2xs text-muted-foreground uppercase tracking-widest">{WORKBENCH_COPY.projectIndex}</p>
                  <div className="flex flex-1 flex-col justify-between gap-2">
                    {showcasedProjects.map((project, index) => (
                      <button
                        key={project.name}
                        type="button"
                        aria-pressed={activeProjectIndex === index}
                        onClick={() => setActiveProjectIndex(index)}
                        className={`flex w-full items-center gap-3 rounded-lg border px-3 py-3 text-left transition-all focus-visible:outline-2 focus-visible:outline-primary ${
                          activeProjectIndex === index
                            ? "border-primary/20 bg-secondary text-heading shadow-sm"
                            : "border-transparent text-muted-foreground hover:border-border hover:bg-slate-100 hover:text-heading"
                        }`}
                      >
                        <span className="font-mono font-bold text-2xs text-primary">{project.number}</span>
                        <div className="flex min-w-0 flex-col gap-0.5">
                          <p className="font-bold text-xs truncate">{project.name}</p>
                          <p className="truncate text-2xs uppercase tracking-wider">{project.category}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-2 rounded-xl bg-dark p-4 text-white">
                  <p className="font-bold text-2xs text-sky-300 uppercase tracking-widest">{WORKBENCH_COPY.outcomeHeading}</p>
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.p
                      key={activeProject.result}
                      className="text-2xl font-bold tracking-tight"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.22 }}
                    >
                      {activeProject.result}
                    </motion.p>
                  </AnimatePresence>
                  <p className="text-xs leading-relaxed text-slate-300">{WORKBENCH_COPY.outcomeDescription}</p>
                </div>
              </div>

              <div className="relative flex flex-col overflow-hidden rounded-2xl border border-border bg-slate-50 shadow-xl lg:col-span-9">
                <div className="flex h-10 items-center justify-between gap-3 border-b border-border bg-slate-50 px-3 sm:h-12 sm:px-5">
                  <div className="flex items-center gap-1.5" aria-hidden="true">
                    <span className="bg-slate-200 rounded-full size-2" />
                    <span className="bg-slate-200 rounded-full size-2" />
                    <span className="bg-slate-200 rounded-full size-2" />
                  </div>
                  <span className="font-bold text-2xs text-muted-foreground sm:text-xs uppercase tracking-widest">
                    {WORKBENCH_COPY.canvasLabel}
                  </span>
                  <span className="font-mono font-bold text-2xs text-primary">
                    {activeProject.number}{WORKBENCH_COPY.projectCountSuffix}
                  </span>
                </div>

                <div className="relative h-64 overflow-hidden bg-surface-elevated sm:h-96 lg:h-112" aria-live="polite">
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key={activeProject.desktopImage}
                      className="absolute inset-0"
                      initial={{ opacity: 0, scale: 1.02 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.99 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <CldImage
                        src={activeProject.desktopImage}
                        alt={WORKBENCH_COPY.websiteAlt(activeProject.name)}
                        fill
                        sizes="(max-width: 1024px) 94vw, 70vw"
                        className="object-cover object-top"
                        priority={activeProjectIndex === 0}
                      />
                    </motion.div>
                  </AnimatePresence>

                  <motion.div
                    key={activeProject.name}
                    className="absolute bottom-3 left-3 hidden max-w-56 flex-col gap-0.5 rounded-xl border border-slate-200/70 bg-slate-50/95 p-3 shadow-elevated backdrop-blur-xl sm:bottom-5 sm:left-5 sm:flex sm:max-w-xs sm:p-4"
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="font-bold text-2xs text-primary uppercase tracking-widest">{WORKBENCH_COPY.featuredBuild}</p>
                    <p className="text-sm font-bold text-heading sm:text-base">{activeProject.name}</p>
                    <p className="text-2xs text-muted-foreground sm:text-xs">{WORKBENCH_COPY.featuredDescription}</p>
                  </motion.div>
                </div>
              </div>
            </div>

            <div className="absolute right-5 top-20 hidden w-32 overflow-hidden rounded-2xl border-4 border-white bg-dark shadow-2xl lg:right-10 lg:top-24 lg:block lg:w-40">
              <div className="relative h-64 lg:h-80 overflow-hidden">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={activeProject.mobileImage}
                    className="absolute inset-0"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CldImage
                      src={activeProject.mobileImage}
                      alt={WORKBENCH_COPY.mobileAlt(activeProject.name)}
                      fill
                      sizes="160px"
                      className="object-cover object-top"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
