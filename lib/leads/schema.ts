import { z } from "zod";

export const PROJECT_TYPES = [
  "Websites",
  "Web applications",
  "E-commerce",
  "Mobile apps",
  "SaaS products",
  "Branding & identity",
  "UI/UX design",
  "Custom software",
  "Something Else",
  "Not Sure Yet",
] as const;

const LEAD_SOURCES = [
  "cta",
  "cta-schedule",
  "navbar",
  "mobile-nav",
  "footer",
  "what-we-build",
  "services-configurator",
  "how-we-work",
  "about",
  "contact",
] as const;

export const leadSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(2, "First name must be at least 2 characters")
    .max(50, "First name must be less than 50 characters"),
  lastName: z
    .string()
    .trim()
    .min(1, "Last name is required")
    .max(50, "Last name must be less than 50 characters"),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address"),
  phone: z
    .string()
    .trim()
    .max(30, "Phone number must be at most 30 characters")
    .optional()
    .or(z.literal("")),
  company: z
    .string()
    .trim()
    .max(100, "Company name must be at most 100 characters")
    .optional()
    .or(z.literal("")),
  projectType: z
    .enum(PROJECT_TYPES)
    .optional()
    .or(z.literal("")),
  goal: z
    .string()
    .trim()
    .max(200)
    .optional()
    .or(z.literal("")),
  stage: z
    .string()
    .trim()
    .max(100)
    .optional()
    .or(z.literal("")),
  description: z
    .string()
    .trim()
    .min(10, "Please describe your project in at least 10 characters")
    .max(2000, "Description must be less than 2000 characters"),
  source: z.enum(LEAD_SOURCES),
  blueprintSummary: z
    .string()
    .trim()
    .max(1000)
    .optional()
    .or(z.literal("")),
  website: z
    .string()
    .max(0, "Honeypot filled")
    .optional()
    .or(z.literal("")),
  t: z.coerce.number(),
  consent: z.literal(true, { message: "Consent is required" }),
});

export type LeadInput = z.infer<typeof leadSchema>;

export type LeadState = {
  ok: boolean;
  message?: string;
  fieldErrors?: Record<string, string[]>;
};
