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
  { label: COMMON.pages.work, route: "/work", commandName: COMMON.actions.goTo(COMMON.pages.work) },
  { label: COMMON.pages.services, route: "/services", commandName: COMMON.actions.goTo(COMMON.pages.services) },
  { label: COMMON.pages.about, route: "/about", commandName: COMMON.actions.goTo(COMMON.pages.about) },
  { label: COMMON.pages.contact, route: "/contact", commandName: COMMON.actions.goTo(COMMON.pages.contact) },
];

export interface NavbarContent {
  availabilityText: string;
  ctaText: string;
}

export const NAVBAR_CONTENT: NavbarContent = {
  availabilityText: SITE.availability,
  ctaText: COMMON.actions.startProject,
};

// footer
export const FOOTER_DATA: FooterData = {
  navIcons: {
    "/": "home",
    "/work": "briefcase",
    "/services": "layers",
    "/about": "info",
    "/contact": "mail",
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
  connectTitle: "Connect",
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

export const MOBILE_BOTTOM_NAV_COPY = {
  home: COMMON.pages.home,
  work: COMMON.pages.work,
  services: COMMON.pages.services,
  contact: COMMON.pages.contact,
  mobileBottomAppNavigation: "Mobile Bottom App Navigation",
  startAProject: COMMON.actions.startProject,
} as const;

export const SITE_FOOTER_COPY = {
  simpluxeHome: COMMON.brand.homeLabel,
  simpluxe: SITE.name,
  brandSimp: "Simp",
  brandLuxe: "Luxe",
  technologies: "Technologies",
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
  simpluxeLogo: COMMON.brand.logoAlt,
} as const;

export const SITE_NAVBAR_COPY = {
  simpluxeHome: COMMON.brand.homeLabel,
  simpluxeLogo: COMMON.brand.logoAlt,
  primaryNavigation: "Primary navigation",
  brandSimp: "Simp",
  brandLuxe: "Luxe",
  technologies: "Technologies",
  letsTalk: "Let's talk",
} as const;
