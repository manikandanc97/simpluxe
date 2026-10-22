import { Container } from "@/components/ui/container";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  CUSTOM_SOFTWARE_PROBLEMS,
  CUSTOM_SOFTWARE_PROBLEMS_COPY,
} from "@/lib/data/custom-software";

export function CustomSoftwareProblems() {
  return (
    <section id="problems" className="w-full bg-background py-16 sm:py-20 lg:py-24 font-satoshi">
      <Container>
        <div className="flex flex-col gap-12 sm:gap-16">
          {/* Section Header */}
          <div className="flex flex-col items-center gap-4 text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">
              {CUSTOM_SOFTWARE_PROBLEMS_COPY.eyebrow}
            </span>
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
              {CUSTOM_SOFTWARE_PROBLEMS_COPY.title}{" "}
              <span className="text-primary">
                {CUSTOM_SOFTWARE_PROBLEMS_COPY.highlightedText}
              </span>
            </h2>
            <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              {CUSTOM_SOFTWARE_PROBLEMS_COPY.description}
            </p>
          </div>

          {/* 2x2 Problems Grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
            {CUSTOM_SOFTWARE_PROBLEMS.map((prob) => (
              <Card
                key={prob.id}
                variant="default"
                padding="default"
                className="flex flex-col justify-between gap-6 border-border/80 transition-shadow hover:shadow-card"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <span className="flex size-10 items-center justify-center rounded-xl bg-primary/10 font-mono text-sm font-bold text-primary">
                      {prob.num}
                    </span>
                  </div>
                  <CardHeader className="p-0">
                    <CardTitle as="h3" className="text-lg sm:text-xl">
                      {prob.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {prob.description}
                    </p>
                  </CardContent>
                </div>

                {/* Resolution Pill */}
                <div className="rounded-xl border border-primary/15 bg-primary/5 p-4">
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-primary">
                      {CUSTOM_SOFTWARE_PROBLEMS_COPY.impactLabel}
                    </span>
                    <p className="text-xs font-medium text-foreground sm:text-sm">
                      {prob.impact}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
