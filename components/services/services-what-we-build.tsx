"use client";

import { type ServiceData } from "@/lib/content/services";
import { SectionHeader } from "@/components/ui/section-header";
import { Layout, Users, Sliders, Database } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { staggerContainer, fadeUp, hoverLift } from "@/lib/motion";
interface ServicesWhatWeBuildProps {
  service: ServiceData;
}

export function ServicesWhatWeBuild({ service }: ServicesWhatWeBuildProps) {
  return (
    <div className="w-full relative z-20">
      {/* ── Section Header ── */}
      <div className="mb-6 sm:mb-8">
        <SectionHeader
          eyebrow={`${service.whatWeBuild.length} Capabilities`}
          title="What we build"
          description={service.whatWeBuildSubtitle}
        />
      </div>

      {/* ── 4 Feature Cards ── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={service.id}
          variants={staggerContainer(0.08, 0)}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6"
        >
          {service.whatWeBuild.map((item, idx) => (
            <motion.div
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
                  {idx === 0 && <Layout size={22} />}
                  {idx === 1 && <Users size={22} />}
                  {idx === 2 && <Sliders size={22} />}
                  {idx === 3 && <Database size={22} />}
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
      </AnimatePresence>
    </div>
  );
}
