import { HOW_WE_WORK_SECTION_CONTENT } from "@/lib/content/how-we-work";
import { SectionHeader } from "@/components/ui/section-header";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { AnimatedText } from "@/components/ui/animated-text";
import dynamic from "next/dynamic";

const HowWeWorkInteractive = dynamic(
  () => import("./how-we-work-interactive").then((mod) => mod.HowWeWorkInteractive),
  { ssr: true }
);
export function HowWeWork() {
  return (
    <Section id="how-we-work" className="overflow-hidden">
      {/* Decorative Dotted Grid Accents */}
      <div className="hidden lg:block pointer-events-none absolute top-16 left-8 w-28 h-28 hero-dots hww-dots opacity-40" />
      <div className="hidden lg:block pointer-events-none absolute top-1/2 left-3 w-20 h-28 hero-dots hww-dots opacity-35" />
      <div className="hidden lg:block pointer-events-none absolute top-28 right-10 w-24 h-24 hero-dots hww-dots opacity-35" />

      {/* Main Content Box */}
      <Container className="relative z-10 flex flex-col gap-8 sm:gap-10 lg:gap-12 justify-center">
            
            {/* SECTION HEADER */}
            <SectionHeader
              eyebrow={HOW_WE_WORK_SECTION_CONTENT.eyebrow}
              centered
              title={HOW_WE_WORK_SECTION_CONTENT.title}
              highlightedText={HOW_WE_WORK_SECTION_CONTENT.highlightedText}
              className="gap-1.5 sm:gap-2"
              maxWidth="max-w-4xl"
              description={
                <>
                  <AnimatedText text={HOW_WE_WORK_SECTION_CONTENT.descriptionLine1} staggerDelay={0.015} />
                  <br className="hidden sm:inline" /> <AnimatedText text={HOW_WE_WORK_SECTION_CONTENT.descriptionLine2} staggerDelay={0.015} />
                </>
              }
            />

            {/* INTERACTIVE CLIENT BOUNDARY */}
            <HowWeWorkInteractive />

        </Container>
    </Section>
  );
}
