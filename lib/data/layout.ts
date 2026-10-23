import { COMMON } from "./common";
import { SITE } from "./site";
import type { FooterData } from "@/types/footer";

// navigation
export interface NavItem {
  label: string;
  route: string;
  commandName: string;
}

export const NAV_ITEMS: NavItem[] = [
  {
    label: COMMON.pages.creations,
    route: "/creations",
    commandName: COMMON.actions.goTo(COMMON.pages.creations),
  },
  {
    label: COMMON.pages.expertise,
    route: "/expertise",
    commandName: COMMON.actions.goTo(COMMON.pages.expertise),
  },
  {
    label: COMMON.pages.inside,
    route: "/inside",
    commandName: COMMON.actions.goTo(COMMON.pages.inside),
  },
  {
    label: COMMON.pages.insights,
    route: "/insights",
    commandName: COMMON.actions.goTo(COMMON.pages.insights),
  },
  {
    label: COMMON.pages.connect,
    route: "/connect",
    commandName: COMMON.actions.goTo(COMMON.pages.connect),
  },
];

export interface NavbarContent {
  availabilityText: string;
  ctaText: string;
}

export const NAVBAR_CONTENT: NavbarContent = {
  availabilityText: SITE.availability,
  ctaText: COMMON.actions.startProject,
};

export const NAVBAR_SERVICES_MENU_COPY = {
  range: "01—08",
  title: "Digital services, shaped around your business.",
  description: "Strategy, design and engineering under one focused team.",
  processEyebrow: "The build loop",
  processSteps: [
    { number: "01", title: "Think" },
    { number: "02", title: "Code" },
    { number: "03", title: COMMON.process.launch },
  ],
} as const;

// footer
export const FOOTER_DATA: FooterData = {
  navIcons: {
    "/": "home",
    "/creations": "briefcase",
    "/expertise": "layers",
    "/inside": "info",
    "/insights": "pencil",
    "/connect": "mail",
  },
  capabilities: [
    { label: "Websites & Landing Pages", icon: "globe", id: "websites" },
    { label: COMMON.serviceNames.webApplicationsTitle, icon: "laptop", id: "web-apps" },
    { label: "Mobile Apps (iOS & Android)", icon: "smartphone", id: "mobile-apps" },
    { label: "SaaS Platforms", icon: "layers", id: "saas" },
    { label: "Branding & Identity", icon: "palette", id: "branding" },
  ],
  brandDescription: "Where architectural simplicity meets high-end digital craftsmanship. We distill complex challenges into effortless, ultra-refined experiences engineered to elevate ambitious brands.",
  exploreTitle: "Explore",
  capabilitiesTitle: "Capabilities",
  connectTitle: COMMON.pages.connect,
  ctaPillText: "Let's Build",
  ctaTitle: "Have a project in mind?",
  ctaDescription: "Let's discuss your idea and turn it into a premium digital product.",
  copyrightText: `${SITE.name}. All rights reserved.`,
  privacyPolicyText: COMMON.pages.privacy,
  termsOfServiceText: COMMON.pages.terms,
  sitemapText: "Sitemap",
  bottomBadgeText: SITE.tagline,
};

// layout
export const FOOTER_CTA_BUTTON_COPY = {
  startAProject: COMMON.actions.startProject,
} as const;

export const SITE_FOOTER_COPY = {
  simpluxeHome: COMMON.brand.homeLabel,
  brandSimpUpper: "SIMP",
  brandLuxeUpper: "LUXE",
  headlineLine1: "Designed with Precision.",
  headlineLine2Prefix: "Engineered to ",
  headlineHighlight: "Scale.",
  keepItSimple: "Designed with Precision.",
  makeIt: "Engineered to",
  luxury: "Scale.",
  xTwitter: "X (Twitter)",
  linkedin: "LinkedIn",
  instagram: "Instagram",
  youtube: "YouTube",
  github: "GitHub",
  symbol: "© ",
} as const;

export const SITE_NAVBAR_COPY = {
  home: COMMON.pages.home,
  simpluxeHome: COMMON.brand.homeLabel,
  primaryNavigation: "Primary navigation",
  letsTalk: "Let's talk",
  callUs: "Call Simpluxe",
  openMenu: "Open navigation menu",
  closeMenu: "Close navigation menu",
} as const;
