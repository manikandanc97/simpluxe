"use client";

import { m as motion, useReducedMotion } from "motion/react";
import { CUSTOM_SOFTWARE_COPY as COPY } from "@/lib/data/what-we-build-mockups";
import { MockupFrame } from "./mockup-frame";

export function CustomSoftwareMockup({ isActive }: { isActive?: boolean }) {
  const reducedMotion = useReducedMotion();
  const active = Boolean(isActive && !reducedMotion);
  const loop = { duration: 7, repeat: active ? Infinity : 0, ease: "easeInOut" as const };

  return (
    <MockupFrame
      gradientClass="bg-amber-50"
      innerClassName="gap-3 p-3.5 sm:p-4">
      <div className="flex items-center justify-between gap-2 border-b border-black/5 pb-1">
        <div className="flex gap-1.5" aria-hidden="true">
          <div className="h-2 w-2 rounded-full bg-red-400" />
          <div className="h-2 w-2 rounded-full bg-amber-400" />
          <div className="h-2 w-2 rounded-full bg-green-500" />
        </div>
        <span className="font-mono text-2xs text-muted-foreground">{COPY.windowTitle}</span>
      </div>

      <div className="relative flex items-center justify-between gap-2">
        <div className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" aria-hidden="true" />
          <span className="text-xs font-bold text-foreground">{COPY.engine}</span>
        </div>
        <motion.div className="rounded-md bg-amber-800 px-2 py-1.5 text-2xs font-semibold text-white shadow-sm"
          animate={active ? { scale: [1, 1, 0.92, 1, 1] } : { scale: 1 }}
          transition={{ ...loop, times: [0, 0.14, 0.18, 0.23, 1] }}>{COPY.run}</motion.div>
        <motion.div className="pointer-events-none absolute right-4 top-4 z-30 text-zinc-900 drop-shadow-md"
          animate={active ? { x: [-25, 0, 0, 16, 16],
            scale: [1, 1, 0.8, 1, 1], opacity: [0, 1, 1, 0, 0] } : { opacity: 0 }}
          transition={{ ...loop, times: [0, 0.14, 0.18, 0.3, 1] }} aria-hidden="true">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="white" strokeWidth="1.5">
            <path d="M3 3l7 18 3-7 7-3L3 3z" />
          </svg>
        </motion.div>
      </div>

      <div className="flex min-h-0 flex-1 items-center rounded-xl border border-black/5 bg-stone-50 px-2">
        {COPY.nodeLabels.map((label, index) => (
          <div key={label} className={index === 0 ? "flex items-center" : "flex flex-1 items-center"}>
            {index > 0 && (
              <div className="relative -translate-y-2.5 h-0.5 min-w-2 flex-1 bg-amber-800/15" aria-hidden="true">
                <motion.div className="absolute -top-0.5 left-0 h-1.5 w-1.5 rounded-full bg-amber-800 shadow-sm"
                  animate={active ? { left: ["0%", "0%", "85%", "85%", "0%"], opacity: [0, 1, 1, 0, 0] } : { opacity: 0 }}
                  transition={{ ...loop, times: index === 1 ? [0, 0.25, 0.4, 0.43, 1] : [0, 0.5, 0.65, 0.68, 1] }} />
              </div>
            )}
            <div className="flex w-16 shrink-0 flex-col items-center gap-1.5">
              <motion.div className={index === 1
                ? "flex h-12 w-12 items-center justify-center rounded-xl border bg-amber-800 text-white shadow-md"
                : "flex h-10 w-10 items-center justify-center rounded-xl border bg-white font-mono text-xs font-bold text-amber-800 shadow-sm"}
                animate={active ? { scale: [1, 1, 1.06, 1, 1],
                  borderColor: ["rgba(180,83,9,0.12)", "rgba(180,83,9,0.12)", "rgba(180,83,9,0.65)", "rgba(180,83,9,0.12)", "rgba(180,83,9,0.12)"]
                } : { scale: 1, borderColor: "rgba(180,83,9,0.12)" }}
                transition={{ ...loop, times: [0, 0.2 + index * 0.15, 0.3 + index * 0.15, 0.4 + index * 0.15, 1] }}>
                {index === 1 ? (
                  <motion.svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
                    animate={active ? { rotate: [0, 0, 90, 90, 0] } : { rotate: 0 }}
                    transition={{ ...loop, times: [0, 0.35, 0.5, 0.85, 1] }} aria-hidden="true">
                    <rect x="6" y="6" width="12" height="12" rx="3" />
                    <rect x="9" y="9" width="6" height="6" rx="1" />
                    <path d="M9 3v3m6-3v3M9 18v3m6-3v3M3 9h3m-3 6h3m12-6h3m-3 6h3" />
                  </motion.svg>
                ) : index === 2 ? (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                    <ellipse cx="12" cy="5" rx="7" ry="3" />
                    <path d="M5 5v14c0 1.7 3.1 3 7 3s7-1.3 7-3V5M5 12c0 1.7 3.1 3 7 3s7-1.3 7-3" />
                  </svg>
                ) : COPY.layers[0].symbol}
              </motion.div>
              <span className="text-2xs font-semibold text-zinc-700">{label}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-1 overflow-hidden rounded-xl bg-zinc-900 px-2.5 py-2 font-mono text-2xs">
        <div className="flex items-center justify-between gap-2">
          <span className="text-zinc-300">{COPY.request}</span>
          <motion.span className="shrink-0 font-semibold text-emerald-400"
            animate={active ? { opacity: [0, 0, 1, 1, 0] } : { opacity: 1 }}
            transition={{ ...loop, times: [0, 0.65, 0.72, 0.9, 1] }}>{COPY.response}</motion.span>
        </div>
        <div className="relative h-3.5">
          <motion.span className="absolute inset-0 text-amber-300"
            animate={active ? { opacity: [1, 1, 0, 0, 1] } : { opacity: 0 }}
            transition={{ ...loop, times: [0, 0.6, 0.65, 0.95, 1] }}>{COPY.processing}</motion.span>
          <motion.span className="absolute inset-0 text-emerald-400"
            animate={active ? { opacity: [0, 0, 1, 1, 0] } : { opacity: 1 }}
            transition={{ ...loop, times: [0, 0.65, 0.72, 0.9, 1] }}>{COPY.completed}</motion.span>
        </div>
      </div>
    </MockupFrame>
  );
}
