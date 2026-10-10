"use client";

import { BRANDING_COPY } from "@/lib/content/services";

import { m as motion } from "motion/react";
import { MockupWrapper } from "./mockup-wrapper";

const BRAND_COLORS = ["#922F55", "#D23D78", "#6C2BB8", "#F97316", "#0891B2"];

export function BrandingMockup({ isActive }: { isActive?: boolean }) {
  return (
    <MockupWrapper
      isActive={isActive}
      gradientClass="bg-gradient-to-tr from-orange-50/60 via-pink-50/50 to-amber-100/60"
      innerClassName="max-w-80 p-4 gap-3"
      floatDuration={5}
    >
        <div className="flex items-center gap-3">
          <motion.div
            animate={isActive ? { rotate: [0, 360] } : { rotate: 0 }}
            transition={{ duration: 8, repeat: isActive ? Infinity : 0, ease: "linear" }}
            className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-violet-700 flex items-center justify-center shadow-md flex-shrink-0"
          >
            <span className="text-white font-black text-lg tracking-tight">{BRANDING_COPY.st}</span>
          </motion.div>
          <div className="flex flex-col gap-1.5">
            <div className="w-24 h-2.5 rounded-full bg-slate-800" />
            <div className="w-16 h-1.5 rounded-full bg-slate-200" />
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <div className="w-10 h-1.5 rounded-full bg-slate-200" />
          <div className="flex gap-1.5">
            {BRAND_COLORS.map((color, i) => (
              <motion.div
                key={i}
                animate={isActive ? { scale: [1, 1.15, 1] } : { scale: 1 }}
                transition={{ duration: 2, delay: i * 0.25, repeat: isActive ? Infinity : 0, ease: "easeInOut" }}
                className="flex-1 h-8 rounded-xl shadow-sm"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>

        <div className="bg-slate-50 border border-black/[0.04] rounded-xl p-2.5 flex flex-col gap-1">
          <span className="text-lg font-black tracking-tighter text-foreground leading-none">{BRANDING_COPY.aa}</span>
          <div className="flex gap-1.5">
            <div className="w-12 h-1.5 rounded-full bg-slate-300" />
            <div className="w-8 h-1.5 rounded-full bg-slate-200" />
            <div className="w-10 h-1.5 rounded-full bg-slate-200" />
          </div>
          <div className="flex gap-1 mt-1">
            {[BRANDING_COPY.inter, BRANDING_COPY.satoshi, BRANDING_COPY.mono].map((f, i) => (
              <span key={i} className="text-3xs px-1.5 py-0.5 rounded-full bg-white border border-slate-200 text-muted-foreground font-medium">{f}</span>
            ))}
          </div>
        </div>

        <motion.div
          animate={isActive ? { backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] } : { backgroundPosition: "0% 50%" }}
          transition={{ duration: 5, repeat: isActive ? Infinity : 0, ease: "easeInOut" }}
          className="w-full h-5 rounded-xl"
          style={{ background: "linear-gradient(90deg, #922F55, #D23D78, #6C2BB8, #0891B2, #922F55)", backgroundSize: "300% 100%" }}
        />
    </MockupWrapper>
  );
}


