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
  const wrapper = useRef<HTMLDivElement>(null);
  const [compact, setCompact] = useState(false);
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);
  const [domainDenied, setDomainDenied] = useState(false);
  const [retry, setRetry] = useState(0);
  const [token, setToken] = useState("");

  useEffect(() => {
    if (!wrapper.current) return;
    const observer = new ResizeObserver(([entry]) => {
      setCompact(entry.contentRect.width < 300);
    });
    observer.observe(wrapper.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const api = getTurnstile();
    if (!ready || !api || !container.current) return;
    onVerified(false);
    const id = api.render(container.current, {
      sitekey: siteKey,
      action: "lead",
      theme: "light",
      size: compact ? "compact" : "normal",
      appearance: "always",
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
      "error-callback": (code: string) => {
        setToken("");
        setFailed(true);
        setDomainDenied(code === "110200");
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
  }, [ready, siteKey, onVerified, retry, compact]);

  return (
    <div ref={wrapper} className="flex min-w-0 flex-col items-start gap-2">
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        onReady={() => setReady(true)}
        onError={() => setFailed(true)}
      />
      <input type="hidden" name="cf-turnstile-response" value={token} />
      <div ref={container} />
      {failed ? (
        <div role="alert" className="flex flex-wrap items-center gap-2 text-xs text-destructive">
          <span>{domainDenied && process.env.NODE_ENV === "development"
            ? LEAD_FORM_COPY.verificationLocalDomainDenied
            : LEAD_FORM_COPY.verificationFailed}</span>
          <button type="button" className="underline underline-offset-4" onClick={() => {
            if (!getTurnstile()) {
              window.location.reload();
              return;
            }
            setToken("");
            setFailed(false);
            setDomainDenied(false);
            setRetry((value) => value + 1);
          }}>{LEAD_FORM_COPY.retryVerification}</button>
        </div>
      ) : !token && (
        <p role="status" className="text-xs text-muted-foreground">{LEAD_FORM_COPY.verificationPending}</p>
      )}
    </div>
  );
}
