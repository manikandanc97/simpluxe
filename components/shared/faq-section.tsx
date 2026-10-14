"use client";

import { useState } from "react";
import { type FAQItem } from "@/types/faq";
import { SectionHeader } from "@/components/ui/section-header";
import { FaqContactCard } from "@/components/sections/faq/faq-contact-card";
import { FaqAccordionItem } from "@/components/sections/faq/faq-accordion-item";
import { m as motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { staggerContainer } from "@/lib/motion";

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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-16 items-start">
          {/* Left Column (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6 sm:gap-8">
            {/* Top Info */}
            <SectionHeader
              eyebrow={eyebrow}
              title={title}
              highlightedText={highlightedText}
              description={description}
              className="items-start text-left mx-0"
              maxWidth="max-w-md"
            />

            {/* Bottom Composite Card Component */}
            <FaqContactCard />
          </div>

          {/* Right Column (7 Cols) - FAQ Accordion List */}
          <div className="lg:col-span-7 flex flex-col gap-4 sm:gap-4 pt-0 lg:pt-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={faqs[0]?.id || "empty"}
                variants={staggerContainer(0.08, 0.1)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "0px 0px -50px 0px" }}
                exit="hidden"
                className="flex flex-col gap-4 sm:gap-4 w-full"
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
          </div>
        </div>
      </Container>
    </Section>
  );
}
