import { LayoutDashboardIcon } from "@animateicons/react/lucide/layout-dashboard-icon";
import { COMMON } from "../../common";
import type { ServiceData } from "@/types/service";
import { SERVICE_DESCRIPTIONS } from "../service-seo";

export const WEB_APPS_SERVICE: ServiceData = {
  id: "web-apps",
  number: "02",
  name: COMMON.serviceNames.webApplications,
  category: COMMON.categories.clientInterface,
  icon: LayoutDashboardIcon,
  outcome: "Focused software built around how your business actually works.",
  shortTagline:
    "Scalable, secure and high-performance web apps tailored to your business needs.",
  deliverables: [
    "Requirements analysis",
    "Information architecture",
    COMMON.serviceNames.uiUx,
    "Frontend development",
    "Backend & API development",
    "Database architecture",
    "Authentication & User roles",
    "Third-party integrations",
    "Performance optimization",
    "Testing & QA",
    "Deployment & DevOps",
  ],
  tabLabel: COMMON.serviceNames.webApplicationsTitle,
  headline: {
    normal: "Software built around how ",
    highlight: "your business actually works.",
  },
  description: SERVICE_DESCRIPTIONS.webApps,
  stats: [
    { value: "Fullstack", label: "Next.js & TypeScript" },
    { value: "Custom", label: "Dedicated workflows" },
    { value: "Modular", label: "Scalable architecture" },
  ],
  whatWeBuildSubtitle:
    "Practical web application solutions for real business needs.",
  whatWeBuild: [
    {
      title: "Business Platforms",
      description: "Custom platforms for complex operations.",
      bgColor: "bg-accent-soft",
      iconColor: "text-chart-2",
    },
    {
      title: "Customer Portals",
      description: "Secure and intuitive user experiences.",
      bgColor: "bg-accent-soft",
      iconColor: "text-primary",
    },
    {
      title: "Internal Tools",
      description: "Streamline your team's daily operations.",
      bgColor: "bg-chart-4/10",
      iconColor: "text-chart-4",
    },
    {
      title: "CRM Systems",
      description: "Manage customers, sales and workflows.",
      bgColor: "bg-chart-3/10",
      iconColor: "text-chart-3",
    },
  ],
  perfectFor: [
    {
      title: "Startups building a product",
      desc: "Getting from concept to a production-ready web application quickly.",
      icon: "rocket",
    },
    {
      title: "SMBs digitizing operations",
      desc: "Replacing fragile spreadsheets with automated operational web tools.",
      icon: "building",
    },
    {
      title: "Enterprises needing custom solutions",
      desc: "Tailored platforms that fit proprietary internal compliance and workflows.",
      icon: "shield",
    },
    {
      title: "Existing businesses upgrading systems",
      desc: "Modernizing legacy web systems with modern React & Next.js architectures.",
      icon: "refresh",
    },
  ],
  techStackSummary:
    "The essentials for dashboards, customer portals and everyday business workflows.",
  techStack: [
    { slug: "nextjs", purpose: "App screens and server logic" },
    { slug: "typescript", purpose: "Reliable application code" },
    { slug: "tailwindcss", purpose: "Consistent, responsive interfaces" },
    { slug: "supabase", purpose: "Database, sign-in and file storage" },
    { slug: "vercel", purpose: "App hosting and deployment" },
  ],
  faqs: [
    {
      question: "How long does a web application project take?",
      answer:
        "Timing and delivery cadence depend on scope, integrations and review requirements. We provide a phased plan after technical discovery.",
    },
    {
      question: "Can you integrate with our existing software?",
      answer:
        "We assess available APIs, data formats and security constraints before confirming an integration approach with existing systems.",
    },
    {
      question: "Can you build role-based dashboards?",
      answer:
        "Role-based access, audit trails and tenant isolation can be designed where required by the product scope and security model.",
    },
    {
      question: "What happens after launch? Maintenance & support?",
      answer:
        "Post-launch support and ongoing maintenance are agreed separately, including coverage, response expectations and included work.",
    },
  ],
  relatedWorkUrl: "/creations?service=web-apps",
  mockup: {
    type: "dashboard",
    title: "SIMPLUXE Cloud Workspace",
    badge: "Live Dashboard",
    subtitle: "Enterprise RBAC & KPI analytics",
    image: {
      publicId: "simpluxe/services/web-application_v8iwnt",
      version: "1791111610",
      width: 1672,
      height: 941,
      alt: "A responsive CRM web application dashboard with analytics, projects and customer data",
    },
  },
};
