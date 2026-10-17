import { GaugeIcon } from "@animateicons/react/lucide/gauge-icon";
import { ShieldCheckIcon } from "@animateicons/react/lucide/shield-check-icon";
import { CodeIcon } from "@animateicons/react/lucide/code-icon";
import { SparklesIcon } from "@animateicons/react/lucide/sparkles-icon";
import { CircleCheckIcon } from "@animateicons/react/lucide/circle-check-icon";
import { AnimatedIcon } from "@/components/ui/animated-icon";
import { WORK_ENGINEERING_CONTENT, WORK_ENGINEERING_STANDARDS } from "@/lib/content/projects";

const iconMap = {
  GaugeIcon,
  CodeIcon,
  ShieldCheckIcon,
  SparklesIcon,
};

export function WorkEngineeringStandards() {
  return (
    <div className="w-full rounded-3xl overflow-hidden bg-luxury-section relative">
      {/* Decorative top border accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-chart-2/50 to-transparent" />

      <div className="px-6 sm:px-10 lg:px-14 py-16 sm:py-20">
        {/* ── Section Header ── */}
        <div className="flex flex-col items-center text-center gap-4 mb-12 sm:mb-16">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-chart-2/25 bg-chart-2/8 text-chart-2 text-xs font-semibold tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-chart-2" />
            {WORK_ENGINEERING_CONTENT.eyebrow}
          </div>

          <h2 className="type-h2 text-white max-w-2xl">
            {WORK_ENGINEERING_CONTENT.title}{" "}
            <span className="text-gradient-primary-light">{WORK_ENGINEERING_CONTENT.highlightedText}</span>
          </h2>

          <p className="type-lead text-white/55 max-w-xl">
            {WORK_ENGINEERING_CONTENT.description}
          </p>
        </div>

        {/* ── 4 Standards Cards Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {WORK_ENGINEERING_STANDARDS.map((std, i) => {
            const Icon = iconMap[std.iconName as keyof typeof iconMap] || GaugeIcon;
            return (
              <div data-animated-icon-target
                key={i}
                data-slot="card"
                className="group bg-luxury-card border border-white/8 rounded-2xl p-6 flex flex-col justify-between hover:border-chart-2/25 hover:-translate-y-1 transition-all duration-300 cursor-default relative overflow-hidden"
              >
                {/* Top corner glow */}
                <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-chart-2/8 blur-2xl -z-10 group-hover:bg-chart-2/14 transition-all duration-500" />

                <div>
                  {/* Header with Icon + Metric badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-11 h-11 rounded-xl ${std.iconBg} border border-white/10 flex items-center justify-center shrink-0`}
                    >
                      <AnimatedIcon icon={Icon} size={20} className={std.iconColor} />
                    </div>
                    <span className="text-xs font-mono font-bold tracking-wider px-2.5 py-1 rounded-full bg-white/6 text-white/70 border border-white/10">
                      {std.metric}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white tracking-tight mb-2">
                    {std.title}
                  </h3>
                  <p className="text-xs text-white/50 leading-relaxed mb-6">
                    {std.description}
                  </p>
                </div>

                {/* Deliverables checklist */}
                <div className="pt-4 border-t border-white/8 flex flex-col gap-2">
                  {std.deliverables.map((d, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-white/45">
                      <AnimatedIcon icon={CircleCheckIcon} size={12} className="text-chart-2/80 shrink-0" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Decorative bottom border accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
    </div>
  );
}
