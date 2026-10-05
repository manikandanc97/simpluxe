"use client";

import { cn } from "@/lib/utils";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { CldImage } from "next-cloudinary";
import { AnimatedIcon } from "@/components/ui/animated-icon";
import React, { useRef } from "react";

import { prefersReducedMotion } from "@/lib/motion";

interface Hero3DCoderProps {
  className?: string;
}

export function Hero3DCoder({ className }: Hero3DCoderProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse tilt parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-150, 150], [4, -4]), {
    stiffness: 150,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(mouseX, [-150, 150], [-4, 4]), {
    stiffness: 150,
    damping: 30,
  });

  // Track container dimensions to force a DOM update on resize. 
  // This prevents the browser GPU compositor from caching stale 3D bounds
  // when switching viewports, and resets the parallax bounds logic.
  const [bounds, setBounds] = React.useState({ width: 0, height: 0 });

  React.useEffect(() => {
    if (!containerRef.current) return;
    
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setBounds({
          width: entry.contentRect.width,
          height: entry.contentRect.height,
        });
        // Reset parallax to prevent stuck coordinates across viewports
        mouseX.set(0);
        mouseY.set(0);
      }
    });
    
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [mouseX, mouseY]);

  const rectRef = useRef<{left: number, top: number, width: number, height: number} | null>(null);

  const handleMouseEnter = () => {
    if (containerRef.current) {
      rectRef.current = containerRef.current.getBoundingClientRect();
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!rectRef.current || prefersReducedMotion()) return;
    const { left, top, width, height } = rectRef.current;
    const x = e.clientX - (left + width / 2);
    const y = e.clientY - (top + height / 2);
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    rectRef.current = null;
  };

  return (
    <div
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ "--sync-width": bounds.width } as React.CSSProperties}
      className={cn(
        "relative w-full h-[320px] xs:h-[360px] sm:h-[440px] md:h-[500px] lg:h-[600px] flex items-center justify-center select-none perspective-[1200px] max-w-4xl mx-auto overflow-visible",
        className
      )}
    >
      {/* ── AMBIENT PURPLE & PINK GLOWS ── */}
      <div className="parallax-glow-1 absolute top-4 left-4 w-40 sm:w-80 md:w-96 h-40 sm:h-80 md:h-96 bg-[#E8D9FE]/60 rounded-full blur-[50px] sm:blur-[70px] pointer-events-none -translate-x-1/4 -translate-y-1/4 z-0" />
      <div className="parallax-glow-2 absolute bottom-4 right-4 w-36 sm:w-72 md:w-96 h-36 sm:h-72 md:h-96 bg-[#F5D0E8]/50 rounded-full blur-[50px] sm:blur-[70px] pointer-events-none translate-x-1/4 translate-y-1/4 z-0" />

      {/* 3D Parallax Canvas */}
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative w-full h-full flex items-center justify-center z-10"
      >
        {/* ── LEFT FLOATING WORKFLOW CARD (Behind desk/character) ── */}
        <motion.div 
          initial={{ opacity: 0, x: -30, filter: "blur(10px)" }}
          animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="parallax-ui-left absolute top-[2%] sm:top-[6%] left-0 xs:left-0 sm:left-2 md:left-6 lg:left-12 xl:left-16 z-0 scale-[0.48] xs:scale-[0.56] sm:scale-75 md:scale-90 lg:scale-100 origin-left pointer-events-none sm:pointer-events-auto"
        >
          <motion.div
            animate={{ y: [3, -3, 3] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
            style={{ transform: "translateZ(-10px) rotateY(6deg) rotateZ(-6deg)" }}
            className="bg-white/85 backdrop-blur-xl border border-[rgba(30,24,30,0.08)] shadow-card rounded-3xl p-3 sm:p-3.5 flex gap-2.5 sm:gap-3.5 font-satoshi relative"
          >
            {/* Menu Column */}
            <div className="flex flex-col gap-1.5 w-20 sm:w-24 justify-center">
              {/* Ideas */}
              <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs font-semibold text-muted-foreground">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-muted-foreground">
                  <path d="M12 2L2 12l10 10 10-10L12 2z" />
                </svg>
                <span>Ideas</span>
              </div>
              {/* Design */}
              <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs font-semibold text-muted-foreground">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-muted-foreground">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="4" />
                </svg>
                <span>Design</span>
              </div>
              {/* Develop (Active State) */}
              <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-primary text-xs font-semibold text-white shadow-sm">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="m16 18 6-6-6-6M8 6l-6 6 6 6" />
                </svg>
                <span>Develop</span>
              </div>
              {/* Launch */}
              <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs font-semibold text-muted-foreground">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-muted-foreground">
                  <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
                  <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-2.05 9.05A22 22 0 0 1 15 12z"/>
                </svg>
                <span>Launch</span>
              </div>
            </div>

            {/* Right Code Editor Mockup */}
            <div className="w-28 sm:w-32 bg-[#1B1B1D] rounded-xl p-2.5 flex flex-col gap-1.5 relative overflow-hidden shadow-inner">
              {/* Window control dots */}
              <div className="flex gap-1 items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-[#FF5F56]" />
                <div className="w-1.5 h-1.5 rounded-full bg-[#FFBD2E]" />
                <div className="w-1.5 h-1.5 rounded-full bg-[#27C93F]" />
              </div>
              {/* Decorative colored syntax bars */}
              {[
                { num: 12, w: "72%", c: "bg-[#F05BAD]" },
                { num: 13, w: "86%", c: "bg-[#4BA8FF]" },
                { num: 14, w: "52%", c: "bg-[#B86BFF]" },
                { num: 15, w: "78%", c: "bg-[#FFD23F]" },
                { num: 16, w: "62%", c: "bg-[#13D59B]" },
                { num: 17, w: "84%", c: "bg-[#F05BAD]" },
                { num: 18, w: "45%", c: "bg-[#4BA8FF]" },
                { num: 19, w: "68%", c: "bg-[#B86BFF]" },
              ].map((line) => (
                <div key={line.num} className="flex items-center gap-1.5">
                  <span className="text-[7.5px] text-white/30 font-mono w-2.5 text-right select-none">{line.num}</span>
                  <div className={`h-0.5 rounded-full ${line.c}`} style={{ width: line.w }} />
                </div>
              ))}
            </div>

            {/* Handwritten Annotation: From Idea to Launch */}
            <div
              className="absolute -top-11 sm:-top-12 left-2 sm:left-4 flex items-end gap-1 pointer-events-none"
              style={{ transform: "translateZ(15px)" }}
            >
              <span className="font-handwriting text-lg sm:text-xl font-bold text-[#4A3E4E] -rotate-6 leading-none whitespace-nowrap">
                From Idea<br />to Launch
              </span>
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
          className="parallax-char relative z-10 w-full max-w-[210px] xs:max-w-[240px] sm:max-w-[340px] md:max-w-[420px] lg:max-w-[500px] h-[210px] xs:h-[240px] sm:h-[340px] md:h-[420px] lg:h-[500px] flex items-center justify-center pointer-events-none"
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
              alt="Simpluxe 3D Developer Character"
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
        <div className="parallax-ui-right absolute top-[8%] sm:top-[16%] right-0 sm:right-0 md:right-2 lg:-right-2 xl:-right-6 z-20 scale-[0.48] xs:scale-[0.56] sm:scale-75 md:scale-90 lg:scale-100 origin-right pointer-events-none sm:pointer-events-auto">
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
                className="group bg-white/90 backdrop-blur-md border border-[rgba(30,24,30,0.08)] shadow-card hover:shadow-elevated rounded-2xl px-3.5 sm:px-4 py-2.5 sm:py-3 flex items-center gap-2.5 sm:gap-3 min-w-40 sm:min-w-44 transition-all duration-300 cursor-default"
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <AnimatedIcon name="palette" size={15} className="text-primary" />
                </div>
                <span className="text-sm font-bold text-foreground tracking-tight">Modern Design</span>
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
                className="group bg-white/90 backdrop-blur-md border border-[rgba(30,24,30,0.08)] shadow-card hover:shadow-elevated rounded-2xl px-3.5 sm:px-4 py-2.5 sm:py-3 flex items-center gap-2.5 sm:gap-3 min-w-40 sm:min-w-44 transition-all duration-300 cursor-default"
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <AnimatedIcon name="code" size={15} className="text-primary" />
                </div>
                <span className="text-sm font-bold text-foreground tracking-tight">Clean Code</span>
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
                className="group bg-white/90 backdrop-blur-md border border-[rgba(30,24,30,0.08)] shadow-card hover:shadow-elevated rounded-2xl px-3.5 sm:px-4 py-2.5 sm:py-3 flex items-center gap-2.5 sm:gap-3 min-w-40 sm:min-w-44 transition-all duration-300 cursor-default"
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <AnimatedIcon name="layers" size={15} className="text-primary" />
                </div>
                <span className="text-sm font-bold text-foreground tracking-tight">Scalable Solutions</span>
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
              <span className="font-handwriting text-lg sm:text-xl font-bold text-[#4A3E4E] -rotate-3 leading-none text-center whitespace-nowrap">
                Ideas<br />into Impact
              </span>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
