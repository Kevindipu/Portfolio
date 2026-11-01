import { useEffect, useState } from 'react'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { nav, profile } from '../data/content'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'))

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    try {
      localStorage.setItem('theme', dark ? 'dark' : 'light')
    } catch {}
  }, [dark])

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-bg/85 backdrop-blur">
      <nav className="mx-auto flex h-14 max-w-4xl items-center justify-between px-6">
        <a href="#home" className="text-sm font-semibold">
          {profile.name}
        </a>

        <ul className="hidden items-center gap-6 md:flex">
          {nav.map((n) => (
            <li key={n.href}>
              <a href={n.href} className="text-sm text-muted transition-colors hover:text-fg">
                {n.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1">
          <button
            onClick={() => setDark((d) => !d)}
            aria-label="Toggle dark mode"
            className="rounded-md p-2 text-muted transition-colors hover:text-fg"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="rounded-md p-2 text-muted hover:text-fg md:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {open && (
        <ul className="border-t border-line bg-bg px-6 py-2 md:hidden">
          {nav.map((n) => (
            <li key={n.href}>
              <a
                href={n.href}
                onClick={() => setOpen(false)}
                className="block py-2.5 text-sm text-muted hover:text-fg"
              >
                {n.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}