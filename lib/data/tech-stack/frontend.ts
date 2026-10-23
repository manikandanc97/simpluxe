import { COMMON } from "@/lib/data/common";
import type { TechItem } from "@/types/tech";

export const FRONTEND_TECH: TechItem[] = [
  {
    name: COMMON.technology.react,
    slug: "react",
    category: COMMON.categories.frontend,
    description: "Declarative UI for modern web apps.",
    badge: "UI Library",
    dotColor: "#F43F5E", // pink / rose dot
    accentColor: "#087EA4",
    learnMoreUrl: "https://react.dev",
  },
  {
    name: COMMON.technology.nextjs,
    slug: "nextjs",
    category: COMMON.categories.frontend,
    description: "Fullstack React for scalable apps.",
    badge: "React Framework",
    dotColor: "#10B981", // emerald / mint dot
    accentColor: "#000000",
    learnMoreUrl: "https://nextjs.org",
  },
  {
    name: "Vue.js",
    slug: "vuejs",
    category: COMMON.categories.frontend,
    description: "Flexible UI engine for modern web.",
    badge: "UI Framework",
    dotColor: "#F59E0B", // amber / yellow dot
    accentColor: "#4FC08D",
    learnMoreUrl: "https://vuejs.org",
  },
  {
    name: COMMON.technology.typescript,
    slug: "typescript",
    category: COMMON.categories.frontend,
    description: "Type-safe JS for robust codebases.",
    badge: "Type System",
    dotColor: "#3B82F6", // sky blue dot
    accentColor: "#3178C6",
    learnMoreUrl: "https://www.typescriptlang.org",
  },
  {
    name: COMMON.technology.tailwind,
    slug: "tailwindcss",
    category: COMMON.categories.frontend,
    description: "Utility-first CSS for rapid styling.",
    badge: "Utility CSS",
    dotColor: "#F59E0B", // amber dot
    accentColor: "#06B6D4",
    learnMoreUrl: "https://tailwindcss.com",
  },
  {
    name: "Vite",
    slug: "vite",
    category: COMMON.categories.frontend,
    description: "Lightning-fast next-gen bundler.",
    badge: "Bundler",
    dotColor: "#A855F7", // purple dot
    accentColor: "#646CFF",
    learnMoreUrl: "https://vite.dev",
  },
];
