"use client";

import { WEBSITES_COPY } from "@/lib/content/service-mockups";

import { m as motion } from "motion/react";
import { MockupWrapper } from "./mockup-wrapper";

export function WebsitesMockup({ isActive }: { isActive?: boolean }) {
  return (
    <MockupWrapper
      gradientClass="bg-orange-50"
      innerClassName="gap-3 p-3.5 sm:p-4"
    >
        <div className="flex shrink-0 items-center justify-between border-b border-black/4 pb-1">
          <div className="flex gap-1.5">
            <div className="w-2 h-2 rounded-full bg-orange-600" />
            <div className="w-2 h-2 rounded-full bg-orange-400" />
            <div className="w-2 h-2 rounded-full bg-orange-300" />
          </div>
          <div className="w-20 h-2 rounded-full bg-slate-100" />
        </div>

        <div className="relative min-h-0 w-full flex-1 overflow-hidden rounded-lg">
          <motion.div
            animate={isActive ? { y: [0, 0, -104, -104, 0] } : { y: 0 }}
            transition={{ duration: 9, times: [0, 0.25, 0.45, 0.75, 1], repeat: isActive ? Infinity : 0, ease: "easeInOut" }}
            className="flex flex-col gap-6 w-full relative"
          >
            <div className="grid grid-cols-12 gap-3 items-center">
              <div className="col-span-6 flex flex-col gap-2">
                <h4 className="text-sm font-extrabold tracking-tight text-foreground leading-snug sm:text-base">
                  {WEBSITES_COPY.buildYourNextIdea}</h4>
                <motion.div
                  animate={isActive ? { scale: [1, 1, 0.96, 1] } : { scale: 1 }}
                  transition={{ duration: 9, repeat: isActive ? Infinity : 0, ease: "easeInOut" }}
                  className="w-16 h-5 rounded-md bg-orange-700 flex items-center justify-center shadow-sm"
                >
                  <div className="w-9 h-1.5 rounded-full bg-white/90" />
                </motion.div>
              </div>

              <div className="col-span-6 aspect-4/3 rounded-xl bg-orange-100 border border-orange-200 p-1.5 flex items-center justify-center relative overflow-hidden shadow-sm">
                <motion.div
                  animate={isActive ? { opacity: [0.7, 1, 0.7], scale: [1, 1.05, 1] } : { opacity: 0.7, scale: 1 }}
                  transition={{ duration: 3, repeat: isActive ? Infinity : 0, ease: "easeInOut" }}
                  className="w-full h-full rounded-lg bg-orange-200 flex items-end justify-center pb-1"
                >
                  <svg width="36" height="24" viewBox="0 0 40 30" fill="none" className="opacity-70">
                    <path d="M4 26 L16 10 L24 20 L30 14 L36 26 Z" fill="#C2410C" />
                  </svg>
                </motion.div>
              </div>
            </div>

            <div className="grid grid-cols-12 gap-3 items-center opacity-80">
              <div className="col-span-12 flex flex-col gap-1.5">
                <div className="w-24 h-2.5 rounded-full bg-slate-200" />
                <div className="w-full h-2 rounded-full bg-slate-100" />
                <div className="w-4/5 h-2 rounded-full bg-slate-100" />
              </div>
              <div className="col-span-4 aspect-square rounded-lg bg-orange-100 border border-white/80" />
              <div className="col-span-4 aspect-square rounded-lg bg-orange-100 border border-white/80" />
              <div className="col-span-4 aspect-square rounded-lg bg-orange-200 border border-white/80" />
            </div>
          </motion.div>
        </div>

        <div className="relative z-10 flex shrink-0 items-center justify-between pt-1">
          <div className="flex items-center gap-1.5 bg-slate-50/90 border border-black/5 rounded-lg p-1">
            <motion.div
              animate={isActive ? { backgroundColor: ["#ffffff", "#f8f9fa", "#ffffff"] } : { backgroundColor: "#ffffff" }}
              transition={{ duration: 2, repeat: isActive ? Infinity : 0 }}
              className="w-6 h-6 rounded-md bg-white shadow-xs flex items-center justify-center text-orange-700"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
            </motion.div>
            <div className="w-6 h-6 rounded-md flex items-center justify-center text-muted-foreground">
              <span className="text-xs font-bold">{WEBSITES_COPY.tt}</span>
            </div>
            <div className="w-6 h-6 rounded-md flex items-center justify-center text-muted-foreground">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
            </div>
          </div>
        </div>

        <div className="absolute -top-3 -right-3 flex items-start z-20">
          <motion.div
            animate={isActive ? { rotate: [0, 3, 0, -3, 0], scale: [1, 1.02, 1] } : { rotate: 0, scale: 1 }}
            transition={{ duration: 9, repeat: isActive ? Infinity : 0, ease: "easeInOut" }}
            className="w-8 h-8 rounded-xl bg-orange-700 shadow-md flex items-center justify-center text-white border-2 border-white"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
          </motion.div>
          <motion.div
            animate={isActive ? { x: [0, -32, -32, 0], opacity: [0, 1, 1, 0] } : { x: 0, opacity: 0 }}
            transition={{ duration: 9, repeat: isActive ? Infinity : 0, ease: "easeInOut" }}
            className="absolute -bottom-3 -right-2 transform translate-x-1 translate-y-1 drop-shadow-md z-10"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#121114" stroke="white" strokeWidth="1.5">
              <path d="M3 3l7 18 3-7 7-3L3 3z" />
            </svg>
          </motion.div>
        </div>
    </MockupWrapper>
  );
}


