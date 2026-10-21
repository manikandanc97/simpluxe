import { FAQS, FAQ_SECTION_CONTENT } from "@/lib/content/faq";

import { SharedFaqSection } from "@/components/shared/faq-section";

export function FAQ() {
  return (
    <SharedFaqSection
      id="faq"
      className="py-8 sm:py-8 lg:py-16"
      faqs={FAQS.slice(0, 4)}
      defaultOpenId="faq-pricing"
      eyebrow={FAQ_SECTION_CONTENT.eyebrow}
      title={FAQ_SECTION_CONTENT.titleLine1}
      highlightedText={FAQ_SECTION_CONTENT.highlightedText}
      description={FAQ_SECTION_CONTENT.description}
    />
  );
}

