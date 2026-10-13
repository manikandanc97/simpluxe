"use client";

import { useLead } from "@/components/leads/lead-provider";
import { AnimatedIcon } from "@/components/ui/animated-icon";
import { Button } from "@/components/ui/button";
import { CldImage } from "@/components/ui/cld-image";
import { Container } from "@/components/ui/container";
import { HERO_CONTENT } from "@/lib/content/hero";
import { PROJECTS } from "@/lib/content/projects";
import { ArrowRightIcon } from "@animateicons/react/lucide/arrow-right-icon";
import { SparklesIcon } from "@animateicons/react/lucide/sparkles-icon";
import { AnimatePresence, m as motion } from "motion/react";
import { useState } from "react";

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
  const activeProject = showcasedProjects[activeProjectIndex];

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
      className="hero-showcase-background relative overflow-hidden pb-12 pt-28 sm:pb-16 sm:pt-32 lg:pt-36"
    >
      <div className="hero-showcase-dots pointer-events-none absolute left-1/2 top-16 size-72 -translate-x-1/2 opacity-60 sm:size-96" />

      <Container size="wide" className="relative z-10">
        <motion.div
          className="mx-auto flex max-w-4xl flex-col items-center text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-primary shadow-sm backdrop-blur-md sm:mb-6">
            <AnimatedIcon icon={SparklesIcon} size={14} className="text-accent" />
            {HERO_CONTENT.eyebrow}
          </div>

          <h1 className="font-satoshi text-4xl font-bold leading-tight tracking-tighter text-dark xs:text-5xl sm:text-6xl lg:text-7xl">
            <span className="block">{HERO_CONTENT.headlineLine1}</span>
            <span className="block">
              {HERO_CONTENT.headlineLine2Prefix}{" "}
              <span className="brand-gradient-text">{HERO_CONTENT.headlineHighlight}</span>
            </span>
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:mt-6 sm:text-lg">
            {HERO_CONTENT.description}
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-3 sm:mt-9">
            <Button
              id="hero-start-project"
              onClick={() => openLead({ source: "cta" })}
              size="lg"
              disableScrollAnimation
            >
              {HERO_CONTENT.ctaPrimary}
              <AnimatedIcon icon={ArrowRightIcon} size={16} className="text-white" />
            </Button>

            <Button
              type="button"
              onClick={handleWorkClick}
              variant="outline"
              size="lg"
              disableScrollAnimation
            >
              {HERO_CONTENT.ctaSecondaryTitle}
              <AnimatedIcon
                icon={ArrowRightIcon}
                size={15}
              />
            </Button>
          </div>
        </motion.div>

        <motion.div
          className="relative mx-auto mt-14 max-w-6xl sm:mt-16 lg:mt-20"
          initial={{ opacity: 0, y: 36, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="hero-workbench-grid relative overflow-hidden rounded-3xl border border-white/80 bg-white/60 p-3 shadow-elevated backdrop-blur-xl sm:p-5 lg:p-7">
            <div className="mb-3 flex items-center justify-between px-1 sm:mb-5">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-primary">S/01</span>
                <span className="h-px w-8 bg-primary/30 sm:w-14" />
                <span className="text-2xs font-semibold uppercase tracking-widest text-muted-foreground sm:text-xs">
                  Selected digital work
                </span>
              </div>
              <span className="hidden text-xs font-semibold text-muted-foreground sm:block">2025 — Tamil Nadu</span>
            </div>

            <div className="mb-3 flex gap-2 overflow-x-auto pb-1 lg:hidden" aria-label="Choose a featured project">
              {showcasedProjects.map((project, index) => (
                <button
                  key={project.name}
                  type="button"
                  aria-pressed={activeProjectIndex === index}
                  onClick={() => setActiveProjectIndex(index)}
                  className={`shrink-0 rounded-lg border px-3 py-2 text-xs font-bold transition-colors focus-visible:outline-2 focus-visible:outline-primary ${
                    activeProjectIndex === index
                      ? "border-primary bg-primary text-white"
                      : "border-border bg-white/90 text-muted-foreground hover:border-primary/30 hover:text-heading"
                  }`}
                >
                  <span className="mr-2 font-mono text-2xs opacity-70">{project.number}</span>
                  {project.name}
                </button>
              ))}
            </div>

            <div className="grid gap-3 lg:grid-cols-12 lg:gap-5">
              <div className="hidden flex-col justify-between rounded-2xl border border-border/70 bg-white/85 p-3 lg:col-span-3 lg:flex">
                <div>
                  <p className="px-2 pb-3 text-2xs font-bold uppercase tracking-widest text-muted-foreground">Project index</p>
                  <div className="space-y-1.5">
                    {showcasedProjects.map((project, index) => (
                      <button
                        key={project.name}
                        type="button"
                        aria-pressed={activeProjectIndex === index}
                        onClick={() => setActiveProjectIndex(index)}
                        className={`flex w-full items-center gap-3 rounded-lg border px-3 py-3 text-left transition-all focus-visible:outline-2 focus-visible:outline-primary ${
                          activeProjectIndex === index
                            ? "border-primary/20 bg-secondary text-heading shadow-sm"
                            : "border-transparent text-muted-foreground hover:border-border hover:bg-white hover:text-heading"
                        }`}
                      >
                        <span className="font-mono text-2xs font-bold text-primary">{project.number}</span>
                        <div className="min-w-0">
                          <p className="truncate text-xs font-bold">{project.name}</p>
                          <p className="mt-0.5 truncate text-2xs uppercase tracking-wider">{project.category}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="rounded-xl bg-dark p-4 text-white">
                  <p className="text-2xs font-bold uppercase tracking-widest text-sky-300">Outcome, not output</p>
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.p
                      key={activeProject.result}
                      className="mt-2 text-2xl font-bold tracking-tight"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.22 }}
                    >
                      {activeProject.result}
                    </motion.p>
                  </AnimatePresence>
                  <p className="mt-1 text-xs leading-relaxed text-slate-300">Strategy, design and engineering working as one.</p>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-2xl border border-border bg-white shadow-xl lg:col-span-9">
                <div className="flex h-10 items-center justify-between border-b border-border bg-white px-3 sm:h-12 sm:px-5">
                  <div className="flex items-center gap-1.5" aria-hidden="true">
                    <span className="size-2 rounded-full bg-slate-200" />
                    <span className="size-2 rounded-full bg-slate-200" />
                    <span className="size-2 rounded-full bg-slate-200" />
                  </div>
                  <span className="text-2xs font-bold uppercase tracking-widest text-muted-foreground sm:text-xs">
                    Live project canvas
                  </span>
                  <span className="font-mono text-2xs font-bold text-primary">
                    {activeProject.number} / 04
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
                        alt={`${activeProject.name} website designed by Simpluxe`}
                        fill
                        sizes="(max-width: 1024px) 94vw, 70vw"
                        className="object-cover object-top"
                        priority={activeProjectIndex === 0}
                      />
                    </motion.div>
                  </AnimatePresence>

                  <motion.div
                    key={activeProject.name}
                    className="absolute bottom-3 left-3 max-w-56 rounded-xl border border-white/60 bg-white/90 p-3 shadow-elevated backdrop-blur-xl sm:bottom-5 sm:left-5 sm:max-w-xs sm:p-4"
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-2xs font-bold uppercase tracking-widest text-primary">Featured build</p>
                    <p className="mt-1 text-sm font-bold text-heading sm:text-base">{activeProject.name}</p>
                    <p className="mt-0.5 text-2xs text-muted-foreground sm:text-xs">Built for clarity, conversion and scale.</p>
                  </motion.div>
                </div>
              </div>
            </div>

            <div className="mt-3 grid grid-cols-3 gap-2 sm:mt-5 sm:gap-3 lg:grid-cols-12">
              <div className="col-span-2 flex items-center gap-3 rounded-xl border border-border/70 bg-white/90 p-3 sm:p-4 lg:col-span-5">
                <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-xs font-bold text-white sm:size-10">01</span>
                <div>
                  <p className="text-xs font-bold text-heading sm:text-sm">Discover & define</p>
                  <p className="hidden text-xs text-muted-foreground sm:block">We find the clearest route to impact.</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-border/70 bg-white/90 p-3 sm:p-4 lg:col-span-4">
                <span className="flex size-8 items-center justify-center rounded-lg bg-secondary text-xs font-bold text-primary sm:size-10">02</span>
                <div>
                  <p className="text-xs font-bold text-heading sm:text-sm">Design & build</p>
                  <p className="hidden text-xs text-muted-foreground sm:block">One focused product team.</p>
                </div>
              </div>
              <div className="hidden items-center gap-3 rounded-xl bg-primary p-4 text-white sm:flex lg:col-span-3">
                <span className="flex size-10 items-center justify-center rounded-lg bg-white/15 text-xs font-bold">03</span>
                <div>
                  <p className="text-sm font-bold">Launch & grow</p>
                  <p className="text-xs text-sky-100">Ready for real users.</p>
                </div>
              </div>
            </div>

            <div className="absolute right-5 top-20 hidden w-32 overflow-hidden rounded-2xl border-4 border-white bg-dark shadow-2xl sm:block lg:right-10 lg:top-24 lg:w-40">
              <div className="relative h-64 overflow-hidden lg:h-80">
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
                      alt={`${activeProject.name} mobile experience`}
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
