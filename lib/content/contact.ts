import { COMMON } from "./common";
import { SITE } from "./site";

// contact
export interface ContactStep {
  number: string;
  title: string;
  time: string;
  description: string;
}

export const CONTACT_STEPS: ContactStep[] = [
  {
    number: "01",
    title: "Scoping & Review",
    time: SITE.responseTime || "Initial Review",
    description: "We review your requirements to evaluate feasibility.",
  },
  {
    number: "02",
    title: "Roadmap Session",
    time: "30-Min Call",
    description: "Direct alignment on milestones with an architect.",
  },
  {
    number: "03",
    title: "Proposal",
    time: "48 Hours",
    description: "Receive a statement of work with exact deliverables.",
  },
];

export const CONTACT_SECTION_CONTENT = {
  badge: "Technical Scoping Engine",
  titleLine1: "Start a Technical",
  titleLine2: "Conversation.",
  description: `Tell us about your product goals, architectural constraints, or target timeline.${SITE.responseTime ? ` We will respond ${SITE.responseTime}.` : " We will review your requirements and provide a structured technical assessment."}`,
};

// contact
export const CONTACT_CHANNELS_COPY = {
  directEngineeringChannels: "Direct Engineering Channels",
  directExecutiveLine: "Direct Executive Line",
  skipAccountManagersConnectDirectlyWith: "Skip account managers. Connect directly with principal software engineers.",
  directEmail: COMMON.channels.directEmail,
  emailCopied: "Email copied",
  copyEmailToClipboard: "Copy email to clipboard",
  instantConsultation: "Instant Consultation",
  chatOnWhatsapp: "Chat on WhatsApp",
} as const;

export const CONTACT_HERO_COPY = {
  home: COMMON.pages.home,
  symbol: COMMON.symbols.slash,
  contact: COMMON.pages.contact,
  letSBuildYourSystem: "Let's build your system",
  theRightWay: "the right way.",
  directCollaborationWithSeniorSoftwareArchitects: "Direct collaboration with senior software architects. Tell us about your product goals, desired timeline, or architectural requirements to receive a structured technical assessment.",
  directResponse: "Direct Response",
  projectRequirementsReview: "Project requirements review",
  mutualNda: "Mutual NDA",
  text100Confidential: "100% Confidential",
  directLine: "Direct Line",
  seniorEngineersOnly: "Senior engineers only",
  whatsappDirect: "WhatsApp Direct",
  instantResponse: "Instant Response",
  symbol2: COMMON.symbols.bullet,
  directContact: "Direct Contact",
  freeAssessment: "Free Assessment",
  scopeArchitecture: "Scope & Architecture",
  projectReview: COMMON.labels.projectReview,
  noSalespeople: "No Salespeople",
  guaranteedSla: COMMON.labels.guaranteedSla,
  zeroObligation: "Zero Obligation",
  letSBuildYourSystemThe: "Let's build your system the right way",
} as const;

export const CONTACT_PROCESS_COPY = {
  expectations: "Expectations",
  whatHappensNext: "What Happens Next?",
  aClearExecutionFrameworkFromIntake: "A clear execution framework from intake to launch.",
} as const;

// layout
export const FLOATING_CALL_BUTTON_COPY = {
  whatsappMessage: "Hi Simpluxe! I'd like to discuss a project.",
  whatsapp: COMMON.channels.whatsapp,
  callUs: "Call Us",
  closeContactOptions: "Close contact options",
  openContactOptions: "Open contact options",
} as const;
