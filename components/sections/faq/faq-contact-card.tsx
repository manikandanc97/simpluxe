"use client";

import { FAQ_CONTACT_CARD_COPY } from "@/lib/content/faq";
import { useLead } from "@/components/leads/lead-provider";
import { AnimatedArrowRight } from "@/components/ui/animated-icons/convenience-icons";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/content/site";

export function FaqContactCard() {
  const { openLead } = useLead();

  return (
    <div className="relative w-full">
      {/* Main Outer Card */}
      <div className="faq-card relative z-10 w-full sm:max-w-md bg-card rounded-2xl p-5 sm:p-6 shadow-card border border-border mx-auto lg:mx-0 flex flex-col gap-5 sm:gap-6">
        {/* Upper content: CTA text and button */}
        <div className="flex flex-col items-start gap-4">
          <div className="flex flex-col items-start gap-2">
            {/* Badge */}
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/10 border border-primary/20">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                <circle cx="9" cy="12" r="1" fill="currentColor"/>
                <circle cx="12" cy="12" r="1" fill="currentColor"/>
                <circle cx="15" cy="12" r="1" fill="currentColor"/>
              </svg>
              <span className="text-xs font-semibold text-primary whitespace-nowrap">{FAQ_CONTACT_CARD_COPY.weReHereToHelp}</span>
            </div>

            <div className="flex flex-col gap-1 sm:gap-1.5">
              {/* Heading */}
              <h3 className="text-base sm:text-lg font-semibold text-heading tracking-tight leading-tight">
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
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span className="leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col xs:flex-row items-start xs:items-center justify-between gap-3 w-full pt-0.5">
            <Button
              size="default"
              type="button"
              onClick={() => openLead({ description: FAQ_CONTACT_CARD_COPY.faqTechnicalConsultation })}
              className="w-full xs:w-auto"
            >
              <span>{FAQ_CONTACT_CARD_COPY.talkToOurTeam}</span>
              <AnimatedArrowRight size={14} />
            </Button>
            <div className="flex items-center gap-1.5 text-2xs sm:text-xs text-muted-foreground font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
              <span>{FAQ_CONTACT_CARD_COPY.responseTime}</span>
            </div>
          </div>
        </div>

        {/* Bottom: Stats Panel (Full-width rounded card with dividers) */}
        <div className="bg-muted/40 backdrop-blur-sm rounded-xl p-2.5 sm:p-3 border border-border shadow-2xs grid grid-cols-3 divide-x divide-border text-center sm:text-left">
          <div className="px-1.5 sm:px-2 flex flex-col justify-center">
            <div className="text-xs sm:text-sm font-bold text-primary leading-none mb-0.5">{FAQ_CONTACT_CARD_COPY.text100}</div>
            <div className="text-xs font-medium text-muted-foreground leading-tight">
              {FAQ_CONTACT_CARD_COPY.honestAnswers}
            </div>
          </div>
          <div className="px-1.5 sm:px-2 flex flex-col justify-center">
            <div className="text-xs sm:text-sm font-bold text-primary leading-none mb-0.5">{FAQ_CONTACT_CARD_COPY.direct}</div>
            <div className="text-xs font-medium text-muted-foreground leading-tight">
              {SITE.responseTime || FAQ_CONTACT_CARD_COPY.projectReview}
            </div>
          </div>
          <div className="px-1.5 sm:px-2 flex flex-col justify-center">
            <div className="text-xs sm:text-sm font-bold text-primary leading-none mb-0.5">{FAQ_CONTACT_CARD_COPY.zero}</div>
            <div className="text-xs font-medium text-muted-foreground leading-tight">
              {FAQ_CONTACT_CARD_COPY.salesPressure}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
