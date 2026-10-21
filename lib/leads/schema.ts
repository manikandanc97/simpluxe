import { LEAD_SCHEMA_COPY } from "@/lib/data/leads";
import { z } from "zod";

import { PROJECT_TYPES } from "@/lib/data/leads";

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
    .max(254)
    .email(LEAD_SCHEMA_COPY.pleaseEnterAValidEmailAddress),
  phone: z
    .string()
    .trim()
    .min(1, LEAD_SCHEMA_COPY.phoneRequired)
    .max(30, LEAD_SCHEMA_COPY.phoneNumberMustBeAtMost)
    .regex(/^\+?[\d\s().-]+$/, LEAD_SCHEMA_COPY.invalidPhone)
    .refine((value) => {
      const length = value.replace(/\D/g, "").length;
      return length >= 7 && length <= 15;
    }, LEAD_SCHEMA_COPY.invalidPhone),
  company: z
    .string()
    .trim()
    .max(100, LEAD_SCHEMA_COPY.companyNameMustBeAtMost)
    .optional()
    .or(z.literal("")),
  projectType: z.enum(PROJECT_TYPES, { error: LEAD_SCHEMA_COPY.projectCategoryRequired }),
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
  verificationAttempt?: string;
};
