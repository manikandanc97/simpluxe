import { ABOUT_METRICS_COPY } from "@/lib/content/about";
import { METRICS } from "@/lib/content/about";
import { UsersIcon } from "@animateicons/react/lucide/users-icon";
import { ZapIcon } from "@animateicons/react/lucide/zap-icon";
import { ShieldCheckIcon } from "@animateicons/react/lucide/shield-check-icon";
import { ClockIcon } from "@animateicons/react/lucide/clock-icon";

const METRIC_ICONS = [UsersIcon, ZapIcon, ShieldCheckIcon, ClockIcon];

export function AboutMetrics() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-4">
      {METRICS.map((metric, i) => {
        const Icon = METRIC_ICONS[i % METRIC_ICONS.length];
        return (
          <div
            key={i}
            className="p-6 rounded-3xl border border-surface-elevated bg-white/80 hover:bg-white shadow-card hover:shadow-elevated hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group gap-6"
          >
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-2xl bg-rose-50 border border-rose-100 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <Icon size={18} />
              </div>
              <span className="text-xs font-mono font-bold tracking-wider text-primary uppercase px-2 py-0.5 rounded-full bg-background border border-surface-elevated">
                {ABOUT_METRICS_COPY.verified}</span>
            </div>

            <div className="flex flex-col gap-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight group-hover:text-primary transition-colors font-satoshi">
                {metric.value}
              </div>
              <h3 className="text-sm font-bold text-foreground tracking-tight">
                {metric.label}
              </h3>
              <p className="text-xs text-muted-foreground leading-snug">
                {metric.sub}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
