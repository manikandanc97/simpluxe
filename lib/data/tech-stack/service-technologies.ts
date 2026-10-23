import { COMMON } from "@/lib/data/common";

export interface ServiceTechDetails {
  name: string;
  category: string;
}

export const TECH_DETAILS = {
  // Core Frameworks & Languages
  nextjs: { name: COMMON.technology.nextjs, category: "core" },
  react: { name: COMMON.technology.react, category: "core" },
  typescript: { name: COMMON.technology.typescript, category: "core" },
  tailwindcss: { name: COMMON.technology.tailwind, category: "core" },
  reactnative: { name: COMMON.technology.reactNative, category: "core" },
  flutter: { name: COMMON.technology.flutter, category: "core" },
  expo: { name: COMMON.technology.expo, category: "core" },
  swift: { name: COMMON.technology.swift, category: "core" },
  kotlin: { name: COMMON.technology.kotlin, category: "core" },
  
  // Backend & APIs
  nodejs: { name: COMMON.technology.nodejs, category: "backend" },
  nestjs: { name: "NestJS", category: "backend" },
  expressjs: { name: "Express.js", category: "backend" },
  restapi: { name: "REST API", category: "backend" },
  prisma: { name: COMMON.technology.prismaOrm, category: "backend" },

  // Database
  postgresql: { name: COMMON.technology.postgres, category: "database" },
  supabase: { name: COMMON.technology.supabase, category: "database" },

  // Authentication & Security
  supabaseauth: { name: "Supabase Auth", category: "auth" },
  oauth: { name: "OAuth / Google Sign-In", category: "auth" },
  jwt: { name: "JWT", category: "auth" },

  // Deployment & Infrastructure
  hostingervps: { name: "Hostinger VPS", category: "deployment" },

  // Hosting
  vercel: { name: COMMON.technology.vercel, category: "hosting" },

  // Domain
  godaddy: { name: "GoDaddy", category: "domain" },
  hostinger: { name: "Hostinger", category: "domain" },

  // Backend & Infrastructure
  cloudflare: { name: COMMON.technology.cloudflare, category: "infrastructure" },
  docker: { name: COMMON.technology.docker, category: "infrastructure" },
  stripe: { name: COMMON.technology.stripe, category: "infrastructure" },
  razorpay: { name: COMMON.technology.razorpay, category: "infrastructure" },
  redis: { name: COMMON.technology.redis, category: "infrastructure" },
  firebase: { name: "Firebase", category: "infrastructure" },
  python: { name: COMMON.technology.python, category: "infrastructure" },
  fastapi: { name: COMMON.technology.fastapi, category: "infrastructure" },
  aws: { name: COMMON.technology.aws, category: "infrastructure" },
  
  // AI & Machine Learning
  openai: { name: "OpenAI", category: "ai" },
  anthropic: { name: "Anthropic", category: "ai" },
  langchain: { name: "LangChain", category: "ai" },

  // Design & Prototyping
  figma: { name: COMMON.technology.figma, category: "design" },
  illustrator: { name: COMMON.technology.illustrator, category: "design" },
  photoshop: { name: COMMON.technology.photoshop, category: "design" },
  canva: { name: COMMON.technology.canva, category: "design" },
} satisfies Record<string, ServiceTechDetails>;

export type ServiceTechSlug = keyof typeof TECH_DETAILS;
