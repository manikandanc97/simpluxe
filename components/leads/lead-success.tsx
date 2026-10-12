"use client";

import { useEffect, useId, useRef } from "react";
import { LEAD_FORM_COPY } from "@/lib/content/leads";
import { SITE } from "@/lib/content/site";
import { startSparklerCelebration } from "@/lib/celebration";

export function LeadSuccess({ onClose }: { onClose?: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const titleId = useId();
  const descriptionId = useId();

  useEffect(() => {
    cardRef.current?.focus({ preventScroll: true });
    if (canvasRef.current) return startSparklerCelebration(canvasRef.current);
  }, []);

  return (
    <div ref={cardRef} tabIndex={-1} aria-labelledby={titleId} aria-describedby={descriptionId}
      className="relative isolate overflow-hidden rounded-3xl border border-primary/15 bg-gradient-to-b from-primary/5 via-card to-card px-5 pb-7 text-center outline-none sm:px-8 sm:pb-8 motion-safe:animate-success-card font-satoshi">
      <div aria-hidden="true" className="pointer-events-none relative flex h-44 items-end justify-center pb-4">
        <div className="absolute top-6 h-32 w-32 rounded-full bg-primary/10 blur-2xl" />
        <div className="absolute bottom-1 h-28 w-28 rounded-full border border-primary/10" />
        <div className="absolute bottom-5 h-20 w-20 rounded-full border border-primary/15" />
        <canvas ref={canvasRef} className="pointer-events-none absolute inset-0 h-full w-full" />
        <span className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-elevated ring-4 ring-card motion-safe:animate-success-emblem">
          <svg viewBox="0 0 32 32" fill="none" className="h-8 w-8"><path d="m8 16 5 5 11-11" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </span>
      </div>

      <div role="status" aria-live="polite" aria-atomic="true">
        <p className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-card px-3 py-1 text-xs font-medium text-primary">
          <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-primary" />{LEAD_FORM_COPY.successEyebrow}
        </p>
        <h3 id={titleId} className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{LEAD_FORM_COPY.successTitle}</h3>
        <p className="mt-2 text-lg font-medium tracking-tight text-primary sm:text-xl">{LEAD_FORM_COPY.successSubtitle}</p>
        <p id={descriptionId} className="mx-auto mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
          {SITE.responseTime ? LEAD_FORM_COPY.successResponse(SITE.responseTime) : LEAD_FORM_COPY.successDescription}
        </p>
      </div>

      <div className="mx-auto mt-6 flex max-w-sm items-center justify-center gap-3 rounded-2xl border border-border/70 bg-card/80 px-4 py-3 text-left">
        <span aria-hidden="true" className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
          <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4"><path d="M4 6h16v12H4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /><path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /></svg>
        </span>
        <div><p className="text-xs font-semibold text-foreground">{LEAD_FORM_COPY.successNextTitle}</p><p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">{LEAD_FORM_COPY.successNextDescription}</p></div>
      </div>

      {onClose && <button type="button" onClick={onClose} className="mx-auto mt-6 flex w-full max-w-sm items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">{LEAD_FORM_COPY.successDone}</button>}
      <p className="mt-5 text-xs text-muted-foreground">{SITE.tagline}</p>
    </div>
  );
}
