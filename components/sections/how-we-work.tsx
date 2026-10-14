import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import dynamic from "next/dynamic";
import { ProcessSkeleton } from "@/components/ui/skeleton";

const HowWeWorkInteractive = dynamic(
  () => import("./how-we-work-interactive").then((mod) => mod.HowWeWorkInteractive),
  { ssr: true, loading: () => <ProcessSkeleton /> }
);

export function HowWeWork() {
  return (
    <Section
      id="how-we-work"
      aria-labelledby="how-we-work-heading"
      className="relative z-10 border-y border-primary/25 bg-secondary"
    >
      <Container>
        <HowWeWorkInteractive />
      </Container>
    </Section>
  );
}
