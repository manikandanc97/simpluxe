"use client";

import { useState } from "react";
import { SITE } from "@/lib/content/site";
import { AnimatedMail } from "@/components/ui/animated-icons/convenience-icons";
import { WhatsAppIcon } from "@/components/work/tech-icons";
import { ArrowRightIcon, CheckIcon, CopyIcon } from "@animateicons/react/lucide";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function ContactChannels() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    if (SITE.email) {
      navigator.clipboard.writeText(SITE.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    }
  };

  return (
    <Card className="flex flex-col gap-6 bg-transparent border-none shadow-none p-0 text-left">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Badge variant="outline" size="lg">
            <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
            Direct Engineering Channels
          </Badge>
        </div>
        <CardTitle className="text-xl sm:text-2xl">Direct Executive Line</CardTitle>
        <CardDescription>
          Skip account managers. Connect directly with principal software engineers.
        </CardDescription>
      </CardHeader>

      <CardContent className="gap-4">
        {SITE.email && (
          <div className="flex items-center justify-between p-4 rounded-xl border border-border bg-muted/30 hover:bg-card hover:border-primary/40 transition-all duration-200 group shadow-2xs">
            <a
              href={`mailto:${SITE.email}`}
              className="flex items-center gap-4 flex-1 min-w-0"
            >
              <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 border border-primary/20 group-hover:scale-105 transition-transform">
                <AnimatedMail size={20} />
              </div>
              <div className="flex flex-col gap-0.5 truncate">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-muted-foreground uppercase tracking-wider">
                    Direct Email
                  </span>
                  <Badge variant="emerald" size="sm">
                    &lt; 24h SLA
                  </Badge>
                </div>
                <span className="text-sm font-bold text-foreground group-hover:text-primary transition-colors truncate">
                  {SITE.email}
                </span>
              </div>
            </a>
            <button
              type="button"
              onClick={handleCopyEmail}
              title="CopyIcon email to clipboard"
              className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors cursor-pointer shrink-0 ml-2"
            >
              {copiedEmail ? <CheckIcon size={16} className="text-primary" /> : <CopyIcon size={16} />}
            </button>
          </div>
        )}

        {SITE.whatsapp && (
          <a
            href={`https://wa.me/${SITE.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 rounded-xl border border-border bg-muted/30 hover:bg-card hover:border-emerald-500/40 transition-all duration-200 group shadow-2xs"
          >
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-200/60 group-hover:scale-105 transition-transform">
                <WhatsAppIcon className="w-5 h-5 text-emerald-600" />
              </div>
              <div className="flex flex-col gap-0.5">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-muted-foreground uppercase tracking-wider">
                    Instant Consultation
                  </span>
                  <Badge variant="emerald" size="sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Available Now
                  </Badge>
                </div>
                <span className="text-sm font-bold text-foreground group-hover:text-emerald-700 transition-colors">
                  Chat on WhatsApp
                </span>
              </div>
            </div>
            <ArrowRightIcon size={16} className="text-muted-foreground group-hover:text-emerald-600 group-hover:translate-x-1 transition-all" />
          </a>
        )}
      </CardContent>


    </Card>
  );
}
