import { SITE } from "@/lib/data/site";
import { LAYOUT_COPY, ABOUT_PAGE_COPY, CONTACT_PAGE_COPY, CUSTOM_SOFTWARE_PAGE_COPY } from "@/lib/data/metadata";
import {
  getServicePath,
  SERVICES_LIST,
  type ServiceData,
} from "@/lib/data/services";
import { DEFAULT_OG_IMAGE } from "@/lib/metadata";

export interface BreadcrumbEntry {
  name: string;
  path: string;
}

export function getOrganizationSchema() {
  const sameAs = [
    SITE.twitter,
    SITE.linkedin,
    SITE.instagram,
    SITE.youtube,
    SITE.github,
  ].filter(Boolean);

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE.url}/#organization`,
    name: SITE.name,
    legalName: SITE.name,
    url: SITE.url,
    logo: DEFAULT_OG_IMAGE.url,
    description: LAYOUT_COPY.description,
    email: SITE.email,
    telephone: SITE.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.contactAddress,
      addressRegion: "Tamil Nadu",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 10.5702125,
      longitude: 77.2514531,
    },
    hasMap: SITE.contactMapUrl,
    ...(sameAs.length > 0 ? { sameAs } : {}),
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: SITE.email,
        telephone: SITE.phone,
        availableLanguage: ["en"],
      },
    ],
  };
}

export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    name: SITE.name,
    url: SITE.url,
    description: LAYOUT_COPY.description,
    publisher: {
      "@id": `${SITE.url}/#organization`,
    },
    inLanguage: "en-US",
  };
}

export function getBreadcrumbSchema(items: BreadcrumbEntry[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.path === "/" ? SITE.url : `${SITE.url}${item.path}`,
    })),
  };
}

export function getServicesSchema() {
  return SERVICES_LIST.map(getServiceSchema);
}

export function getServiceSchema(service: ServiceData) {
  const isCustomSoftware = service.id === "custom-software";
  const path = getServicePath(service.id);

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE.url}${path}#service`,
    name: isCustomSoftware ? CUSTOM_SOFTWARE_PAGE_COPY.title : service.name,
    description: isCustomSoftware
      ? CUSTOM_SOFTWARE_PAGE_COPY.description
      : service.description,
    url: `${SITE.url}${path}`,
    provider: {
      "@id": `${SITE.url}/#organization`,
    },
    serviceType: isCustomSoftware ? "Custom Software Development" : service.name,
    areaServed: {
      "@type": "Country",
      name: "India",
    },
  };
}

export function getAboutPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${SITE.url}/inside#webpage`,
    url: `${SITE.url}/inside`,
    name: `${ABOUT_PAGE_COPY.title} · ${SITE.name}`,
    description: ABOUT_PAGE_COPY.description,
    isPartOf: {
      "@id": `${SITE.url}/#website`,
    },
    mainEntity: {
      "@id": `${SITE.url}/#organization`,
    },
  };
}

export function getContactPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${SITE.url}/connect#webpage`,
    url: `${SITE.url}/connect`,
    name: `${CONTACT_PAGE_COPY.title} · ${SITE.name}`,
    description: CONTACT_PAGE_COPY.description,
    isPartOf: {
      "@id": `${SITE.url}/#website`,
    },
    mainEntity: {
      "@id": `${SITE.url}/#organization`,
    },
  };
}
