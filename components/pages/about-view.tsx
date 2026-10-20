import { AnimatedIcon } from "@/components/ui/animated-icon";
import { ABOUT_VIEW_COPY } from "@/lib/content/about";
import { SITE } from "@/lib/content/site";
import { ABOUT_SECTION_CONTENT } from "@/lib/content/about";
import { SectionHeader } from "@/components/ui/section-header";
import { AboutHero } from "@/components/about/about-hero";
import { AboutMetrics } from "@/components/about/about-metrics";
import { AboutPrinciples } from "@/components/about/about-principles";
import { AboutComparison } from "@/components/about/about-comparison";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import { MapPinIcon } from "@animateicons/react/lucide/map-pin-icon";
import { ShieldCheckIcon } from "@animateicons/react/lucide/shield-check-icon";
import { ZapIcon } from "@animateicons/react/lucide/zap-icon";
import { CodeIcon } from "@animateicons/react/lucide/code-icon";

export function AboutView() {
  return (
    <>
      {/* ── 1. Full-Width Hero Section ── */}
      <AboutHero />

      {/* ── 2. Studio Story & Origin (Executive Bento & 4 Metrics) ── */}
      <Section className="bg-background">
        <Container className="flex flex-col gap-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column: Authoritative Header & Global Base */}
            <div className="lg:col-span-5 flex flex-col items-start text-left gap-8">
              <SectionHeader
                eyebrow={ABOUT_SECTION_CONTENT.eyebrow}
                title={ABOUT_SECTION_CONTENT.title}
                highlightedText={ABOUT_SECTION_CONTENT.highlightedText}
                description={ABOUT_SECTION_CONTENT.description}
                className="items-start text-left"
                maxWidth="max-w-lg"
              />

              {/* Global Studio Base Card */}
              {SITE.location && (
                <Card data-animated-icon-target variant="default" padding="compact" className="flex flex-row items-center gap-4 w-full max-w-md">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 border border-primary/20">
                    <AnimatedIcon icon={MapPinIcon} size={18} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider font-semibold">
                      {ABOUT_SECTION_CONTENT.globalBase}
                    </span>
                    <span className="text-sm font-bold text-foreground">
                      {SITE.location} {ABOUT_VIEW_COPY.symbol}{ABOUT_SECTION_CONTENT.remoteEngineering}
                    </span>
                  </div>
                </Card>
              )}
            </div>

            {/* Right Column: 3 Strategic Pillars Bento */}
            <div className="lg:col-span-7 flex flex-col gap-4 text-left">
              {/* Pillar 1: Hero Card */}
              <Card variant="default" padding="default" className="relative overflow-hidden flex flex-col gap-4">
                <div data-animated-icon-target className="flex items-center gap-4">
                  <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center border border-primary/20 shrink-0">
                    <AnimatedIcon icon={ZapIcon} size={18} />
                  </div>
                  <CardTitle className="text-base sm:text-lg font-bold">
                    {ABOUT_SECTION_CONTENT.pillar1Title}
                  </CardTitle>
                </div>
                <CardDescription className="text-sm leading-relaxed">
                  {ABOUT_SECTION_CONTENT.pillar1Desc}
                </CardDescription>
              </Card>

              {/* Pillar 2 & 3: Dual Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Card variant="default" padding="compact" className="flex flex-col justify-between">
                  <div className="flex flex-col gap-2">
                    <div data-animated-icon-target className="flex items-center gap-2 text-primary">
                      <AnimatedIcon icon={CodeIcon} size={16} />
                      <span className="text-xs font-mono font-bold uppercase tracking-wider">
                        {ABOUT_SECTION_CONTENT.pillar2Title}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {ABOUT_SECTION_CONTENT.pillar2Desc}
                    </p>
                  </div>
                </Card>

                <Card variant="default" padding="compact" className="flex flex-col justify-between">
                  <div className="flex flex-col gap-2">
                    <div data-animated-icon-target className="flex items-center gap-2 text-primary">
                      <AnimatedIcon icon={ShieldCheckIcon} size={16} />
                      <span className="text-xs font-mono font-bold uppercase tracking-wider">
                        {ABOUT_SECTION_CONTENT.pillar3Title}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {ABOUT_SECTION_CONTENT.pillar3Desc}
                    </p>
                  </div>
                </Card>
              </div>
            </div>
          </div>

          {/* 4 Metric Cards */}
          <AboutMetrics />
        </Container>
      </Section>

      {/* ── 3. Guiding Philosophy (Interactive Principle Cards) with Light Blue Theme Background ── */}
      <AboutPrinciples />

      {/* ── 4. The Simpluxe Advantage vs Traditional Agencies ── */}
      <Section className="bg-background">
        <Container>
          <AboutComparison />
        </Container>
      </Section>
    </>
  );
}
