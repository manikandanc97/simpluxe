import { SELECTED_WORK_CONTENT } from "@/lib/content/projects";
import { SectionHeader } from "@/components/ui/section-header";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import dynamic from "next/dynamic";

const SelectedWorkInteractive = dynamic(
  () => import("./selected-work-interactive").then((mod) => mod.SelectedWorkInteractive),
  { ssr: true }
);
export function SelectedWork() {
  return (
    <Section 
      id="selected-work"
      initial="visible"
      className="font-satoshi selection:bg-primary/20 selection:text-primary overflow-hidden scroll-mt-20"
    >
      {/* ── Background Decorative Elements ── */}
      <div 
        className="absolute left-0 top-0 bottom-0 w-full max-w-96 pointer-events-none opacity-40 z-0"
        style={{
          backgroundImage: "radial-gradient(#94A3B8 1.4px, transparent 1.4px)",
          backgroundSize: "20px 20px",
          maskImage: "linear-gradient(to right, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0) 100%)",
          WebkitMaskImage: "linear-gradient(to right, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0) 100%)",
        }}
      />

      <Container className="relative z-10">
        <div className="flex flex-col gap-2">
          <SectionHeader
            eyebrow={SELECTED_WORK_CONTENT.eyebrow}
            title={SELECTED_WORK_CONTENT.title}
            highlightedText={SELECTED_WORK_CONTENT.highlightedText}
            description={SELECTED_WORK_CONTENT.description}
            className="items-start text-left mx-0"
            maxWidth="max-w-2xl"
          />
          <SelectedWorkInteractive />
        </div>
      </Container>
    </Section>
  );
}
