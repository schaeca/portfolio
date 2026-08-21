import { Link } from "react-router";
import { type Project } from "../data/projects";
import ProjectVisual from "./ProjectVisual";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const content = (
    <>
      {/* CATEGORY */}
      <div className="mb-4 flex items-center justify-between gap-4">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-muted">
          {project.number} / {project.category}
        </p>

        {project.status && (
          <span className="shrink-0 text-xs font-semibold uppercase tracking-widest text-accent">
            {project.status}
          </span>
        )}
      </div>

      {/* PROJECT VISUAL */}
<div className="aspect-16/10 overflow-hidden">
  {project.previewImage ? (
    <div className="h-full w-full overflow-hidden border border-border bg-surface">
      <img
        src={project.previewImage}
        alt={project.previewAlt ?? ""}
        loading="lazy"
        className={`h-full w-full object-cover ${
          project.previewPosition ?? "object-center"
        } transition-transform duration-500 ${
          project.href ? "group-hover:scale-[1.025]" : ""
        }`}
      />
    </div>
  ) : (
    <div className="h-full w-full *:h-full *:w-full">
      <ProjectVisual type={project.type} />
    </div>
  )}
</div>

      {/* CONTENT */}
      <div className="mt-6 flex flex-1 flex-col">
        

        {/* TITLE */}
        <h3
          className={`text-2xl font-extrabold uppercase tracking-[-0.035em] ${
            project.href
              ? "transition-colors duration-300 group-hover:text-accent"
              : ""
          }`}
        >
          {project.title}
        </h3>

        {/* DESCRIPTION */}
        <p className="mt-3 max-w-md text-sm leading-6 text-muted">
          {project.description}
        </p>

        {/* BADGE */}
        {project.badge && (
          <p className="mt-3 flex items-center gap-2 text-[0.65rem] font-bold uppercase tracking-[0.14em] text-accent">
            <span aria-hidden="true">
              ✦
            </span>

            {project.badge}
          </p>
        )}

        {/* TAGS */}
        <div className="mt-auto flex flex-wrap gap-2 pt-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="border border-border px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-widest text-muted"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* ACTION */}
<div className="mt-6">
  {project.href ? (
    <span
      aria-hidden="true"
      className="inline-flex items-center justify-between gap-6 border-2 border-foreground px-5 py-3 text-xs font-bold uppercase tracking-[0.08em] text-foreground transition-all duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-white"
    >
      View case study

      <span className="text-base transition-transform duration-300 group-hover:translate-x-1">
        →
      </span>
    </span>
  ) : (
    <span className="inline-flex items-center gap-2 py-3 text-xs font-bold uppercase tracking-[0.08em] text-muted">
      Case study coming soon
    </span>
  )}
</div>
      </div>
    </>
  );

  return (
    <article className="h-full">
      {project.href ? (
        <Link
          to={project.href}
          aria-label={`View ${project.title} case study`}
          className="group flex h-full flex-col transition-transform duration-300 hover:-translate-y-1"
        >
          {content}
        </Link>
      ) : (
        <div className="group flex h-full flex-col">
          {content}
        </div>
      )}
    </article>
  );
}