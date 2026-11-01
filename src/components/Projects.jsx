import { ArrowUpRight, Github } from 'lucide-react'
import Section from './Section'
import { projects } from '../data/content'

export default function Projects() {
  return (
    <Section id="projects" title="Featured Projects">
      <div className="divide-y divide-line border-y border-line">
        {projects.map((p) => (
          <article key={p.title} className="py-8">
            <h3 className="text-xl font-semibold">{p.title}</h3>
            <p className="mt-3 max-w-2xl leading-relaxed text-muted">{p.description}</p>

            {p.highlight && (
              <p className="mt-3 max-w-2xl text-sm">
                <span className="font-medium text-accent">Focus: </span>
                {p.highlight}
              </p>
            )}

            <ul className="mt-4 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <li key={t} className="rounded-full border border-line px-2.5 py-0.5 text-xs text-muted">
                  {t}
                </li>
              ))}
            </ul>

            <div className="mt-5 flex flex-wrap gap-5 text-sm">
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 font-medium transition-colors hover:text-accent"
              >
                <Github size={16} /> GitHub
                <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              {p.details && (
                <a
                  href={p.details}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1 text-muted transition-colors hover:text-accent"
                >
                  Details
                  <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}