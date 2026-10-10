import { LEAD_SCHEMA_COPY } from "@/lib/content/leads";
import { z } from "zod";

import { PROJECT_TYPES } from "@/lib/content/leads";

export { PROJECT_TYPES };

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
    .min(2, LEAD_SCHEMA_COPY.firstNameMustBeAtLeast)
    .max(50, LEAD_SCHEMA_COPY.firstNameMustBeLessThan),
  lastName: z
    .string()
    .trim()
    .min(1, LEAD_SCHEMA_COPY.lastNameIsRequired)
    .max(50, LEAD_SCHEMA_COPY.lastNameMustBeLessThan),
  email: z
    .string()
    .trim()
    .email(LEAD_SCHEMA_COPY.pleaseEnterAValidEmailAddress),
  phone: z
    .string()
    .trim()
    .max(30, LEAD_SCHEMA_COPY.phoneNumberMustBeAtMost)
    .optional()
    .or(z.literal("")),
  company: z
    .string()
    .trim()
    .max(100, LEAD_SCHEMA_COPY.companyNameMustBeAtMost)
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
    .min(10, LEAD_SCHEMA_COPY.pleaseDescribeYourProjectInAt)
    .max(2000, LEAD_SCHEMA_COPY.descriptionMustBeLessThan2000),
  source: z.enum(LEAD_SOURCES),
  blueprintSummary: z
    .string()
    .trim()
    .max(1000)
    .optional()
    .or(z.literal("")),
  website: z
    .string()
    .max(200)
    .optional()
    .or(z.literal("")),
  t: z.coerce.number().int().positive(),
  consent: z.literal(true, { message: LEAD_SCHEMA_COPY.consentIsRequired }),
});

export type LeadInput = z.infer<typeof leadSchema>;

export type LeadState = {
  ok: boolean;
  message?: string;
  fieldErrors?: Record<string, string[]>;
};
