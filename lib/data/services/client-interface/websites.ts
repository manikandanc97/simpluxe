import { GlobeIcon } from "@animateicons/react/lucide/globe-icon";
import { COMMON } from "../../common";
import type { ServiceData } from "@/types/service";
import { SERVICE_DESCRIPTIONS } from "../service-seo";

export const WEBSITES_SERVICE: ServiceData = {
  id: "websites",
  number: "01",
  name: COMMON.serviceNames.websites,
  icon: GlobeIcon,
  category: COMMON.categories.clientInterface,
  outcome: "Clear digital experiences built to turn visitors into customers.",
  shortTagline:
    "Digital experiences that make your business clear, credible and memorable.",
  deliverables: [
    "Requirements & narrative architecture",
    "Bespoke visual identity & UI design",
    "Full responsive mobile-first engineering",
    "Headless CMS integration (Sanity / Supabase)",
    "Next.js Static & Server-side rendering",
    "Core Web Vitals & performance tuning",
    "SEO schema metadata & social cards",
    "Interactive micro-animations (Motion)",
    "Global edge CDN deployment & caching",
    "Form capture & CRM lead routing",
    "Analytics & user telemetry integration",
  ],
  tabLabel: COMMON.serviceNames.websites,
  headline: {
    normal: "Conversion-focused ",
    highlight: "digital experiences.",
  },
  description: SERVICE_DESCRIPTIONS.websites,
  stats: [
    { value: "Modern", label: "Responsive architecture" },
    { value: "Fast", label: "Optimized load performance" },
    { value: "Stable", label: "Reliable edge deployment" },
  ],
  whatWeBuildSubtitle:
    "High-performance digital storefronts and marketing platforms for modern brands.",
  whatWeBuild: [
    {
      title: "Marketing Websites",
      description:
        "Bespoke digital flagships that communicate value clearly and convert visitors.",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      title: "Landing Pages",
      description:
        "High-impact, conversion-focused campaign pages built for ad traffic and launches.",
      bgColor: "bg-pink-50",
      iconColor: "text-pink-600",
    },
    {
      title: "Interactive Portfolios",
      description:
        "Immersive narrative showcases for studios, architects, and premium creators.",
      bgColor: "bg-amber-50",
      iconColor: "text-amber-600",
    },
    {
      title: "CMS & Editorial Hubs",
      description:
        "Effortless content publishing systems powered by modern headless architectures.",
      bgColor: "bg-emerald-50",
      iconColor: "text-emerald-600",
    },
  ],
  perfectFor: [
    {
      title: "High-growth startups",
      desc: "Establishing immediate market credibility and investor appeal.",
      icon: "rocket",
    },
    {
      title: "Premium luxury brands",
      desc: "Requiring sophisticated art direction and bespoke typography.",
      icon: "crown",
    },
    {
      title: "B2B tech companies",
      desc: "Demanding clear product value communication and demo pipelines.",
      icon: "briefcase",
    },
    {
      title: "Agencies & studios",
      desc: "Seeking distinctive interactive web experiences for their audiences.",
      icon: "award",
    },
  ],
  techStackSummary: "A focused stack for a fast website that's easy to maintain.",
  techStack: [
    { slug: "nextjs", purpose: "Website pages and content" },
    { slug: "typescript", purpose: "Reliable website code" },
    { slug: "tailwindcss", purpose: "Responsive layouts and styling" },
    { slug: "vercel", purpose: "Website hosting and deployment" },
  ],
  faqs: [
    {
      question: "How long does a custom website build usually take?",
      answer:
        "Timelines depend on page count, content readiness, integrations and review cycles. We confirm a delivery plan after scoping the website.",
    },
    {
      question: "Can our team easily edit text, images, and blog posts?",
      answer:
        "Where content editing is required, we can configure a headless CMS or structured content blocks based on the agreed scope.",
    },
    {
      question: "Will the website be fast and rank well on Google?",
      answer:
        "We use performance-focused rendering, caching and asset optimization. Search visibility and Core Web Vitals results depend on content, hosting, third-party scripts and real-user conditions.",
    },
    {
      question: "Do you help with domain setup and SSL certificates?",
      answer:
        "Domain, DNS, HTTPS and CDN setup can be included in the agreed deployment scope, subject to access to the relevant accounts.",
    },
  ],
  relatedWorkUrl: "/creations?service=websites",
  mockup: {
    type: "websites",
    title: "Simpluxe Digital Flagship",
    badge: "Core Web Vitals",
    subtitle: "Fast Next.js edge experience",
    image: {
      publicId: "simpluxe/services/website_cbr8jm",
      version: "1791111610",
      width: 1705,
      height: 922,
      alt: "A polished interior design business website displayed across a wide desktop canvas",
    },
  },
};
