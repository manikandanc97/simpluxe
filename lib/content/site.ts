

/** Brand headline fragments are shared by the hero and footer. */
export const TAGLINE = {
  line1: "Keep It Simple.",
  line2Prefix: "Make It ",
  highlight: "Luxury.",
} as const;

// site
export const SITE = {
  name: "Simpluxe",
  tagline: `${TAGLINE.line1} ${TAGLINE.line2Prefix}${TAGLINE.highlight}`,
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://simpluxe.in").replace(/\/+$/, ""),
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "connect@simpluxe.in",
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE ?? "+91 8675748207",
  whatsapp: (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "").replace(/\D/g, ""),
  location: "", // TODO(owner): e.g. "Based in Tamil Nadu, India · working worldwide"
  responseTime: "", // TODO(owner): e.g. "within one business day"
  availability: "Taking on new projects", // TODO(owner): confirm this is true
  twitter: process.env.NEXT_PUBLIC_TWITTER_URL ?? "",
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL ?? "",
  instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? "",
  youtube: process.env.NEXT_PUBLIC_YOUTUBE_URL ?? "",
  github: process.env.NEXT_PUBLIC_GITHUB_URL ?? "",
} as const;
