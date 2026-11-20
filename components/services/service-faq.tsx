import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import {
  getServicePath,
  SERVICE_SEO_SECTION_COPY,
  type ServiceViewData,
} from "@/lib/data/services";

interface ServiceFaqProps {
  faqs: ServiceViewData["faqs"];
  relatedServices: Pick<ServiceViewData, "id" | "name" | "shortTagline">[];
}

export function ServiceFaq({ faqs, relatedServices }: ServiceFaqProps) {
  return (
    <Section id="faq" className="border-t border-border bg-background">
      <Container>
        <div className="flex flex-col gap-12 lg:gap-16">
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-16">
            <SectionHeader
              eyebrow={SERVICE_SEO_SECTION_COPY.faqEyebrow}
              title={SERVICE_SEO_SECTION_COPY.faqTitle}
              description={SERVICE_SEO_SECTION_COPY.faqDescription}
              className="lg:col-span-5"
              headingId="service-faq-heading"
            />

            <div
              className="flex flex-col gap-4 lg:col-span-7"
              aria-labelledby="service-faq-heading"
            >
              {faqs.map((faq, index) => (
                <details
                  key={faq.question}
                  className="group rounded-2xl border border-border bg-card shadow-card open:border-primary/40 open:shadow-elevated"
                  open={index === 0}
                >
                  <summary className="flex items-center justify-between gap-4 p-4 text-left text-sm font-semibold text-heading outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary sm:p-6 sm:text-base">
                    <span>{faq.question}</span>
                    <span
                      aria-hidden="true"
                      className="flex size-8 shrink-0 items-center justify-center rounded-full border border-border bg-muted text-primary transition-transform group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <div className="px-4 pb-6 sm:px-6">
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {faq.answer}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6 rounded-2xl border border-primary/20 bg-secondary p-6 sm:p-8">
            <SectionHeader
              eyebrow={SERVICE_SEO_SECTION_COPY.relatedEyebrow}
              title={SERVICE_SEO_SECTION_COPY.relatedTitle}
              description={SERVICE_SEO_SECTION_COPY.relatedDescription}
              maxWidth="max-w-2xl"
            />
            <nav aria-label={SERVICE_SEO_SECTION_COPY.relatedTitle} className="flex flex-wrap gap-3">
              {relatedServices.map((service) => (
                <Link
                  key={service.id}
                  href={getServicePath(service.id)}
                  title={service.shortTagline}
                  className="rounded-full border border-primary/25 bg-white px-4 py-2 text-sm font-semibold text-primary transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
                >
                  {service.name}
                </Link>
              ))}
              <Link
                href="/creations"
                className="rounded-full border border-primary/25 bg-white px-4 py-2 text-sm font-semibold text-primary transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
              >
                {SERVICE_SEO_SECTION_COPY.creationsLabel}
              </Link>
              <Link
                href="/connect"
                className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-hover"
              >
                {SERVICE_SEO_SECTION_COPY.connectLabel}
              </Link>
            </nav>
          </div>
        </div>
      </Container>
    </Section>
  );
}
