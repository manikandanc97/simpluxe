"use client";

import { LEAD_FORM_COPY } from "@/lib/content/leads";

import { AnimatedMail, AnimatedMessageSquare, AnimatedSend } from "@/components/ui/animated-icons/convenience-icons";
import { CelebratoryButton } from "@/components/ui/celebratory-button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FormField, FormLabel, FormMessage } from "@/components/ui/form";
import { submitLead } from "@/lib/leads/actions";
import { type LeadInput, type LeadState, PROJECT_TYPES } from "@/lib/leads/schema";
import { SITE } from "@/lib/content/site";
import { fireCelebratoryConfetti } from "@/lib/confetti";
import { CircleCheckIcon } from "@animateicons/react/lucide/circle-check-icon";
import { LockIcon } from "@animateicons/react/lucide/lock-icon";
import { ShieldCheckIcon } from "@animateicons/react/lucide/shield-check-icon";
import { ChevronDownIcon } from "@animateicons/react/lucide/chevron-down-icon";
import { useActionState, useState, useEffect, useId, useRef } from "react";
import { cn } from "@/lib/utils";

interface LeadFormProps {
  prefill?: Partial<LeadInput>;
  onSuccess?: () => void;
}

const initialState: LeadState = {
  ok: false,
};

export function LeadForm({ prefill, onSuccess }: LeadFormProps) {
  const [state, formAction, isPending] = useActionState(submitLead, initialState);
  const [selectedProjectType, setSelectedProjectType] = useState<string>(
    prefill?.projectType || PROJECT_TYPES[0]
  );
  const formId = useId();
  const fieldId = (name: string) => `${formId}-lead-${name}`;
  const successNotified = useRef(false);
  const [mountTime] = useState(() => Date.now());

  useEffect(() => {
    if (state.ok && !successNotified.current) {
      successNotified.current = true;
      fireCelebratoryConfetti();
      onSuccess?.();
    }
  }, [state.ok, onSuccess]);

  if (state.ok) {
    return (
      <div className="py-12 flex flex-col items-center text-center gap-4">
        <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-200/80 flex items-center justify-center">
          <CircleCheckIcon className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold tracking-tight text-foreground font-satoshi">{LEAD_FORM_COPY.successTitle}</h3>
        <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
          {SITE.responseTime
            ? LEAD_FORM_COPY.successResponse(SITE.responseTime)
            : LEAD_FORM_COPY.successDescription}
        </p>
      </div>
    );
  }

  const encodedSummary = encodeURIComponent(
    prefill?.description
      ? LEAD_FORM_COPY.whatsappProjectMessage(prefill.description.slice(0, 100))
      : LEAD_FORM_COPY.whatsappMessage
  );

  return (
    <form action={formAction} className="flex flex-col gap-4 text-left font-satoshi">
      {/* Hidden honeypot and anti-spam fields */}
      <div aria-hidden="true" style={{ display: "none" }}>
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          defaultValue=""
        />
        <input type="hidden" name="t" value={mountTime} />
        <input type="hidden" name="source" value={prefill?.source || "contact"} />
        <input type="hidden" name="consent" value="true" />
        {prefill?.blueprintSummary && (
          <input type="hidden" name="blueprintSummary" value={prefill.blueprintSummary} />
        )}
        {prefill?.goal && <input type="hidden" name="goal" value={prefill.goal} />}
        {prefill?.stage && <input type="hidden" name="stage" value={prefill.stage} />}
      </div>

      {/* Global Error Summary */}
      {state.message && !state.ok && (
        <div
          role="alert"
          className="p-4 text-xs sm:text-sm rounded-xl bg-destructive/10 text-destructive border border-destructive/20"
        >
          <p className="font-semibold">{state.message}</p>
          {(SITE.email || SITE.whatsapp) && (
            <div className="mt-2 flex gap-4 text-xs font-semibold">
              {SITE.email && (
                <a href={`mailto:${SITE.email}`} className="underline hover:opacity-80">
                  {LEAD_FORM_COPY.emailUs}{SITE.email}{LEAD_FORM_COPY.emailSuffix}</a>
              )}
              {SITE.whatsapp && (
                <a
                  href={`https://wa.me/${SITE.whatsapp}?text=${encodedSummary}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:opacity-80"
                >
                  {LEAD_FORM_COPY.whatsapp}</a>
              )}
            </div>
          )}
        </div>
      )}


      {/* First Name & Last Name (2-col grid) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <FormField>
          <FormLabel htmlFor={fieldId("first-name")} required>
            {LEAD_FORM_COPY.firstName}</FormLabel>
          <Input
            id={fieldId("first-name")}
            name="firstName"
            required
            defaultValue={prefill?.firstName || ""}
            placeholder={LEAD_FORM_COPY.firstNamePlaceholder}
            aria-required="true"
            aria-invalid={Boolean(state.fieldErrors?.firstName)}
            aria-describedby={state.fieldErrors?.firstName ? fieldId("first-name-error") : undefined}
          />
          <FormMessage id={fieldId("first-name-error")}>{state.fieldErrors?.firstName?.[0]}</FormMessage>
        </FormField>

        <FormField>
          <FormLabel htmlFor={fieldId("last-name")} required>
            {LEAD_FORM_COPY.lastName}</FormLabel>
          <Input
            id={fieldId("last-name")}
            name="lastName"
            required
            defaultValue={prefill?.lastName || ""}
            placeholder={LEAD_FORM_COPY.lastNamePlaceholder}
            aria-required="true"
            aria-invalid={Boolean(state.fieldErrors?.lastName)}
            aria-describedby={state.fieldErrors?.lastName ? fieldId("last-name-error") : undefined}
          />
          <FormMessage id={fieldId("last-name-error")}>{state.fieldErrors?.lastName?.[0]}</FormMessage>
        </FormField>
      </div>

      {/* Email & Phone (2-col grid) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <FormField>
          <FormLabel htmlFor={fieldId("email")} required>
            {LEAD_FORM_COPY.email}</FormLabel>
          <Input
            id={fieldId("email")}
            name="email"
            type="email"
            required
            defaultValue={prefill?.email || ""}
            placeholder={LEAD_FORM_COPY.enterYourEmailAddress}
            aria-required="true"
            aria-invalid={Boolean(state.fieldErrors?.email)}
            aria-describedby={state.fieldErrors?.email ? fieldId("email-error") : undefined}
          />
          <FormMessage id={fieldId("email-error")}>{state.fieldErrors?.email?.[0]}</FormMessage>
        </FormField>

        <FormField>
          <FormLabel htmlFor={fieldId("phone")}>
            {LEAD_FORM_COPY.whatsappPhoneOptional}</FormLabel>
          <Input
            id={fieldId("phone")}
            name="phone"
            type="tel"
            defaultValue={prefill?.phone || ""}
            placeholder={LEAD_FORM_COPY.whatsappOrPhone}
            aria-invalid={Boolean(state.fieldErrors?.phone)}
            aria-describedby={state.fieldErrors?.phone ? fieldId("phone-error") : undefined}
          />
          <FormMessage id={fieldId("phone-error")}>{state.fieldErrors?.phone?.[0]}</FormMessage>
        </FormField>
      </div>

      {/* Project Category & Company (2-col grid) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <FormField>
          <FormLabel htmlFor={fieldId("project-type")} required>{LEAD_FORM_COPY.projectCategory}</FormLabel>
          <div className="relative">
            <select
              id={fieldId("project-type")}
              name="projectType"
              required
              value={selectedProjectType}
              onChange={(event) => setSelectedProjectType(event.target.value)}
              aria-invalid={Boolean(state.fieldErrors?.projectType)}
              aria-describedby={state.fieldErrors?.projectType ? fieldId("project-type-error") : undefined}
              className={cn("w-full h-10 sm:h-11 px-4 pr-10 rounded-xl bg-card border border-border text-xs sm:text-sm font-semibold text-foreground appearance-none shadow-2xs hover:border-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring")}
            >
              {PROJECT_TYPES.map((type) => <option key={type} value={type}>{type}</option>)}
            </select>
            <ChevronDownIcon size={16} className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
          </div>
          <FormMessage id={fieldId("project-type-error")}>{state.fieldErrors?.projectType?.[0]}</FormMessage>
        </FormField>

        {/* Company */}
        <FormField>
          <FormLabel htmlFor={fieldId("company")}>
            {LEAD_FORM_COPY.companyOptional}</FormLabel>
          <Input
            id={fieldId("company")}
            name="company"
            defaultValue={prefill?.company || ""}
            placeholder={LEAD_FORM_COPY.companyName}
            aria-invalid={Boolean(state.fieldErrors?.company)}
            aria-describedby={state.fieldErrors?.company ? fieldId("company-error") : undefined}
          />
          <FormMessage id={fieldId("company-error")}>{state.fieldErrors?.company?.[0]}</FormMessage>
        </FormField>
      </div>

      {/* Description */}
      <FormField>
        <FormLabel htmlFor={fieldId("description")} required>
          {LEAD_FORM_COPY.projectDescription}</FormLabel>
        <Textarea
          id={fieldId("description")}
          name="description"
          required
          rows={4}
          defaultValue={prefill?.description || ""}
          placeholder={LEAD_FORM_COPY.descriptionPlaceholder}
          aria-required="true"
          aria-invalid={Boolean(state.fieldErrors?.description)}
          aria-describedby={state.fieldErrors?.description ? fieldId("description-error") : undefined}
        />
        <FormMessage id={fieldId("description-error")}>{state.fieldErrors?.description?.[0]}</FormMessage>
      </FormField>

      <div className="pt-2 flex flex-col gap-4">
        <CelebratoryButton
          type="submit"
          isPending={isPending}
          className="w-full"
        >
          {isPending ? (
            <span className="flex items-center gap-2">
              <span className="w-4 h-4 rounded-full border-2 border-primary-foreground/30 border-t-primary-foreground animate-spin" />
              <span>{LEAD_FORM_COPY.sendingScopingRequest}</span>
            </span>
          ) : (
            <>
              <span>{LEAD_FORM_COPY.sendProjectScopingRequest}</span>
              <AnimatedSend size={16} />
            </>
          )}
        </CelebratoryButton>
        <p className="text-xs text-muted-foreground text-center font-normal">
          {SITE.responseTime
            ? LEAD_FORM_COPY.reviewResponse(SITE.responseTime)
            : LEAD_FORM_COPY.reviewDescription}
        </p>
      </div>

      {/* Enterprise Trust & Security Badges */}
      <div className="pt-4 border-t border-border flex flex-wrap items-center justify-center gap-4 sm:gap-4 text-xs text-muted-foreground font-mono">
        <div className="flex items-center gap-1.5">
          <LockIcon size={13} className="text-emerald-600" />
          <span>{LEAD_FORM_COPY.encryptionBadge}</span>
        </div>
        <span>{LEAD_FORM_COPY.badgeSeparator}</span>
        <div className="flex items-center gap-1.5">
          <ShieldCheckIcon size={13} className="text-primary" />
          <span>{LEAD_FORM_COPY.mutualNdaProtected}</span>
        </div>
        <span>{LEAD_FORM_COPY.badgeSeparator}</span>
        <span>{LEAD_FORM_COPY.zeroSpamGuarantee}</span>
      </div>

      {/* Alternative direct contacts */}
      {(SITE.whatsapp || SITE.email) && (
        <div className="pt-4 border-t border-border flex items-center justify-center gap-4 text-xs text-muted-foreground">
          <span>{LEAD_FORM_COPY.preferDirectMessaging}</span>
          {SITE.whatsapp && (
            <a
              href={`https://wa.me/${SITE.whatsapp}?text=${encodedSummary}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 text-primary hover:underline font-semibold"
            >
              <AnimatedMessageSquare size={13} className="text-primary" />
              <span>{LEAD_FORM_COPY.whatsapp}</span>
            </a>
          )}
          {SITE.email && (
            <a
              href={`mailto:${SITE.email}`}
              className="group inline-flex items-center gap-1.5 text-primary hover:underline font-semibold"
            >
              <AnimatedMail size={13} className="text-primary" />
              <span>{LEAD_FORM_COPY.directEmail}</span>
            </a>
          )}
        </div>
      )}
    </form>
  );
}
