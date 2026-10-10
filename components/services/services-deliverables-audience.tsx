"use client";

import { type ServiceData, SERVICES_DELIVERABLES_CONTENT } from "@/lib/content/services";
import { SectionHeader } from "@/components/ui/section-header";
import { ElementType as LucideIcon } from "react";
import { CircleCheckIcon } from "@animateicons/react/lucide/circle-check-icon";
import { TargetIcon } from "@animateicons/react/lucide/target-icon";
import { RocketIcon } from "@animateicons/react/lucide/rocket-icon";
import { Building2Icon } from "@animateicons/react/lucide/building-2-icon";
import { ShieldIcon } from "@animateicons/react/lucide/shield-icon";
import { RefreshCwIcon } from "@animateicons/react/lucide/refresh-cw-icon";
import { BriefcaseIcon } from "@animateicons/react/lucide/briefcase-icon";
import { MedalIcon } from "@animateicons/react/lucide/medal-icon";
import { CrownIcon } from "@animateicons/react/lucide/crown-icon";
import { ShoppingBagIcon } from "@animateicons/react/lucide/shopping-bag-icon";
import { TruckIcon } from "@animateicons/react/lucide/truck-icon";
import { ZapIcon } from "@animateicons/react/lucide/zap-icon";
import { RepeatIcon } from "@animateicons/react/lucide/repeat-icon";
import { SmartphoneIcon } from "@animateicons/react/lucide/smartphone-icon";
import { UsersIcon } from "@animateicons/react/lucide/users-icon";
import { PackageIcon } from "@animateicons/react/lucide/package-icon";
import { SparklesIcon } from "@animateicons/react/lucide/sparkles-icon";
import { LayoutDashboardIcon } from "@animateicons/react/lucide/layout-dashboard-icon";
import { PlayIcon } from "@animateicons/react/lucide/play-icon";
import { CodeIcon } from "@animateicons/react/lucide/code-icon";
import { TrendingDownIcon } from "@animateicons/react/lucide/trending-down-icon";
import { HeadphonesIcon } from "@animateicons/react/lucide/headphones-icon";
import { FileTextIcon } from "@animateicons/react/lucide/file-text-icon";
import { LockOpenIcon } from "@animateicons/react/lucide/lock-open-icon";
import { CpuIcon } from "@animateicons/react/lucide/cpu-icon";
import { AnimatedIcon } from "@/components/ui/animated-icon";
import { m as motion, AnimatePresence } from "motion/react";

const IconMap: Record<string, LucideIcon> = {
  rocket: RocketIcon,
  crown: CrownIcon,
  briefcase: BriefcaseIcon,
  award: MedalIcon,
  building: Building2Icon,
  shield: ShieldIcon,
  refresh: RefreshCwIcon,
  "shopping-bag": ShoppingBagIcon,
  truck: TruckIcon,
  zap: ZapIcon,
  repeat: RepeatIcon,
  smartphone: SmartphoneIcon,
  users: UsersIcon,
  package: PackageIcon,
  sparkles: SparklesIcon,
  layout: LayoutDashboardIcon,
  play: PlayIcon,
  code: CodeIcon,
  "trending-down": TrendingDownIcon,
  headphones: HeadphonesIcon,
  "file-text": FileTextIcon,
  unlock: LockOpenIcon,
  cpu: CpuIcon,
};

const ColorMap: Record<string, { primary: string; fill: string; bg: string; border: string }> = {
  websites: { primary: "text-primary", fill: "fill-primary/10", bg: "bg-rose-50", border: "border-rose-100" },
  "web-apps": { primary: "text-chart-2", fill: "fill-chart-2/10", bg: "bg-purple-50", border: "border-purple-100" },
  ecommerce: { primary: "text-chart-3", fill: "fill-chart-3/10", bg: "bg-cyan-50", border: "border-cyan-100" },
  "mobile-apps": { primary: "text-primary", fill: "fill-primary/10", bg: "bg-pink-50", border: "border-pink-100" },
  saas: { primary: "text-chart-2", fill: "fill-chart-2/10", bg: "bg-violet-50", border: "border-violet-100" },
  branding: { primary: "text-chart-4", fill: "fill-chart-4/10", bg: "bg-orange-50", border: "border-orange-100" },
  "ui-ux": { primary: "text-chart-2", fill: "fill-chart-2/10", bg: "bg-purple-50", border: "border-purple-100" },
  automation: { primary: "text-chart-5", fill: "fill-chart-5/10", bg: "bg-emerald-50", border: "border-emerald-100" },
  "custom-software": { primary: "text-chart-1", fill: "fill-chart-1/10", bg: "bg-blue-50", border: "border-blue-100" },
};

