import { ElementType as LucideIcon } from "react";
import { ZapIcon } from "@animateicons/react/lucide/zap-icon";
import { MessageSquareIcon } from "@animateicons/react/lucide/message-square-icon";
import { CircleCheckIcon } from "@animateicons/react/lucide/circle-check-icon";

interface CTAPillar {
  label: string;
  icon: LucideIcon;
}

export interface CTAContent {
  eyebrow: string;
  title: string;
  highlightedText: string;
  description: string;
  primaryButtonText: string;
  secondaryButtonText: string;
  responseNote: string;
  floatingPillText: string;
  pillars: CTAPillar[];
}

export const CTA_CONTENT: CTAContent = {
  eyebrow: "FROM IDEA TO IMPACT",
  title: "Let's turn your idea into a",
  highlightedText: "premium digital product.",
  description: "High craft, sub-second performance, and zero bloat. We partner with ambitious founders to build products people actually love using.",
  primaryButtonText: "Start a project",
  secondaryButtonText: "Schedule a call",
  responseNote: "Response within 2 hours • Free 30-min discovery session",
  floatingPillText: "READY TO BUILD?",
  pillars: [
    { label: "Simple process.", icon: ZapIcon },
    { label: "Clear communication.", icon: MessageSquareIcon },
    { label: "Real results.", icon: CircleCheckIcon },
  ],
};
