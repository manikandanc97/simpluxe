import { PaletteIcon } from "@animateicons/react/lucide/palette-icon";
import { LayersIcon } from "@animateicons/react/lucide/layers-icon";
import { COMMON } from "../common";
import type { ServiceData } from "@/types/service";
import { SERVICE_DESCRIPTIONS } from "./service-seo";

export const BRANDING_SERVICE: ServiceData = {
    "id": "branding",
    "number": "06",
    "name": COMMON.serviceNames.branding,
    "category": COMMON.categories.foundation,
    "icon": PaletteIcon,
    "outcome": "A visual identity that makes the business recognizable.",
    "shortTagline": "A distinct visual identity designed for consistent recognition across customer touchpoints.",
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
      "Brand guidelines document",
      "Source file formats agreed in scope (such as AI, SVG, PNG or Figma)"
    ],
    "tabLabel": "Branding",
    "headline": {
      "normal": "Distinct visual identity systems that make ",
      "highlight": "your company unforgettable."
    },
    "description": SERVICE_DESCRIPTIONS.branding,
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
        "answer": "The number of creative directions and mockups is defined in the approved brand-identity scope."
      },
      {
        "question": "Do I get full copyright and ownership of the logos?",
        "answer": "Ownership and usage rights are defined in the project agreement, with third-party font, stock and software licences identified separately."
      },
      {
        "question": "Will the brand assets be ready for our web developers to use?",
        "answer": "Developer-ready assets such as SVGs, color tokens and typography guidance can be included in the agreed handoff package."
      },
      {
        "question": "What files will I receive at the end?",
        "answer": "Final file formats and guidelines are listed in the project scope and may include Figma libraries, vector artwork, web assets and brand documentation."
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
      "WCAG 2.1 AA accessibility review where scoped",
      "Live Figma library link with continuous sync"
    ],
    "tabLabel": COMMON.labels.uiUxDesign,
    "headline": {
      "normal": "Human-centric digital interfaces engineered with ",
      "highlight": "intuitive clarity and flow."
    },
    "description": SERVICE_DESCRIPTIONS.uiUx,
    "stats": [
      {
        "value": "Research-led",
        "label": "Journey review and testing where scoped"
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
        "desc": "Receiving organized design-system tokens and documented handoff guidance.",
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
        "answer": "Figma files are organized for handoff with reusable components, layout rules and named tokens. Framework-specific mapping is agreed with the engineering team."
      },
      {
        "question": "Do you design both Desktop and Mobile responsive views?",
        "answer": "Required breakpoints and responsive states are defined in scope, typically covering the mobile, tablet and desktop contexts relevant to the product."
      },
      {
        "question": "Can we test the design on real smartphones before coding?",
        "answer": "Interactive prototypes can be tested on supported devices using the prototyping workflow agreed for the project."
      },
      {
        "question": "Do you include micro-animations and empty states?",
        "answer": "Loading, error, empty and motion states are documented where they are relevant and included in the agreed design scope."
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
