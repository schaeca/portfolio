import { useEffect, useRef, useState } from "react";
import { journeyItems } from "../data/experience";

export default function Journey() {
  const timelineRef = useRef<HTMLDivElement>(null);

  const [progress, setProgress] = useState(() => {
    if (typeof window === "undefined") return 0;

    return window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? 1
      : 0;
  });

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      return;
    }

    let animationFrameId = 0;

    const updateProgress = () => {
      if (!timelineRef.current) return;

      const rect = timelineRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      /*
       * Start:
       * timeline enters the lower part of the viewport
       */
      const start = viewportHeight * 0.82;

      /*
       * End:
       * bottom of the timeline has moved through
       * most of the viewport
       */
      const end = viewportHeight * 0.7 - rect.height;

      const rawProgress =
        (start - rect.top) / (start - end);

      const clampedProgress = Math.min(
        1,
        Math.max(0, rawProgress),
      );

      setProgress(clampedProgress);
    };

    const scheduleUpdate = () => {
      cancelAnimationFrame(animationFrameId);

      animationFrameId =
        requestAnimationFrame(updateProgress);
    };

    /*
     * First calculation happens asynchronously
     * inside requestAnimationFrame.
     */
    animationFrameId =
      requestAnimationFrame(updateProgress);

    window.addEventListener("scroll", scheduleUpdate, {
      passive: true,
    });

    window.addEventListener("resize", scheduleUpdate);

    return () => {
      cancelAnimationFrame(animationFrameId);

      window.removeEventListener(
        "scroll",
        scheduleUpdate,
      );

      window.removeEventListener(
        "resize",
        scheduleUpdate,
      );
    };
  }, []);

  const displayProgress = Math.min(
  1,
  progress + 0.1,
);
  const activeIndex = Math.min(
    journeyItems.length - 1,
    Math.round(
      displayProgress * (journeyItems.length - 1),
    ),
  );

  return (
    <section
      id="journey"
      className="border-t border-border bg-surface/35 py-20 md:py-24 lg:py-24 xl:py-28 2xl:py-32"
    >
      <div className="page-container">
        {/* HEADER */}
        <div className="grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end">
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-accent">
              03 / Journey
            </p>

            <h2 className="text-[clamp(2.8rem,6vw,5.5rem)] leading-[0.9] font-extrabold tracking-[-0.055em]">
              A JOURNEY
              <span className="block">
                OF GROWTH<span className="text-accent">.</span>
              </span>
            </h2>
          </div>

          <p className="max-w-md text-base leading-7 text-muted lg:justify-self-end">
            Different roles, growing responsibility and an increasing focus on turning ideas and requirements into things people can actually use.
          </p>
        </div>

        {/* TIMELINE */}
        <div
          ref={timelineRef}
          className="mt-16 md:mt-20 lg:mt-24"
        >
          {/* DESKTOP */}
          <DesktopTimeline
            progress={progress}
            activeIndex={activeIndex}
          />

          {/* MOBILE / TABLET */}
          <MobileTimeline
            progress={progress}
            activeIndex={activeIndex}
          />
        </div>
      </div>
    </section>
  );
}

type TimelineProps = {
  progress: number;
  activeIndex: number;
};

