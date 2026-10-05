import { ZapIcon } from "@animateicons/react/lucide";

export function TechPerformancePill() {
  return (
    <div className="ts-pill-wrapper hidden lg:flex absolute top-10 right-2 xl:right-8 z-20 items-center">
      <div className="ts-pill relative flex items-center gap-4 bg-white/95 dark:bg-card/90 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-slate-200/70 dark:border-border/60 shadow-card">
        {/* Radiating Accent Sparks on Top-Left */}
        <div className="absolute -top-3.5 -left-3 pointer-events-none text-rose-400">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <line x1="7" y1="17" x2="3" y2="13" stroke="currentColor" strokeLinecap="round" />
            <line x1="13" y1="17" x2="11" y2="9" stroke="currentColor" strokeLinecap="round" />
            <line x1="19" y1="17" x2="21" y2="11" stroke="currentColor" strokeLinecap="round" />
          </svg>
        </div>

        {/* Lightning Icon */}
        <div className="text-amber-500">
          <ZapIcon className="w-5 h-5 fill-amber-500 text-amber-500" />
        </div>

        {/* Two Lines of Text */}
        <div className="flex flex-col text-left leading-tight">
          <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-foreground">
            Fast
          </span>
          <span className="text-xs font-medium text-slate-400 dark:text-muted-foreground">
            Performant
          </span>
        </div>
      </div>
    </div>
  );
}
