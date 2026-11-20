import { BUSINESS_ENTITY, SITE } from "./site";

// metadata
export const HOME_PAGE_COPY = {
  title: `Custom Software & Web Development Company · ${SITE.name}`,
  description: BUSINESS_ENTITY.description,
} as const;

export const ABOUT_PAGE_COPY = {
  title: "Software Studio & Engineering Philosophy",
  description: `Learn how ${BUSINESS_ENTITY.name} approaches custom software, digital product design, system architecture and project delivery.`,
} as const;

export const CONTACT_PAGE_COPY = {
  title: "Start a Project · Engineering Consultation",
  description: `Contact ${BUSINESS_ENTITY.name} to discuss a website, web application, mobile app, SaaS product or custom software project.`,
} as const;

export const LAB_PAGE_COPY = {
  title: "Software Prototypes & Interaction Ideas",
  description: "Explore experimental software prototypes, generative UI concepts, and interaction physics developed by the Simpluxe engineering team.",
} as const;

export const EXPERTISE_PAGE_COPY = {
  title: "Software Development Expertise & Capabilities",
  description: "Explore our software engineering expertise: custom web applications, SaaS platforms, mobile apps, e-commerce, and product design built to scale.",
} as const;

export const WORK_PAGE_COPY = {
  title: "Selected Software & Digital Product Work",
  description: "Explore selected websites, web applications and mobile product work by Simpluxe.",
} as const;

// pages
export const LAYOUT_COPY = {
  title: `Custom Software & Web Development Company · ${SITE.name}`,
  titleTemplate: `%s · ${SITE.name}`,
  description: BUSINESS_ENTITY.description,
  socialDescription: BUSINESS_ENTITY.description,
  siteName: SITE.name,
  skipToContent: "Skip to content",
} as const;
