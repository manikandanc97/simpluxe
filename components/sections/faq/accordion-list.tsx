"use client";

import { useState } from "react";
import { AnimatePresence, m as motion } from "motion/react";
import { type FAQItem } from "@/types/faq";
import { AccordionItem } from "./accordion-item";
import { fadeUpItem, staggerContainer } from "@/lib/motion";

interface AccordionListProps {
  faqs: FAQItem[];
  defaultOpenId?: string;
}

export function AccordionList({ faqs, defaultOpenId }: AccordionListProps) {
  const [openId, setOpenId] = useState<string | null>(
    () => defaultOpenId ?? faqs[0]?.id ?? null
  );

  return (
    <motion.div
      variants={fadeUpItem}
      initial={false}
      animate="visible"
      className="lg:col-span-7 lg:pt-1 flex flex-col gap-4 pt-0 sm:gap-4"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={faqs[0]?.id ?? "empty"}
          variants={staggerContainer(0.08, 0.1)}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="flex flex-col gap-4 w-full sm:gap-4"
        >
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.id}
              faq={faq}
              isOpen={openId === faq.id}
              onToggle={() => setOpenId((current) => (current === faq.id ? null : faq.id))}
            />
          ))}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}
