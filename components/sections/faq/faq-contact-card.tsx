"use client";

import { FAQ_CONTACT_CARD_COPY } from "@/lib/content/faq";

import { useLead } from "@/components/leads/lead-provider";
import { AnimatedArrowRight } from "@/components/ui/animated-icons/convenience-icons";
import { Button } from "@/components/ui/button";
import { CldImage } from "@/components/ui/cld-image";
import { SITE } from "@/lib/content/site";

export function FaqContactCard() {
  const { openLead } = useLead();

  return (
    <div className="relative mt-2 sm:mt-6 pt-8 lg:pt-12">
      {/* 1. "Still have a question?" Handwritten note & curved arrow */}
      <div className="absolute -top-5 left-1 sm:left-2 z-20 flex items-start gap-1 pointer-events-none select-none">
        <span className="font-handwriting italic text-xl sm:text-2xl text-foreground/90 font-bold -rotate-8 leading-tight block">
          {FAQ_CONTACT_CARD_COPY.stillHaveA}<br />{FAQ_CONTACT_CARD_COPY.question}</span>
        <svg 
          width="44" 
          height="38" 
          viewBox="0 0 54 46" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className="text-primary -mt-1 -ml-1"
        >
          <path 
            d="M6 14C16 3 32 2 40 14C45 22 44 32 41 40" 
            stroke="currentColor" 
            strokeWidth="2.2" 
            strokeLinecap="round" 
          />
          <path 
            d="M34 33L41 41L48 34" 
            stroke="currentColor" 
            strokeWidth="2.2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />
        </svg>
      </div>

      {/* 2. Main Outer Card */}
      <div className="faq-card relative z-10 w-full sm:max-w-md bg-card rounded-2xl p-5 sm:p-6 shadow-card border border-border overflow-visible mx-auto lg:mx-0">
        
        {/* Upper content: CTA and original laptop character */}
        <div className="relative min-h-42 sm:min-h-48">
          
          {/* Left: Text & CTA Button */}
          <div className="relative z-10 w-3/5 sm:max-w-56 lg:max-w-11/20 flex flex-col items-start gap-2 sm:gap-4">
            <div className="flex flex-col items-start gap-1.5 sm:gap-2">
              {/* Badge */}
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/10 border border-primary/20">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                  <circle cx="9" cy="12" r="1" fill="currentColor"/>
                  <circle cx="12" cy="12" r="1" fill="currentColor"/>
                  <circle cx="15" cy="12" r="1" fill="currentColor"/>
                </svg>
                <span className="text-2xs xs:text-xs font-bold text-primary whitespace-nowrap">{FAQ_CONTACT_CARD_COPY.weReHereToHelp}</span>
              </div>

              <div className="flex flex-col gap-1 sm:gap-1.5">
                {/* Heading */}
                <h3 className="text-sm xs:text-base sm:text-lg font-extrabold text-foreground tracking-tight leading-tight font-satoshi">
                  {FAQ_CONTACT_CARD_COPY.canTFindYourAnswer}</h3>

                {/* Subtitle */}
                <p className="text-2xs xs:text-xs text-muted-foreground leading-snug pr-0 sm:pr-2">
                  {FAQ_CONTACT_CARD_COPY.talkToOurTeamAndGet}</p>
              </div>
            </div>

            <Button
              size="default"
              type="button"
              onClick={() => openLead({ description: FAQ_CONTACT_CARD_COPY.faqTechnicalConsultation })}
              className="mt-1 shrink-0 w-auto"
            >
              <span>{FAQ_CONTACT_CARD_COPY.talkToOurTeam}</span>
              <AnimatedArrowRight size={14} />
            </Button>
          </div>

          {/* Right: 3D character sitting with laptop */}
          <div className="absolute -right-2 sm:-right-6 lg:-right-4 -top-8 sm:-top-10 lg:-top-10 w-32 xs:w-36 sm:w-54 lg:w-9/20 pointer-events-none select-none z-10">
            <div className="absolute -top-1 sm:-top-2 right-4 flex gap-1.5 rotate-35">
              <div className="w-0.5 h-2.5 sm:h-3 bg-primary rounded-full" />
              <div className="w-0.5 h-3 sm:h-4 bg-primary rounded-full -translate-y-1" />
              <div className="w-0.5 h-2.5 sm:h-3 bg-primary rounded-full" />
            </div>

            <CldImage
              src="simpluxe/faq/simplefaq"
              alt={FAQ_CONTACT_CARD_COPY.characterAlt}
              width={400}
              height={480}
              sizes="(max-width: 640px) 150px, 220px"
              className="w-full h-auto object-contain drop-shadow-elevated"
            />
          </div>
        </div>

        {/* Bottom: Stats Panel (Full-width rounded card with dividers) */}
        <div className="relative z-20 mt-4 sm:mt-4 bg-muted/40 backdrop-blur-sm rounded-xl p-2 sm:p-2.5 border border-border shadow-2xs grid grid-cols-3 divide-x divide-border text-center sm:text-left">
          <div className="px-1.5 sm:px-2 flex flex-col justify-center">
            <div className="text-xs sm:text-sm font-extrabold text-primary leading-none mb-0.5">{FAQ_CONTACT_CARD_COPY.text100}</div>
            <div className="text-2xs xs:text-2xs sm:text-xs font-medium text-muted-foreground leading-tight">
              {FAQ_CONTACT_CARD_COPY.honestAnswers}</div>
          </div>
          <div className="px-1.5 sm:px-2 flex flex-col justify-center">
            <div className="text-xs sm:text-sm font-extrabold text-primary leading-none mb-0.5">{FAQ_CONTACT_CARD_COPY.direct}</div>
            <div className="text-2xs xs:text-2xs sm:text-xs font-medium text-muted-foreground leading-tight">
              {SITE.responseTime || FAQ_CONTACT_CARD_COPY.projectReview}
            </div>
          </div>
          <div className="px-1.5 sm:px-2 flex flex-col justify-center">
            <div className="text-xs sm:text-sm font-extrabold text-primary leading-none mb-0.5">{FAQ_CONTACT_CARD_COPY.zero}</div>
            <div className="text-2xs xs:text-2xs sm:text-xs font-medium text-muted-foreground leading-tight">
              {FAQ_CONTACT_CARD_COPY.salesPressure}</div>
          </div>
        </div>

      </div>
    </div>
  );
}
