import { Container } from "@/components/ui/container";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  CUSTOM_SOFTWARE_TECH_ITEMS,
  CUSTOM_SOFTWARE_TECH_COPY,
} from "@/lib/data/custom-software";

export function CustomSoftwareTech() {
  return (
    <section id="technology" className="w-full bg-background py-16 sm:py-20 lg:py-24 font-satoshi">
      <Container>
        <div className="flex flex-col gap-12 sm:gap-16">
          {/* Section Header */}
          <div className="flex flex-col items-center gap-4 text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">
              {CUSTOM_SOFTWARE_TECH_COPY.eyebrow}
            </span>
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
              {CUSTOM_SOFTWARE_TECH_COPY.title}{" "}
              <span className="text-primary">
                {CUSTOM_SOFTWARE_TECH_COPY.highlightedText}
              </span>
            </h2>
            <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              {CUSTOM_SOFTWARE_TECH_COPY.description}
            </p>
          </div>

          {/* Tech Grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {CUSTOM_SOFTWARE_TECH_ITEMS.map((item) => (
              <Card
                key={item.name}
                variant="default"
                padding="default"
                className="flex flex-col justify-between gap-6 border-border/80 transition-shadow hover:shadow-card"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                      {item.category}
                    </span>
                  </div>

                  <CardHeader className="p-0">
                    <CardTitle as="h3" className="text-xl font-bold font-mono">
                      {item.name}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="flex flex-col gap-3 p-0">
                    <div className="flex flex-col gap-1">
                      <span className="text-2xs font-bold uppercase tracking-wider text-muted-foreground">
                        {CUSTOM_SOFTWARE_TECH_COPY.roleLabel}
                      </span>
                      <p className="text-xs leading-relaxed text-foreground sm:text-sm">
                        {item.role}
                      </p>
                    </div>

                    <div className="flex flex-col gap-1 rounded-xl bg-muted/40 p-3">
                      <span className="text-2xs font-bold uppercase tracking-wider text-primary">
                        {CUSTOM_SOFTWARE_TECH_COPY.rationaleLabel}
                      </span>
                      <p className="text-xs leading-relaxed text-muted-foreground">
                        {item.whyChosen}
                      </p>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>

          {/* Footer Note */}
          <div className="flex justify-center">
            <p className="max-w-xl text-center text-xs text-muted-foreground sm:text-sm">
              {CUSTOM_SOFTWARE_TECH_COPY.footerNote}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
