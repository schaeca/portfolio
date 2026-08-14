import { projects} from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function SelectedWork() {
  return (
    <section
      id="work"
      className="border-t border-border bg-surface/35 py-20 md:py-28 lg:py-32"
    >
      <div className="page-container">
        {/* SECTION HEADER */}
        <div className="grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end">
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-accent">
              01 / Selected Work
            </p>

            <h2 className="text-[clamp(2.8rem,6vw,5.5rem)] leading-[0.9] font-extrabold tracking-[-0.055em]">
              THREE PROBLEMS.
              <span className="block">THREE SOLUTIONS.</span>
            </h2>
          </div>

          <p className="max-w-md text-base leading-7 text-muted lg:justify-self-end">
            Different challenges. Different contexts. The same mindset:
            understand deeply, think clearly and build with purpose.
            Three projects across product, enterprise systems and client work — each shaped by a different context, user need and technical challenge.
          </p>
        </div>

        {/* PROJECTS */}
        <div className="mt-16 grid gap-12 md:mt-20 md:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

