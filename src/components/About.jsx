import Section from './Section'
import { about, glance } from '../data/content'

export default function About() {
  return (
    <Section id="about" title="About">
      <dl className="mb-10 grid max-w-2xl gap-3 border-y border-line py-5 sm:grid-cols-[7rem_1fr]">
        {glance.map((g) => (
          <div key={g.label} className="contents">
            <dt className="text-sm font-semibold">{g.label}</dt>
            <dd className="text-sm text-muted">{g.value}</dd>
          </div>
        ))}
      </dl>

      <div className="max-w-2xl space-y-4 leading-relaxed">
        {about.map((p, i) => (
          <p key={i} className={i === 0 ? '' : 'text-muted'}>
            {p}
          </p>
        ))}
      </div>
    </Section>
  )
}