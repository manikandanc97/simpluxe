import { LucideIcon } from "lucide-react";

interface FAQHighlight {
  text: string;
  icon: LucideIcon;
}

export interface FAQItem {
  id: string;
  num: string;
  category: string;
  icon: LucideIcon;
  question: string;
  answer: string;
  highlights?: FAQHighlight[];
}

export interface FAQSectionContent {
  eyebrow: string;
  titleLine1: string;
  titleLine2?: string;
  highlightedText: string;
  description: string;
}
