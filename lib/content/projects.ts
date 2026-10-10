import { COMMON } from "./common";
import { Project, SelectedWorkSectionContent } from "@/types/project";
import React from "react";
import { NextJsIcon, TailwindIcon, MotionIcon, NodeJsIcon, WhatsAppIcon, PrismaIcon, PostgresIcon, SupabaseIcon, ShopifyIcon, ReactIcon } from "@/components/work/tech-icons";

const CONSTRUCTION_CATEGORY = "ARCHITECTURE & CONSTRUCTION";

// projects
const IMAGE_BASE_URL = "https://res.cloudinary.com/drdl4pdnx/image/upload/f_auto,q_auto/simpluxe/projects";

const LOGO_BASE_URL = "https://res.cloudinary.com/drdl4pdnx/image/upload/w_128,c_limit,f_auto,q_auto/simpluxe/projects/logo";

const baseProject = {
  year: "2025",
};

export const PROJECTS: Project[] = [
  // ─── 01. WEBSITES (Live Client Projects) ───────────────────────────────────
  
  {
    ...baseProject,
    id: "proj-valparai",
    number: "01",
    name: "Valparai Wanderer Tours",
    domain: "valparaiwanderertours.com",
    serviceType: COMMON.serviceNames.websites,
    category: "Travel & Tourism · Tour Booking Platform",
    url: "https://valparaiwanderertours.com",
    desktopImage: `${IMAGE_BASE_URL}/website/valparaiwanderertours_pbcgyi.png`,
    mobileImage: `${IMAGE_BASE_URL}/website/valparai-mobile_gjwd7r.jpg`,
    logo: `${LOGO_BASE_URL}/valparai_rwsldt.png`,
    result: "+ 3600% Month 1 Bookings",
    stack: [COMMON.technology.nextjs, COMMON.technology.tailwind, COMMON.technology.typescript],
  },
  {
    ...baseProject,
    id: "proj-grn",
    number: "02",
    name: "GRN Construction",
    domain: "grnconstruction.in",
    serviceType: COMMON.serviceNames.websites,
    category: "Architecture & Construction · Brand Website",
    url: "https://grnconstruction.in",
    desktopImage: `${IMAGE_BASE_URL}/website/grn_sddfdk.png`,
    mobileImage: `${IMAGE_BASE_URL}/website/grn-mobile_tmmhdr.jpg`,
    logo: `${LOGO_BASE_URL}/grn_caw9tl.jpg`,
    result: "#1 Google SEO Ranking",
    stack: [COMMON.technology.nextjs, COMMON.technology.tailwind, COMMON.technology.typescript],
  },
  {
    ...baseProject,
    id: "proj-viha",
    number: "03",
    name: "Viha Handicrafts",
    domain: "vihahandicrafts.com",
    serviceType: COMMON.serviceNames.websites,
    category: "E-Commerce & Heritage · Artisan Showcase",
    url: "https://vihahandicrafts.com",
    desktopImage: `${IMAGE_BASE_URL}/website/vihahandicrafts_jmxorj.png`,
    mobileImage: `${IMAGE_BASE_URL}/website/viha-mobile_ubkrpm.jpg`,
    logo: `${LOGO_BASE_URL}/viha_ewc0c7.png`,
    result: "Pan-India Orders",
    stack: [COMMON.technology.nextjs, COMMON.technology.tailwind, COMMON.technology.typescript],
  },
  {
    ...baseProject,
    id: "proj-vizha",
    number: "04",
    name: "Vizha Stories",
    domain: "vizhastories.in",
    serviceType: COMMON.serviceNames.websites,
    category: "Event Management · Premium Planners",
    url: "https://vizhastories.in",
    desktopImage: `${IMAGE_BASE_URL}/website/vizhastories_vrslce.png`,
    mobileImage: `${IMAGE_BASE_URL}/website/vizha-mobile_vrak8f.jpg`,
    logo: `${LOGO_BASE_URL}/Logo_Vizha_p9xiij.png`,
    result: "Trusted by 500+ Clients",
    stack: [COMMON.technology.nextjs, COMMON.technology.tailwind, COMMON.technology.typescript],
  },

  // ─── 02. WEB APPLICATIONS ──────────────────────────────────────────────────
  {
    ...baseProject,
    id: "proj-clixprocrm",
    number: "05",
    name: "ClixPro CRM",
    domain: "clixprocrm.vercel.app",
    serviceType: COMMON.serviceNames.webAppsFilter,
    category: "Customer Relationship Management",
    url: "https://clixprocrm.vercel.app/",
    desktopImage: `${IMAGE_BASE_URL}/clixpro_crm_desktop`,
    mobileImage: `${IMAGE_BASE_URL}/clixpro_crm_mobile`,
    logo: `${LOGO_BASE_URL}/clixpro`,
    result: COMMON.status.inProgress,
    stack: [COMMON.technology.nextjs, COMMON.technology.prisma, COMMON.technology.postgres],
  },

  // ─── 03. MOBILE APPS ───────────────────────────────────────────────────────
  {
    ...baseProject,
    id: "proj-grn-app",
    number: "06",
    name: "GRN Construction App",
    domain: "grnconstruction.in",
    serviceType: COMMON.serviceNames.mobileAppsFilter,
    category: "Architecture & Construction Mobile App",
    url: "https://grnconstruction.in",
    desktopImage: `${IMAGE_BASE_URL}/grn_app_desktop`,
    mobileImage: `${IMAGE_BASE_URL}/grn_app_mobile`,
    logo: `${LOGO_BASE_URL}/grn`,
    result: COMMON.status.comingSoon,
    stack: [COMMON.technology.reactNative, COMMON.technology.supabase, COMMON.labels.offlineSync],
  },
];

