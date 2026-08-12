import { useEffect, useState } from "react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Journey", href: "#journey" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const [isScrolled, setIsScrolled] = useState(() => {
    if (typeof window === "undefined") return false;

    return window.scrollY > 20;
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;

    
    const main =
    document.querySelector("main");
    
    const footer =
    document.querySelector("footer");
    
    document.body.style.overflow = "hidden";

    main?.setAttribute("inert", "");
  footer?.setAttribute("inert", "");

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      main?.removeAttribute("inert");
    footer?.removeAttribute("inert");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <header
       className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
    isScrolled && !isOpen
      ? "border-b border-border/60 bg-background/90 backdrop-blur-md"
      : "bg-transparent"
  }`}
    >
      <nav
        className={`page-container flex items-center justify-between transition-[height] duration-300 ${
          isScrolled && !isOpen
            ? "h-16"
            : "h-20 lg:h-24"
        }`}
      >
        {/* LOGO */}
        <a
          href="#"
          className="relative z-50 text-2xl font-extrabold tracking-[-0.08em]"
          aria-label="Back to top"
          onClick={() => setIsOpen(false)}
        >
          CS<span className="text-accent">.</span>
        </a>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold uppercase tracking-[0.08em] transition-colors hover:text-accent"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* MOBILE HAMBURGER */}
        <button
          type="button"
          className="relative z-50 flex h-11 w-11 items-center justify-center lg:hidden"
          aria-label={
            isOpen ? "Close navigation" : "Open navigation"
          }
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span className="relative block h-5 w-7">
            <span
              className={`absolute left-0 h-0.5 w-7 bg-foreground transition-all duration-300 ${
                isOpen
                  ? "top-2 rotate-45"
                  : "top-0"
              }`}
            />

            <span
              className={`absolute top-2 left-0 h-0.5 w-7 bg-foreground transition-all duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />

            <span
              className={`absolute left-0 h-0.5 w-7 bg-foreground transition-all duration-300 ${
                isOpen
                  ? "top-2 -rotate-45"
                  : "top-4"
              }`}
            />
          </span>
        </button>

        {/* MOBILE MENU */}
        <nav
          id="mobile-navigation"
          className={`fixed inset-0 flex flex-col overflow-y-auto overscroll-contain bg-background px-6 pt-28 transition-all duration-300 lg:hidden ${
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
                <span className="text-[clamp(1.4rem,5vw,2rem)] font-semibold tracking-[-0.03em] transition-colors group-hover:text-accent">
                  {item.label}
                </span>

                <span className="text-xs font-medium tracking-widest text-muted">
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
        </nav>
      </nav>
    </header>
  );
}