interface ServicesDeliverablesAudienceProps {
  service: ServiceData;
}

export function ServicesDeliverablesAudience({ service }: ServicesDeliverablesAudienceProps) {
  // Split deliverables into 2 balanced columns
  const half = Math.ceil(service.deliverables.length / 2);
  const col1 = service.deliverables.slice(0, half);
  const col2 = service.deliverables.slice(half);

  const colors = ColorMap[service.id] || ColorMap.websites;

  return (
    <div className="w-full relative z-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
        {/* ── Left Column: Deliverables (7 cols) ── */}
        <div className="lg:col-span-7 flex flex-col items-start text-left justify-center">
          <div className="mb-6 sm:mb-8"><SectionHeader eyebrow={SERVICES_DELIVERABLES_CONTENT.eyebrow} title={SERVICES_DELIVERABLES_CONTENT.title} description={SERVICES_DELIVERABLES_CONTENT.description} /></div>

          <AnimatePresence mode="wait">
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.28 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 sm:gap-x-8 gap-y-3 sm:gap-y-4 w-full"
            >
              {/* Column 1 */}
              <div className="flex flex-col gap-4 sm:gap-4.5">
                {col1.map((item, idx) => (
                  <div key={idx} className="group flex items-start gap-2 cursor-default">
                    <AnimatedIcon
                      icon={CircleCheckIcon}
                      size={17}
                      className={`${colors.primary} ${colors.fill} shrink-0 mt-0.5 transition-colors duration-300`}
                    />
                    <span className="text-xs sm:text-sm font-semibold text-foreground">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Column 2 */}
              <div className="flex flex-col gap-4 sm:gap-4.5">
                {col2.map((item, idx) => (
                  <div key={idx} className="group flex items-start gap-2 cursor-default">
                    <AnimatedIcon
                      icon={CircleCheckIcon}
                      size={17}
                      className={`${colors.primary} ${colors.fill} shrink-0 mt-0.5 transition-colors duration-300`}
                    />
                    <span className="text-xs sm:text-sm font-semibold text-foreground">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── Right Column: Perfect For Card (5 cols) ── */}
        <div className="lg:col-span-5 flex">
          <div className="w-full p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border border-surface-elevated shadow-card flex flex-col justify-between text-left">
            <div>
              {/* Audience Items List */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, x: 8 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -8 }}
                  transition={{ duration: 0.28 }}
                  className="flex flex-col gap-4.5"
                >
                  {/* Perfect For Header treated as first item */}
                  <div data-slot="card" className="flex items-center gap-4 p-2.5 rounded-xl sm:hover:bg-background transition-colors group cursor-default">
                    <div className={`w-8 h-8 rounded-xl ${colors.bg} ${colors.primary} flex items-center justify-center shrink-0 border ${colors.border}/60 transition-colors duration-300`}>
                      <AnimatedIcon icon={TargetIcon} size={15} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs sm:text-sm font-bold text-foreground leading-tight sm:group-hover:text-black transition-colors">
                        {SERVICES_DELIVERABLES_CONTENT.perfectForTitle}
                      </span>
                      <span className="text-xs sm:text-xs text-muted-foreground mt-0.5 leading-tight">
                        {SERVICES_DELIVERABLES_CONTENT.perfectForDesc}
                      </span>
                    </div>
                  </div>

                  {service.perfectFor.map((item, idx) => {
                    const IconComponent = IconMap[item.icon] || TargetIcon;
                    return (
                      <div
                        key={idx}
                        data-slot="card"
                        className="flex items-center gap-4 p-2.5 rounded-xl sm:hover:bg-background transition-colors group cursor-default"
                      >
                        <div className={`w-8 h-8 rounded-xl ${colors.bg} ${colors.primary} flex items-center justify-center shrink-0 border ${colors.border}/60 transition-colors duration-300`}>
                          <AnimatedIcon icon={IconComponent} size={15} />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-xs sm:text-sm font-bold text-foreground leading-tight sm:group-hover:text-black transition-colors">
                            {item.title}
                          </span>
                          <span className="text-xs sm:text-xs text-muted-foreground mt-0.5 leading-tight">
                            {item.desc}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
