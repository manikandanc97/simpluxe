import { SharedFaqSection } from "@/components/shared/faq-section";
import {
  CUSTOM_SOFTWARE_FAQS,
  CUSTOM_SOFTWARE_FAQ_COPY,
} from "@/lib/data/custom-software";

export function CustomSoftwareFaq() {
  return (
    <SharedFaqSection
      id="faq"
      className="py-16 sm:py-20 lg:py-24 border-t border-border/60 font-satoshi"
      faqs={[...CUSTOM_SOFTWARE_FAQS]}
      defaultOpenId="faq-build-vs-buy"
      eyebrow={CUSTOM_SOFTWARE_FAQ_COPY.eyebrow}
      title={CUSTOM_SOFTWARE_FAQ_COPY.title}
      highlightedText={CUSTOM_SOFTWARE_FAQ_COPY.highlightedText}
      description={CUSTOM_SOFTWARE_FAQ_COPY.description}
    />
  );
}
