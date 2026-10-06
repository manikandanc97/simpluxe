"use client";

import { ChevronDownIcon } from "@animateicons/react/lucide/chevron-down-icon";
import { cn } from "@/lib/utils";
import { AnimatedArrowRight } from "@/components/ui/animated-icons/convenience-icons";
import { AnimatedIcon } from "@/components/ui/animated-icon";
import { STEPS } from "@/lib/content/how-we-work";
import { Button } from "@/components/ui/button";
import { m as motion, Variants } from "motion/react";
import { fadeUp } from "@/lib/motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

interface StepNarrativeProps {
  currentStep: (typeof STEPS)[number];
  activeStepIndex: number;
  totalSteps: number;
  onNextStep: () => void;
}

export function StepNarrative({
  currentStep,
  activeStepIndex,
  totalSteps,
  onNextStep,
}: StepNarrativeProps) {
  return (
    <motion.div 
      variants={containerVariants} 
      initial="hidden" 
      animate="visible" 
      className="hww-narrative lg:col-span-6 flex flex-col gap-4 sm:gap-6 z-10"
    >
      <div className="flex flex-col gap-2 sm:gap-4">
        {/* Step Kicker */}
        <motion.div variants={fadeUp} className="flex items-center gap-2">
          <span className="inline-block px-4 py-1 rounded-full bg-rose-50 border border-rose-200/80 text-xs sm:text-xs font-black tracking-widest text-primary uppercase">
            {currentStep.stepKicker}
          </span>
          <span className="hidden sm:inline-block text-xs font-mono text-neutral-400">
            {activeStepIndex + 1} / {totalSteps}
          </span>
        </motion.div>

        {/* Big Headline */}
        <motion.h3 variants={fadeUp} className="font-satoshi font-black text-2xl xs:text-3xl sm:text-3xl lg:text-3xl xl:text-4xl text-neutral-900 tracking-tight leading-[1.15]">
          {currentStep.headlineFirst}{" "}
          <span className="bg-gradient-to-r from-purple-600 via-rose-600 to-pink-600 bg-clip-text text-transparent">
            {currentStep.headlineAccent}
          </span>
        </motion.h3>

        {/* Description Paragraph */}
        <motion.p variants={fadeUp} className="text-neutral-500 text-xs sm:text-sm lg:text-sm font-normal leading-relaxed max-w-lg">
          {currentStep.summary}
        </motion.p>
      </div>

      {/* 2x2 Feature Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2">
        {currentStep.features.map((feature, idx) => {
          const FeatIcon = feature.icon;
          return (
            <motion.div
              variants={fadeUp}
              key={idx}
              data-slot="card"
              className="bg-neutral-50/70 rounded-2xl border border-neutral-200/70 p-2 sm:p-2.5 hover:bg-white hover:shadow-card hover:border-purple-200/80 transition-all flex items-start gap-2 group cursor-default"
            >
              <div
                className={cn(
                  "w-7 h-7 sm:w-8 sm:h-8 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-105",
                  feature.iconBg,
                  feature.iconColor
                )}
              >
                <AnimatedIcon icon={FeatIcon} size={14} className="w-3.5 h-3.5" />
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="font-bold text-xs sm:text-xs text-neutral-900 leading-tight">
                  {feature.title}
                </span>
                <span className="text-xs text-neutral-500 leading-snug line-clamp-2">
                  {feature.desc}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom Action Row: Primary Next Step Button */}
      <motion.div variants={fadeUp} className="flex items-center gap-4 sm:gap-4 flex-wrap pt-1">
        <Button
          size="default"
          type="button"
          onClick={onNextStep}
          className="w-full sm:w-auto shadow-elevated"
        >
          <span>
            {activeStepIndex === totalSteps - 1
              ? "Start Your Project"
              : `Next Step: ${currentStep.nextStepName}`}
          </span>
          <AnimatedArrowRight size={15} className="text-white" />
        </Button>

        {activeStepIndex < totalSteps - 1 && (
          <span className="hidden sm:inline-flex items-center gap-1.5 text-xs text-neutral-400 font-medium">
            <span>or scroll down</span>
            <ChevronDownIcon className="w-3.5 h-3.5 text-rose-500 animate-bounce" />
          </span>
        )}
      </motion.div>
    </motion.div>
  );
}
