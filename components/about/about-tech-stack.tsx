import { CodeIcon } from "@animateicons/react/lucide/code-icon";
import { LayersIcon } from "@animateicons/react/lucide/layers-icon";
import { CpuIcon } from "@animateicons/react/lucide/cpu-icon";
import { SmartphoneIcon } from "@animateicons/react/lucide/smartphone-icon";
import { SectionHeader } from "@/components/ui/section-header";
import { ABOUT_TECH_STACK_CONTENT, STACK_CATEGORIES } from "@/lib/content/about";


export function AboutTechStack() {
  return (
    <div className="w-full pt-16 sm:pt-20 border-t border-surface-elevated flex flex-col gap-12 sm:gap-16">
      {/* ── Section Header ── */}
      <SectionHeader
        eyebrow={ABOUT_TECH_STACK_CONTENT.eyebrow}
        title={<>{ABOUT_TECH_STACK_CONTENT.titleLine1} <br className="hidden sm:block" /></>}
        highlightedText={ABOUT_TECH_STACK_CONTENT.highlightedText}
        description={ABOUT_TECH_STACK_CONTENT.description}
        centered
        maxWidth="max-w-2xl"
        className="mx-auto"
      />

      {/* ── 4 Category Grid ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {STACK_CATEGORIES.map((cat, i) => {
          const Icon = i === 0 ? CodeIcon : i === 1 ? CpuIcon : i === 2 ? LayersIcon : SmartphoneIcon;
          return (
            <div
              key={i}
              className="p-6 rounded-3xl bg-white/90 border border-surface-elevated shadow-card hover:border-primary/30 hover:shadow-elevated hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-2xl bg-rose-50 border border-rose-100 flex items-center justify-center text-primary">
                    <Icon size={18} />
                  </div>
                  <span className="text-xs font-mono font-bold uppercase px-2 py-0.5 rounded-full bg-background text-primary border border-surface-elevated">
                    {cat.badge}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-foreground tracking-tight">
                  {cat.title}
                </h3>

                <div className="flex flex-col gap-2.5">
                  {cat.technologies.map((t, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-xl bg-background border border-surface-elevated hover:border-primary/30 hover:bg-white transition-colors flex flex-col gap-0.5"
                    >
                      <div className="text-xs font-bold text-foreground">
                        {t.name}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {t.desc}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
