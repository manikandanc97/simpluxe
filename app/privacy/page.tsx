import { PRIVACY_PAGE_COPY } from "@/lib/data/legal";
import { createPageMetadata } from "@/lib/metadata";
import { COMMON } from "@/lib/data/common";
import { JsonLd } from "@/components/shared/json-ld";
import { getBreadcrumbSchema } from "@/lib/schema";
import { LegalPageLayout } from "@/components/legal/legal-page-layout";
import type { Metadata } from "next";
import { SITE } from "@/lib/data/site";
import Link from "next/link";

export const metadata: Metadata = createPageMetadata({
  title: PRIVACY_PAGE_COPY.title,
  description: PRIVACY_PAGE_COPY.metadataDescription,
  path: "/privacy",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <JsonLd
        data={getBreadcrumbSchema([
          { name: COMMON.pages.home, path: "/" },
          { name: COMMON.pages.privacy, path: "/privacy" },
        ])}
      />
      <LegalPageLayout title={PRIVACY_PAGE_COPY.title} lastUpdated={PRIVACY_PAGE_COPY.lastUpdated}>
          <section className="flex flex-col gap-3">
            <h2 className="text-xl font-bold text-foreground">{PRIVACY_PAGE_COPY.introductionHeading}</h2>
            <p>{PRIVACY_PAGE_COPY.introduction}</p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-xl font-bold text-foreground">{PRIVACY_PAGE_COPY.collectionHeading}</h2>
            <p>{PRIVACY_PAGE_COPY.collectionDescription}</p>
            <ul className="flex list-disc flex-col gap-2 pl-6">
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
                <Link href="/connect" className="text-primary hover:underline">
                  {PRIVACY_PAGE_COPY.contactUs}
                </Link>
              )}
              {PRIVACY_PAGE_COPY.contactSuffix}
            </p>
          </section>
    </LegalPageLayout>
    </>
  );
}
