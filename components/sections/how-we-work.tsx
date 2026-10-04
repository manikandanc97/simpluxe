"use client";

import { useLead } from "@/components/leads/lead-provider";
import { STEPS, HOW_WE_WORK_SECTION_CONTENT } from "@/lib/content/how-we-work";
import { ShieldCheck } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState, useEffect, useRef, useCallback } from "react";
import { StepVisual } from "./how-we-work/step-visuals";
import { StepNavigation } from "./how-we-work/step-navigation";
import { StepNarrative } from "./how-we-work/step-narrative";
import { SectionHeader } from "@/components/ui/section-header";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { AnimatedText } from "@/components/ui/animated-text";

export function HowWeWork() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const { openLead } = useLead();

  const sectionRef = useRef<HTMLElement>(null);
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
    <Section id="how-we-work" className="overflow-hidden" ref={sectionRef}>
      {/* Decorative Dotted Grid Accents */}
      <div className="hidden lg:block pointer-events-none absolute top-16 left-8 w-28 h-28 hero-dots hww-dots opacity-40" />
      <div className="hidden lg:block pointer-events-none absolute top-1/2 left-3 w-20 h-28 hero-dots hww-dots opacity-35" />
      <div className="hidden lg:block pointer-events-none absolute top-28 right-10 w-24 h-24 hero-dots hww-dots opacity-35" />

      {/* Main Content Box */}
      <Container className="relative z-10 flex flex-col gap-8 sm:gap-10 lg:gap-12 justify-center">
            
            {/* SECTION HEADER */}
            <SectionHeader
              eyebrow={HOW_WE_WORK_SECTION_CONTENT.eyebrow}
              centered
              title={HOW_WE_WORK_SECTION_CONTENT.title}
              highlightedText={HOW_WE_WORK_SECTION_CONTENT.highlightedText}
              className="gap-1.5 sm:gap-2"
              maxWidth="max-w-4xl"
              description={
                <>
                  <AnimatedText text={HOW_WE_WORK_SECTION_CONTENT.descriptionLine1} staggerDelay={0.015} />
                  <br className="hidden sm:inline" /> <AnimatedText text={HOW_WE_WORK_SECTION_CONTENT.descriptionLine2} staggerDelay={0.015} />
                </>
              }
            />

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
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
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

        </Container>
    </Section>
  );
}
