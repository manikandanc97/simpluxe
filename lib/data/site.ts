

/** Brand headline fragments are shared by the hero and footer. */
export const TAGLINE = {
  line1: "Keep It Simple.",
  line2Prefix: "Make It ",
  highlight: "Luxury.",
} as const;

// site
const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://simpluxe.in").replace(/\/+$/, "");
const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "connect@simpluxe.in";
const contactPhone = process.env.NEXT_PUBLIC_CONTACT_PHONE ?? "+91 8675748207";

export const BUSINESS_ENTITY = {
  name: "Simpluxe Technologies",
  alternateName: "Simpluxe",
  description:
    "Simpluxe Technologies is a software and digital product studio offering custom websites, web applications, mobile apps, SaaS products, e-commerce systems, UI/UX design and brand identity services.",
  url: siteUrl,
  email: contactEmail,
  telephone: contactPhone,
  address: {
    plusCode: "H7C2+3HP",
    locality: "Kanakkampalayam",
    region: "Tamil Nadu",
    countryCode: "IN",
    countryName: "India",
    formatted: "H7C2+3HP, Kanakkampalayam, Tamil Nadu, India",
  },
  geo: {
    latitude: 10.5702125,
    longitude: 77.2514531,
  },
  mapUrl: "https://maps.app.goo.gl/32fMW3cbY1o16SKG9",
  serviceArea: {
    countryCode: "IN",
    name: "India",
  },
  languages: ["en"],
  socialProfiles: {
    twitter: process.env.NEXT_PUBLIC_TWITTER_URL ?? "",
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL ?? "",
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? "",
    youtube: process.env.NEXT_PUBLIC_YOUTUBE_URL ?? "",
    github: process.env.NEXT_PUBLIC_GITHUB_URL ?? "",
  },
} as const;

export const SITE = {
  name: BUSINESS_ENTITY.alternateName,
  tagline: `${TAGLINE.line1} ${TAGLINE.line2Prefix}${TAGLINE.highlight}`,
  url: BUSINESS_ENTITY.url,
  email: BUSINESS_ENTITY.email,
  phone: BUSINESS_ENTITY.telephone,
  whatsapp: (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "").replace(/\D/g, ""),
  contactAddress: BUSINESS_ENTITY.address.formatted,
  contactMapCoordinates: `${BUSINESS_ENTITY.geo.latitude},${BUSINESS_ENTITY.geo.longitude}`,
  contactMapUrl: BUSINESS_ENTITY.mapUrl,
  location: "", // TODO(owner): e.g. "Based in Tamil Nadu, India · working worldwide"
  responseTime: "", // TODO(owner): e.g. "within one business day"
  availability: "",
  twitter: BUSINESS_ENTITY.socialProfiles.twitter,
  linkedin: BUSINESS_ENTITY.socialProfiles.linkedin,
  instagram: BUSINESS_ENTITY.socialProfiles.instagram,
  youtube: BUSINESS_ENTITY.socialProfiles.youtube,
  github: BUSINESS_ENTITY.socialProfiles.github,
} as const;
