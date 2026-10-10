"use client";

import { useState, useEffect } from "react";
import { type FAQItem } from "@/types/faq";
import { SectionHeader } from "@/components/ui/section-header";
import { FaqContactCard } from "@/components/sections/faq/faq-contact-card";
import { FaqAccordionItem } from "@/components/sections/faq/faq-accordion-item";
import { m as motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { staggerContainer } from "@/lib/motion";

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
  withAmbientDecor = false,
}: SharedFaqSectionProps) {
  const [openId, setOpenId] = useState<string | null>(() => defaultOpenId ?? (faqs.length > 0 ? faqs[0].id : null));

  // If defaultOpenId changes (e.g. dynamic service ID), reset it.
  useEffect(() => {
    if (defaultOpenId) {
      setOpenId(defaultOpenId);
    }
  }, [defaultOpenId]);

  const toggle = (faqId: string) => {
    setOpenId((curr) => (curr === faqId ? null : faqId));
  };

  return (
    <section id={id} className={cn("relative scroll-mt-24", className)}>
      {/* Ambient background glows */}
      {withAmbientDecor && (
        <div className="faq-accent-decor absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none select-none">
          {/* Top-left dot grid */}
          <div className="absolute top-10 left-4 sm:left-12 grid grid-cols-4 gap-2 opacity-35">
            {Array.from({ length: 28 }).map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-primary" />
            ))}
          </div>

          {/* Right edge dot grid */}
          <div className="absolute top-1/3 right-2 sm:right-10 grid grid-cols-4 gap-2 opacity-30">
            {Array.from({ length: 32 }).map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-primary" />
            ))}
          </div>

          {/* Top-right diagonal accent lines */}
          <div className="absolute top-8 right-12 sm:right-16 flex gap-1.5 rotate-35 opacity-75">
            <div className="w-0.5 h-4 bg-primary rounded-full" />
            <div className="w-0.5 h-5 bg-primary rounded-full -translate-y-1" />
            <div className="w-0.5 h-4 bg-primary rounded-full" />
          </div>
        </div>
      )}

      <div className={cn(withAmbientDecor ? "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" : "")}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-16 items-start">
          {/* Left Column (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-start gap-6 sm:gap-6 lg:sticky lg:top-32">
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
      </div>
    </section>
  );
}
