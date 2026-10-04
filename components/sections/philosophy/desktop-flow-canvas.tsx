"use client";

import { FLOW_NODES } from "@/lib/content/philosophy";
import { Box, LayoutGrid, Lightbulb, TrendingUp, Users } from "lucide-react";
import { motion } from "motion/react";
import { CldImage } from "next-cloudinary";

interface DesktopFlowCanvasProps {
  inView: boolean;
}

export function DesktopFlowCanvas({ inView }: DesktopFlowCanvasProps) {
  return (
    <div className="hidden md:flex relative w-full flex-1 flex-col justify-between py-6">
      {/* ── Background SVG connector lines & concentric rings ── */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible"
        viewBox="0 0 600 360"
        fill="none"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="flowLineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D23D78" />
            <stop offset="50%" stopColor="#BE123C" />
            <stop offset="100%" stopColor="#7C3AED" />
          </linearGradient>

          <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#F472B6" stopOpacity="0.25" />
            <stop offset="60%" stopColor="#A855F7" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Ambient glow behind center medallion */}
        <circle cx="300" cy="180" r="160" fill="url(#centerGlow)" />

        {/* Outer concentric dashed ring */}
        <circle
          cx="300"
          cy="180"
          r="125"
          stroke="#E2E8F0"
          strokeWidth="1.5"
          strokeDasharray="4 6"
        />

        {/* Inner concentric ring with subtle rose tone */}
        <circle
          cx="300"
          cy="180"
          r="95"
          stroke="#FBCFE8"
          strokeWidth="1.5"
          opacity="0.8"
        />

        {/* Connectors from the 4 corner cards to center ring nodes */}
        <path
          d="M 180 85 C 215 85, 230 115, 240 128"
          stroke="url(#flowLineGrad)"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />

        <path
          d="M 420 85 C 385 85, 370 115, 360 128"
          stroke="url(#flowLineGrad)"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />

        <path
          d="M 180 275 C 215 275, 230 245, 240 232"
          stroke="url(#flowLineGrad)"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />

        <path
          d="M 420 275 C 385 275, 370 245, 360 232"
          stroke="url(#flowLineGrad)"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />

        {/* Glowing Nodes on the Ring */}
        <circle cx="240" cy="128" r="4" fill="#FFFFFF" stroke="#D23D78" strokeWidth="2.5" />
        <circle cx="360" cy="128" r="4" fill="#FFFFFF" stroke="#7C3AED" strokeWidth="2.5" />
        <circle cx="240" cy="232" r="4" fill="#FFFFFF" stroke="#D23D78" strokeWidth="2.5" />
        <circle cx="360" cy="232" r="4" fill="#FFFFFF" stroke="#7C3AED" strokeWidth="2.5" />
      </svg>

      {/* ── Top Row of Feature Cards ── */}
      <div className="relative z-10 flex items-start justify-between w-full px-1">
        {/* Top-Left: Direct access */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, filter: "blur(8px)" }}
          animate={inView ? { opacity: 1, scale: 1, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
          className="relative bg-white rounded-2xl border border-neutral-100 shadow-card p-4 sm:p-5 hover:shadow-lg hover:border-rose-100 transition-all duration-300 w-52 sm:w-60"
        >
          <div className="absolute -top-3.5 right-6 z-20">
            <span className="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-md border shadow-sm bg-rose-50 text-primary border-rose-200/60 uppercase tracking-widest leading-none">
              <LayoutGrid className="w-3 h-3" strokeWidth={2.5} /> {FLOW_NODES.topLeft.badge}
            </span>
          </div>
          <div className="flex items-start gap-3 pt-1">
            <div className="w-8 h-8 flex items-center justify-center shrink-0 text-primary bg-rose-50/50 rounded-full">
              <Lightbulb className="w-[18px] h-[18px]" strokeWidth={2.5} />
            </div>
            <div className="flex flex-col gap-1.5">
              <p className="font-bold text-sm text-neutral-900 leading-tight">
                {FLOW_NODES.topLeft.title}
              </p>
              <p className="text-xs text-neutral-500 leading-snug">
                {FLOW_NODES.topLeft.desc}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Top-Right: Weekly progress */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, filter: "blur(8px)" }}
          animate={inView ? { opacity: 1, scale: 1, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="relative bg-white rounded-2xl border border-neutral-100 shadow-card p-4 sm:p-5 hover:shadow-lg hover:border-purple-100 transition-all duration-300 w-52 sm:w-60"
        >
          <div className="absolute -top-3.5 right-6 z-20">
            <span className="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-md border shadow-sm bg-purple-50 text-[var(--chart-2)] border-purple-200/60 uppercase tracking-widest leading-none">
              <LayoutGrid className="w-3 h-3" strokeWidth={2.5} /> {FLOW_NODES.topRight.badge}
            </span>
          </div>
          <div className="flex items-start gap-3 pt-1">
            <div className="w-8 h-8 flex items-center justify-center shrink-0 text-[var(--chart-2)] bg-purple-50/50 rounded-full">
              <TrendingUp className="w-[18px] h-[18px]" strokeWidth={2.5} />
            </div>
            <div className="flex flex-col gap-1.5">
              <p className="font-bold text-sm text-neutral-900 leading-tight">
                {FLOW_NODES.topRight.title}
              </p>
              <p className="text-xs text-neutral-500 leading-snug">
                {FLOW_NODES.topRight.desc}
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ── CENTER MEDALLION: EXACT BRAND LOGO ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7, filter: "blur(8px)" }}
        animate={inView ? { opacity: 1, scale: 1, filter: "blur(0px)" } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.38 }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none flex flex-col items-center justify-center"
      >
        <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-white shadow-elevated border border-rose-50 flex flex-col items-center justify-center p-3 sm:p-4">
          <CldImage
            src="simpluxe/logo/logo"
            alt="Simpluxe Logo"
            width={180}
            height={40}
            className="w-[90%] h-auto object-contain drop-shadow-sm select-none"
            priority
          />
        </div>
      </motion.div>

      {/* ── Bottom Row of Feature Cards ── */}
      <div className="relative z-10 flex items-end justify-between w-full px-1 pt-20 sm:pt-24">
        {/* Bottom-Left: Production quality */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, filter: "blur(8px)" }}
          animate={inView ? { opacity: 1, scale: 1, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
          className="relative bg-white rounded-2xl border border-neutral-100 shadow-card p-4 sm:p-5 hover:shadow-lg hover:border-rose-100 transition-all duration-300 w-52 sm:w-60"
        >
          <div className="absolute -top-3.5 right-6 z-20">
            <span className="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-md border shadow-sm bg-rose-50 text-primary border-rose-200/60 uppercase tracking-widest leading-none">
              <LayoutGrid className="w-3 h-3" strokeWidth={2.5} /> {FLOW_NODES.bottomLeft.badge}
            </span>
          </div>
          <div className="flex items-start gap-3 pt-1">
            <div className="w-8 h-8 flex items-center justify-center shrink-0 text-primary bg-rose-50/50 rounded-full">
              <Box className="w-[18px] h-[18px]" strokeWidth={2.5} />
            </div>
            <div className="flex flex-col gap-1.5">
              <p className="font-bold text-sm text-neutral-900 leading-tight">
                {FLOW_NODES.bottomLeft.title}
              </p>
              <p className="text-xs text-neutral-500 leading-snug">
                {FLOW_NODES.bottomLeft.desc}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Bottom-Right: Clear ownership */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, filter: "blur(8px)" }}
          animate={inView ? { opacity: 1, scale: 1, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="relative bg-white rounded-2xl border border-neutral-100 shadow-card p-4 sm:p-5 hover:shadow-lg hover:border-purple-100 transition-all duration-300 w-52 sm:w-60"
        >
          <div className="absolute -top-3.5 right-6 z-20">
            <span className="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-md border shadow-sm bg-purple-50 text-[var(--chart-2)] border-purple-200/60 uppercase tracking-widest leading-none">
              <LayoutGrid className="w-3 h-3" strokeWidth={2.5} /> {FLOW_NODES.bottomRight.badge}
            </span>
          </div>
          <div className="flex items-start gap-3 pt-1">
            <div className="w-8 h-8 flex items-center justify-center shrink-0 text-[var(--chart-2)] bg-purple-50/50 rounded-full">
              <Users className="w-[18px] h-[18px]" strokeWidth={2.5} />
            </div>
            <div className="flex flex-col gap-1.5">
              <p className="font-bold text-sm text-neutral-900 leading-tight">
                {FLOW_NODES.bottomRight.title}
              </p>
              <p className="text-xs text-neutral-500 leading-snug">
                {FLOW_NODES.bottomRight.desc}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
