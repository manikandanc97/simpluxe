import { SmartphoneIcon } from "@animateicons/react/lucide/smartphone-icon";
import { COMMON } from "../../common";
import type { ServiceData } from "@/types/service";

export const MOBILE_APPS_SERVICE: ServiceData = {
  id: "mobile-apps",
  number: "04",
  name: COMMON.serviceNames.mobileApps,
  category: COMMON.categories.clientInterface,
  icon: SmartphoneIcon,
  outcome: "Useful mobile experiences built for real-world customers.",
  shortTagline:
    "Native-like mobile experiences that engage users and drive growth.",
  deliverables: [
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
    "Over-The-Air (OTA) continuous updates",
  ],
  tabLabel: COMMON.serviceNames.mobileAppsFilter,
  headline: {
    normal: "Native-grade mobile applications built for ",
    highlight: "daily user engagement.",
  },
  description:
    "Crafted for iOS and Android with fluid transitions, offline-first reliability, and responsive tactile gestures that users love opening every day.",
  stats: [
    { value: "Cross-platform", label: COMMON.labels.iosAndroid },
    { value: "Offline-first", label: "Local SQLite sync" },
    { value: "Fluid", label: "Native transitions" },
  ],
  whatWeBuildSubtitle:
    "Cross-platform and native mobile apps engineered for production scale.",
  whatWeBuild: [
    {
      title: "iOS & Android Consumer Apps",
      description:
        "Feature-packed mobile apps with polished navigation, haptics, and social feeds.",
      bgColor: "bg-rose-50",
      iconColor: "text-rose-600",
    },
    {
      title: "Enterprise Field Tools",
      description:
        "Offline-first inspection, logistics, and data collection apps for field teams.",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      title: "On-Demand & Geolocation",
      description:
        "Live GPS tracking, real-time driver/customer coordination, and push alerts.",
      bgColor: "bg-amber-50",
      iconColor: "text-amber-600",
    },
    {
      title: "Health & Habit Trackers",
      description:
        "Sensory feedback, device biometric security (Face ID), and localized notifications.",
      bgColor: "bg-emerald-50",
      iconColor: "text-emerald-600",
    },
  ],
  perfectFor: [
    {
      title: "Founders launching a mobile MVP",
      desc: "Reaching both iPhone and Android users with a single, unified codebase.",
      icon: "smartphone",
    },
    {
      title: "Operations & Logistics teams",
      desc: "Equipping remote or on-field personnel with offline-capable tools.",
      icon: "truck",
    },
    {
      title: "Community & Social networks",
      desc: "Maximizing retention through instant push updates and reactive chat.",
      icon: "users",
    },
    {
      title: "FinTech & Secure services",
      desc: "Meeting strict mobile biometric, pin encryption, and telemetry standards.",
      icon: "shield",
    },
  ],
  techStackSummary:
    "One shared codebase for iOS and Android, with tools for app builds and releases.",
  techStack: [
    { slug: "reactnative", purpose: "Shared iOS and Android app" },
    { slug: "expo", purpose: "App builds, updates and releases" },
    { slug: "typescript", purpose: "Reliable mobile app code" },
    { slug: "supabase", purpose: "App data, sign-in and file storage" },
  ],
  faqs: [
    {
      question:
        "Do you build separate apps for iOS and Android or one codebase?",
      answer:
        "We usually recommend React Native with Expo to share a codebase across iOS and Android. If your app needs platform-specific features, we plan the native work around those requirements.",
    },
    {
      question: "Can the app work when the user has no internet connection?",
      answer:
        "Yes. We build offline-first architectures using local encrypted storage (SQLite / WatermelonDB) that automatically reconciles changes once back online.",
    },
    {
      question:
        "Do you handle the Apple App Store and Google Play approval process?",
      answer:
        "Yes. We handle end-to-end store provisioning, certificate signing, screenshot assets, privacy guidelines, and app submission through approval.",
    },
    {
      question: "How do updates work after the app is live in the stores?",
      answer:
        "With Expo and EAS Over-The-Air (OTA) updates, critical bug fixes and UI updates can be deployed directly to user devices instantly without waiting for app store re-review.",
    },
  ],
  relatedWorkUrl: "/creations?service=mobile-apps",
  mockup: {
    type: "mobile",
    title: "Simpluxe Mobile Native Hub",
    badge: COMMON.labels.iosAndroid,
    subtitle: "60 FPS offline-first mobile app",
    image: {
      publicId: "simpluxe/services/Mobile-App_tviiaz",
      version: "1791116453",
      width: 1536,
      height: 1024,
      alt: "A collection of polished mobile app screens for fitness, grocery and travel experiences",
    },
  },
};
