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
  reviewResponse: (responseTime: string) => `We will review your requirements and get back to you ${responseTime}.`,
  successResponse: (responseTime: string) => `We'll review your project and get back to you ${responseTime}.`,
  successEyebrow: "Enquiry received",
  successTitle: "You're all set.",
  successSubtitle: "Let's build something great.",
  successDescription: "Your project enquiry is with us. We'll review the details and get back to you shortly.",
  successNextTitle: "What happens next?",
  successNextDescription: "Our team will follow up by email with the next steps.",
  successDone: "All done",
  firstName: "First Name",
  firstNamePlaceholder: "First name *",
  lastName: "Last Name",
  lastNamePlaceholder: "Last name *",
  email: "Email",
  enterYourEmailAddress: "Email address *",
  whatsappPhone: "WhatsApp / Phone",
  whatsappOrPhone: "Phone with country code *",
  projectCategory: "Project Category",
  selectProjectCategory: "Project category *",
  companyOptional: "Company (optional)",
  companyName: "Company (optional)",
  projectDescription: "Project description",
  descriptionPlaceholder: "Tell us about your project, goals, and timeline *",
  sendingScopingRequest: "Sending...",
  sendProjectScopingRequest: "Send enquiry",
  consentDescription: "I agree to Simpluxe using my personal data to respond to this enquiry, as described in the",
  privacyPolicy: COMMON.pages.privacy,
  verificationFailed: "Verification could not load. Check your connection and try again.",
  retryVerification: "Retry verification",
  verificationPending: "Verifying your request...",
  reviewDescription: "We will review your requirements and get back to you shortly.",
} as const;

export const LEAD_ACTIONS_COPY = {
  verificationRequired: "Please complete the security verification and try again.",
  verificationUnavailable: "Security verification is temporarily unavailable. Please try again shortly.",
  tooManyRequests: "Too many enquiries. Please wait 15 minutes before trying again.",
  submittedTooQuickly: "Please take a moment to complete the form and try again.",
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
  phoneRequired: "Please enter your WhatsApp or phone number",
  invalidPhone: "Enter a valid phone number with country code, e.g. +91 9876543210",
  phoneNumberMustBeAtMost: "Phone number must be at most 30 characters",
  projectCategoryRequired: "Please select a project category",
  companyNameMustBeAtMost: "Company name must be at most 100 characters",
  pleaseDescribeYourProjectInAt: "Please describe your project in at least 10 characters",
  descriptionMustBeLessThan2000: "Description must be less than 2000 characters",
  consentIsRequired: "Consent is required",
} as const;
