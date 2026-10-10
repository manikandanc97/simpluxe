"use client";

import { ABOUT_HERO_COPY } from "@/lib/content/about";

import { m as motion } from "motion/react";
import { staggerContainer, fadeUp } from "@/lib/motion";
import { CldImage } from "@/components/ui/cld-image";
import { ShieldCheckIcon } from "@animateicons/react/lucide/shield-check-icon";
import { ZapIcon } from "@animateicons/react/lucide/zap-icon";
import { CodeIcon } from "@animateicons/react/lucide/code-icon";
import { SparklesIcon } from "@animateicons/react/lucide/sparkles-icon";
import { LayersIcon } from "@animateicons/react/lucide/layers-icon";
import { CircleCheckIcon } from "@animateicons/react/lucide/circle-check-icon";
import { NextJsIcon } from "@/components/work/tech-icons";
import { Container } from "@/components/ui/container";

export function AboutHero() {
  return (
    <Container className="relative pt-24 sm:pt-28 lg:pt-36 pb-8 sm:pb-12 lg:pb-16">
      {/* ── Soft Ambient Glows ── */}
      <div
        className="pointer-events-none absolute -top-12 left-1/4 w-96 h-96 rounded-full bg-gradient-to-tr from-primary/10 via-primary/5 to-transparent blur-3xl -z-10"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/3 right-10 w-128 h-128 rounded-full bg-gradient-to-br from-primary/5 via-blue-500/5 to-transparent blur-3xl -z-10"
        aria-hidden="true"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-8 items-center">
        {/* ── Left Column: Headline, Description & 3 Value Props ── */}
        <motion.div variants={staggerContainer(0.1, 0.1)} initial="hidden" animate="visible" className="lg:col-span-7 flex flex-col gap-8 sm:gap-12 items-start text-left z-10">
          <div className="flex flex-col gap-4 sm:gap-6">
            <div className="flex flex-col gap-2 sm:gap-2.5">
              {/* Breadcrumb */}
              <motion.nav variants={fadeUp} className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground font-medium font-satoshi">
                <a href="/" className="hover:text-foreground transition-colors">
                  {ABOUT_HERO_COPY.home}</a>
                <span className="text-muted-foreground/60">{ABOUT_HERO_COPY.symbol}</span>
                <span className="text-primary font-semibold">{ABOUT_HERO_COPY.about}</span>
              </motion.nav>

              {/* Main Title */}
              <motion.h1 variants={fadeUp} className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight leading-tight font-satoshi max-w-2xl">
                {ABOUT_HERO_COPY.engineeringExcellenceShapedAround}{" "}
                <span className="text-primary">{ABOUT_HERO_COPY.yourVision}</span>
              </motion.h1>
            </div>

            {/* Description */}
            <motion.p variants={fadeUp} className="text-sm sm:text-base text-muted-foreground max-w-lg leading-relaxed font-normal">
              {ABOUT_HERO_COPY.weAreADedicatedSoftwareStudio}</motion.p>
          </div>

          {/* 3 Core Value Props in a Row */}
          <motion.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-4 pt-4 border-t border-border w-full">
            {/* Value Prop 1 */}
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
                <SparklesIcon size={18} className="text-primary" />
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-sm font-bold text-foreground leading-tight">
                  {ABOUT_HERO_COPY.highCraft}</span>
                <span className="text-xs text-muted-foreground leading-tight">
                  {ABOUT_HERO_COPY.pixelPerfectExecution}</span>
              </div>
            </div>

            {/* Value Prop 2 */}
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center shrink-0 border border-border">
                <ZapIcon size={18} className="text-foreground/80" />
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-sm font-bold text-foreground leading-tight">
                  {ABOUT_HERO_COPY.zeroBloat}</span>
                <span className="text-xs text-muted-foreground leading-tight">
                  {ABOUT_HERO_COPY.leanRapidArchitecture}</span>
              </div>
            </div>

            {/* Value Prop 3 */}
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center shrink-0 border border-primary/15">
                <ShieldCheckIcon size={18} className="text-primary" />
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-sm font-bold text-foreground leading-tight">
                  {ABOUT_HERO_COPY.productionReady}</span>
                <span className="text-xs text-muted-foreground leading-tight">
                  {ABOUT_HERO_COPY.scaleWithConfidence}</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* ── Right Column: 3D Illustration matching Services Hero with Floating Badges ── */}
        <div className="lg:col-span-5 relative flex justify-center items-center select-none pt-8 sm:pt-12 lg:pt-0">
          {/* Subtle Ambient Backing Glows */}
          <div className="pointer-events-none absolute -top-8 -left-6 w-32 h-32 rounded-full bg-primary/10 blur-2xl -z-10" />
          <div className="pointer-events-none absolute top-4 -right-4 w-36 h-36 rounded-full bg-primary/10 blur-2xl -z-10" />
          <div className="pointer-events-none absolute bottom-4 left-1/3 w-40 h-40 rounded-full bg-blue-400/10 blur-2xl -z-10" />

          {/* Outer Showcase Container with Dot Grid Pattern Backdrop */}
          <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-xl aspect-card flex items-center justify-center">
            
            {/* Background Subtle Dot Pattern Card */}
            <div className="absolute inset-1 sm:inset-3 rounded-2xl bg-card/60 border border-border bg-dots-panel bg-dots-panel-size -z-10 shadow-card" />

            {/* ── Floating Badge 1 (Top Left): Next.js 16 Native ── */}
            <motion.div
              animate={{ y: [0, -5, 0], x: [0, 2, 0] }}
              transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-3 sm:top-4 left-2 sm:left-4 z-20 flex items-center gap-2 sm:gap-2 px-2.5 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-card/95 backdrop-blur-md border border-border shadow-card"
            >
              <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-foreground flex items-center justify-center text-background shadow-2xs shrink-0 p-1">
                <NextJsIcon className="w-full h-full object-contain" />
              </div>
              <div className="text-left">
                <div className="text-xs font-bold text-foreground leading-tight">
                  {ABOUT_HERO_COPY.nextJs16Native}</div>
                <div className="text-2xs font-semibold text-primary leading-tight">
                  {ABOUT_HERO_COPY.turbopackArchitecture}</div>
              </div>
            </motion.div>

            {/* ── Floating Badge 2 (Top Center): Status Pill ── */}
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
              className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 z-30 hidden sm:flex items-center gap-1.5 px-4 py-1 rounded-full bg-card/90 backdrop-blur-md border border-border shadow-2xs text-xs font-bold text-muted-foreground whitespace-nowrap"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>{ABOUT_HERO_COPY.fullStack}</span>
              <span className="text-muted-foreground/60">{ABOUT_HERO_COPY.symbol2}</span>
              <span>{ABOUT_HERO_COPY.modernTooling}</span>
              <span className="text-muted-foreground/60">{ABOUT_HERO_COPY.symbol2}</span>
              <span className="text-primary">{ABOUT_HERO_COPY.globalDelivery}</span>
            </motion.div>

            {/* ── Floating Badge 3 (Top Right): 100% Type-Safe ── */}
            <motion.div
              animate={{ y: [0, 5, 0], rotate: [0, -1, 0] }}
              transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
              className="absolute top-3 sm:top-4 right-2 sm:right-4 z-20 flex items-center gap-2 sm:gap-2 px-2.5 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-card/95 backdrop-blur-md border border-border shadow-elevated"
            >
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-primary flex items-center justify-center text-white shadow-2xs shrink-0">
                <CodeIcon size={16} className="text-white" />
              </div>
              <div className="text-left">
                <div className="text-xs font-bold text-foreground leading-tight">
                  {ABOUT_HERO_COPY.typescript}</div>
                <div className="text-xs font-bold text-primary leading-tight">
                  {ABOUT_HERO_COPY.text100TypeSafe}</div>
              </div>
            </motion.div>

            {/* ── Floating Badge 4 (Mid Left): System Design ── */}
            <motion.div
              animate={{ y: [0, 5, 0], x: [0, -2, 0] }}
              transition={{ duration: 5.6, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
              className="absolute top-28 sm:top-32 -left-2 sm:-left-3 z-20 flex items-center gap-2 px-2.5 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-card/95 backdrop-blur-md border border-border shadow-card"
            >
              <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-secondary text-foreground flex items-center justify-center border border-border shrink-0">
                <LayersIcon size={14} />
              </div>
              <div className="text-left">
                <div className="text-xs font-bold text-foreground leading-tight">
                  {ABOUT_HERO_COPY.systemDesign}</div>
                <div className="text-2xs font-semibold text-muted-foreground leading-tight">
                  {ABOUT_HERO_COPY.scalablePatterns}</div>
              </div>
            </motion.div>

            {/* ── Floating Badge 5 (Mid Right): Performance ── */}
            <motion.div
              animate={{ y: [0, -5, 0], x: [0, 2, 0] }}
              transition={{ duration: 5.4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-28 sm:top-32 -right-2 sm:-right-2 z-20 flex items-center gap-2 px-2.5 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-card/95 backdrop-blur-md border border-border shadow-card"
            >
              <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-primary/10 text-primary flex items-center justify-center border border-primary/20 shrink-0">
                <ZapIcon size={14} />
              </div>
              <div className="text-left">
                <div className="text-xs font-bold text-foreground leading-tight">
                  {ABOUT_HERO_COPY.subSecondSpeed}</div>
                <div className="text-2xs font-semibold text-primary leading-tight">
                  {ABOUT_HERO_COPY.edgeOptimized}</div>
              </div>
            </motion.div>

            {/* ── Floating Badge 6 (Bottom Left): Uptime ── */}
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
              className="absolute bottom-3 sm:bottom-4 left-2 sm:left-4 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-card/95 backdrop-blur-md border border-border shadow-2xs"
            >
              <CircleCheckIcon size={12} className="text-emerald-500" />
              <span className="text-2xs sm:text-xs font-bold text-foreground">
                {ABOUT_HERO_COPY.text999Uptime}</span>
            </motion.div>

            {/* ── Floating Badge 7 (Bottom Right): Secure ── */}
            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 4.7, repeat: Infinity, ease: "easeInOut", delay: 0.9 }}
              className="absolute bottom-3 sm:bottom-4 right-2 sm:right-4 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-card/95 backdrop-blur-md border border-border shadow-2xs"
            >
              <ShieldCheckIcon size={12} className="text-primary" />
              <span className="text-2xs sm:text-xs font-bold text-foreground">
                {ABOUT_HERO_COPY.enterpriseSecure}</span>
            </motion.div>

            {/* ── 3D Character Illustration with Smooth Bottom Gradient Fade ── */}
            <div className="relative w-full h-full flex items-center justify-center z-10">
              <div
                className="relative w-full h-full"
                style={{
                  maskImage:
                    "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 74%, rgba(0,0,0,0.65) 86%, rgba(0,0,0,0) 98%)",
                  WebkitMaskImage:
                    "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 74%, rgba(0,0,0,0.65) 86%, rgba(0,0,0,0) 98%)",
                }}
              >
                <CldImage
                  src="simpluxe/section-banner/ChatGPT_Image_Sep_28_2026_07_25_40_PM_hjumpi"
                  alt={ABOUT_HERO_COPY.engineeringExcellenceShapedAroundYourVision}
                  width={768}
                  height={512}
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 560px"
                  className="w-full h-full object-contain drop-shadow-elevated select-none"
                />
              </div>

              {/* Ambient soft shadow */}
              <div className="pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 w-17/20 h-8 bg-gradient-to-r from-transparent via-primary/10 to-transparent blur-xl -z-5" />

              {/* Bottom gradient blend with page background */}
              <div className="pointer-events-none absolute -bottom-1 left-0 right-0 h-16 bg-gradient-to-t from-background via-background/85 to-transparent z-15" />
            </div>

          </div>
        </div>
      </div>
    </Container>
  );
}
