import Section from './Section'
import { education, experience } from '../data/content'

export default function Experience() {
  const e = experience
  return (
    <Section id="experience" title="Experience">
      <div>
        <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
          <h3 className="text-lg font-semibold">
            {e.role} <span className="text-muted">· {e.company}</span>
          </h3>
          <p className="text-sm text-muted">{e.period}</p>
        </div>
        <p className="text-sm text-muted">{e.location}</p>
        <ul className="mt-4 max-w-2xl space-y-2.5">
          {e.bullets.map((b, i) => (
            <li key={i} className="flex gap-3 leading-relaxed text-muted">
              <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
              {b}
            </li>
          ))}
        </ul>
      </div>

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