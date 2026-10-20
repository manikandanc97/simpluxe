"use client";

import { AnimatedIcon } from "@/components/ui/animated-icon";
import { FLOW_DIAGRAM_COPY } from "@/lib/content/philosophy";

import { ActivityIcon } from "@animateicons/react/huge/activity-icon";
import { m as motion } from "motion/react";
import { DesktopFlowCanvas } from "./desktop-flow-canvas";
import { MobileFlowGrid } from "./mobile-flow-grid";

export function FlowDiagram({ inView }: { inView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98, filter: "blur(8px)" }}
      animate={inView ? { opacity: 1, scale: 1, filter: "blur(0px)" } : {}}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      className="relative rounded-2xl bg-white border border-neutral-100 shadow-card p-4 flex flex-col justify-between gap-5 min-h-0 overflow-visible z-10 xs:p-6 sm:p-8 sm:gap-6 md:min-h-115"
    >
      {/* Top Bar inside Center Card */}
      <div data-animated-icon-target className="z-10 flex w-full items-center justify-center gap-2">
        <span className="text-xs font-bold uppercase tracking-widest text-primary">
          {FLOW_DIAGRAM_COPY.simpleSystem}
        </span>
        <AnimatedIcon
          icon={ActivityIcon}
          oncePerInteraction
          className="size-4 text-primary"
        />
      </div>

      {/* ── MOBILE FLOW VIEW (< md) ── */}
      <MobileFlowGrid />

      {/* ── DESKTOP FLOW CANVAS (hidden on mobile, visible on md+) ── */}
      <DesktopFlowCanvas inView={inView} />

      {/* Bottom Bar: YOUR IDEA ↔ REAL IMPACT */}
      <div className="flex items-center justify-between gap-2 w-full max-w-xl self-center px-2 z-10 pt-2 sm:gap-4 sm:px-4">
        <div className="flex items-center gap-1.5 shrink-0 sm:gap-2">
          <span className="size-1.5 rounded-full bg-primary" />
          <span className="text-xs font-mono font-bold text-neutral-400 uppercase tracking-widest sm:text-xs sm:tracking-widest">
            {FLOW_DIAGRAM_COPY.yourIdea}</span>
        </div>
        <div className="flex-1 border-b-2 border-dashed border-primary/25" />
        <div className="flex items-center gap-1.5 shrink-0 sm:gap-2">
          <span className="text-xs font-mono font-bold text-neutral-400 uppercase tracking-widest sm:text-xs sm:tracking-widest">
            {FLOW_DIAGRAM_COPY.realImpact}</span>
          <span className="size-1.5 rounded-full bg-primary" />
        </div>
      </div>
    </motion.div>
  );
}
