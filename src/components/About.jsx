import Reveal from './Reveal'
import { profile, skills } from '../data/site'

export default function About() {
  return (
    <section id="about" className="scroll-mt-16 py-20 lg:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-[1.4fr_1fr] lg:px-8">
        <Reveal>
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-flame-600">About</p>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            A developer who thinks like{' '}
            <em className="font-bold italic text-flame-600">the business owner.</em>
          </h2>
          <div className="mt-7 space-y-5 text-lg leading-relaxed text-ink-700">
            <p>
              I’m {profile.name}, a React developer based in {profile.location}. I build websites and
              web apps for growing businesses — work that earns its keep, not just looks good in a
              showreel.
            </p>
            <p>
              My focus is the gap most builds miss: the link between what looks good and what actually
              makes money. I sweat the details that move metrics — load speed, trust signals, a clear
              path to the one action that matters — and I build it all from scratch in React, no
              page-builder shortcuts.
            </p>
            <p>
              Storefront, landing page, or the dashboard running it all behind the scenes — I can take
              a business idea and turn it into something live, fast, and worth clicking.
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="rounded-2xl bg-cream p-7 ring-1 ring-ink-900/10">
            <h3 className="font-display text-xl font-bold">Toolkit</h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {skills.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-ink-900/15 bg-paper px-3.5 py-1.5 text-sm font-medium text-ink-700"
                >
                  {s}
                </span>
              ))}
            </div>
            <p className="mt-6 border-t rule pt-5 text-sm leading-relaxed text-ink-500">
              {profile.forAgencies}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
