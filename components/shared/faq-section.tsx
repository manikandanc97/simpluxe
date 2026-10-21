import { type FAQItem } from "@/types/faq";
import { SectionHeader } from "@/components/ui/section-header";
import { FaqContactCard } from "@/components/sections/faq/faq-contact-card";
import { FaqAccordionList } from "@/components/sections/faq/faq-accordion-list";
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

export function SharedFaqSection({
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
            <FaqContactCard />
          </div>

          <FaqAccordionList faqs={faqs} defaultOpenId={defaultOpenId} />
        </div>
      </Container>
    </Section>
  );
}
