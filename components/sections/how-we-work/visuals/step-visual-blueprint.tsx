"use client";

import { ChartBarIcon, CircleCheckIcon, FileTextIcon, GitForkIcon, LayersIcon, LightbulbIcon, TargetIcon, UsersIcon } from "@animateicons/react/lucide";
import { m as motion } from "motion/react";
import { CldImage } from "next-cloudinary";

export function StepVisualBlueprint() {
  return (
    <div className="relative w-full h-[280px] xs:h-[320px] sm:h-96 lg:h-[300px] xl:h-96 flex items-end justify-center overflow-visible">
      {/* Layer 1: Floating "Project Blueprint" Window Card */}
      <motion.div
        animate={{ y: [-3, 3, -3], rotate: [-1, -1, -1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-4 sm:top-24 bottom-6 sm:bottom-6 left-0 sm:left-4 right-0 sm:right-16 bg-white/90 backdrop-blur-2xl rounded-2xl sm:rounded-3xl border border-white shadow-card p-3 sm:p-6 z-0 overflow-hidden select-none flex flex-col items-center gap-2 sm:gap-4 scale-90 sm:scale-100 origin-bottom"
      >
        {/* Window Header */}
        <div className="w-full flex items-center gap-2 ml-4 sm:ml-8">
          <GitForkIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-muted-foreground" />
          <span className="font-bold text-sm sm:text-base text-muted-foreground tracking-tight">
            Project Blueprint
          </span>
        </div>

        {/* Blueprint Flowchart Diagram */}
        <div className="flex flex-col items-center">
          {/* Root Node */}
          <div className="bg-white border border-neutral-100 rounded-full px-2.5 sm:px-4 py-1 sm:py-1.5 flex items-center gap-1.5 text-xs sm:text-xs font-semibold text-neutral-800 shadow-card">
            <UsersIcon className="w-3 h-3 text-purple-600" />
            <span>Business Goals</span>
          </div>

          {/* Branching SVG Lines */}
          <svg className="w-36 sm:w-48 h-3.5 sm:h-4 text-neutral-200" viewBox="0 0 200 16" fill="none">
            <path d="M 100 0 L 100 8 M 30 8 L 170 8 M 30 8 L 30 16 M 170 8 L 170 16" stroke="currentColor" />
          </svg>

          {/* Child Nodes Row */}
          <div className="flex items-center justify-between w-full max-w-48 sm:max-w-64 gap-1.5 sm:gap-2">
            <div className="bg-white border border-neutral-100 rounded-full px-2 sm:px-4 py-1 sm:py-1.5 flex items-center gap-1 text-xs sm:text-xs font-semibold text-neutral-800 shadow-card">
              <TargetIcon className="w-3 h-3 text-rose-500" />
              <span>User Research</span>
            </div>
            <div className="bg-white border border-neutral-100 rounded-full px-2 sm:px-4 py-1 sm:py-1.5 flex items-center gap-1 text-xs sm:text-xs font-semibold text-neutral-800 shadow-card">
              <FileTextIcon className="w-3 h-3 text-purple-600" />
              <span>Feature Scope</span>
            </div>
          </div>

          {/* Converging SVG Lines */}
          <svg className="w-36 sm:w-48 h-3.5 sm:h-4 text-neutral-200" viewBox="0 0 200 16" fill="none">
            <path d="M 30 0 L 30 8 M 170 0 L 170 8 M 30 8 L 170 8 M 100 8 L 100 16" stroke="currentColor" />
          </svg>

          {/* Bottom Node */}
          <div className="bg-white border border-neutral-100 rounded-full px-2.5 sm:px-4 py-1 sm:py-1.5 flex items-center gap-1.5 text-xs sm:text-xs font-semibold text-neutral-800 shadow-card">
            <LayersIcon className="w-3 h-3 text-blue-600" />
            <span>Technical Plan</span>
          </div>
        </div>
      </motion.div>

      {/* Layer 2: Yellow Sticky Note (Top-Left of Blueprint) */}
      <motion.div
        animate={{ y: [-4, 4, -4], rotate: [-8, -4, -8] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
        className="absolute top-2 sm:top-8 left-0 sm:-left-6 bg-[#FFF9C4]/95 border border-[#FFF176] rounded-xl p-1.5 sm:p-2.5 shadow-md shadow-amber-900/10 z-10 w-24 xs:w-28 sm:w-36 pointer-events-none select-none flex flex-col gap-0.5 sm:gap-1 scale-90 sm:scale-100 origin-top-left"
      >
        <div className="flex items-center gap-1">
          <LightbulbIcon className="w-3.5 h-3.5 text-amber-600" />
          <span className="font-handwriting font-bold text-xs sm:text-sm text-neutral-800">
            Ideas
          </span>
        </div>
        <div className="font-handwriting text-xs sm:text-xs text-neutral-700 leading-tight flex flex-col gap-0.5">
          <div>• Business Goals</div>
          <div>• TargetIcon Audience</div>
        </div>

        {/* Hand-drawn Red Arrow pointing to Blueprint */}
        <svg
          className="absolute -bottom-3 sm:-bottom-4 right-1 w-5 h-5 sm:w-6 sm:h-6 text-primary"
          viewBox="0 0 28 28"
          fill="none"
        >
          <path
            d="M 6 4 C 10 12, 14 16, 22 22"
            stroke="currentColor"
            strokeLinecap="round"
          />
          <path
            d="M 14 22 L 22 22 L 20 14"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>

      {/* Layer 3: Handwritten Annotation (Top-Right) */}
      <motion.div
        animate={{ y: [2, -2, 2], rotate: [-2, 0, -2] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-2 sm:top-18 right-2 sm:right-52 z-10 text-right pointer-events-none select-none scale-85 sm:scale-100 origin-top-right"
      >
        <span className="font-handwriting font-bold text-xs sm:text-sm text-primary tracking-tight block transform -rotate-3 leading-tight">
          From Strategy <br /> to Product
        </span>
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6 text-primary ml-auto -mt-1 transform rotate-12"
          viewBox="0 0 28 28"
          fill="none"
        >
          <path
            d="M 4 18 C 10 10, 18 10, 24 6"
            stroke="currentColor"
            strokeLinecap="round"
          />
          <path
            d="M 16 6 L 24 6 L 22 14"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>

      {/* Layer 4: Floating "Market Research" Card (Right Side) */}
      <motion.div
        animate={{ y: [-5, 5, -5], rotate: [0, 2, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute top-4 sm:top-18 right-0 sm:-right-6 lg:-right-2 bg-white/95 backdrop-blur-md rounded-2xl border border-neutral-100 shadow-xl shadow-neutral-900/5 p-2.5 sm:p-4 z-10 w-36 xs:w-40 sm:w-48 pointer-events-none select-none flex flex-col gap-1.5 scale-90 sm:scale-100 origin-top-right"
      >
        {/* Header */}
        <div className="flex items-center justify-between">
          <span className="font-bold text-xs sm:text-xs text-neutral-800">
            Market Research
          </span>
          <ChartBarIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
        </div>

        {/* Skeletal bars */}
        <div className="flex flex-col gap-1 mb-0.5">
          <div className="w-14 h-1.5 bg-neutral-200/80 rounded-full" />
          <div className="w-8 h-1.5 bg-neutral-100 rounded-full" />
        </div>

        {/* Checklist items */}
        <div className="flex flex-col gap-1 sm:gap-1.5">
          <div className="flex items-center gap-1.5">
            <CircleCheckIcon className="w-3 h-3 text-purple-600 shrink-0" />
            <span className="text-xs sm:text-xs font-semibold text-neutral-700 truncate">
              Competitor Analysis
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <CircleCheckIcon className="w-3 h-3 text-purple-600 shrink-0" />
            <span className="text-xs sm:text-xs font-semibold text-neutral-700 truncate">
              User Insights
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <CircleCheckIcon className="w-3 h-3 text-purple-600 shrink-0" />
            <span className="text-xs sm:text-xs font-semibold text-neutral-700 truncate">
              Feature Priorities
            </span>
          </div>
        </div>

        {/* Downward Hand-drawn Arrow */}
        <svg
          className="absolute -bottom-8 sm:-bottom-12 left-8 sm:left-14 w-6 h-10 sm:w-10 sm:h-14 text-primary transform -rotate-12"
          viewBox="0 0 32 48"
          fill="none"
        >
          <path
            d="M 12 4 C 12 20, 20 30, 20 44"
            stroke="currentColor"
            strokeLinecap="round"
          />
          <path
            d="M 12 36 L 20 44 L 28 36"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>

      {/* Layer 5: Handwritten Sticky Badge (Bottom-Right) */}
      <motion.div
        animate={{ y: [3, -3, 3], rotate: [1, 3, 1] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
        className="absolute bottom-8 sm:bottom-28 right-0 sm:right-3 bg-white/95 rounded-xl border border-neutral-200/90 shadow-md p-1.5 px-2 sm:px-2.5 flex items-center gap-1.5 z-20 pointer-events-none select-none scale-85 sm:scale-100 origin-bottom-right"
      >
        <ChartBarIcon className="w-3.5 h-3.5 text-amber-500 shrink-0" />
        <span className="font-handwriting font-bold text-xs text-neutral-800 leading-tight">
          Clear Plan <br /> Better Results
        </span>
      </motion.div>

      {/* Layer 6: Foreground 3D Character at Desk (discover.png) */}
      <div className="relative z-20 w-full flex items-end justify-center pointer-events-none">
        <CldImage
          src="simpluxe/process/discover"
          alt="Discover Phase - Simpluxe"
          width={1774}
          height={887}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 500px, 600px"
          className="w-full max-w-sm xs:max-w-md sm:max-w-xl lg:max-w-2xl object-contain drop-shadow-xl select-none"
        />
      </div>
    </div>
  );
}
