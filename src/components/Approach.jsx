import Reveal from './Reveal'
import { approach } from '../data/site'

export default function Approach() {
  return (
    <section id="approach" className="scroll-mt-16 border-y rule bg-ink-900 py-20 text-paper lg:py-24">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <Reveal>
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-flame-500">How I work</p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            I don’t start with pixels.{' '}
            <em className="font-bold italic text-flame-500">I start with the business goal.</em>
          </h2>
          <p className="mt-5 max-w-xl text-paper/60">
            Good design isn’t decoration — it’s the shortest line between a visitor and the action
            that grows the business. Here’s how I get there.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {approach.map((a, i) => (
            <Reveal key={a.step} delay={i * 90}>
              <div className="border-t border-paper/20 pt-6">
                <span className="font-display text-4xl font-bold italic text-flame-500">{a.step}</span>
                <h3 className="mt-4 font-display text-xl font-bold">{a.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-paper/60">{a.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
