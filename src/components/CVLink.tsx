type CVLinkProps = {
    className?: string
}

export default function CVLink({className=""}: CVLinkProps) {
  return (
    <a href="/carina-schaedlich-cv.pdf" download="Carina-Schaedlich-CV.pdf" className={`group inline-flex items-center gap-2 font-bold uppercase tracking-widest transition-colors hover:text-accent ${className}`}>
      CV
      <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-y-1">↓</span>
    </a>
  )
}
