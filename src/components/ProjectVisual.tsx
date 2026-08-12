import { type Project } from "../data/projects";

type ProjectVisualProps = {
  type: Project["type"];
};

export default function ProjectVisual({ type }: ProjectVisualProps) {
  if (type === "product") {
    return <ProductVisual />;
  }

  if (type === "system") {
    return <SystemVisual />;
  }

  return <ExperienceVisual />;
}

function ProductVisual() {
  return (
    <div aria-hidden = "true" className="aspect-4/3 overflow-hidden border border-border bg-background transition-transform duration-500 group-hover:-translate-y-1">
      {/* browser bar */}
      <div className="flex h-8 items-center gap-1.5 border-b border-border px-3">
        <span className="h-2 w-2 rounded-full bg-border" />
        <span className="h-2 w-2 rounded-full bg-border" />
        <span className="h-2 w-2 rounded-full bg-border" />
      </div>

      {/* app */}
      <div className="flex h-[calc(100%-2rem)]">
        {/* sidebar */}
        <div className="w-[22%] border-r border-border p-3">
          <div className="h-3 w-12 bg-accent/60" />

          <div className="mt-6 space-y-3">
            <div className="h-2 w-full bg-border" />
            <div className="h-2 w-3/4 bg-border" />
            <div className="h-2 w-4/5 bg-border" />
            <div className="h-2 w-2/3 bg-border" />
          </div>
        </div>

        {/* dashboard */}
        <div className="flex-1 p-4">
          <div className="h-3 w-24 bg-foreground/70" />

          <div className="mt-5 grid grid-cols-2 gap-3">
            <div className="h-14 bg-surface" />
            <div className="h-14 bg-surface" />
          </div>

          <div className="mt-3 h-20 bg-surface" />

          <div className="mt-3 grid grid-cols-3 gap-2">
            <div className="h-8 bg-accent/15" />
            <div className="h-8 bg-secondary/15" />
            <div className="h-8 bg-surface" />
          </div>
        </div>
      </div>
    </div>
  );
}

function SystemVisual() {
  return (
    <div aria-hidden = "true" className="relative flex aspect-4/3 items-center justify-center overflow-hidden border border-border bg-background p-6 transition-transform duration-500 group-hover:-translate-y-1">
      <div className="relative flex w-full flex-col items-center">
        {/* Portfolio */}
        <ArchitectureNode label="Portfolio" />

        <div className="h-6 w-px bg-border" />

        {/* Program */}
        <ArchitectureNode label="Program" accent />

        <div className="h-6 w-px bg-border" />

        {/* horizontal connection */}
        <div className="relative w-[70%] border-t border-border">
          <div className="absolute left-0 top-0 h-5 w-px bg-border" />
          <div className="absolute left-1/2 top-0 h-5 w-px -translate-x-1/2 bg-border" />
          <div className="absolute right-0 top-0 h-5 w-px bg-border" />
        </div>

        <div className="mt-5 grid w-full grid-cols-3 gap-3">
          <ArchitectureNode label="Team" small />
          <ArchitectureNode label="Team" small />
          <ArchitectureNode label="Team" small />
        </div>
      </div>
    </div>
  );
}

type ArchitectureNodeProps = {
  label: string;
  accent?: boolean;
  small?: boolean;
};

function ArchitectureNode({
  label,
  accent = false,
  small = false,
}: ArchitectureNodeProps) {
  return (
    <div
      className={`flex items-center justify-center border px-4 text-xs font-semibold ${
        small ? "h-9" : "h-11 min-w-28"
      } ${
        accent
          ? "border-accent bg-accent/10 text-accent"
          : "border-border bg-surface"
      }`}
    >
      {label}
    </div>
  );
}

function ExperienceVisual() {
  return (
    <div aria-hidden = "true" className="aspect-4/3 overflow-hidden border border-border bg-background transition-transform duration-500 group-hover:-translate-y-1">
      {/* browser bar */}
      <div className="flex h-8 items-center gap-1.5 border-b border-border px-3">
        <span className="h-2 w-2 rounded-full bg-border" />
        <span className="h-2 w-2 rounded-full bg-border" />
        <span className="h-2 w-2 rounded-full bg-border" />
      </div>

      <div className="p-5">
        {/* tiny navigation */}
        <div className="flex items-center justify-between">
          <div className="h-3 w-16 bg-secondary/60" />

          <div className="flex gap-2">
            <div className="h-1.5 w-6 bg-border" />
            <div className="h-1.5 w-6 bg-border" />
            <div className="h-1.5 w-6 bg-border" />
          </div>
        </div>

        {/* hero */}
        <div className="mt-5 grid grid-cols-[1fr_0.8fr] gap-4">
          <div>
            <div className="h-3 w-4/5 bg-foreground/70" />
            <div className="mt-2 h-3 w-2/3 bg-foreground/70" />

            <div className="mt-4 h-1.5 w-full bg-border" />
            <div className="mt-2 h-1.5 w-4/5 bg-border" />

            <div className="mt-5 h-7 w-20 bg-secondary/30" />
          </div>

          <div className="flex items-center justify-center rounded-t-full bg-secondary/15">
            <div className="h-[60%] w-[45%] rounded-t-full bg-secondary/25" />
          </div>
        </div>

        {/* lower content */}
        <div className="mt-5 grid grid-cols-3 gap-2">
          <div className="h-10 bg-surface" />
          <div className="h-10 bg-surface" />
          <div className="h-10 bg-surface" />
        </div>
      </div>
    </div>
  );
}