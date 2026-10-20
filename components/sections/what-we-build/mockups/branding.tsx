"use client";

import { BRANDING_COPY } from "@/lib/content/service-mockups";
import { AnimatePresence, m as motion } from "motion/react";
import { useEffect, useState } from "react";
import { MockupWrapper } from "./mockup-wrapper";

type BrandScreen = "logo" | "palette" | "typography";
const SCREENS: BrandScreen[] = ["logo", "palette", "typography"];
const SCREEN_DURATIONS: Record<BrandScreen, number> = {
  logo: 3000,
  palette: 2800,
  typography: 2800,
};

export function BrandingMockup({ isActive }: { isActive?: boolean }) {
  const [currentScreen, setCurrentScreen] = useState<BrandScreen>("logo");

  useEffect(() => {
    if (!isActive) {
      const resetTimer = setTimeout(() => {
        setCurrentScreen("logo");
      }, 0);
      return () => clearTimeout(resetTimer);
    }

    const timer = setTimeout(() => {
      setCurrentScreen((prev) => {
        const nextIdx = (SCREENS.indexOf(prev) + 1) % SCREENS.length;
        return SCREENS[nextIdx];
      });
    }, SCREEN_DURATIONS[currentScreen]);

    return () => clearTimeout(timer);
  }, [isActive, currentScreen]);

  return (
    <MockupWrapper
      gradientClass="bg-amber-50"
      innerClassName="gap-2.5 p-3.5 sm:p-4"
    >
      {/* Top Application Bar */}
      <div className="flex items-center justify-between pb-1.5 border-b border-black/5">
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-red-400" />
          <div className="w-2 h-2 rounded-full bg-amber-400" />
          <div className="w-2 h-2 rounded-full bg-green-500" />
          <span className="text-2xs font-mono text-muted-foreground ml-1">{BRANDING_COPY.appName}</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-3xs font-semibold px-1.5 py-0.5 rounded bg-amber-100 text-amber-800 border border-amber-200/60">
            {BRANDING_COPY.version}
          </span>
        </div>
      </div>

      {/* Screen Selector Tabs */}
      <div className="flex items-center gap-1 bg-slate-100/80 p-0.5 rounded-lg border border-slate-200/60">
        {BRANDING_COPY.tabs.map((tab) => {
          const isCurrent = currentScreen === tab.id;
          return (
            <button
              type="button"
              key={tab.id}
              onClick={() => setCurrentScreen(tab.id as BrandScreen)}
              className={`flex-1 text-3xs font-semibold py-1 rounded-md transition-all relative ${
                isCurrent ? "text-slate-900 font-bold" : "text-slate-500 hover:text-slate-800"
              }`}
            >
              {isCurrent && (
                <motion.div
                  layoutId="brand-tab-pill"
                  className="absolute inset-0 bg-white rounded-md shadow-2xs border border-black/5"
                  transition={{ type: "spring", stiffness: 450, damping: 30 }}
                />
              )}
              <span className="relative z-10">{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Content Area with Multi-screen Transitions */}
      <div className="relative min-h-0 w-full flex-1 overflow-hidden">
        <AnimatePresence mode="wait">
          {currentScreen === "logo" && <LogoScreen key="logo" isActive={isActive} />}
          {currentScreen === "palette" && <PaletteScreen key="palette" isActive={isActive} />}
          {currentScreen === "typography" && <TypographyScreen key="typography" isActive={isActive} />}
        </AnimatePresence>
      </div>
    </MockupWrapper>
  );
}

// ── Screen 1: Brand Mark & Logo Construction ──────────────────────────────────
function LogoScreen({ isActive }: { isActive?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 14 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -14 }}
      transition={{ duration: 0.28, ease: "easeOut" }}
      className="absolute inset-0 flex flex-col gap-2"
    >
      <div className="bg-white rounded-xl border border-slate-200/90 p-3 flex flex-col gap-2.5 shadow-2xs flex-1">
        {/* Main Emblem + Title */}
        <div className="flex items-center gap-3">
          <motion.div
            animate={isActive ? { rotate: [0, -3, 0], scale: [1, 1.04, 1] } : { rotate: 0, scale: 1 }}
            transition={{ duration: 3, repeat: isActive ? Infinity : 0, ease: "easeInOut" }}
            className="w-12 h-12 rounded-2xl bg-slate-900 flex items-center justify-center shadow-sm relative shrink-0 border border-slate-800"
          >
            {/* Grid crosshair guides */}
            <div className="absolute inset-1 border border-dashed border-white/20 rounded-xl" />
            <span className="text-white font-black text-lg tracking-tight relative z-10">
              {BRANDING_COPY.st}
            </span>
          </motion.div>

          <div className="flex flex-col gap-0.5">
            <span className="text-2xs font-extrabold text-slate-900 tracking-tight">{BRANDING_COPY.studio}</span>
            <span className="text-3xs text-muted-foreground font-medium">{BRANDING_COPY.identityDescription}</span>
            <div className="flex items-center gap-1 pt-1">
              <span className="text-3xs px-1.5 py-0.2 rounded bg-slate-100 text-slate-700 font-mono font-medium">
                {BRANDING_COPY.vectorRatio}
              </span>
              <span className="text-3xs px-1.5 py-0.2 rounded bg-emerald-50 text-emerald-700 font-medium">
                {BRANDING_COPY.verified}
              </span>
            </div>
          </div>
        </div>

        {/* Specimen Box */}
        <div className="bg-slate-50 border border-slate-200/60 rounded-lg p-2 flex items-center justify-between mt-auto">
          <div className="flex flex-col">
            <span className="text-3xs font-bold text-slate-700">{BRANDING_COPY.opticalMark}</span>
            <span className="text-3xs text-slate-400">{BRANDING_COPY.masterGrid}</span>
          </div>
          <span className="text-3xs font-mono font-bold text-indigo-600 bg-indigo-50 px-1.5 py-0.5 rounded">
            {BRANDING_COPY.fileFormats}
          </span>
        </div>
      </div>

      {/* Brand Bar */}
      <div className="bg-slate-900 rounded-lg p-1.5 flex items-center justify-between text-white text-3xs font-medium">
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span>{BRANDING_COPY.identityComplete}</span>
        </div>
        <span className="font-mono text-slate-300">{BRANDING_COPY.scalable}</span>
      </div>
    </motion.div>
  );
}

// ── Screen 2: Curated Color Palette System ────────────────────────────────────
function PaletteScreen({ isActive }: { isActive?: boolean }) {
  const swatches = [
    { name: "Obsidian", hex: "#0F172A", color: "bg-slate-900", role: "Primary Dark" },
    { name: "Ocean Luxe", hex: "#0369A1", color: "bg-sky-700", role: "Brand Accent" },
    { name: "Amber Sun", hex: "#D97706", color: "bg-amber-600", role: "Secondary" },
    { name: "Rose Petal", hex: "#E11D48", color: "bg-rose-600", role: "Highlight" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 14 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -14 }}
      transition={{ duration: 0.28, ease: "easeOut" }}
      className="absolute inset-0 flex flex-col gap-1.5"
    >
      <div className="bg-white rounded-xl border border-slate-200/90 p-2.5 flex flex-col gap-2 shadow-2xs flex-1">
        <div className="flex items-center justify-between pb-1 border-b border-slate-100">
          <span className="text-2xs font-bold text-slate-800">{BRANDING_COPY.paletteTitle}</span>
          <span className="text-3xs font-semibold px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 font-mono">
            {BRANDING_COPY.contrast}
          </span>
        </div>

        {/* 4 Swatch Cards */}
        <div className="grid grid-cols-4 gap-1.5">
          {swatches.map((swatch, idx) => (
            <motion.div
              key={swatch.hex}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.07 }}
              className="flex flex-col gap-1 rounded-lg border border-slate-200/70 p-1 bg-slate-50"
            >
              <motion.div
                animate={isActive ? { scale: [1, 1.05, 1] } : { scale: 1 }}
                transition={{ duration: 2, repeat: Infinity, delay: idx * 0.15 }}
                className={`w-full h-8 rounded-md ${swatch.color} shadow-2xs`}
              />
              <span className="text-3xs font-bold text-slate-800 leading-none truncate">{swatch.name}</span>
              <span className="text-3xs font-mono text-slate-400 leading-none">{swatch.hex}</span>
            </motion.div>
          ))}
        </div>

        {/* Proportional Ratio Bar */}
        <div className="flex flex-col gap-1 mt-auto">
          <div className="flex items-center justify-between text-3xs text-slate-400 font-medium">
            <span>{BRANDING_COPY.distribution}</span>
            <span>{BRANDING_COPY.distributionRatio}</span>
          </div>
          <div className="flex w-full h-2 rounded-full overflow-hidden">
            <div className="w-7/12 bg-slate-900" />
            <div className="w-3/12 bg-sky-700" />
            <div className="w-1/12 bg-amber-600" />
            <div className="w-1/12 bg-rose-600" />
          </div>
        </div>
      </div>

      {/* Palette Footer */}
      <div className="bg-slate-900 rounded-lg p-1.5 flex items-center justify-between text-white text-3xs font-medium">
        <div className="flex items-center gap-1.5">
          <span className="text-amber-400">✦</span>
          <span>{BRANDING_COPY.adaptiveTokens}</span>
        </div>
        <span className="font-mono text-emerald-400">{BRANDING_COPY.darkReady}</span>
      </div>
    </motion.div>
  );
}

