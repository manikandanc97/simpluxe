import type { AnimatedIconName } from "@/components/ui/animated-icon";

export type InsightRichText =
  | string
  | readonly (
      | string
      | { type: "strong"; text: string }
      | { type: "link"; text: string; href: string }
    )[];

interface InsightSubsection {
  heading: string;
  paragraphs: InsightRichText[];
  bullets?: string[];
}

interface InsightSection {
  heading: string;
  paragraphs: InsightRichText[];
  closingParagraphs?: InsightRichText[];
  bullets?: string[];
  callout?: string;
  subsections?: InsightSubsection[];
  table?: {
    headers: string[];
    rows: string[][];
  };
  checklist?: string[];
  faqs?: {
    question: string;
    answer: string;
  }[];
}

interface InsightPostBase {
  slug: string;
  title: string;
  excerpt: string;
  seoTitle?: string;
  seoDescription?: string;
  showSectionLabels?: boolean;
  introduction?: InsightRichText[];
  sections: InsightSection[];
}

interface DraftInsightPost extends InsightPostBase {
  status: "draft";
  category?: string;
  publishedAt?: string;
  publishedLabel?: string;
  readingTime?: string;
  author?: string;
  featured?: boolean;
  icon?: AnimatedIconName;
  tone?: "ocean" | "sky" | "slate" | "cyan";
  takeaways?: string[];
  image?: string;
}

export interface PublishedInsightPost extends InsightPostBase {
  status: "published";
  category: string;
  publishedAt: string;
  publishedLabel: string;
  readingTime: string;
  author: string;
  featured?: boolean;
  icon: AnimatedIconName;
  tone: "ocean" | "sky" | "slate" | "cyan";
  takeaways?: string[];
  image?: string;
}

export type InsightPost = DraftInsightPost | PublishedInsightPost;
