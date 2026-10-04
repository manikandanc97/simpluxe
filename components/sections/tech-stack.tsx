import { TECH_STACK_SECTION_CONTENT } from "@/lib/content/tech-stack";
import { SectionHeader } from "@/components/ui/section-header";
import { TechPerformancePill } from "./tech-stack/tech-performance-pill";
import { TechValueStrip } from "./tech-stack/tech-value-strip";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { FadeUpWrapper } from "@/components/ui/fade-up-wrapper";
import dynamic from "next/dynamic";

const TechStackInteractive = dynamic(
  () => import("./tech-stack-interactive").then((mod) => mod.TechStackInteractive),
  { ssr: true }
);
export function TechStack() {
  return (
    <Section id="tech-stack">
      {/* Decorative dot matrix in corners */}
      <div className="pointer-events-none absolute top-8 left-8 w-32 h-32 hero-dots opacity-40 dark:opacity-20" />
      <div className="pointer-events-none absolute bottom-8 left-8 w-36 h-36 hero-dots opacity-40 dark:opacity-20" />
      <div className="pointer-events-none absolute bottom-8 right-8 w-36 h-36 hero-dots opacity-40 dark:opacity-20" />

      <Container className="relative z-10 flex flex-col gap-6 sm:gap-10 lg:gap-12">
        {/* ── Top Header with Floating Performance Pill ──────────────────────── */}
        <FadeUpWrapper className="relative text-center">
          <TechPerformancePill />

          <SectionHeader
            eyebrow={TECH_STACK_SECTION_CONTENT.eyebrow}
            centered
            title={TECH_STACK_SECTION_CONTENT.title}
            highlightedText={TECH_STACK_SECTION_CONTENT.highlightedText}
            description={
              <>
                {TECH_STACK_SECTION_CONTENT.descriptionLine1}
                <br className="hidden sm:inline" /> {TECH_STACK_SECTION_CONTENT.descriptionLine2}
              </>
            }
          />
        </FadeUpWrapper>

        {/* ── Categories + Cards wrapper ────────────────────────────────────── */}
        <div className="flex flex-col gap-8 sm:gap-12">
          {/* INTERACTIVE CLIENT BOUNDARY */}
          <TechStackInteractive />
        </div>

        {/* ── Bottom Value Proposition Strip (White Floating Island) ──────────── */}
        <TechValueStrip />

        {/* ── Bottom Divider & Editorial Note ─────────────────────────────────── */}
        <div
          className="ts-footer flex items-center justify-center gap-4 sm:gap-4 max-w-4xl mx-auto w-full px-2"
        >
          <div className="hidden sm:block h-px bg-slate-200/80 dark:bg-border/60 flex-1" />
          <p className="text-xs sm:text-xs font-mono uppercase tracking-widest text-slate-400 dark:text-muted-foreground/60 text-center leading-relaxed">
            {TECH_STACK_SECTION_CONTENT.footerNote}
          </p>
          <div className="hidden sm:block h-px bg-slate-200/80 dark:bg-border/60 flex-1" />
        </div>
      </Container>
    </Section>
  );
}
