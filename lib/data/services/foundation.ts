import { PaletteIcon } from "@animateicons/react/lucide/palette-icon";
import { LayersIcon } from "@animateicons/react/lucide/layers-icon";
import { COMMON } from "../common";
import type { ServiceData } from "./types";

export const BRANDING_SERVICE: ServiceData = {
    "id": "branding",
    "number": "06",
    "name": COMMON.serviceNames.branding,
    "category": COMMON.categories.foundation,
    "icon": PaletteIcon,
    "outcome": "A visual identity that makes the business recognizable.",
    "shortTagline": "A distinct visual identity that makes your brand instantly recognizable and memorable.",
    "deliverables": [
      "Brand positioning & competitor visual audit",
      "Primary & responsive vector logo suites",
      "App icon & favicon system at all resolutions",
      "Curated color palette with HEX, RGB & Pantone",
      "Typography pairing & commercial font licenses",
      "Design tokens for web & mobile developers",
      "Pitch deck & corporate presentation templates",
      "Social media templates & avatar kit",
      "Print-ready stationery & business cards",
      "Complete Brand Book & guideline PDF",
      "Full source files (AI, SVG, PNG, Figma)"
    ],
    "tabLabel": "Branding",
    "headline": {
      "normal": "Distinct visual identity systems that make ",
      "highlight": "your company unforgettable."
    },
    "description": "We craft cohesive brand identities that communicate authority, evoke emotional resonance, and establish enduring market distinction across every physical and digital touchpoint.",
    "stats": [
      {
        "value": "Bespoke",
        "label": "Vector identity systems"
      },
      {
        "value": "Vector",
        "label": "Scalable logo systems"
      },
      {
        "value": "Delivered",
        "label": "Source vector assets"
      }
    ],
    "whatWeBuildSubtitle": "Comprehensive visual systems designed to stand the test of time.",
    "whatWeBuild": [
      {
        "title": "Logo Systems & Marks",
        "description": "Primary, secondary, and responsive icon marks for all scales.",
        "bgColor": "bg-amber-50",
        "iconColor": "text-amber-600"
      },
      {
        "title": "Color & Typography Scales",
        "description": "Curated harmonious palettes, WCAG contrast pairing, and editorial typographic hierarchy.",
        "bgColor": "bg-pink-50",
        "iconColor": "text-pink-600"
      },
      {
        "title": "Brand Guidelines Manual",
        "description": "Exhaustive documentation on clearspace, do's and don'ts, and consistent asset usage.",
        "bgColor": "bg-purple-50",
        "iconColor": "text-purple-600"
      },
      {
        "title": "Marketing & Social Collateral",
        "description": "Stationery kits, pitch deck templates, social media assets, and vector icon libraries.",
        "bgColor": "bg-blue-50",
        "iconColor": "text-blue-600"
      }
    ],
    "perfectFor": [
      {
        "title": "Early-stage founders",
        "desc": "Establishing immediate prestige and authority before approaching investors.",
        "icon": "sparkles"
      },
      {
        "title": "Established firms rebranding",
        "desc": "Shedding outdated legacy visuals in favor of a modern, premium aesthetic.",
        "icon": "refresh"
      },
      {
        "title": "Product-led companies",
        "desc": "Requiring consistent design language across app interfaces and marketing.",
        "icon": "layout"
      },
      {
        "title": "Luxury & lifestyle creators",
        "desc": "Craving bespoke typography and timeless editorial sophistication.",
        "icon": "crown"
      }
    ],
    "techStackSummary": "A small design toolkit for your identity, brand assets and everyday templates.",
    "techStack": [
      { slug: "illustrator", purpose: "Logos and scalable vector artwork" },
      { slug: "photoshop", purpose: "Image editing and brand mockups" },
      { slug: "figma", purpose: "Shared brand assets and guidelines" },
      { slug: "canva", purpose: "Editable templates for your team" }
    ],
    "faqs": [
      {
        "question": "How many logo concepts do you present?",
        "answer": "We present 3 distinctly different creative directions with full real-world mockups (screens, stationery, apparel) before refining your chosen path to perfection."
      },
      {
        "question": "Do I get full copyright and ownership of the logos?",
        "answer": "Yes. Upon project completion, custom design deliverables and vector source assets are transferred directly to your business."
      },
      {
        "question": "Will the brand assets be ready for our web developers to use?",
        "answer": "Yes. We supply web-ready SVG icons, CSS color tokens, and font pairing configurations ready for instant developer handoff."
      },
      {
        "question": "What files will I receive at the end?",
        "answer": "You receive organized Figma libraries, vector AI/EPS files for print, SVG vectors for the web, high-res transparent PNGs, and a complete Brand Guidelines PDF."
      }
    ],
    "relatedWorkUrl": "/creations",
    "mockup": {
      "type": "branding",
      "title": "Simpluxe Brand Identity Guide",
      "badge": COMMON.labels.designTokens,
      "subtitle": "Bespoke typography & vector marks",
      "image": {
        "publicId": "simpluxe/services/branding_ekl60d",
        "version": "1791116462",
        "width": 1536,
        "height": 1024,
        "alt": "A complete visual branding system with logo, typography, colors and application mockups"
      }
    },
};

