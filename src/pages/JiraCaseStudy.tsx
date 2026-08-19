import type { ReactNode } from "react";
import { Link } from "react-router";

const challenges = [
  {
    number: "01",
    title: "Different levels of work",
    description:
      "Team, program and portfolio-level work needed to coexist without losing the relationships between them.",
  },
  {
    number: "02",
    title: "Different teams, different needs",
    description:
      "A shared architecture had to create consistency without forcing every team into exactly the same way of working.",
  },
  {
    number: "03",
    title: "Visibility at scale",
    description:
      "Information had to remain usable for individual teams while also supporting cross-team coordination and management reporting.",
  },
  {
    number: "04",
    title: "Governance without friction",
    description:
      "Permissions, workflows and configuration needed enough structure to remain maintainable as the organisation grew.",
  },
];

const designDecisions = [
  {
    number: "01",
    title: "Work item model",
    description:
      "A shared hierarchy connected work across organisational levels while keeping the underlying Jira structure understandable and maintainable.",
  },
  {
    number: "02",
    title: "Workflow design",
    description:
      "Workflows balanced common process requirements with the flexibility teams needed for their day-to-day work.",
  },
  {
    number: "03",
    title: "Permissions",
    description:
      "Permission concepts were designed around roles, responsibilities and visibility rather than configuring access project by project.",
  },
  {
    number: "04",
    title: "Reporting",
    description:
      "Consistent data structures created the foundation for cross-team reporting using Jira dashboards, eazyBI and Structure.",
  },
  {
    number: "05",
    title: "Assets & data",
    description:
      "Structured reference data in Assets helped connect Jira work with information that existed outside individual issues.",
  },
  {
    number: "06",
    title: "Knowledge & service",
    description:
      "Service management and knowledge structures complemented delivery workflows where teams needed support, documentation and shared information.",
  },
];

const deliverySteps = [
  {
    number: "01",
    title: "Understand",
    description:
      "Translate organisational structures, processes and stakeholder requirements into concrete system needs.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Turn those needs into an information architecture, data model, workflows and permission concepts.",
  },
  {
    number: "03",
    title: "Implement",
    description:
      "Configure the solution in Jira and related Atlassian tools, validating assumptions as the system took shape.",
  },
  {
    number: "04",
    title: "Transition",
    description:
      "Support migrations and the move from existing structures into the new architecture without losing necessary context.",
  },
  {
    number: "05",
    title: "Enable",
    description:
      "Create onboarding and training so that the architecture remained understandable beyond the people who designed it.",
  },
  {
    number: "06",
    title: "Iterate",
    description:
      "Refine the solution as teams used it and new organisational or reporting requirements emerged.",
  },
];

const outcomes = [
  {
    title: "Consistency",
    text: "Shared structures made it easier to reason about work across teams and organisational levels.",
  },
  {
    title: "Traceability",
    text: "Relationships between team, program and portfolio work could remain visible instead of being recreated manually.",
  },
  {
    title: "Reporting",
    text: "More consistent underlying data provided a stronger basis for dashboards and cross-team reporting.",
  },
  {
    title: "Scalability",
    text: "Reusable concepts reduced the need to solve the same configuration problem independently for every team.",
  },
];

