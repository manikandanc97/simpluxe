"use client";

import { AnimatedCounter } from "@/components/ui/animated-counter";
import { AnimatedIcon } from "@/components/ui/animated-icon";
import { REAL_OUTCOMES } from "@/lib/content/philosophy";
import { ArrowUpRightIcon } from "@animateicons/react/lucide/arrow-up-right-icon";
import { motion } from "motion/react";

interface PhilosophyOutcomesProps {
  inView: boolean;
}

export function PhilosophyOutcomes({ inView }: PhilosophyOutcomesProps) {
  return (
    <div className="relative">
      {/* Top-Right Handwritten Annotation with curved arrow pointing to diagram */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
        className="hidden sm:block absolute -top-12 right-2 lg:-top-16 lg:right-10 pointer-events-none select-none z-40"
      >
        <span className="font-handwriting text-sm sm:text-base text-[var(--primary-hover)] block rotate-3 leading-tight text-center drop-shadow-sm">
          From
          <br />
          Idea to Impact
        </span>
        <svg
          className="w-8 h-8 text-[var(--primary-hover)] -ml-2 -mt-0.5 rotate-[120deg]"
          viewBox="0 0 28 28"
          fill="none"
        >
          <motion.path
            initial={{ pathLength: 0 }}
            animate={inView ? { pathLength: 1 } : {}}
            transition={{ duration: 0.8, delay: 1.0, ease: "easeInOut" }}
            d="M 6 4 C 10 12, 16 18, 22 22"
            stroke="currentColor"
            strokeLinecap="round"
          />
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            animate={inView ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 0.3, delay: 1.7, ease: "easeOut" }}
            d="M 14 22 L 22 22 L 20 14"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>

      {/* Outcomes Card Container */}
      <motion.div
        initial={{ opacity: 0, x: 24, filter: "blur(8px)" }}
        animate={inView ? { opacity: 1, x: 0, filter: "blur(0px)" } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
        className="rounded-3xl bg-white border border-neutral-100 shadow-card p-6 flex flex-col gap-6 relative z-20"
      >
        {/* Header */}
        <div className="flex items-center gap-2 px-1">
          <div className="flex items-end gap-0.5 text-[var(--primary-hover)]">
            <span className="w-1.5 h-2.5 bg-[var(--primary-hover)] rounded-[1px]" />
            <span className="w-1.5 h-4 bg-[var(--primary-hover)] rounded-[1px]" />
            <span className="w-1.5 h-3 bg-[var(--primary-hover)] rounded-[1px]" />
          </div>
          <span className="text-xs font-bold tracking-[0.2em] text-[var(--primary-hover)] uppercase">
            REAL OUTCOMES
          </span>
        </div>

        {/* 4 Outcome Stat Cards */}
        <div className="flex flex-col gap-4">
          {REAL_OUTCOMES.map((stat, i) => {
            const StatIcon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
                animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.28 + i * 0.08 }}
                className="bg-white rounded-2xl border border-neutral-100/80 shadow-card p-2.5 flex items-center justify-between gap-2 hover:shadow-md hover:border-rose-100 transition-all duration-300 group cursor-default"
              >
                <div className="flex items-center gap-4 min-w-0">
                  <div className="w-11 h-11 rounded-full bg-rose-50 border border-rose-100/50 flex items-center justify-center text-primary shrink-0">
                    <StatIcon className="w-[18px] h-[18px]" />
                  </div>
                  <div className="flex flex-col gap-1 min-w-0">
                    <span className="text-xl font-black text-neutral-900 tracking-tight leading-none font-satoshi flex items-baseline gap-[1px]">
                      {stat.prefix && <span className="text-lg">{stat.prefix}</span>}
                      <AnimatedCounter
                        value={stat.value}
                        duration={1.5}
                        delay={i * 0.1}
                      />
                      {stat.suffix && <span className="text-lg">{stat.suffix}</span>}
                    </span>
                    <span className="text-xs text-neutral-500 font-medium leading-tight truncate">
                      {stat.label}
                    </span>
                  </div>
                </div>

                {/* Small Circular Arrow Button */}
                <div className="w-7 h-7 rounded-full bg-white border border-neutral-100/80 shadow-xs flex items-center justify-center text-neutral-400 group-hover:text-neutral-600 group-hover:border-neutral-200 transition-colors shrink-0 ml-1">
                  <AnimatedIcon icon={ArrowUpRightIcon} size={14} className="w-3.5 h-3.5" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
