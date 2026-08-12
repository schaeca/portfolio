import portraitCutout from "../assets/Portrait2.png";
import StrategyToCode from "./StrategyToCode";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-20 md:pt-24">
      <div className="page-container py-12">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          
          {/* TEXT */}
          <div className="relative z-20">
            <p className="hero-reveal mb-3 font-serif text-[clamp(1.4rem,7vw,2.25rem)] italic text-accent">
              Understand the problem.
            </p>    

            <h1 className="hero-reveal [animation-delay:100ms] text-[clamp(3.2rem,15vw,5.5rem)] leading-[0.84] font-extrabold tracking-[-0.065em] lg:text-[clamp(5rem,8vw,8rem)]">
              BUILD THE

              <span className="block">
                SOLUTION<span className="text-accent">.</span>
              </span>
            </h1>

            <p className="hero-reveal [animation-delay:200ms] mt-7 max-w-xl text-base leading-7 text-muted md:mt-8 md:text-lg md:leading-8">
              I'm Carina — a developer with a background in IT consulting,
              combining{" "}
              <span className="font-semibold text-foreground">
                strategy
              </span>
              ,{" "}
              <span className="font-semibold text-foreground">
                empathy
              </span>{" "}
              and{" "}
              <span className="font-semibold text-foreground">
                code
              </span>{" "}
              to build digital products that make sense.
            </p>

            {/* POSITIONING */}
            <div className="hero-reveal [animation-delay:300ms] mt-7 flex flex-wrap items-center gap-x-3 gap-y-3 text-sm font-semibold md:mt-8 md:gap-x-4">
              <span className="flex items-center gap-2">
                <span className="text-accent">&lt;/&gt;</span>
                Frontend
              </span>

              <Separator />

              <span className="flex items-center gap-2">
                <span className="text-accent">▣</span>
                Full-Stack
              </span>

              <Separator />

              <span className="flex items-center gap-2">
                <span className="text-accent">✦</span>
                Problem Solver
              </span>

              <Separator />

              <span className="flex items-center gap-2">
                <span className="text-accent">◎</span>
                Team Player
              </span>
            </div>

            {/* CTAs */}
            <div className="hero-reveal [animation-delay:400ms] mt-9 grid gap-3 sm:flex sm:flex-wrap sm:items-center sm:gap-4 md:mt-10">
              <a
                href="#work"
                className="group inline-flex items-center justify-between gap-6 border-2 border-accent bg-accent px-6 py-4 text-sm font-bold uppercase tracking-[0.08em] text-white transition-all duration-300 hover:-translate-y-1 sm:min-w-48"
              >
                View my work

                <span className="text-lg transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1">
                  ↘
                </span>
              </a>

              <a
                href="#about"
                className="group inline-flex items-center justify-between gap-6 border-2 border-foreground bg-transparent px-6 py-4 text-sm font-bold uppercase tracking-[0.08em] text-foreground transition-all duration-300 hover:-translate-y-1 hover:bg-foreground hover:text-background sm:min-w-48"
              >
                About me

                <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>

          {/* PORTRAIT */}
          <CutoutPortrait />

        </div>
          <StrategyToCode/>
      </div>
    </section>
  );
}

function Separator() {
  return (
    <span
      className="text-border"
      aria-hidden="true"
    >
      |
    </span>
  );
}

function CutoutPortrait() {
  return (
    <div className="hero-reveal [animation-delay:250ms] relative mx-auto mt-2 h-107.5 w-full max-w-107.5 md:h-135 md:max-w-130 lg:mt-0 lg:h-155 lg:max-w-none">
      
      {/* circle */}
      <div className="absolute left-1/2 top-[12%] aspect-square w-[78%] -translate-x-1/2 rounded-full bg-surface lg:left-auto lg:right-8 lg:translate-x-0" />

      {/* dots */}
      <div className="absolute right-[3%] top-[12%] grid grid-cols-6 gap-2 opacity-50 md:gap-3 lg:right-0">
        {Array.from({ length: 36 }).map((_, index) => (
          <span
            key={index}
            className="h-1 w-1 rounded-full bg-secondary md:h-1.5 md:w-1.5"
          />
        ))}
      </div>

      {/* portrait */}
      <img
        src={portraitCutout}
        alt="Carina Schädlich"
        className="absolute bottom-12 left-1/2 z-10 max-h-97.5 w-auto max-w-full -translate-x-1/2 object-contain transition-transform duration-500 ease-out hover:scale-[1.015] md:bottom-12 md:max-h-125 lg:bottom-0 lg:max-h-150"
      />

      {/* caption */}
      <div className="absolute bottom-0 left-1/2 z-20 w-full -translate-x-1/2 text-center lg:bottom-5 lg:left-0 lg:w-auto lg:translate-x-0 lg:text-left">
        <p className="text-xs font-bold uppercase tracking-[0.12em] text-foreground md:text-sm">
          Carina Schädlich
        </p>

        <p className="mt-1 text-xs leading-5 text-muted md:text-sm md:leading-6">
          Frontend / Full-Stack Developer
        </p>
      </div>
    </div>
  );
}