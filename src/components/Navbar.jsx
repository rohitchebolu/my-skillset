import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { profile } from '../data/site'

const links = [
  { href: '#work', label: 'Work' },
  { href: '#approach', label: 'Approach' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b rule bg-paper/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 lg:px-8">
        <a href="#top" className="font-display text-xl font-bold italic tracking-tight">
          {profile.name.split(' ')[0]}
          <span className="text-flame-500">.</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-semibold text-ink-500 transition hover:text-ink-900"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-ink-900 px-5 py-2 text-sm font-bold text-cream transition hover:bg-flame-600"
          >
            Let’s talk
          </a>
        </nav>

        <button onClick={() => setOpen((o) => !o)} className="md:hidden" aria-label="Toggle menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav className="border-t rule px-5 py-3 md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-2.5 text-sm font-semibold text-ink-700"
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
