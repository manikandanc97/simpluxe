import { COMMON } from "./common";
import { SITE } from "./site";

// about
export interface AboutMetric {
  value: string;
  label: string;
  sub: string;
}

export interface AboutPrinciple {
  number: string;
  tag: string;
  title: string;
  summary: string;
  description: string;
  deliverable: string;
}

export interface AboutComparison {
  aspect: string;
  traditional: string;
  simpluxe: string;
}

export const METRICS: AboutMetric[] = [
  {
    value: "100%",
    label: "Senior Engineering",
    sub: "Direct collaboration with builders, zero junior outsourcing",
  },
  {
    value: "< 1.2s",
    label: "Fast Load Speeds",
    sub: "Lighthouse 95+ performance on production networks",
  },
  {
    value: "0",
    label: "Vendor Lock-in",
    sub: "You own 100% of all code, assets, and infrastructure",
  },
  {
    value: SITE.responseTime || COMMON.labels.direct,
    label: "Engineer Response",
    sub: "Direct communication with engineers who know your codebase",
  },
];

export const PRINCIPLES: AboutPrinciple[] = [
  {
    number: "01",
    tag: "CLARITY",
    title: "Clarity over cleverness",
    summary: "Code should be easy to read. Interfaces should be effortless to use.",
    description:
      "We don't build things to show off technical trivia; we build them to solve real customer and business problems efficiently. If a concept cannot be explained plainly, it is too complex. Simplicity creates resilience.",
    deliverable: "Readable, well-documented architecture that any senior engineer can step into.",
  },
  {
    number: "02",
    tag: "PURPOSE",
    title: "Purpose-driven scope",
    summary: "Every single feature must earn its place in the production build.",
    description:
      "If a proposed feature doesn't serve the primary reason someone uses the product, it gets cut. This discipline prevents scope bloat, accelerates time-to-market, and protects you from endless maintenance debt.",
    deliverable: "Laser-focused releases that solve customer needs and drive immediate ROI.",
  },
  {
    number: "03",
    tag: "DETAIL",
    title: "Difference is in the details",
    summary: "Simplicity never means generic, uninspired, or boring.",
    description:
      "By stripping away visual clutter and extraneous controls, we create space for refined typography, fluid motion physics, sub-second performance, and a distinctive brand presence that commands respect.",
    deliverable: "Bespoke digital experiences that stand out clearly from generic templates.",
  },
];

export const COMPARISONS: AboutComparison[] = [
  {
    aspect: "Engineering Team",
    traditional: "Layers of account managers, junior temps, and outsourced developers.",
    simpluxe: "Direct daily collaboration with the senior software engineers crafting your system.",
  },
  {
    aspect: "Technology Foundation",
    traditional: "Bloated off-the-shelf WordPress themes, brittle plugins, and slow templates.",
    simpluxe: "Custom Next.js, TypeScript, React Native, and high-performance cloud backends.",
  },
  {
    aspect: "Delivery Velocity",
    traditional: "Months of bureaucratic 'discovery' decks before touching working code.",
    simpluxe: "Rapid 1-2 week release sprints with live staging previews and continuous feedback.",
  },
  {
    aspect: "Code Ownership & IP",
    traditional: "Proprietary lock-in, licensing dependencies, and captive hosting fees.",
    simpluxe: "100% intellectual property ownership transferred to your GitHub repository.",
  },
];

export const ABOUT_SECTION_CONTENT = {
  eyebrow: "Our Ethos & Origin",
  title: "Engineered for",
  highlightedText: "High-Stakes Scale.",
  description: "We are a senior-only software development studio partnering directly with founders, CEOs, and engineering leaders who demand architectural rigor over agency overhead.",
  globalBase: "Global Delivery Base",
  remoteEngineering: "Remote Engineering Worldwide",
  pillar1Title: "Direct partnership with principal engineers — zero junior delegation",
  pillar1Desc: "When you collaborate with Simpluxe, you don't get passed through account managers, junior coordinators, or fragmented offshore tiers. Every architecture decision, database schema, and interface interaction is authored and reviewed by battle-tested engineers.",
  pillar2Title: "Architectural Longevity",
  pillar2Desc: "Zero framework bloat. We build maintainable Next.js 16 and React systems with strict TypeScript typing that your internal team can inherit effortlessly.",
  pillar3Title: "100% IP & Code Ownership",
  pillar3Desc: "You own every line of code, design file, and deployment credential from Day 1. Full Git repository transfer with zero recurring vendor lock-in.",
};

