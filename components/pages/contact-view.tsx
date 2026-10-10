import { AmbientBackground } from "@/components/ui/ambient-background";
import { ContactHero } from "@/components/contact/contact-hero";
import { ContactChannels } from "@/components/contact/contact-channels";
import { ContactProcess } from "@/components/contact/contact-process";
import { LeadForm } from "@/components/leads/lead-form";
import { Container } from "@/components/ui/container";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CONTACT_SECTION_CONTENT } from "@/lib/content/contact";

export function ContactView() {
  return (
    <div className="relative min-h-screen w-full bg-background text-foreground overflow-hidden">
      {/* ── Background Atmospheric Elements ── */}
      <AmbientBackground screen="contact" />
      <div className="absolute inset-0 bg-dots-soft opacity-35 pointer-events-none" />

      {/* ── 1. Hero Section (Breadcrumb, Title, Value Props & 3D Interactive Showcase) ── */}
      <ContactHero />

      {/* ── Main Structured Showcase Area ── */}
      <Container className="relative z-20 pb-16 md:pb-20 lg:pb-24 flex flex-col gap-16 sm:gap-20">
        
        {/* ── 2. Split Area: Direct Channels & Scoping Stepper (5) + Form (7) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* ── LEFT COLUMN: Channels & Stepper ── */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <ContactChannels />
            <ContactProcess />
          </div>

          {/* ── RIGHT COLUMN: Interactive Lead Form Card ── */}
          <div className="lg:col-span-7">
            <Card variant="elevated" padding="default" className="relative flex flex-col gap-6 overflow-hidden text-left">
              {/* Subtle Ambient Backing Glow */}
              <div className="pointer-events-none absolute -top-12 -right-12 w-64 h-64 rounded-full bg-rose-100/40 blur-3xl -z-10" />

              <CardHeader>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" size="lg">
                    <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                    {CONTACT_SECTION_CONTENT.badge}
                  </Badge>
                </div>
                <CardTitle className="text-2xl sm:text-3xl">
                  {CONTACT_SECTION_CONTENT.titleLine1}{" "}
                  <span className="brand-gradient-text">
                    {CONTACT_SECTION_CONTENT.titleLine2}
                  </span>
                </CardTitle>
                <CardDescription className="text-sm">
                  {CONTACT_SECTION_CONTENT.description}
                </CardDescription>
              </CardHeader>

              <LeadForm />
            </Card>
          </div>

        </div>

      </Container>
    </div>
  );
}
