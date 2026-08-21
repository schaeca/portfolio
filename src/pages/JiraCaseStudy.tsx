import type { ReactNode } from "react";
import { Link } from "react-router";
import Footer from "../components/Footer";

const architectureDomains = [
  {
    title: "Jira Project Configuration",
    shortTitle: "Jira",
    description:
      "Project structures, shared configuration and the relationships between them.",
  },
  {
    title: "Permission Concept",
    shortTitle: "Permissions",
    description:
      "Role-based access designed around responsibilities and organisational needs.",
  },
  {
    title: "Confluence Setup",
    shortTitle: "Confluence",
    description:
      "Knowledge and collaboration structures connected to the Jira environment.",
  },
  {
    title: "Assets Structure",
    shortTitle: "Assets",
    description:
      "Structured organisational and reference data available across the tool landscape.",
  },
  {
    title: "Further Atlassian Apps & Integrations",
    shortTitle: "Add-ons",
    description:
      "Additional capabilities for visualisation, planning, dependencies and reporting.",
  },
  {
    title: "Support Services",
    shortTitle: "Support",
    description:
      "Service management, knowledge and support around the platform.",
  },
];

const challenges = [
  {
    number: "01",
    title: "Consistency without uniformity",
    description:
      "Teams worked differently, but cross-team transparency required a shared language for hierarchy levels, issue types, workflows and relationships.",
  },
  {
    number: "02",
    title: "Traceability across levels",
    description:
      "Work needed to remain connected from higher-level initiatives down to features, stories and tasks without manually recreating information.",
  },
  {
    number: "03",
    title: "Making relationships explicit",
    description:
      "Dependencies, risks, objectives and parent-child relationships needed clear linking rules so users could understand how work related across the organisation.",
  },
  {
    number: "04",
    title: "Building data that could be reported",
    description:
      "Cross-team reporting only becomes meaningful when the underlying Jira data follows enough common structure to be interpreted consistently.",
  },
];

const designDecisions = [
  {
    number: "01",
    title: "Scalable hierarchy",
    description:
      "The same architectural principles could scale from Team and ART level through Solution and Portfolio structures without redesigning the underlying model.",
  },
  {
    number: "02",
    title: "Explicit linking model",
    description:
      "Defined relationships connected hierarchy, dependencies, objectives and risks instead of relying on ambiguous generic links.",
  },
  {
    number: "03",
    title: "Permission concept",
    description:
      "Access was designed around roles and responsibilities so permissions remained understandable and maintainable across projects.",
  },
  {
    number: "04",
    title: "Reporting-ready data",
    description:
      "Consistent structures and relationships created a foundation for drill-downs, capacity views, roadmaps and cross-team reporting.",
  },
  {
    number: "05",
    title: "Organisational data",
    description:
      "Assets provided structured reference data that could be reused across Jira and Confluence instead of being recreated inside individual projects.",
  },
  {
    number: "06",
    title: "Governance & documentation",
    description:
      "Configuration rules, linking guidelines and documentation helped keep the architecture understandable as the environment evolved.",
  },
];

const deliverySteps = [
  {
    number: "01",
    title: "Understand",
    description:
      "Analyse organisational structures, processes, ways of working and the existing tool landscape.",
  },
  {
    number: "02",
    title: "Define",
    description:
      "Identify the hierarchy, issue types, relationships and shared concepts that needed to form a common language.",
  },
  {
    number: "03",
    title: "Translate",
    description:
      "Turn methodological requirements from the delivery model into usable Jira and Atlassian structures.",
  },
  {
    number: "04",
    title: "Implement",
    description:
      "Configure projects, workflows, permissions, data structures and supporting tooling.",
  },
  {
    number: "05",
    title: "Enable",
    description:
      "Document the architecture and give users guidance for applying it correctly in their daily work.",
  },
  {
    number: "06",
    title: "Evolve",
    description:
      "Use stakeholder feedback and emerging requirements to govern and iteratively improve the system.",
  },
];

