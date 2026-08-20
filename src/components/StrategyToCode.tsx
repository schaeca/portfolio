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

      /*
       * Absolute position of the component inside the document.
       * Unlike rect.top alone, this does not change depending on
       * the current scroll position.
       */
      const elementTop = rect.top + window.scrollY;

      /*
       * Normally the animation begins shortly before the component
       * enters the lower part of the viewport.
       *
       * On very tall screens that value could become negative.
       * Math.max(0, ...) guarantees that the animation NEVER starts
       * before the top of the page.
       */
      const startScroll = Math.max(
        0,
        elementTop - viewportHeight * 0.85,
      );

      /*
       * Give the animation a predictable scroll distance instead of
       * calculating its end solely from viewport coordinates.
       *
       * Short viewport: minimum 240px
       * Large viewport: maximum 420px
       */
      const travelDistance = Math.min(
        420,
        Math.max(240, viewportHeight * 0.35),
      );

      const rawProgress =
        (window.scrollY - startScroll) / travelDistance;

      const clampedProgress = Math.min(
        1,
        Math.max(0, rawProgress),
      );

      setProgress(clampedProgress);
    };

    const requestUpdate = () => {
      cancelAnimationFrame(animationFrameId);

      animationFrameId = requestAnimationFrame(
        updateProgress,
      );
    };

    requestUpdate();

    window.addEventListener("scroll", requestUpdate, {
      passive: true,
    });

    window.addEventListener("resize", requestUpdate);

    return () => {
      cancelAnimationFrame(animationFrameId);

      window.removeEventListener(
        "scroll",
        requestUpdate,
      );

      window.removeEventListener(
        "resize",
        requestUpdate,
      );
    };
  }, []);

  const getLabelClasses = (index: number) => {
    const isActive = activeIndex === index;

    return `
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
          {/* PROGRESS LINE */}
          <div
            className="absolute inset-y-0 left-0 bg-accent"
            style={{
              width: `${progress * 100}%`,
            }}
          />

          {/* MOVING POINT */}
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

        {/* EMPTY FIRST GRID COLUMN */}
        <div />

        {/* DESKTOP LABELS */}
        <div className="mt-5 hidden grid-cols-[1fr_auto_1fr] items-center gap-x-[clamp(2rem,4vw,5rem)] text-xs md:grid lg:text-sm">
          {/* LEFT */}
          <div className="flex justify-end gap-x-[clamp(2rem,4vw,5rem)]">
            <span
              className={`${getLabelClasses(0)} whitespace-nowrap`}
            >
              Consulting
            </span>

            <span
              className={`${getLabelClasses(1)} whitespace-nowrap`}
            >
              User Perspective
            </span>
          </div>

          {/* CENTER */}
          <span
            className={`${getLabelClasses(2)} whitespace-nowrap`}
          >
            Problem Solving
          </span>

          {/* RIGHT */}
          <div className="flex justify-start gap-x-[clamp(2rem,4vw,5rem)]">
            <span
              className={`${getLabelClasses(3)} whitespace-nowrap`}
            >
              Development
            </span>

            <span
              className={`${getLabelClasses(4)} whitespace-nowrap`}
            >
              Products
            </span>
          </div>
        </div>

        {/* EMPTY LAST GRID COLUMN */}
        <div />
      </div>

      {/* MOBILE LABELS */}
      <div className="mt-5 grid grid-cols-5 gap-1 text-center text-[0.625rem] leading-[1.15] min-[480px]:text-xs md:hidden">
        {journeyItems.map((item, index) => (
          <span
            key={item}
            className={`${getLabelClasses(index)} flex min-h-8 items-start justify-center`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}