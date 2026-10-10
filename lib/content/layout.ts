import { COMMON } from "./common";
import { ElementType as LucideIcon } from "react";
import { BriefcaseIcon } from "@animateicons/react/lucide/briefcase-icon";
import { InfoIcon } from "@animateicons/react/lucide/info-icon";
import { LayersIcon } from "@animateicons/react/lucide/layers-icon";
import { MailIcon } from "@animateicons/react/lucide/mail-icon";
import { SITE, TAGLINE } from "./site";
import { FooterData } from "@/types/footer";

// navigation
export interface NavItem {
  label: string;
  route: string;
  icon: LucideIcon;
  commandName: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: COMMON.pages.work, route: "/work", icon: BriefcaseIcon, commandName: COMMON.actions.goTo(COMMON.pages.work) },
  { label: COMMON.pages.services, route: "/services", icon: LayersIcon, commandName: COMMON.actions.goTo(COMMON.pages.services) },
  { label: COMMON.pages.about, route: "/about", icon: InfoIcon, commandName: COMMON.actions.goTo(COMMON.pages.about) },
  { label: COMMON.pages.contact, route: "/contact", icon: MailIcon, commandName: COMMON.actions.goTo(COMMON.pages.contact) },
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
  brandDescription: "A premier software development company engineering custom software, scalable web applications, mobile apps, SaaS platforms, and enterprise solutions for ambitious businesses and founders.",
  exploreTitle: "EXPLORE",
  capabilitiesTitle: "CAPABILITIES",
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
  keepItSimple: TAGLINE.line1,
  makeIt: TAGLINE.line2Prefix.trimEnd(),
  luxury: TAGLINE.highlight,
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
} as const;
