import Section from './Section'
import { about } from '../data/content'

export default function About() {
  return (
    <Section id="about" title="About">
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