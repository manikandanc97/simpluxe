import type { CATEGORIES } from "@/lib/content/tech-stack";

export type TechCategory = (typeof CATEGORIES)[number];

export interface TechItem {
  name: string;
  slug: string;
  category: TechCategory;
  description: string;
  badge: string;
  dotColor: string;
  accentColor: string;
  learnMoreUrl: string;
  invertInDark?: boolean;
}
