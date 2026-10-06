import { Project } from "@/types/project";

const IMAGE_BASE_URL = "https://res.cloudinary.com/drdl4pdnx/image/upload/f_auto,q_auto/simpluxe/projects";
const LOGO_BASE_URL = "https://res.cloudinary.com/drdl4pdnx/image/upload/w_128,c_limit,f_auto,q_auto/simpluxe/projects/logo";

const baseProject = {
  year: "2025",
};

/**
 * ─────────────────────────────────────────────────────────────────────────────
 * CENTRAL PROJECTS REPOSITORY
 * ─────────────────────────────────────────────────────────────────────────────
 * Grouped into our 3 primary services:
 * - Websites: Live client websites engineered end-to-end
 * - Web Apps: Fullstack software, ERPs, dashboards & B2B platforms
 * - Mobile Apps: iOS & Android cross-platform mobile applications
 * ─────────────────────────────────────────────────────────────────────────────
 */
export const PROJECTS: Project[] = [
  // ─── 01. WEBSITES (Live Client Projects) ───────────────────────────────────
  
  {
    ...baseProject,
    id: "proj-valparai",
    number: "01",
    name: "Valparai Wanderer Tours",
    domain: "valparaiwanderertours.com",
    serviceType: "Websites",
    category: "Travel & Tourism · Tour Booking Platform",
    url: "https://valparaiwanderertours.com",
    desktopImage: `${IMAGE_BASE_URL}/website/valparaiwanderertours_pbcgyi.png`,
    mobileImage: `${IMAGE_BASE_URL}/website/valparai-mobile_gjwd7r.jpg`,
    logo: `${LOGO_BASE_URL}/valparai_rwsldt.png`,
    result: "+ 3600% Month 1 Bookings",
    stack: ["Next.js", "Tailwind CSS", "Typescript"],
  },
  {
    ...baseProject,
    id: "proj-grn",
    number: "02",
    name: "GRN Construction",
    domain: "grnconstruction.in",
    serviceType: "Websites",
    category: "Architecture & Construction · Brand Website",
    url: "https://grnconstruction.in",
    desktopImage: `${IMAGE_BASE_URL}/website/grn_sddfdk.png`,
    mobileImage: `${IMAGE_BASE_URL}/website/grn-mobile_tmmhdr.jpg`,
    logo: `${LOGO_BASE_URL}/grn_caw9tl.jpg`,
    result: "#1 Google SEO Ranking",
    stack: ["Next.js", "Tailwind CSS", "Typescript"],
  },
  {
    ...baseProject,
    id: "proj-viha",
    number: "03",
    name: "Viha Handicrafts",
    domain: "vihahandicrafts.com",
    serviceType: "Websites",
    category: "E-Commerce & Heritage · Artisan Showcase",
    url: "https://vihahandicrafts.com",
    desktopImage: `${IMAGE_BASE_URL}/website/vihahandicrafts_jmxorj.png`,
    mobileImage: `${IMAGE_BASE_URL}/website/viha-mobile_ubkrpm.jpg`,
    logo: `${LOGO_BASE_URL}/viha_ewc0c7.png`,
    result: "Pan-India Orders",
    stack: ["Next.js", "Tailwind CSS", "Typescript"],
  },
  {
    ...baseProject,
    id: "proj-vizha",
    number: "04",
    name: "Vizha Stories",
    domain: "vizhastories.in",
    serviceType: "Websites",
    category: "Event Management · Premium Planners",
    url: "https://vizhastories.in",
    desktopImage: `${IMAGE_BASE_URL}/website/vizhastories_vrslce.png`,
    mobileImage: `${IMAGE_BASE_URL}/website/vizha-mobile_vrak8f.jpg`,
    logo: `${LOGO_BASE_URL}/Logo_Vizha_p9xiij.png`,
    result: "Trusted by 500+ Clients",
    stack: ["Next.js", "Tailwind CSS", "Typescript"],
  },

  // ─── 02. WEB APPLICATIONS ──────────────────────────────────────────────────
  {
    ...baseProject,
    id: "proj-clixprocrm",
    number: "05",
    name: "ClixPro CRM",
    domain: "clixprocrm.vercel.app",
    serviceType: "Web Apps",
    category: "Customer Relationship Management",
    url: "https://clixprocrm.vercel.app/",
    desktopImage: `${IMAGE_BASE_URL}/clixpro_crm_desktop`,
    mobileImage: `${IMAGE_BASE_URL}/clixpro_crm_mobile`,
    logo: `${LOGO_BASE_URL}/clixpro`,
    result: "Work In Progress",
    stack: ["Next.js", "Prisma", "PostgreSQL"],
  },

  // ─── 03. MOBILE APPS ───────────────────────────────────────────────────────
  {
    ...baseProject,
    id: "proj-grn-app",
    number: "06",
    name: "GRN Construction App",
    domain: "grnconstruction.in",
    serviceType: "Mobile Apps",
    category: "Architecture & Construction Mobile App",
    url: "https://grnconstruction.in",
    desktopImage: `${IMAGE_BASE_URL}/grn_app_desktop`,
    mobileImage: `${IMAGE_BASE_URL}/grn_app_mobile`,
    logo: `${LOGO_BASE_URL}/grn`,
    result: "Coming Soon",
    stack: ["React Native", "Supabase", "Offline Sync"],
  },
];

import { SelectedWorkSectionContent } from "@/types/project";

export const SELECTED_WORK_CONTENT: SelectedWorkSectionContent = {
  eyebrow: "Our Work",
  title: "Selected",
  highlightedText: "Work.",
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
    iconColor: "text-[var(--chart-2)]",
    iconBg: "bg-purple-50 border-purple-100",
    title: "Bespoke Architecture",
    metric: "100% Tailored",
    description: "No generic WordPress themes, no off-the-shelf site builder wrappers. Custom-engineered codebases designed specifically for your business workflow.",
    deliverables: ["Next.js 15 & React 19", "Strict TypeScript typing", "Clean modular directory architecture"],
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
    title: "Full Code Ownership",
    metric: "0% Lock-in",
    description: "You retain complete intellectual property rights. On launch day, full GitHub repository ownership and deployment credentials transfer directly to you.",
    deliverables: ["Full Git repository transfer", "Comprehensive architecture documentation", "Zero recurring licensing fees"],
  },
];
