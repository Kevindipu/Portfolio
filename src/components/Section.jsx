import useReveal from '../hooks/useReveal'

export default function Section({ id, title, subtitle, children }) {
  const ref = useReveal()
  return (
    <section id={id} className="scroll-mt-16 py-16 sm:py-20">
      <div ref={ref} className="reveal mx-auto max-w-4xl px-6">
        {title && (
          <div className="mb-8">
            <h2 className="text-sm font-medium uppercase tracking-widest text-accent">{title}</h2>
            {subtitle && <p className="mt-2 text-muted">{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}