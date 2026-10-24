import { LayoutDashboardIcon } from "@animateicons/react/lucide/layout-dashboard-icon";
import { COMMON } from "../../common";
import type { ServiceData } from "@/types/service";

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
  description:
    "We build modern, scalable web applications tailored to your unique workflows — from internal tools to customer-facing platforms. Designed for performance, security and growth.",
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
        "Typically between 4 to 12 weeks depending on scope, architecture complexity, and integrations. We break every project into iterative 2-week sprints with demoable increments.",
    },
    {
      question: "Can you integrate with our existing software?",
      answer:
        "Yes. We build robust API layers and secure webhooks to integrate seamlessly with your existing databases, legacy ERPs, payment gateways, and third-party SaaS tools.",
    },
    {
      question: "Can you build role-based dashboards?",
      answer:
        "Absolutely. We implement granular Role-Based Access Control (RBAC) with secure session handling, audit trails, and multi-tenant permission isolation.",
    },
    {
      question: "What happens after launch? Maintenance & support?",
      answer:
        "We provide dedicated post-launch support after deployment, followed by flexible ongoing maintenance arrangements covering updates, security patches, and performance monitoring.",
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
