import { TERMS_PAGE_COPY } from "@/lib/content/legal";
import { Container } from "@/components/ui/container";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: TERMS_PAGE_COPY.title,
  description: TERMS_PAGE_COPY.metadataDescription,
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen w-full bg-background text-foreground flex flex-col">
      {/* ── Fixed navbar height spacer ── */}
      <div className="h-16 w-full shrink-0" aria-hidden="true" />

      {/* ── Luxury Hero Banner ── */}
      <section className="w-full bg-luxury-banner text-white border-b border-primary-hover/30">
        <Container className="py-12 sm:py-16 lg:py-18">
          <div className="flex flex-col items-center text-center gap-6 sm:gap-7">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-xs font-medium text-white/75">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span className="text-white/40">/</span>
              <span className="text-white font-semibold">Terms of Service</span>
            </nav>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white max-w-3xl leading-tight">
              {TERMS_PAGE_COPY.title}
            </h1>

            {/* Subtitle / Last updated */}
            <p className="text-sm sm:text-base text-white/80 max-w-2xl leading-relaxed">
              {TERMS_PAGE_COPY.lastUpdated}
            </p>
          </div>
        </Container>
      </section>

      {/* ── Content ── */}
      <Container size="content" className="py-12 md:py-16 lg:py-20 flex flex-col gap-8">
        <div className="flex flex-col gap-8 text-muted-foreground text-sm md:text-base leading-relaxed">
          <section className="flex flex-col gap-3">
            <h2 className="text-xl font-bold text-foreground">{TERMS_PAGE_COPY.agreementHeading}</h2>
            <p>{TERMS_PAGE_COPY.agreementDescription}</p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-xl font-bold text-foreground">{TERMS_PAGE_COPY.propertyHeading}</h2>
            <p>{TERMS_PAGE_COPY.propertyDescription}</p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-xl font-bold text-foreground">{TERMS_PAGE_COPY.representationsHeading}</h2>
            <p>{TERMS_PAGE_COPY.representationsDescription}</p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-xl font-bold text-foreground">{TERMS_PAGE_COPY.modificationsHeading}</h2>
            <p>{TERMS_PAGE_COPY.modificationsDescription}</p>
          </section>
        </div>
      </Container>
    </div>
  );
}
