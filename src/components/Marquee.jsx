const items = [
  'Landing pages that sell',
  'Storefronts that convert',
  'Dashboards that decide',
  'React, end to end',
  'Design with intent',
  'Built from scratch',
]

// Editorial ticker between hero and the case studies.
export default function Marquee() {
  return (
    <div className="overflow-hidden border-y rule bg-ink-900 py-3.5 text-paper">
      <div className="flex w-max animate-marquee gap-12 whitespace-nowrap pr-12">
        {[...items, ...items].map((t, i) => (
          <span key={i} className="flex items-center gap-12 font-display text-lg italic">
            {t}
            <span className="not-italic text-flame-500">✺</span>
          </span>
        ))}
      </div>
    </div>
  )
}
