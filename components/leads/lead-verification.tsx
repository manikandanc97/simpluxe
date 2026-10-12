"use client";

import Script from "next/script";
import { useEffect, useRef, useState } from "react";
import { LEAD_FORM_COPY } from "@/lib/content/leads";

type Turnstile = {
  render: (container: HTMLElement, options: Record<string, unknown>) => string;
  remove: (id: string) => void;
};

function getTurnstile(): Turnstile | undefined {
  return (window as Window & { turnstile?: Turnstile }).turnstile;
}

export function LeadVerification({ siteKey, onVerified }: {
  siteKey: string;
  onVerified: (verified: boolean) => void;
}) {
  const container = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);
  const [retry, setRetry] = useState(0);
  const [token, setToken] = useState("");

  useEffect(() => {
    const api = getTurnstile();
    if (!ready || !api || !container.current) return;
    onVerified(false);
    const id = api.render(container.current, {
      sitekey: siteKey,
      action: "lead",
      theme: "auto",
      size: "flexible",
      appearance: "interaction-only",
      retry: "never",
      "refresh-timeout": "manual",
      "response-field": false,
      callback: (value: string) => {
        setToken(value);
        setFailed(false);
        onVerified(true);
      },
      "expired-callback": () => {
        setToken("");
        onVerified(false);
      },
      "error-callback": () => {
        setToken("");
        setFailed(true);
        onVerified(false);
      },
      "timeout-callback": () => {
        setToken("");
        setFailed(true);
        onVerified(false);
      },
    });
    return () => {
      api.remove(id);
      onVerified(false);
    };
  }, [ready, siteKey, onVerified, retry]);

  return (
    <div className="min-w-0">
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        onReady={() => setReady(true)}
        onError={() => setFailed(true)}
      />
      <input type="hidden" name="cf-turnstile-response" value={token} />
      <div ref={container} />
      {failed ? (
        <div role="alert" className="flex flex-wrap items-center gap-2 text-xs text-destructive">
          <span>{LEAD_FORM_COPY.verificationFailed}</span>
          <button type="button" className="underline underline-offset-4" onClick={() => {
            if (!getTurnstile()) {
              window.location.reload();
              return;
            }
            setToken("");
            setFailed(false);
            setRetry((value) => value + 1);
          }}>{LEAD_FORM_COPY.retryVerification}</button>
        </div>
      ) : !token && (
        <p role="status" className="text-xs text-muted-foreground">{LEAD_FORM_COPY.verificationPending}</p>
      )}
    </div>
  );
}
