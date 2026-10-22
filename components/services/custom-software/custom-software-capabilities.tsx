import { Container } from "@/components/ui/container";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  CUSTOM_SOFTWARE_CAPABILITIES,
  CUSTOM_SOFTWARE_CAPABILITIES_COPY,
} from "@/lib/data/custom-software";

export function CustomSoftwareCapabilities() {
  return (
    <section id="capabilities" className="w-full bg-muted/30 py-16 sm:py-20 lg:py-24 font-satoshi border-y border-border/60">
      <Container>
        <div className="flex flex-col gap-12 sm:gap-16">
          {/* Section Header */}
          <div className="flex flex-col items-center gap-4 text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">
              {CUSTOM_SOFTWARE_CAPABILITIES_COPY.eyebrow}
            </span>
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
              {CUSTOM_SOFTWARE_CAPABILITIES_COPY.title}{" "}
              <span className="text-primary">
                {CUSTOM_SOFTWARE_CAPABILITIES_COPY.highlightedText}
              </span>
            </h2>
            <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              {CUSTOM_SOFTWARE_CAPABILITIES_COPY.description}
            </p>
          </div>

          {/* 3-Column Capabilities Grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {CUSTOM_SOFTWARE_CAPABILITIES.map((cap) => (
              <Card
                key={cap.id}
                variant="default"
                padding="default"
                className="flex flex-col justify-between gap-6 border-border/70 bg-card transition-all hover:border-primary/40 hover:shadow-card"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                      {cap.subtitle}
                    </span>
                    <CardHeader className="p-0">
                      <CardTitle as="h3" className="text-lg font-bold leading-snug sm:text-xl">
                        {cap.title}
                      </CardTitle>
                    </CardHeader>
                  </div>
                  <CardContent className="p-0">
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {cap.description}
                    </p>
                  </CardContent>
                </div>

                {/* Deliverables List */}
                <div className="flex flex-col gap-2 rounded-xl border border-border/80 bg-muted/40 p-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-foreground/80">
                    {CUSTOM_SOFTWARE_CAPABILITIES_COPY.deliverablesLabel}
                  </span>
                  <ul className="flex flex-col gap-1.5 text-xs text-muted-foreground">
                    {cap.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="size-1.5 shrink-0 rounded-full bg-primary" />
                        <span className="leading-tight">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
