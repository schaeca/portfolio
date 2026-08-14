import { Link } from "react-router";

const features = [
  {
    number: "01",
    title: "Match Day Hub",
    description:
      "Centralised match-day information including opponents, kickoff times, locations and match-day types.",
  },
  {
    number: "02",
    title: "Squad Availability",
    description:
      "Players can manage their availability while coaches get a clear overview for squad planning.",
  },
  {
    number: "03",
    title: "Player Management",
    description:
      "A structured player database combining team-relevant information, availability and profile data.",
  },
  {
    number: "04",
    title: "Team Voting",
    description:
      "Post-match voting for Player of the Day and Hammer of the Day, including controlled reveal flows.",
  },
  {
    number: "05",
    title: "Hall of Fame",
    description:
      "A shared history of previous awards that turns recurring team rituals into part of the product.",
  },
];

const technicalDecisions = [
  {
    title: "React + TypeScript",
    description:
      "A component-based frontend with strong typing across application data, API responses and UI state.",
  },
  {
    title: "TanStack Query",
    description:
      "Server state is handled separately from local UI state, simplifying fetching, caching and data synchronisation.",
  },
  {
    title: "Node.js + Express",
    description:
      "A REST API provides a clear separation between frontend behaviour, business logic and persistence.",
  },
  {
    title: "MongoDB + Mongoose",
    description:
      "The data model reflects relationships between users, players, teams, match days, squads and votes.",
  },
  {
    title: "JWT Authentication",
    description:
      "Protected application areas and role-aware behaviour are built around token-based authentication.",
  },
  {
    title: "Zod",
    description:
      "Validation helps keep incoming application data predictable at API boundaries.",
  },
];

