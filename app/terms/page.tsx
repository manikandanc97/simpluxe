import { TERMS_PAGE_COPY } from "@/lib/content/legal";
import { LegalPageLayout } from "@/components/legal/legal-page-layout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: TERMS_PAGE_COPY.title,
  description: TERMS_PAGE_COPY.metadataDescription,
};

export default function TermsOfServicePage() {
  return (
    <LegalPageLayout title={TERMS_PAGE_COPY.title} lastUpdated={TERMS_PAGE_COPY.lastUpdated}>
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
    </LegalPageLayout>
  );
}
