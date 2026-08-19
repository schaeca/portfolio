import { useEffect, useState } from "react";

type CVLinkProps = {
  className?: string;
};

export default function CVLink({className = "",}: CVLinkProps) {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    if (!showMessage) return;

    const timeout = window.setTimeout(() => {
      setShowMessage(false);
    }, 3000);

    return () => window.clearTimeout(timeout);
  }, [showMessage]);

  return (
    <>
      <a
        href="/carina-schaedlich-cv.pdf"
        download="Carina-Schaedlich-CV.pdf"
        onClick={() => setShowMessage(true)}
        className={`group inline-flex items-center gap-2 font-bold uppercase tracking-widest transition-colors hover:text-accent ${className}`}
      >
        CV

        <span
          aria-hidden="true"
          className="transition-transform duration-300 group-hover:translate-y-1"
        >
          ↓
        </span>
      </a>

      {showMessage && (
        <div
  role="status"
  aria-live="polite"
  className="fixed right-5 bottom-5 z-100 flex items-center gap-3 border border-border bg-foreground px-5 py-4 text-sm font-semibold text-background shadow-lg"
>
  <span className="text-accent">✓</span>
  CV download started.
</div>
      )}
    </>
  );
}