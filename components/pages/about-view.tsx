import { SITE } from "@/lib/content/site";
import { ABOUT_SECTION_CONTENT } from "@/lib/content/about";
import { AmbientBackground } from "@/components/ui/ambient-background";
import { SectionHeader } from "@/components/ui/section-header";
import { AboutHero } from "@/components/about/about-hero";
import { AboutMetrics } from "@/components/about/about-metrics";
import { AboutPrinciples } from "@/components/about/about-principles";
import { AboutComparison } from "@/components/about/about-comparison";
import { AboutTechStack } from "@/components/about/about-tech-stack";
import { Container } from "@/components/ui/container";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import { MapPinIcon, ShieldCheckIcon, ZapIcon, CodeIcon } from "@animateicons/react/lucide";

export function AboutView() {
  return (
    <div className="relative min-h-screen w-full bg-background text-foreground overflow-hidden">
      {/* ── Background Atmospheric Elements ── */}
      <AmbientBackground screen="about" />
      <div className="absolute inset-0 bg-[radial-gradient(#d3ccd8_1px,transparent_1px)] opacity-35 pointer-events-none" />

      {/* ── 1. Hero Section (Breadcrumb, Title, Value Props & 3D Studio Showcase) ── */}
      <AboutHero />

      {/* ── Main Structured Showcase Area ── */}
      <Container className="relative z-20 pb-16 md:pb-20 lg:pb-24 flex flex-col gap-16 sm:gap-20">
        
        {/* ── 2. Studio Story & Origin (Executive Bento & 4 Metrics) ── */}
        <div className="w-full pt-4 flex flex-col gap-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column: Authoritative Header & Global Base */}
            <div className="lg:col-span-5 flex flex-col items-start text-left">
              <SectionHeader
                eyebrow={ABOUT_SECTION_CONTENT.eyebrow}
                title={ABOUT_SECTION_CONTENT.title}
                highlightedText={ABOUT_SECTION_CONTENT.highlightedText}
                description={ABOUT_SECTION_CONTENT.description}
                className="items-start text-left mx-0"
                maxWidth="max-w-lg"
              />

              {/* Global Studio Base Card */}
              {SITE.location && (
                <Card variant="default" padding="compact" className="mt-8 flex flex-row items-center gap-4 w-full max-w-md">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 border border-primary/20">
                    <MapPinIcon size={18} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider font-semibold">
                      {ABOUT_SECTION_CONTENT.globalBase}
                    </span>
                    <span className="text-sm font-bold text-foreground">
                      {SITE.location} &bull; {ABOUT_SECTION_CONTENT.remoteEngineering}
                    </span>
                  </div>
                </Card>
              )}
            </div>

            {/* Right Column: 3 Strategic Pillars Bento */}
            <div className="lg:col-span-7 flex flex-col gap-4 text-left">
              {/* Pillar 1: Hero Card */}
              <Card variant="default" padding="default" className="relative overflow-hidden">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center border border-primary/20 shrink-0">
                    <ZapIcon size={18} />
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
                    <div className="flex items-center gap-2 text-primary">
                      <CodeIcon size={16} />
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
                    <div className="flex items-center gap-2 text-primary">
                      <ShieldCheckIcon size={16} />
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
        </div>

        {/* ── 3. Guiding Philosophy (Interactive Principle Cards) ── */}
        <AboutPrinciples />

        {/* ── 4. The Simpluxe Advantage vs Traditional Agencies ── */}
        <AboutComparison />

        {/* ── 5. Modern Engineering Stack & Tech Philosophy ── */}
        <AboutTechStack />
      </Container>
    </div>
  );
}
