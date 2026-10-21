import { COMMON } from "./common";
import type { TechCategory, TechItem } from "@/types/tech";
import { type AnimatedIconName } from "@/components/ui/animated-icon";

export const CATEGORIES = [
  COMMON.categories.frontend,
  COMMON.categories.mobile,
  COMMON.categories.backend,
  COMMON.categories.database,
  COMMON.categories.design,
] as const;

// tech-stack
export type Category = TechCategory;

export const CATEGORY_ICONS: Record<Category, AnimatedIconName> = {
  [COMMON.categories.frontend]: "laptop",
  [COMMON.categories.mobile]: "smartphone",
  [COMMON.categories.backend]: "cpu",
  [COMMON.categories.database]: "layers",
  [COMMON.categories.design]: "palette",
};

export const TECH_STACK: TechItem[] = [
  // ── Frontend & Web (6) ───────────────────────────────────────────────────────
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
    invertInDark: true,
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

  // ── Mobile (5) ───────────────────────────────────────────────────────────────
  {
    name: COMMON.technology.reactNative,
    slug: "reactnative",
    category: COMMON.categories.mobile,
    description: "Native mobile apps for iOS & Android.",
    badge: COMMON.labels.crossPlatform,
    dotColor: "#38BDF8",
    accentColor: "#087EA4",
    learnMoreUrl: "https://reactnative.dev",
  },
  {
    name: COMMON.technology.flutter,
    slug: "flutter",
    category: COMMON.categories.mobile,
    description: "Cross-platform UI with Dart engine.",
    badge: "UI Toolkit",
    dotColor: "#0284C7",
    accentColor: "#02569B",
    learnMoreUrl: "https://flutter.dev",
  },
  {
    name: COMMON.technology.swift,
    slug: "swift",
    category: COMMON.categories.mobile,
    description: "Native iOS apps for Apple devices.",
    badge: "Native iOS",
    dotColor: "#F97316",
    accentColor: "#F05138",
    learnMoreUrl: "https://developer.apple.com/swift",
  },
  {
    name: COMMON.technology.kotlin,
    slug: "kotlin",
    category: COMMON.categories.mobile,
    description: "Modern native code for Android.",
    badge: "Android",
    dotColor: "#8B5CF6",
    accentColor: "#7F52FF",
    learnMoreUrl: "https://kotlinlang.org",
  },
  {
    name: COMMON.technology.expo,
    slug: "expo",
    category: COMMON.categories.mobile,
    description: "Universal tooling for React Native.",
    badge: "Toolchain",
    dotColor: "#10B981",
    accentColor: "#000020",
    learnMoreUrl: "https://expo.dev",
    invertInDark: true,
  },

  // ── Backend & APIs (5) ───────────────────────────────────────────────────────
  {
    name: COMMON.technology.nodejs,
    slug: "nodejs",
    category: COMMON.categories.backend,
    description: "High-speed async JavaScript runtime.",
    badge: "JS Runtime",
    dotColor: "#22C55E",
    accentColor: "#339933",
    learnMoreUrl: "https://nodejs.org",
  },
  {
    name: "Nest.js",
    slug: "nestjs",
    category: COMMON.categories.backend,
    description: "Enterprise modular backend engine.",
    badge: "Framework",
    dotColor: "#E11D48",
    accentColor: "#E0234E",
    learnMoreUrl: "https://nestjs.com",
  },
  {
    name: COMMON.technology.python,
    slug: "python",
    category: COMMON.categories.backend,
    description: "Powerful backend for APIs & AI.",
    badge: "Language",
    dotColor: "#3B82F6",
    accentColor: "#3776AB",
    learnMoreUrl: "https://www.python.org",
  },
  {
    name: COMMON.technology.fastapi,
    slug: "fastapi",
    category: COMMON.categories.backend,
    description: "Blazing-fast async Python APIs.",
    badge: "API Framework",
    dotColor: "#06B6D4",
    accentColor: "#05998B",
    learnMoreUrl: "https://fastapi.tiangolo.com",
  },
  {
    name: "GraphQL",
    slug: "graphql",
    category: COMMON.categories.backend,
    description: "Precise data query layer for APIs.",
    badge: "Query API",
    dotColor: "#EC4899",
    accentColor: "#E10098",
    learnMoreUrl: "https://graphql.org",
  },

  // ── Database & Cloud (9) ─────────────────────────────────────────────────────
  {
    name: COMMON.technology.postgres,
    slug: "postgresql",
    category: COMMON.categories.database,
    description: "Rock-solid database at any scale.",
    badge: "Relational DB",
    dotColor: "#3B82F6",
    accentColor: "#4169E1",
    learnMoreUrl: "https://www.postgresql.org",
  },
  {
    name: COMMON.technology.supabase,
    slug: "supabase",
    category: COMMON.categories.database,
    description: "Open-source Postgres & auth backend.",
    badge: "BaaS",
    dotColor: "#10B981",
    accentColor: "#3ECF8E",
    learnMoreUrl: "https://supabase.com",
  },
  {
    name: "MongoDB",
    slug: "mongodb",
    category: COMMON.categories.database,
    description: "Flexible document store at scale.",
    badge: "NoSQL DB",
    dotColor: "#22C55E",
    accentColor: "#47A248",
    learnMoreUrl: "https://www.mongodb.com",
  },
  {
    name: COMMON.technology.redis,
    slug: "redis",
    category: COMMON.categories.database,
    description: "Ultra-fast cache & in-memory store.",
    badge: "Cache",
    dotColor: "#EF4444",
    accentColor: "#FF4438",
    learnMoreUrl: "https://redis.io",
  },
  {
    name: COMMON.technology.prisma,
    slug: "prisma",
    category: COMMON.categories.database,
    description: "Next-gen type-safe database ORM.",
    badge: "ORM",
    dotColor: "#6366F1",
    accentColor: "#2D3748",
    learnMoreUrl: "https://www.prisma.io",
    invertInDark: true,
  },
  {
    name: COMMON.technology.aws,
    slug: "aws",
    category: COMMON.categories.database,
    description: "Resilient global cloud infrastructure.",
    badge: "Cloud Infra",
    dotColor: "#F59E0B",
    accentColor: "#FF9900",
    learnMoreUrl: "https://aws.amazon.com",
  },
  {
    name: COMMON.technology.docker,
    slug: "docker",
    category: COMMON.categories.database,
    description: "Standardized container deployment.",
    badge: "Containers",
    dotColor: "#0284C7",
    accentColor: "#2496ED",
    learnMoreUrl: "https://www.docker.com",
  },
  {
    name: COMMON.technology.vercel,
    slug: "vercel",
    category: COMMON.categories.database,
    description: "Edge cloud platform for web apps.",
    badge: "Deployment",
    dotColor: "#111827",
    accentColor: "#000000",
    learnMoreUrl: "https://vercel.com",
    invertInDark: true,
  },
  {
    name: COMMON.technology.cloudflare,
    slug: "cloudflare",
    category: COMMON.categories.database,
    description: "Global edge CDN & web security.",
    badge: "Edge CDN",
    dotColor: "#F97316",
    accentColor: "#F6821F",
    learnMoreUrl: "https://www.cloudflare.com",
  },


  // ── Design & Tools (11) ──────────────────────────────────────────────────────
  {
    name: COMMON.technology.figma,
    slug: "figma",
    category: COMMON.categories.design,
    description: "Collaborative UI/UX design system.",
    badge: COMMON.labels.uiUxDesign,
    dotColor: "#F43F5E",
    accentColor: "#F24E1E",
    learnMoreUrl: "https://www.figma.com",
  },
  {
    name: COMMON.technology.photoshop,
    slug: "photoshop",
    category: COMMON.categories.design,
    description: "Industry-standard creative graphics.",
    badge: "Graphics",
    dotColor: "#0284C7",
    accentColor: "#31A8FF",
    learnMoreUrl: "https://www.adobe.com/products/photoshop.html",
  },
  {
    name: COMMON.technology.illustrator,
    slug: "illustrator",
    category: COMMON.categories.design,
    description: "Precision vector art & brand assets.",
    badge: "Vector Art",
    dotColor: "#F97316",
    accentColor: "#FF9A00",
    learnMoreUrl: "https://www.adobe.com/products/illustrator.html",
  },
  {
    name: COMMON.technology.canva,
    slug: "canva",
    category: COMMON.categories.design,
    description: "Fast visual assets & social design.",
    badge: "Graphics",
    dotColor: "#06B6D4",
    accentColor: "#00C4CC",
    learnMoreUrl: "https://www.canva.com",
  },
  {
    name: "Antigravity",
    slug: "antigravity",
    category: COMMON.categories.design,
    description: "Next-gen agentic AI coding IDE.",
    badge: "Agentic IDE",
    dotColor: "#3B82F6",
    accentColor: "#3186FF",
    learnMoreUrl: "https://antigravity.google",
  },
  {
    name: "Git",
    slug: "git",
    category: COMMON.categories.design,
    description: "Distributed version control for teams.",
    badge: "Version Control",
    dotColor: "#F43F5E",
    accentColor: "#F05032",
    learnMoreUrl: "https://git-scm.com",
  },
  {
    name: "VS Code",
    slug: "vscode",
    category: COMMON.categories.design,
    description: "Lightweight extensible code editor.",
    badge: "Code Editor",
    dotColor: "#0284C7",
    accentColor: "#007ACC",
    learnMoreUrl: "https://code.visualstudio.com",
  },
  {
    name: "Postman",
    slug: "postman",
    category: COMMON.categories.design,
    description: "Collaborative API testing & docs.",
    badge: "API Platform",
    dotColor: "#F97316",
    accentColor: "#FF6C37",
    learnMoreUrl: "https://www.postman.com",
  },
  {
    name: COMMON.technology.stripe,
    slug: "stripe",
    category: COMMON.categories.design,
    description: "Global online payments & billing.",
    badge: "Payments",
    dotColor: "#6366F1",
    accentColor: "#635BFF",
    learnMoreUrl: "https://stripe.com",
  },
  {
    name: COMMON.technology.razorpay,
    slug: "razorpay",
    category: COMMON.categories.design,
    description: "Seamless digital checkout & banking.",
    badge: "Payments",
    dotColor: "#0284C7",
    accentColor: "#2B84EA",
    learnMoreUrl: "https://razorpay.com",
  },
  {
    name: "GitHub Actions",
    slug: "githubactions",
    category: COMMON.categories.design,
    description: "Automated CI/CD pipelines & builds.",
    badge: "CI/CD",
    dotColor: "#2563EB",
    accentColor: "#2088FF",
    learnMoreUrl: "https://github.com/features/actions",
  },
];