export const ABOUT_COMPARISON_CONTENT = {
  eyebrow: "Comparative Standards",
  title: "Why Founders Choose",
  highlightedText: "Simpluxe.",
  description: "A stark, transparent comparison between old-school agency bureaucracy and our streamlined senior software model.",
  evaluationMetric: "Evaluation Metric",
  traditionalAgencies: "Traditional Agencies",
  simpluxeModel: "The Simpluxe Studio Model",
  recommendedBadge: "RECOMMENDED",
};

export const ABOUT_PRINCIPLES_CONTENT = {
  eyebrow: "Guiding Philosophy",
  title: "The Three Core",
  highlightedText: "Principles.",
  description: "The core tenets that guide every architectural decision, interface, and line of code we ship.",
};

export const ABOUT_TECH_STACK_CONTENT = {
  eyebrow: "Engineering Stack",
  titleLine1: "Modern technologies. ",
  highlightedText: "Zero legacy baggage.",
  description: "We intentionally curate our stack to maximize runtime velocity, developer joy, and long-term codebase maintainability.",
};

export const STACK_CATEGORIES = [
  {
    title: "Frontend Engineering",
    badge: "Sub-Second UX",
    technologies: [
      { name: COMMON.technology.nextjs16, desc: "App Router & Server Components" },
      { name: "React 19", desc: "Concurrent rendering & Actions" },
      { name: "TypeScript Strict", desc: "Type-safe robust logic" },
      { name: COMMON.technology.tailwind, desc: "Zero-runtime utility styling" },
      { name: "Motion React", desc: "Fluid 60fps micro-animations" },
    ],
  },
  {
    title: "Backend & Cloud Edge",
    badge: "Low Latency",
    technologies: [
      { name: "FastAPI / Python", desc: "High-throughput asynchronous APIs" },
      { name: "Node.js & Bun", desc: "Modern JavaScript backend runtimes" },
      { name: "Cloudflare Edge", desc: "Global CDN caching & Workers" },
      { name: "Serverless Compute", desc: "Elastic autoscaling architecture" },
    ],
  },
  {
    title: "Data & Security",
    badge: "Enterprise Grade",
    technologies: [
      { name: COMMON.technology.postgres, desc: "Relational database reliability" },
      { name: COMMON.technology.supabase, desc: "Realtime data, auth & storage" },
      { name: COMMON.technology.prismaOrm, desc: "Type-safe schema migrations" },
      { name: COMMON.technology.redis, desc: "Sub-millisecond memory caching" },
    ],
  },
  {
    title: "Mobile Products",
    badge: COMMON.labels.iosAndroid,
    technologies: [
      { name: COMMON.technology.reactNative, desc: "Cross-platform native performance" },
      { name: "Expo EAS", desc: "Automated cloud builds & OTA updates" },
      { name: COMMON.labels.offlineSync, desc: "Local database caching" },
      { name: "Native Biometrics", desc: "FaceID & fingerprint security" },
    ],
  },
];

// about
export const ABOUT_HERO_COPY = {
  home: COMMON.pages.home,
  symbol: COMMON.symbols.slash,
  about: COMMON.pages.about,
  engineeringExcellenceShapedAround: "Engineering excellence shaped around",
  yourVision: "your vision.",
  weAreADedicatedSoftwareStudio: "We are a dedicated software studio built on the conviction that digital products should be clear, lightning-fast, and engineered to solve real business challenges without bureaucratic overhead.",
  highCraft: "High Craft",
  pixelPerfectExecution: "Pixel-perfect execution",
  zeroBloat: "Zero Bloat",
  leanRapidArchitecture: "Lean, rapid architecture",
  productionReady: COMMON.labels.productionReady,
  scaleWithConfidence: "Scale with confidence",
  nextJs16Native: "Next.js 16 Native",
  turbopackArchitecture: "Turbopack Architecture",
  fullStack: "Full Stack",
  symbol2: COMMON.symbols.bullet,
  modernTooling: "Modern Tooling",
  globalDelivery: "Global Delivery",
  typescript: COMMON.technology.typescript,
  text100TypeSafe: "100% Type-Safe",
  systemDesign: "System Design",
  scalablePatterns: "Scalable Patterns",
  subSecondSpeed: COMMON.labels.subSecondSpeed,
  edgeOptimized: "Edge Optimized",
  text999Uptime: "99.9% Uptime",
  enterpriseSecure: "Enterprise Secure",
  engineeringExcellenceShapedAroundYourVision: "Engineering excellence shaped around your vision",
} as const;

export const ABOUT_METRICS_COPY = {
  verified: "VERIFIED",
} as const;

// pages
export const ABOUT_VIEW_COPY = {
  symbol: " • ",
} as const;