export const SELECTED_WORK_CONTENT: SelectedWorkSectionContent = {
  eyebrow: "Our Work",
  title: "Selected",
  highlightedText: COMMON.labels.workHighlight,
  description: "Live client systems and digital products engineered for measurable scale.",
  archiveLinkText: "View complete portfolio archive",
  buildsTextSuffix: "builds",
  liveClientSiteText: "Live Client Site",
};

export const WORK_ENGINEERING_CONTENT = {
  eyebrow: "Engineering Standards",
  title: "How We Ensure",
  highlightedText: "Every Project Succeeds.",
  description: "Every website, web app, and platform we ship adheres to rigorous engineering benchmarks before touching a production domain.",
};

export const WORK_ENGINEERING_STANDARDS = [
  {
    iconName: "GaugeIcon",
    iconColor: "text-primary",
    iconBg: "bg-rose-50 border-rose-100",
    title: "Sub-Second Performance",
    metric: "< 0.8s TTFB",
    description: "We build with zero unnecessary JavaScript bloat. Every asset is optimized, compressed, and served globally through low-latency edge networks.",
    deliverables: ["99+ Google Lighthouse score", "Core Web Vitals certified", "Sub-second edge caching"],
  },
  {
    iconName: "CodeIcon",
    iconColor: "text-chart-2",
    iconBg: "bg-purple-50 border-purple-100",
    title: "Bespoke Architecture",
    metric: "100% Tailored",
    description: "No generic WordPress themes, no off-the-shelf site builder wrappers. Custom-engineered codebases designed specifically for your business workflow.",
    deliverables: ["Next.js 16 & React 19", "Strict TypeScript typing", "Clean modular directory architecture"],
  },
  {
    iconName: "ShieldCheckIcon",
    iconColor: "text-primary",
    iconBg: "bg-pink-50 border-pink-100",
    title: "Enterprise Security",
    metric: "Bank-Grade",
    description: "Zero-trust security practices, encrypted authentication, robust database schema validations, and continuous vulnerability scanning.",
    deliverables: ["Role-based access controls", "End-to-end SSL/TLS enforcement", "Automated database backups"],
  },
  {
    iconName: "SparklesIcon",
    iconColor: "text-emerald-600",
    iconBg: "bg-emerald-50 border-emerald-100",
    title: COMMON.labels.fullCodeOwnership,
    metric: "0% Lock-in",
    description: "You retain complete intellectual property rights. On launch day, full GitHub repository ownership and deployment credentials transfer directly to you.",
    deliverables: ["Full Git repository transfer", "Comprehensive architecture documentation", "Zero recurring licensing fees"],
  },
];

