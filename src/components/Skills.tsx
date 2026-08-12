import { skillGroups } from "../data/skills";

export default function Skills() {
  return (
    <section
      id="skills"
      className="border-t border-border bg-background py-20 md:py-28 lg:py-32"
    >
      <div className="page-container">
        {/* HEADER */}
        <div className="grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end">
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-accent">
              04 / Skills
            </p>

            <h2 className="text-[clamp(2.8rem,6vw,5.5rem)] leading-[0.9] font-extrabold tracking-[-0.055em]">
              MY
              <span className="block">
                TOOLKIT<span className="text-accent">.</span>
              </span>
            </h2>
          </div>

          <p className="max-w-md font-serif text-[clamp(1.4rem,2.2vw,2rem)] leading-tight italic text-accent lg:justify-self-end">
            The tools matter. Knowing when and why to use them matters more.
          </p>
        </div>

        {/* SKILL GROUPS */}
        <div className="mt-16 grid gap-x-10 gap-y-14 md:mt-20 md:grid-cols-2 lg:mt-24 xl:grid-cols-4">
          {skillGroups.map((group) => (
            <SkillGroup
              key={group.title}
              title={group.title}
              skills={group.skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

type SkillGroupProps = {
  title: string;
  skills: string[];
};

function SkillGroup({
  title,
  skills,
}: SkillGroupProps) {
  return (
    <article className="group">
      <h3 className="text-xl font-bold tracking-[-0.03em] transition-colors duration-300 group-hover:text-accent">
        {title}
      </h3>

      <ul className="mt-7 space-y-4">
        {skills.map((skill) => (
          <li
            key={skill}
            className="group/skill flex items-center gap-3 text-sm text-muted md:text-base"
          >
            <span
              className="h-1.5 w-1.5 shrink-0 rounded-full bg-border transition-all duration-300 group-hover/skill:scale-125 group-hover/skill:bg-accent"
              aria-hidden="true"
            />

            <span className="transition-colors duration-300 group-hover/skill:text-foreground">
              {skill}
            </span>
          </li>
        ))}
      </ul>
    </article>
  );
}