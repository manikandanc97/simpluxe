import { Container } from "@/components/ui/container";
import { AmbientBackground } from "@/components/ui/ambient-background";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Simpluxe.",
};

export default function TermsOfServicePage() {
  return (
    <div className="relative min-h-screen w-full bg-background text-foreground overflow-hidden pt-24 pb-16">
      <AmbientBackground screen="about" />
      <Container size="content" className="relative z-10 flex flex-col gap-8 mt-12 md:mt-20">
        <div className="flex flex-col gap-4 border-b border-border pb-8">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground">
            Terms of Service
          </h1>
          <p className="text-muted-foreground text-sm">
            Last updated: October 5, 2026
          </p>
        </div>

        <div className="flex flex-col gap-8 text-muted-foreground text-sm md:text-base leading-relaxed mb-16">
          <section className="flex flex-col gap-3">
            <h2 className="text-xl font-bold text-foreground">1. Agreement to Terms</h2>
            <p>
              These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Simpluxe ("we," "us" or "our"), concerning your access to and use of our website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-xl font-bold text-foreground">2. Intellectual Property Rights</h2>
            <p>
              Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site and the trademarks, service marks, and logos contained therein are owned or controlled by us or licensed to us.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-xl font-bold text-foreground">3. User Representations</h2>
            <p>
              By using the Site, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-xl font-bold text-foreground">4. Modifications and Interruptions</h2>
            <p>
              We reserve the right to change, modify, or remove the contents of the Site at any time or for any reason at our sole discretion without notice. However, we have no obligation to update any information on our Site.
            </p>
          </section>
        </div>
      </Container>
    </div>
  );
}
