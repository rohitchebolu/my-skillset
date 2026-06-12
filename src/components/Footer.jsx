import { profile } from '../data/site'

export default function Footer() {
  return (
    <footer className="border-t rule py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-5 text-sm text-ink-500 sm:flex-row lg:px-8">
        <p>© 2026 {profile.name}. Designed & built from scratch in React.</p>
        <p className="font-display italic">Made in Visakhapatnam 🌊</p>
      </div>
    </footer>
  )
}
