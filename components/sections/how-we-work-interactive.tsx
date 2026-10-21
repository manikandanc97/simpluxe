"use client";

import { useLead } from "@/components/leads/lead-provider";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";
import {
  HOW_WE_WORK_SECTION_CONTENT,
  HOW_WE_WORK_TRUST_POINTS,
  STEP_NARRATIVE_COPY,
  STEPS,
} from "@/lib/data/how-we-work";
import { AnimatedIcon } from "@/components/ui/animated-icon";
import { cn } from "@/lib/utils";
import {
  AnimatePresence,
  animate,
  m as motion,
  useInView,
  useMotionValue,
  useReducedMotion,
} from "motion/react";
import { useEffect, useRef, useState } from "react";
import { staggerRevealProps, fadeUpItem } from "@/lib/motion";

const STEP_DURATION = 8000;

export function HowWeWorkInteractive() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const progress = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { amount: 0.25 });
  const { openLead } = useLead();
  const reduceMotion = useReducedMotion();
  const currentStep = STEPS[activeStepIndex];

  useEffect(() => {
    if (!isInView || isPaused || reduceMotion) return;

    const remainingDuration = (1 - progress.get()) * STEP_DURATION;
    const playback = animate(progress, 1, {
      duration: remainingDuration / 1000,
      ease: "linear",
      onComplete: () => {
        progress.set(0);
        setDirection(1);
        setActiveStepIndex((previous) => (previous + 1) % STEPS.length);
      },
    });

    return () => playback.stop();
  }, [activeStepIndex, isInView, isPaused, progress, reduceMotion]);

  const handleSelectStep = (index: number) => {
    if (index === activeStepIndex) return;

    setDirection(index > activeStepIndex ? 1 : -1);
    setActiveStepIndex(index);
    progress.set(0);
  };

  const handleNextStep = () => {
    if (activeStepIndex < STEPS.length - 1) {
      setDirection(1);
      setActiveStepIndex(activeStepIndex + 1);
      progress.set(0);
    } else {
      openLead({ source: "how-we-work" });
    }
  };

  return (
    <div
      ref={containerRef}
      className="flex w-full flex-col gap-8 lg:gap-12"
    >
      <motion.div
        {...staggerRevealProps(0.14)}
        className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-16"
      >
        <motion.div variants={fadeUpItem} className="flex min-w-0 flex-col gap-6 lg:col-span-5 lg:gap-8">
          <SectionHeader
            eyebrow={HOW_WE_WORK_SECTION_CONTENT.eyebrow}
            title={HOW_WE_WORK_SECTION_CONTENT.title}
            highlightedText={HOW_WE_WORK_SECTION_CONTENT.highlightedText}
            description={HOW_WE_WORK_SECTION_CONTENT.descriptionLine1}
            headingId="how-we-work-heading"
            maxWidth="max-w-sm"
          />

          <div
            role="group"
            aria-label={HOW_WE_WORK_SECTION_CONTENT.eyebrow}
            className="flex w-full gap-2 sm:gap-2.5 lg:flex-col lg:gap-2"
          >
            {STEPS.map((step, index) => {
              const isActive = activeStepIndex === index;

              return (
                <button
                  key={step.id}
                  type="button"
                  aria-pressed={isActive}
                  aria-controls="how-we-work-detail"
                  onClick={() => handleSelectStep(index)}
                  className={cn(
                    "group relative flex min-w-0 flex-1 flex-col items-center gap-2 overflow-hidden rounded-xl border border-transparent px-2.5 py-3.5 text-left transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary lg:flex-row lg:gap-5 lg:px-4 lg:py-4",
                    isActive
                      ? "text-primary"
                      : "text-muted-foreground hover:border-border hover:bg-primary/5 hover:text-heading"
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="how-we-work-active-step"
                      aria-hidden="true"
                      className="absolute inset-0 rounded-xl border border-primary/25 bg-primary/10 shadow-2xs"
                      transition={{ type: "spring", stiffness: 420, damping: 36 }}
                    />
                  )}
                  <span className="relative z-10 text-xs font-medium tabular-nums lg:text-sm">
                    {step.number}
                  </span>
                  <span className="relative z-10 flex min-w-0 flex-1 flex-col gap-1">
                    <span className="text-xs font-semibold sm:text-sm lg:text-base">
                      {step.title}
                    </span>
                    <span className="hidden text-xs font-normal text-muted-foreground lg:block">
                      {step.subtitle}
                    </span>
                  </span>
                  <span
                    aria-hidden="true"
                    className={cn(
                      "relative z-10 hidden size-8 items-center justify-center rounded-lg transition-colors lg:flex",
                      isActive ? "bg-primary text-white" : "text-muted-foreground/60"
                    )}
                  >
                    <AnimatedIcon name="arrow-right" size={15} />
                  </span>

                  {/* Active step dynamic progress line */}
                  {isActive && (
                    <motion.span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-0.5 origin-left bg-primary"
                      style={{ scaleX: progress }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          variants={fadeUpItem}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="flex min-w-0 flex-col gap-8 rounded-3xl border border-border/80 bg-card p-5 shadow-card sm:p-8 lg:col-span-7 lg:p-10"
        >
          <div
            id="how-we-work-detail"
            role="region"
            aria-labelledby="how-we-work-step-heading"
            aria-live="polite"
            aria-atomic="true"
            className="flex flex-col gap-6 sm:gap-8"
          >
            <div className="flex items-center justify-between gap-4">
              <span className="text-xs font-medium tracking-wider text-primary">
                {currentStep.stepKicker}
              </span>
              <span aria-hidden="true" className="flex items-center gap-1.5">
                {STEPS.map((step, index) => {
                  const isCompleted = index < activeStepIndex;
                  const isCurrent = index === activeStepIndex;

                  return (
                    <span
                      key={step.id}
                      className="relative h-1 w-6 overflow-hidden rounded-full bg-border sm:w-8"
                    >
                      <motion.span
                        className="absolute inset-0 origin-left rounded-full bg-primary"
                        style={{ scaleX: isCompleted ? 1 : isCurrent ? progress : 0 }}
                      />
                    </span>
                  );
                })}
              </span>
            </div>

            <AnimatePresence mode="wait" initial={false} custom={direction}>
              <motion.div
                key={currentStep.id}
                custom={direction}
                initial={reduceMotion ? false : { opacity: 0, x: direction * 18, filter: "blur(4px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                exit={reduceMotion ? { opacity: 1 } : { opacity: 0, x: direction * -12, filter: "blur(3px)" }}
                transition={{ duration: reduceMotion ? 0 : 0.38, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col gap-6 sm:gap-8"
              >
                <div className="flex flex-col gap-4">
                  <h3 id="how-we-work-step-heading" className="type-h3 max-w-md text-heading">
                    {currentStep.headlineFirst}{" "}
                    <span className="text-primary">{currentStep.headlineAccent}</span>
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {currentStep.summary}
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-6 border-t border-border/70 pt-6 sm:grid-cols-2 sm:gap-8 sm:pt-8">
                  {currentStep.features.map((feature, index) => (
                    <motion.div
                      key={feature.title}
                      data-animated-icon-target
                      initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: reduceMotion ? 0 : 0.32, delay: reduceMotion ? 0 : 0.08 + index * 0.06 }}
                      className="group flex cursor-default items-start gap-3"
                    >
                      <span
                        aria-hidden="true"
                        className="flex size-6 shrink-0 items-center justify-center text-primary transition-transform duration-200 group-hover:scale-110"
                      >
                        <AnimatedIcon icon={feature.icon} size={19} />
                      </span>
                      <div className="flex flex-col gap-1">
                        <h4 className="text-sm font-semibold text-heading transition-colors duration-200 group-hover:text-primary">
                          {feature.title}
                        </h4>
                        <p className="text-sm leading-relaxed text-muted-foreground">
                          {feature.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border/70 pt-6">
            <span className="text-xs text-muted-foreground">
              {currentStep.subtitle}
            </span>
            <Button
              type="button"
              onClick={handleNextStep}
              disableScrollAnimation
              className="rounded-lg"
            >
              <span>
                {activeStepIndex === STEPS.length - 1
                  ? STEP_NARRATIVE_COPY.startYourProject
                  : STEP_NARRATIVE_COPY.nextStep(currentStep.nextStepName)}
              </span>
              <AnimatedIcon name="arrow-right" size={16} />
            </Button>
          </div>
        </motion.div>
      </motion.div>

      <div className="flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-6">
        {HOW_WE_WORK_TRUST_POINTS.map((point) => (
          <div key={point} className="flex items-center gap-2 text-xs text-muted-foreground sm:text-sm">
            <span aria-hidden="true" className="text-primary">
              <AnimatedIcon name="check" size={15} />
            </span>
            <span>{point}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
