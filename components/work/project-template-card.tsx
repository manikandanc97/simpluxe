import { type Project } from "@/types/project";
import { AnimatedIcon } from "@/components/ui/animated-icon";
import { ProjectPreview } from "@/components/work/project-preview";
import { cloudinaryImageUrl } from "@/lib/cloudinary";
import { ThemeImage } from "@/components/ui/theme-image";
import { ExternalLinkIcon } from "@animateicons/react/lucide/external-link-icon";
import { LockIcon } from "@animateicons/react/lucide/lock-icon";
import { WORK_VIEW_COPY } from "@/lib/data/projects";

interface ProjectTemplateCardProps {
  project: Project;
}

export function ProjectTemplateCard({ project }: ProjectTemplateCardProps) {
  return (
    <article
      className="project-card group flex flex-col overflow-hidden rounded-xl border border-surface-elevated bg-white shadow-card transition-all duration-300 hover:border-primary/30 hover:shadow-xl"
    >
      {/* ── Mini Browser Chrome Header ── */}
      <div className="flex items-center justify-between px-3.5 py-2 bg-slate-50 border-b border-surface-elevated select-none shrink-0">
        {/* Left: Traffic light dots */}
        <div className="flex items-center gap-1.5 shrink-0">
          <span className="size-2.5 rounded-full bg-red-400/90" />
          <span className="size-2.5 rounded-full bg-amber-400/90" />
          <span className="size-2.5 rounded-full bg-green-500/90" />
        </div>

        {/* Center: Domain pill */}
        <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white border border-surface-elevated text-2xs font-mono text-muted-foreground truncate max-w-44">
          <AnimatedIcon icon={LockIcon} size={10} className="text-emerald-500 shrink-0" />
          <span className="truncate">{project.domain}</span>
        </div>

        {/* Right: Number */}
        <span className="text-2xs font-bold text-primary tracking-wide uppercase">
          {project.number}
        </span>
      </div>

      {/* ── Scroll Viewport ── */}
      <div className="project-screenshot-window relative bg-slate-100">
        {project.previewImage ? (
          <ThemeImage
            src={cloudinaryImageUrl(project.previewImage)}
            alt={WORK_VIEW_COPY.previewAlt(project.name)}
            width={project.previewImage.width}
            height={project.previewImage.height}
            sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
            variant="window"
            containerClassName="w-full relative"
            skeletonClassName="h-80 sm:h-88 top-0"
            className="project-screenshot block h-auto w-full select-none"
          />
        ) : (
          <ProjectPreview
            name={project.name}
            category={project.category}
            result={project.result}
            stack={project.stack}
            compact
          />
        )}
      </div>

      {/* ── Bottom Bar: Name + Link only ── */}
      <div className="flex items-center justify-between gap-3 px-4 py-3 bg-white border-t border-surface-elevated">
        <h3 className="text-sm font-semibold text-foreground tracking-tight truncate">
          {project.name}
        </h3>
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          aria-label={WORK_VIEW_COPY.openInNewTab(project.name)}
          className="size-7 rounded-full bg-surface-elevated text-muted-foreground flex items-center justify-center shrink-0 transition-colors hover:bg-primary hover:text-white"
        >
          <AnimatedIcon icon={ExternalLinkIcon} size={12} />
        </a>
      </div>
    </article>
  );
}
