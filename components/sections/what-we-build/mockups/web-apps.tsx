"use client";

import { WEB_APPS_COPY } from "@/lib/content/service-mockups";

import { m as motion } from "motion/react";
import { MockupWrapper } from "./mockup-wrapper";

export function WebAppsMockup({ isActive }: { isActive?: boolean }) {
  return (
    <MockupWrapper
      gradientClass="bg-emerald-50"
      innerClassName="gap-3 p-3.5 sm:p-4"
    >
        <div className="flex shrink-0 items-center justify-between border-b border-black/4 pb-1">
          <div className="flex gap-1.5">
            <div className="w-2 h-2 rounded-full bg-emerald-700" />
            <div className="w-2 h-2 rounded-full bg-emerald-500" />
            <div className="w-2 h-2 rounded-full bg-emerald-300" />
          </div>
          <span className="text-xs font-mono text-muted-foreground">{WEB_APPS_COPY.appSimpleprimeIo}</span>
        </div>

        <div className="relative grid min-h-0 flex-1 grid-cols-12 gap-2.5">
          <motion.div
            initial={false}
            animate={isActive ? {
              x: [60, -85, -85, 20, 20, -85, -85, 60],
              scale: [1, 1, 0.8, 1, 1, 1, 0.8, 1],
              opacity: [0, 1, 1, 1, 1, 1, 1, 0]
            } : { x: 60, scale: 1, opacity: 0 }}
            transition={{ duration: 8, repeat: isActive ? Infinity : 0, ease: "easeInOut" }}
            className="absolute bottom-0 right-10 z-30 pointer-events-none drop-shadow-md text-foreground"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="white" strokeWidth="1.5">
              <path d="M3 3l7 18 3-7 7-3L3 3z" />
            </svg>
          </motion.div>

          <div className="relative z-10 col-span-4 flex h-full flex-col gap-1.5 rounded-xl bg-zinc-900 p-2 shadow-inner">
            <div className="w-full h-2 rounded bg-white/20" />
            <motion.div
              initial={false}
              animate={isActive ? { backgroundColor: ["rgba(4,120,87,1)", "rgba(4,120,87,1)", "rgba(255,255,255,0.1)", "rgba(255,255,255,0.1)", "rgba(4,120,87,1)"] } : { backgroundColor: "rgba(4,120,87,1)" }}
              transition={{ duration: 8, repeat: isActive ? Infinity : 0, ease: "easeInOut" }}
              className="w-3/4 h-2 rounded"
            />
            <motion.div
              initial={false}
              animate={isActive ? { backgroundColor: ["rgba(255,255,255,0.1)", "rgba(255,255,255,0.1)", "rgba(4,120,87,1)", "rgba(4,120,87,1)", "rgba(255,255,255,0.1)"] } : { backgroundColor: "rgba(255,255,255,0.1)" }}
              transition={{ duration: 8, repeat: isActive ? Infinity : 0, ease: "easeInOut" }}
              className="w-4/5 h-2 rounded"
            />
            <div className="w-2/3 h-1.5 rounded bg-white/10" />
            <motion.div initial={false} animate={isActive ? { opacity: [1, 0.5, 1] } : { opacity: 1 }} transition={{ duration: 2, repeat: isActive ? Infinity : 0, delay: 1 }} className="w-3/4 h-1.5 rounded bg-white/10 mt-auto" />
          </div>

          <div className="relative col-span-8 flex h-full min-h-0 flex-col gap-2 overflow-hidden rounded-lg">
            <motion.div
              initial={false}
              animate={isActive ? { x: ["0%", "0%", "-100%", "-100%", "0%"] } : { x: "0%" }}
              transition={{ duration: 8, repeat: isActive ? Infinity : 0, ease: "easeInOut" }}
              className="absolute inset-0 w-full flex flex-col gap-2"
            >
              <div className="grid grid-cols-2 gap-1.5">
                <div className="bg-slate-50 border border-black/4 rounded-lg p-1.5">
                  <span className="text-xs text-muted-foreground block">{WEB_APPS_COPY.users}</span>
                  <span className="text-xs font-bold text-foreground">{WEB_APPS_COPY.text142k}</span>
                </div>
                <div className="bg-slate-50 border border-black/4 rounded-lg p-1.5">
                  <span className="text-xs text-muted-foreground block">{WEB_APPS_COPY.uptime}</span>
                  <span className="text-xs font-bold text-emerald-500">{WEB_APPS_COPY.text999}</span>
                </div>
              </div>

              <div className="flex min-h-0 flex-1 items-end justify-between gap-1.5 overflow-hidden rounded-lg border border-black/4 bg-slate-50 p-2">
                <motion.div initial={false} animate={isActive ? { scaleY: [0.4, 0.7, 0.4] } : { scaleY: 0.4 }} transition={{ duration: 3, repeat: isActive ? Infinity : 0, ease: "easeInOut", delay: 0 }} className="w-full bg-emerald-100 rounded-t h-full origin-bottom" />
                <motion.div initial={false} animate={isActive ? { scaleY: [0.75, 0.5, 0.75] } : { scaleY: 0.75 }} transition={{ duration: 3.5, repeat: isActive ? Infinity : 0, ease: "easeInOut", delay: 0.2 }} className="w-full bg-emerald-700 rounded-t h-full origin-bottom" />
                <motion.div initial={false} animate={isActive ? { scaleY: [0.95, 0.8, 0.95] } : { scaleY: 0.95 }} transition={{ duration: 4, repeat: isActive ? Infinity : 0, ease: "easeInOut", delay: 0.4 }} className="w-full bg-emerald-700 rounded-t h-full origin-bottom" />
                <motion.div initial={false} animate={isActive ? { scaleY: [0.6, 0.9, 0.6] } : { scaleY: 0.6 }} transition={{ duration: 3.2, repeat: isActive ? Infinity : 0, ease: "easeInOut", delay: 0.1 }} className="w-full bg-emerald-500 rounded-t h-full origin-bottom" />
                <motion.div initial={false} animate={isActive ? { scaleY: [0.8, 0.45, 0.8] } : { scaleY: 0.8 }} transition={{ duration: 3.8, repeat: isActive ? Infinity : 0, ease: "easeInOut", delay: 0.3 }} className="w-full bg-emerald-400 rounded-t h-full origin-bottom" />
              </div>

              <div className="flex shrink-0 items-center justify-between rounded-lg border border-emerald-100 bg-emerald-50 px-2 py-1.5">
                <div className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  <span className="text-3xs font-semibold text-emerald-800">{WEB_APPS_COPY.systemOperational}</span>
                </div>
                <span className="font-mono text-3xs font-semibold text-emerald-700">{WEB_APPS_COPY.latency}</span>
              </div>
            </motion.div>

            <motion.div
              initial={false}
              animate={isActive ? { x: ["100%", "100%", "0%", "0%", "100%"] } : { x: "100%" }}
              transition={{ duration: 8, repeat: isActive ? Infinity : 0, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full bg-slate-50 border border-black/4 rounded-lg p-2 flex flex-col gap-2"
            >
              <div className="flex items-center justify-between pb-1 border-b border-black/5">
                <div className="w-16 h-2 rounded-full bg-slate-200" />
                <div className="w-8 h-2 rounded-full bg-slate-200" />
              </div>
              <div className="flex flex-col gap-1.5 flex-1 pt-1">
                {[["#047857", "w-12", "w-8"], ["#059669", "w-10", "w-6"], ["#10B981", "w-14", "w-8"], ["#34D399", "w-10", "w-8"]].map(([color, w1, w2], i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: color }} />
                      <div className={`${w1} h-1.5 rounded-full bg-slate-300`} />
                    </div>
                    <div className={`${w2} h-1.5 rounded-full bg-slate-300`} />
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
    </MockupWrapper>
  );
}


