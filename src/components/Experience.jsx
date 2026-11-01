import Section from './Section'
import { education, experience } from '../data/content'

export default function Experience() {
  const e = experience
  return (
    <Section id="experience" title="Experience">
      <p className="mb-8 text-lg font-semibold">
        {e.company} <span className="font-normal text-muted">· {e.location}</span>
      </p>

      <ol className="relative ml-1.5 border-l border-line">
        {e.roles.map((r) => (
          <li key={r.title} className="relative pb-10 pl-8 last:pb-0">
            <span className="absolute -left-[5.5px] top-2 h-2.5 w-2.5 rounded-full border-2 border-accent bg-bg" />
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="font-semibold">{r.title}</h3>
              <p className="text-sm text-muted">{r.period}</p>
            </div>
            <p className="mt-1 text-sm italic text-muted">{r.note}</p>
            <ul className="mt-4 max-w-2xl space-y-2.5">
              {r.bullets.map((b, i) => (
                <li key={i} className="flex gap-3 leading-relaxed">
                  <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {b}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>

      <h3 className="mb-6 mt-16 text-sm font-medium uppercase tracking-widest text-accent">
        Education
      </h3>
      <div className="space-y-6">
        {education.map((ed) => (
          <div
            key={ed.degree}
            className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between"
          >
            <div>
              <h4 className="font-semibold">{ed.degree}</h4>
              <p className="text-sm text-muted">{ed.school}</p>
            </div>
            <p className="text-sm text-muted">{ed.period}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}