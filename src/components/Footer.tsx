export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-background/15 bg-foreground text-background">
      <div className="page-container flex flex-col gap-4 py-7 text-xs text-background/50 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {currentYear} Carina Schädlich
        </p>

        <a
          href="#"
          className="transition-colors hover:text-accent"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}