import { CircleXIcon } from "@animateicons/react/lucide/circle-x-icon";
import { CircleCheckIcon } from "@animateicons/react/lucide/circle-check-icon";
import { COMPARISONS, ABOUT_COMPARISON_CONTENT } from "@/lib/content/about";
import { SectionHeader } from "@/components/ui/section-header";

export function AboutComparison() {
  return (
    <div className="w-full pt-16 sm:pt-20 border-t border-surface-elevated">
      {/* ── Section Header ── */}
      <SectionHeader
        eyebrow={ABOUT_COMPARISON_CONTENT.eyebrow}
        title={ABOUT_COMPARISON_CONTENT.title}
        highlightedText={ABOUT_COMPARISON_CONTENT.highlightedText}
        description={ABOUT_COMPARISON_CONTENT.description}
        centered
        maxWidth="max-w-2xl"
        className="mb-12 sm:mb-16 mx-auto"
      />

      {/* ── Comparison Table Card ── */}
      <div className="border border-surface-elevated rounded-3xl overflow-hidden bg-white shadow-card text-left">
        {/* Table Header Bar */}
        <div className="grid grid-cols-1 md:grid-cols-12 border-b border-surface-elevated bg-background p-4 sm:p-6 font-mono text-xs font-bold text-foreground">
          <div className="md:col-span-3 text-muted-foreground uppercase tracking-wider">
            {ABOUT_COMPARISON_CONTENT.evaluationMetric}
          </div>
          <div className="md:col-span-4 text-muted-foreground uppercase tracking-wider hidden md:block">
            {ABOUT_COMPARISON_CONTENT.traditionalAgencies}
          </div>
          <div className="md:col-span-5 text-primary uppercase tracking-wider hidden md:flex items-center gap-2">
            <span>{ABOUT_COMPARISON_CONTENT.simpluxeModel}</span>
            <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-background text-primary border border-surface-elevated">
              {ABOUT_COMPARISON_CONTENT.recommendedBadge}
            </span>
          </div>
        </div>

        {/* Table Rows */}
        <div className="divide-y divide-surface-elevated">
          {COMPARISONS.map((row, i) => (
            <div
              key={i}
              className="grid grid-cols-1 md:grid-cols-12 p-4 sm:p-6 gap-4 sm:gap-4 items-center hover:bg-background transition-colors"
            >
              {/* Metric Title */}
              <div className="md:col-span-3 font-bold text-sm text-foreground font-satoshi">
                {row.aspect}
              </div>

              {/* Traditional Agencies */}
              <div className="md:col-span-4 flex items-start gap-2 text-xs sm:text-sm text-muted-foreground">
                <CircleXIcon size={16} className="text-red-500 shrink-0 mt-0.5" />
                <span>{row.traditional}</span>
              </div>

              {/* Simpluxe Model */}
              <div className="md:col-span-5 flex items-start gap-2 text-xs sm:text-sm text-foreground font-semibold bg-background/70 p-4.5 rounded-2xl border border-surface-elevated/80 shadow-2xs">
                <CircleCheckIcon size={16} className="text-primary shrink-0 mt-0.5" />
                <span>{row.simpluxe}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
