import { Download, Github, Linkedin, Mail } from 'lucide-react'
import Section from './Section'
import { contact, profile } from '../data/content'

const link =
  'inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent'

export default function Contact() {
  return (
    <Section id="contact">
      <h2 className="max-w-2xl text-2xl font-semibold tracking-tight sm:text-3xl">
        {contact.heading}
      </h2>
      <p className="mt-4 max-w-xl leading-relaxed text-muted">{contact.subheading}</p>

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
        <a href={`${import.meta.env.BASE_URL}${profile.cv}`} download className={link}>
          <Download size={16} /> Resume
        </a>
      </div>
    </Section>
  )
}