"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import {
  type ScreenType,
  ORB_CONFIGURATIONS,
  TINY_ORB_CONFIGURATIONS,
  DOT_GRID_CONFIGURATIONS,
  WAVE_CURVES,
} from "@/lib/content/ambient-background";

;

interface AmbientBackgroundProps {
  className?: string;
  variant?: "home" | "subpage";
  screen?: ScreenType;
}

export function AmbientBackground({
  className,
  variant,
  screen = "home",
}: AmbientBackgroundProps) {
  // Determine effective screen key
  const effectiveScreen: ScreenType = screen !== "home" ? screen : variant === "subpage" ? "work" : "home";

  const currentOrbs = ORB_CONFIGURATIONS[effectiveScreen] || ORB_CONFIGURATIONS.work;
  const currentTinyOrbs = TINY_ORB_CONFIGURATIONS[effectiveScreen] || TINY_ORB_CONFIGURATIONS.work;
  const currentDotGrids = DOT_GRID_CONFIGURATIONS[effectiveScreen] || DOT_GRID_CONFIGURATIONS.work;
  const currentWaves = WAVE_CURVES[effectiveScreen] || WAVE_CURVES.work;

  const getOrbGradient = (color: string) => {
    switch (color) {
      case "purple":
        return "radial-gradient(circle at 30% 30%, #ffffff 0%, #ecdcf9 25%, #bf83fc 70%, #9333ea 100%)";
      case "pink":
        return "radial-gradient(circle at 30% 30%, #ffffff 0%, #fed7eb 25%, #f472b6 70%, #db2777 100%)";
      case "blue":
        return "radial-gradient(circle at 30% 30%, #ffffff 0%, #e0edff 25%, #93c5fd 70%, #3b82f6 100%)";
      case "white":
      default:
        return "radial-gradient(circle at 30% 30%, #ffffff 0%, #f3f4f6 30%, #d1d5db 80%, #9ca3af 100%)";
    }
  };

  return (
    <div
      className={cn(
        "absolute inset-0 overflow-hidden pointer-events-none z-0",
        className
      )}
    >
      {/* ── 1. Atmospheric Glowing Ambient Gradient Blurs ── */}
      <div className="absolute top-0 left-[-4%] w-[75%] h-[550px] sm:h-[800px] lg:h-[1100px] max-w-[1200px] bg-background/70 rounded-full blur-[70px] sm:blur-[110px] lg:blur-[150px] opacity-75 sm:opacity-90 transform-gpu pointer-events-none" />
      <div className="absolute top-[4%] right-[-4%] w-[65%] h-[450px] sm:h-[700px] lg:h-[950px] max-w-[950px] bg-background/75 rounded-full blur-[70px] sm:blur-[110px] lg:blur-[150px] opacity-70 sm:opacity-85 transform-gpu pointer-events-none" />
      
      <div className="absolute top-[24%] left-[4%] w-[70%] h-[500px] sm:h-[800px] lg:h-[1200px] max-w-[1000px] bg-[var(--accent-soft)]/55 rounded-full blur-[70px] sm:blur-[110px] lg:blur-[150px] opacity-65 sm:opacity-75 transform-gpu pointer-events-none" />
      <div className="absolute top-[36%] right-[-2%] w-[65%] h-[500px] sm:h-[800px] lg:h-[1100px] max-w-[950px] bg-[var(--accent-soft)]/55 rounded-full blur-[70px] sm:blur-[110px] lg:blur-[150px] opacity-70 sm:opacity-85 transform-gpu pointer-events-none" />

      <div className="absolute top-[54%] left-[-2%] w-[80%] h-[500px] sm:h-[850px] lg:h-[1200px] max-w-[1100px] bg-[var(--accent-soft)]/55 rounded-full blur-[70px] sm:blur-[110px] lg:blur-[150px] opacity-70 sm:opacity-85 transform-gpu pointer-events-none" />
      <div className="absolute top-[66%] right-[4%] w-[60%] h-[500px] sm:h-[800px] lg:h-[1100px] max-w-[900px] bg-[var(--accent-soft)]/45 rounded-full blur-[70px] sm:blur-[110px] lg:blur-[150px] opacity-60 sm:opacity-75 transform-gpu pointer-events-none" />

      <div className="absolute top-[80%] left-[4%] w-[70%] h-[500px] sm:h-[850px] lg:h-[1200px] max-w-[1000px] bg-[var(--accent-soft)]/50 rounded-full blur-[70px] sm:blur-[110px] lg:blur-[150px] opacity-60 sm:opacity-75 transform-gpu pointer-events-none" />
      <div className="absolute top-[90%] right-[-2%] w-[80%] h-[500px] sm:h-[850px] lg:h-[1100px] max-w-[1100px] bg-background/65 rounded-full blur-[70px] sm:blur-[110px] lg:blur-[150px] opacity-70 sm:opacity-85 transform-gpu pointer-events-none" />

      {/* ── 2. Delicate Sweeping SVG Curves (Screen-Randomized) ── */}
      <svg className="absolute top-0 left-0 w-full h-full opacity-25 sm:opacity-35 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
        {currentWaves.map((wave, i) => (
          <path
            key={`wave-${i}`}
            d={wave.d}
            fill="none"
            stroke={wave.stroke}
            strokeWidth={wave.width}
            strokeDasharray={wave.dashed ? "1 1" : undefined}
          />
        ))}
      </svg>

      {/* ── 3. Dot Grid Matrices (Screen-Randomized) ── */}
      {currentDotGrids.map((pos, i) => (
        <div 
          key={`dot-${i}`}
          className="absolute w-24 h-24 sm:w-36 sm:h-36 opacity-20 sm:opacity-25 mix-blend-multiply pointer-events-none"
          style={{
            top: pos.top,
            ...(pos.left ? { left: pos.left } : { right: pos.right }),
            backgroundImage: "radial-gradient(circle at 2px 2px, #8b5cf6 1.5px, transparent 0)",
            backgroundSize: "12px 12px",
            WebkitMaskImage: 'radial-gradient(circle at center, black 15%, transparent 70%)',
            maskImage: 'radial-gradient(circle at center, black 15%, transparent 70%)'
          }}
        />
      ))}

      {/* ── 4. Prominent 3D Spheres (Pearls) with Organic Floating Animation (Screen-Randomized) ── */}
      {currentOrbs.map((orb, i) => (
        <motion.div
          key={`orb-${effectiveScreen}-${i}`}
          animate={{
            y: [0, -10, 0],
            x: [0, (i % 2 === 0 ? 5 : -5), 0],
          }}
          transition={{
            duration: 5.5 + (i % 3) * 1.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: (i % 4) * 0.4,
          }}
          className={cn(
            "absolute rounded-full pointer-events-none opacity-85 sm:opacity-95 transition-opacity",
            orb.size
          )}
          style={{
            top: orb.top,
            ...(orb.left ? { left: orb.left } : { right: orb.right }),
            background: getOrbGradient(orb.color),
            boxShadow:
              "0 14px 34px rgba(0,0,0,0.08), inset -6px -6px 14px rgba(0,0,0,0.1), inset 6px 6px 14px rgba(255,255,255,0.85)",
          }}
        />
      ))}

      {/* ── 5. Tiny Scattered Pearls (Screen-Randomized) ── */}
      {currentTinyOrbs.map((orb, i) => (
        <div
          key={`tiny-${effectiveScreen}-${i}`}
          className={cn(
            "absolute rounded-full pointer-events-none",
            orb.size
          )}
          style={{
            top: orb.top,
            ...(orb.left ? { left: orb.left } : { right: orb.right }),
            backgroundColor: orb.color,
            boxShadow: `0 2px 6px ${orb.color}70`,
            opacity: 0.9,
          }}
        />
      ))}
      
      {/* ── 6. Subtle Global Noise Texture for Softness ── */}
      <div 
        className="absolute inset-0 opacity-[0.035] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* ── 7. Subtle Global Dot Pattern ── */}
      <div 
        className="absolute inset-0 opacity-[0.25] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.06) 1px, transparent 0)",
          backgroundSize: "32px 32px"
        }}
      />
    </div>
  );
}
