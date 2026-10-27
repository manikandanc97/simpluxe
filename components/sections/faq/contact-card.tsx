"use client";

import { FAQ_CONTACT_CARD_COPY } from "@/lib/data/faq";
import { useLead } from "@/components/leads/lead-provider";
import { AnimatedArrowRight } from "@/components/ui/animated-icons/convenience-icons";
import { AnimatedIcon } from "@/components/ui/animated-icon";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/data/site";
import { CheckIcon } from "@animateicons/react/lucide/check-icon";
import { MessageCircleIcon } from "@animateicons/react/lucide/message-circle-icon";

export function ContactCard() {
  const { openLead } = useLead();

  return (
    <div className="relative w-full">
      {/* Main Outer Card */}
      <div className="relative z-10 w-full self-center bg-card rounded-2xl p-5 shadow-card border border-border flex flex-col gap-5 sm:max-w-md sm:p-6 sm:gap-6 lg:self-start faq-card">
        {/* Upper content: CTA text and button */}
        <div className="flex flex-col items-start gap-4">
          <div className="flex flex-col items-start gap-2">
            {/* Badge */}
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/10 border border-primary/20">
              <AnimatedIcon icon={MessageCircleIcon} size={10} className="text-primary" />
              <span className="text-xs font-semibold text-primary whitespace-nowrap">{FAQ_CONTACT_CARD_COPY.weReHereToHelp}</span>
            </div>

            <div className="flex flex-col gap-1 sm:gap-1.5">
              {/* Heading */}
              <h3 className="text-base font-semibold text-heading tracking-tight leading-tight sm:text-lg">
                {FAQ_CONTACT_CARD_COPY.canTFindYourAnswer}
              </h3>

              {/* Subtitle */}
              <p className="text-xs leading-relaxed text-muted-foreground">
                {FAQ_CONTACT_CARD_COPY.talkToOurTeamAndGet}
              </p>
            </div>

            {/* Needful Consultation Highlights (Non-repeated) */}
            <div className="flex flex-col gap-1.5 pt-2 border-t border-border/70 w-full">
              {FAQ_CONTACT_CARD_COPY.highlights.map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="flex size-4 items-center justify-center rounded-full bg-primary/10 text-primary shrink-0">
                    <AnimatedIcon icon={CheckIcon} size={10} />
                  </span>
                  <span className="leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-start justify-between gap-3 w-full pt-0.5 xs:flex-row xs:items-center">
            <Button
              size="default"
              type="button"
              onClick={() => openLead({ description: FAQ_CONTACT_CARD_COPY.faqTechnicalConsultation })}
              className="w-full xs:w-auto"
            >
              <span>{FAQ_CONTACT_CARD_COPY.talkToOurTeam}</span>
              <AnimatedArrowRight size={14} />
            </Button>
            <div className="flex items-center gap-1.5 text-2xs text-muted-foreground font-medium sm:text-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
              <span>{FAQ_CONTACT_CARD_COPY.responseTime}</span>
            </div>
          </div>
        </div>

        {/* Bottom: Stats Panel (Full-width rounded card with dividers) */}
        <div className="bg-muted/40 backdrop-blur-sm rounded-xl p-2.5 border border-border shadow-2xs grid grid-cols-3 divide-x divide-border text-center sm:p-3 sm:text-left">
          <div className="px-1.5 flex flex-col justify-center gap-0.5 sm:px-2">
            <div className="text-xs font-bold text-primary leading-none sm:text-sm">{FAQ_CONTACT_CARD_COPY.text100}</div>
            <div className="text-xs font-medium text-muted-foreground leading-tight">
              {FAQ_CONTACT_CARD_COPY.honestAnswers}
            </div>
          </div>
          <div className="px-1.5 flex flex-col justify-center gap-0.5 sm:px-2">
            <div className="text-xs font-bold text-primary leading-none sm:text-sm">{FAQ_CONTACT_CARD_COPY.direct}</div>
            <div className="text-xs font-medium text-muted-foreground leading-tight">
              {SITE.responseTime || FAQ_CONTACT_CARD_COPY.projectReview}
            </div>
          </div>
          <div className="px-1.5 flex flex-col justify-center gap-0.5 sm:px-2">
            <div className="text-xs font-bold text-primary leading-none sm:text-sm">{FAQ_CONTACT_CARD_COPY.zero}</div>
            <div className="text-xs font-medium text-muted-foreground leading-tight">
              {FAQ_CONTACT_CARD_COPY.salesPressure}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
