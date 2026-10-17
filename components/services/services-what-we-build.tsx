"use client";

import { AnimatedIcon } from "@/components/ui/animated-icon";
import { SERVICES_WHAT_WE_BUILD_COPY } from "@/lib/content/services";

import { type ServiceData } from "@/lib/content/services";
import { SectionHeader } from "@/components/ui/section-header";
import { LayoutDashboardIcon } from "@animateicons/react/lucide/layout-dashboard-icon";
import { UsersIcon } from "@animateicons/react/lucide/users-icon";
import { SlidersHorizontalIcon } from "@animateicons/react/lucide/sliders-horizontal-icon";
import { DatabaseIcon } from "@animateicons/react/lucide/database-icon";
import { m as motion } from "motion/react";
import { staggerContainer, fadeUp, hoverLift } from "@/lib/motion";
interface ServicesWhatWeBuildProps {
  service: ServiceData;
}

export function ServicesWhatWeBuild({ service }: ServicesWhatWeBuildProps) {
  return (
    <div className="w-full relative z-20 flex flex-col items-center gap-8 sm:gap-10">
      {/* ── Section Header ── */}
      <SectionHeader
        eyebrow={SERVICES_WHAT_WE_BUILD_COPY.capabilitiesCount(service.whatWeBuild.length)}
        title={SERVICES_WHAT_WE_BUILD_COPY.whatWeBuild}
        description={service.whatWeBuildSubtitle}
        centered
      />

      {/* ── 4 Feature Cards ── */}
      <motion.div
        key={service.id}
        variants={staggerContainer(0.08, 0)}
        initial={false}
        animate="visible"
        className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 w-full"
      >
        {service.whatWeBuild.map((item, idx) => (
          <motion.div data-animated-icon-target
            key={idx}
            variants={fadeUp}
            whileHover={hoverLift}
            className="group p-4 sm:p-6 rounded-2xl bg-white border border-surface-elevated hover:border-primary/30 shadow-card hover:shadow-elevated transition-colors duration-300 flex flex-col gap-3 sm:gap-4 items-start text-left"
          >
            {/* Icon Container with soft pastel tint */}
            <div
              className={`w-10 h-10 sm:w-12 sm:h-12 rounded-2xl ${item.bgColor} flex items-center justify-center transition-transform duration-300 group-hover:scale-105`}
            >
              <div className={item.iconColor}>
                {idx === 0 && <AnimatedIcon icon={LayoutDashboardIcon} size={22} />}
                {idx === 1 && <AnimatedIcon icon={UsersIcon} size={22} />}
                {idx === 2 && <AnimatedIcon icon={SlidersHorizontalIcon} size={22} />}
                {idx === 3 && <AnimatedIcon icon={DatabaseIcon} size={22} />}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              {/* Title */}
              <h4 className="text-base sm:text-lg font-bold text-foreground tracking-tight group-hover:text-primary transition-colors">
                {item.title}
              </h4>

              {/* Description */}
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
