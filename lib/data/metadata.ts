import { SITE } from "./site";

// metadata
export const HOME_PAGE_COPY = {
  title: `Custom Software & Web Development Company · ${SITE.name}`,
  description: "Simpluxe develops custom software, scalable web applications, SaaS platforms, and mobile apps focused on clarity, performance, and clean architecture.",
} as const;

export const ABOUT_PAGE_COPY = {
  title: "Software Studio & Engineering Philosophy",
  description: "Learn about Simpluxe's engineering philosophy: focused development, clean system architecture, complete project handover, and high-performance digital products.",
} as const;

export const CONTACT_PAGE_COPY = {
  title: "Start a Project · Engineering Consultation",
  description: "Connect with the Simpluxe team to discuss your web application, mobile product, or software architecture and plan technical requirements.",
} as const;

export const LAB_PAGE_COPY = {
  title: "Software Prototypes & Interaction Ideas",
  description: "Explore experimental software prototypes, generative UI concepts, and interaction physics developed by the Simpluxe engineering team.",
} as const;

export const SERVICES_PAGE_COPY = {
  title: "Software Development Services & Capabilities",
  description: "Explore our software engineering services: custom web applications, SaaS platforms, mobile apps, e-commerce, and product design built to scale.",
} as const;

export const CUSTOM_SOFTWARE_PAGE_COPY = {
  title: "Custom Software Development Services",
  description: "Bespoke software development services engineered for modern businesses. We build scalable business applications, workflow platforms, and custom APIs.",
} as const;

export const WORK_PAGE_COPY = {
  title: "Selected Work & Software Case Studies",
  description: "Explore custom web applications, mobile platforms, and high-performance digital products engineered by Simpluxe for modern businesses.",
} as const;

// pages
export const LAYOUT_COPY = {
  title: `Custom Software & Web Development Company · ${SITE.name}`,
  titleTemplate: `%s · ${SITE.name}`,
  description: "Simpluxe develops custom software, scalable web applications, SaaS platforms, and mobile apps focused on clarity, performance, and clean architecture.",
  socialDescription: "Simpluxe develops custom software, scalable web applications, SaaS platforms, and mobile apps focused on clarity, performance, and clean architecture.",
  siteName: SITE.name,
  skipToContent: "Skip to content",
} as const;
