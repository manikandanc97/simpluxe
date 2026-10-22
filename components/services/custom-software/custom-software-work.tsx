import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button-variants";
import { AnimatedIcon } from "@/components/ui/animated-icon";
import { ArrowUpRightIcon } from "@animateicons/react/lucide/arrow-up-right-icon";
import {
  CUSTOM_SOFTWARE_CASE_STUDIES,
  CUSTOM_SOFTWARE_WORK_COPY,
} from "@/lib/data/custom-software";

export function CustomSoftwareWork() {
  return (
    <section id="work-examples" className="w-full bg-muted/30 py-16 sm:py-20 lg:py-24 font-satoshi border-y border-border/60">
      <Container>
        <div className="flex flex-col gap-12 sm:gap-16">
          {/* Section Header */}
          <div className="flex flex-col items-center gap-4 text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">
              {CUSTOM_SOFTWARE_WORK_COPY.eyebrow}
            </span>
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
              {CUSTOM_SOFTWARE_WORK_COPY.title}{" "}
              <span className="text-primary">
                {CUSTOM_SOFTWARE_WORK_COPY.highlightedText}
              </span>
            </h2>
            <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              {CUSTOM_SOFTWARE_WORK_COPY.description}
            </p>
          </div>

          {/* Case Studies Grid */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {CUSTOM_SOFTWARE_CASE_STUDIES.map((study) => (
              <Card
                key={study.id}
                variant="default"
                padding="default"
                className="flex flex-col justify-between gap-6 border-border/80 bg-card transition-all hover:border-primary/40 hover:shadow-card"
              >
                <div className="flex flex-col gap-5">
                  <div className="flex flex-col gap-1.5">
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                      {study.category}
                    </span>
                    <CardHeader className="p-0">
                      <CardTitle as="h3" className="text-xl font-bold">
                        {study.name}
                      </CardTitle>
                    </CardHeader>
                  </div>

                  <CardContent className="flex flex-col gap-4 p-0">
                    <div className="flex flex-col gap-1 rounded-xl bg-muted/50 p-3.5">
                      <span className="text-2xs font-bold uppercase tracking-wider text-muted-foreground">
                        {CUSTOM_SOFTWARE_WORK_COPY.challengeLabel}
                      </span>
                      <p className="text-xs leading-relaxed text-foreground/90">
                        {study.challenge}
                      </p>
                    </div>

                    <div className="flex flex-col gap-1 rounded-xl border border-primary/15 bg-primary/5 p-3.5">
                      <span className="text-2xs font-bold uppercase tracking-wider text-primary">
                        {CUSTOM_SOFTWARE_WORK_COPY.solutionLabel}
                      </span>
                      <p className="text-xs leading-relaxed text-foreground">
                        {study.solution}
                      </p>
                    </div>
                  </CardContent>
                </div>

                <div className="flex flex-col gap-4 border-t border-border/60 pt-4">
                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap items-center gap-1.5">
                    {study.stack.map((tech) => (
                      <Badge
                        key={tech}
                        variant="muted"
                        size="sm"
                        className="font-mono text-2xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* External Project Link */}
                  <a
                    href={study.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
                  >
                    <span>{CUSTOM_SOFTWARE_WORK_COPY.liveSystemLabel}</span>
                    <AnimatedIcon
                      icon={ArrowUpRightIcon}
                      size={14}
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </a>
                </div>
              </Card>
            ))}
          </div>

          {/* Internal Link to /work Hub */}
          <div className="flex justify-center">
            <Link
              href="/work"
              className={buttonVariants({
                variant: "outline",
                size: "lg",
                className:
                  "group inline-flex items-center gap-2 border-primary/30 hover:bg-primary/10 hover:text-primary font-satoshi",
              })}
            >
              <span>{CUSTOM_SOFTWARE_WORK_COPY.viewAllWork}</span>
              <AnimatedIcon
                icon={ArrowUpRightIcon}
                size={16}
                className="text-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