export default function TeamentialCaseStudy() {
  return (
    <main id="main-content" className="bg-background text-foreground">
      {/* HERO */}
      <section className="page-container pt-8 pb-20 md:pt-10 md:pb-28 lg:pb-36">
        <Link
          to="/"
          className="group inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.1em] transition-colors hover:text-accent"
        >
          <span
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:-translate-x-1"
          >
            ←
          </span>
          Back to portfolio
        </Link>

        <div className="mt-20 max-w-6xl md:mt-28">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
            01 / Case Study
          </p>

          <h1 className="mt-5 text-[clamp(4rem,11vw,9rem)] leading-[0.82] font-extrabold tracking-[-0.065em]">
            TEAMENTIAL
            <span className="text-accent">.</span>
          </h1>

          <p className="mt-8 max-w-3xl font-serif text-[clamp(1.8rem,4vw,3.5rem)] leading-[1.05] italic text-accent">
            A team hub built from real-world needs.
          </p>

          <p className="mt-8 max-w-2xl text-base leading-7 text-muted md:text-lg md:leading-8">
            A full-stack web application designed to simplify the everyday
            organisation of an amateur sports team — from match-day planning
            and squad availability to player management and team voting.
          </p>
        </div>

        {/* PROJECT META */}
        <div className="mt-16 grid border-y border-border py-7 sm:grid-cols-2 lg:mt-24 lg:grid-cols-4">
          <ProjectMeta label="Role" value="Full-Stack Developer" />
          <ProjectMeta label="Focus" value="Product · UX · Development" />
          <ProjectMeta
            label="Stack"
            value="React · TypeScript · Node.js"
          />
          <ProjectMeta label="Context" value="Real team workflow" />
        </div>
      </section>

      {/* CONTEXT */}
      <CaseStudySection
        number="01"
        label="The Context"
        title="IT STARTED WITH A TEAM I ALREADY KNEW."
      >
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <p className="font-serif text-3xl leading-tight italic text-accent md:text-4xl">
            Instead of inventing a fictional problem, I built around workflows
            I had experienced myself.
          </p>

          <div className="space-y-6 text-base leading-7 text-muted md:text-lg md:leading-8">
            <p>
              Teamential was created around the needs of an amateur rugby team.
              Match-day information, squad planning, player details and
              recurring team rituals existed across different conversations,
              tools and manual processes.
            </p>

            <p>
              That made the project an opportunity to build more than a
              technical demo. I could start with actual users, existing
              behaviours and concrete organisational pain points — and turn
              those into a product.
            </p>
          </div>
        </div>
      </CaseStudySection>

      {/* PROBLEM */}
      <CaseStudySection
        number="02"
        label="The Problem"
        title="TOO MUCH INFORMATION. TOO MANY PLACES."
        surface
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <ProblemCard
            title="Fragmented information"
            text="Important match-day details and team information were distributed across chats and different tools."
          />

          <ProblemCard
            title="Manual coordination"
            text="Availability and squad decisions required repeated messages, follow-ups and manual overview."
          />

          <ProblemCard
            title="No shared history"
            text="Recurring team activities such as post-match voting existed as rituals, but not as part of one shared system."
          />
        </div>
      </CaseStudySection>

      {/* APPROACH */}
      <CaseStudySection
        number="03"
        label="The Approach"
        title="START WITH THE WORKFLOW. NOT THE FEATURE LIST."
      >
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div>
            <p className="font-serif text-3xl leading-tight italic text-accent md:text-4xl">
              What does the team actually need before, during and after a match
              day?
            </p>
          </div>

          <div className="space-y-8">
            <ApproachStep
              number="01"
              title="Understand"
              text="Break existing team processes into recurring tasks, users and information flows."
            />

            <ApproachStep
              number="02"
              title="Prioritise"
              text="Focus the first version on workflows with clear value instead of trying to reproduce every existing process."
            />

            <ApproachStep
              number="03"
              title="Model"
              text="Translate those workflows into entities and relationships such as users, players, match days, squads and votes."
            />

            <ApproachStep
              number="04"
              title="Build & iterate"
              text="Implement the flows end to end and refine both the interface and underlying application structure as the product evolved."
            />
          </div>
        </div>
      </CaseStudySection>

      {/* PRODUCT */}
      <CaseStudySection
        number="04"
        label="The Product"
        title="ONE HUB. FIVE CORE WORKFLOWS."
        surface
      >
        <div className="grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.number}
              className="border-t border-border pt-5"
            >
              <span className="text-xs font-bold tracking-[0.14em] text-accent">
                {feature.number}
              </span>

              <h3 className="mt-5 text-xl font-bold">
                {feature.title}
              </h3>

              <p className="mt-3 leading-7 text-muted">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </CaseStudySection>

      {/* SCREENSHOT PLACEHOLDER */}
      <section className="page-container py-20 md:py-28 lg:py-36">
        <div className="overflow-hidden border border-border bg-surface">
          <div className="flex items-center gap-2 border-b border-border px-5 py-4">
            <span className="h-2.5 w-2.5 rounded-full bg-muted/50" />
            <span className="h-2.5 w-2.5 rounded-full bg-muted/50" />
            <span className="h-2.5 w-2.5 rounded-full bg-muted/50" />
          </div>

          <div className="flex min-h-[320px] items-center justify-center px-8 py-20 md:min-h-[520px]">
            <div className="max-w-md text-center">
              <p className="font-serif text-3xl italic text-accent">
                Product screenshots coming here.
              </p>

              <p className="mt-4 leading-7 text-muted">
                We&apos;ll replace this with a focused set of real Teamential
                screens rather than showing every part of the application.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TECH */}
      <CaseStudySection
        number="05"
        label="Under the Hood"
        title="BUILDING THE PRODUCT END TO END."
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {technicalDecisions.map((decision) => (
            <article
              key={decision.title}
              className="border border-border p-6 md:p-7"
            >
              <h3 className="text-lg font-bold">
                {decision.title}
              </h3>

              <p className="mt-4 leading-7 text-muted">
                {decision.description}
              </p>
            </article>
          ))}
        </div>
      </CaseStudySection>

      {/* KEY CHALLENGES */}
      <CaseStudySection
        number="06"
        label="Key Challenges"
        title="THE INTERESTING PART WASN'T JUST MAKING IT WORK."
        surface
      >
        <div className="space-y-12">
          <Challenge
            number="01"
            title="Connecting users and players"
            text="Authentication users and team players are related, but they are not the same concept. Keeping these concerns separate allowed the application to support player-linked users as well as roles such as coaches or administrators."
          />

          <Challenge
            number="02"
            title="Designing data around real workflows"
            text="Match days connect teams, opponents, squads and votes. Modelling those relationships clearly was essential to avoid pushing business logic into individual UI components."
          />

          <Challenge
            number="03"
            title="Separating server and UI state"
            text="Moving API-driven data to TanStack Query simplified refetching, caching and synchronisation while keeping local component state focused on interface behaviour."
          />

          <Challenge
            number="04"
            title="Protecting application flows"
            text="Authentication, protected routes and role-aware behaviour had to work together across frontend and backend rather than being treated as isolated features."
          />
        </div>
      </CaseStudySection>

      {/* LEARNINGS */}
      <CaseStudySection
        number="07"
        label="What I Learned"
        title="BUILDING THE APP CHANGED HOW I THINK ABOUT DEVELOPMENT."
      >
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-24">
          <p className="font-serif text-3xl leading-tight italic text-accent md:text-4xl">
            The biggest lesson was how closely product decisions, data models
            and interface decisions influence one another.
          </p>

          <div className="space-y-6 text-base leading-7 text-muted md:text-lg md:leading-8">
            <p>
              Teamential gave me the opportunity to work across the complete
              application flow: defining requirements, modelling data,
              designing API behaviour, building interfaces and debugging the
              connections between them.
            </p>

            <p>
              It also reinforced something from my consulting background:
              technical implementation becomes much easier to reason about when
              the underlying problem and responsibilities within the system are
              clear.
            </p>

            <p>
              Most importantly, the project moved development from something I
              was learning into something I could use to turn an idea into a
              functioning product.
            </p>
          </div>
        </div>
      </CaseStudySection>

      {/* CTA */}
      <section className="bg-foreground text-background">
        <div className="page-container py-20 md:py-28 lg:py-32">
          <p className="font-serif text-2xl italic text-accent md:text-3xl">
            Want to see how it works?
          </p>

          <h2 className="mt-4 text-[clamp(3.5rem,8vw,7rem)] leading-[0.85] font-extrabold tracking-[-0.06em]">
            EXPLORE THE
            <br />
            PRODUCT.
          </h2>

          <div className="mt-10 flex flex-wrap gap-6">
            <a
              href="#"
              className="group inline-flex items-center gap-2 font-bold uppercase tracking-[0.1em] transition-colors hover:text-accent"
            >
              Live Demo
              <span
                aria-hidden="true"
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              >
                ↗
              </span>
            </a>

            <a
              href="#"
              className="group inline-flex items-center gap-2 font-bold uppercase tracking-[0.1em] transition-colors hover:text-accent"
            >
              GitHub
              <span
                aria-hidden="true"
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              >
                ↗
              </span>
            </a>
          </div>

          <div className="mt-24 border-t border-background/20 pt-8">
            <Link
              to="/work/jira-safe"
              className="group flex items-end justify-between gap-8"
            >
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-background/60">
                  Next Case Study
                </p>

                <p className="mt-3 text-2xl font-bold md:text-4xl">
                  Jira Architecture for SAFe
                </p>
              </div>

              <span
                aria-hidden="true"
                className="text-3xl transition-transform duration-300 group-hover:translate-x-2"
              >
                →
              </span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

type ProjectMetaProps = {
  label: string;
  value: string;
};

function ProjectMeta({ label, value }: ProjectMetaProps) {
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
  children: React.ReactNode;
};

function CaseStudySection({
  number,
  label,
  title,
  surface = false,
  children,
}: CaseStudySectionProps) {
  return (
    <section className={surface ? "bg-surface" : "bg-background"}>
      <div className="page-container py-20 md:py-28 lg:py-36">
        <div className="mb-12 md:mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
            {number} / {label}
          </p>

          <h2 className="mt-5 max-w-5xl text-[clamp(2.8rem,6vw,5.8rem)] leading-[0.9] font-extrabold tracking-[-0.055em]">
            {title}
          </h2>
        </div>

        {children}
      </div>
    </section>
  );
}

type ProblemCardProps = {
  title: string;
  text: string;
};

function ProblemCard({ title, text }: ProblemCardProps) {
  return (
    <article className="border-t border-foreground pt-5">
      <h3 className="text-xl font-bold">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-muted">
        {text}
      </p>
    </article>
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

type ChallengeProps = {
  number: string;
  title: string;
  text: string;
};

function Challenge({
  number,
  title,
  text,
}: ChallengeProps) {
  return (
    <article className="grid gap-4 border-t border-border pt-6 md:grid-cols-[5rem_0.8fr_1.2fr] md:gap-8">
      <span className="text-xs font-bold tracking-[0.14em] text-accent">
        {number}
      </span>

      <h3 className="text-xl font-bold">
        {title}
      </h3>

      <p className="leading-7 text-muted">
        {text}
      </p>
    </article>
  );
}