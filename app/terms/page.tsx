import { TERMS_PAGE_COPY } from "@/lib/content/legal";
import { Container } from "@/components/ui/container";
import { AmbientBackground } from "@/components/ui/ambient-background";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: TERMS_PAGE_COPY.title,
  description: TERMS_PAGE_COPY.metadataDescription,
};

export default function TermsOfServicePage() {
  return (
    <div className="relative min-h-screen w-full bg-background text-foreground overflow-hidden pt-24 pb-16">
      <AmbientBackground screen="about" />
      <Container size="content" className="relative z-10 flex flex-col gap-8 mt-12 md:mt-20">
        <div className="flex flex-col gap-4 border-b border-border pb-8">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground">
            {TERMS_PAGE_COPY.title}</h1>
          <p className="text-muted-foreground text-sm">
            {TERMS_PAGE_COPY.lastUpdated}</p>
        </div>

        <div className="flex flex-col gap-8 text-muted-foreground text-sm md:text-base leading-relaxed mb-16">
          <section className="flex flex-col gap-3">
            <h2 className="text-xl font-bold text-foreground">{TERMS_PAGE_COPY.agreementHeading}</h2>
            <p>
              {TERMS_PAGE_COPY.agreementDescription}</p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-xl font-bold text-foreground">{TERMS_PAGE_COPY.propertyHeading}</h2>
            <p>
              {TERMS_PAGE_COPY.propertyDescription}</p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-xl font-bold text-foreground">{TERMS_PAGE_COPY.representationsHeading}</h2>
            <p>
              {TERMS_PAGE_COPY.representationsDescription}</p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-xl font-bold text-foreground">{TERMS_PAGE_COPY.modificationsHeading}</h2>
            <p>
              {TERMS_PAGE_COPY.modificationsDescription}</p>
          </section>
        </div>
      </Container>
    </div>
  );
}
