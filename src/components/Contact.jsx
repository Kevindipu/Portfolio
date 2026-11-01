import { Github, Linkedin, Mail } from 'lucide-react'
import Section from './Section'
import { profile } from '../data/content'

const link =
  'inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent'

export default function Contact() {
  return (
    <Section id="contact">
      <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Let's connect.</h2>
      <p className="mt-4 max-w-xl leading-relaxed text-muted">
        I'm always interested in connecting with engineers, recruiters, and people working on
        interesting technology.
      </p>

      <a
        href={`mailto:${profile.email}`}
        className="mt-8 inline-flex items-center gap-2 rounded-md bg-fg px-4 py-2.5 text-sm font-medium text-bg transition-opacity hover:opacity-85"
      >
        <Mail size={16} /> Say hello
      </a>

      <div className="mt-8 flex flex-wrap gap-6">
        <a href={`mailto:${profile.email}`} className={link}>
          <Mail size={16} /> {profile.email}
        </a>
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className={link}>
          <Linkedin size={16} /> LinkedIn
        </a>
        <a href={profile.github} target="_blank" rel="noopener noreferrer" className={link}>
          <Github size={16} /> GitHub
        </a>
      </div>
    </Section>
  )
}