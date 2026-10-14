"use client";

import { useLead } from "@/components/leads/lead-provider";
import { Button } from "@/components/ui/button";
import {
  HOW_WE_WORK_SECTION_CONTENT,
  HOW_WE_WORK_TRUST_POINTS,
  STEP_NARRATIVE_COPY,
  STEPS,
} from "@/lib/content/how-we-work";
import { AnimatedIcon } from "@/components/ui/animated-icon";
import { cn } from "@/lib/utils";
import { m as motion, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";

const STEP_DURATION = 8000;
const TICK_INTERVAL = 40;

export function HowWeWorkInteractive() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const progressRef = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { amount: 0.25 });
  const { openLead } = useLead();
  const reduceMotion = useReducedMotion();
  const currentStep = STEPS[activeStepIndex];

  useEffect(() => {
    if (!isInView || isPaused || reduceMotion) return;

    const startTime = Date.now() - (progressRef.current / 100) * STEP_DURATION;

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const currentProgress = (elapsed / STEP_DURATION) * 100;

      if (currentProgress >= 100) {
        progressRef.current = 0;
        setProgress(0);
        setActiveStepIndex((prev) => (prev + 1) % STEPS.length);
      } else {
        progressRef.current = currentProgress;
        setProgress(currentProgress);
      }
    }, TICK_INTERVAL);

    return () => clearInterval(timer);
  }, [activeStepIndex, isInView, isPaused, reduceMotion]);

  const handleSelectStep = (index: number) => {
    setActiveStepIndex(index);
    progressRef.current = 0;
    setProgress(0);
  };

  const handleNextStep = () => {
    if (activeStepIndex < STEPS.length - 1) {
      setActiveStepIndex(activeStepIndex + 1);
      progressRef.current = 0;
      setProgress(0);
    } else {
      openLead({ source: "how-we-work" });
    }
  };

  return (
    <div
      ref={containerRef}
      className="flex w-full flex-col gap-8 lg:gap-12"
    >
      <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-16">
        <div className="flex min-w-0 flex-col gap-6 lg:col-span-5 lg:gap-8">
          <div className="flex flex-col gap-4">
            <span className="flex items-center gap-3 text-xs font-semibold tracking-widest text-primary">
              <span aria-hidden="true" className="h-px w-8 bg-primary/40" />
              {HOW_WE_WORK_SECTION_CONTENT.eyebrow}
            </span>
            <h2 id="how-we-work-heading" className="type-h2 text-heading">
              {HOW_WE_WORK_SECTION_CONTENT.title}{" "}
              <span className="text-primary">
                {HOW_WE_WORK_SECTION_CONTENT.highlightedText}
              </span>
            </h2>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground sm:text-base">
              {HOW_WE_WORK_SECTION_CONTENT.descriptionLine1}
            </p>
          </div>

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
                    "group relative flex min-w-0 flex-1 flex-col items-center gap-2 overflow-hidden rounded-xl px-2.5 py-3.5 text-left transition-all focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary lg:flex-row lg:gap-5 lg:px-4 lg:py-4",
                    isActive
                      ? "border border-primary/25 bg-primary/8 text-primary shadow-2xs"
                      : "border border-transparent text-muted-foreground hover:border-border hover:bg-primary/5 hover:text-heading"
                  )}
                >
                  <span className="text-xs font-medium tabular-nums lg:text-sm">
                    {step.number}
                  </span>
                  <span className="flex min-w-0 flex-1 flex-col gap-1">
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
                      "hidden size-8 items-center justify-center rounded-lg transition-colors lg:flex",
                      isActive ? "bg-primary text-white" : "text-muted-foreground/60"
                    )}
                  >
                    <AnimatedIcon name="arrow-right" size={15} />
                  </span>

                  {/* Active step dynamic progress line */}
                  {isActive && (
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-0 h-0.5 bg-primary transition-all duration-75 ease-linear pointer-events-none"
                      style={{ width: `${progress}%` }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        <div
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
                      className="relative h-1 w-6 sm:w-8 overflow-hidden rounded-full bg-border"
                    >
                      <span
                        className={cn(
                          "absolute inset-y-0 left-0 bg-primary rounded-full transition-all duration-75 ease-linear",
                          isCompleted ? "w-full" : isCurrent ? "" : "w-0"
                        )}
                        style={isCurrent ? { width: `${progress}%` } : undefined}
                      />
                    </span>
                  );
                })}
              </span>
            </div>

            <motion.div
              key={currentStep.id}
              initial={reduceMotion ? false : { opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.2 }}
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
                {currentStep.features.map((feature) => (
                  <div key={feature.title} className="flex items-start gap-3">
                    <span aria-hidden="true" className="flex size-6 shrink-0 items-center justify-center text-primary">
                      <AnimatedIcon icon={feature.icon} size={19} />
                    </span>
                    <div className="flex flex-col gap-1">
                      <h4 className="text-sm font-semibold text-heading">
                        {feature.title}
                      </h4>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
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
        </div>
      </div>

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
