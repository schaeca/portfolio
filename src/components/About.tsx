const strengths = [
  {
    number: "01",
    title: "Systems Thinking",
    description:
      "Breaking down complexity, understanding dependencies and turning requirements into clear, workable solutions.",
  },
  {
    number: "02",
    title: "User Perspective",
    description:
      "Looking beyond what can be built to understand what people actually need and how they will use it.",
  },
  {
    number: "03",
    title: "Ownership",
    description:
      "Taking ideas from problem definition and concept through implementation, iteration and delivery.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="border-t border-border bg-background py-20 md:py-28 lg:py-32"
    >
      <div className="page-container">
        {/* INTRO */}
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          {/* LEFT */}
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-accent">
              02 / About
            </p>

            <h2 className="text-[clamp(2.8rem,6vw,5.5rem)] leading-[0.9] font-extrabold tracking-[-0.055em]">
              FROM PROBLEM
              <span className="block">SOLVING TO</span>
              <span className="block">
                PRODUCT BUILDING<span className="text-accent">.</span>
              </span>
            </h2>
          </div>

          {/* RIGHT */}
          <div className="lg:pt-12">
            <p className="max-w-xl font-serif text-[clamp(1.5rem,2.5vw,2.1rem)] leading-[1.2] italic text-accent">
              Understanding complex systems was never enough — I wanted to get closer to building the solutions myself.
            </p>

            <div className="mt-8 max-w-xl space-y-5 text-base leading-7 text-muted md:text-lg md:leading-8">
              <p>
                Before moving into software development, I spent several years
                in IT consulting, designing solutions for complex enterprise
                environments and translating between technical possibilities,
                business requirements and the people using them.
              </p>

              <p>
                That experience still shapes how I build today. I don't start
                with a framework. I start by asking what problem we're solving,
                who we're solving it for and what a useful solution actually
                needs.
              </p>

              <p>
                Now I'm bringing that mindset into frontend and full-stack development — combining hands-on implementation with the strategic and human perspective I developed through years of consulting.
              </p>
            </div>
          </div>
        </div>

        {/* STRENGTHS */}
        <div className="mt-16 md:mt-16">
          <p className="mb-10 max-w-xl font-serif text-[clamp(1.5rem,2.5vw,2.1rem)] leading-[1.2] italic text-accent">
            What I bring
          </p>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {strengths.map((strength) => (
              <article
                key={strength.title}
                className="group"
              >
                  <h3 className="text-lg font-bold tracking-[-0.03em] transition-colors duration-300 group-hover:text-accent">
                    {strength.title}
                  </h3>

                <p className="mt-4 max-w-sm text-sm leading-6 text-muted">
                  {strength.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}