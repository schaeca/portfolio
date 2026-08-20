import { useEffect, useRef, useState } from "react";

type CVDownloadProps = {
  className?: string;
  menuAlign?: "left" | "right";
};

export default function CVDownload({
  className = "",
  menuAlign = "left",
}: CVDownloadProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [downloadMessage, setDownloadMessage] = useState<string | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  function handleDownload(language: "English" | "German") {
    setIsOpen(false);
    setDownloadMessage(`${language} CV download started.`);

    window.setTimeout(() => {
      setDownloadMessage(null);
    }, 3000);
  }

  return (
    <>
      <div
        ref={containerRef}
        className="relative"
      >
        <button
          type="button"
          aria-haspopup="menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
          className={`group inline-flex items-center gap-2 ${className}`}
        >
          <span>CV</span>

          <span
            aria-hidden="true"
            className={`transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          >
            ↓
          </span>
        </button>

        {isOpen && (
          <div
            role="menu"
            className={`absolute top-full z-50 mt-3 min-w-44 border border-border bg-background p-2 text-foreground shadow-lg ${
              menuAlign === "right" ? "right-0" : "left-0"
            }`}
          >
            <a
              href="/Carina-Schaedlich-CV-EN.pdf"
              download="Carina-Schaedlich-CV-EN.pdf"
              role="menuitem"
              onClick={() => handleDownload("English")}
              className="group flex w-full items-center justify-between gap-6 px-3 py-3 text-sm font-semibold transition-colors hover:bg-surface hover:text-accent"
            >
              English

              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-y-0.5"
              >
                ↓
              </span>
            </a>

            <a
              href="/Carina-Schaedlich-CV-DE.pdf"
              download="Carina-Schaedlich-CV-DE.pdf"
              role="menuitem"
              onClick={() => handleDownload("German")}
              className="group flex w-full items-center justify-between gap-6 border-t border-border px-3 py-3 text-sm font-semibold transition-colors hover:bg-surface hover:text-accent"
            >
              Deutsch

              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-y-0.5"
              >
                ↓
              </span>
            </a>
          </div>
        )}
      </div>

      {/* DOWNLOAD CONFIRMATION */}
      {downloadMessage && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-6 left-1/2 z-100 -translate-x-1/2 border border-border bg-foreground px-5 py-3 text-sm font-semibold text-background shadow-lg"
        >
          {downloadMessage}
        </div>
      )}
    </>
  );
}