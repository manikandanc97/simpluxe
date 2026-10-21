import { COMMON } from "./common";
import type { Project } from "@/types/project";

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
    fullPageImage: "https://res.cloudinary.com/drdl4pdnx/image/upload/f_auto,q_auto/simpluxe/projects/website/valparaiwanderertours_pdqd4p.png",
    mobileImage: `${IMAGE_BASE_URL}/website/valparai-mobile_gjwd7r.jpg`,
    logo: `${LOGO_BASE_URL}/valparai_rwsldt.png`,
    result: "Explore More.",
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
    fullPageImage: "https://res.cloudinary.com/drdl4pdnx/image/upload/f_auto,q_auto/simpluxe/projects/website/grnconstruction_pswfwe.png",
    mobileImage: `${IMAGE_BASE_URL}/website/grn-mobile_tmmhdr.jpg`,
    logo: `${LOGO_BASE_URL}/grn_caw9tl.jpg`,
    result: "Built on Trust.",
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
    fullPageImage: "https://res.cloudinary.com/drdl4pdnx/image/upload/f_auto,q_auto/simpluxe/projects/website/vihahandicrafts_ilul4w.png",
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
    fullPageImage: "https://res.cloudinary.com/drdl4pdnx/image/upload/f_auto,q_auto/simpluxe/projects/website/vizhastories_whmgzr.png",
    mobileImage: `${IMAGE_BASE_URL}/website/vizha-mobile_vrak8f.jpg`,
    logo: `${LOGO_BASE_URL}/Logo_Vizha_p9xiij.png`,
    result: "Made Timeless.",
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
    fullPageImage: "/images/projects/clixpro-full.png",
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

export const FILTER_SERVICES = [
  { id: "websites", label: COMMON.serviceNames.websites, icon: "globe", serviceType: COMMON.serviceNames.websites },
  { id: "web-apps", label: COMMON.serviceNames.webAppsFilter, icon: "grid", serviceType: COMMON.serviceNames.webAppsFilter },
  { id: "mobile-apps", label: COMMON.serviceNames.mobileAppsFilter, icon: "smartphone", serviceType: COMMON.serviceNames.mobileAppsFilter },
] as const;

// selected-work
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
} as const;

// pages
export const WORK_VIEW_COPY = {
  noProjectsFoundMatchingYourCriteria: "No projects found matching your criteria.",
  resetFilters: "Reset Filters",
  visitSite: "Visit Site",
  closeDialog: "Close dialog",
  previewComingSoon: "Preview coming soon",
  liveDemo: "Live Demo",
  openInNewTab: (name: string) => `Open ${name} in new tab`,
} as const;
