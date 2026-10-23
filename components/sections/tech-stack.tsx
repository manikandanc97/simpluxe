import { TECH_STACK_SECTION_CONTENT } from "@/lib/data/tech-stack";
import { SectionHeader } from "@/components/ui/section-header";
import { TechValueStrip } from "./tech-stack/tech-value-strip";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import dynamic from "next/dynamic";
import { TechStackSkeleton } from "@/components/ui/skeleton";

const TechStackInteractive = dynamic(
  () => import("./tech-stack-interactive").then((mod) => mod.TechStackInteractive),
  { ssr: true, loading: () => <TechStackSkeleton /> }
);
export function TechStack() {
  return (
    <Section id="tech-stack" className="overflow-hidden bg-white font-satoshi">
      <Container className="relative z-10 flex flex-col gap-6 sm:gap-10 lg:gap-12">
        {/* ── Top Header ─────────────────────────────────────────────────────── */}
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

        {/* ── Categories + Cards wrapper ────────────────────────────────────── */}
        <div className="flex flex-col gap-8 sm:gap-12">
          {/* INTERACTIVE CLIENT BOUNDARY */}
          <TechStackInteractive />
        </div>

        {/* ── Bottom Value Proposition Strip (White Floating Island) ──────────── */}
        <TechValueStrip />

        {/* ── Bottom Divider & Editorial Note ─────────────────────────────────── */}
        <div className="flex w-full max-w-4xl self-center items-center justify-center gap-4 px-2">
          <div className="hidden h-px bg-slate-200/80 flex-1 sm:block" />
          <p className="text-xs font-mono uppercase tracking-widest text-slate-400 text-center leading-relaxed">
            {TECH_STACK_SECTION_CONTENT.footerNote}
          </p>
          <div className="hidden h-px bg-slate-200/80 flex-1 sm:block" />
        </div>
      </Container>
    </Section>
  );
}
