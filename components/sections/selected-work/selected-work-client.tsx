"use client";

import { AnimatedIcon } from "@/components/ui/animated-icon";
import { Container } from "@/components/ui/container";
import { ThemeImage } from "@/components/ui/theme-image";
import { cloudinaryImageUrl } from "@/lib/cloudinary";
import { SELECTED_WORK_COPY } from "@/lib/data/hero";
import { PROJECTS } from "@/lib/data/projects";
import { ChevronDownIcon } from "@animateicons/react/lucide/chevron-down-icon";
import {
  AnimatePresence,
  m as motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { useEffect, useRef, useState, useSyncExternalStore, type ReactNode } from "react";

const DESKTOP_MEDIA_QUERY = "(min-width: 1024px)";
let cachedDesktopMedia: MediaQueryList | null = null;

function getDesktopMediaQuery(): MediaQueryList | null {
  if (typeof window === "undefined") return null;
  if (!cachedDesktopMedia) {
    cachedDesktopMedia = window.matchMedia(DESKTOP_MEDIA_QUERY);
  }
  return cachedDesktopMedia;
}

function subscribeDesktopMedia(callback: () => void) {
  const media = getDesktopMediaQuery();
  if (!media) return () => {};
  media.addEventListener("change", callback);
  return () => media.removeEventListener("change", callback);
}

function getDesktopSnapshot() {
  return getDesktopMediaQuery()?.matches ?? false;
}

function getDesktopServerSnapshot() {
  return false;
}

const showcasedProjects = PROJECTS.flatMap((project) =>
  project.showcaseImages
    ? [{
        name: project.name,
        category: project.category.split("·")[0]?.trim() ?? project.category,
        result: project.result,
        number: project.number,
        images: project.showcaseImages,
      }]
    : []
).slice(0, 4);

export function SelectedWorkClient({
  intro,
}: {
  intro: ReactNode;
}) {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [isMobileProjectMenuOpen, setIsMobileProjectMenuOpen] = useState(false);
  const mobileProjectMenuRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const activeProject = showcasedProjects[activeProjectIndex] ?? showcasedProjects[0];
  const prefersReducedMotion = useReducedMotion();
  const isDesktop = useSyncExternalStore(
    subscribeDesktopMedia,
    getDesktopSnapshot,
    getDesktopServerSnapshot
  );

  // Scroll-linked parallax (desktop only, disabled for reduced-motion)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const rawStageY = useTransform(scrollYProgress, [0, 1], [0, 30]);
  const rawStageRotateX = useTransform(scrollYProgress, [0, 1], [0, 5]);
  const rawStageScale = useTransform(scrollYProgress, [0, 1], [1, 0.96]);
  const stageY = useSpring(rawStageY, { stiffness: 80, damping: 20, mass: 0.5 });
  const stageRotateX = useSpring(rawStageRotateX, { stiffness: 80, damping: 20, mass: 0.5 });
  const stageScale = useSpring(rawStageScale, { stiffness: 80, damping: 20, mass: 0.5 });

  const isMobileMenuOpen = !isDesktop && isMobileProjectMenuOpen;

  useEffect(() => {
    if (!isMobileMenuOpen) return;

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
  }, [isMobileMenuOpen]);

  if (!activeProject) {
    return null;
  }

  const stageMotionStyle =
    prefersReducedMotion || !isDesktop
      ? undefined
      : {
          y: stageY,
          rotateX: stageRotateX,
          scale: stageScale,
          transformPerspective: 1200,
        };

  return (
    <section
      id="selected-work"
      aria-labelledby="selected-work-heading"
      ref={heroRef}
      className="relative overflow-hidden bg-background py-16 sm:py-20 lg:py-24"
    >
      <Container className="relative flex flex-col items-center gap-6 sm:gap-10 lg:gap-12">
        <div className="w-full max-w-4xl">
          {intro}
        </div>

        <motion.div
          className="w-full max-w-6xl"
          style={stageMotionStyle}
        >
          <div className="relative flex flex-col gap-3 overflow-hidden rounded-3xl border border-slate-200/70 bg-slate-100/70 p-3 shadow-elevated backdrop-blur-xl sm:gap-5 sm:p-5 lg:p-7">
            <div className="flex items-center justify-between gap-4 px-1">
              <div className="flex min-w-0 items-center gap-2">
                <span className="font-mono font-bold text-primary text-xs">{SELECTED_WORK_COPY.sectionNumber}</span>
                <span className="bg-primary/30 w-8 h-px sm:w-14" />
                <span className="truncate font-semibold text-2xs text-muted-foreground uppercase tracking-widest sm:text-xs">
                  {SELECTED_WORK_COPY.selectedWork}
                </span>
              </div>
              <span className="hidden shrink-0 font-semibold text-muted-foreground text-xs uppercase tracking-wider lg:block">
                {SELECTED_WORK_COPY.tagline}
              </span>
            </div>

            <div
              ref={mobileProjectMenuRef}
              className="relative z-30 flex flex-col gap-2 rounded-xl border border-border/70 bg-slate-50/95 p-3 lg:hidden"
            >
              <p className="text-xs font-semibold text-muted-foreground">{SELECTED_WORK_COPY.chooseProject}</p>
              <button
                type="button"
                aria-haspopup="listbox"
                aria-expanded={isMobileMenuOpen}
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
                    isMobileMenuOpen ? "rotate-180" : ""
                  }`}
                >
                  <AnimatedIcon icon={ChevronDownIcon} size={16} />
                </span>
              </button>

              <AnimatePresence>
                {isMobileMenuOpen && (
                  <motion.div
                    id="mobile-project-options"
                    role="listbox"
                    aria-label={SELECTED_WORK_COPY.chooseProject}
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
                  <p className="px-2 font-bold text-2xs text-muted-foreground uppercase tracking-widest">{SELECTED_WORK_COPY.projectIndex}</p>
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
                  <p className="font-bold text-2xs text-sky-300 uppercase tracking-widest">{SELECTED_WORK_COPY.outcomeHeading}</p>
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.p
                      key={activeProject.name}
                      className="text-2xl font-bold tracking-tight"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.22 }}
                    >
                      {activeProject.result}
                    </motion.p>
                  </AnimatePresence>
                  <p className="text-xs leading-relaxed text-slate-300">{SELECTED_WORK_COPY.outcomeDescription}</p>
                </div>
              </div>

              <div className="relative flex flex-col overflow-hidden rounded-2xl border border-border bg-slate-50 shadow-xl lg:col-span-9">
                <div className="flex h-10 items-center justify-between gap-3 border-b border-border bg-slate-50 px-3 sm:h-12 sm:px-5">
                  <div className="flex items-center gap-1.5" aria-hidden="true">
                    <span className="size-2.5 rounded-full bg-red-400/90" />
                    <span className="size-2.5 rounded-full bg-amber-400/90" />
                    <span className="size-2.5 rounded-full bg-green-500/90" />
                  </div>
                  <span className="font-bold text-2xs text-muted-foreground uppercase tracking-widest sm:text-xs">
                    {SELECTED_WORK_COPY.canvasLabel}
                  </span>
                  <span className="font-mono font-bold text-2xs text-primary">
                    {activeProject.number}{SELECTED_WORK_COPY.projectCountSuffix}
                  </span>
                </div>

                <div className="relative h-64 overflow-hidden bg-surface-elevated sm:h-96 lg:h-112" aria-live="polite">
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key={activeProject.name}
                      className="absolute inset-0"
                      initial={{ opacity: 0, scale: 1.02 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.99 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <ThemeImage
                        src={cloudinaryImageUrl(activeProject.images.desktop)}
                        alt={SELECTED_WORK_COPY.websiteAlt(activeProject.name)}
                        fill
                        sizes="(max-width: 1023px) 100vw, 72vw"
                        variant="showcase"
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
                    <p className="font-bold text-2xs text-primary uppercase tracking-widest">{SELECTED_WORK_COPY.featuredBuild}</p>
                    <p className="text-sm font-bold text-heading sm:text-base">{activeProject.name}</p>
                    <p className="text-2xs text-muted-foreground sm:text-xs">{SELECTED_WORK_COPY.featuredDescription}</p>
                  </motion.div>
                </div>
              </div>
            </div>

            <div className="absolute right-5 top-20 hidden w-32 overflow-hidden rounded-2xl border-4 border-white bg-dark shadow-2xl lg:right-10 lg:top-24 lg:block lg:w-40">
              <div className="relative h-64 overflow-hidden lg:h-80">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={activeProject.name}
                    className="absolute inset-0"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ThemeImage
                      src={cloudinaryImageUrl(activeProject.images.mobile)}
                      alt={SELECTED_WORK_COPY.mobileAlt(activeProject.name)}
                      fill
                      sizes="160px"
                      variant="mobile"
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


