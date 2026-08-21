import type { ReactNode } from "react";
import { Link } from "react-router";

import dashboardImage from "../assets/projects/teamential/dashboard.webp";
import landingPageImage from "../assets/projects/teamential/landing-page.webp";
import matchDayDetailImage from "../assets/projects/teamential/match-day-detail.webp";
import playerProfileImage from "../assets/projects/teamential/player-profile.webp";
import squadEditImage from "../assets/projects/teamential/squad-edit.webp";
import squadOverviewImage from "../assets/projects/teamential/squad-overview.webp";
import Footer from "../components/Footer";

const features = [
  {
    number: "01",
    title: "Match Day Hub",
    description:
      "Centralised match day information including opponents, tournament types, locations, kickoff times and squad planning.",
  },
  {
    number: "02",
    title: "Squad Planning",
    description:
      "Player availability flows into lineup planning, including starters, substitutes and playing positions.",
  },
  {
    number: "03",
    title: "Player Management",
    description:
      "Structured player profiles connect positions, availability, team information and match statistics.",
  },
  {
    number: "04",
    title: "Secure Team Access",
    description:
      "Protected application areas connect authenticated users with the permissions and team information relevant to them.",
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
      "The data model reflects relationships between users, players, teams, match days and squads.",
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
    <main id="main-content" className="overflow-x-clip bg-background text-foreground">
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

        <div className="mt-20 grid gap-12 md:mt-28 lg:grid-cols-[1.15fr_0.55fr] lg:items-center lg:gap-16">
          {/* HERO TEXT */}
          <div className="min-w-0">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
              01 / Case Study
            </p>

            <h1 className="mt-5 text-[clamp(4rem,11vw,9rem)] leading-[0.82] font-extrabold tracking-[-0.065em] min-[401px]:text-[clamp(4rem,11vw,9rem)] lg:text-[clamp(4rem,7vw,7.5rem)]">
              TEAMENTIAL
              <span className="text-accent">.</span>
            </h1>

            <p className="mt-8 max-w-3xl font-serif text-[clamp(1.8rem,4vw,3.5rem)] leading-[1.05] italic text-accent lg:text-[clamp(1.8rem,3vw,3rem)]">
              A team hub built from real-world needs.
            </p>

            <p className="mt-8 max-w-2xl text-base leading-7 text-muted md:text-lg md:leading-8">
              A full-stack web application designed to simplify the everyday
              organisation of an amateur sports team — from match day planning
              and squad availability to player management and team workflows.
            </p>
            <div className="mt-6 flex items-start gap-3 border-l-2 border-accent pl-4">
  <span className="text-accent">✦</span>

  <p className="max-w-2xl text-sm leading-6 text-muted">
    Selected as one of six WBS Coding School showcase projects and presented
    to an audience of around 200 participants.
  </p>
</div>
          </div>


          {/* PRODUCT PREVIEW */}
          <div className="min-w-0 mx-auto w-full max-w-sm lg:mx-0 lg:justify-self-end">
            <ScreenshotFrame>
              <img
                src={landingPageImage}
                alt="Teamential landing page presenting the product and its core team management features"
                className="block h-auto w-full"
              />
            </ScreenshotFrame>
          </div>
        </div>

        {/* PROJECT META */}
        <div className="min-w-0 mt-16 grid border-y border-border py-7 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4 lg:gap-x-0">
          <ProjectMeta label="Role" value="Full-Stack Developer" />

          <ProjectMeta label="Focus" value="Product · UX · Development" />

          <ProjectMeta label="Stack" value="React · TypeScript · Node.js" />

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
            Instead of inventing a fictional problem, I built around workflows I
            had experienced myself.
          </p>

          <div className="space-y-6 text-base leading-7 text-muted md:text-lg md:leading-8">
            <p>
              Teamential was created around the needs of an amateur rugby team.
              Match day information, squad planning, player details and
              recurring organisational tasks existed across different
              conversations, tools and manual processes.
            </p>

            <p>
              That made the project an opportunity to build more than a
              technical demo. I could start with real users, existing behaviours and concrete organisational pain points — and turn those into a product.
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
            text="Important match day details and team information were distributed across chats and different tools."
          />

          <ProblemCard
            title="Manual coordination"
            text="Availability and squad decisions required repeated messages, follow-ups and manual tracking."
          />

          <ProblemCard
            title="Disconnected workflows"
            text="Player information, match days and squad decisions were related in practice, but not connected in one shared system."
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
              text="Translate those workflows into entities and relationships such as users, players, teams, match days and squads."
            />

            <ApproachStep
              number="04"
              title="Build & iterate"
              text="Implement the flows end-to-end and refine both the interface and underlying application structure as the product evolved."
            />
          </div>
        </div>
      </CaseStudySection>

      {/* PRODUCT */}
      <CaseStudySection
        number="04"
        label="The Product"
        title="ONE HUB. BUILT AROUND REAL TEAM WORKFLOWS."
        surface
      >
        <div className="grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <article
              key={feature.number}
              className="border-t border-border pt-5"
            >
              <span className="text-xs font-bold tracking-[0.14em] text-accent">
                {feature.number}
              </span>

              <h3 className="mt-5 text-xl font-bold">{feature.title}</h3>

              <p className="mt-3 leading-7 text-muted">{feature.description}</p>
            </article>
          ))}
        </div>

        {/* NEXT ITERATION */}
        <div className="mt-16 border-t border-border pt-8">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
            Next Iteration
          </p>

          <p className="mt-4 max-w-2xl leading-7 text-muted">
            The product roadmap extends the existing match day workflow with
            team voting and a shared history of previous awards.
          </p>

          <div className="mt-7 grid gap-4 md:grid-cols-2">
            <PlannedFeature title="Team Voting" />
            <PlannedFeature title="Hall of Fame" />
          </div>
        </div>
      </CaseStudySection>

      {/* DASHBOARD */}
      <section className="page-container py-20 md:py-28 lg:py-36">
        <div className="grid gap-8 lg:grid-cols-[0.65fr_1fr] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
              Product Overview
            </p>

            <h2 className="mt-5 text-[clamp(2.8rem,5vw,4.8rem)] leading-[0.9] font-extrabold tracking-[-0.055em]">
              THE TEAM AT
              <span className="block">A GLANCE.</span>
            </h2>
          </div>

          <p className="max-w-lg text-base leading-7 text-muted lg:justify-self-end">
            The dashboard brings key team information together in one place —
            upcoming match days, player availability, squad statistics and open
            tasks without having to search through separate conversations or
            tools.
          </p>
        </div>

        <div className="mt-12 max-w-4xl mx-auto">
          <ScreenshotFrame>
            <img
              src={dashboardImage}
              alt="Teamential dashboard showing team statistics, match days and squad information"
              className="block h-auto w-full"
            />
          </ScreenshotFrame>
        </div>
      </section>

      {/* MATCH DAY WORKFLOW */}
      <section className="bg-surface">
        <div className="page-container py-20 md:py-28 lg:py-36">
          <div className="max-w-4xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
              Match Day Workflow
            </p>

            <h2 className="mt-5 text-[clamp(2.8rem,6vw,5.5rem)] leading-[0.9] font-extrabold tracking-[-0.055em]">
              FROM INFORMATION
              <span className="block">TO ACTION.</span>
            </h2>

            <p className="mt-7 max-w-2xl text-base leading-7 text-muted md:text-lg md:leading-8">
              A match day is more than a date in a calendar. It connects event
              information, player availability and the actual squad that will
              take the field.
            </p>
          </div>

