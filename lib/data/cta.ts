import { COMMON } from "./common";

// cta
export interface CTAContent {
  eyebrow: string;
  title: string;
  highlightedText: string;
  description: string;
  primaryButtonText: string;
  secondaryButtonText: string;
  responseNote: string;
  floatingPillText: string;
  pillars?: Array<{ label: string; icon?: unknown }>;
}

export const CTA_CONTENT: CTAContent = {
  eyebrow: "From idea to impact",
  title: "Let's turn your idea into a ",
  highlightedText: "premium digital product.",
  description: "Thoughtful engineering, responsive performance, and clean architecture. Partner with a focused development studio to build software your business and customers rely on.",
  primaryButtonText: COMMON.actions.startProject,
  secondaryButtonText: "Schedule a call",
  responseNote: "Response within 2 hours • Free 30-min discovery session",
  floatingPillText: "READY TO BUILD?",
  pillars: [],
};

// sections
export const CTA_COPY = {
  illustrationAlt: "Turn your idea into a premium digital product",
  interestedInSchedulingADiscoveryCall: "Interested in scheduling a discovery call.",
} as const;
