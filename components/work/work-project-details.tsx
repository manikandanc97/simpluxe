import { ChartBarIcon } from "@animateicons/react/lucide/chart-bar-icon";
import { ShieldCheckIcon } from "@animateicons/react/lucide/shield-check-icon";
import { StarIcon } from "@animateicons/react/lucide/star-icon";
import { UsersIcon } from "@animateicons/react/lucide/users-icon";
import { AnimatedArrowRight } from "@/components/ui/animated-icons/convenience-icons";
import { AnimatedIcon } from "@/components/ui/animated-icon";
import { buttonVariants } from "@/components/ui/button";
import { type Project } from "@/types/project";
import { type EnhancedProjectDetails } from "./work-data";

interface WorkProjectDetailsProps {
  project: Project;
  enhancement: EnhancedProjectDetails;
}

export function WorkProjectDetails({ project, enhancement }: WorkProjectDetailsProps) {
  return (
    <div className="flex flex-col gap-6">
      {/* ── Stats Bar (4 Metric Cards in a Row) ── */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4">
        {enhancement.metrics.map((m, idx) => {
          let IconComponent = ChartBarIcon;
          if (m.iconType === "users") IconComponent = UsersIcon;
          if (m.iconType === "star") IconComponent = StarIcon;
          if (m.iconType === "shield") IconComponent = ShieldCheckIcon;

          return (
            <div
              key={idx}
              data-slot="card"
              className="group p-4 sm:p-4.5 rounded-2xl bg-background border border-surface-elevated flex items-center gap-2 cursor-default"
            >
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[var(--primary)]/15 to-[var(--primary)]/10 flex items-center justify-center text-primary shrink-0">
                <AnimatedIcon icon={IconComponent} size={16} />
              </div>
              <div className="min-w-0">
                <div className="text-sm sm:text-base font-extrabold text-foreground leading-tight truncate">
                  {m.value}
                </div>
                <div className="text-xs text-muted-foreground font-medium truncate">
                  {m.label}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Project Overview ── */}
      <div className="pt-1 flex flex-col gap-1.5">
        <h4 className="text-sm sm:text-base font-bold text-foreground">
          Project Overview
        </h4>
        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
          {enhancement.overview}
        </p>
      </div>

      {/* ── Tech Stack Row ── */}
      <div className="pt-1 flex flex-col gap-2.5">
        <div className="text-xs font-semibold text-foreground">
          Tech Stack
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {enhancement.techStack.map((tech) => (
            <div
              key={tech.name}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-background border border-surface-elevated text-xs font-medium text-foreground shadow-sm hover:border-primary/30 transition-colors"
            >
              <tech.icon className="w-3.5 h-3.5" />
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Project Action Row ── */}
      <div className="pt-2 flex items-center justify-between border-t border-surface-elevated">
        {project.serviceType === "Websites" && project.url ? (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ variant: "default" })}
          >
            <span>Visit Live Website</span>
            <AnimatedArrowRight size={15} />
          </a>
        ) : project.serviceType === "Web Apps" && project.url ? (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ variant: "default", className: "bg-chart-2 hover:bg-chart-2" })}
          >
            <span>Launch Web App Portal</span>
            <AnimatedArrowRight size={15} />
          </a>
        ) : (
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background border border-surface-elevated text-xs font-semibold text-muted-foreground">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>{project.serviceType} Project Showcase</span>
          </div>
        )}

        <span className="text-xs text-muted-foreground font-mono">
          {project.domain || project.serviceType}
        </span>
      </div>
    </div>
  );
}
