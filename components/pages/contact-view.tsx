import { ContactHero } from "@/components/contact/contact-hero";
import { ContactChannels } from "@/components/contact/contact-channels";
import { LeadForm } from "@/components/leads/lead-form";
import { Container } from "@/components/ui/container";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { CONTACT_SECTION_CONTENT } from "@/lib/data/contact";

export function ContactView() {
  return (
    <>
      {/* ── 1. Full-Width Hero Section ── */}
      <ContactHero />

      {/* ── Main Structured Showcase Area ── */}
      <Container className="flex flex-col gap-16 py-12 md:py-16 lg:gap-20 lg:py-24">
        
        {/* ── 2. Split Area: Direct Channels (5) + Form (7) ── */}
        <div className="grid grid-cols-1 gap-8 items-start lg:grid-cols-12 lg:gap-10">
          
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
                  <span className="text-primary">
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