export const PROJECT_FILTER_TABS = [COMMON.serviceNames.websites, COMMON.serviceNames.webAppsFilter, COMMON.serviceNames.mobileAppsFilter] as const;

// project-details
interface MetricItem {
  value: string;
  label: string;
  iconType: "chart" | "users" | "star" | "shield";
}

interface TechItem {
  name: string;
  icon: React.FC<{ className?: string }>;
}

export interface EnhancedProjectDetails {
  kicker: string;
  heroHeadline: string;
  heroSubheadline: string;
  gallery: string[];
  metrics: MetricItem[];
  overview: string;
  techStack: TechItem[];
  duration: string;
}

const projectNames = Object.fromEntries(PROJECTS.map((project) => [project.id, project.name]));

export const PROJECT_ENHANCEMENTS: Record<string, EnhancedProjectDetails> = {
  "proj-valparai": {
    kicker: "TRAVEL & TOURISM",
    heroHeadline: projectNames["proj-valparai"],
    heroSubheadline:
      "An experiential travel & tour booking platform for Valparai tour packages, misty Western Ghats jungle safaris, and tea estate explorations.",
    gallery: [
      "https://res.cloudinary.com/drdl4pdnx/image/upload/f_auto,q_auto/simpluxe/projects/valparai",
    ],
    metrics: [
      { value: "+3600%", label: "Month 1 Bookings", iconType: "chart" },
      { value: "10K+", label: "Happy Travelers", iconType: "users" },
      { value: "4.9", label: "Traveler Rating", iconType: "star" },
      { value: "100%", label: "Secure & Reliable", iconType: "shield" },
    ],
    overview:
      "A complete travel and tour booking experience designed for Valparai, connecting travelers with curated tour packages, local guides, and authentic experiences. Features live WhatsApp-first booking, interactive route showcases, and a seamless mobile experience.",
    techStack: [
      { name: COMMON.technology.nextjs, icon: NextJsIcon },
      { name: COMMON.technology.tailwind, icon: TailwindIcon },
      { name: "motion/react", icon: MotionIcon },
      { name: COMMON.technology.nodejs, icon: NodeJsIcon },
      { name: COMMON.technology.whatsappApi, icon: WhatsAppIcon },
    ],
    duration: "2 min",
  },
  "proj-grn": {
    kicker: CONSTRUCTION_CATEGORY,
    heroHeadline: projectNames["proj-grn"],
    heroSubheadline:
      "Brand website with architectural project portfolio, milestone estimation, and lead capture for high-ticket residential & commercial builds.",
    gallery: [
      "https://res.cloudinary.com/drdl4pdnx/image/upload/f_auto,q_auto/simpluxe/projects/grn",
    ],
    metrics: [
      { value: "#1 Rank", label: "Google SEO Ranking", iconType: "chart" },
      { value: "100+", label: COMMON.labels.projectsDelivered, iconType: "users" },
      { value: "4.9â˜…", label: "Client Rating", iconType: "star" },
      { value: "100%", label: "Turnkey Quality", iconType: "shield" },
    ],
    overview:
      "An established construction firm with 10+ years of civil engineering excellence. Features floating glassmorphism navigation, architectural portfolio gallery with category filters, transparent pricing tiers, and local SEO schema.",
    techStack: [
      { name: COMMON.technology.nextjs, icon: NextJsIcon },
      { name: COMMON.technology.tailwind, icon: TailwindIcon },
      { name: "motion/react", icon: MotionIcon },
      { name: COMMON.technology.supabase, icon: SupabaseIcon },
      { name: COMMON.technology.nodejs, icon: NodeJsIcon },
    ],
    duration: "1.5 min",
  },
  "proj-viha": {
    kicker: "E-COMMERCE & HERITAGE",
    heroHeadline: projectNames["proj-viha"],
    heroSubheadline:
      "Authentic generational Chettinad heritage e-commerce storefront with brass idol craftsmanship, Tanjore gold foil art, and sacred wooden artifacts.",
    gallery: [
      "https://res.cloudinary.com/drdl4pdnx/image/upload/f_auto,q_auto/simpluxe/projects/viha",
    ],
    metrics: [
      { value: "Pan-India", label: "Order Reach", iconType: "chart" },
      { value: "500+", label: "Artisan Artifacts", iconType: "users" },
      { value: "4.9â˜…", label: "Customer Rating", iconType: "star" },
      { value: "100%", label: "Authentic Brass", iconType: "shield" },
    ],
    overview:
      "An editorial heritage e-commerce storefront with warm ivory & terracotta aesthetics, categorized artisan collections, Vastu placement guidance, and direct WhatsApp consultations.",
    techStack: [
      { name: COMMON.technology.nextjs, icon: NextJsIcon },
      { name: "Shopify", icon: ShopifyIcon },
      { name: COMMON.technology.tailwind, icon: TailwindIcon },
      { name: COMMON.technology.whatsappApi, icon: WhatsAppIcon },
    ],
    duration: "2.5 min",
  },
  "proj-clixprocrm": {
    kicker: "CUSTOMER RELATIONSHIP MANAGEMENT",
    heroHeadline: projectNames["proj-clixprocrm"],
    heroSubheadline:
      "Universal CRM for Indian SMBs with AI-driven automation, keyboard-first navigation, and real-time sales pipeline tracking.",
    gallery: ["https://res.cloudinary.com/drdl4pdnx/image/upload/f_auto,q_auto/simpluxe/projects/clixpro_crm"],
    metrics: [
      { value: "10x", label: "Workflow Velocity", iconType: "chart" },
      { value: "5K+", label: "Active Pipelines", iconType: "users" },
      { value: "4.8â˜…", label: "User Rating", iconType: "star" },
      { value: "99.9%", label: "Uptime SLA", iconType: "shield" },
    ],
    overview:
      "A modern, unified CRM dashboard focused on speed, keyboard accessibility, and intelligent pipeline management for high-velocity sales teams.",
    techStack: [
      { name: COMMON.technology.nextjs, icon: NextJsIcon },
      { name: COMMON.technology.prisma, icon: PrismaIcon },
      { name: COMMON.technology.postgres, icon: PostgresIcon },
      { name: COMMON.technology.tailwind, icon: TailwindIcon },
    ],
    duration: "3 min",
  },
  "proj-grn-app": {
    kicker: CONSTRUCTION_CATEGORY,
    heroHeadline: projectNames["proj-grn-app"],
    heroSubheadline:
      "Field management mobile application for construction teams, live milestone tracking, and daily photo progress feeds.",
    gallery: ["https://res.cloudinary.com/drdl4pdnx/image/upload/f_auto,q_auto/simpluxe/projects/grn_app"],
    metrics: [
      { value: "Real-Time", label: "Milestone Sync", iconType: "chart" },
      { value: "1K+", label: "Daily Site Updates", iconType: "users" },
      { value: "4.8â˜…", label: "Mobile App Rating", iconType: "star" },
      { value: "100%", label: "Offline Sync Support", iconType: "shield" },
    ],
    overview:
      "A dedicated mobile app with live timeline tracking, daily photo uploads from the site, and instant communication between homeowners, site engineers, and project managers.",
    techStack: [
      { name: COMMON.technology.reactNative, icon: ReactIcon },
      { name: COMMON.technology.supabase, icon: SupabaseIcon },
      { name: COMMON.technology.tailwind, icon: TailwindIcon },
      { name: COMMON.technology.nodejs, icon: NodeJsIcon },
    ],
    duration: "2 min",
  },
};

