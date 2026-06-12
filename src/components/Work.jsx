import { ArrowUpRight, Code2, Check } from 'lucide-react'
import Reveal from './Reveal'
import { projects } from '../data/site'

function BrowserFrame({ shot, live, name }) {
  return (
    <a
      href={live}
      target="_blank"
      rel="noreferrer"
      className="group block overflow-hidden rounded-2xl bg-cream shadow-xl shadow-ink-900/10 ring-1 ring-ink-900/10 transition duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-ink-900/15"
    >
      <div className="flex items-center gap-1.5 border-b rule bg-paper px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-ink-900/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-ink-900/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-ink-900/15" />
        <span className="ml-3 truncate rounded-md bg-ink-900/5 px-2.5 py-0.5 text-[11px] font-medium text-ink-500">
          {live.replace('https://', '')}
        </span>
        <ArrowUpRight className="ml-auto h-4 w-4 text-ink-300 transition group-hover:text-flame-600" />
      </div>
      <img src={shot} alt={`${name} screenshot`} loading="lazy" className="w-full" />
    </a>
  )
}

function CaseStudy({ project, index }) {
  const flip = index % 2 === 1
  const num = String(index + 1).padStart(2, '0')

  return (
    <Reveal as="article" className="border-t rule pt-12 lg:pt-16">
      {/* Header row — reads like a magazine spread opener */}
      <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-4">
        <div className="flex items-baseline gap-5">
          <span className="font-display text-5xl font-bold italic text-flame-500 sm:text-6xl">{num}</span>
          <div>
            <h3 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">{project.name}</h3>
            <p className="mt-1 text-sm font-semibold uppercase tracking-widest text-ink-500">
              {project.tag} <span className="text-ink-300">/</span> for {project.forBusiness}
            </p>
          </div>
        </div>
        <div className="flex gap-3">
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-ink-900 px-5 py-2.5 text-sm font-bold text-cream transition hover:bg-flame-600"
          >
            Live site <ArrowUpRight className="h-4 w-4" />
          </a>
          <a
            href={project.repo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-ink-900/20 px-5 py-2.5 text-sm font-semibold transition hover:border-ink-900"
          >
            <Code2 className="h-4 w-4" /> Code
          </a>
        </div>
      </div>

      {/* The problem — oversized pull quote, impossible to skim past */}
      <blockquote className="mt-10 max-w-4xl border-l-2 border-flame-500 pl-6">
        <p className="font-display text-xl font-medium italic leading-relaxed text-ink-700 sm:text-2xl">
          “{project.problem}”
        </p>
        <cite className="mt-3 block text-xs font-bold not-italic uppercase tracking-widest text-flame-700">
          The problem
        </cite>
      </blockquote>

      <div className={`mt-10 grid items-start gap-10 lg:grid-cols-2 lg:gap-14 ${flip ? '' : ''}`}>
        <div className={flip ? 'lg:order-2' : ''}>
          <BrowserFrame shot={project.shot} live={project.live} name={project.name} />
          <div className="mt-4 flex flex-wrap gap-2">
            {project.stack.map((t) => (
              <span
                key={t}
                className="rounded-full border border-ink-900/15 px-3 py-1 text-xs font-semibold text-ink-500"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className={flip ? 'lg:order-1' : ''}>
          <h4 className="text-xs font-bold uppercase tracking-widest text-ink-500">What I did</h4>
          <ul className="mt-4 divide-y divide-ink-900/10">
            {project.decisions.map((d) => (
              <li key={d} className="flex gap-3 py-3.5 text-[15px] leading-relaxed text-ink-700">
                <Check className="mt-1 h-4 w-4 shrink-0 text-flame-600" />
                {d}
              </li>
            ))}
          </ul>

          <h4 className="mt-8 text-xs font-bold uppercase tracking-widest text-ink-500">
            Built to drive <span className="font-medium normal-case text-ink-300">· projected</span>
          </h4>
          <div className="mt-3 space-y-2.5">
            {project.impact.map((i) => (
              <p
                key={i}
                className="rounded-xl bg-cream px-4 py-3 text-sm font-medium text-ink-700 ring-1 ring-ink-900/5"
              >
                <span className="mr-2 font-display italic text-flame-600">→</span>
                {i}
              </p>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  )
}

export default function Work() {
  return (
    <section id="work" className="scroll-mt-16 py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <Reveal>
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-flame-600">Case studies</p>
          <h2 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Three products. One thread:{' '}
            <em className="font-bold italic text-flame-600">design that moves a business metric.</em>
          </h2>
          <p className="mt-5 max-w-2xl text-lg text-ink-500">
            Each study below follows the same arc — the business problem, the design decisions I made,
            and the outcome the build is engineered to drive.
          </p>
        </Reveal>

        <div className="mt-16 space-y-20 lg:space-y-24">
          {projects.map((p, i) => (
            <CaseStudy key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
