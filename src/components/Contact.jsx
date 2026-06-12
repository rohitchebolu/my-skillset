import { Mail, Phone } from 'lucide-react'
import Reveal from './Reveal'
import { GithubIcon, LinkedinIcon } from './BrandIcons'
import { profile } from '../data/site'

export default function Contact() {
  const { contact } = profile
  return (
    <section id="contact" className="scroll-mt-16 border-t rule bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
        <Reveal>
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-flame-600">Contact</p>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
            Have a client who needs a{' '}
            <em className="font-bold italic text-flame-600">better front end?</em>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-ink-500">
            Landing page, online store, or an internal dashboard — tell me the goal and I’ll show you
            what it could look like. I reply within a day.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${contact.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-ink-900 px-7 py-3.5 text-base font-bold text-cream transition hover:bg-flame-600"
            >
              <Mail className="h-5 w-5" />
              {contact.email}
            </a>
            <a
              href={`tel:${contact.phone.replace(/\s/g, '')}`}
              className="inline-flex items-center gap-2 rounded-full border border-ink-900/20 px-6 py-3.5 text-base font-semibold text-ink-900 transition hover:border-ink-900"
            >
              <Phone className="h-5 w-5" />
              {contact.phone}
            </a>
          </div>

          <div className="mt-9 flex items-center justify-center gap-3">
            <a
              href={contact.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-ink-900/15 p-3 text-ink-700 transition hover:border-flame-500 hover:text-flame-600"
              aria-label="GitHub"
            >
              <GithubIcon className="h-5 w-5" />
            </a>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-ink-900/15 p-3 text-ink-700 transition hover:border-flame-500 hover:text-flame-600"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="h-5 w-5" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
