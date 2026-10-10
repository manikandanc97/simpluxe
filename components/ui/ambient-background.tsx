"use client";

import { cn } from "@/lib/utils";
import { type ScreenType, ORB_CONFIGURATIONS, TINY_ORB_CONFIGURATIONS, DOT_GRID_CONFIGURATIONS, WAVE_CURVES } from "@/lib/visuals/ambient-background";

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
      <div className="absolute top-0 -left-1/25 w-3/4 h-137.5 sm:h-200 lg:h-275 max-w-300 bg-background/70 rounded-full blur-ambient sm:blur-ambient-lg lg:blur-ambient-xl opacity-75 sm:opacity-90 transform-gpu pointer-events-none" />
      <div className="absolute top-1/25 -right-1/25 w-13/20 h-112.5 sm:h-175 lg:h-237.5 max-w-237.5 bg-background/75 rounded-full blur-ambient sm:blur-ambient-lg lg:blur-ambient-xl opacity-70 sm:opacity-85 transform-gpu pointer-events-none" />
      
      <div className="absolute top-6/25 left-1/25 w-7/10 h-125 sm:h-200 lg:h-300 max-w-250 bg-accent-soft/55 rounded-full blur-ambient sm:blur-ambient-lg lg:blur-ambient-xl opacity-65 sm:opacity-75 transform-gpu pointer-events-none" />
      <div className="absolute top-9/25 -right-1/50 w-13/20 h-125 sm:h-200 lg:h-275 max-w-237.5 bg-accent-soft/55 rounded-full blur-ambient sm:blur-ambient-lg lg:blur-ambient-xl opacity-70 sm:opacity-85 transform-gpu pointer-events-none" />

      <div className="absolute top-27/50 -left-1/50 w-4/5 h-125 sm:h-212.5 lg:h-300 max-w-275 bg-accent-soft/55 rounded-full blur-ambient sm:blur-ambient-lg lg:blur-ambient-xl opacity-70 sm:opacity-85 transform-gpu pointer-events-none" />
      <div className="absolute top-33/50 right-1/25 w-3/5 h-125 sm:h-200 lg:h-275 max-w-225 bg-accent-soft/45 rounded-full blur-ambient sm:blur-ambient-lg lg:blur-ambient-xl opacity-60 sm:opacity-75 transform-gpu pointer-events-none" />

      <div className="absolute top-4/5 left-1/25 w-7/10 h-125 sm:h-212.5 lg:h-300 max-w-250 bg-accent-soft/50 rounded-full blur-ambient sm:blur-ambient-lg lg:blur-ambient-xl opacity-60 sm:opacity-75 transform-gpu pointer-events-none" />
      <div className="absolute top-9/10 -right-1/50 w-4/5 h-125 sm:h-212.5 lg:h-275 max-w-275 bg-background/65 rounded-full blur-ambient sm:blur-ambient-lg lg:blur-ambient-xl opacity-70 sm:opacity-85 transform-gpu pointer-events-none" />

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
      {currentOrbs.map((orb, i) => {
        const floatClass = i % 3 === 0 ? "animate-float-slow" : i % 2 === 0 ? "animate-float-medium" : "animate-float-fast";
        return (
          <div
            key={`orb-${effectiveScreen}-${i}`}
            className={cn(
              "absolute rounded-full pointer-events-none opacity-85 sm:opacity-95 transition-opacity",
              orb.size,
              floatClass
            )}
            style={{
              top: orb.top,
              ...(orb.left ? { left: orb.left } : { right: orb.right }),
              background: getOrbGradient(orb.color),
              boxShadow:
                "0 14px 34px rgba(0,0,0,0.08), inset -6px -6px 14px rgba(0,0,0,0.1), inset 6px 6px 14px rgba(255,255,255,0.85)",
              animationDelay: `${(i % 4) * 0.4}s`
            }}
          />
        );
      })}

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
      
      {/* ── 6. Subtle Static Noise Texture for Softness ── */}
      <div 
        className="absolute inset-0 opacity-3.5 mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: "url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAAUVBMVEWFhYWDg4N3d3dtbW17e3t1dXWBgYGHh4t5eXlzc3OLi4ubm5uVlZWPj4+NjY19fX2JiYl/f39ra2uRkZGZmZlpaWmXl5dvb29xcXGTk5NnZ2c8TV1mAAAAG3RSTlNAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAvEOwtAAAFVklEQVR4XpWWB67c2BUFb3g557T/hRo9/WUMZHlgr4Bg8Z4qQgQJlHI4A8SzFVrapvmTF9O7dme8+EB8SCVAM6q5BWMJKS2QFv4c8CvkPxQ5YfQBxIEshhC0Y+Sn/1A2CwGHQ5LRe8j0zf6h5ceCJ1CDNN7k5qmCeXi8j6RrGwENMmhIlmxYPQCrTvBfAvAQBqYHvJDEzFYWEaEEIsHqKVnRDmMg7oCfk+L0+IQHK3x2f1L1r8jQe64LFQh+Jfk6mOXVk6dclE4tFuL4YTIV6G1RKkYpOiLjAR2l0pPSWKU2Dh8bIAu9WA8YCdQGlRU4RBaT54GNEA6xqfUH6EhB7cMKORVBgpBFABkVOA6Ib1jHDYEOkNk0AoOAN7yBYElAWkNmDCN0I2D+B3jzXIBFQCAnWW7EArG7HAYAQpaMB9IkgvmopQKFQ4D+AvASrF+mQKaXo0Bg/nJRFcGpPBMGKQtYLMPUQgGFSVENHjVJjUkO1WBigV53HHkJosmLggGkyBX16nJq58jT3PMDFJiR2XNVzTp+k9kDjBgC65JgDWWVY4eiKD5v4y+EQ8tXR1oMqiLiQoEfbgKhQFHD7WMFuarQ0QpY6f6rZXSJL6eDXdaqXAAAA\")",
          backgroundRepeat: "repeat",
          backgroundSize: "50px 50px",
        }}
      />

      {/* ── 7. Subtle Global Dot Pattern ── */}
      <div 
        className="absolute inset-0 opacity-25 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.06) 1px, transparent 0)",
          backgroundSize: "32px 32px"
        }}
      />
    </div>
  );
}
