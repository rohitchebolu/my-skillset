import { ArrowRight, ArrowDown, MapPin } from 'lucide-react'
import { profile, stats } from '../data/site'
import avatar from '../assets/avatar.jpg'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-16 lg:px-8 lg:pt-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.5fr_1fr]">
          {/* Left: pitch */}
          <div>
            {profile.available && (
              <span className="inline-flex items-center gap-2 rounded-full border border-flame-500/40 bg-flame-100/60 px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest text-flame-700">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-flame-500 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-flame-500" />
                </span>
                Available for work
              </span>
            )}

            <h1 className="mt-7 font-display text-5xl font-semibold leading-[1.04] tracking-tight sm:text-6xl lg:text-7xl">
              I turn business goals into interfaces that{' '}
              <em className="font-bold italic text-flame-600">convert.</em>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink-500">{profile.subhead}</p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#work"
                className="group inline-flex items-center gap-2 rounded-full bg-ink-900 px-7 py-3.5 text-base font-bold text-cream transition hover:bg-flame-600"
              >
                Read the case studies
                <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="rounded-full border border-ink-900/20 px-6 py-3.5 text-base font-semibold text-ink-900 transition hover:border-ink-900"
              >
                Get in touch
              </a>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-ink-500">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-4 w-4 text-flame-600" />
                {profile.location}
              </span>
              <span className="hidden sm:inline text-ink-300">·</span>
              <span>{profile.forAgencies}</span>
            </div>
          </div>

          {/* Right: portrait */}
          <div className="order-first lg:order-last">
            <div className="relative mx-auto w-56 sm:w-72 lg:w-full lg:max-w-sm">
              <div className="absolute -inset-2 rotate-3 rounded-[2rem] border border-flame-500/50" />
              <div className="relative -rotate-1 overflow-hidden rounded-[2rem] bg-cream shadow-xl shadow-ink-900/10 ring-1 ring-ink-900/10 transition duration-500 hover:rotate-0">
                <img
                  src={avatar}
                  alt={profile.name}
                  className="aspect-[4/5] w-full object-cover object-top"
                  fetchPriority="high"
                />
              </div>
              <figcaption className="mt-4 text-center font-display text-base italic text-ink-500">
                {profile.name} — {profile.role}
              </figcaption>
            </div>
          </div>
        </div>

        {/* Stat strip — editorial rules, not cards */}
        <div className="mt-16 grid grid-cols-1 divide-y divide-ink-900/10 border-y rule sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {stats.map((s) => (
            <div key={s.label} className="px-1 py-6 sm:px-6 sm:first:pl-0">
              <p className="font-display text-4xl font-bold text-ink-900">
                {s.value}
                <span className="text-flame-500">.</span>
              </p>
              <p className="mt-1.5 text-sm text-ink-500">{s.label}</p>
            </div>
          ))}
        </div>

        <a
          href="#work"
          className="mt-12 inline-flex items-center gap-2 text-sm font-medium text-ink-500 transition hover:text-ink-900"
        >
          <ArrowDown className="h-4 w-4 animate-bounce text-flame-600" />
          Scroll to case studies
        </a>
      </div>
    </section>
  )
}
