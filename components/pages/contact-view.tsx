import { ContactHero } from "@/components/contact/contact-hero";
import { ContactChannels } from "@/components/contact/contact-channels";
import { LeadForm } from "@/components/leads/lead-form";
import { Container } from "@/components/ui/container";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { CONTACT_SECTION_CONTENT } from "@/lib/content/contact";

export function ContactView() {
  return (
    <>
      {/* ── 1. Full-Width Hero Section ── */}
      <ContactHero />

      {/* ── Main Structured Showcase Area ── */}
      <Container className="pt-10 sm:pt-12 lg:pt-14 pb-16 md:pb-20 lg:pb-24 flex flex-col gap-16 sm:gap-20">
        
        {/* ── 2. Split Area: Direct Channels (5) + Form (7) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* ── LEFT COLUMN: Channels ── */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <ContactChannels />
          </div>

          {/* ── RIGHT COLUMN: Interactive Lead Form Card ── */}
          <div className="lg:col-span-7">
            <Card variant="elevated" padding="default" className="relative flex flex-col gap-6 overflow-hidden text-left">
              {/* Subtle Ambient Backing Glow */}
              <div className="pointer-events-none absolute -top-12 -right-12 w-64 h-64 rounded-full bg-rose-100/40 blur-3xl -z-10" />

              <CardHeader>
                <CardTitle className="text-2xl sm:text-3xl">
                  {CONTACT_SECTION_CONTENT.titleLine1}{" "}
                  <span className="brand-gradient-text">
                    {CONTACT_SECTION_CONTENT.titleLine2}
                  </span>
                </CardTitle>
              </CardHeader>

              <LeadForm />
            </Card>
          </div>

        </div>

      </Container>
    </>
  );
}
