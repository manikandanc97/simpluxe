import { ShoppingBagIcon } from "@animateicons/react/lucide/shopping-bag-icon";
import { COMMON } from "../../common";
import type { ServiceData } from "@/types/service";
import { SERVICE_DESCRIPTIONS } from "../service-seo";

export const ECOMMERCE_SERVICE: ServiceData = {
  id: "ecommerce",
  number: "03",
  name: COMMON.serviceNames.ecommerce,
  icon: ShoppingBagIcon,
  category: COMMON.categories.clientInterface,
  outcome: "Conversion-focused online stores designed around clear buying journeys.",
  shortTagline:
    "Conversion-focused online stores built for clear, efficient buying experiences.",
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
    "Payment-security responsibilities reviewed for the selected gateway",
    "High-concurrency flash sale caching",
  ],
  tabLabel: COMMON.serviceNames.ecommerce,
  headline: {
    normal: "Conversion-focused storefronts built for ",
    highlight: "speed and clear buying journeys.",
  },
  description: SERVICE_DESCRIPTIONS.ecommerce,
  stats: [
    { value: "Optimized", label: "Checkout conversion UX" },
    { value: "Multi-rail", label: "Stripe & UPI gateways" },
    { value: "Streamlined", label: "Clear checkout UX" },
  ],
  whatWeBuildSubtitle:
    "End-to-end commerce architectures designed for high volume sales.",
  whatWeBuild: [
    {
      title: "Custom DTC Storefronts",
      description:
        "Bespoke digital brand experiences with fluid micro-interactions and responsive cart drawers.",
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
      desc: "Planning renewal and pause options around the selected billing provider.",
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
        "Payment options are selected after checking business location, gateway eligibility, currencies and checkout requirements. Integrations may include Razorpay, Cashfree, UPI, Stripe or PayPal where supported.",
    },
    {
      question:
        "How do you handle inventory sync with our physical warehouse or ERP?",
      answer:
        "Inventory synchronization depends on the ERP or warehouse system's APIs and data model. We confirm direction, frequency and failure handling during integration planning.",
    },
    {
      question: "Can the checkout handle flash sale traffic spikes?",
      answer:
        "Traffic requirements are established during scoping, then addressed with caching, queuing and load testing appropriate to the expected sales volume.",
    },
    {
      question: "Do you support custom subscription cycles?",
      answer:
        "Subscription schedules, invoicing and pause or skip controls can be configured where supported by the selected payment provider and agreed scope.",
    },
  ],
  relatedWorkUrl: "/creations",
  mockup: {
    type: "ecommerce",
    title: "Simpluxe Storefront Engine",
    badge: "Checkout Flow",
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
