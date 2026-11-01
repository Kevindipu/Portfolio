import { ArrowUpRight, ExternalLink, Github } from 'lucide-react'
import Section from './Section'
import { projects } from '../data/content'

const Row = ({ label, children }) => (
  <div className="grid gap-1 sm:grid-cols-[8rem_1fr] sm:gap-4">
    <dt className="text-sm font-semibold">{label}</dt>
    <dd className="leading-relaxed text-muted">{children}</dd>
  </div>
)

const linkCls =
  'group inline-flex items-center gap-1.5 font-medium transition-colors hover:text-accent'
const arrow =
  'transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5'

export default function Projects() {
  return (
    <Section
      id="projects"
      title="Projects"
      subtitle="Engineering experiments, with the lessons attached."
    >
      <div className="divide-y divide-line border-y border-line">
        {projects.map((p) => (
          <article key={p.title} className="py-8">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
              <h3 className="text-xl font-semibold">{p.title}</h3>
              {p.status && (
                <span className="rounded-full border border-accent px-2 py-0.5 text-xs text-accent">
                  {p.status}
                </span>
              )}
            </div>
            <p className="mt-1 italic text-muted">{p.tagline}</p>

            <dl className="mt-5 max-w-2xl space-y-3">
              <Row label="The problem">{p.problem}</Row>
              <Row label="What I built">{p.built}</Row>
              <Row label="What I learned">{p.learned}</Row>
            </dl>

            <ul className="mt-5 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <li key={t} className="rounded-full border border-line px-2.5 py-0.5 text-xs text-muted">
                  {t}
                </li>
              ))}
            </ul>

            {(p.github || p.live) && (
              <div className="mt-5 flex flex-wrap gap-5 text-sm">
                {p.github && (
                  <a href={p.github} target="_blank" rel="noopener noreferrer" className={linkCls}>
                    <Github size={16} /> GitHub <ArrowUpRight size={14} className={arrow} />
                  </a>
                )}
                {p.live && (
                  <a href={p.live} target="_blank" rel="noopener noreferrer" className={linkCls}>
                    <ExternalLink size={16} /> Live demo <ArrowUpRight size={14} className={arrow} />
                  </a>
                )}
              </div>
            )}
          </article>
        ))}
      </div>
    </Section>
  )
}