import { GlobeIcon } from "@animateicons/react/lucide/globe-icon";
import { LayoutDashboardIcon } from "@animateicons/react/lucide/layout-dashboard-icon";
import { ShoppingBagIcon } from "@animateicons/react/lucide/shopping-bag-icon";
import { SmartphoneIcon } from "@animateicons/react/lucide/smartphone-icon";
import { COMMON } from "../common";
import type { ServiceData } from "./types";

export const WEBSITES_SERVICE: ServiceData = {
    "id": "websites",
    "number": "01",
    "name": COMMON.serviceNames.websites,
    "icon": GlobeIcon,
    "category": COMMON.categories.clientInterface,
    "outcome": "Clear digital experiences built to turn visitors into customers.",
    "shortTagline": "Digital experiences that make your business clear, credible and memorable.",
    "deliverables": [
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
      "Analytics & user telemetry integration"
    ],
    "tabLabel": COMMON.serviceNames.websites,
    "headline": {
      "normal": "High-converting ",
      "highlight": "digital experiences."
    },
    "description": "We design and engineer bespoke websites optimized for speed, visual authority, and seamless conversions. Built with clean architecture and fast load times.",
    "stats": [
      {
        "value": "Modern",
        "label": "Responsive architecture"
      },
      {
        "value": "Fast",
        "label": "Optimized load performance"
      },
      {
        "value": "Stable",
        "label": "Reliable edge deployment"
      }
    ],
    "whatWeBuildSubtitle": "High-performance digital storefronts and marketing platforms for modern brands.",
    "whatWeBuild": [
      {
        "title": "Marketing Websites",
        "description": "Bespoke digital flagships that communicate value clearly and convert visitors.",
        "bgColor": "bg-blue-50",
        "iconColor": "text-blue-600"
      },
      {
        "title": "Landing Pages",
        "description": "High-impact, conversion-focused campaign pages built for ad traffic and launches.",
        "bgColor": "bg-pink-50",
        "iconColor": "text-pink-600"
      },
      {
        "title": "Interactive Portfolios",
        "description": "Immersive narrative showcases for studios, architects, and premium creators.",
        "bgColor": "bg-amber-50",
        "iconColor": "text-amber-600"
      },
      {
        "title": "CMS & Editorial Hubs",
        "description": "Effortless content publishing systems powered by modern headless architectures.",
        "bgColor": "bg-emerald-50",
        "iconColor": "text-emerald-600"
      }
    ],
    "perfectFor": [
      {
        "title": "High-growth startups",
        "desc": "Establishing immediate market credibility and investor appeal.",
        "icon": "rocket"
      },
      {
        "title": "Premium luxury brands",
        "desc": "Requiring sophisticated art direction and bespoke typography.",
        "icon": "crown"
      },
      {
        "title": "B2B tech companies",
        "desc": "Demanding clear product value communication and demo pipelines.",
        "icon": "briefcase"
      },
      {
        "title": "Agencies & studios",
        "desc": "Seeking cutting-edge interactive web experiences that win awards.",
        "icon": "award"
      }
    ],
    "techStackSummary": "A focused stack for a fast website that's easy to maintain.",
    "techStack": [
      { slug: "nextjs", purpose: "Website pages and content" },
      { slug: "typescript", purpose: "Reliable website code" },
      { slug: "tailwindcss", purpose: "Responsive layouts and styling" },
      { slug: "vercel", purpose: "Website hosting and deployment" }
    ],
    "faqs": [
      {
        "question": "How long does a custom website build usually take?",
        "answer": "A typical custom website takes between 2 to 5 weeks from initial wireframes and visual design to final testing and global domain launch."
      },
      {
        "question": "Can our team easily edit text, images, and blog posts?",
        "answer": "Yes. We configure intuitive headless CMS solutions (or visual content blocks) so your non-technical marketing team can update content anytime without touching code."
      },
      {
        "question": "Will the website be fast and rank well on Google?",
        "answer": "All our websites are engineered with Next.js edge caching and asset optimization designed to pass Google Lighthouse Core Web Vitals benchmarks."
      },
      {
        "question": "Do you help with domain setup and SSL certificates?",
        "answer": "Yes, we manage full production deployment, automatic HTTPS certificate provisioning, DNS routing, and global CDN caching."
      }
    ],
    "relatedWorkUrl": "/creations?service=websites",
    "mockup": {
      "type": "websites",
      "title": "Simpluxe Digital Flagship",
      "badge": "Core Web Vitals",
      "subtitle": "Fast Next.js edge experience",
      "image": {
        "publicId": "simpluxe/services/website_cbr8jm",
        "version": "1791111610",
        "width": 1705,
        "height": 922,
        "alt": "A polished interior design business website displayed across a wide desktop canvas"
      }
    },
};

