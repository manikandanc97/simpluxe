"use client";

import { useState, useEffect } from "react";
import { type Project } from "@/types/project";
import { LockIcon } from "@animateicons/react/lucide/lock-icon";
import { MonitorIcon } from "@animateicons/react/lucide/monitor-icon";
import { SmartphoneIcon } from "@animateicons/react/lucide/smartphone-icon";
import { TabletIcon } from "@animateicons/react/lucide/tablet-icon";
import { ExternalLinkIcon } from "@animateicons/react/lucide/external-link-icon";
import { AnimatePresence, m as motion } from "motion/react";
import Image from "next/image";
import { cn } from "@/lib/utils";

type ViewMode = "mobile" | "tablet" | "desktop";

export function BrowserMockup({ activeProject }: { activeProject: Project }) {
  const [viewMode, setViewMode] = useState<ViewMode>("desktop");



  const getContainerStyles = () => {
    switch (viewMode) {
      case "mobile":
        return "mx-auto rounded-3xl border border-slate-200/90";
      case "tablet":
        return "mx-auto rounded-3xl border border-slate-200/90";
      case "desktop":
        return "mx-auto rounded-2xl border border-slate-200/90";
      default:
        return "mx-auto rounded-2xl border border-slate-200/90";
    }
  };

  const getContainerWidth = () => {
    switch (viewMode) {
      case "mobile": return "320px";
      case "tablet": return "640px";
      case "desktop": return "100%";
      default: return "100%";
    }
  };

  return (
    <div className="w-full h-full flex justify-center items-center transition-all duration-500 ease-in-out py-2 sm:py-0">
      <div 
        style={{ width: getContainerWidth(), maxWidth: "100%" }}
        className={cn(
          "relative bg-white flex flex-col z-20 shadow-card overflow-hidden transition-all duration-500 ease-in-out h-full",
          getContainerStyles()
        )}
      >
        {/* Browser Window Header Chrome */}
        <div className="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-2.5 bg-background border-b border-slate-200/80 select-none shrink-0">
          
          {/* Left: Traffic Dots */}
          <div className="flex items-center gap-1.5 shrink-0 w-12 sm:w-24">
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#FF5F56] border border-black/10 shadow-xs" />
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#FFBD2E] border border-black/10 shadow-xs" />
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#27C93F] border border-black/10 shadow-xs" />
          </div>
          
          {/* Center: Address Pill with Green LockIcon & Live Link */}
          <div className="flex-1 flex justify-center px-1 sm:px-2 min-w-0">
            <a
              href={activeProject.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center justify-center gap-1.5 bg-white border border-slate-200 shadow-xs rounded-md px-2.5 sm:px-3.5 py-1 text-[11px] sm:text-xs font-medium text-slate-600 min-w-0 max-w-40 xs:max-w-52 sm:max-w-sm truncate hover:border-slate-300 hover:text-slate-900 transition-colors cursor-pointer group"
              title={`Visit ${activeProject.domain}`}
            >
              <LockIcon size={12} className="text-emerald-500 shrink-0" />
              <span className="truncate">{activeProject.domain}</span>
              <ExternalLinkIcon size={10} className="text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity ml-0.5 shrink-0" />
            </a>
          </div>
          
          {/* Right: View Toggles */}
          <div className="flex items-center justify-end shrink-0 w-12 sm:w-24">
            <div className="flex items-center justify-center bg-slate-100/80 rounded-md p-0.5 sm:p-1 border border-slate-200/60">
              <button 
                onClick={(e) => { e.stopPropagation(); setViewMode("mobile"); }} 
                className={cn("p-1 sm:p-1.5 rounded transition-all", viewMode === "mobile" ? "bg-white shadow-sm text-primary" : "text-slate-400 hover:text-slate-700")}
                title="Mobile View"
              >
                <SmartphoneIcon size={12} className="sm:w-3.5 sm:h-3.5" />
              </button>
              <button 
                onClick={(e) => { e.stopPropagation(); setViewMode("tablet"); }} 
                className={cn("p-1 sm:p-1.5 rounded transition-all hidden xs:block", viewMode === "tablet" ? "bg-white shadow-sm text-primary" : "text-slate-400 hover:text-slate-700")}
                title="TabletIcon View"
              >
                <TabletIcon size={12} className="sm:w-3.5 sm:h-3.5" />
              </button>
              <button 
                onClick={(e) => { e.stopPropagation(); setViewMode("desktop"); }} 
                className={cn("p-1 sm:p-1.5 rounded transition-all", viewMode === "desktop" ? "bg-white shadow-sm text-primary" : "text-slate-400 hover:text-slate-700")}
                title="Desktop View"
              >
                <MonitorIcon size={12} className="sm:w-3.5 sm:h-3.5" />
              </button>
            </div>
          </div>
        </div>
          
        {/* Browser Viewport Area (Screenshot Image) */}
        <div className="sw-viewport relative w-full flex-1 overflow-hidden bg-slate-900 transition-all duration-500 ease-in-out">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeProject.id}-${viewMode}`}
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="sw-mockup-content absolute inset-0 w-full h-full bg-white will-change-transform"
            >
              {(viewMode === "mobile" ? activeProject.mobileImage || activeProject.desktopImage : activeProject.desktopImage || activeProject.mobileImage) ? (
                <div className="relative w-full h-full bg-[var(--foreground)] flex items-center justify-center overflow-hidden group/thumb">
                  {/* Blurred Background to handle different aspect ratios seamlessly */}
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-30 blur-2xl scale-110 pointer-events-none transition-all duration-500"
                    style={{ backgroundImage: `url(${viewMode === "mobile" ? activeProject.mobileImage || activeProject.desktopImage : activeProject.desktopImage || activeProject.mobileImage})` }}
                  />
                  
                  {/* Main Screenshot Image */}
                  <div className="absolute top-0 left-0 w-full h-full z-10">
                    <Image
                      src={(viewMode === "mobile" ? activeProject.mobileImage || activeProject.desktopImage : activeProject.desktopImage || activeProject.mobileImage)!}
                      alt={`${activeProject.name} Screenshot`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 50vw"
                      className="object-cover object-top transition-transform duration-500 ease-out group-hover/thumb:scale-[1.02]"
                    />
                  </div>
                  
                  {/* Gradient Overlay & Badge */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10 pointer-events-none z-10 transition-opacity duration-300 group-hover/thumb:opacity-80" />
                  <div className="absolute bottom-3 left-3 z-20 flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-xs text-white/90 shadow-md">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span className="font-medium">{activeProject.serviceType} Screenshot</span>
                  </div>
                </div>
              ) : (
                <div className="absolute inset-0 w-full h-full bg-slate-50 flex flex-col items-center justify-center p-6 text-center gap-5">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white border border-slate-100 flex items-center justify-center shadow-sm">
                    <LockIcon className="w-8 h-8 sm:w-10 sm:h-10 text-slate-300" />
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-800 tracking-tight">
                      Building in Stealth
                    </h3>
                    <p className="text-sm sm:text-sm text-slate-500 max-w-72 sm:max-w-xs leading-relaxed">
                      This {activeProject.serviceType.toLowerCase().replace('s', '')} is currently under active development in our lab.
                    </p>
                  </div>
                  <span className="px-4 py-1.5 rounded-full bg-amber-50 text-amber-600 border border-amber-200 text-xs font-bold tracking-wide uppercase shadow-sm">
                    Preview Coming Soon
                  </span>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
                 