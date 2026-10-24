import { type FAQItem } from "@/types/faq";
import { FAQS, FAQ_SECTION_CONTENT } from "@/lib/data/faq";
import { SectionHeader } from "@/components/ui/section-header";
import { ContactCard } from "@/components/sections/faq/contact-card";
import { AccordionList } from "@/components/sections/faq/accordion-list";
import { cn } from "@/lib/utils";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";

interface SharedFaqSectionProps {
  id?: string;
  faqs: FAQItem[];
  defaultOpenId?: string;
  eyebrow: string;
  title: React.ReactNode;
  highlightedText?: string;
  description?: string;
  className?: string;
}

function SharedFaqSection({
  id = "faq",
  faqs,
  defaultOpenId,
  eyebrow,
  title,
  highlightedText,
  description,
  className,
}: SharedFaqSectionProps) {
  return (
    <Section id={id} className={cn("overflow-hidden bg-background font-satoshi", className)}>
      <Container className="relative z-10">
        <div className="grid grid-cols-1 gap-8 items-start lg:grid-cols-12 lg:gap-16 sm:gap-10">
          <div className="lg:col-span-5 flex flex-col gap-6 sm:gap-8">
            <SectionHeader
              eyebrow={eyebrow}
              title={title}
              highlightedText={highlightedText}
              description={description}
              className="items-start text-left"
              maxWidth="max-w-md"
            />
            <ContactCard />
          </div>

          <AccordionList faqs={faqs} defaultOpenId={defaultOpenId} />
        </div>
      </Container>
    </Section>
  );
}

export function FAQ() {
  return (
    <SharedFaqSection
      id="faq"
      className="border-t border-border/60"
      faqs={FAQS.slice(0, 4)}
      defaultOpenId="faq-pricing"
      eyebrow={FAQ_SECTION_CONTENT.eyebrow}
      title={FAQ_SECTION_CONTENT.titleLine1}
      highlightedText={FAQ_SECTION_CONTENT.highlightedText}
      description={FAQ_SECTION_CONTENT.description}
    />
  );
}