const outcomes = [
  {
    title: "Traceability",
    text: "Work could be traced from higher-level work items down to stories and tasks while preserving the relationships in between.",
  },
  {
    title: "Dependencies & risks",
    text: "Explicit relationships supported cross-team dependency views and structured risk management instead of relying on manual coordination.",
  },
  {
    title: "Planning",
    text: "Shared structures enabled prioritisation, capacity analysis and roadmaps across organisational boundaries.",
  },
  {
    title: "Reporting",
    text: "Consistent data supported views such as flow, predictability and work-distribution reporting across multiple levels.",
  },
];

export default function JiraCaseStudy() {
  return (
    <main
      id="main-content"
      className="overflow-x-clip bg-background text-foreground"
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

        <div className="mt-20 grid gap-14 md:mt-28 lg:grid-cols-[1.1fr_0.55fr] lg:items-center lg:gap-20">
          {/* HERO TEXT */}
          <div className="min-w-0">
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
              Designing and implementing a scalable Atlassian architecture for
              a complex SAFe environment in the automotive industry —
              translating an enterprise delivery model into tooling that
              connected structures, processes and data across organisational
              levels.
            </p>
          </div>

          {/* SAFe PREVIEW */}
          <div className="min-w-0">
          <SafeHierarchyPreview />
          </div>
        </div>

        {/* META */}
        <div className="mt-16 grid border-y border-border py-7 sm:grid-cols-2 lg:mt-24 lg:grid-cols-4 lg:gap-x-0">
          <ProjectMeta
            label="Role"
            value="Senior Atlassian Consultant / Project Lead"
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

        {/* CONFIDENTIALITY */}
        <div className="mt-6 flex items-start gap-3 border-l-2 border-accent pl-4">
          <span
            aria-hidden="true"
            className="text-accent"
          >
            ✦
          </span>

          <p className="max-w-3xl text-sm leading-6 text-muted">
            For confidentiality, the architecture visuals in this case study
            are generalised reconstructions of the solution. No customer data
            or proprietary project content is shown.
          </p>
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
              The organisation was working within a large-scale agile
              transformation. Individual teams needed enough flexibility to
              work effectively, while the wider organisation needed shared
              structures to create transparency across team boundaries and
              organisational levels.
            </p>

            <p>
              Jira therefore had to do more than support individual boards. The
              tooling needed to translate a common delivery model into
              structures that connected work, dependencies, organisational
              data and reporting across a complex enterprise environment.
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
            The goal was not maximum standardisation. It was enough shared
            structure to make the organisation understandable.
          </p>

          <div className="space-y-8">
            <ApproachStep
              number="01"
              title="Understand the operating model"
              text="Understand processes, ways of working, organisational structures and existing tooling before designing the Jira configuration."
            />

            <ApproachStep
              number="02"
              title="Define the common language"
              text="Identify the hierarchy levels, issue types, relationships, workflows and access concepts that needed to remain consistent."
            />

            <ApproachStep
              number="03"
              title="Translate method into tooling"
              text="Map the delivery model into Jira structures that preserved methodological intent while remaining practical in day-to-day work."
            />

            <ApproachStep
              number="04"
              title="Govern and evolve"
              text="Treat the architecture as a dynamic system, using stakeholder feedback and new requirements to evolve it iteratively."
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

          <div className="mt-5 grid gap-10 lg:grid-cols-[0.85fr_1fr] lg:items-end">
            <h2 className="max-w-5xl text-[clamp(2.8rem,6vw,5.8rem)] leading-[0.9] font-extrabold tracking-[-0.055em]">
              FROM DELIVERY MODEL
              <span className="block">
                TO TOOL ARCHITECTURE.
              </span>
            </h2>

            <p className="max-w-xl text-base leading-7 text-background/65 lg:justify-self-end">
              The work model needed to scale across organisational levels
              without turning every level into an isolated Jira structure.
              Shared concepts and explicit relationships created the connection
              between them.
            </p>
          </div>

          <div className="mt-16">
            <ArchitectureDiagram />
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <p className="font-serif text-2xl leading-tight italic text-accent md:text-3xl">
              The hierarchy was only one part of the architecture.
            </p>

            <p className="max-w-2xl leading-7 text-background/65">
              The real value came from defining how work items related across
              levels — creating consistent paths for traceability,
              dependencies, objectives, risks and reporting.
            </p>
          </div>
        </div>
      </section>

      {/* ECOSYSTEM */}
      <CaseStudySection
        number="05"
        label="The Ecosystem"
        title="NOT ONE CONFIGURATION. A CONNECTED TOOL LANDSCAPE."
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {architectureDomains.map((domain) => (
            <article
              key={domain.title}
              className="border border-border p-6 md:p-7"
            >
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-accent">
                {domain.shortTitle}
              </p>

              <h3 className="mt-4 text-xl font-bold">
                {domain.title}
              </h3>

              <p className="mt-3 leading-7 text-muted">
                {domain.description}
              </p>
            </article>
          ))}
        </div>

        <p className="mt-12 max-w-3xl font-serif text-2xl leading-tight italic text-accent md:text-3xl">
          Architecture did not stop at Jira configuration. Permissions,
          knowledge, organisational data and support all had to fit the same
          operating model.
        </p>
      </CaseStudySection>

      {/* DESIGN DECISIONS */}
      <CaseStudySection
        number="06"
        label="Key Design Decisions"
        title="ARCHITECTURE LIVES IN THE DETAILS."
        surface
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

      {/* DESIGN TO ADOPTION */}
      <CaseStudySection
        number="07"
        label="From Design to Adoption"
        title="A GOOD ARCHITECTURE ONLY WORKS IF PEOPLE CAN USE IT."
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

        {/* DOCUMENTATION */}
        <div className="mt-20 border-t border-border pt-10">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
                Documentation as part of the architecture
              </p>

              <p className="mt-5 font-serif text-3xl leading-tight italic text-accent md:text-4xl">
                A system is only maintainable if people understand how and why
                it works.
              </p>
            </div>

            <div>
              <p className="max-w-2xl text-base leading-7 text-muted md:text-lg md:leading-8">
                I built structured documentation around the architecture so
                that configuration decisions and usage guidelines were not
                limited to the people who originally designed the system.
              </p>

              <div className="mt-8 grid gap-x-8 gap-y-5 sm:grid-cols-2">
                <DocumentationItem text="Jira project configuration" />
                <DocumentationItem text="Permission concepts" />
                <DocumentationItem text="Confluence setup" />
                <DocumentationItem text="Assets structures" />
                <DocumentationItem text="Add-ons & integrations" />
                <DocumentationItem text="Support & knowledge services" />
              </div>
            </div>
          </div>
        </div>
      </CaseStudySection>

      {/* WHAT IT ENABLED */}
      <CaseStudySection
        number="08"
        label="What It Enabled"
        title="STRUCTURE BECAME VISIBILITY."
        surface
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

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          <OutcomeExample
            label="Traceability"
            value="Epic → Capability → Feature → Story"
          />

          <OutcomeExample
            label="Dependencies"
            value="Blocks · Is blocked by"
          />

          <OutcomeExample
            label="Planning"
            value="Priorities · Capacity · Roadmaps"
          />

          <OutcomeExample
            label="Reporting"
            value="Flow · Predictability · Distribution"
          />
        </div>
      </CaseStudySection>

      {/* LEARNINGS */}
      <CaseStudySection
        number="09"
        label="What I Learned"
        title="COMPLEX SYSTEMS ARE ALSO PEOPLE SYSTEMS."
      >
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-24">
          <p className="font-serif text-3xl leading-tight italic text-accent md:text-4xl">
            The technically cleanest solution is not automatically the most
            useful one.
          </p>

          <div className="space-y-6 text-base leading-7 text-muted md:text-lg md:leading-8">
            <p>
              Designing at enterprise scale taught me to think beyond
              individual configurations and treat tooling as a connected system. A change to a hierarchy, workflow or
              data model could influence permissions, reporting, integrations
              and the way entire teams worked.
            </p>

            <p>
              It also reinforced the importance of translating between
              different perspectives. Methodology, business requirements,
              technical architecture and user behaviour all had to meet in the
              same system.
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
      <Footer/>
    </main>
  );
}

