import { COMMON } from "./common";
import { SITE } from "./site";

// metadata
export const ABOUT_PAGE_COPY = {
  title: COMMON.pages.about,
  description: "About Simpluxe — A premier software development company built on the belief that custom software and digital systems should be simple, focused, and high-performance.",
} as const;

export const CONTACT_PAGE_COPY = {
  title: COMMON.pages.contact,
  description: "Get in touch with Simpluxe. Discuss your web application, mobile app, software architecture, or schedule a direct engineering consultation.",
} as const;

export const LAB_PAGE_COPY = {
  title: COMMON.pages.ideas,
  description: "Software prototypes, architectural experiments, and concept explorations developed by the Simpluxe engineering team.",
} as const;

export const SERVICES_PAGE_COPY = {
  title: COMMON.pages.services,
  description: "Websites, web apps, mobile apps, SaaS products, branding, and automation by Simpluxe. Pick what you need and define your scope.",
} as const;

export const WORK_PAGE_COPY = {
  title: COMMON.pages.work,
  description: "Selected work and concept studies by Simpluxe. See how we strip away complexity to build focused digital products.",
} as const;

// pages
export const LAYOUT_COPY = {
  title: COMMON.brand.title,
  titleTemplate: `%s · ${SITE.name}`,
  description: "Simpluxe is a premium software company that engineers custom software, scalable web applications, mobile apps, SaaS platforms, and enterprise solutions.",
  socialDescription: "Premium software company engineering custom software, scalable web applications, mobile apps, SaaS platforms, and enterprise solutions.",
  siteName: SITE.name,
  skipToContent: "Skip to content",
} as const;

export const OPENGRAPH_IMAGE_COPY = {
  simpluxeKeepItSimpleMakeIt: COMMON.brand.title,
  simp: "Simp",
  luxe: "luxe",
  keepItSimpleMakeItLuxury: SITE.tagline,
} as const;
