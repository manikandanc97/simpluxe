import { WORK_PROJECT_DETAILS_COPY } from "@/lib/content/projects";
import { COMMON } from "@/lib/content/common";
import { ChartBarIcon } from "@animateicons/react/lucide/chart-bar-icon";
import { ShieldCheckIcon } from "@animateicons/react/lucide/shield-check-icon";
import { StarIcon } from "@animateicons/react/lucide/star-icon";
import { UsersIcon } from "@animateicons/react/lucide/users-icon";
import { AnimatedArrowRight } from "@/components/ui/animated-icons/convenience-icons";
import { AnimatedIcon } from "@/components/ui/animated-icon";
import { buttonVariants } from "@/components/ui/button";
import { type Project } from "@/types/project";
import { type EnhancedProjectDetails } from "@/lib/content/projects";

interface WorkProjectDetailsProps {
  project: Project;
  enhancement?: EnhancedProjectDetails;
}

export function WorkProjectDetails({ project, enhancement }: WorkProjectDetailsProps) {
  return (
    <div className="flex flex-col gap-6">
      {/* ── Stats Bar (4 Metric Cards in a Row) ── */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4">
        {enhancement?.metrics.map((m, idx) => {
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
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-primary/15 to-primary/10 flex items-center justify-center text-primary shrink-0">
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
          {WORK_PROJECT_DETAILS_COPY.projectOverview}</h4>
        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
          {enhancement?.overview || project.category}
        </p>
      </div>

      {/* ── Tech Stack Row ── */}
      <div className="pt-1 flex flex-col gap-2.5">
        <div className="text-xs font-semibold text-foreground">
          {WORK_PROJECT_DETAILS_COPY.techStack}</div>
        <div className="flex flex-wrap items-center gap-2">
          {enhancement ? enhancement.techStack.map((tech) => (
            <div
              key={tech.name}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-background border border-surface-elevated text-xs font-medium text-foreground shadow-sm hover:border-primary/30 transition-colors"
            >
              <tech.icon className="w-3.5 h-3.5" />
              <span>{tech.name}</span>
            </div>
          )) : project.stack.map((name) => (
            <span key={name} className="rounded-full border border-surface-elevated px-4 py-1.5 text-xs font-medium">
              {name}
            </span>
          ))}
        </div>
      </div>

      {/* ── Project Action Row ── */}
      <div className="pt-2 flex items-center justify-between border-t border-surface-elevated">
        {project.serviceType === COMMON.serviceNames.websites && project.url ? (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ variant: "default" })}
          >
            <span>{WORK_PROJECT_DETAILS_COPY.visitLiveWebsite}</span>
            <AnimatedArrowRight size={15} />
          </a>
        ) : project.serviceType === COMMON.serviceNames.webAppsFilter && project.url ? (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ variant: "default", className: "bg-chart-2 hover:bg-chart-2" })}
          >
            <span>{WORK_PROJECT_DETAILS_COPY.launchWebAppPortal}</span>
            <AnimatedArrowRight size={15} />
          </a>
        ) : (
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background border border-surface-elevated text-xs font-semibold text-muted-foreground">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>{project.serviceType} {WORK_PROJECT_DETAILS_COPY.projectShowcase}</span>
          </div>
        )}

        <span className="text-xs text-muted-foreground font-mono">
          {project.domain || project.serviceType}
        </span>
      </div>
    </div>
  );
}