{/* <p className="mt-12 max-w-2xl font-serif text-2xl leading-tight italic text-accent md:text-3xl">
            Planning doesn&apos;t stop at knowing who&apos;s available — the
            data needs to support the decision that comes next.
          </p> */}

          <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:items-start">
            {/* MATCH DAY DETAIL */}
            <div>
              <ScreenshotFrame>
                <div className="flex aspect-4/3 items-center justify-center bg-foreground p-3 md:p-5">
                  <img
                    src={matchDayDetailImage}
                    alt="Teamential match day detail with tournament information and selected squad"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              </ScreenshotFrame>

              <div className="mt-5">
                <p className="font-bold">Match day detail</p>

                <p className="mt-2 max-w-lg text-sm leading-6 text-muted">
                  Event information, tournament type, location and the selected
                  squad come together in one central match day view.
                </p>
              </div>
            </div>

            {/* SQUAD EDIT */}
            <div>
              <ScreenshotFrame>
                <div className="flex aspect-4/3 items-center justify-center bg-foreground p-3 md:p-5">
                  <img
                    src={squadEditImage}
                    alt="Teamential squad editor for selecting players and assigning starting positions"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              </ScreenshotFrame>

              <div className="mt-5">
                <p className="font-bold">Squad planning</p>

                <p className="mt-2 max-w-lg text-sm leading-6 text-muted">
                  Available players can be moved into the lineup, marked as
                  starters or substitutes and assigned to specific playing
                  positions.
                </p>
              </div>
            </div>
          </div>

          
        </div>
      </section>

      {/* TECH */}
      <CaseStudySection
        number="05"
        label="Under the Hood"
        title="BUILDING THE PRODUCT END-TO-END."
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {technicalDecisions.map((decision) => (
            <article
              key={decision.title}
              className="border border-border p-6 md:p-7"
            >
              <h3 className="text-lg font-bold">{decision.title}</h3>

              <p className="mt-4 leading-7 text-muted">
                {decision.description}
              </p>
            </article>
          ))}
        </div>
      </CaseStudySection>

      {/* PLAYER MANAGEMENT */}
      <section className="bg-surface">
        <div className="page-container py-20 md:py-28 lg:py-36">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1fr] lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
                Player Management
              </p>

              <h2 className="mt-5 text-[clamp(2.8rem,5vw,5rem)] leading-[0.9] font-extrabold tracking-[-0.055em]">
                ONE PLAYER.
                <span className="block">ONE SOURCE OF TRUTH.</span>
              </h2>
            </div>

            <p className="max-w-lg text-base leading-7 text-muted lg:justify-self-end">
              Player information is stored as structured data rather than
              scattered across chats and spreadsheets, making it reusable across
              squad planning, match days and player statistics.
            </p>
          </div>

          <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <ScreenshotFrame>
                <img
                  src={squadOverviewImage}
                  alt="Teamential squad overview with player positions and availability"
                  className="block h-auto w-full"
                />
              </ScreenshotFrame>

              <p className="mt-5 text-sm leading-6 text-muted">
                <strong className="text-foreground">Squad overview.</strong>{" "}
                Search and filter players by position and availability while
                keeping the complete squad visible.
              </p>
            </div>

            <div>
              <ScreenshotFrame>
                <img
                  src={playerProfileImage}
                  alt="Teamential player profile showing player information and match statistics"
                  className="block h-auto w-full"
                />
              </ScreenshotFrame>

              <p className="mt-5 text-sm leading-6 text-muted">
                <strong className="text-foreground">Player profile.</strong> A
                player becomes more than a name in a list — profile information,
                team history and match statistics remain connected.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* KEY CHALLENGES */}
      <CaseStudySection
        number="06"
        label="Key Challenges"
        title="THE INTERESTING PART WASN'T JUST MAKING IT WORK."
      >
        <div className="space-y-12">
          <Challenge
            number="01"
            title="Connecting users and players"
            text="User accounts and team players are related, but they are not the same concept. Keeping these concerns separate allows the application to support player-linked users as well as roles such as coaches or administrators."
          />

          <Challenge
            number="02"
            title="Designing data around real workflows"
            text="Match days connect teams, opponents, players and squads. Modelling those relationships clearly was essential to avoid pushing business logic into individual UI components."
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
        surface
      >
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-24">
          <p className="font-serif text-3xl leading-tight italic text-accent md:text-4xl">
            The biggest lesson was how closely product decisions, data models
            and interface decisions influence one another.
          </p>

          <div className="space-y-6 text-base leading-7 text-muted md:text-lg md:leading-8">
            <p>
              Teamential gave me the opportunity to work across the complete
              application flow: defining requirements, modelling data, designing
              API behaviour, building interfaces and debugging the connections
              between them.
            </p>

            <p>
              It also reinforced something from my consulting background:
              technical implementation becomes much easier to reason about when
              the underlying problem and responsibilities within the system are
              clear.
            </p>

            <p>
              Most importantly, the project gave me hands-on experience turning an idea into a functioning product across the full stack — from requirements and data models to APIs and user interfaces.
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

          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-5">
            <a
              href="https://teamential.onrender.com"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 font-bold uppercase tracking-widest transition-colors hover:text-accent"
            >
              Live Demo
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              >
                ↗
              </span>
            </a>

            
              <a
                href="https://github.com/schaeca/Teamential"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 font-bold uppercase tracking-widest transition-colors hover:text-accent"
              >
                GitHub

                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                >
                  ↗
                </span>
              </a>
           
          </div>

          {/* NEXT CASE STUDY */}
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
      <Footer/>
    </main>
  );
}

