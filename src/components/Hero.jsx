import { ChevronDown, Download, Github, Linkedin, Mail, MapPin } from 'lucide-react'
import { hero, profile } from '../data/content'

const iconLink = 'rounded-md p-2 text-muted transition-colors hover:text-accent'
const primary =
  'inline-flex items-center gap-2 rounded-md bg-fg px-4 py-2.5 text-sm font-medium text-bg transition-opacity hover:opacity-85'
const secondary =
  'inline-flex items-center gap-2 rounded-md border border-line px-4 py-2.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent'

export default function Hero() {
  return (
    <section id="home" className="relative px-6 pb-24 pt-32 sm:pt-40">
      <div className="mx-auto flex max-w-4xl flex-col gap-8 sm:flex-row sm:items-start sm:justify-between sm:gap-12">
        <div className="order-2 min-w-0 flex-1 sm:order-1">
          <p className="mb-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted">
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={14} /> {profile.location}
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-accent" />
              {profile.availability}
            </span>
          </p>

          <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">{hero.greeting}</h1>
          <p className="mt-3 max-w-2xl text-xl font-medium tracking-tight sm:text-2xl">
            {hero.tagline}
          </p>
          <p className="mt-5 max-w-2xl font-medium text-accent">{hero.subtitle}</p>
          <p className="mt-4 max-w-2xl leading-relaxed text-muted">{hero.playful}</p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className={primary}>
              Explore My Work
            </a>
            <a
              href={`${import.meta.env.BASE_URL}${profile.cv}`}
              download
              className={secondary}
            >
              <Download size={16} /> Download Resume
            </a>
            <a href="#contact" className={secondary}>
              Let's Connect
            </a>
          </div>

          <div className="mt-6 flex items-center">
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

        {profile.photo && (
          <img
            src={`${import.meta.env.BASE_URL}${profile.photo}`}
            alt={`Portrait of ${profile.name}`}
            width={176}
            height={176}
            className="relative h-32 w-32 rounded-2xl object-cover object-top sm:h-44 sm:w-44"
          />
        )}
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