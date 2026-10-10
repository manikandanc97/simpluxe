import { PRIVACY_PAGE_COPY } from "@/lib/content/legal";
import { Container } from "@/components/ui/container";
import { AmbientBackground } from "@/components/ui/ambient-background";
import type { Metadata } from "next";
import { SITE } from "@/lib/content/site";

export const metadata: Metadata = {
  title: PRIVACY_PAGE_COPY.title,
  description: PRIVACY_PAGE_COPY.metadataDescription,
};

export default function PrivacyPolicyPage() {
  return (
    <div className="relative min-h-screen w-full bg-background text-foreground overflow-hidden pt-24 pb-16">
      <AmbientBackground screen="about" />
      <Container size="content" className="relative z-10 flex flex-col gap-8 mt-12 md:mt-20">
        <div className="flex flex-col gap-4 border-b border-border pb-8">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground">
            {PRIVACY_PAGE_COPY.title}</h1>
          <p className="text-muted-foreground text-sm">
            {PRIVACY_PAGE_COPY.lastUpdated}</p>
        </div>

        <div className="flex flex-col gap-8 text-muted-foreground text-sm md:text-base leading-relaxed mb-16">
          <section className="flex flex-col gap-3">
            <h2 className="text-xl font-bold text-foreground">{PRIVACY_PAGE_COPY.introductionHeading}</h2>
            <p>
              {PRIVACY_PAGE_COPY.introduction}</p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-xl font-bold text-foreground">{PRIVACY_PAGE_COPY.collectionHeading}</h2>
            <p>
              {PRIVACY_PAGE_COPY.collectionDescription}</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>{PRIVACY_PAGE_COPY.personalAndContactData}</li>
              <li>{PRIVACY_PAGE_COPY.credentialsAndAuthenticationData}</li>
              <li>{PRIVACY_PAGE_COPY.paymentData}</li>
            </ul>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-xl font-bold text-foreground">{PRIVACY_PAGE_COPY.usageHeading}</h2>
            <p>
              {PRIVACY_PAGE_COPY.usageDescription}</p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-xl font-bold text-foreground">{PRIVACY_PAGE_COPY.contactHeading}</h2>
            <p>
              {PRIVACY_PAGE_COPY.contactIntroduction}{SITE.email ? (
                <>{PRIVACY_PAGE_COPY.emailUsAt}<a href={`mailto:${SITE.email}`} className="text-primary hover:underline">{SITE.email}</a></>
              ) : (
                <a href="/contact" className="text-primary hover:underline">{PRIVACY_PAGE_COPY.contactUs}</a>
              )}{PRIVACY_PAGE_COPY.contactSuffix}</p>
          </section>
        </div>
      </Container>
    </div>
  );
}
