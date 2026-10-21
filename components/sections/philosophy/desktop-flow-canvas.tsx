import { DESKTOP_FLOW_CANVAS_COPY } from "@/lib/data/philosophy";

import { FLOW_NODES } from "@/lib/data/philosophy";
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
    <div className="hidden relative w-full flex-1 flex-col justify-between py-6 md:flex">
      {/* ── Background SVG connector lines & concentric rings ── */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible"
        viewBox="0 0 600 360"
        fill="none"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          {/* Brand flow gradient for connector paths */}
          <linearGradient id="flowLineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0369A1" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#0EA5E9" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#0284C7" stopOpacity="0.4" />
          </linearGradient>

          {/* Primary brand ring gradient */}
          <linearGradient id="brandRingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0369A1" stopOpacity="0.35" />
            <stop offset="50%" stopColor="#0EA5E9" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#0284C7" stopOpacity="0.35" />
          </linearGradient>

          {/* Subtle inner orbital ring */}
          <linearGradient id="innerRingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0EA5E9" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#0369A1" stopOpacity="0.15" />
          </linearGradient>

          {/* Luxury ambient atmospheric glow matching Ocean Luxe theme */}
          <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#0EA5E9" stopOpacity="0.14" />
            <stop offset="40%" stopColor="#0369A1" stopOpacity="0.07" />
            <stop offset="70%" stopColor="#BAE6FD" stopOpacity="0.03" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </radialGradient>

          {/* Precision technical dot matrix */}
          <pattern id="flowDots" width="14" height="14" patternUnits="userSpaceOnUse">
            <circle cx="7" cy="7" r="1" fill="#0369A1" fillOpacity="0.18" />
          </pattern>
          <radialGradient id="dotsMaskGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.7" />
            <stop offset="60%" stopColor="#FFFFFF" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </radialGradient>
          <mask id="dotsMask">
            <rect x="170" y="50" width="260" height="260" rx="72" fill="url(#dotsMaskGrad)" />
          </mask>
        </defs>

        {/* Ambient atmospheric glow behind the system hub */}
        <rect x="140" y="20" width="320" height="320" rx="96" fill="url(#centerGlow)" />

        {/* Technical dot grid surrounding the hub */}
        <rect x="170" y="50" width="260" height="260" rx="72" fill="url(#flowDots)" mask="url(#dotsMask)" />

        {/* Outer system boundary */}
        <rect
          x="202"
          y="82"
          width="196"
          height="196"
          rx="52"
          stroke="#E2E8F0"
          strokeWidth="1"
          strokeDasharray="3 5"
        />

        {/* Primary brand boundary aligned with the four connectors */}
        <rect
          x="224"
          y="104"
          width="152"
          height="152"
          rx="42"
          stroke="url(#brandRingGrad)"
          strokeWidth="1.5"
        />

        {/* Inner system boundary */}
        <rect
          x="242"
          y="122"
          width="116"
          height="116"
          rx="34"
          stroke="url(#innerRingGrad)"
          strokeWidth="1"
          strokeDasharray="2 4"
        />

        {/* Connectors from the feature cards to the hub corners */}
        <path
          d="M 180 85 C 212 85, 226 100, 242 122"
          stroke="url(#flowLineGrad)"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />

        <path
          d="M 420 85 C 388 85, 374 100, 358 122"
          stroke="url(#flowLineGrad)"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />

        <path
          d="M 180 275 C 212 275, 226 260, 242 238"
          stroke="url(#flowLineGrad)"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />

        <path
          d="M 420 275 C 388 275, 374 260, 358 238"
          stroke="url(#flowLineGrad)"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />

        {/* Brand signal nodes at the four system corners */}
        <g>
          <circle cx="242" cy="122" r="7" fill="#0EA5E9" fillOpacity="0.18" />
          <circle cx="242" cy="122" r="3.5" fill="#FFFFFF" stroke="#0369A1" strokeWidth="1.5" />
          <circle cx="242" cy="122" r="1.5" fill="#0EA5E9" />
        </g>
        <g>
          <circle cx="358" cy="122" r="7" fill="#0EA5E9" fillOpacity="0.18" />
          <circle cx="358" cy="122" r="3.5" fill="#FFFFFF" stroke="#0EA5E9" strokeWidth="1.5" />
          <circle cx="358" cy="122" r="1.5" fill="#0369A1" />
        </g>
        <g>
          <circle cx="242" cy="238" r="7" fill="#0EA5E9" fillOpacity="0.18" />
          <circle cx="242" cy="238" r="3.5" fill="#FFFFFF" stroke="#0369A1" strokeWidth="1.5" />
          <circle cx="242" cy="238" r="1.5" fill="#0EA5E9" />
        </g>
        <g>
          <circle cx="358" cy="238" r="7" fill="#0EA5E9" fillOpacity="0.18" />
          <circle cx="358" cy="238" r="3.5" fill="#FFFFFF" stroke="#0EA5E9" strokeWidth="1.5" />
          <circle cx="358" cy="238" r="1.5" fill="#0369A1" />
        </g>
      </svg>

      {/* ── Top Row of Feature Cards ── */}
      <div className="relative z-10 flex items-start justify-between w-full px-1">
        {/* Top-Left: Direct access */}
        <motion.div data-animated-icon-target
          data-slot="card"
          initial={{ opacity: 0, scale: 0.94, filter: "blur(8px)" }}
          animate={inView ? { opacity: 1, scale: 1, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
          className="relative bg-white rounded-2xl border border-neutral-100 shadow-card p-4 transition-all duration-300 w-52 cursor-default sm:p-5 sm:w-60 hover:shadow-lg hover:border-primary/30 group"
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
          className="relative bg-white rounded-2xl border border-neutral-100 shadow-card p-4 transition-all duration-300 w-52 cursor-default sm:p-5 sm:w-60 hover:shadow-lg hover:border-primary/30 group"
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
        <div className="relative rounded-3xl border border-primary/20 bg-secondary p-2 shadow-elevated">
          <span aria-hidden="true" className="absolute left-2 top-2 h-3 w-3 border-l-2 border-t-2 border-primary/50" />
          <span aria-hidden="true" className="absolute right-2 top-2 h-3 w-3 border-r-2 border-t-2 border-primary/50" />
          <span aria-hidden="true" className="absolute bottom-2 left-2 h-3 w-3 border-b-2 border-l-2 border-primary/50" />
          <span aria-hidden="true" className="absolute bottom-2 right-2 h-3 w-3 border-b-2 border-r-2 border-primary/50" />
          <div className="flex size-24 items-center justify-center rounded-2xl border border-white bg-white p-4 shadow-xs sm:size-28">
            <CldImage
              src="https://res.cloudinary.com/drdl4pdnx/image/upload/v1791901666/simpluxe/favicon/Bright_Blue_S_Monogram_Logo_spudvz.png"
              alt={DESKTOP_FLOW_CANVAS_COPY.simpluxeLogo}
              width={80}
              height={80}
              className="size-14 select-none object-contain drop-shadow-sm sm:size-16"
            />
          </div>
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
          className="relative bg-white rounded-2xl border border-neutral-100 shadow-card p-4 transition-all duration-300 w-52 cursor-default sm:p-5 sm:w-60 hover:shadow-lg hover:border-primary/30 group"
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
          className="relative bg-white rounded-2xl border border-neutral-100 shadow-card p-4 transition-all duration-300 w-52 cursor-default sm:p-5 sm:w-60 hover:shadow-lg hover:border-primary/30 group"
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
