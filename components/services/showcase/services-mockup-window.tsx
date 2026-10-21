import { type ServiceViewData } from "@/lib/data/services";

interface ServicesMockupWindowProps {
  service: ServiceViewData;
}

export function ServicesMockupWindow({ service }: ServicesMockupWindowProps) {
  return (
    <div className="lg:col-span-7 relative flex items-center justify-center">
      {/* Subtle Ambient Backlight Glow */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-primary/10 via-accent-soft/30 to-accent-soft/30 rounded-3xl blur-2xl -z-10" />

      <div className="relative flex min-h-80 w-full flex-col gap-5 overflow-hidden rounded-2xl border border-border bg-slate-100 p-5 shadow-elevated sm:min-h-96 sm:rounded-3xl sm:p-7">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2" aria-hidden="true">
            <span className="size-2.5 rounded-full bg-red-400" />
            <span className="size-2.5 rounded-full bg-amber-400" />
            <span className="size-2.5 rounded-full bg-emerald-500" />
          </div>
          <span className="font-mono text-2xs font-bold uppercase tracking-widest text-muted-foreground">
            {service.number} / {service.name}
          </span>
        </div>

        <div className="grid flex-1 gap-4 sm:grid-cols-3">
          <div className="flex flex-col justify-between gap-6 rounded-2xl bg-primary p-5 text-white sm:col-span-2">
            <div className="flex flex-col gap-2">
              <span className="h-2 w-14 rounded-full bg-white/30" />
              <strong className="max-w-md text-2xl font-black leading-tight sm:text-3xl">
                {service.headline.highlight}
              </strong>
            </div>
            <p className="max-w-lg text-sm leading-relaxed text-white/80">{service.shortTagline}</p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-1">
            {service.stats.slice(0, 2).map((stat) => (
              <div key={stat.label} className="flex flex-col justify-end gap-1 rounded-xl border border-border bg-white p-4 shadow-2xs">
                <strong className="text-xl font-black text-heading">{stat.value}</strong>
                <span className="text-xs font-medium text-muted-foreground">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
