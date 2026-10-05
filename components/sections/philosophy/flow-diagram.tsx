"use client";

import { ActivityIcon } from "@animateicons/react/lucide";
import { m as motion } from "motion/react";
import { DesktopFlowCanvas } from "./desktop-flow-canvas";
import { MobileFlowGrid } from "./mobile-flow-grid";

export function FlowDiagram({ inView }: { inView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98, filter: "blur(8px)" }}
      animate={inView ? { opacity: 1, scale: 1, filter: "blur(0px)" } : {}}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      className="relative rounded-2xl bg-white border border-neutral-100 shadow-card p-4 xs:p-6 sm:p-8 flex flex-col justify-between gap-5 sm:gap-6 min-h-0 md:min-h-[460px] overflow-visible z-10"
    >
      {/* Top Bar inside Center Card */}
      <div className="flex items-center justify-between w-full z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-rose-50 border border-rose-100/60 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
          <span className="text-xs sm:text-xs font-bold tracking-[0.2em] text-primary uppercase">
            SIGNAL / 01
          </span>
        </div>
        <div className="flex items-center gap-2 text-neutral-400">
          <span className="text-xs sm:text-xs font-mono font-semibold tracking-widest uppercase">
            SIMPLE SYSTEM
          </span>
          <ActivityIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
        </div>
      </div>

      {/* ── MOBILE FLOW VIEW (< md) ── */}
      <MobileFlowGrid />

      {/* ── DESKTOP FLOW CANVAS (hidden on mobile, visible on md+) ── */}
      <DesktopFlowCanvas inView={inView} />

      {/* Bottom Bar: YOUR IDEA ↔ REAL IMPACT */}
      <div className="flex items-center justify-between w-full max-w-xl mx-auto px-2 sm:px-4 z-10 pt-2">
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
          <span className="text-xs sm:text-xs font-mono font-bold text-neutral-400 uppercase tracking-[0.15em] sm:tracking-[0.2em]">
            YOUR IDEA
          </span>
        </div>
        <div className="flex-1 mx-2 sm:mx-4 border-b-2 border-dashed border-rose-100/60" />
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          <span className="text-xs sm:text-xs font-mono font-bold text-neutral-400 uppercase tracking-[0.15em] sm:tracking-[0.2em]">
            REAL IMPACT
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--chart-2)]" />
        </div>
      </div>
    </motion.div>
  );
}