export const WEB_APPS_SERVICE: ServiceData = {
    "id": "web-apps",
    "number": "02",
    "name": COMMON.serviceNames.webApplications,
    "category": COMMON.categories.clientInterface,
    "icon": LayoutDashboardIcon,
    "outcome": "Focused software built around how your business actually works.",
    "shortTagline": "Scalable, secure and high-performance web apps tailored to your business needs.",
    "deliverables": [
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
      "Deployment & DevOps"
    ],
    "tabLabel": COMMON.serviceNames.webApplicationsTitle,
    "headline": {
      "normal": "Software built around how ",
      "highlight": "your business actually works."
    },
    "description": "We build modern, scalable web applications tailored to your unique workflows — from internal tools to customer-facing platforms. Designed for performance, security and growth.",
    "stats": [
      {
        "value": "Fullstack",
        "label": "Next.js & TypeScript"
      },
      {
        "value": "Custom",
        "label": "Dedicated workflows"
      },
      {
        "value": "Modular",
        "label": "Scalable architecture"
      }
    ],
    "whatWeBuildSubtitle": "Practical web application solutions for real business needs.",
    "whatWeBuild": [
      {
        "title": "Business Platforms",
        "description": "Custom platforms for complex operations.",
        "bgColor": "bg-accent-soft",
        "iconColor": "text-chart-2"
      },
      {
        "title": "Customer Portals",
        "description": "Secure and intuitive user experiences.",
        "bgColor": "bg-accent-soft",
        "iconColor": "text-primary"
      },
      {
        "title": "Internal Tools",
        "description": "Streamline your team's daily operations.",
        "bgColor": "bg-chart-4/10",
        "iconColor": "text-chart-4"
      },
      {
        "title": "CRM Systems",
        "description": "Manage customers, sales and workflows.",
        "bgColor": "bg-chart-3/10",
        "iconColor": "text-chart-3"
      }
    ],
    "perfectFor": [
      {
        "title": "Startups building a product",
        "desc": "Getting from concept to a production-ready web application quickly.",
        "icon": "rocket"
      },
      {
        "title": "SMBs digitizing operations",
        "desc": "Replacing fragile spreadsheets with automated operational web tools.",
        "icon": "building"
      },
      {
        "title": "Enterprises needing custom solutions",
        "desc": "Tailored platforms that fit proprietary internal compliance and workflows.",
        "icon": "shield"
      },
      {
        "title": "Existing businesses upgrading systems",
        "desc": "Modernizing legacy web systems with modern React & Next.js architectures.",
        "icon": "refresh"
      }
    ],
    "techStackSummary": "The essentials for dashboards, customer portals and everyday business workflows.",
    "techStack": [
      { slug: "nextjs", purpose: "App screens and server logic" },
      { slug: "typescript", purpose: "Reliable application code" },
      { slug: "tailwindcss", purpose: "Consistent, responsive interfaces" },
      { slug: "supabase", purpose: "Database, sign-in and file storage" },
      { slug: "vercel", purpose: "App hosting and deployment" }
    ],
    "faqs": [
      {
        "question": "How long does a web application project take?",
        "answer": "Typically between 4 to 12 weeks depending on scope, architecture complexity, and integrations. We break every project into iterative 2-week sprints with demoable increments."
      },
      {
        "question": "Can you integrate with our existing software?",
        "answer": "Yes. We build robust API layers and secure webhooks to integrate seamlessly with your existing databases, legacy ERPs, payment gateways, and third-party SaaS tools."
      },
      {
        "question": "Can you build role-based dashboards?",
        "answer": "Absolutely. We implement granular Role-Based Access Control (RBAC) with secure session handling, audit trails, and multi-tenant permission isolation."
      },
      {
        "question": "What happens after launch? Maintenance & support?",
        "answer": "We provide dedicated post-launch support after deployment, followed by flexible ongoing maintenance arrangements covering updates, security patches, and performance monitoring."
      }
    ],
    "relatedWorkUrl": "/creations?service=web-apps",
    "mockup": {
      "type": "dashboard",
      "title": "SIMPLUXE Cloud Workspace",
      "badge": "Live Dashboard",
      "subtitle": "Enterprise RBAC & KPI analytics",
      "image": {
        "publicId": "simpluxe/services/web-application_v8iwnt",
        "version": "1791111610",
        "width": 1672,
        "height": 941,
        "alt": "A responsive CRM web application dashboard with analytics, projects and customer data"
      }
    },
};

