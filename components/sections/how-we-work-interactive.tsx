"use client";

import { useLead } from "@/components/leads/lead-provider";
import { STEPS, HOW_WE_WORK_SECTION_CONTENT } from "@/lib/content/how-we-work";
import { ShieldCheckIcon } from "@animateicons/react/lucide";
import { AnimatePresence, motion } from "motion/react";
import { useState, useEffect, useRef, useCallback } from "react";
import { StepVisual } from "./how-we-work/step-visuals";
import { StepNavigation } from "./how-we-work/step-navigation";
import { StepNarrative } from "./how-we-work/step-narrative";

export function HowWeWorkInteractive() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const { openLead } = useLead();

  const navContainerRef = useRef<HTMLDivElement>(null);

  // Update active step when user clicks a step tab or the Next button
  const scrollToStep = useCallback((targetIndex: number) => {
    const clampedIndex = Math.max(0, Math.min(targetIndex, STEPS.length - 1));
    setActiveStepIndex(clampedIndex);
  }, []);

  useEffect(() => {
    if (navContainerRef.current) {
      const container = navContainerRef.current;
      const activeBtn = container.querySelector(`[data-step="${activeStepIndex}"]`) as HTMLElement;
      if (activeBtn) {
        container.scrollTo({ left: Math.max(0, activeBtn.offsetLeft - 16), behavior: "smooth" });
      }
    }
  }, [activeStepIndex]);

  const currentStep = STEPS[activeStepIndex];

  const handleNextStep = () => {
    if (activeStepIndex < STEPS.length - 1) {
      scrollToStep(activeStepIndex + 1);
    } else {
      openLead({ source: "how-we-work" });
    }
  };

  return (
    <>
      {/* STEPPER NAVIGATION BAR */}
      <StepNavigation
        navContainerRef={navContainerRef}
        activeStepIndex={activeStepIndex}
        onSelectStep={scrollToStep}
      />

      {/* MAIN BENTO CARD (Left Narrative + Right 3D Visual Scene) */}
      <div className="w-full bg-white rounded-2xl sm:rounded-3xl border border-neutral-200/80 shadow-card p-4 xs:p-6 sm:p-6 lg:p-8 relative overflow-hidden min-h-[400px] lg:h-auto lg:flex-1 lg:max-h-[500px] flex items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep.id}
            initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -12, filter: "blur(4px)" }}
            transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
            className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-10 items-center"
          >
            <StepNarrative
              currentStep={currentStep}
              activeStepIndex={activeStepIndex}
              totalSteps={STEPS.length}
              onNextStep={handleNextStep}
            />

            <StepVisual activeStepIndex={activeStepIndex} />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Trust & Scroll Navigation Affordance Bar */}
      <div className="pt-4 border-t border-neutral-200/60 flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left text-xs font-mono text-neutral-500">
        <div className="flex items-center gap-2">
          <ShieldCheckIcon className="w-4 h-4 text-emerald-600 shrink-0" />
          <span className="text-xs sm:text-xs">{HOW_WE_WORK_SECTION_CONTENT.trustNote}</span>
        </div>

        <div className="hidden sm:flex items-center gap-2 text-xs text-neutral-400 uppercase tracking-wider font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
          {activeStepIndex === STEPS.length - 1 ? (
            <span className="text-rose-600 font-bold">Step 04 / 04 · {HOW_WE_WORK_SECTION_CONTENT.scrollContinue}</span>
          ) : (
            <span>Step 0{activeStepIndex + 1} / 04 · {HOW_WE_WORK_SECTION_CONTENT.scrollExplore}</span>
          )}
        </div>
      </div>
    </>
  );
}
