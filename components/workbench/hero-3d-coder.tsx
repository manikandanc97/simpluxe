"use client";

import { HERO_3D_CODER_COPY } from "@/lib/content/hero";

import { cn } from "@/lib/utils";
import { m as motion } from "motion/react";
import { CldImage } from "@/components/ui/cld-image";
import React, { useRef } from "react";


interface Hero3DCoderProps {
  className?: string;
  parallaxCanvasRef?: React.RefObject<HTMLDivElement | null>;
  cardsRef?: React.RefObject<HTMLDivElement | null>;
}

export function Hero3DCoder({ className, parallaxCanvasRef, cardsRef }: Hero3DCoderProps) {
  const localContainerRef = useRef<HTMLDivElement>(null);
  const canvasRef = parallaxCanvasRef || localContainerRef;

  // Track container dimensions to force a DOM update on resize.
  // This prevents the browser GPU compositor from caching stale 3D bounds
  // when switching viewports, and resets the parallax bounds logic.
  React.useEffect(() => {
    if (!canvasRef.current) return;
    
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        // Bypass React state to prevent hydration thrashing
        canvasRef.current?.style.setProperty('--sync-width', `${entry.contentRect.width}px`);
      }
    });
    
    observer.observe(canvasRef.current);
    return () => observer.disconnect();
  }, [canvasRef]);

  return (
    <div
      className={cn(
        "relative w-full h-80 xs:h-90 sm:h-110 md:h-125 lg:h-150 flex items-center justify-center select-none perspective-scene max-w-4xl mx-auto overflow-visible",
        className
      )}
    >
      {/* ── AMBIENT PURPLE & PINK GLOWS ── */}
      <div className="parallax-glow-1 absolute top-4 left-4 w-40 sm:w-80 md:w-96 h-40 sm:h-80 md:h-96 bg-violet-100/60 rounded-full blur-3xl sm:blur-ambient pointer-events-none -translate-x-1/4 -translate-y-1/4 z-0" />
      <div className="parallax-glow-2 absolute bottom-4 right-4 w-36 sm:w-72 md:w-96 h-36 sm:h-72 md:h-96 bg-pink-200/50 rounded-full blur-3xl sm:blur-ambient pointer-events-none translate-x-1/4 translate-y-1/4 z-0" />

      {/* 3D Parallax Canvas */}
      <div
        ref={canvasRef}
        style={{ transformStyle: "preserve-3d" }}
        className="relative w-full h-full flex items-center justify-center z-10"
      >
        {/* ── LEFT FLOATING WORKFLOW CARD (Behind desk/character) ── */}
        <motion.div 
          ref={cardsRef}
          initial={{ opacity: 0, x: -30, filter: "blur(10px)" }}
          animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="parallax-ui-left absolute top-1/50 sm:top-3/50 left-0 xs:left-0 sm:left-2 md:left-6 lg:left-12 xl:left-16 z-0 scale-48 xs:scale-56 sm:scale-75 md:scale-90 lg:scale-100 origin-left pointer-events-none sm:pointer-events-auto"
        >
          <motion.div
            animate={{ y: [3, -3, 3] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
            style={{ transform: "translateZ(-10px) rotateY(6deg) rotateZ(-6deg)" }}
            className="bg-white/85 backdrop-blur-xl border border-foreground/10 shadow-card rounded-3xl p-3 sm:p-3.5 flex gap-2.5 sm:gap-3.5 font-satoshi relative"
          >
            {/* Menu Column */}
            <div className="flex flex-col gap-1.5 w-20 sm:w-24 justify-center">
              {/* Ideas */}
              <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs font-semibold text-muted-foreground">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-muted-foreground">
                  <path d="M12 2L2 12l10 10 10-10L12 2z" />
                </svg>
                <span>{HERO_3D_CODER_COPY.ideas}</span>
              </div>
              {/* Design */}
              <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs font-semibold text-muted-foreground">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-muted-foreground">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="4" />
                </svg>
                <span>{HERO_3D_CODER_COPY.design}</span>
              </div>
              {/* Develop (Active State) */}
              <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-primary text-xs font-semibold text-white shadow-sm">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="m16 18 6-6-6-6M8 6l-6 6 6 6" />
                </svg>
                <span>{HERO_3D_CODER_COPY.develop}</span>
              </div>
              {/* Launch */}
              <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs font-semibold text-muted-foreground">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-muted-foreground">
                  <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
                  <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-2.05 9.05A22 22 0 0 1 15 12z"/>
                </svg>
                <span>{HERO_3D_CODER_COPY.launch}</span>
              </div>
            </div>

            {/* Right Code Editor Mockup */}
            <div className="w-28 sm:w-32 bg-zinc-900 rounded-xl p-2.5 flex flex-col gap-1.5 relative overflow-hidden shadow-inner">
              {/* Window control dots */}
              <div className="flex gap-1 items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
                <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
              </div>
              {/* Decorative colored syntax bars */}
              {[
                { num: 12, w: "72%", c: "bg-pink-400" },
                { num: 13, w: "86%", c: "bg-blue-400" },
                { num: 14, w: "52%", c: "bg-purple-400" },
                { num: 15, w: "78%", c: "bg-amber-300" },
                { num: 16, w: "62%", c: "bg-emerald-400" },
                { num: 17, w: "84%", c: "bg-pink-400" },
                { num: 18, w: "45%", c: "bg-blue-400" },
                { num: 19, w: "68%", c: "bg-purple-400" },
              ].map((line) => (
                <div key={line.num} className="flex items-center gap-1.5">
                  <span className="text-3xs text-white/30 font-mono w-2.5 text-right select-none">{line.num}</span>
                  <div className={`h-0.5 rounded-full ${line.c}`} style={{ width: line.w }} />
                </div>
              ))}
            </div>

            {/* Handwritten Annotation: From Idea to Launch */}
            <div
              className="absolute -top-11 sm:-top-12 left-2 sm:left-4 flex items-end gap-1 pointer-events-none"
              style={{ transform: "translateZ(15px)" }}
            >
              <span className="font-handwriting text-lg sm:text-xl font-bold text-zinc-800 -rotate-6 leading-none whitespace-nowrap">
                {HERO_3D_CODER_COPY.fromIdea}<br />{HERO_3D_CODER_COPY.toLaunch}</span>
              <svg
                width="24"
                height="34"
                viewBox="0 0 40 50"
                fill="none"
                className="text-primary -mb-1"
              >
                {/* Curved arrow pointing down to workflow card */}
                <path
                  d="M5 8 C18 10, 28 22, 24 42"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  fill="none"
                />
                <path
                  d="M17 36 L24 43 L29 34"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
            </div>
          </motion.div>
        </motion.div>

        {/* ── CENTRAL 3D CHARACTER ── */}
        <motion.div 
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="parallax-char relative z-10 w-full max-w-52.5 xs:max-w-60 sm:max-w-85 md:max-w-105 lg:max-w-125 h-52.5 xs:h-60 sm:h-85 md:h-105 lg:h-125 flex items-center justify-center pointer-events-none"
        >
          <motion.div
            animate={{ y: [-3, 3, -3] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            style={{ transform: "translateZ(25px)" }}
            className="w-full h-full flex items-center justify-center"
          >
          <div className="relative w-full h-full flex items-center justify-center">
            <CldImage
              src="simpluxe/hero/simplehero"
              alt={HERO_3D_CODER_COPY.simpluxe3dDeveloperCharacter}
              fill
              sizes="(max-width: 640px) 320px, (max-width: 1024px) 420px, 500px"
              format="auto"
              quality="auto:eco"
              className="object-contain drop-shadow-xl"
              priority
              loading="eager"
              fetchPriority="high"
            />
          </div>
          </motion.div>
        </motion.div>

        {/* ── RIGHT FLOATING FEATURE BADGES ── */}
        <div className="parallax-ui-right absolute top-2/25 sm:top-4/25 right-0 sm:right-0 md:right-2 lg:-right-2 xl:-right-6 z-20 scale-48 xs:scale-56 sm:scale-75 md:scale-90 lg:scale-100 origin-right pointer-events-none sm:pointer-events-auto">
          <div
            className="flex flex-col gap-2.5 sm:gap-3 font-satoshi"
            style={{ transform: "translateZ(35px) rotateY(-6deg) rotateZ(4deg)" }}
          >
            {/* Card 1: Modern Design */}
            <motion.div
              initial={{ opacity: 0, x: 30, filter: "blur(10px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            >
              <motion.div
                data-slot="card"
                animate={{ y: [2, -2, 2] }}
                transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
                className="group bg-white/90 backdrop-blur-md border border-foreground/10 shadow-card hover:shadow-elevated rounded-2xl px-3.5 sm:px-4 py-2.5 sm:py-3 flex items-center gap-2.5 sm:gap-3 min-w-40 sm:min-w-44 transition-all duration-300 cursor-default"
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"></circle><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"></circle><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"></circle><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"></circle><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"></path></svg>
                </div>
                <span className="text-sm font-bold text-foreground tracking-tight">{HERO_3D_CODER_COPY.modernDesign}</span>
              </motion.div>
            </motion.div>

            {/* Card 2: Clean Code */}
            <motion.div
              initial={{ opacity: 0, x: 30, filter: "blur(10px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            >
              <motion.div
                data-slot="card"
                animate={{ y: [3, -3, 3] }}
                transition={{ duration: 5.6, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                className="group bg-white/90 backdrop-blur-md border border-foreground/10 shadow-card hover:shadow-elevated rounded-2xl px-3.5 sm:px-4 py-2.5 sm:py-3 flex items-center gap-2.5 sm:gap-3 min-w-40 sm:min-w-44 transition-all duration-300 cursor-default"
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                </div>
                <span className="text-sm font-bold text-foreground tracking-tight">{HERO_3D_CODER_COPY.cleanCode}</span>
              </motion.div>
            </motion.div>

            {/* Card 3: Scalable Solutions */}
            <motion.div
              initial={{ opacity: 0, x: 30, filter: "blur(10px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
            >
              <motion.div
                data-slot="card"
                animate={{ y: [2, -2, 2] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                className="group bg-white/90 backdrop-blur-md border border-foreground/10 shadow-card hover:shadow-elevated rounded-2xl px-3.5 sm:px-4 py-2.5 sm:py-3 flex items-center gap-2.5 sm:gap-3 min-w-40 sm:min-w-44 transition-all duration-300 cursor-default"
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
                </div>
                <span className="text-sm font-bold text-foreground tracking-tight">{HERO_3D_CODER_COPY.scalableSolutions}</span>
              </motion.div>
            </motion.div>

            {/* Handwritten Annotation: Ideas into Impact */}
            <motion.div
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.7 }}
              className="flex flex-col items-center self-end mr-2 text-primary pointer-events-none mt-0.5"
              style={{ transform: "translateZ(15px)" }}
            >
              <svg
                width="30"
                height="34"
                viewBox="0 0 50 60"
                fill="none"
                className="text-primary -mr-3"
              >
                {/* Curved arrow from card down-left to text */}
                <path
                  d="M40 5 C38 28, 25 42, 12 50"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  fill="none"
                />
                <path
                  d="M12 40 L10 52 L22 52"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
              <span className="font-handwriting text-lg sm:text-xl font-bold text-zinc-800 -rotate-3 leading-none text-center whitespace-nowrap">
                {HERO_3D_CODER_COPY.ideas}<br />{HERO_3D_CODER_COPY.intoImpact}</span>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
