import { Gauge, ShieldCheck, Code2, Sparkles, CheckCircle2 } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { WORK_ENGINEERING_CONTENT, WORK_ENGINEERING_STANDARDS } from "@/lib/content/projects";

const iconMap = {
  Gauge,
  Code2,
  ShieldCheck,
  Sparkles,
};

export function WorkEngineeringStandards() {
  return (
    <div className="w-full pt-16 sm:pt-20 border-t border-surface-elevated">
      {/* ── Section Header ── */}
      <SectionHeader
        eyebrow={WORK_ENGINEERING_CONTENT.eyebrow}
        title={WORK_ENGINEERING_CONTENT.title}
        highlightedText={WORK_ENGINEERING_CONTENT.highlightedText}
        description={WORK_ENGINEERING_CONTENT.description}
        centered
        maxWidth="max-w-2xl"
        className="mb-12 sm:mb-16 mx-auto"
      />

      {/* ── 4 Standards Cards Grid ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {WORK_ENGINEERING_STANDARDS.map((std, i) => {
          const Icon = iconMap[std.iconName as keyof typeof iconMap] || Gauge;
          return (
            <div
              key={i}
              className="p-6 rounded-3xl bg-white/90 border border-surface-elevated shadow-card hover:border-primary/30 hover:shadow-elevated hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header with Icon + Metric badge */}
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-2xl ${std.iconBg} border flex items-center justify-center shrink-0 shadow-2xs`}
                  >
                    <Icon size={22} className={std.iconColor} />
                  </div>
                  <span className="text-xs font-mono font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-background text-foreground border border-surface-elevated">
                    {std.metric}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-foreground tracking-tight mb-2">
                  {std.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6">
                  {std.description}
                </p>
              </div>

              {/* Deliverables checklist */}
              <div className="pt-4 border-t border-[var(--background)] space-y-2">
                {std.deliverables.map((d, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-muted-foreground">
                    <CheckCircle2 size={13} className="text-primary shrink-0" />
                    <span>{d}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
