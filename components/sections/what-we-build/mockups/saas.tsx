"use client";

import { SAAS_COPY } from "@/lib/content/services";

import { m as motion } from "motion/react";
import { MockupWrapper } from "./mockup-wrapper";

export function SaaSProductsMockup({ isActive }: { isActive?: boolean }) {
  return (
    <MockupWrapper
      isActive={isActive}
      gradientClass="bg-gradient-to-tr from-violet-100/60 via-purple-100/50 to-pink-100/60"
      innerClassName="max-w-80 sm:max-w-80 p-3.5 sm:p-4 gap-3"
      floatDuration={5}
    >
        <div className="flex items-center justify-between pb-1 border-b border-black/[0.04]">
          <div className="flex gap-1.5">
            <div className="w-2 h-2 rounded-full bg-red-400" />
            <div className="w-2 h-2 rounded-full bg-amber-400" />
            <div className="w-2 h-2 rounded-full bg-green-500" />
          </div>
          <div className="w-20 h-2 rounded-full bg-slate-100" />
        </div>

        <div className="bg-gradient-to-br from-primary to-violet-700 rounded-xl p-3 text-white flex flex-col gap-2 shadow-md relative overflow-hidden">
          {isActive && (
            <motion.div
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
              className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
            />
          )}
          <div className="flex items-center justify-between relative z-10">
            <span className="text-xs font-extrabold tracking-wider">{SAAS_COPY.enterpriseSaas}</span>
          </div>

          <div className="flex flex-col gap-1 text-xs relative z-10">
            <div className="flex items-center gap-1.5">
              <motion.span animate={isActive ? { opacity: [0.3, 1, 0.3] } : { opacity: 1 }} transition={{ duration: 2, repeat: isActive ? Infinity : 0 }} className="text-emerald-500">{SAAS_COPY.symbol}</motion.span> {SAAS_COPY.multiTenantCloudSync}</div>
            <div className="flex items-center gap-1.5">
              <motion.span animate={isActive ? { opacity: [0.3, 1, 0.3] } : { opacity: 1 }} transition={{ duration: 2, repeat: isActive ? Infinity : 0, delay: 1 }} className="text-emerald-500">{SAAS_COPY.symbol}</motion.span> {SAAS_COPY.automatedStripeBilling}</div>
          </div>
        </div>

        <div className="flex items-center justify-between gap-2 pt-1 relative">
          <div className="flex-1 bg-slate-50 border border-black/[0.04] rounded-lg p-1.5 flex items-center gap-2">
            <motion.div animate={isActive ? { scale: [1, 1.5, 1], opacity: [1, 0.5, 1] } : { scale: 1, opacity: 1 }} transition={{ duration: 1.5, repeat: isActive ? Infinity : 0 }} className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="text-xs font-mono text-foreground">{SAAS_COPY.postgresDb}</span>
          </div>
          <div className="flex-1 bg-slate-50 border border-black/[0.04] rounded-lg p-1.5 flex items-center gap-2">
            <motion.div animate={isActive ? { opacity: [0.3, 1, 0.3] } : { opacity: 1 }} transition={{ duration: 2, repeat: isActive ? Infinity : 0 }} className="w-2 h-2 rounded-full bg-violet-700" />
            <span className="text-xs font-mono text-foreground">{SAAS_COPY.edgeApi}</span>
          </div>

          {isActive && (
            <motion.div
              className="absolute top-1/2 left-1/2 h-0.5 w-10 bg-gradient-to-r from-emerald-500 to-violet-700 z-20 origin-left"
              initial={{ scaleX: 0, x: -10, y: 0, opacity: 0 }}
              animate={{ scaleX: [0, 1, 0], x: [-10, -10, 10], opacity: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          )}
        </div>
    </MockupWrapper>
  );
}


