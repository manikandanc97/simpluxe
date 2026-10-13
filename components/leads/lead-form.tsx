"use client";

import { AnimatedIcon } from "@/components/ui/animated-icon";
import { LEAD_FORM_COPY } from "@/lib/content/leads";

import { AnimatedSend } from "@/components/ui/animated-icons/convenience-icons";
import { CelebratoryButton } from "@/components/ui/celebratory-button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FormField, FormMessage } from "@/components/ui/form";
import { submitLead } from "@/lib/leads/actions";
import { leadSchema, type LeadInput, type LeadState, PROJECT_TYPES } from "@/lib/leads/schema";
import { SITE } from "@/lib/content/site";
import { LeadSuccess } from "./lead-success";
import { ChevronDownIcon } from "@animateicons/react/lucide/chevron-down-icon";
import { useActionState, useState, useEffect, useId, useRef, useCallback } from "react";
import { cn } from "@/lib/utils";
import { LeadVerification } from "./lead-verification";
import { getTurnstileSiteKey } from "@/lib/leads/turnstile";

interface LeadFormProps {
  prefill?: Partial<LeadInput>;
  onSuccess?: () => void;
  onClose?: () => void;
}

const initialState: LeadState = {
  ok: false,
};

export function LeadForm({ prefill, onSuccess, onClose }: LeadFormProps) {
  const [state, formAction, isPending] = useActionState(submitLead, initialState);
  const [selectedProjectType, setSelectedProjectType] = useState<string>(
    prefill?.projectType || ""
  );
  const formId = useId();
  const fieldId = (name: string) => `${formId}-lead-${name}`;
  const successNotified = useRef(false);
  const turnstileSiteKey = getTurnstileSiteKey();
  const [verified, setVerified] = useState(false);
  const [clientErrors, setClientErrors] = useState<Record<string, string[]> | null>(null);
  const [showVerificationError, setShowVerificationError] = useState(false);
  const [mountTime] = useState(() => Date.now());

  const validateForm = (form: HTMLFormElement) => {
    const data = new FormData(form);
    const result = leadSchema.safeParse({
      ...Object.fromEntries(data),
      consent: data.get("consent") === "true",
    });

    if (result.success) return {};

    const errors: Record<string, string[]> = {};
    for (const [field, messages] of Object.entries(result.error.flatten().fieldErrors)) {
      if (messages) errors[field] = messages;
    }
    return errors;
  };

  const fieldErrors = clientErrors ?? state.fieldErrors;

  const handleVerification = useCallback((isVerified: boolean) => {
    setVerified(isVerified);
    if (isVerified) setShowVerificationError(false);
  }, []);

  useEffect(() => {
    if (state.ok && !successNotified.current) {
      successNotified.current = true;
      onSuccess?.();
    }
  }, [state.ok, onSuccess]);

  if (state.ok) {
    return <LeadSuccess onClose={onClose} />;
  }

  return (
    <form
      action={formAction}
      noValidate
      onInput={(event) => {
        if (clientErrors || state.fieldErrors) {
          setClientErrors(validateForm(event.currentTarget));
        }
      }}
      onReset={() => {
        setClientErrors(null);
        setShowVerificationError(false);
      }}
      onSubmit={(event) => {
        const errors = validateForm(event.currentTarget);
        const hasFieldErrors = Object.keys(errors).length > 0;
        const needsVerification = Boolean(turnstileSiteKey) && !verified;

        setClientErrors(errors);
        setShowVerificationError(needsVerification);

        if (hasFieldErrors || isPending || needsVerification) {
          event.preventDefault();
          if (hasFieldErrors) {
            const firstInvalidField = Object.keys(errors)[0];
            const field = event.currentTarget.elements.namedItem(firstInvalidField);
            if (field instanceof HTMLElement) field.focus();
          }
        }
      }}
      className="flex flex-col gap-4 text-left font-satoshi"
    >
      {/* Hidden honeypot and anti-spam fields */}
      <div aria-hidden="true" className="hidden">
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          defaultValue=""
        />
        <input type="hidden" name="t" value={mountTime} />
        <input type="hidden" name="source" value={prefill?.source || "contact"} />
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
        </div>
      )}


      {/* First Name & Last Name (2-col grid) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <FormField>
          <Input
            id={fieldId("first-name")}
            aria-label={LEAD_FORM_COPY.firstName}
            autoComplete="given-name"
            maxLength={50}
            name="firstName"
            required
            minLength={2}
            defaultValue={prefill?.firstName || ""}
            placeholder={LEAD_FORM_COPY.firstNamePlaceholder}
            aria-required="true"
            aria-invalid={Boolean(fieldErrors?.firstName)}
            aria-describedby={fieldErrors?.firstName ? fieldId("first-name-error") : undefined}
          />
          <FormMessage id={fieldId("first-name-error")}>{fieldErrors?.firstName?.[0]}</FormMessage>
        </FormField>

        <FormField>
          <Input
            id={fieldId("last-name")}
            aria-label={LEAD_FORM_COPY.lastName}
            autoComplete="family-name"
            maxLength={50}
            name="lastName"
            required
            defaultValue={prefill?.lastName || ""}
            placeholder={LEAD_FORM_COPY.lastNamePlaceholder}
            aria-required="true"
            aria-invalid={Boolean(fieldErrors?.lastName)}
            aria-describedby={fieldErrors?.lastName ? fieldId("last-name-error") : undefined}
          />
          <FormMessage id={fieldId("last-name-error")}>{fieldErrors?.lastName?.[0]}</FormMessage>
        </FormField>
      </div>

      {/* Email & Phone (2-col grid) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <FormField>
          <Input
            id={fieldId("email")}
            aria-label={LEAD_FORM_COPY.email}
            autoComplete="email"
            maxLength={254}
            name="email"
            type="email"
            required
            defaultValue={prefill?.email || ""}
            placeholder={LEAD_FORM_COPY.enterYourEmailAddress}
            aria-required="true"
            aria-invalid={Boolean(fieldErrors?.email)}
            aria-describedby={fieldErrors?.email ? fieldId("email-error") : undefined}
          />
          <FormMessage id={fieldId("email-error")}>{fieldErrors?.email?.[0]}</FormMessage>
        </FormField>

        <FormField>
          <Input
            id={fieldId("phone")}
            aria-label={LEAD_FORM_COPY.whatsappPhone}
            autoComplete="tel"
            maxLength={30}
            name="phone"
            type="tel"
            required
            aria-required="true"
            defaultValue={prefill?.phone || ""}
            placeholder={LEAD_FORM_COPY.whatsappOrPhone}
            aria-invalid={Boolean(fieldErrors?.phone)}
            aria-describedby={fieldErrors?.phone ? fieldId("phone-error") : undefined}
          />
          <FormMessage id={fieldId("phone-error")}>{fieldErrors?.phone?.[0]}</FormMessage>
        </FormField>
      </div>

      {/* Project Category & Company (2-col grid) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <FormField>
          <div data-animated-icon-target className="relative">
            <select
              id={fieldId("project-type")}
              aria-label={LEAD_FORM_COPY.projectCategory}
              name="projectType"
              required
              aria-required="true"
              value={selectedProjectType}
              onChange={(event) => setSelectedProjectType(event.target.value)}
              aria-invalid={Boolean(fieldErrors?.projectType)}
              aria-describedby={fieldErrors?.projectType ? fieldId("project-type-error") : undefined}
              className={cn(selectedProjectType ? "text-foreground" : "text-muted-foreground/60", "w-full h-10 sm:h-11 px-4 pr-10 rounded-xl bg-card border border-border text-xs sm:text-sm appearance-none shadow-2xs hover:border-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring")}
            >
              <option value="" disabled>{LEAD_FORM_COPY.selectProjectCategory}</option>
              {PROJECT_TYPES.map((type) => <option key={type} value={type}>{type}</option>)}
            </select>
            <AnimatedIcon icon={ChevronDownIcon} size={16} className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
          </div>
          <FormMessage id={fieldId("project-type-error")}>{fieldErrors?.projectType?.[0]}</FormMessage>
        </FormField>

        {/* Company */}
        <FormField>
          <Input
            id={fieldId("company")}
            aria-label={LEAD_FORM_COPY.companyOptional}
            autoComplete="organization"
            maxLength={100}
            name="company"
            defaultValue={prefill?.company || ""}
            placeholder={LEAD_FORM_COPY.companyName}
            aria-invalid={Boolean(fieldErrors?.company)}
            aria-describedby={fieldErrors?.company ? fieldId("company-error") : undefined}
          />
          <FormMessage id={fieldId("company-error")}>{fieldErrors?.company?.[0]}</FormMessage>
        </FormField>
      </div>

      {/* Description */}
      <FormField>
        <Textarea
          id={fieldId("description")}
          aria-label={LEAD_FORM_COPY.projectDescription}
          maxLength={2000}
          name="description"
          required
          minLength={10}
          rows={4}
          defaultValue={prefill?.description || ""}
          placeholder={LEAD_FORM_COPY.descriptionPlaceholder}
          aria-required="true"
          aria-invalid={Boolean(fieldErrors?.description)}
          aria-describedby={fieldErrors?.description ? fieldId("description-error") : undefined}
        />
        <FormMessage id={fieldId("description-error")}>{fieldErrors?.description?.[0]}</FormMessage>
      </FormField>

      <FormField>
        <div className="flex items-start gap-3 pt-1">
          <input
            id={fieldId("consent")}
            name="consent"
            type="checkbox"
            required
            value="true"
            aria-invalid={Boolean(fieldErrors?.consent)}
            aria-describedby={fieldErrors?.consent ? fieldId("consent-error") : undefined}
            className="mt-0.5 size-4 shrink-0 cursor-pointer accent-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          />
          <label htmlFor={fieldId("consent")} className="cursor-pointer text-xs leading-relaxed text-muted-foreground sm:text-sm">
            {LEAD_FORM_COPY.consentDescription}{" "}
            <a href="/privacy" className="font-medium text-foreground underline underline-offset-4 hover:text-primary">
              {LEAD_FORM_COPY.privacyPolicy}
            </a>{" "}
            <span aria-hidden="true" className="text-primary">*</span>
          </label>
        </div>
        <FormMessage id={fieldId("consent-error")}>{fieldErrors?.consent?.[0]}</FormMessage>
      </FormField>

      {turnstileSiteKey && (
        <LeadVerification
          key={state.verificationAttempt ?? "initial"}
          siteKey={turnstileSiteKey}
          onVerified={handleVerification}
        />
      )}
      {showVerificationError && (
        <p role="alert" className="text-xs font-medium text-destructive">
          {LEAD_FORM_COPY.completeVerification}
        </p>
      )}

      <div className="pt-2 flex flex-col gap-3">
        <CelebratoryButton data-animated-icon-target
          type="submit"
          isPending={isPending}
          disabled={isPending}
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
    </form>
  );
}
