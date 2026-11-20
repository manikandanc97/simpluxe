import { BUSINESS_ENTITY, SITE } from "@/lib/data/site";
import { ABOUT_PAGE_COPY, CONTACT_PAGE_COPY } from "@/lib/data/metadata";
import {
  getServicePath,
  getServiceSeo,
  SERVICES_LIST,
  type ServiceData,
} from "@/lib/data/services";
import { DEFAULT_OG_IMAGE } from "@/lib/metadata";

export interface BreadcrumbEntry {
  name: string;
  path: string;
}

export function getOrganizationSchema() {
  const sameAs = Object.values(BUSINESS_ENTITY.socialProfiles).filter(Boolean);

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE.url}/#organization`,
    name: BUSINESS_ENTITY.name,
    alternateName: BUSINESS_ENTITY.alternateName,
    url: BUSINESS_ENTITY.url,
    logo: {
      "@type": "ImageObject",
      "@id": `${SITE.url}/#logo`,
      url: DEFAULT_OG_IMAGE.url,
      width: DEFAULT_OG_IMAGE.width,
      height: DEFAULT_OG_IMAGE.height,
    },
    description: BUSINESS_ENTITY.description,
    email: BUSINESS_ENTITY.email,
    telephone: BUSINESS_ENTITY.telephone,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS_ENTITY.address.plusCode,
      addressLocality: BUSINESS_ENTITY.address.locality,
      addressRegion: BUSINESS_ENTITY.address.region,
      addressCountry: BUSINESS_ENTITY.address.countryCode,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS_ENTITY.geo.latitude,
      longitude: BUSINESS_ENTITY.geo.longitude,
    },
    hasMap: BUSINESS_ENTITY.mapUrl,
    ...(sameAs.length > 0 ? { sameAs } : {}),
    contactPoint: [
      {
        "@type": "ContactPoint",
        "@id": `${SITE.url}/#project-contact`,
        contactType: "project inquiries",
        email: BUSINESS_ENTITY.email,
        telephone: BUSINESS_ENTITY.telephone,
        availableLanguage: BUSINESS_ENTITY.languages,
      },
    ],
  };
}

export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    name: BUSINESS_ENTITY.name,
    alternateName: BUSINESS_ENTITY.alternateName,
    url: SITE.url,
    description: BUSINESS_ENTITY.description,
    publisher: {
      "@id": `${SITE.url}/#organization`,
    },
    inLanguage: "en-US",
  };
}

export function getBreadcrumbSchema(items: BreadcrumbEntry[]) {
  const currentPath = items.at(-1)?.path ?? "/";
  const currentUrl = currentPath === "/" ? SITE.url : `${SITE.url}${currentPath}`;

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${currentUrl}#breadcrumb`,
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
  const path = getServicePath(service.id);
  const seo = getServiceSeo(service.id);

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE.url}${path}#service`,
    name: seo?.title ?? service.name,
    description: service.description,
    url: `${SITE.url}${path}`,
    isPartOf: {
      "@id": `${SITE.url}/#website`,
    },
    provider: {
      "@id": `${SITE.url}/#organization`,
    },
    serviceType: seo?.heading ?? service.name,
    areaServed: {
      "@type": "Country",
      identifier: BUSINESS_ENTITY.serviceArea.countryCode,
      name: BUSINESS_ENTITY.serviceArea.name,
    },
  };
}

export function getFaqPageSchema(faqs: ServiceData["faqs"]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
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
    breadcrumb: {
      "@id": `${SITE.url}/inside#breadcrumb`,
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
    breadcrumb: {
      "@id": `${SITE.url}/connect#breadcrumb`,
    },
    mainEntity: {
      "@id": `${SITE.url}/#organization`,
    },
  };
}
