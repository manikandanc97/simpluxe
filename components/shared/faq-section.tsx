"use client";

import { useState } from "react";
import { type FAQItem } from "@/types/faq";
import { SectionHeader } from "@/components/ui/section-header";
import { FaqContactCard } from "@/components/sections/faq/faq-contact-card";
import { FaqAccordionItem } from "@/components/sections/faq/faq-accordion-item";
import { m as motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { staggerRevealProps, fadeUpItem, staggerContainer } from "@/lib/motion";

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
  withAmbientDecor?: boolean;
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
  const [openId, setOpenId] = useState<string | null>(() => defaultOpenId ?? (faqs.length > 0 ? faqs[0].id : null));

  const toggle = (faqId: string) => {
    setOpenId((curr) => (curr === faqId ? null : faqId));
  };

  return (
    <Section id={id} className={cn("overflow-hidden bg-background font-satoshi", className)}>
      <Container className="relative z-10">
        <motion.div
          {...staggerRevealProps(0.12)}
          className="grid grid-cols-1 gap-8 items-start lg:grid-cols-12 lg:gap-16 sm:gap-10"
        >
          {/* Left Column (5 Cols) */}
          <motion.div variants={fadeUpItem} className="lg:col-span-5 flex flex-col gap-6 sm:gap-8">
            {/* Top Info */}
            <SectionHeader
              eyebrow={eyebrow}
              title={title}
              highlightedText={highlightedText}
              description={description}
              className="items-start text-left"
              maxWidth="max-w-md"
            />

            {/* Bottom Composite Card Component */}
            <FaqContactCard />
          </motion.div>

          {/* Right Column (7 Cols) - FAQ Accordion List */}
          <motion.div variants={fadeUpItem} className="lg:col-span-7 lg:pt-1 flex flex-col gap-4 pt-0 sm:gap-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={faqs[0]?.id || "empty"}
                variants={staggerContainer(0.08, 0.1)}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="flex flex-col gap-4 w-full sm:gap-4"
              >
                {faqs.map((faq) => (
                  <FaqAccordionItem
                    key={faq.id}
                    faq={faq}
                    isOpen={openId === faq.id}
                    onToggle={() => toggle(faq.id)}
                  />
                ))}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}
