import Section from './Section'
import { skills } from '../data/content'

export default function Skills() {
  return (
    <Section id="skills" title="Skills" subtitle={skills.heading}>
      <div className="space-y-8">
        {skills.groups.map((group) => (
          <div key={group.category} className="grid gap-3 sm:grid-cols-[14rem_1fr]">
            <h3 className="text-sm font-semibold">{group.category}</h3>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((s) => (
                <li key={s} className="rounded-md border border-line px-3 py-1 text-sm text-muted">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}