export const FILTER_SERVICES = [
  { id: "websites", label: COMMON.serviceNames.websites, icon: "globe", serviceType: COMMON.serviceNames.websites },
  { id: "web-apps", label: COMMON.serviceNames.webAppsFilter, icon: "grid", serviceType: COMMON.serviceNames.webAppsFilter },
  { id: "mobile-apps", label: COMMON.serviceNames.mobileAppsFilter, icon: "smartphone", serviceType: COMMON.serviceNames.mobileAppsFilter },
] as const;

// selected-work
export const BROWSER_MOCKUP_COPY = {
  screenshotAlt: (name: string) => `${name} Screenshot`,
  visitTitle: (domain: string) => `Visit ${domain}`,
  mobileView: "Mobile view",
  mobileView2: "Mobile View",
  tabletView: "Tablet view",
  tabletView2: "Tablet View",
  desktopView: "Desktop view",
  desktopView2: "Desktop View",
  screenshot: " Screenshot",
  buildingInStealth: "Building in Stealth",
  this: "This ",
  isCurrentlyUnderActiveDevelopmentIn: " is currently under active development in our lab.",
  previewComingSoon: "Preview Coming Soon",
} as const;

export const PROJECT_BADGE_COPY = {
  text35xBookingsGrowth: "3.5x Bookings Growth",
  text5xOrganicTrafficGrowth: "5x Organic Traffic Growth",
  text10kMonthlyOrders: "10k+ Monthly Orders",
  workInProgress: COMMON.status.inProgress,
  comingSoon: COMMON.status.comingSoon,
} as const;

