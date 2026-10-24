import { AnimatedIcon } from "@/components/ui/animated-icon";
import { TECH_VALUE_STRIP_COPY } from "@/lib/data/tech-stack";

import { ChartBarIcon } from "@animateicons/react/lucide/chart-bar-icon";
import { InfinityIcon } from "@animateicons/react/lucide/infinity-icon";
import { ShieldCheckIcon } from "@animateicons/react/lucide/shield-check-icon";
import { ZapIcon } from "@animateicons/react/lucide/zap-icon";
import * as motion from "motion/react-m";
import { fadeUp, staggerContainer, viewportReveal } from "@/lib/motion";

export function ValueStrip() {
  return (
    <motion.div 
      variants={staggerContainer(0.1, 0.2)}
      {...viewportReveal}
      className="ts-value-strip w-full max-w-5xl self-center rounded-2xl border border-slate-200/80 bg-slate-50 px-4 py-4 shadow-xs backdrop-blur-md sm:px-8 lg:px-12"
    >
      <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
        {/* 1. Reliable */}
        <motion.div data-animated-icon-target variants={fadeUp} className="flex min-w-0 flex-col items-center gap-2 text-center md:flex-row md:gap-4 md:text-left">
          <div className="size-9 rounded-full bg-white border border-rose-100 shadow-2xs flex items-center justify-center shrink-0">
            <AnimatedIcon icon={ShieldCheckIcon} className="w-5 h-5 text-rose-500" />
          </div>
          <div className="flex min-w-0 flex-col items-center text-center md:items-start md:text-left">
            <span className="text-xs font-bold text-slate-900 sm:text-sm">
              {TECH_VALUE_STRIP_COPY.reliable}</span>
            <span className="text-xs leading-tight text-slate-500">
              {TECH_VALUE_STRIP_COPY.battleTestedInRealProjects}</span>
          </div>
        </motion.div>

        {/* 2. Performant */}
        <motion.div data-animated-icon-target variants={fadeUp} className="flex min-w-0 flex-col items-center gap-2 text-center md:flex-row md:gap-4 md:text-left">
          <div className="size-9 rounded-full bg-white border border-purple-100 shadow-2xs flex items-center justify-center shrink-0">
            <AnimatedIcon icon={ZapIcon} className="w-5 h-5 text-purple-600 fill-purple-600/20" />
          </div>
          <div className="flex min-w-0 flex-col items-center text-center md:items-start md:text-left">
            <span className="text-xs font-bold text-slate-900 sm:text-sm">
              {TECH_VALUE_STRIP_COPY.performant}</span>
            <span className="text-xs text-slate-500 leading-tight">
              {TECH_VALUE_STRIP_COPY.optimizedForSpeed}</span>
          </div>
        </motion.div>

        {/* 3. Scalable */}
        <motion.div data-animated-icon-target variants={fadeUp} className="flex min-w-0 flex-col items-center gap-2 text-center md:flex-row md:gap-4 md:text-left">
          <div className="size-9 rounded-full bg-white border border-indigo-100 shadow-2xs flex items-center justify-center shrink-0">
            <AnimatedIcon icon={ChartBarIcon} className="w-5 h-5 text-indigo-600" />
          </div>
          <div className="flex min-w-0 flex-col items-center text-center md:items-start md:text-left">
            <span className="text-xs font-bold text-slate-900 sm:text-sm">
              {TECH_VALUE_STRIP_COPY.scalable}</span>
            <span className="text-xs text-slate-500 leading-tight">
              {TECH_VALUE_STRIP_COPY.growsWithYourBusiness}</span>
          </div>
        </motion.div>

        {/* 4. Future-ready */}
        <motion.div data-animated-icon-target variants={fadeUp} className="flex min-w-0 flex-col items-center gap-2 text-center md:flex-row md:gap-4 md:text-left">
          <div className="size-9 rounded-full bg-white border border-pink-100 shadow-2xs flex items-center justify-center shrink-0">
            <AnimatedIcon icon={InfinityIcon} className="w-5 h-5 text-pink-600" />
          </div>
          <div className="flex min-w-0 flex-col items-center text-center md:items-start md:text-left">
            <span className="text-xs font-bold text-slate-900 sm:text-sm">
              {TECH_VALUE_STRIP_COPY.futureReady}</span>
            <span className="text-xs text-slate-500 leading-tight">
              {TECH_VALUE_STRIP_COPY.alwaysEvolvingWithBestTools}</span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