/* -------------------------------------------------------------------------- */
/*                              HERO PREVIEW                                  */
/* -------------------------------------------------------------------------- */

function SafeHierarchyPreview() {
  const levels = [
    {
      label: "Portfolio",
      description: "Strategic direction",
    },
    {
      label: "Solution",
      description: "Solution Train",
    },
    {
      label: "ART",
      description: "Cross-team delivery",
    },
    {
      label: "Teams",
      description: "Day-to-day delivery",
    },
  ];

  return (
    <div
      aria-hidden="true"
      className="mx-auto w-full max-w-sm lg:justify-self-end"
    >
      {levels.map((level, index) => (
        <div key={level.label}>
          <div className="border border-border bg-surface px-5 py-4">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent">
              {level.label}
            </p>

            <p className="mt-1 text-sm text-muted">
              {level.description}
            </p>
          </div>

          {index < levels.length - 1 && (
            <div className="flex h-9 justify-center">
              <div className="relative w-px bg-accent">
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 text-sm text-accent">
                  ↓
                </span>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                           ARCHITECTURE DIAGRAM                             */
/* -------------------------------------------------------------------------- */

function ArchitectureDiagram() {
  return (
    <div>
      {/* DESKTOP */}
      <div className="hidden lg:block">
        <div className="border border-background/15 p-8">
          {/* COLUMN LABELS */}
          <div className="grid grid-cols-[8rem_1.15fr_repeat(4,0.8fr)_0.9fr] gap-3 border-b border-background/15 pb-4">
            <div />

            <DiagramColumnLabel>
              Core hierarchy
            </DiagramColumnLabel>

            <DiagramColumnLabel>
              Risk
            </DiagramColumnLabel>

            <DiagramColumnLabel>
              Impediment
            </DiagramColumnLabel>

            <DiagramColumnLabel>
              Objective
            </DiagramColumnLabel>

            <DiagramColumnLabel>
              Bug
            </DiagramColumnLabel>

            <DiagramColumnLabel>
              Supporting
            </DiagramColumnLabel>
          </div>

          {/* PORTFOLIO */}
          <ArchitectureLevelRow
            level="Portfolio"
            hierarchy="Epic (Portfolio)"
            supporting="Sub-task"
          />

          <ArchitectureLevelConnector
            hierarchy
          />

          {/* SOLUTION */}
          <ArchitectureLevelRow
            level="Solution"
            hierarchy="Capability"
            risk="Risk (Solution)"
            impediment="Impediment (Solution)"
            objective="Objective (Solution)"
            bug="Bug (Solution)"
            supporting="Sub-task"
          />

          <ArchitectureLevelConnector
            hierarchy
            risk
            impediment
            objective
            bug
          />

          {/* ART */}
          <ArchitectureLevelRow
            level="ART"
            hierarchy="Feature"
            risk="Risk (ART)"
            impediment="Impediment (ART)"
            objective="Objective (ART)"
            bug="Bug (ART)"
            supporting="Sub-task"
          />

          <ArchitectureLevelConnector
            hierarchy
            risk
            impediment
            objective
            bug
          />

          {/* TEAM */}
          <ArchitectureLevelRow
            level="Team"
            hierarchy="Story"
            risk="Risk (Team)"
            impediment="Impediment (Team)"
            objective="Objective (Team)"
            bug="Bug (Team)"
            supporting="Sub-task · Test"
          />

          {/* SHARED SERVICES */}
          <div className="mt-10 border-t border-background/15 pt-8">
            <div className="grid gap-6 lg:grid-cols-[0.65fr_1.35fr]">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
                  Shared Services
                </p>

                <p className="mt-2 max-w-xs text-sm leading-6 text-background/55">
                  Services spanning more than one ART could still participate
                  in the same work model.
                </p>
              </div>

              <div className="flex items-center gap-4">
                <DiagramNode>
                  Feature
                </DiagramNode>

                <span
                  aria-hidden="true"
                  className="text-accent"
                >
                  ↔
                </span>

                <DiagramNode>
                  Story
                </DiagramNode>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE / TABLET */}
      <div className="space-y-4 lg:hidden">
        <MobileArchitectureLevel
          level="Portfolio"
          items={[
            "Epic (Portfolio)",
            "Sub-task",
          ]}
        />

        <MobileLevelConnector />

        <MobileArchitectureLevel
          level="Solution"
          items={[
            "Capability",
            "Risk",
            "Impediment",
            "Objective",
            "Bug",
            "Sub-task",
          ]}
        />

        <MobileLevelConnector />

        <MobileArchitectureLevel
          level="ART"
          items={[
            "Feature",
            "Risk",
            "Impediment",
            "Objective",
            "Bug",
            "Sub-task",
          ]}
        />

        <MobileLevelConnector />

        <MobileArchitectureLevel
          level="Teams"
          items={[
            "Story",
            "Risk",
            "Impediment",
            "Objective",
            "Bug",
            "Sub-task",
            "Test",
          ]}
        />
      </div>

      {/* FURTHER LINKING */}
      <div className="mt-10">
        <FurtherLinkingDiagram />
      </div>
    </div>
  );
}

function DiagramColumnLabel({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <p className="text-center text-[0.65rem] font-bold uppercase tracking-[0.12em] text-background/45">
      {children}
    </p>
  );
}

/* -------------------------------------------------------------------------- */
/*                        ARCHITECTURE DESKTOP ROWS                           */
/* -------------------------------------------------------------------------- */

type ArchitectureLevelRowProps = {
  level: string;
  hierarchy?: string;
  risk?: string;
  impediment?: string;
  objective?: string;
  bug?: string;
  supporting?: string;
};

function ArchitectureLevelRow({
  level,
  hierarchy,
  risk,
  impediment,
  objective,
  bug,
  supporting,
}: ArchitectureLevelRowProps) {
  return (
    <div className="grid min-h-24 grid-cols-[8rem_1.15fr_repeat(4,0.8fr)_0.9fr] items-center gap-3 border-b border-background/10 py-5">
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent">
          {level}
        </p>
      </div>

      <DiagramNode prominent>
        {hierarchy}
      </DiagramNode>

      <DiagramNode>
        {risk}
      </DiagramNode>

      <DiagramNode>
        {impediment}
      </DiagramNode>

      <DiagramNode>
        {objective}
      </DiagramNode>

      <DiagramNode>
        {bug}
      </DiagramNode>

      <DiagramNode subtle>
        {supporting}
      </DiagramNode>
    </div>
  );
}

type DiagramNodeProps = {
  children?: ReactNode;
  prominent?: boolean;
  subtle?: boolean;
};

function DiagramNode({
  children,
  prominent = false,
  subtle = false,
}: DiagramNodeProps) {
  if (!children) {
    return <div />;
  }

  return (
    <div
      className={`flex min-h-12 items-center justify-center border px-3 py-3 text-center text-xs font-semibold ${
        prominent
          ? "border-accent text-background"
          : subtle
            ? "border-background/10 text-background/45"
            : "border-background/20 text-background/75"
      }`}
    >
      {children}
    </div>
  );
}

type ArchitectureLevelConnectorProps = {
  hierarchy?: boolean;
  risk?: boolean;
  impediment?: boolean;
  objective?: boolean;
  bug?: boolean;
};

function ArchitectureLevelConnector({
  hierarchy = false,
  risk = false,
  impediment = false,
  objective = false,
  bug = false,
}: ArchitectureLevelConnectorProps) {
  return (
    <div
      aria-hidden="true"
      className="grid h-8 grid-cols-[8rem_1.15fr_repeat(4,0.8fr)_0.9fr] gap-3"
    >
      <div />

      <Connector active={hierarchy} />
      <Connector active={risk} />
      <Connector active={impediment} />
      <Connector active={objective} />
      <Connector active={bug} />

      <div />
    </div>
  );
}

function Connector({
  active,
}: {
  active: boolean;
}) {
  if (!active) {
    return <div />;
  }

  return (
    <div className="flex justify-center">
      <div className="relative h-full w-px bg-accent">
        <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-xs text-accent">
          ↓
        </span>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                        ARCHITECTURE MOBILE                                 */
/* -------------------------------------------------------------------------- */

type MobileArchitectureLevelProps = {
  level: string;
  items: string[];
};

function MobileArchitectureLevel({
  level,
  items,
}: MobileArchitectureLevelProps) {
  return (
    <div className="border border-background/15 p-5">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
        {level}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="border border-background/20 px-3 py-2 text-xs font-semibold text-background/75"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function MobileLevelConnector() {
  return (
    <div
      aria-hidden="true"
      className="flex h-7 justify-center"
    >
      <span className="text-accent">
        ↓
      </span>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                          FURTHER LINKING                                   */
/* -------------------------------------------------------------------------- */

function FurtherLinkingDiagram() {
  return (
    <div className="border border-background/15 p-5 md:p-8">
      <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-14">
        {/* CORE HIERARCHY */}
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
            Core work hierarchy
          </p>

          <div className="mt-5 space-y-2">
            <LinkingNode>
              Epic (Portfolio)
            </LinkingNode>

            <LinkingArrow />

            <LinkingNode>
              Capability
            </LinkingNode>

            <LinkingArrow />

            <LinkingNode>
              Feature
            </LinkingNode>

            <LinkingArrow />

            <LinkingNode>
              Story
            </LinkingNode>
          </div>
        </div>

        {/* RELATIONSHIPS */}
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
            Further relationships
          </p>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <LinkingRelationship
              title="Dependencies"
              text="blocks / is blocked by"
            />

            <LinkingRelationship
              title="Risk mitigation"
              text="mitigation for / mitigated by"
            />

            <LinkingRelationship
              title="Objectives"
              text="realizes / is realized by"
            />

            <LinkingRelationship
              title="Testing"
              text="tests / is tested by"
            />

            <LinkingRelationship
              title="Bug ↔ Test"
              text="creates / is created by"
            />

            <LinkingRelationship
              title="Generic relationships"
              text="duplicates · relates to · clones"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function LinkingNode({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="border border-background/20 px-4 py-3 text-center text-sm font-semibold">
      {children}
    </div>
  );
}

function LinkingArrow() {
  return (
    <div
      aria-hidden="true"
      className="text-center text-accent"
    >
      ↓
    </div>
  );
}

type LinkingRelationshipProps = {
  title: string;
  text: string;
};

function LinkingRelationship({
  title,
  text,
}: LinkingRelationshipProps) {
  return (
    <article className="bg-background/5 p-5">
      <h3 className="font-bold">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-background/55">
        {text}
      </p>
    </article>
  );
}

/* -------------------------------------------------------------------------- */
/*                             DOCUMENTATION                                  */
/* -------------------------------------------------------------------------- */

type DocumentationItemProps = {
  text: string;
};

function DocumentationItem({
  text,
}: DocumentationItemProps) {
  return (
    <div className="flex items-start gap-3 border-t border-border pt-4">
      <span
        aria-hidden="true"
        className="text-accent"
      >
        ↳
      </span>

      <p className="font-semibold">
        {text}
      </p>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                                OUTCOMES                                    */
/* -------------------------------------------------------------------------- */

type OutcomeExampleProps = {
  label: string;
  value: string;
};

function OutcomeExample({
  label,
  value,
}: OutcomeExampleProps) {
  return (
    <div className="border border-border p-5">
      <p className="text-xs font-bold uppercase tracking-[0.14em] text-accent">
        {label}
      </p>

      <p className="mt-3 text-sm font-semibold leading-6">
        {value}
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
    <div className="py-4 lg:border-l lg:border-border lg:px-7 lg:first:border-l-0 lg:first:pl-0">
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