export const PROJECT_ITEM_COPY = {
  logoAlt: (name: string) => `${name} Logo`,
  previewLabel: (name: string) => `Preview ${name}`,
} as const;

// work
export const WORK_CONTROLS_COPY = {
  searchProjects: "Search projects...",
  searchProjects2: "Search projects",
  clearSearch: "Clear search",
  latestFirst: "Latest First",
  oldestFirst: "Oldest First",
  alphabetical: "Alphabetical",
} as const;

export const WORK_HERO_COPY = {
  home: COMMON.pages.home,
  symbol: COMMON.symbols.slash,
  work: COMMON.pages.work,
  engineeredDigitalProductsFor: "Engineered digital products for",
  modernBusinesses: "modern businesses.",
  fromHighConversionWebsitesToComplex: "From high-conversion websites to complex cloud platforms and mobile applications, explore our portfolio of bespoke software built for speed, scale, and longevity.",
  text100Bespoke: "100% Bespoke",
  zeroThemeBloat: "Zero theme bloat",
  subSecondSpeed: "Sub-second Speed",
  optimizedEdgeDelivery: "Optimized edge delivery",
  productionReady: COMMON.labels.productionReady,
  realClientOutcomes: "Real client outcomes",
  nextJs16: COMMON.technology.nextjs16,
  cleanArchitecture: COMMON.labels.cleanArchitecture,
  production: "Production",
  symbol2: COMMON.symbols.bullet,
  text100Handover: "100% Handover",
  bespoke: "Bespoke",
  typescript: COMMON.technology.typescriptTag,
  realGrowth: "Real Growth",
  text3600Bookings: "+3600% Bookings",
  designSystems: COMMON.labels.designSystems,
  tailwindMotion: "Tailwind & Motion",
  scalableCloud: COMMON.labels.scalableCloud,
  mobileWeb: COMMON.labels.mobileWeb,
  iosAndroidReact: COMMON.labels.mobilePlatforms,
  fastapi: COMMON.technology.fastapiTag,
  subSecondSpeed2: COMMON.labels.subSecondSpeed,
  secureScalable: COMMON.labels.secureScalable,
  symbol3: COMMON.symbols.sparkle,
  symbol4: COMMON.symbols.hollowSparkle,
  engineeredDigitalProductsForModernBusinesses: "Engineered digital products for modern businesses",
} as const;

export const WORK_PROJECT_DETAILS_COPY = {
  projectOverview: "Project Overview",
  techStack: COMMON.labels.techStack,
  visitLiveWebsite: "Visit Live Website",
  launchWebAppPortal: "Launch Web App Portal",
  projectShowcase: " Project Showcase",
} as const;

// pages
export const WORK_VIEW_COPY = {
  noProjectsFoundMatchingYourCriteria: "No projects found matching your criteria.",
  resetFilters: "Reset Filters",
} as const;

// sections
export const SELECTED_WORK_INTERACTIVE_COPY = {
  of: " of ",
} as const;