export const UI_UX_SERVICE: ServiceData = {
    "id": "ui-ux",
    "number": "07",
    "name": COMMON.serviceNames.uiUx,
    "category": COMMON.categories.foundation,
    "icon": LayersIcon,
    "outcome": "Intuitive product design that eliminates user friction and confusion.",
    "shortTagline": "Intuitive, research-led product design that eliminates friction and converts users.",
    "deliverables": [
      "User persona & competitive UX benchmarking",
      "Information architecture & site wireframes",
      "Interactive Figma click-through prototype",
      "Full responsive screen designs (Desktop & Mobile)",
      "Dark mode & High-contrast variations",
      "Atomic design component library with auto-layout",
      "Micro-interaction & transition documentation",
      "Developer handoff specs with CSS tokens",
      "Micro-copy, empty states & error validations",
      "WCAG 2.1 AA accessibility compliance check",
      "Live Figma library link with continuous sync"
    ],
    "tabLabel": COMMON.labels.uiUxDesign,
    "headline": {
      "normal": "Human-centric digital interfaces engineered with ",
      "highlight": "intuitive clarity and flow."
    },
    "description": "We design intuitive, research-driven user journeys and high-craft design systems that transform complex product workflows into clear, frictionless digital experiences.",
    "stats": [
      {
        "value": "Frictionless",
        "label": "User-tested journeys"
      },
      {
        "value": "Interactive",
        "label": "Clickable prototypes"
      },
      {
        "value": COMMON.technology.figma,
        "label": "Production-ready token systems"
      }
    ],
    "whatWeBuildSubtitle": "Design systems and interface prototypes tested for user clarity.",
    "whatWeBuild": [
      {
        "title": "User Journey & Flow Mapping",
        "description": "Eliminate dead-ends and confusion with step-by-step psychological workflow maps.",
        "bgColor": "bg-blue-50",
        "iconColor": "text-blue-600"
      },
      {
        "title": "Comprehensive Design Systems",
        "description": "Standardized color, typography, input, modal, and button component tokens.",
        "bgColor": "bg-purple-50",
        "iconColor": "text-purple-600"
      },
      {
        "title": "High-Fidelity Interactive Prototypes",
        "description": "Clickable Figma prototypes with realistic animations for user testing and pitching.",
        "bgColor": "bg-pink-50",
        "iconColor": "text-pink-600"
      },
      {
        "title": "Usability Testing & UX Audits",
        "description": "Heuristic evaluation, accessibility checks (WCAG AA), and task completion analysis.",
        "bgColor": "bg-emerald-50",
        "iconColor": "text-emerald-600"
      }
    ],
    "perfectFor": [
      {
        "title": "Complex technical products",
        "desc": "Transforming dense data tables and multi-step forms into effortless UX.",
        "icon": "layout"
      },
      {
        "title": "Startups validating concepts",
        "desc": "Presenting a polished clickable prototype to users before writing a line of code.",
        "icon": "play"
      },
      {
        "title": "Engineering teams lacking design",
        "desc": "Receiving pixel-perfect design system tokens with zero guesswork.",
        "icon": "code"
      },
      {
        "title": "Apps suffering high churn",
        "desc": "Identifying and resolving the exact onboarding friction points losing users.",
        "icon": "trending-down"
      }
    ],
    "techStackSummary": "One shared workspace for wireframes, prototypes and developer handoff.",
    "techStack": [
      { slug: "figma", purpose: "Wireframes, UI design and prototypes" }
    ],
    "faqs": [
      {
        "question": "Can our engineering team easily build from your Figma files?",
        "answer": "Yes. Every component uses strict Auto-Layout, standardized 8pt spacing grids, and named design tokens that map 1:1 to Tailwind CSS classes."
      },
      {
        "question": "Do you design both Desktop and Mobile responsive views?",
        "answer": "Always. We design adaptive layouts for mobile viewports, tablets, and desktop resolutions, ensuring seamless usability across all screens."
      },
      {
        "question": "Can we test the design on real smartphones before coding?",
        "answer": "Yes. We configure interactive prototypes in the Figma Mirror app, so you can tap through real buttons, modals, and gestures on your actual device."
      },
      {
        "question": "Do you include micro-animations and empty states?",
        "answer": "Yes. We meticulously detail loading skeletons, error tooltips, empty states, and spring animations so developers don't have to guess."
      }
    ],
    "relatedWorkUrl": "/creations",
    "mockup": {
      "type": "design",
      "title": "Simpluxe Design Token Kit",
      "badge": "Figma Library",
      "subtitle": "8pt Grid & WCAG AA Accessible",
      "image": {
        "publicId": "simpluxe/services/UI-UX_nwimrf",
        "version": "1791118195",
        "width": 1672,
        "height": 941,
        "alt": "A high-fidelity CRM interface design with navigation, analytics and reusable dashboard components"
      }
    },
};
