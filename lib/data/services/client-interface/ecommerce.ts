import { ShoppingBagIcon } from "@animateicons/react/lucide/shopping-bag-icon";
import { COMMON } from "../../common";
import type { ServiceData } from "@/types/service";

export const ECOMMERCE_SERVICE: ServiceData = {
  id: "ecommerce",
  number: "03",
  name: COMMON.serviceNames.ecommerce,
  icon: ShoppingBagIcon,
  category: COMMON.categories.clientInterface,
  outcome: "High-converting online stores that turn browsers into loyal buyers.",
  shortTagline:
    "High-converting online stores built for speed, growth and seamless buying experiences.",
  deliverables: [
    "Catalog modeling & inventory architecture",
    "Mobile-optimized checkout UX flow",
    "Stripe, Razorpay & UPI payment gateways",
    "Automated tax, invoice & shipping calculations",
    "Customer account hub & order history",
    "Abandoned cart recovery & SMS/Email flows",
    "Dynamic discount & coupon engine",
    "Search, filter & facet query optimization",
    "ERP & warehouse fulfillment webhooks",
    "PCI-DSS security compliance standards",
    "High-concurrency flash sale caching",
  ],
  tabLabel: COMMON.serviceNames.ecommerce,
  headline: {
    normal: "High-converting storefronts built to ",
    highlight: "maximize speed & revenue.",
  },
  description:
    "Engineered online shopping experiences that eliminate checkout friction, load instantly on mobile, and turn first-time visitors into repeat brand advocates.",
  stats: [
    { value: "Optimized", label: "Checkout conversion UX" },
    { value: "Multi-rail", label: "Stripe & UPI gateways" },
    { value: "Streamlined", label: "Frictionless checkout UX" },
  ],
  whatWeBuildSubtitle:
    "End-to-end commerce architectures designed for high volume sales.",
  whatWeBuild: [
    {
      title: "Custom DTC Storefronts",
      description:
        "Bespoke digital brand experiences with fluid micro-interactions and instant cart drawers.",
      bgColor: "bg-emerald-50",
      iconColor: "text-emerald-600",
    },
    {
      title: "Multi-Vendor Marketplaces",
      description:
        "Scalable seller onboarding, automated commission splits, and vendor dashboards.",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      title: "B2B Wholesale Portals",
      description:
        "Tiered wholesale pricing, custom quotation pipelines, and bulk invoice ordering.",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
    },
    {
      title: "Subscription Commerce",
      description:
        "Automated recurring deliveries, membership perks, and self-serve customer management.",
      bgColor: "bg-pink-50",
      iconColor: "text-pink-600",
    },
  ],
  perfectFor: [
    {
      title: "DTC consumer brands",
      desc: "Scaling beyond cookie-cutter templates to a custom high-retention shop.",
      icon: "shopping-bag",
    },
    {
      title: "B2B wholesale distributors",
      desc: "Automating high-ticket quotes, custom invoices, and repeat orders.",
      icon: "truck",
    },
    {
      title: "High-volume retailers",
      desc: "Needing resilience under flash sales and massive concurrent traffic.",
      icon: "zap",
    },
    {
      title: "Subscription businesses",
      desc: "Retaining members with seamless renewal and flexible pause options.",
      icon: "repeat",
    },
  ],
  techStackSummary:
    "A practical custom-store stack. We choose the payment gateway for your business and market.",
  techStack: [
    { slug: "nextjs", purpose: "Storefront and shopping experience" },
    { slug: "tailwindcss", purpose: "Mobile-friendly store design" },
    { slug: "supabase", purpose: "Products, customers and order data" },
    { slug: "razorpay", purpose: "Payment option for Indian stores" },
    { slug: "stripe", purpose: "Payment option where supported" },
    { slug: "vercel", purpose: "Store hosting and deployment" },
  ],
  faqs: [
    {
      question:
        "Can we connect Indian payment gateways like Razorpay, PhonePe & UPI?",
      answer:
        "Yes. We integrate native Indian gateways (Razorpay, Cashfree, UPI, NetBanking) as well as global payment rails like Stripe and PayPal with automated currency conversion.",
    },
    {
      question:
        "How do you handle inventory sync with our physical warehouse or ERP?",
      answer:
        "We engineer automated bi-directional webhooks and background workers that synchronize stock levels with your ERP or inventory software in real time.",
    },
    {
      question: "Can the checkout handle flash sale traffic spikes?",
      answer:
        "Yes. By isolating catalog views on edge CDN and queuing checkout submissions, our architectures comfortably handle thousands of concurrent checkout requests without crashing.",
    },
    {
      question: "Do you support custom subscription cycles?",
      answer:
        "Yes. We support custom weekly, monthly, and quarterly recurring billing with automated invoice generation and customer self-serve pause/skip controls.",
    },
  ],
  relatedWorkUrl: "/creations",
  mockup: {
    type: "ecommerce",
    title: "Simpluxe Storefront Engine",
    badge: "Instant Checkout",
    subtitle: "Omnichannel checkout & inventory hub",
    image: {
      publicId: "simpluxe/services/e-commerce_qpfzex",
      version: "1791111609",
      width: 1536,
      height: 1024,
      alt: "A premium natural skincare ecommerce storefront with product discovery and shopping tools",
    },
  },
};
