"use client";

import { SERVICES_HERO_COPY } from "@/lib/content/services";

import { CldImage } from "@/components/ui/cld-image";
import { m as motion } from "motion/react";
import { staggerContainer, fadeUp } from "@/lib/motion";
import { LayoutGridIcon } from "@animateicons/react/lucide/layout-grid-icon";
import { ZapIcon } from "@animateicons/react/lucide/zap-icon";
import { TrendingUpIcon } from "@animateicons/react/lucide/trending-up-icon";
import { SparklesIcon } from "@animateicons/react/lucide/sparkles-icon";
import { ChartLineIcon } from "@animateicons/react/lucide/chart-line-icon";
import { CodeIcon } from "@animateicons/react/lucide/code-icon";
import { LayersIcon } from "@animateicons/react/lucide/layers-icon";
import { CircleCheckIcon } from "@animateicons/react/lucide/circle-check-icon";
import { CpuIcon } from "@animateicons/react/lucide/cpu-icon";
import { SmartphoneIcon } from "@animateicons/react/lucide/smartphone-icon";
import { ShieldCheckIcon } from "@animateicons/react/lucide/shield-check-icon";
import { AnimatedIcon } from "@/components/ui/animated-icon";
import { Container } from "@/components/ui/container";

export function ServicesHero() {

  return (
    <Container className="relative pt-24 sm:pt-28 lg:pt-36 pb-8 sm:pb-12 lg:pb-16">
      {/* ── Soft Ambient Glows ── */}
      <div
        className="pointer-events-none absolute -top-12 left-1/4 w-96 h-96 rounded-full bg-gradient-to-tr from-primary/12 via-primary/8 to-transparent blur-3xl -z-10"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/3 right-10 w-128 h-128 rounded-full bg-gradient-to-br from-chart-2/10 via-blue-500/6 to-transparent blur-3xl -z-10"
        aria-hidden="true"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-8 items-center">
        {/* ── Left Column: Headline, CTAs, Highlights ── */}
        <motion.div variants={staggerContainer(0.1, 0.1)} initial="hidden" animate="visible" className="lg:col-span-7 flex flex-col gap-8 sm:gap-12 items-start text-left z-10">
          <div className="flex flex-col gap-4 sm:gap-6">
            <div className="flex flex-col gap-2 sm:gap-2.5">
              {/* Breadcrumb */}
              <motion.nav variants={fadeUp} className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground font-medium font-satoshi">
                <a href="/" className="hover:text-foreground transition-colors">{SERVICES_HERO_COPY.home}</a>
                <span className="text-border">{SERVICES_HERO_COPY.symbol}</span>
                <span className="text-primary font-semibold">{SERVICES_HERO_COPY.services}</span>
              </motion.nav>

              {/* Main Title */}
              <motion.h1 variants={fadeUp} className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight leading-tight font-satoshi max-w-2xl">
                {SERVICES_HERO_COPY.digitalServicesFor}<span className="text-primary">{SERVICES_HERO_COPY.yourBusiness}</span>
              </motion.h1>
            </div>

            {/* Description */}
            <motion.p variants={fadeUp} className="text-sm sm:text-base text-muted-foreground max-w-lg leading-relaxed font-normal">
              {SERVICES_HERO_COPY.fromWebsitesAndMobileProductsTo}</motion.p>
          </div>

          {/* 3 Core Value Props in a Row */}
          <motion.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-4 pt-2.5 border-t border-surface-elevated/80 w-full">
            {/* Value Prop 1 */}
            <div data-slot="card" className="group flex items-center gap-4 cursor-default">
              <div className="w-10 h-10 rounded-2xl bg-rose-50 flex items-center justify-center shrink-0 border border-rose-100/80">
                <AnimatedIcon icon={LayoutGridIcon} size={18} className="text-primary" />
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-sm font-bold text-foreground leading-tight">
                  {SERVICES_HERO_COPY.text9Capabilities}</span>
                <span className="text-xs text-muted-foreground leading-tight">
                  {SERVICES_HERO_COPY.endToEndDigitalServices}</span>
              </div>
            </div>

            {/* Value Prop 2 */}
            <div data-slot="card" className="group flex items-center gap-4 cursor-default">
              <div className="w-10 h-10 rounded-2xl bg-purple-50 flex items-center justify-center shrink-0 border border-purple-100/80">
                <AnimatedIcon icon={ZapIcon} size={18} className="text-chart-2" />
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-sm font-bold text-foreground leading-tight">
                  {SERVICES_HERO_COPY.designDevelopment}</span>
                <span className="text-xs text-muted-foreground leading-tight">
                  {SERVICES_HERO_COPY.modernAndScalable}</span>
              </div>
            </div>

            {/* Value Prop 3 */}
            <div data-slot="card" className="group flex items-center gap-4 cursor-default">
              <div className="w-10 h-10 rounded-2xl bg-pink-50 flex items-center justify-center shrink-0 border border-pink-100/80">
                <AnimatedIcon icon={TrendingUpIcon} size={18} className="text-primary" />
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-sm font-bold text-foreground leading-tight">
                  {SERVICES_HERO_COPY.builtForGrowth}</span>
                <span className="text-xs text-muted-foreground leading-tight">
                  {SERVICES_HERO_COPY.realBusinessOutcomes}</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* ── Right Column: 3D Illustration, Gradient Fade Desk & Rich Floating Elements ── */}
        <div className="lg:col-span-5 relative flex justify-center items-center select-none pt-8 sm:pt-12 lg:pt-0">
          {/* Subtle Ambient Backing Glows */}
          <div className="pointer-events-none absolute -top-8 -left-6 w-32 h-32 rounded-full bg-purple-300/35 blur-2xl -z-10" />
          <div className="pointer-events-none absolute top-4 -right-4 w-36 h-36 rounded-full bg-pink-300/35 blur-2xl -z-10" />
          <div className="pointer-events-none absolute bottom-4 left-1/3 w-40 h-40 rounded-full bg-sky-200/35 blur-2xl -z-10" />

          {/* Outer Showcase Container with Dot LayoutGridIcon Pattern Backdrop */}
          <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-xl aspect-card flex items-center justify-center">
            
            {/* ── Background Subtle Dot Pattern Card (Behind Character) ── */}
            <div className="absolute inset-1 sm:inset-3 rounded-3xl bg-white/40 border border-surface-elevated/80 bg-dots-panel bg-dots-panel-size -z-10 shadow-card" />

            {/* ── Floating Element 1 (Top Left): Next.js & React ── */}
            <motion.div
              animate={{ y: [0, -5, 0], x: [0, 2, 0] }}
              transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-3 sm:top-4 left-2 sm:left-4 z-20 flex items-center gap-2 sm:gap-2 px-2.5 py-1.5 sm:px-4 sm:py-2 rounded-2xl bg-white/95 backdrop-blur-md border border-surface-elevated shadow-card"
            >
              <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-xl bg-gradient-to-tr from-chart-1 to-chart-1 flex items-center justify-center text-white shadow-xs shrink-0">
                <CodeIcon size={13} />
              </div>
              <div className="text-left">
                <div className="text-xs sm:text-xs font-bold text-foreground leading-tight">
                  {SERVICES_HERO_COPY.nextJsReact}</div>
                <div className="text-2xs sm:text-2xs font-semibold text-chart-1 leading-tight">
                  {SERVICES_HERO_COPY.cleanArchitecture}</div>
              </div>
            </motion.div>

            {/* ── Floating Element 2 (Top Center): Strategy • Design • Launch Pill ── */}
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
              className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 z-30 hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md border border-surface-elevated shadow-xs text-2xs sm:text-xs font-bold text-muted-foreground whitespace-nowrap"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>{SERVICES_HERO_COPY.strategy}</span>
              <span className="text-muted-foreground">{SERVICES_HERO_COPY.symbol2}</span>
              <span>{SERVICES_HERO_COPY.design}</span>
              <span className="text-muted-foreground">{SERVICES_HERO_COPY.symbol2}</span>
              <span className="text-primary">{SERVICES_HERO_COPY.launch}</span>
            </motion.div>

            {/* ── Micro Tech Tag: TypeScript (Lowered cleanly below Next.js) ── */}
            <motion.div
              animate={{ y: [0, 3, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              className="pointer-events-none absolute top-20 sm:top-20 left-10 sm:left-14 text-chart-1 text-2xs font-mono z-15 hidden xs:flex items-center gap-1 px-2 py-0.5 rounded-full bg-blue-50/80 border border-blue-100/70 shadow-2xs backdrop-blur-xs"
            >
              <span>{SERVICES_HERO_COPY.typescript}</span>
            </motion.div>

            {/* ── Floating Element 3 (Top Right): Ideas to Real Products ── */}
            <motion.div
              animate={{ y: [0, 5, 0], rotate: [0, -1, 0] }}
              transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
              className="absolute top-3 sm:top-4 right-2 sm:right-4 z-20 flex items-center gap-2 sm:gap-2 px-2.5 py-1.5 sm:px-4 sm:py-2 rounded-2xl bg-white/95 backdrop-blur-md border border-white/90 shadow-elevated"
            >
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-gradient-to-tr from-primary to-primary flex items-center justify-center text-white shadow-xs shrink-0">
                <SparklesIcon size={15} className="text-white" />
              </div>
              <div className="text-left">
                <div className="text-xs sm:text-xs font-bold text-foreground leading-tight">
                  {SERVICES_HERO_COPY.ideasTo}</div>
                <div className="text-xs sm:text-xs font-bold text-primary leading-tight">
                  {SERVICES_HERO_COPY.realProducts}</div>
              </div>
            </motion.div>

            {/* ── Floating Element 4 (Mid Left): Design Systems & Figma ── */}
            <motion.div
              animate={{ y: [0, 5, 0], x: [0, -2, 0] }}
              transition={{ duration: 5.6, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
              className="absolute top-28 sm:top-32 -left-2 sm:-left-3 z-20 flex items-center gap-2 px-2.5 py-1.5 sm:px-4 sm:py-2 rounded-2xl bg-white/95 backdrop-blur-md border border-accent-soft shadow-violet"
            >
              <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-xl bg-purple-50 text-chart-2 flex items-center justify-center border border-purple-100 shrink-0">
                <LayersIcon size={14} />
              </div>
              <div className="text-left">
                <div className="text-xs sm:text-xs font-bold text-foreground leading-tight">
                  {SERVICES_HERO_COPY.designSystems}</div>
                <div className="text-2xs sm:text-2xs font-semibold text-chart-2 leading-tight">
                  {SERVICES_HERO_COPY.figmaToCode}</div>
              </div>
            </motion.div>

            {/* ── Floating Element 4.5 (Lower Mid Left): Scalable Cloud Pill ── */}
            <motion.div
              animate={{ y: [0, 4, 0], rotate: [0, -1, 0] }}
              transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
              className="absolute top-44 sm:top-48 -left-1 sm:left-2 z-20 hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md border border-surface-elevated shadow-card"
            >
              <CpuIcon size={11} className="text-chart-2" />
              <span className="text-2xs font-bold text-muted-foreground">
                {SERVICES_HERO_COPY.scalableCloud}</span>
            </motion.div>

            {/* ── Floating Element 5 (Mid Right): Mobile & Web Apps ── */}
            <motion.div
              animate={{ y: [0, -5, 0], x: [0, 2, 0] }}
              transition={{ duration: 5.4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-28 sm:top-32 -right-2 sm:-right-2 z-20 flex items-center gap-2 px-2.5 py-1.5 sm:px-4 sm:py-2 rounded-2xl bg-white/95 backdrop-blur-md border border-accent-soft shadow-violet"
            >
              <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-xl bg-indigo-50 text-chart-2 flex items-center justify-center border border-indigo-100 shrink-0">
                <SmartphoneIcon size={14} />
              </div>
              <div className="text-left">
                <div className="text-xs sm:text-xs font-bold text-foreground leading-tight">
                  {SERVICES_HERO_COPY.mobileWeb}</div>
                <div className="text-2xs sm:text-2xs font-semibold text-chart-2 leading-tight">
                  {SERVICES_HERO_COPY.iosAndroidReact}</div>
              </div>
            </motion.div>

            {/* ── Micro Tech Tag: FastAPI (Moved to be visible) ── */}
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="pointer-events-none absolute top-20 sm:top-24 right-16 sm:right-24 text-primary text-2xs font-mono z-25 hidden sm:flex items-center gap-1 px-2 py-0.5 rounded-full bg-rose-50/80 border border-rose-100/70 shadow-2xs backdrop-blur-xs"
            >
              <span>{SERVICES_HERO_COPY.fastapi}</span>
            </motion.div>

            {/* ── Floating Element 6 (Lower Mid Right): Reports & Growth ── */}
            <motion.div
              animate={{ y: [0, 5, 0], rotate: [0, 1.2, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.4 }}
              className="absolute top-44 sm:top-48 -right-2 sm:right-0 z-20 flex items-center gap-2 sm:gap-2 px-2.5 py-1.5 sm:px-4 sm:py-2 rounded-2xl bg-white/95 backdrop-blur-md border border-surface-elevated shadow-card"
            >
              <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 border border-emerald-100 shrink-0">
                <ChartLineIcon size={14} />
              </div>
              <div className="text-left">
                <div className="text-xs sm:text-xs font-bold text-foreground leading-tight">
                  {SERVICES_HERO_COPY.reports}</div>
                <div className="text-2xs sm:text-2xs font-semibold text-emerald-600 leading-tight flex items-center gap-0.5">
                  <span>{SERVICES_HERO_COPY.text284}</span> {SERVICES_HERO_COPY.growth}</div>
              </div>
            </motion.div>

            {/* ── Floating Element 7 (Bottom Left): Performance Badge ── */}
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
              className="absolute bottom-3 sm:bottom-4 left-2 sm:left-4 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md border border-surface-elevated shadow-xs"
            >
              <CircleCheckIcon size={12} className="text-emerald-500" />
              <span className="text-2xs sm:text-xs font-bold text-foreground">
                {SERVICES_HERO_COPY.subSecondSpeed}</span>
            </motion.div>

            {/* ── Floating Element 8 (Bottom Right): Secure & Scalable Pill ── */}
            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 4.7, repeat: Infinity, ease: "easeInOut", delay: 0.9 }}
              className="absolute bottom-3 sm:bottom-4 right-2 sm:right-4 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md border border-surface-elevated shadow-xs"
            >
              <ShieldCheckIcon size={12} className="text-chart-3" />
              <span className="text-2xs sm:text-xs font-bold text-foreground">
                {SERVICES_HERO_COPY.secureScalable}</span>
            </motion.div>

            {/* ── Micro Decorators Floating in Air ── */}
            <motion.span
              animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="pointer-events-none absolute top-16 right-20 text-primary text-xs z-5"
            >
              {SERVICES_HERO_COPY.symbol3}</motion.span>
            <motion.span
              animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0.9, 0.4] }}
              transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="pointer-events-none absolute top-14 left-24 text-chart-2 text-sm z-5"
            >
              {SERVICES_HERO_COPY.symbol4}</motion.span>

            {/* ── 3D Character Illustration with Smooth Bottom Gradient Fade (Static, Non-animated) ── */}
            <div className="relative w-full h-full flex items-center justify-center z-10">
              <div
                className="relative w-full h-full"
                style={{
                  // Smooth vertical gradient mask: fades out the bottom table legs naturally
                  maskImage:
                    "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 74%, rgba(0,0,0,0.65) 86%, rgba(0,0,0,0) 98%)",
                  WebkitMaskImage:
                    "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 74%, rgba(0,0,0,0.65) 86%, rgba(0,0,0,0) 98%)",
                }}
              >
                <CldImage
                  src="simpluxe/section-banner/ChatGPT_Image_Sep_28_2026_07_25_40_PM_hjumpi"
                  alt={SERVICES_HERO_COPY.digitalServicesShapedAroundYourBusiness}
                  width={768}
                  height={512}
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 560px"
                  className="w-full h-full object-contain drop-shadow-elevated select-none"
                />
              </div>

              {/* Diffused ambient soft shadow underneath the table to ground it naturally */}
              <div className="pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 w-17/20 h-8 bg-gradient-to-r from-transparent via-primary/12 to-transparent blur-xl -z-5" />

              {/* Bottom gradient blend with page background so there is zero abrupt edge */}
              <div className="pointer-events-none absolute -bottom-1 left-0 right-0 h-16 bg-gradient-to-t from-background via-background/85 to-transparent z-15" />
            </div>

          </div>
        </div>
      </div>
    </Container>
  );
}
