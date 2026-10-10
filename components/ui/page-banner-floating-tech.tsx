"use client";

import { TECH_POSITIONS } from "@/lib/visuals/page-banner";
import { TECH_STACK } from "@/lib/content/tech-stack";
import { cn } from "@/lib/utils";
import { m as motion } from "motion/react";
import { CldImage } from "@/components/ui/cld-image";

interface PageBannerFloatingTechProps {
  techStack: string[];
}

export function PageBannerFloatingTech({ techStack }: PageBannerFloatingTechProps) {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {techStack.slice(0, 6).map((slug, idx) => {
        const config = TECH_POSITIONS[idx] || TECH_POSITIONS[0];
        const techItem = TECH_STACK.find((t) => t.slug === slug);
        const meta = {
          label: techItem?.name || slug,
          invertInDark: techItem?.invertInDark,
        };

        return (
          <motion.div
            key={`${slug}-${idx}`}
            initial={{ opacity: 0, scale: 0.75, y: 10 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [-config.yOffset, config.yOffset, -config.yOffset],
              rotate: [
                -config.rotateOffset,
                config.rotateOffset,
                -config.rotateOffset,
              ],
            }}
            transition={{
              y: {
                duration: config.duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: config.delay,
              },
              rotate: {
                duration: config.duration * 1.3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: config.delay,
              },
              opacity: { duration: 0.7, delay: 0.2 + config.delay * 0.2 },
              scale: { duration: 0.7, delay: 0.2 + config.delay * 0.2 },
            }}
            whileHover={{ scale: 1.18, rotate: 0, transition: { duration: 0.2 } }}
            title={meta.label}
            className={cn(
              "pointer-events-auto absolute z-10 flex items-center justify-center",
              "w-11 h-11 sm:w-13 sm:h-13 p-2.5 sm:p-4",
              "rounded-2xl",
              "bg-white/90 backdrop-blur-sm",
              "border border-white/60 shadow-md",
              "hover:bg-white hover:shadow-xl hover:scale-110",
              "transition-all duration-300 cursor-default group",
              config.hideOnMobile ? "hidden sm:flex" : "flex",
              config.className
            )}
          >
            <div className="relative w-full h-full flex items-center justify-center">
              <CldImage
                src={`simpluxe/tech/${slug}`}
                alt={meta.label}
                width={26}
                height={26}
                className={cn(
                  "w-full h-full object-contain transition-opacity duration-300 opacity-90 group-hover:opacity-100",
                  meta.invertInDark && "dark:invert"
                )}
              />
            </div>
            {/* Tooltip */}
            <span className="pointer-events-none absolute -bottom-7 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-md bg-black/75 text-white text-xs font-semibold whitespace-nowrap shadow-lg opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 z-30">
              {meta.label}
            </span>
          </motion.div>
        );
      })}
    </div>
  );
}