export const ECOMMERCE_SERVICE: ServiceData = {
    "id": "ecommerce",
    "number": "03",
    "name": COMMON.serviceNames.ecommerce,
    "icon": ShoppingBagIcon,
    "category": COMMON.categories.clientInterface,
    "outcome": "High-converting online stores that turn browsers into loyal buyers.",
    "shortTagline": "High-converting online stores built for speed, growth and seamless buying experiences.",
    "deliverables": [
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
      "High-concurrency flash sale caching"
    ],
    "tabLabel": COMMON.serviceNames.ecommerce,
    "headline": {
      "normal": "High-converting storefronts built to ",
      "highlight": "maximize speed & revenue."
    },
    "description": "Engineered online shopping experiences that eliminate checkout friction, load instantly on mobile, and turn first-time visitors into repeat brand advocates.",
    "stats": [
      {
        "value": "Optimized",
        "label": "Checkout conversion UX"
      },
      {
        "value": "Multi-rail",
        "label": "Stripe & UPI gateways"
      },
      {
        "value": "Streamlined",
        "label": "Frictionless checkout UX"
      }
    ],
    "whatWeBuildSubtitle": "End-to-end commerce architectures designed for high volume sales.",
    "whatWeBuild": [
      {
        "title": "Custom DTC Storefronts",
        "description": "Bespoke digital brand experiences with fluid micro-interactions and instant cart drawers.",
        "bgColor": "bg-emerald-50",
        "iconColor": "text-emerald-600"
      },
      {
        "title": "Multi-Vendor Marketplaces",
        "description": "Scalable seller onboarding, automated commission splits, and vendor dashboards.",
        "bgColor": "bg-blue-50",
        "iconColor": "text-blue-600"
      },
      {
        "title": "B2B Wholesale Portals",
        "description": "Tiered wholesale pricing, custom quotation pipelines, and bulk invoice ordering.",
        "bgColor": "bg-purple-50",
        "iconColor": "text-purple-600"
      },
      {
        "title": "Subscription Commerce",
        "description": "Automated recurring deliveries, membership perks, and self-serve customer management.",
        "bgColor": "bg-pink-50",
        "iconColor": "text-pink-600"
      }
    ],
    "perfectFor": [
      {
        "title": "DTC consumer brands",
        "desc": "Scaling beyond cookie-cutter templates to a custom high-retention shop.",
        "icon": "shopping-bag"
      },
      {
        "title": "B2B wholesale distributors",
        "desc": "Automating high-ticket quotes, custom invoices, and repeat orders.",
        "icon": "truck"
      },
      {
        "title": "High-volume retailers",
        "desc": "Needing resilience under flash sales and massive concurrent traffic.",
        "icon": "zap"
      },
      {
        "title": "Subscription businesses",
        "desc": "Retaining members with seamless renewal and flexible pause options.",
        "icon": "repeat"
      }
    ],
    "techStackSummary": "A practical custom-store stack. We choose the payment gateway for your business and market.",
    "techStack": [
      { slug: "nextjs", purpose: "Storefront and shopping experience" },
      { slug: "tailwindcss", purpose: "Mobile-friendly store design" },
      { slug: "supabase", purpose: "Products, customers and order data" },
      { slug: "razorpay", purpose: "Payment option for Indian stores" },
      { slug: "stripe", purpose: "Payment option where supported" },
      { slug: "vercel", purpose: "Store hosting and deployment" }
    ],
    "faqs": [
      {
        "question": "Can we connect Indian payment gateways like Razorpay, PhonePe & UPI?",
        "answer": "Yes. We integrate native Indian gateways (Razorpay, Cashfree, UPI, NetBanking) as well as global payment rails like Stripe and PayPal with automated currency conversion."
      },
      {
        "question": "How do you handle inventory sync with our physical warehouse or ERP?",
        "answer": "We engineer automated bi-directional webhooks and background workers that synchronize stock levels with your ERP or inventory software in real time."
      },
      {
        "question": "Can the checkout handle flash sale traffic spikes?",
        "answer": "Yes. By isolating catalog views on edge CDN and queuing checkout submissions, our architectures comfortably handle thousands of concurrent checkout requests without crashing."
      },
      {
        "question": "Do you support custom subscription cycles?",
        "answer": "Yes. We support custom weekly, monthly, and quarterly recurring billing with automated invoice generation and customer self-serve pause/skip controls."
      }
    ],
    "relatedWorkUrl": "/creations",
    "mockup": {
      "type": "ecommerce",
      "title": "Simpluxe Storefront Engine",
      "badge": "Instant Checkout",
      "subtitle": "Omnichannel checkout & inventory hub",
      "image": {
        "publicId": "simpluxe/services/e-commerce_qpfzex",
        "version": "1791111609",
        "width": 1536,
        "height": 1024,
        "alt": "A premium natural skincare ecommerce storefront with product discovery and shopping tools"
      }
    },
};