/* -------------------------------------------------------------------------- */
/*                               HELPER COMPONENTS                            */
/* -------------------------------------------------------------------------- */

type ProjectMetaProps = {
  label: string;
  value: string;
};

function ProjectMeta({ label, value }: ProjectMetaProps) {
  return (
    <div className="py-4 lg:border-l lg:border-border lg:px-7 lg:first:border-l-0 lg:first:pl-0">
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-muted">
        {label}
      </p>

      <p className="mt-2 font-semibold">{value}</p>
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
      <h3 className="text-xl font-bold">{title}</h3>

      <p className="mt-4 leading-7 text-muted">{text}</p>
    </article>
  );
}

type ApproachStepProps = {
  number: string;
  title: string;
  text: string;
};

function ApproachStep({ number, title, text }: ApproachStepProps) {
  return (
    <div className="grid grid-cols-[auto_1fr] gap-5 border-t border-border pt-5">
      <span className="text-xs font-bold tracking-[0.14em] text-accent">
        {number}
      </span>

      <div>
        <h3 className="text-xl font-bold">{title}</h3>

        <p className="mt-2 leading-7 text-muted">{text}</p>
      </div>
    </div>
  );
}

type PlannedFeatureProps = {
  title: string;
};

function PlannedFeature({ title }: PlannedFeatureProps) {
  return (
    <div className="flex items-center justify-between gap-4 border border-border px-5 py-4">
      <p className="font-semibold">{title}</p>

      <span className="text-xs font-bold uppercase tracking-[0.14em] text-muted">
        Planned
      </span>
    </div>
  );
}

type ScreenshotFrameProps = {
  children: ReactNode;
  className?: string;
};

function ScreenshotFrame({ children, className = "" }: ScreenshotFrameProps) {
  return (
    <div
      className={`overflow-hidden border border-border bg-foreground shadow-[0_20px_60px_rgba(25,25,25,0.08)] ${className}`}
    >
      <div
        aria-hidden="true"
        className="flex items-center gap-2 border-b border-white/10 px-4 py-3"
      >
        <span className="h-2 w-2 rounded-full bg-background/35" />
        <span className="h-2 w-2 rounded-full bg-background/35" />
        <span className="h-2 w-2 rounded-full bg-background/35" />
      </div>

      {children}
    </div>
  );
}

type ChallengeProps = {
  number: string;
  title: string;
  text: string;
};

function Challenge({ number, title, text }: ChallengeProps) {
  return (
    <article className="grid gap-4 border-t border-border pt-6 md:grid-cols-[5rem_0.8fr_1.2fr] md:gap-8">
      <span className="text-xs font-bold tracking-[0.14em] text-accent">
        {number}
      </span>

      <h3 className="text-xl font-bold">{title}</h3>

      <p className="leading-7 text-muted">{text}</p>
    </article>
  );
}
