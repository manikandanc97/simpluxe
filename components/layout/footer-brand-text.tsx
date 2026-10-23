import { SITE_FOOTER_COPY } from "@/lib/data/layout";
import { Container } from "@/components/ui/container";
import { COMMON } from "@/lib/data/common";

export function FooterBrandText() {
  return (
    <div className="w-full bg-slate-100 select-none pointer-events-none overflow-hidden">
      <Container>
        <svg
          viewBox="0 20 1000 155"
          className="w-full h-auto block select-none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="footer-brand-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0369A1" />
              <stop offset="50%" stopColor="#0EA5E9" />
              <stop offset="100%" stopColor="#38BDF8" />
            </linearGradient>
          </defs>
          <text
            x="0"
            y="135"
            textLength="1000"
            lengthAdjust="spacingAndGlyphs"
            className="font-heading font-black"
            fontSize="160"
            fontWeight="900"
          >
            <tspan className="fill-slate-900">
              {SITE_FOOTER_COPY.brandSimpUpper}
            </tspan>
            <tspan fill="url(#footer-brand-gradient)">
              {SITE_FOOTER_COPY.brandLuxeUpper}
            </tspan>
          </text>
          <text
            x="500"
            y="160"
            textAnchor="middle"
            className="fill-slate-500 font-heading font-semibold"
            fontSize="18"
            letterSpacing="8"
          >
            {COMMON.brand.subtitle.toUpperCase()}
          </text>
        </svg>
      </Container>
    </div>
  );
}