export default function JiraCaseStudy() {
  return (
    <main
      id="main-content"
      className="bg-background text-foreground"
    >
      {/* HERO */}
      <section className="page-container pt-8 pb-20 md:pt-10 md:pb-28 lg:pb-36">
        <Link
          to="/"
          className="group inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest transition-colors hover:text-accent"
        >
          <span
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:-translate-x-1"
          >
            ←
          </span>

          Back to portfolio
        </Link>

        <div className="mt-20 grid gap-14 md:mt-28 lg:grid-cols-[1.15fr_0.7fr] lg:items-end lg:gap-20">
          {/* HERO TEXT */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
              02 / Case Study
            </p>

            <h1 className="mt-5 max-w-5xl text-[clamp(3.5rem,8vw,8rem)] leading-[0.84] font-extrabold tracking-[-0.065em]">
              JIRA
              <span className="block">
                ARCHITECTURE
              </span>
              <span className="block">
                FOR SAFe
                <span className="text-accent">.</span>
              </span>
            </h1>

            <p className="mt-8 max-w-3xl font-serif text-[clamp(1.8rem,3.5vw,3.3rem)] leading-[1.05] italic text-accent">
              Designing for complexity.
            </p>

            <p className="mt-8 max-w-2xl text-base leading-7 text-muted md:text-lg md:leading-8">
              Designing and implementing a scalable Jira architecture for a
              complex SAFe environment in the automotive industry — connecting
              organisational structures, processes and data across team,
              program and portfolio levels.
            </p>
          </div>

          {/* HERO ARCHITECTURE PREVIEW */}
          <ArchitecturePreview />
        </div>

        {/* META */}
        <div className="mt-16 grid border-y border-border py-7 sm:grid-cols-2 lg:mt-24 lg:grid-cols-4">
          <ProjectMeta
            label="Role"
            value="Senior Atlassian Consultant / Team Lead"
          />

          <ProjectMeta
            label="Focus"
            value="Architecture · Requirements · Delivery"
          />

          <ProjectMeta
            label="Platform"
            value="Jira · Confluence · Assets"
          />

          <ProjectMeta
            label="Context"
            value="Automotive Enterprise"
          />
        </div>
      </section>

      {/* CONTEXT */}
      <CaseStudySection
        number="01"
        label="The Context"
        title="ENTERPRISE SCALE CHANGES THE PROBLEM."
      >
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <p className="font-serif text-3xl leading-tight italic text-accent md:text-4xl">
            Jira was not just a task tracker. It had to reflect how a large
            organisation actually worked.
          </p>

          <div className="space-y-6 text-base leading-7 text-muted md:text-lg md:leading-8">
            <p>
              The environment consisted of multiple teams working within a
              scaled agile organisation. Their work needed to connect across
              different levels while still supporting the day-to-day needs of
              individual teams.
            </p>

            <p>
              That meant architecture decisions could not be made in isolation.
              Workflows, issue structures, permissions, reporting and reference
              data all influenced one another — and each technical decision had
              organisational consequences.
            </p>
          </div>
        </div>
      </CaseStudySection>

      {/* CHALLENGE */}
      <CaseStudySection
        number="02"
        label="The Challenge"
        title="ONE PLATFORM. MANY TEAMS. DIFFERENT NEEDS."
        surface
      >
        <div className="grid gap-x-10 gap-y-12 md:grid-cols-2">
          {challenges.map((challenge) => (
            <article
              key={challenge.number}
              className="border-t border-foreground pt-5"
            >
              <span className="text-xs font-bold tracking-[0.14em] text-accent">
                {challenge.number}
              </span>

              <h3 className="mt-5 text-xl font-bold">
                {challenge.title}
              </h3>

              <p className="mt-3 max-w-xl leading-7 text-muted">
                {challenge.description}
              </p>
            </article>
          ))}
        </div>
      </CaseStudySection>

      {/* APPROACH */}
      <CaseStudySection
        number="03"
        label="The Approach"
        title="STANDARDISE WHAT SHOULD BE SHARED. PRESERVE FLEXIBILITY WHERE IT MATTERS."
      >
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <p className="font-serif text-3xl leading-tight italic text-accent md:text-4xl">
            The goal was not to create the most configurable system. It was to
            create one people could understand, use and evolve.
          </p>

          <div className="space-y-8">
            <ApproachStep
              number="01"
              title="Understand the organisation"
              text="Map teams, responsibilities, processes and reporting needs before translating anything into Jira configuration."
            />

            <ApproachStep
              number="02"
              title="Find the common structure"
              text="Identify which concepts needed to be shared across the organisation and where variation was genuinely necessary."
            />

            <ApproachStep
              number="03"
              title="Design for relationships"
              text="Treat issue types, workflows, permissions and reporting as one connected architecture rather than independent configuration tasks."
            />

            <ApproachStep
              number="04"
              title="Design for change"
              text="Build reusable concepts that could support new teams and evolving requirements without redesigning the entire system."
            />
          </div>
        </div>
      </CaseStudySection>

      {/* ARCHITECTURE */}
      <section className="bg-foreground text-background">
        <div className="page-container py-20 md:py-28 lg:py-36">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
            04 / The Architecture
          </p>

          <div className="mt-5 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <h2 className="max-w-4xl text-[clamp(2.8rem,6vw,5.8rem)] leading-[0.9] font-extrabold tracking-[-0.055em]">
              CONNECTING WORK
              <span className="block">
                ACROSS LEVELS.
              </span>
            </h2>

            <p className="max-w-xl text-base leading-7 text-background/65 lg:justify-self-end">
              The architecture created clear relationships between work at
              portfolio, program and team level while keeping each layer useful
              for the people working within it.
            </p>
          </div>

          <div className="mt-16">
            <ArchitectureDiagram />
          </div>

          <p className="mt-10 max-w-3xl font-serif text-2xl leading-tight italic text-accent md:text-3xl">
            Higher-level visibility depended on consistent structures below it
            — without turning every team into an identical copy.
          </p>
        </div>
      </section>

      {/* DESIGN DECISIONS */}
      <CaseStudySection
        number="05"
        label="Key Design Decisions"
        title="ARCHITECTURE LIVES IN THE DETAILS."
      >
        <div className="grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {designDecisions.map((decision) => (
            <article
              key={decision.number}
              className="border-t border-border pt-5"
            >
              <span className="text-xs font-bold tracking-[0.14em] text-accent">
                {decision.number}
              </span>

              <h3 className="mt-5 text-xl font-bold">
                {decision.title}
              </h3>

              <p className="mt-3 leading-7 text-muted">
                {decision.description}
              </p>
            </article>
          ))}
        </div>
      </CaseStudySection>

      {/* DELIVERY */}
      <CaseStudySection
        number="06"
        label="From Design to Adoption"
        title="A GOOD ARCHITECTURE ONLY WORKS IF PEOPLE CAN USE IT."
        surface
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {deliverySteps.map((step) => (
            <article
              key={step.number}
              className="border border-border p-6 md:p-7"
            >
              <span className="text-xs font-bold tracking-[0.14em] text-accent">
                {step.number}
              </span>

              <h3 className="mt-5 text-xl font-bold">
                {step.title}
              </h3>

              <p className="mt-3 leading-7 text-muted">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </CaseStudySection>

      {/* WHAT IT ENABLED */}
      <CaseStudySection
        number="07"
        label="What It Enabled"
        title="THE SYSTEM NEEDED TO WORK BEYOND A SINGLE TEAM."
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {outcomes.map((outcome) => (
            <article
              key={outcome.title}
              className="border-t border-foreground pt-5"
            >
              <h3 className="text-xl font-bold">
                {outcome.title}
              </h3>

              <p className="mt-4 leading-7 text-muted">
                {outcome.text}
              </p>
            </article>
          ))}
        </div>
      </CaseStudySection>

      {/* LEARNINGS */}
      <CaseStudySection
        number="08"
        label="What I Learned"
        title="COMPLEX SYSTEMS ARE ALSO PEOPLE SYSTEMS."
        surface
      >
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-24">
          <p className="font-serif text-3xl leading-tight italic text-accent md:text-4xl">
            The technically cleanest solution is not automatically the most
            useful one.
          </p>

          <div className="space-y-6 text-base leading-7 text-muted md:text-lg md:leading-8">
            <p>
              Designing at enterprise scale taught me to think beyond individual
              features. A change to a workflow or data model could influence
              permissions, reporting, integrations and the way entire teams
              worked.
            </p>

            <p>
              It also reinforced the importance of translating between
              different perspectives. Technical architecture, business
              requirements and user behaviour all had to meet in the same
              system.
            </p>

            <p>
              That mindset is something I now bring into software development:
              understand the problem and its dependencies first, then build a
              solution whose structure supports what people actually need.
            </p>
          </div>
        </div>
      </CaseStudySection>

      {/* CTA */}
      <section className="bg-foreground text-background">
        <div className="page-container py-20 md:py-28 lg:py-32">
          <p className="font-serif text-2xl italic text-accent md:text-3xl">
            Two projects. Two sides of the same mindset.
          </p>

          <h2 className="mt-4 max-w-5xl text-[clamp(3.5rem,8vw,7rem)] leading-[0.85] font-extrabold tracking-[-0.06em]">
            FROM SYSTEMS
            <br />
            TO SOFTWARE.
          </h2>

          <div className="mt-24 border-t border-background/20 pt-8">
            <Link
              to="/work/teamential"
              className="group flex items-end justify-between gap-8"
            >
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-background/60">
                  Previous Case Study
                </p>

                <p className="mt-3 text-2xl font-bold md:text-4xl">
                  Teamential
                </p>
              </div>

              <span
                aria-hidden="true"
                className="text-3xl transition-transform duration-300 group-hover:-translate-x-2"
              >
                ←
              </span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

/* -------------------------------------------------------------------------- */
/*                              HERO PREVIEW                                  */
/* -------------------------------------------------------------------------- */

function ArchitecturePreview() {
  return (
    <div
      aria-hidden="true"
      className="mx-auto w-full max-w-md lg:justify-self-end"
    >
      <div className="border border-border bg-surface p-6 md:p-8">
        <ArchitectureLayer
          label="Portfolio"
          items={["Strategy", "Initiatives"]}
        />

        <Connector />

        <ArchitectureLayer
          label="Program"
          items={["Features", "Dependencies"]}
        />

        <Connector />

        <ArchitectureLayer
          label="Team"
          items={["Stories", "Tasks"]}
        />
      </div>
    </div>
  );
}

type ArchitectureLayerProps = {
  label: string;
  items: string[];
};

function ArchitectureLayer({
  label,
  items,
}: ArchitectureLayerProps) {
  return (
    <div className="border border-border bg-background p-4">
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent">
        {label}
      </p>

      <div className="mt-3 flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="border border-border px-3 py-1.5 text-xs font-semibold text-muted"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function Connector() {
  return (
    <div className="flex h-10 justify-center">
      <div className="w-px bg-accent" />
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                              ARCHITECTURE                                  */
/* -------------------------------------------------------------------------- */

function ArchitectureDiagram() {
  return (
    <div className="border border-background/15 p-5 md:p-8">
      <ArchitectureRow
        label="Portfolio"
        description="Strategic visibility"
        items={["Initiatives", "Portfolio Items", "Roadmaps"]}
      />

      <ArchitectureConnection />

      <ArchitectureRow
        label="Program"
        description="Cross-team coordination"
        items={["Features", "Dependencies", "Planning"]}
      />

      <ArchitectureConnection />

      <ArchitectureRow
        label="Team"
        description="Delivery"
        items={["Stories", "Tasks", "Team Workflows"]}
      />

      <div className="mt-10 grid gap-4 border-t border-background/15 pt-8 sm:grid-cols-3">
        <ArchitectureFoundation
          title="Permissions"
          text="Who can see and change what?"
        />

        <ArchitectureFoundation
          title="Data"
          text="How does information stay consistent?"
        />

        <ArchitectureFoundation
          title="Reporting"
          text="How does work become visible across levels?"
        />
      </div>
    </div>
  );
}

type ArchitectureRowProps = {
  label: string;
  description: string;
  items: string[];
};

function ArchitectureRow({
  label,
  description,
  items,
}: ArchitectureRowProps) {
  return (
    <div className="grid gap-5 md:grid-cols-[0.65fr_1.35fr] md:items-center">
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
          {label}
        </p>

        <p className="mt-1 text-sm text-background/55">
          {description}
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-3">
        {items.map((item) => (
          <div
            key={item}
            className="border border-background/20 px-4 py-5 text-center font-semibold"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

function ArchitectureConnection() {
  return (
    <div
      aria-hidden="true"
      className="my-5 flex h-9 items-center md:ml-[16%]"
    >
      <div className="h-full w-px bg-accent" />
      <span className="ml-3 text-accent">
        ↓
      </span>
    </div>
  );
}

type ArchitectureFoundationProps = {
  title: string;
  text: string;
};

function ArchitectureFoundation({
  title,
  text,
}: ArchitectureFoundationProps) {
  return (
    <div className="bg-background/5 p-5">
      <h3 className="font-bold">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-background/55">
        {text}
      </p>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                              SHARED HELPERS                                */
/* -------------------------------------------------------------------------- */

type ProjectMetaProps = {
  label: string;
  value: string;
};

function ProjectMeta({
  label,
  value,
}: ProjectMetaProps) {
  return (
    <div className="py-4 sm:px-5 sm:first:pl-0 lg:border-l lg:border-border lg:px-7 lg:first:border-l-0 lg:first:pl-0">
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-muted">
        {label}
      </p>

      <p className="mt-2 font-semibold">
        {value}
      </p>
    </div>
  );
}

type CaseStudySectionProps = {
  number: string;
  label: string;
  title: string;
  surface?: boolean;
  children: ReactNode;
};

function CaseStudySection({
  number,
  label,
  title,
  surface = false,
  children,
}: CaseStudySectionProps) {
  return (
    <section
      className={
        surface
          ? "bg-surface"
          : "bg-background"
      }
    >
      <div className="page-container py-20 md:py-28 lg:py-36">
        <div className="mb-12 md:mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
            {number} / {label}
          </p>

          <h2 className="mt-5 max-w-6xl text-[clamp(2.8rem,6vw,5.8rem)] leading-[0.9] font-extrabold tracking-[-0.055em]">
            {title}
          </h2>
        </div>

        {children}
      </div>
    </section>
  );
}

type ApproachStepProps = {
  number: string;
  title: string;
  text: string;
};

function ApproachStep({
  number,
  title,
  text,
}: ApproachStepProps) {
  return (
    <div className="grid grid-cols-[auto_1fr] gap-5 border-t border-border pt-5">
      <span className="text-xs font-bold tracking-[0.14em] text-accent">
        {number}
      </span>

      <div>
        <h3 className="text-xl font-bold">
          {title}
        </h3>

        <p className="mt-2 leading-7 text-muted">
          {text}
        </p>
      </div>
    </div>
  );
}