"use client";

import { AnimatedIcon } from "@/components/ui/animated-icon";
import { useState } from "react";
import { CircleCheckIcon } from "@animateicons/react/lucide/circle-check-icon";
import { cn } from "@/lib/utils";
import { PRINCIPLES, ABOUT_PRINCIPLES_CONTENT } from "@/lib/data/about";
import { SectionHeader } from "@/components/ui/section-header";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";

export function Principles() {
  const [activePrinciple, setActivePrinciple] = useState<number>(0);

  return (
    <Section
      id="principles"
      aria-labelledby="principles-heading"
      className="relative z-10 border-y border-primary/25 bg-secondary"
    >
      <Container className="flex flex-col gap-12 sm:gap-16">
        {/* ── Section Header ── */}
        <SectionHeader
          eyebrow={ABOUT_PRINCIPLES_CONTENT.eyebrow}
          title={ABOUT_PRINCIPLES_CONTENT.title}
          highlightedText={ABOUT_PRINCIPLES_CONTENT.highlightedText}
          description={ABOUT_PRINCIPLES_CONTENT.description}
          centered
          maxWidth="max-w-2xl"
        />

        {/* ── 3 Principles Grid ── */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 sm:gap-8">
          {PRINCIPLES.map((principle, index) => {
            const isActive = activePrinciple === index;

            return (
              <div
                data-animated-icon-target
                key={principle.number}
                onClick={() => setActivePrinciple(index)}
                className={cn(
                  "p-6 sm:p-8 rounded-2xl border transition-all duration-300 flex flex-col justify-between group cursor-pointer text-left relative overflow-hidden",
                  isActive
                    ? "bg-card border-primary shadow-elevated ring-1 ring-primary/20 -translate-y-1"
                    : "bg-card border-border hover:border-primary/30 hover:shadow-card hover:-translate-y-0.5"
                )}
              >
                {/* Active top subtle accent line */}
                {isActive && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary-hover" />
                )}

                <div className="flex flex-col gap-6">
                  {/* Number and Tag */}
                  <div className="flex items-center justify-between">
                    <span
                      className={cn(
                        "text-3xl sm:text-4xl font-black font-mono tracking-tight transition-colors",
                        isActive ? "text-primary" : "text-primary/30 group-hover:text-primary/70"
                      )}
                    >
                      {principle.number}
                    </span>
                    <span
                      className={cn(
                        "type-label uppercase px-4 py-1 rounded-full border transition-colors",
                        isActive
                          ? "bg-primary/10 text-primary border-primary/20"
                          : "bg-secondary text-muted-foreground border-border"
                      )}
                    >
                      {principle.tag}
                    </span>
                  </div>

                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                      {/* Title */}
                      <h3 className="type-h3 text-foreground">
                        {principle.title}
                      </h3>

                      {/* Summary */}
                      <p className="text-sm font-semibold text-primary">
                        {principle.summary}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                </div>

                {/* Deliverable footnote */}
                <div className="pt-6 border-t border-border flex items-center gap-2 type-label text-muted-foreground">
                  <AnimatedIcon icon={CircleCheckIcon} size={15} className="text-primary shrink-0" />
                  <span>{principle.deliverable}</span>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
