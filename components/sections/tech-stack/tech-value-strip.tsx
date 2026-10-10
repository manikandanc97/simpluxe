"use client";

import { TECH_VALUE_STRIP_COPY } from "@/lib/content/tech-stack";

import { ChartBarIcon } from "@animateicons/react/lucide/chart-bar-icon";
import { InfinityIcon } from "@animateicons/react/lucide/infinity-icon";
import { ShieldCheckIcon } from "@animateicons/react/lucide/shield-check-icon";
import { ZapIcon } from "@animateicons/react/lucide/zap-icon";
import { m as motion } from "motion/react";
import { fadeUp, staggerContainer, viewportReveal } from "@/lib/motion";

export function TechValueStrip() {
  return (
    <motion.div 
      variants={staggerContainer(0.1, 0.2)}
      {...viewportReveal}
      className="ts-value-strip max-w-5xl mx-auto bg-white/95 dark:bg-card/90 backdrop-blur-md border border-slate-200/80 dark:border-border/70 rounded-2xl sm:rounded-full py-4 px-4 sm:px-8 lg:px-12 shadow-card w-full"
    >
      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-4.5 sm:gap-6">
        {/* 1. Reliable */}
        <motion.div variants={fadeUp} className="flex items-center gap-4 min-w-0">
          <div className="w-9 h-9 rounded-full bg-rose-50 dark:bg-rose-950/40 border border-rose-100 dark:border-rose-900/40 flex items-center justify-center shrink-0">
            <ShieldCheckIcon className="w-5 h-5 text-rose-500" />
          </div>
          <div className="flex flex-col text-left min-w-0">
            <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-foreground">
              {TECH_VALUE_STRIP_COPY.reliable}</span>
            <span className="text-xs text-slate-500 dark:text-muted-foreground leading-tight truncate xs:whitespace-normal">
              {TECH_VALUE_STRIP_COPY.battleTestedInRealProjects}</span>
          </div>
        </motion.div>

        {/* 2. Performant */}
        <motion.div variants={fadeUp} className="flex items-center gap-4 min-w-0">
          <div className="w-9 h-9 rounded-full bg-purple-50 dark:bg-purple-950/40 border border-purple-100 dark:border-purple-900/40 flex items-center justify-center shrink-0">
            <ZapIcon className="w-5 h-5 text-purple-600 fill-purple-600/20" />
          </div>
          <div className="flex flex-col text-left min-w-0">
            <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-foreground">
              {TECH_VALUE_STRIP_COPY.performant}</span>
            <span className="text-xs text-slate-500 dark:text-muted-foreground leading-tight">
              {TECH_VALUE_STRIP_COPY.optimizedForSpeed}</span>
          </div>
        </motion.div>

        {/* 3. Scalable */}
        <motion.div variants={fadeUp} className="flex items-center gap-4 min-w-0">
          <div className="w-9 h-9 rounded-full bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/40 flex items-center justify-center shrink-0">
            <ChartBarIcon className="w-5 h-5 text-indigo-600" />
          </div>
          <div className="flex flex-col text-left min-w-0">
            <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-foreground">
              {TECH_VALUE_STRIP_COPY.scalable}</span>
            <span className="text-xs text-slate-500 dark:text-muted-foreground leading-tight">
              {TECH_VALUE_STRIP_COPY.growsWithYourBusiness}</span>
          </div>
        </motion.div>

        {/* 4. Future-ready */}
        <motion.div variants={fadeUp} className="flex items-center gap-4 min-w-0">
          <div className="w-9 h-9 rounded-full bg-pink-50 dark:bg-pink-950/40 border border-pink-100 dark:border-pink-900/40 flex items-center justify-center shrink-0">
            <InfinityIcon className="w-5 h-5 text-pink-600" />
          </div>
          <div className="flex flex-col text-left min-w-0">
            <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-foreground">
              {TECH_VALUE_STRIP_COPY.futureReady}</span>
            <span className="text-xs text-slate-500 dark:text-muted-foreground leading-tight">
              {TECH_VALUE_STRIP_COPY.alwaysEvolvingWithBestTools}</span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
