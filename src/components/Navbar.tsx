import { useState } from "react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Journey", href: "#journey" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 z-50 w-full">
      <nav className="page-container flex h-20 items-center justify-between md:h-24">
        {/* Logo */}
        <a
          href="#"
          className="relative z-50 text-2xl font-extrabold tracking-[-0.08em]"
          aria-label="Back to top"
          onClick={() => setIsOpen(false)}
        >
          CS<span className="text-accent">.</span>
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold uppercase tracking-[0.08em] transition-colors hover:text-accent"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="relative z-50 flex h-11 w-11 items-center justify-center md:hidden"
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span className="relative block h-5 w-7">
            <span
              className={`absolute left-0 top-0 h-0.5 w-7 bg-foreground transition-all duration-300 ${
                isOpen ? "top-2 rotate-45" : ""
              }`}
            />

            <span
              className={`absolute left-0 top-2 h-0.5 w-7 bg-foreground transition-all duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />

            <span
              className={`absolute left-0 top-4 h-0.5 w-7 bg-foreground transition-all duration-300 ${
                isOpen ? "top-2 -rotate-45" : ""
              }`}
            />
          </span>
        </button>

        {/* Mobile menu */}
        <div
          id="mobile-navigation"
          className={`fixed inset-0 flex flex-col bg-background px-6 pt-28 transition-all duration-300 md:hidden ${
            isOpen
              ? "visible translate-y-0 opacity-100"
              : "invisible -translate-y-4 opacity-0"
          }`}
        >
          <div className="flex flex-col">
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="group flex items-center justify-between border-b border-border py-4"
              >
                <span className="text-[clamp(1.4rem,5vw,2rem)] font-bold tracking-[-0.04em]">
                  {item.label}
                </span>

                <span className="text-sm text-muted">
                  0{index + 1}
                </span>
              </a>
            ))}
          </div>

          <div className="mt-auto pb-10">
            <p className="text-sm text-muted">
              Frontend / Full-Stack Developer
            </p>
            <p className="mt-1 text-sm text-muted">
              Augsburg, Germany
            </p>
          </div>
        </div>
      </nav>
    </header>
  );
}