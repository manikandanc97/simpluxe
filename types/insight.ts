import type { StaticIconName } from "@/components/ui/static-icon";

interface InsightSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
  callout?: string;
}

export interface InsightPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  publishedLabel: string;
  readingTime: string;
  author: string;
  featured?: boolean;
  icon: StaticIconName;
  tone: "ocean" | "sky" | "slate" | "cyan";
  takeaways: string[];
  sections: InsightSection[];
  image: string;
}