function DesktopTimeline({
  progress,
  activeIndex,
}: TimelineProps) {
  const itemCount = journeyItems.length;

  /*
   * Because the nodes sit in the centre of their
   * grid columns, the line starts at the centre
   * of the first column and ends at the centre
   * of the last one.
   */
  const lineOffset = 100 / (itemCount * 2);
  const lineWidth = 100 - lineOffset * 2;

  return (
    <div className="relative hidden lg:block">
      {/* BACKGROUND LINE */}
      <div
        className="absolute top-1.75 h-px bg-border"
        style={{
          left: `${lineOffset}%`,
          width: `${lineWidth}%`,
        }}
        aria-hidden="true"
      >
        {/* PROGRESS LINE */}
        <div
          className="h-full origin-left bg-accent"
          style={{
            transform: `scaleX(${progress})`,
          }}
        />
      </div>

      {/* ITEMS */}
      <div
        className="grid gap-8"
        style={{
          gridTemplateColumns: `repeat(${itemCount}, minmax(0, 1fr))`,
        }}
      >
        {journeyItems.map((item, index) => {
          const threshold =
            index / (journeyItems.length - 1);

          const revealThreshold = Math.max(
  0,
  threshold - 0.12,
);

const isReached =
  progress >= revealThreshold;

          const isActive =
            index === activeIndex;

          return (
            <article
              key={item.id}
              className={`relative pt-11 transition-all duration-500 ease-out ${
                isReached
                  ? "translate-y-0 opacity-100"
                  : "translate-y-2 opacity-70"
              }`}
            >
              {/* NODE */}
              <div
                className={`absolute top-0 left-1/2 z-10 flex h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full border transition-all duration-500 ${
                  isReached
                    ? "border-accent bg-accent"
                    : "border-border bg-background"
                } ${
                  isActive
                    ? "ring-4 ring-accent/15"
                    : ""
                }`}
                aria-hidden="true"
              >
                <span
                  className={`h-1.5 w-1.5 rounded-full transition-colors duration-300 ${
                    isReached
                      ? "bg-background"
                      : "bg-border"
                  }`}
                />
              </div>

              {/* CONTENT */}
              <div className="text-center">
                {item.period && (
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                    {item.period}
                  </p>
                )}

                <p
                  className={`text-xs font-bold uppercase tracking-[0.14em] transition-colors duration-300 ${
                    isActive
                      ? "text-accent"
                      : "text-muted"
                  }`}
                >
                  {item.label}
                </p>

                <h3 className="mt-4 text-lg font-bold leading-6 tracking-[-0.03em]">
                  {item.title}
                </h3>

                <p className="mx-auto mt-3 max-w-60 text-sm leading-6 text-muted">
                  {item.description}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}

function MobileTimeline({
  progress,
  activeIndex,
}: TimelineProps) {
  return (
    <div className="relative lg:hidden">
      {/* BACKGROUND LINE */}
      <div
        className="absolute top-3 bottom-3 left-2 w-px bg-border"
        aria-hidden="true"
      >
        {/* PROGRESS LINE */}
        <div
          className="h-full origin-top bg-accent"
          style={{
            transform: `scaleY(${progress})`,
          }}
        />
      </div>

      <div className="space-y-12 pl-10">
        {journeyItems.map((item, index) => {
          const threshold =
            index / (journeyItems.length - 1);

          const isReached =
            progress + 0.03 >= threshold;

          const isActive =
            index === activeIndex;

          return (
            <article
              key={item.id}
              className={`relative transition-all duration-500 ease-out ${
                isReached
                  ? "translate-x-0 opacity-100"
                  : "translate-x-2 opacity-70"
              }`}
            >
              {/* NODE */}
              <div
                className={`absolute top-1 -left-10 z-10 flex h-4 w-4 items-center justify-center rounded-full border transition-all duration-500 ${
                  isReached
                    ? "border-accent bg-accent"
                    : "border-border bg-background"
                } ${
                  isActive
                    ? "ring-4 ring-accent/15"
                    : ""
                }`}
                aria-hidden="true"
              >
                <span
                  className={`h-1.5 w-1.5 rounded-full ${
                    isReached
                      ? "bg-background"
                      : "bg-border"
                  }`}
                />
              </div>

              {item.period && (
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                  {item.period}
                </p>
              )}

              <p
                className={`text-xs font-bold uppercase tracking-[0.14em] transition-colors duration-300 ${
                  isActive
                    ? "text-accent"
                    : "text-muted"
                }`}
              >
                {item.label}
              </p>

              <h3 className="mt-3 text-xl font-bold tracking-[-0.03em]">
                {item.title}
              </h3>

              <p className="mt-3 max-w-lg text-sm leading-6 text-muted">
                {item.description}
              </p>
            </article>
          );
        })}
      </div>
    </div>
  );
}