export const MOBILE_APPS_SERVICE: ServiceData = {
    "id": "mobile-apps",
    "number": "04",
    "name": COMMON.serviceNames.mobileApps,
    "category": COMMON.categories.clientInterface,
    "icon": SmartphoneIcon,
    "outcome": "Useful mobile experiences built for real-world customers.",
    "shortTagline": "Native-like mobile experiences that engage users and drive growth.",
    "deliverables": [
      "Cross-platform architecture (React Native / Flutter)",
      "Native iOS & Android compilation",
      "Offline local SQLite database sync",
      "Biometric auth (FaceID / Fingerprint)",
      "Push notification pipelines (APNs / FCM)",
      "In-App Purchases & store subscriptions",
      "Camera, GPS & hardware sensor access",
      "Dark / Light adaptive native theme",
      "Deep linking & universal routing",
      "Apple App Store & Google Play publishing",
      "Over-The-Air (OTA) continuous updates"
    ],
    "tabLabel": COMMON.serviceNames.mobileAppsFilter,
    "headline": {
      "normal": "Native-grade mobile applications built for ",
      "highlight": "daily user engagement."
    },
    "description": "Crafted for iOS and Android with fluid transitions, offline-first reliability, and responsive tactile gestures that users love opening every day.",
    "stats": [
      {
        "value": "Cross-platform",
        "label": COMMON.labels.iosAndroid
      },
      {
        "value": "Offline-first",
        "label": "Local SQLite sync"
      },
      {
        "value": "Fluid",
        "label": "Native transitions"
      }
    ],
    "whatWeBuildSubtitle": "Cross-platform and native mobile apps engineered for production scale.",
    "whatWeBuild": [
      {
        "title": "iOS & Android Consumer Apps",
        "description": "Feature-packed mobile apps with polished navigation, haptics, and social feeds.",
        "bgColor": "bg-rose-50",
        "iconColor": "text-rose-600"
      },
      {
        "title": "Enterprise Field Tools",
        "description": "Offline-first inspection, logistics, and data collection apps for field teams.",
        "bgColor": "bg-blue-50",
        "iconColor": "text-blue-600"
      },
      {
        "title": "On-Demand & Geolocation",
        "description": "Live GPS tracking, real-time driver/customer coordination, and push alerts.",
        "bgColor": "bg-amber-50",
        "iconColor": "text-amber-600"
      },
      {
        "title": "Health & Habit Trackers",
        "description": "Sensory feedback, device biometric security (Face ID), and localized notifications.",
        "bgColor": "bg-emerald-50",
        "iconColor": "text-emerald-600"
      }
    ],
    "perfectFor": [
      {
        "title": "Founders launching a mobile MVP",
        "desc": "Reaching both iPhone and Android users with a single, unified codebase.",
        "icon": "smartphone"
      },
      {
        "title": "Operations & Logistics teams",
        "desc": "Equipping remote or on-field personnel with offline-capable tools.",
        "icon": "truck"
      },
      {
        "title": "Community & Social networks",
        "desc": "Maximizing retention through instant push updates and reactive chat.",
        "icon": "users"
      },
      {
        "title": "FinTech & Secure services",
        "desc": "Meeting strict mobile biometric, pin encryption, and telemetry standards.",
        "icon": "shield"
      }
    ],
    "techStackSummary": "One shared codebase for iOS and Android, with tools for app builds and releases.",
    "techStack": [
      { slug: "reactnative", purpose: "Shared iOS and Android app" },
      { slug: "expo", purpose: "App builds, updates and releases" },
      { slug: "typescript", purpose: "Reliable mobile app code" },
      { slug: "supabase", purpose: "App data, sign-in and file storage" }
    ],
    "faqs": [
      {
        "question": "Do you build separate apps for iOS and Android or one codebase?",
        "answer": "We usually recommend React Native with Expo to share a codebase across iOS and Android. If your app needs platform-specific features, we plan the native work around those requirements."
      },
      {
        "question": "Can the app work when the user has no internet connection?",
        "answer": "Yes. We build offline-first architectures using local encrypted storage (SQLite / WatermelonDB) that automatically reconciles changes once back online."
      },
      {
        "question": "Do you handle the Apple App Store and Google Play approval process?",
        "answer": "Yes. We handle end-to-end store provisioning, certificate signing, screenshot assets, privacy guidelines, and app submission through approval."
      },
      {
        "question": "How do updates work after the app is live in the stores?",
        "answer": "With Expo and EAS Over-The-Air (OTA) updates, critical bug fixes and UI updates can be deployed directly to user devices instantly without waiting for app store re-review."
      }
    ],
    "relatedWorkUrl": "/creations?service=mobile-apps",
    "mockup": {
      "type": "mobile",
      "title": "Simpluxe Mobile Native Hub",
      "badge": COMMON.labels.iosAndroid,
      "subtitle": "60 FPS offline-first mobile app",
      "image": {
        "publicId": "simpluxe/services/Mobile-App_tviiaz",
        "version": "1791116453",
        "width": 1536,
        "height": 1024,
        "alt": "A collection of polished mobile app screens for fitness, grocery and travel experiences"
      }
    },
};
