import { COMMON } from "./common";
import type { Project } from "@/types/project";

// projects
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
    previewImage: {
      publicId: "simpluxe/projects/website/valparaiwanderertours_pdqd4p.png",
      version: "1792149016",
      width: 1903,
      height: 8539,
    },
    showcaseImages: {
      desktop: {
        publicId: "simpluxe/projects/website/valparaiwanderertours_pbcgyi.png",
        version: "1791037414",
        width: 2560,
        height: 1230,
      },
      mobile: {
        publicId: "simpluxe/projects/website/valparai-mobile_gjwd7r.jpg",
        version: "1791038711",
        width: 1115,
        height: 2215,
      },
    },
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
    previewImage: {
      publicId: "simpluxe/projects/website/grnconstruction_pswfwe.png",
      version: "1792149018",
      width: 1903,
      height: 11144,
    },
    showcaseImages: {
      desktop: {
        publicId: "simpluxe/projects/website/grn_sddfdk.png",
        version: "1791037413",
        width: 2560,
        height: 1231,
      },
      mobile: {
        publicId: "simpluxe/projects/website/grn-mobile_tmmhdr.jpg",
        version: "1791039401",
        width: 1014,
        height: 2012,
      },
    },
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
    previewImage: {
      publicId: "simpluxe/projects/website/vihahandicrafts_ilul4w.png",
      version: "1792149010",
      width: 1903,
      height: 9433,
    },
    showcaseImages: {
      desktop: {
        publicId: "simpluxe/projects/website/vihahandicrafts_jmxorj.png",
        version: "1791037414",
        width: 2560,
        height: 1230,
      },
      mobile: {
        publicId: "simpluxe/projects/website/viha-mobile_ubkrpm.jpg",
        version: "1791039401",
        width: 1085,
        height: 2154,
      },
    },
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
    previewImage: {
      publicId: "simpluxe/projects/website/vizhastories_whmgzr.png",
      version: "1792149005",
      width: 1903,
      height: 8831,
    },
    showcaseImages: {
      desktop: {
        publicId: "simpluxe/projects/website/vizhastories_vrslce.png",
        version: "1791037410",
        width: 2560,
        height: 1230,
      },
      mobile: {
        publicId: "simpluxe/projects/website/vizha-mobile_vrak8f.jpg",
        version: "1791039399",
        width: 1240,
        height: 2460,
      },
    },
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
  engineeredDigitalProductsFor: "Software Engineering & ",
  modernBusinesses: "Digital Products Portfolio.",
  fromHighConversionWebsitesToComplex: "Explore selected case studies: bespoke web applications, mobile platforms, and high-performance digital systems engineered by Simpluxe.",
} as const;

// pages
export const WORK_VIEW_COPY = {
  noProjectsFoundMatchingYourCriteria: "No projects found matching your criteria.",
  resetFilters: "Reset Filters",
  visitSite: "Visit Site",
  closeDialog: "Close dialog",
  previewComingSoon: "Preview coming soon",
  previewAlt: (name: string) => `${name} website preview`,
  liveDemo: "Live Demo",
  openInNewTab: (name: string) => `Open ${name} in new tab`,
} as const;
