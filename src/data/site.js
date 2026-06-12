// Single source of truth for site copy. Contact fields are placeholders —
// swap in real values before sharing the live link.
export const profile = {
  name: 'Rohit Chebolu',
  role: 'React Developer',
  location: 'Visakhapatnam, India',
  // Headline frames the whole pitch: business outcomes, not just code.
  headline: 'I turn business goals into interfaces that convert.',
  subhead:
    'React developer in Visakhapatnam. I design and build conversion-focused web experiences — and the back-office systems behind them — for agencies and their clients.',
  forAgencies:
    'Open to agency partnerships — white-label builds, overflow work, or end-to-end delivery for your clients.',
  available: true,
  contact: {
    email: 'chebolurohit@gmail.com', // TODO: replace
    phone: '+91 70750 95747', // TODO: replace
    github: 'https://github.com/rohitchebolu',
    linkedin: 'https://linkedin.com/in/your-handle', // TODO: replace
  },
}

export const stats = [
  { value: '3', label: 'Products shipped, live on Vercel' },
  { value: '100%', label: 'Designed & built end-to-end' },
  { value: '0', label: 'Templates — every UI from scratch' },
]

// The positioning engine — how design maps to business outcomes.
export const approach = [
  {
    step: '01',
    title: 'Find the money action',
    text: 'Every site has one action that drives revenue — an enquiry, an add-to-cart, a faster decision. I start by naming it.',
  },
  {
    step: '02',
    title: 'Design for that one action',
    text: 'Then I remove every bit of friction and doubt around it — trust cues, real imagery, clear CTAs, fast load, zero clutter.',
  },
  {
    step: '03',
    title: 'Build it clean & fast',
    text: 'Hand-built React, responsive to the pixel, accessible, and quick on mobile data — because slow pages quietly lose customers.',
  },
  {
    step: '04',
    title: 'Make it measurable',
    text: 'Clear funnels and analytics-ready structure, so the business can see what’s working and double down on it.',
  },
]

export const skills = [
  'React',
  'JavaScript (ES2023)',
  'Tailwind CSS',
  'Vite',
  'Responsive UI',
  'UX & conversion design',
  'Data visualisation (SVG)',
  'Component architecture',
  'State management',
  'Vercel / CI deploy',
  'Git & GitHub',
  'Performance',
]

// Case studies — design-intent framing. `impact` items are projected, not measured.
export const projects = [
  {
    id: 'skyline',
    name: 'Skyline Heights',
    tag: 'Real-estate landing page',
    shot: '/shots/skyline.png',
    live: 'https://skyline-heights-seven.vercel.app',
    repo: 'https://github.com/rohitchebolu/realestate-website',
    oneLiner: 'A premium property launch page built to turn scrollers into site-visit enquiries.',
    forBusiness: 'Property developers',
    problem:
      'Real-estate buyers commit on trust and emotion. A launch page with stock-placeholder images and a flat, static gallery reads as generic — visitors don’t feel the project, don’t linger, and don’t enquire.',
    decisions: [
      'Replaced placeholder art with real Visakhapatnam imagery so the location feels tangible and local.',
      'Turned the static gallery into an autoplay carousel with lightbox and thumbnails to hold attention longer.',
      'Layered in trust + decision tools: EMI calculator, location map, RERA badge, FAQ, and an always-visible enquiry CTA.',
    ],
    impact: [
      'Designed to lift time-on-page and emotional buy-in',
      'Built to drive more site-visit form starts',
      'Mobile-first, so it converts on the device buyers actually browse on',
    ],
    stack: ['React', 'Vite', 'Tailwind', 'Leaflet maps'],
  },
  {
    id: 'kicks',
    name: 'SOLE//HAUS',
    tag: 'E-commerce storefront',
    shot: '/shots/kicks.png',
    live: 'https://kicks-store-rust.vercel.app',
    repo: 'https://github.com/rohitchebolu/soul-haul-store',
    oneLiner: 'A sneaker storefront engineered to shorten the path from landing to checkout.',
    forBusiness: 'Retail & D2C brands',
    problem:
      'In online retail, every extra tap between “I want this” and “it’s in my cart” leaks sales. Shoppers also abandon when they can’t quickly find a product or trust it’s authentic.',
    decisions: [
      'Built live search + category/brand filters so any product is two taps away.',
      'Added a quick-view with size selection and a persistent cart drawer — add to bag without ever leaving the grid.',
      'Nudged larger baskets with a free-shipping progress meter, and reinforced trust with authenticity and returns cues.',
    ],
    impact: [
      'Built to raise add-to-cart rate via faster discovery',
      'Free-ship meter designed to lift average order value',
      'Cart persists across visits — fewer abandoned baskets',
    ],
    stack: ['React', 'Context + localStorage', 'Tailwind', 'Vite'],
  },
  {
    id: 'admin',
    name: 'SOLE//HAUS Admin',
    tag: 'CRM / ERP dashboard',
    shot: '/shots/admin.png',
    live: 'https://solehaus-admin.vercel.app',
    repo: 'https://github.com/rohitchebolu/sole-haul-admin',
    oneLiner: 'The back-office that lets the store owner see what’s selling and act on it — fast.',
    forBusiness: 'Operations teams',
    problem:
      'A storefront only makes money if the team behind it can run it. Spreadsheets don’t scale: owners can’t see trends, spot stockouts, or track orders without slow, manual digging.',
    decisions: [
      'Surfaced the numbers that matter as KPI cards with trend sparklines and month-over-month deltas.',
      'Built custom data visualisations (revenue, orders, category mix, traffic) from scratch — no chart library bloat.',
      'Made operations fast with sortable, searchable order/product/customer tables and at-a-glance stock alerts.',
    ],
    impact: [
      'Built to speed up day-to-day decisions',
      'Stock alerts designed to cut lost sales from stockouts',
      'Pairs with the storefront as one connected system',
    ],
    stack: ['React', 'Hand-rolled SVG charts', 'Tailwind', 'Vite'],
  },
]
