import { COMMON } from "./common";

// lead-options
export const PROJECT_TYPES = [
  COMMON.serviceNames.websites,
  COMMON.serviceNames.webApplications,
  COMMON.serviceNames.ecommerce,
  COMMON.serviceNames.mobileApps,
  COMMON.serviceNames.saas,
  COMMON.serviceNames.branding,
  COMMON.serviceNames.uiUx,
  COMMON.serviceNames.customSoftware,
  "Something Else",
  "Not Sure Yet",
] as const;

// leads
export const LEAD_DIALOG_COPY = {
  startAProject: COMMON.actions.startProject,
  tellUsWhatYouWantTo: "Tell us what you want to build. We'll help you strip away the noise and ship a focused product.",
} as const;

export const LEAD_FORM_COPY = {
  whatsappMessage: "Hi Simpluxe, I'd like to discuss a project.",
  whatsappProjectMessage: (description: string) => `Hi Simpluxe, I'm interested in discussing this project: ${description}...`,
  reviewResponse: (responseTime: string) => `We will review your requirements and get back to you ${responseTime}.`,
  successResponse: (responseTime: string) => `We'll review your project and get back to you ${responseTime}.`,
  successTitle: "Thanks — we've got it.",
  successDescription: "We'll review your project details and get back to you shortly.",
  emailUs: "Email us (",
  emailSuffix: ")",
  whatsapp: COMMON.channels.whatsapp,
  firstName: "First Name",
  firstNamePlaceholder: "First name",
  lastName: "Last Name",
  lastNamePlaceholder: "Last name",
  email: "Email",
  enterYourEmailAddress: "Enter your email address",
  whatsappPhoneOptional: "WhatsApp / Phone (optional)",
  whatsappOrPhone: "WhatsApp or phone",
  projectCategory: "Project Category",
  companyOptional: "Company (optional)",
  companyName: "Company name",
  projectDescription: "Project description",
  descriptionPlaceholder: "Describe your product goals, architectural challenges, or target timeline...",
  sendingScopingRequest: "Sending scoping request...",
  sendProjectScopingRequest: "Send Project Scoping Request",
  reviewDescription: "We will review your requirements and get back to you shortly.",
  encryptionBadge: "256-Bit SSL Encrypted",
  badgeSeparator: COMMON.symbols.bullet,
  mutualNdaProtected: "Mutual NDA Protected",
  zeroSpamGuarantee: "Zero Spam Guarantee",
  preferDirectMessaging: "Prefer direct messaging?",
  directEmail: COMMON.channels.directEmail,
} as const;

export const LEAD_ACTIONS_COPY = {
  unavailable: "Our submission service is temporarily unavailable. Please try again later.",
  unavailableWithContacts: (channels: string[]) => `Our submission service is temporarily unavailable. Please reach us directly via ${channels.join(" or ")}.`,
  whatsappChannel: COMMON.channels.whatsapp,
  emailChannel: (email: string) => `email (${email})`,
  pleaseCorrectTheHighlightedErrors: "Please correct the highlighted errors.",
  failedToSaveYourSubmissionPlease: "Failed to save your submission. Please reach out to us directly.",
  anUnexpectedErrorOccurredPleaseReach: "An unexpected error occurred. Please reach out to us directly.",
} as const;

export const LEAD_SCHEMA_COPY = {
  firstNameMustBeAtLeast: "First name must be at least 2 characters",
  firstNameMustBeLessThan: "First name must be less than 50 characters",
  lastNameIsRequired: "Last name is required",
  lastNameMustBeLessThan: "Last name must be less than 50 characters",
  pleaseEnterAValidEmailAddress: "Please enter a valid email address",
  phoneNumberMustBeAtMost: "Phone number must be at most 30 characters",
  companyNameMustBeAtMost: "Company name must be at most 100 characters",
  pleaseDescribeYourProjectInAt: "Please describe your project in at least 10 characters",
  descriptionMustBeLessThan2000: "Description must be less than 2000 characters",
  consentIsRequired: "Consent is required",
} as const;
