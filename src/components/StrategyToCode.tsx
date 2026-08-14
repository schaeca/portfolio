import { useEffect, useRef, useState } from "react";

const journeyItems = [
  "Consulting",
  "User Perspective",
  "Problem Solving",
  "Development",
  "Products",
];

export default function StrategyToCode() {
  const containerRef = useRef<HTMLDivElement>(null);

  const [progress, setProgress] = useState(() => {
    if (typeof window === "undefined") return 0;

    return window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? 0.5
      : 0;
  });

  const activeIndex = Math.min(
    journeyItems.length - 1,
    Math.round(progress * (journeyItems.length - 1)),
  );

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      return;
    }

    let animationFrameId: number;

    const updateProgress = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      const start = viewportHeight * 0.85;
      const end = viewportHeight * 0.35;

      const rawProgress = (start - rect.top) / (start - end);

      const clampedProgress = Math.min(
        1,
        Math.max(0, rawProgress),
      );

      setProgress(clampedProgress);
    };

    const handleScroll = () => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(updateProgress);
    };

    updateProgress();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", updateProgress);

    return () => {
      cancelAnimationFrame(animationFrameId);

      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  const getLabelClasses = (index: number) => {
    const isActive = activeIndex === index;

    return `
      whitespace-nowrap
      transition-all
      duration-300
      ${
        isActive
          ? "font-semibold text-accent"
          : "text-muted"
      }
    `;
  };

  return (
    <div
      ref={containerRef}
      className="mt-14 md:mt-18 lg:mt-8"
    >
      <div className="grid grid-cols-[auto_1fr_auto] items-center gap-x-4">
        {/* STRATEGY */}
        <span
          className={`text-xs font-bold uppercase tracking-[0.16em] transition-colors duration-300 md:text-sm ${
            progress < 0.15
              ? "text-accent"
              : "text-foreground"
          }`}
        >
          Strategy
        </span>

        {/* LINE */}
        <div
          className="relative h-px bg-secondary/40"
          aria-hidden="true"
        >
          {/* progress line */}
          <div
            className="absolute inset-y-0 left-0 bg-accent"
            style={{
              width: `${progress * 100}%`,
            }}
          />

          {/* moving point */}
          <div
            className="absolute top-1/2 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-accent bg-background"
            style={{
              left: `${progress * 100}%`,
            }}
          >
            <span className="h-3 w-3 rounded-full bg-accent" />
          </div>
        </div>

        {/* CODE */}
        <span
          className={`text-xs font-bold uppercase tracking-[0.16em] transition-colors duration-300 md:text-sm ${
            progress > 0.85
              ? "text-accent"
              : "text-foreground"
          }`}
        >
          Code
        </span>

        {/* empty first grid column */}
        <div />

        {/* DESKTOP LABELS */}
        <div className="mt-5 hidden grid-cols-[1fr_auto_1fr] items-center gap-x-[clamp(2rem,4vw,5rem)] text-xs md:grid lg:text-sm">
          {/* LEFT */}
          <div className="flex justify-end gap-x-[clamp(2rem,4vw,5rem)]">
            <span className={getLabelClasses(0)}>
              Consulting
            </span>

            <span className={getLabelClasses(1)}>
              People
            </span>
          </div>

          {/* CENTER */}
          <span className={getLabelClasses(2)}>
            Problem Solving
          </span>

          {/* RIGHT */}
          <div className="flex justify-start gap-x-[clamp(2rem,4vw,5rem)]">
            <span className={getLabelClasses(3)}>
              Development
            </span>

            <span className={getLabelClasses(4)}>
              Products
            </span>
          </div>
        </div>

        {/* empty last grid column */}
        <div />
      </div>

      {/* MOBILE LABELS */}
      <div className="mt-5 flex flex-wrap justify-center gap-x-2 gap-y-2 text-center text-xs md:hidden">
        {journeyItems.map((item, index) => (
          <div
            key={item}
            className="flex items-center gap-2"
          >
            <span className={getLabelClasses(index)}>
              {item}
            </span>

            {index < journeyItems.length - 1 && (
              <span
                className="text-border"
                aria-hidden="true"
              >
                ·
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}