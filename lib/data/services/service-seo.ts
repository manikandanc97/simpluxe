export interface ServiceSeoData {
  title: string;
  description: string;
  heading: string;
  relatedServiceIds: string[];
}

export const SERVICE_DESCRIPTIONS = {
  websites:
    "Custom website design and development for businesses in Udumalpet and across Tamil Nadu that need a fast, credible and easy-to-manage marketing site built around clear customer journeys.",
  webApps:
    "Custom web application development in Coimbatore and across Tamil Nadu for customer portals, internal tools, dashboards and business platforms designed around your workflows and integrations.",
  ecommerce:
    "Custom e-commerce development in Tiruppur and across Tamil Nadu for fast storefronts, practical checkout flows, payment integrations, inventory workflows and subscription commerce.",
  mobileApps:
    "Mobile app design and development across Tamil Nadu for iOS and Android, including offline workflows, device integrations, notifications and app-store release support.",
  saas:
    "SaaS product development in Coimbatore and across Tamil Nadu for subscription platforms with multi-tenant architecture, billing, permissions and scalable web application foundations.",
  branding:
    "Brand identity design in Udumalpet and across Tamil Nadu for businesses that need a distinctive logo system, practical visual guidelines and production-ready digital brand assets.",
  uiUx:
    "UI/UX design in Tiruppur and across Tamil Nadu for web and mobile products, from user flows and responsive interfaces to prototypes, design systems and developer-ready Figma files.",
  customSoftware:
    "Custom software development across Tamil Nadu, including Udumalpet, Tiruppur and Coimbatore, for business applications, workflow platforms, system integrations and modernization projects built around complex requirements.",
} as const;

const SERVICE_SEO: Record<string, ServiceSeoData> = {
  websites: {
    title: "Custom Website Development in Udumalpet, Tamil Nadu",
    description: SERVICE_DESCRIPTIONS.websites,
    heading: "Custom website development",
    relatedServiceIds: ["branding", "ui-ux"],
  },
  "web-apps": {
    title: "Web Application Development in Coimbatore, Tamil Nadu",
    description: SERVICE_DESCRIPTIONS.webApps,
    heading: "Web application development",
    relatedServiceIds: ["custom-software", "ui-ux"],
  },
  ecommerce: {
    title: "E-commerce Development in Tiruppur, Tamil Nadu",
    description: SERVICE_DESCRIPTIONS.ecommerce,
    heading: "Custom e-commerce development",
    relatedServiceIds: ["websites", "web-apps"],
  },
  "mobile-apps": {
    title: "Mobile App Development in Tamil Nadu",
    description: SERVICE_DESCRIPTIONS.mobileApps,
    heading: "Mobile app development",
    relatedServiceIds: ["ui-ux", "custom-software"],
  },
  saas: {
    title: "SaaS Product Development in Coimbatore, Tamil Nadu",
    description: SERVICE_DESCRIPTIONS.saas,
    heading: "SaaS product development",
    relatedServiceIds: ["web-apps", "custom-software"],
  },
  branding: {
    title: "Brand Identity Design in Udumalpet, Tamil Nadu",
    description: SERVICE_DESCRIPTIONS.branding,
    heading: "Brand identity design",
    relatedServiceIds: ["websites", "ui-ux"],
  },
  "ui-ux": {
    title: "UI/UX Design Services in Tiruppur, Tamil Nadu",
    description: SERVICE_DESCRIPTIONS.uiUx,
    heading: "UI/UX design for digital products",
    relatedServiceIds: ["web-apps", "mobile-apps"],
  },
  "custom-software": {
    title: "Custom Software Development in Tamil Nadu",
    description: SERVICE_DESCRIPTIONS.customSoftware,
    heading: "Custom software development",
    relatedServiceIds: ["web-apps", "saas"],
  },
};

export const SERVICE_SEO_SECTION_COPY = {
  faqEyebrow: "Service questions",
  faqTitle: "Frequently asked questions",
  faqDescription:
    "Straightforward answers about scope, delivery and the technical decisions behind this service.",
  relatedEyebrow: "Continue exploring",
  relatedTitle: "Related services and next steps",
  relatedDescription:
    "Compare complementary capabilities, review selected work or tell us what you are planning.",
  creationsLabel: "View our creations",
  connectLabel: "Discuss your project",
} as const;

export function getServiceSeo(serviceId: string) {
  return SERVICE_SEO[serviceId];
}
