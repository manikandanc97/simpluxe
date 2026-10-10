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
        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
        <span className="text-xs font-bold tracking-widest text-primary uppercase">
          {PHILOSOPHY_PROCESS_STEPS_COPY.process04}</span>
      </div>

      {/* 4 Cards */}
      <div className="flex flex-col gap-4">
        {PROCESS_STEPS.map((step, idx) => {
          const StepIcon = step.icon;
          return (
            <motion.div
              key={step.num}
              data-slot="card"
              initial={{ opacity: 0, x: -24, filter: "blur(8px)" }}
              animate={inView ? { opacity: 1, x: 0, filter: "blur(0px)" } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 + idx * 0.08 }}
              className={`group relative rounded-3xl p-2.5 sm:p-4 pr-4 flex items-center gap-4 bg-white border transition-all duration-300 ${
                step.active
                  ? "border-rose-100/80 shadow-elevated"
                  : "border-neutral-100/80 shadow-card hover:shadow-md"
              }`}
            >
              {/* Number pill */}
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-black shrink-0 font-mono ${
                  step.active
                    ? "bg-primary-hover text-white shadow-sm"
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
                <AnimatedIcon icon={StepIcon} size={16} className="w-4 h-4" />
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

              {/* Connector dot on Card 01 right edge with continuous dashed bezier curve */}
              {step.active && (
                <div className="hidden xl:block absolute -right-1.5 top-1/2 -translate-y-1/2 z-40 pointer-events-none">
                  {/* Dot */}
                  <span className="block w-2.5 h-2.5 rounded-full bg-primary-hover border-2 border-white shadow-sm" />

                  {/* Single unbroken swooping curved dashed line from Card 01 dot to Direct access card */}
                  <svg
                    className="absolute left-1 top-1 overflow-visible pointer-events-none"
                    style={{ width: "120px", height: "80px" }}
                    fill="none"
                  >
                    <defs>
                      <linearGradient id="card1ConnectorGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#831843" />
                        <stop offset="50%" stopColor="#D23D78" stopOpacity="0.6" />
                        <stop offset="100%" stopColor="#D23D78" stopOpacity="0.2" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M 0 0 C 40 0, 30 40, 100 40"
                      stroke="url(#card1ConnectorGrad)"
                      strokeWidth="1.5"
                      strokeDasharray="3 4"
                    />
                  </svg>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Handwritten annotation under Card 04 with curved arrow */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
        className="relative pt-2 pl-4 select-none pointer-events-none"
      >
        <span className="font-handwriting text-sm sm:text-base text-primary-hover block -rotate-3 leading-tight drop-shadow-sm">
          {PHILOSOPHY_PROCESS_STEPS_COPY.simpleProcess}<br />
          {PHILOSOPHY_PROCESS_STEPS_COPY.realResults}</span>
        <svg
          className="w-8 h-8 text-primary-hover ml-20 -mt-1 rotate-12"
          viewBox="0 0 28 28"
          fill="none"
        >
          <motion.path
            initial={{ pathLength: 0 }}
            animate={inView ? { pathLength: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.9, ease: "easeInOut" }}
            d="M 4 22 C 10 16, 16 10, 22 6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            animate={inView ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 0.3, delay: 1.6, ease: "easeOut" }}
            d="M 14 6 L 22 6 L 22 14"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>
    </div>
  );
}