export const TECH_STACK_SECTION_CONTENT = {
  eyebrow: "Our tech stack",
  title: "Modern tools.",
  highlightedText: COMMON.labels.realResults,
  descriptionLine1: "Battle-tested tools chosen for reliability, performance, and long-term maintainability —",
  descriptionLine2: "not just trends.",
  footerNote: "We choose tools that fit your project — not the other way around.",
};

// service-technologies
export interface ServiceTechDetails {
  name: string;
  category: string;
  invertDark?: boolean;
  imageSlug?: string;
}

export const TECH_DETAILS = {
  // Core Frameworks & Languages
  nextjs: { name: COMMON.technology.nextjs, category: "core", invertDark: true },
  react: { name: COMMON.technology.react, category: "core" },
  typescript: { name: COMMON.technology.typescript, category: "core" },
  tailwindcss: { name: COMMON.technology.tailwind, category: "core" },
  reactnative: { name: COMMON.technology.reactNative, category: "core" },
  flutter: { name: COMMON.technology.flutter, category: "core" },
  expo: { name: COMMON.technology.expo, category: "core", invertDark: true },
  swift: { name: COMMON.technology.swift, category: "core" },
  kotlin: { name: COMMON.technology.kotlin, category: "core" },
  
  // Backend & APIs
  nodejs: { name: COMMON.technology.nodejs, category: "backend" },
  nestjs: { name: "NestJS", category: "backend" },
  expressjs: { name: "Express.js", category: "backend" },
  restapi: { name: "REST API", category: "backend" },
  prisma: { name: COMMON.technology.prismaOrm, category: "backend", invertDark: true },

  // Database
  postgresql: { name: COMMON.technology.postgres, category: "database" },
  supabase: { name: COMMON.technology.supabase, category: "database" },

  // Authentication & Security
  supabaseauth: { name: "Supabase Auth", category: "auth", imageSlug: "supabase" },
  oauth: { name: "OAuth / Google Sign-In", category: "auth", imageSlug: "oauth_iqrb3x" },
  jwt: { name: "JWT", category: "auth", imageSlug: "jwt_lp0clz" },

  // Deployment & Infrastructure
  hostingervps: { name: "Hostinger VPS", category: "deployment", imageSlug: "hostingervps_xdifsu" },

  // Hosting
  vercel: { name: COMMON.technology.vercel, category: "hosting", invertDark: true },

  // Domain
  godaddy: { name: "GoDaddy", category: "domain", imageSlug: "godaddy_uege9k" },
  hostinger: { name: "Hostinger", category: "domain", imageSlug: "hostinger_znba5r" },

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
  openai: { name: "OpenAI", category: "ai", invertDark: true },
  anthropic: { name: "Anthropic", category: "ai" },
  langchain: { name: "LangChain", category: "ai" },

  // Design & Prototyping
  figma: { name: COMMON.technology.figma, category: "design" },
  illustrator: { name: COMMON.technology.illustrator, category: "design" },
  photoshop: { name: COMMON.technology.photoshop, category: "design" },
  canva: { name: COMMON.technology.canva, category: "design" },
} satisfies Record<string, ServiceTechDetails>;

export type ServiceTechSlug = keyof typeof TECH_DETAILS;

// tech-stack
export const TECH_CATEGORY_TABS_COPY = {
  tools: "Tools",
  weLove: "we love",
  technologyCategories: "Technology categories",
} as const;

export const TECH_VALUE_STRIP_COPY = {
  reliable: "Reliable",
  battleTestedInRealProjects: "Battle-tested in real projects",
  performant: COMMON.labels.performant,
  optimizedForSpeed: "Optimized for speed",
  scalable: "Scalable",
  growsWithYourBusiness: "Grows with your business",
  futureReady: "Future-ready",
  alwaysEvolvingWithBestTools: "Always evolving with best tools",
} as const;

// sections
export const TECH_STACK_CARD_COPY = {
  logoAlt: (name: string) => `${name} logo`,
} as const;

export const TECH_STACK_INTERACTIVE_COPY = {
  technologiesLabel: (category: string) => `${category} technologies`,
} as const;
