import { PRIVACY_PAGE_COPY } from "@/lib/content/legal";
import { Container } from "@/components/ui/container";
import type { Metadata } from "next";
import { SITE } from "@/lib/content/site";
import Link from "next/link";

export const metadata: Metadata = {
  title: PRIVACY_PAGE_COPY.title,
  description: PRIVACY_PAGE_COPY.metadataDescription,
};

export default function PrivacyPolicyPage() {
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
              <span className="text-white font-semibold">Privacy Policy</span>
            </nav>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white max-w-3xl leading-tight">
              {PRIVACY_PAGE_COPY.title}
            </h1>

            {/* Subtitle / Last updated */}
            <p className="text-sm sm:text-base text-white/80 max-w-2xl leading-relaxed">
              {PRIVACY_PAGE_COPY.lastUpdated}
            </p>
          </div>
        </Container>
      </section>

      {/* ── Content ── */}
      <Container size="content" className="py-12 md:py-16 lg:py-20 flex flex-col gap-8">
        <div className="flex flex-col gap-8 text-muted-foreground text-sm md:text-base leading-relaxed">
          <section className="flex flex-col gap-3">
            <h2 className="text-xl font-bold text-foreground">{PRIVACY_PAGE_COPY.introductionHeading}</h2>
            <p>{PRIVACY_PAGE_COPY.introduction}</p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-xl font-bold text-foreground">{PRIVACY_PAGE_COPY.collectionHeading}</h2>
            <p>{PRIVACY_PAGE_COPY.collectionDescription}</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>{PRIVACY_PAGE_COPY.personalAndContactData}</li>
              <li>{PRIVACY_PAGE_COPY.credentialsAndAuthenticationData}</li>
              <li>{PRIVACY_PAGE_COPY.paymentData}</li>
            </ul>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-xl font-bold text-foreground">{PRIVACY_PAGE_COPY.usageHeading}</h2>
            <p>{PRIVACY_PAGE_COPY.usageDescription}</p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-xl font-bold text-foreground">{PRIVACY_PAGE_COPY.contactHeading}</h2>
            <p>
              {PRIVACY_PAGE_COPY.contactIntroduction}
              {SITE.email ? (
                <>
                  {PRIVACY_PAGE_COPY.emailUsAt}
                  <a href={`mailto:${SITE.email}`} className="text-primary hover:underline">
                    {SITE.email}
                  </a>
                </>
              ) : (
                <Link href="/contact" className="text-primary hover:underline">
                  {PRIVACY_PAGE_COPY.contactUs}
                </Link>
              )}
              {PRIVACY_PAGE_COPY.contactSuffix}
            </p>
          </section>
        </div>
      </Container>
    </div>
  );
}
