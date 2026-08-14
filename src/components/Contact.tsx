import CVLink from "./CVLink";

const contactLinks = [
  {
    label: "Email",
    href: "mailto:carina.schaedlich@gmail.com",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/carina-schaedlich",
  },
  {
    label: "GitHub",
    href: "https://github.com/schaeca",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-border bg-foreground py-20 text-background md:py-28 lg:py-32"
    >
      <div className="page-container">
        <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-accent">
          05 / Contact
        </p>

        <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          {/* LEFT */}
          <div>
            <p className="mb-4 font-serif text-[clamp(1.5rem,2.5vw,2.2rem)] italic text-accent">
              Have a problem worth solving?
            </p>

            <h2 className="text-[clamp(4rem,9vw,8rem)] leading-[0.82] font-extrabold tracking-[-0.065em]">
              LET&apos;S
              <span className="block">
                TALK<span className="text-accent">.</span>
              </span>
            </h2>
          </div>

          {/* RIGHT */}
          <div className="lg:pb-2">
            <p className="max-w-md text-base leading-7 text-background/65 md:text-lg md:leading-8">
              I'm looking for my next role in frontend or full-stack development. If you're building thoughtful digital products and think my mix of development and consulting experience could be useful, I'd love to talk.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={
                    link.label === "Email"
                      ? undefined
                      : "_blank"
                  }
                  rel={
                    link.label === "Email"
                      ? undefined
                      : "noreferrer"
                  }
                  className="group inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest transition-colors hover:text-accent"
                >
                  {link.label}

                  <span
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    aria-hidden="true"
                  >
                    ↗
                  </span>
                </a>
              ))}
              <CVLink/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}