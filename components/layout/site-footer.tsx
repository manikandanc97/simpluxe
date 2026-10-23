import { SITE_FOOTER_COPY } from "@/lib/data/layout";
import { Container } from "@/components/ui/container";
import { SITE } from "@/lib/data/site";
import { BrandLockup } from "@/components/ui/brand-lockup";
import Link from "next/link";
import { FOOTER_DATA } from "@/lib/data/layout";
import { getServicePath } from "@/lib/data/services";
import { FooterNav } from "./footer-nav";
import { FooterCtaButton } from "./footer-cta-button";
import {
  FooterAnimatedBadge,
  FooterAnimatedIcon,
  type FooterIconName,
} from "./footer-animated-badge";

interface SiteFooterProps {
  onStartProject?: () => void;
}

// ─── Internal reusable sub-components ────────────────────────────────────────

interface SocialIconLinkProps {
  href: string;
  label: string;
  className: string;
  icon: FooterIconName;
  iconSize?: number;
}

function SocialIconLink({ href, label, className, icon, iconSize }: SocialIconLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`size-11 rounded-full flex items-center justify-center transition-colors shadow-2xs ${className}`}
    >
      <FooterAnimatedIcon name={icon} size={iconSize} />
    </a>
  );
}

interface FooterContactRowProps {
  href: string;
  label: React.ReactNode;
  iconName: FooterIconName;
}

function FooterContactRow({ href, label, iconName }: FooterContactRowProps) {
  return (
    <a
      href={href}
      className="flex items-center gap-3.5 text-sm text-muted-foreground transition-colors hover:text-primary group"
    >
      <FooterAnimatedBadge name={iconName} />
      <span className="font-medium transition-colors break-all group-hover:text-primary">
        {label}
      </span>
    </a>
  );
}

export function SiteFooter({ onStartProject }: SiteFooterProps) {

  return (
    <footer className="w-full bg-slate-100 text-foreground border-t border-border relative overflow-hidden">
      <Container className="relative z-10 py-16">
        {/* Top Grid: Brand, Explore, Capabilities, Connect Card */}
        <div className="grid grid-cols-1 gap-10 pb-16 border-b border-border items-start md:grid-cols-2 lg:grid-cols-12 lg:gap-8">

          {/* Col 1: Brand & Socials (4 cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-6">
            <div className="flex flex-col gap-6">
              {/* Brand Logo */}
              <Link
                href="/"
                className="group inline-flex shrink-0 items-center rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-ring"
                aria-label={SITE_FOOTER_COPY.simpluxeHome}
              >
                <BrandLockup />
              </Link>

              <h2 className="text-xl font-extrabold text-heading leading-tight tracking-tight sm:text-2xl">
                {SITE_FOOTER_COPY.headlineLine1}<br />
                {SITE_FOOTER_COPY.headlineLine2Prefix}{" "}
                <span className="text-primary">
                  {SITE_FOOTER_COPY.headlineHighlight}
                </span>
              </h2>

              <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
                {FOOTER_DATA.brandDescription}
              </p>

              {/* Social Icons */}
              <div className="flex items-center gap-3 pt-1">
                {SITE.twitter && (
                  <SocialIconLink href={SITE.twitter} label={SITE_FOOTER_COPY.xTwitter} icon="twitter" iconSize={15} className="bg-card border border-border text-slate-950 hover:bg-secondary" />
                )}

                {SITE.linkedin && (
                  <SocialIconLink href={SITE.linkedin} label={SITE_FOOTER_COPY.linkedin} icon="linkedin" className="bg-sky-50 border border-sky-100 text-linkedin hover:bg-sky-100" />
                )}

                {SITE.instagram && (
                  <SocialIconLink href={SITE.instagram} label={SITE_FOOTER_COPY.instagram} icon="instagram" iconSize={17} className="bg-pink-50 border border-pink-100 text-instagram hover:bg-pink-100" />
                )}

                {SITE.youtube && (
                  <SocialIconLink href={SITE.youtube} label={SITE_FOOTER_COPY.youtube} icon="youtube" iconSize={17} className="bg-primary text-white hover:bg-primary-hover" />
                )}

                {SITE.github && (
                  <SocialIconLink href={SITE.github} label={SITE_FOOTER_COPY.github} icon="github" iconSize={17} className="bg-card border border-border text-zinc-800 hover:bg-secondary" />
                )}
              </div>
            </div>
          </div>

          {/* Col 2: Navigation / Explore (2 cols) */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <h3 className="text-xs font-bold uppercase tracking-widest text-heading">
              {FOOTER_DATA.exploreTitle}
            </h3>
            <FooterNav />
          </div>

          {/* Col 3: Capabilities (3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <h3 className="text-xs font-bold uppercase tracking-widest text-heading">
              {FOOTER_DATA.capabilitiesTitle}
            </h3>
            <ul className="flex flex-col gap-4.5 text-sm text-muted-foreground">
              {FOOTER_DATA.capabilities.map((cap) => {
                const content = (
                  <>
                    <FooterAnimatedBadge name={cap.icon as FooterIconName} />
                    <span className="font-medium transition-colors whitespace-nowrap group-hover:text-primary">
                      {cap.label}
                    </span>
                  </>
                );

                return (
                  <li key={cap.label} className="flex items-center gap-4 cursor-pointer group">
                    {cap.id ? (
                      <Link href={getServicePath(cap.id)} className="flex items-center gap-4 w-full">
                        {content}
                      </Link>
                    ) : (
                      content
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Col 4: Connect (3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <h3 className="text-xs font-bold uppercase tracking-widest text-heading">
              {FOOTER_DATA.connectTitle}
            </h3>

            <div className="flex flex-col gap-2">
              <h4 className="text-lg font-bold text-heading tracking-tight">
                {FOOTER_DATA.ctaTitle}
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {FOOTER_DATA.ctaDescription}
              </p>
            </div>

            <div className="flex flex-col gap-3.5">
              {SITE.email && (
                <FooterContactRow
                  href={`mailto:${SITE.email}`}
                  label={SITE.email}
                  iconName="mail"
                />
              )}

              {SITE.phone && (
                <FooterContactRow
                  href={`tel:${SITE.phone.replace(/\s+/g, "")}`}
                  label={SITE.phone}
                  iconName="phone"
                />
              )}
            </div>

            <FooterCtaButton onStartProject={onStartProject} />
          </div>
        </div>

        {/* Copyright & Bottom Bar */}
        <div className="pt-8 flex flex-col items-center justify-between gap-6 text-xs text-muted-foreground lg:flex-row">
          <p>
            {SITE_FOOTER_COPY.symbol}{new Date().getFullYear()} {FOOTER_DATA.copyrightText}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link href="/privacy" className="hover:text-foreground transition-colors">
              {FOOTER_DATA.privacyPolicyText}
            </Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">
              {FOOTER_DATA.termsOfServiceText}
            </Link>

            <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-primary/8 text-primary text-xs font-semibold tracking-wide border border-primary/15">
              <FooterAnimatedIcon name="heart" size={11} />
            </div>
          </div>
        </div>

      </Container>
    </footer>
  );
}
