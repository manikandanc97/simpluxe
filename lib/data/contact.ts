import { COMMON } from "./common";
import { BUSINESS_ENTITY } from "./site";

// contact
export const CONTACT_SECTION_CONTENT = {
  titleLine1: "Start a Technical",
  titleLine2: "Conversation.",
};

// contact
export const CONTACT_CHANNELS_COPY = {
  directEngineeringChannels: "Direct Engineering Channels",
  directExecutiveLine: "Direct Phone Line",
  skipAccountManagersConnectDirectlyWith: `Contact ${BUSINESS_ENTITY.name} directly about a website, application, product design or custom software project.`,
  directEmail: COMMON.channels.directEmail,
  emailCopied: "Email copied",
  copyEmailToClipboard: "Copy email to clipboard",
  instantConsultation: "Project Enquiry",
  chatOnWhatsapp: "Chat on WhatsApp",
  phone: "Phone",
  officeLocation: "Office location",
  openInMaps: "Open in Google Maps",
  mapTitle: `${BUSINESS_ENTITY.name} office location`,
} as const;
export const CONTACT_HERO_COPY = {
  letSBuildYourSystem: "Let's build your system ",
  theRightWay: "the right way.",
  directCollaborationWithSeniorSoftwareArchitects: `Contact ${BUSINESS_ENTITY.name} to discuss your website, custom software, web application, SaaS product or mobile app requirements.`,
} as const;
