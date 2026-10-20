"use client";

import { AnimatedIcon } from "@/components/ui/animated-icon";
import { CONTACT_CHANNELS_COPY } from "@/lib/content/contact";

import { useEffect, useRef, useState } from "react";
import { SITE } from "@/lib/content/site";
import { AnimatedMail } from "@/components/ui/animated-icons/convenience-icons";
import { WhatsAppIcon } from "@/components/contact/whatsapp-icon";
import { ArrowRightIcon } from "@animateicons/react/lucide/arrow-right-icon";
import { CheckIcon } from "@animateicons/react/lucide/check-icon";
import { CopyIcon } from "@animateicons/react/lucide/copy-icon";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function ContactChannels() {
  const mapQuery = encodeURIComponent(SITE.contactMapCoordinates);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const copyTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  useEffect(() => () => clearTimeout(copyTimer.current), []);

  const handleCopyEmail = async () => {
    if (!SITE.email) return;
    try {
      await navigator.clipboard.writeText(SITE.email);
      setCopiedEmail(true);
      clearTimeout(copyTimer.current);
      copyTimer.current = setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      setCopiedEmail(false);
    }
  };

  return (
    <Card className="flex flex-col gap-6 bg-transparent border-none shadow-none p-0 text-left">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Badge variant="outline" size="lg">
            <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
            {CONTACT_CHANNELS_COPY.directEngineeringChannels}</Badge>
        </div>
        <CardTitle className="text-xl sm:text-2xl">{CONTACT_CHANNELS_COPY.directExecutiveLine}</CardTitle>
        <CardDescription>
          {CONTACT_CHANNELS_COPY.skipAccountManagersConnectDirectlyWith}</CardDescription>
      </CardHeader>

      <CardContent className="gap-4">
        {SITE.email && (
          <div className="flex items-center justify-between gap-2 p-4 rounded-xl border border-border bg-muted/30 transition-all duration-200 shadow-2xs hover:bg-card hover:border-primary/40 group">
            <a
              href={`mailto:${SITE.email}`}
              className="flex items-center gap-4 flex-1 min-w-0"
            >
              <div className="size-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 border border-primary/20 transition-transform group-hover:scale-105">
                <AnimatedMail size={20} />
              </div>
              <div className="flex flex-col gap-0.5 truncate">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-muted-foreground uppercase tracking-wider">
                    {CONTACT_CHANNELS_COPY.directEmail}</span>
                  {SITE.responseTime && <Badge variant="emerald" size="sm">{SITE.responseTime}</Badge>}
                </div>
                <span className="text-sm font-bold text-foreground transition-colors truncate group-hover:text-primary">
                  {SITE.email}
                </span>
              </div>
            </a>
            <button
              type="button"
              onClick={handleCopyEmail}
              title={copiedEmail ? CONTACT_CHANNELS_COPY.emailCopied : CONTACT_CHANNELS_COPY.copyEmailToClipboard}
              aria-label={copiedEmail ? CONTACT_CHANNELS_COPY.emailCopied : CONTACT_CHANNELS_COPY.copyEmailToClipboard}
              className="p-2 rounded-lg text-muted-foreground transition-colors cursor-pointer shrink-0 hover:text-primary hover:bg-primary/10"
            >
              {copiedEmail ? <AnimatedIcon icon={CheckIcon} size={16} className="text-primary" /> : <AnimatedIcon icon={CopyIcon} size={16} />}
            </button>
          </div>
        )}

        {SITE.whatsapp && (
          <a
            href={`https://wa.me/${SITE.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 rounded-xl border border-border bg-muted/30 transition-all duration-200 shadow-2xs hover:bg-card hover:border-emerald-500/40 group"
          >
            <div className="flex items-center gap-4">
              <div className="size-11 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-200/60 transition-transform group-hover:scale-105">
                <WhatsAppIcon className="w-5 h-5 text-emerald-600" />
              </div>
              <div className="flex flex-col gap-0.5">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-muted-foreground uppercase tracking-wider">
                    {CONTACT_CHANNELS_COPY.instantConsultation}</span>
                  <Badge variant="emerald" size="sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    {SITE.availability}
                  </Badge>
                </div>
                <span className="text-sm font-bold text-foreground transition-colors group-hover:text-emerald-700">
                  {CONTACT_CHANNELS_COPY.chatOnWhatsapp}</span>
              </div>
            </div>
            <AnimatedIcon icon={ArrowRightIcon} size={16} className="text-muted-foreground transition-all group-hover:text-emerald-600 group-hover:translate-x-1" />
          </a>
        )}
        {SITE.contactAddress && (
          <div className="overflow-hidden rounded-xl border border-border bg-card shadow-2xs">
            <iframe
              src={`https://www.google.com/maps?q=${mapQuery}&z=17&output=embed`}
              title={CONTACT_CHANNELS_COPY.mapTitle}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="block h-56 w-full border-0 sm:h-64"
            />
          </div>
        )}
      </CardContent>


    </Card>
  );
}
