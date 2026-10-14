"use client";

import { DESKTOP_FLOW_CANVAS_COPY } from "@/lib/content/philosophy";

import { FLOW_NODES } from "@/lib/content/philosophy";
import { BoxIcon } from "@animateicons/react/lucide/box-icon";
import { LayoutGridIcon } from "@animateicons/react/lucide/layout-grid-icon";
import { LightbulbIcon } from "@animateicons/react/lucide/lightbulb-icon";
import { TrendingUpIcon } from "@animateicons/react/lucide/trending-up-icon";
import { UsersIcon } from "@animateicons/react/lucide/users-icon";
import { AnimatedIcon } from "@/components/ui/animated-icon";
import { m as motion } from "motion/react";
import { CldImage } from "@/components/ui/cld-image";

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
            <stop offset="0%" stopColor="#0284C7" />
            <stop offset="50%" stopColor="#0EA5E9" />
            <stop offset="100%" stopColor="#38BDF8" />
          </linearGradient>

          <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.2" />
            <stop offset="60%" stopColor="#0284C7" stopOpacity="0.06" />
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
          strokeDasharray="4 6"
        />

        {/* Inner concentric ring with subtle primary tone */}
        <circle
          cx="300"
          cy="180"
          r="95"
          stroke="#BAE6FD"
          opacity="0.8"
        />

        {/* Connectors from the 4 corner cards to center ring nodes */}
        <path
          d="M 180 85 C 215 85, 230 115, 240 128"
          stroke="url(#flowLineGrad)"
          strokeDasharray="4 4"
        />

        <path
          d="M 420 85 C 385 85, 370 115, 360 128"
          stroke="url(#flowLineGrad)"
          strokeDasharray="4 4"
        />

        <path
          d="M 180 275 C 215 275, 230 245, 240 232"
          stroke="url(#flowLineGrad)"
          strokeDasharray="4 4"
        />

        <path
          d="M 420 275 C 385 275, 370 245, 360 232"
          stroke="url(#flowLineGrad)"
          strokeDasharray="4 4"
        />

        {/* Glowing Nodes on the Ring */}
        <circle cx="240" cy="128" r="4" fill="#FFFFFF" stroke="#0284C7" />
        <circle cx="360" cy="128" r="4" fill="#FFFFFF" stroke="#0EA5E9" />
        <circle cx="240" cy="232" r="4" fill="#FFFFFF" stroke="#0284C7" />
        <circle cx="360" cy="232" r="4" fill="#FFFFFF" stroke="#0EA5E9" />
      </svg>

      {/* ── Top Row of Feature Cards ── */}
      <div className="relative z-10 flex items-start justify-between w-full px-1">
        {/* Top-Left: Direct access */}
        <motion.div data-animated-icon-target
          data-slot="card"
          initial={{ opacity: 0, scale: 0.94, filter: "blur(8px)" }}
          animate={inView ? { opacity: 1, scale: 1, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
          className="group relative bg-white rounded-2xl border border-neutral-100 shadow-card p-4 sm:p-5 hover:shadow-lg hover:border-primary/30 transition-all duration-300 w-52 sm:w-60 cursor-default"
        >
          <div className="absolute -top-3.5 right-6 z-20">
            <span className="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-md border shadow-2xs bg-primary/8 text-primary border-primary/20 uppercase tracking-widest leading-none">
              <AnimatedIcon icon={LayoutGridIcon} className="w-3 h-3" /> {FLOW_NODES.topLeft.badge}
            </span>
          </div>
          <div className="flex items-start gap-3 pt-1">
            <div className="w-8 h-8 flex items-center justify-center shrink-0 text-primary bg-primary/10 rounded-full">
              <AnimatedIcon icon={LightbulbIcon} size={18} className="w-4.5 h-4.5" />
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
        <motion.div data-animated-icon-target
          data-slot="card"
          initial={{ opacity: 0, scale: 0.94, filter: "blur(8px)" }}
          animate={inView ? { opacity: 1, scale: 1, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="group relative bg-white rounded-2xl border border-neutral-100 shadow-card p-4 sm:p-5 hover:shadow-lg hover:border-primary/30 transition-all duration-300 w-52 sm:w-60 cursor-default"
        >
          <div className="absolute -top-3.5 right-6 z-20">
            <span className="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-md border shadow-2xs bg-primary/8 text-primary border-primary/20 uppercase tracking-widest leading-none">
              <AnimatedIcon icon={LayoutGridIcon} className="w-3 h-3" /> {FLOW_NODES.topRight.badge}
            </span>
          </div>
          <div className="flex items-start gap-3 pt-1">
            <div className="w-8 h-8 flex items-center justify-center shrink-0 text-primary bg-primary/10 rounded-full">
              <AnimatedIcon icon={TrendingUpIcon} size={18} className="w-4.5 h-4.5" />
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

      {/* ── CENTER MEDALLION: BRAND FAVICON ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7, filter: "blur(8px)" }}
        animate={inView ? { opacity: 1, scale: 1, filter: "blur(0px)" } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.38 }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none flex flex-col items-center justify-center"
      >
        <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-white shadow-elevated border border-primary/20 flex items-center justify-center p-4">
          <CldImage
            src="https://res.cloudinary.com/drdl4pdnx/image/upload/v1791901666/simpluxe/favicon/Bright_Blue_S_Monogram_Logo_spudvz.png"
            alt={DESKTOP_FLOW_CANVAS_COPY.simpluxeLogo}
            width={80}
            height={80}
            className="size-16 sm:size-18 object-contain drop-shadow-sm select-none"
            priority
          />
        </div>
      </motion.div>

      {/* ── Bottom Row of Feature Cards ── */}
      <div className="relative z-10 flex items-end justify-between w-full px-1 pt-20 sm:pt-24">
        {/* Bottom-Left: Production quality */}
        <motion.div data-animated-icon-target
          data-slot="card"
          initial={{ opacity: 0, scale: 0.94, filter: "blur(8px)" }}
          animate={inView ? { opacity: 1, scale: 1, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
          className="group relative bg-white rounded-2xl border border-neutral-100 shadow-card p-4 sm:p-5 hover:shadow-lg hover:border-primary/30 transition-all duration-300 w-52 sm:w-60 cursor-default"
        >
          <div className="absolute -top-3.5 right-6 z-20">
            <span className="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-md border shadow-2xs bg-primary/8 text-primary border-primary/20 uppercase tracking-widest leading-none">
              <AnimatedIcon icon={LayoutGridIcon} className="w-3 h-3" /> {FLOW_NODES.bottomLeft.badge}
            </span>
          </div>
          <div className="flex items-start gap-3 pt-1">
            <div className="w-8 h-8 flex items-center justify-center shrink-0 text-primary bg-primary/10 rounded-full">
              <AnimatedIcon icon={BoxIcon} size={18} className="w-4.5 h-4.5" />
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
        <motion.div data-animated-icon-target
          data-slot="card"
          initial={{ opacity: 0, scale: 0.94, filter: "blur(8px)" }}
          animate={inView ? { opacity: 1, scale: 1, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="group relative bg-white rounded-2xl border border-neutral-100 shadow-card p-4 sm:p-5 hover:shadow-lg hover:border-primary/30 transition-all duration-300 w-52 sm:w-60 cursor-default"
        >
          <div className="absolute -top-3.5 right-6 z-20">
            <span className="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-md border shadow-2xs bg-primary/8 text-primary border-primary/20 uppercase tracking-widest leading-none">
              <AnimatedIcon icon={LayoutGridIcon} className="w-3 h-3" /> {FLOW_NODES.bottomRight.badge}
            </span>
          </div>
          <div className="flex items-start gap-3 pt-1">
            <div className="w-8 h-8 flex items-center justify-center shrink-0 text-primary bg-primary/10 rounded-full">
              <AnimatedIcon icon={UsersIcon} size={18} className="w-4.5 h-4.5" />
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
