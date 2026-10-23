import { SITE_FOOTER_COPY } from "@/lib/data/layout";
import { Container } from "@/components/ui/container";

export function FooterBrandText() {
  return (
    <div className="w-full bg-slate-100 select-none pointer-events-none overflow-hidden">
      <Container>
        <svg
          viewBox="0 20 1000 120"
          className="w-full h-auto block select-none"
          aria-hidden="true"
        >
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
            <tspan className="fill-primary">
              {SITE_FOOTER_COPY.brandLuxeUpper}
            </tspan>
          </text>
        </svg>
      </Container>
    </div>
  );
}

