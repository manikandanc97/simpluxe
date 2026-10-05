"use client";

import { AnimatedIcon } from "@/components/ui/animated-icon";
import { type FAQItem } from "@/types/faq";
import { ChevronDownIcon } from "@animateicons/react/lucide/chevron-down-icon";
import { AnimatePresence, m as motion } from "motion/react";

import { fadeUp } from "@/lib/motion";

interface FaqAccordionItemProps {
  faq: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}

export function FaqAccordionItem({
  faq,
  isOpen,
  onToggle,
}: FaqAccordionItemProps) {
  const Icon = faq.icon;

  return (
    <motion.div
      variants={fadeUp}
      className={`faq-item group rounded-2xl transition-all duration-200 overflow-hidden font-satoshi ${
        isOpen
          ? "bg-card border border-primary/40 shadow-elevated"
          : "bg-card border border-border shadow-card hover:border-primary/30"
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 p-4 sm:p-6 text-left cursor-pointer outline-none"
      >
        <div className="flex items-center gap-4.5 sm:gap-4 flex-1 min-w-0">
          {/* Number Box */}
          <div
            className={`shrink-0 flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-xl font-bold text-xs sm:text-sm font-mono transition-colors duration-200 ${
              isOpen
                ? "bg-primary text-primary-foreground shadow-xs"
                : "bg-muted text-foreground/80 group-hover:bg-primary/10 group-hover:text-primary"
            }`}
          >
            {faq.num}
          </div>

          {/* Tag + Question */}
          <div className="flex flex-col gap-1 flex-1 min-w-0">
            <div className="flex items-center gap-1.5">
              <AnimatedIcon icon={Icon} size={14} className="w-3.5 h-3.5 text-primary shrink-0" />
              <span className="text-[11px] font-bold uppercase tracking-wider text-primary">
                {faq.category}
              </span>
            </div>
            <h3 className="text-sm sm:text-base font-bold text-foreground leading-snug">
              {faq.question}
            </h3>
          </div>
        </div>

        {/* Dropdown Chevron */}
        <div
          className={`shrink-0 flex items-center justify-center w-8 h-8 rounded-full border transition-all duration-200 shadow-2xs ${
            isOpen
              ? "bg-primary/10 border-primary/30 text-primary rotate-180"
              : "bg-muted border-border text-muted-foreground group-hover:text-foreground"
          }`}
        >
          <AnimatedIcon icon={ChevronDownIcon} size={15} className="w-3.5 h-3.5 stroke-[2.5]" />
        </div>
      </button>

      {/* Answer Content */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <motion.div 
              initial={{ y: -6 }}
              animate={{ y: 0 }}
              exit={{ y: -6 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-4 px-4 pb-6 pt-0 sm:pl-16 lg:pl-18 sm:pr-6"
            >
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {faq.answer}
              </p>

              {faq.highlights && faq.highlights.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-1">
                  {faq.highlights.map((hl, i) => {
                    const HlIcon = hl.icon;
                    return (
                      <div
                        key={i}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-primary/5 border border-primary/15 text-foreground text-xs font-medium"
                      >
                        <HlIcon className="w-3.5 h-3.5 text-primary shrink-0" />
                        <span>{hl.text}</span>
                      </div>
                    );
                  })}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
