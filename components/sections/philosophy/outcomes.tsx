import { PHILOSOPHY_OUTCOMES_COPY } from "@/lib/data/philosophy";

import { AnimatedCounter } from "@/components/ui/animated-counter";
import { AnimatedIcon } from "@/components/ui/animated-icon";
import { REAL_OUTCOMES } from "@/lib/data/philosophy";
import { m as motion } from "motion/react";

interface OutcomesProps {
  inView: boolean;
}

export function Outcomes({ inView }: OutcomesProps) {
  return (
    <div className="relative">
      {/* Outcomes Card Container */}
      <motion.div
        initial={{ opacity: 0, x: 24, filter: "blur(8px)" }}
        animate={inView ? { opacity: 1, x: 0, filter: "blur(0px)" } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
        className="rounded-3xl bg-white border border-neutral-100 shadow-card p-6 flex flex-col gap-6 relative z-20"
      >
        {/* Header */}
        <div className="flex items-center gap-2 px-1">
          <div className="flex items-end gap-0.5 text-primary">
            <span className="w-1.5 h-2.5 bg-primary rounded-xs" />
            <span className="w-1.5 h-4 bg-primary rounded-xs" />
            <span className="w-1.5 h-3 bg-primary rounded-xs" />
          </div>
          <span className="text-xs font-bold tracking-widest text-primary uppercase">
            {PHILOSOPHY_OUTCOMES_COPY.realOutcomes}</span>
        </div>

        {/* 4 Outcome Stat Cards */}
        <div className="flex flex-col gap-4">
          {REAL_OUTCOMES.map((stat, i) => {
            const StatIcon = stat.icon;
            return (
              <motion.div data-animated-icon-target
                key={stat.label}
                data-slot="card"
                initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
                animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.28 + i * 0.08 }}
                className="flex cursor-default items-center gap-3 rounded-2xl border border-neutral-100/80 bg-white p-3 shadow-card transition-all duration-300 hover:border-primary/30 hover:shadow-md group"
              >
                <div className="flex min-w-0 flex-1 items-center gap-3">
                  <div className="size-11 rounded-full bg-primary/8 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                    <AnimatedIcon icon={StatIcon} size={18} />
                  </div>
                  <div className="flex min-w-0 flex-1 flex-col gap-0.5">
                    <span className="flex items-baseline gap-0.25 text-sm font-bold leading-tight text-neutral-900">
                      {stat.prefix && <span>{stat.prefix}</span>}
                      <AnimatedCounter
                        value={stat.value}
                        duration={1.5}
                        delay={i * 0.1}
                      />
                      {stat.suffix && <span>{stat.suffix}</span>}
                    </span>
                    <span className="whitespace-normal break-words text-xs leading-snug text-neutral-500">
                      {stat.label}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