// ── Screen 3: Typography & Font Specimen ──────────────────────────────────────
function TypographyScreen({ isActive }: { isActive?: boolean }) {
  const [activeFont, setActiveFont] = useState<string>(BRANDING_COPY.satoshi);

  return (
    <motion.div
      initial={{ opacity: 0, x: 14 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -14 }}
      transition={{ duration: 0.28, ease: "easeOut" }}
      className="absolute inset-0 flex flex-col gap-1.5"
    >
      <div className="bg-white rounded-xl border border-slate-200/90 p-2.5 flex flex-col gap-2 shadow-2xs flex-1">
        {/* Header & Font Switcher */}
        <div className="flex items-center justify-between pb-1 border-b border-slate-100">
          <span className="text-2xs font-bold text-slate-800">{BRANDING_COPY.typographyTitle}</span>
          <div className="flex gap-1">
            {[BRANDING_COPY.satoshi, BRANDING_COPY.inter, BRANDING_COPY.mono].map((f) => (
              <button
                type="button"
                key={f}
                onClick={() => setActiveFont(f)}
                className={`text-3xs px-1.5 py-0.5 rounded font-medium transition-all ${
                  activeFont === f ? "bg-slate-900 text-white font-bold" : "bg-slate-100 text-slate-500 hover:text-slate-800"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Big Glyph Specimen */}
        <div className="flex items-center justify-between bg-slate-50 rounded-lg p-2 border border-slate-200/60">
          <motion.span
            animate={isActive ? { scale: [1, 1.05, 1] } : { scale: 1 }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            className="text-2xl font-black text-slate-900 leading-none tracking-tight font-serif"
          >
            {BRANDING_COPY.aa}
          </motion.span>
          <div className="flex flex-col text-right">
            <span className="text-2xs font-bold text-slate-800">{activeFont} {BRANDING_COPY.display}</span>
            <span className="text-3xs text-slate-400 font-mono">{BRANDING_COPY.weights}</span>
          </div>
        </div>

        {/* Weights Specimen Scale */}
        <div className="flex items-center justify-between text-3xs font-medium text-slate-600 mt-auto pt-1 border-t border-slate-100">
          <span className="font-light">{BRANDING_COPY.lightWeight}</span>
          <span className="font-normal">{BRANDING_COPY.regularWeight}</span>
          <span className="font-semibold">{BRANDING_COPY.semiboldWeight}</span>
          <span className="font-black text-slate-900">{BRANDING_COPY.blackWeight}</span>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-slate-900 rounded-lg p-1.5 flex items-center justify-between text-white text-3xs font-medium">
        <div className="flex items-center gap-1.5">
          <span className="text-sky-400">{BRANDING_COPY.aa}</span>
          <span>{BRANDING_COPY.microTypography}</span>
        </div>
        <span className="font-mono text-slate-300">{BRANDING_COPY.opticalScale}</span>
      </div>
    </motion.div>
  );
}
