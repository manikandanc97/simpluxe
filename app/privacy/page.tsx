import { Container } from "@/components/ui/container";
import { AmbientBackground } from "@/components/ui/ambient-background";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Simpluxe.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="relative min-h-screen w-full bg-background text-foreground overflow-hidden pt-24 pb-16">
      <AmbientBackground screen="about" />
      <Container size="content" className="relative z-10 flex flex-col gap-8 mt-12 md:mt-20">
        <div className="flex flex-col gap-4 border-b border-border pb-8">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground text-sm">
            Last updated: October 5, 2026
          </p>
        </div>

        <div className="flex flex-col gap-8 text-muted-foreground text-sm md:text-base leading-relaxed mb-16">
          <section className="flex flex-col gap-3">
            <h2 className="text-xl font-bold text-foreground">1. Introduction</h2>
            <p>
              At Simpluxe, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-xl font-bold text-foreground">2. Information We Collect</h2>
            <p>
              We may collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and Services, when you participate in activities on the Website or otherwise when you contact us.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Personal and Contact Data</li>
              <li>Credentials and Authentication Data</li>
              <li>Payment Data</li>
            </ul>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-xl font-bold text-foreground">3. How We Use Your Information</h2>
            <p>
              We use personal information collected via our Website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-xl font-bold text-foreground">4. Contact Us</h2>
            <p>
              If you have questions or comments about this notice, you may email us at <a href="mailto:connect@simpluxe.in" className="text-primary hover:underline">connect@simpluxe.in</a>.
            </p>
          </section>
        </div>
      </Container>
    </div>
  );
}
