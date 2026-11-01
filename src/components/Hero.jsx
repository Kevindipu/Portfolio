import { ChevronDown, Download, Github, Linkedin, Mail, MapPin } from 'lucide-react'
import { profile } from '../data/content'

const iconLink =
  'rounded-md p-2 text-muted transition-colors hover:text-accent'

export default function Hero() {
  return (
    <section id="home" className="relative px-6 pb-24 pt-32 sm:pt-40">
      <div className="mx-auto max-w-4xl">
        <p className="mb-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted">
          <span className="inline-flex items-center gap-1.5">
            <MapPin size={14} /> {profile.location}
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-accent" />
            {profile.availability}
          </span>
        </p>

        <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">{profile.name}</h1>
        <p className="mt-4 max-w-2xl text-lg font-medium text-accent sm:text-xl">
          {profile.headline}
        </p>
        <p className="mt-6 max-w-2xl leading-relaxed text-muted">{profile.intro}</p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href={`${import.meta.env.BASE_URL}${profile.cv}`}
            download
            className="inline-flex items-center gap-2 rounded-md bg-fg px-4 py-2.5 text-sm font-medium text-bg transition-opacity hover:opacity-85"
          >
            <Download size={16} /> Download CV
          </a>
          <div className="flex items-center">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={iconLink}>
              <Github size={20} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={iconLink}>
              <Linkedin size={20} />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email" className={iconLink}>
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to About"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-muted/60 sm:block"
      >
        <ChevronDown size={22} className="animate-bounce" />
      </a>
    </section>
  )
}