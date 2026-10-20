"use client";

import { PHILOSOPHY_PROCESS_STEPS_COPY } from "@/lib/content/philosophy";

import { PROCESS_STEPS } from "@/lib/content/philosophy";
import { AnimatedIcon } from "@/components/ui/animated-icon";
import { m as motion } from "motion/react";

interface PhilosophyProcessStepsProps {
  inView: boolean;
}

export function PhilosophyProcessSteps({ inView }: PhilosophyProcessStepsProps) {
  return (
    <div className="flex flex-col gap-4 relative z-20">
      {/* Header */}
      <div className="flex items-center gap-2 px-1">
        <span className="size-1.5 rounded-full bg-primary" />
        <span className="text-xs font-bold tracking-widest text-primary uppercase">
          {PHILOSOPHY_PROCESS_STEPS_COPY.process04}</span>
      </div>

      {/* 4 Cards */}
      <div className="flex flex-col gap-4">
        {PROCESS_STEPS.map((step, idx) => {
          const StepIcon = step.icon;
          return (
            <motion.div data-animated-icon-target
              key={step.num}
              data-slot="card"
              initial={{ opacity: 0, x: -24, filter: "blur(8px)" }}
              animate={inView ? { opacity: 1, x: 0, filter: "blur(0px)" } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 + idx * 0.08 }}
              className={`group relative rounded-3xl p-2.5 sm:p-4 pr-4 flex items-center gap-4 bg-white border transition-all duration-300 ${
                step.active
                  ? "border-primary/30 shadow-elevated"
                  : "border-neutral-100/80 shadow-card hover:shadow-md"
              }`}
            >
              {/* Number pill */}
              <div
                className={`size-10 rounded-full flex items-center justify-center text-sm font-black shrink-0 font-mono ${
                  step.active
                    ? "bg-primary text-white shadow-sm"
                    : "bg-neutral-50/80 text-neutral-800"
                }`}
              >
                {step.num}
              </div>

              {/* Icon */}
              <div
                className={`flex items-center justify-center shrink-0 ${
                  step.active ? "text-primary" : "text-primary/70"
                }`}
              >
                <AnimatedIcon icon={StepIcon} size={16} />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-0.5 min-w-0">
                <span className="text-sm font-bold text-neutral-900 leading-tight">
                  {step.title}
                </span>
                <span className="text-xs text-neutral-500 leading-snug">
                  {step.desc} {step.subDesc}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
