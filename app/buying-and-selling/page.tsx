import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { SectionHeading, ContactCta, SubNav } from '@/components/section'
import { Reveal } from '@/components/reveal'
import { buySellNav } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Buying & Selling',
  description:
    'Halcyon’s comprehensive buying and selling services cover every step — from pricing and preparation to marketing, negotiations, and closing.',
}

const services = [
  {
    title: 'Selling Your Home — The Big Picture',
    body: 'Our goal is to sell your home for the most money with the least stress.',
    points: [
      'Selling your home is one of your largest financial decisions',
      'Understand current market conditions & projections',
      'Learn my qualifications & the role of your real estate broker',
      'Explore pricing strategy & professional advice',
      'Overview of process, expectations & timeline',
    ],
  },
  {
    title: 'Pre-Market Preparation',
    body: 'Before listing, let’s get everything ready and accurate.',
    points: [
      'Confirm MLS info: title, square footage, amenities, easements',
      'House plans & loan info (if available)',
      'Showing instructions & lockbox',
      'Utility cost estimates',
      'Property disclosures & improvements',
      'Termite/lead disclosures, warranty, conveyances',
    ],
  },
  {
    title: 'Pricing Strategy',
    body: 'Accurate pricing is everything.',
    points: [
      'Review comparable active listings and past sales',
      'Analyze days on market for similar homes',
      'Pull tax roll & deed info',
      'Prepare CMA (Comparative Market Analysis)',
      'Custom listing package for your home',
    ],
  },
  {
    title: 'Marketing Plan',
    body: 'Strategic marketing designed to get results.',
    points: [
      'MLS listing and enhanced online presence',
      'Professional photography & video',
      'Curb appeal & interior décor assessment',
      'Featured on San Diego, Riverside & Orange County MLS',
      'Zillow & statewide exposure',
      'Broker caravans, YouTube, Facebook ads, newsletters',
    ],
  },
  {
    title: 'Showings & Feedback',
    body: 'Your home will shine in every showing.',
    points: [
      'Schedule and advertise open houses',
      'Distribute marketing materials',
      'Track and follow up with every showing agent',
      'Provide timely feedback from buyers and agents',
    ],
  },
  {
    title: 'Offers & Negotiation',
    body: 'When offers come in, I guide you strategically.',
    points: [
      'Excel offer comparison sheet',
      'Evaluate prequalified buyers & verify financial proof',
      'Communicate with buyer’s agent',
      'Craft counteroffers to maximize terms and price',
      'Expert negotiation and deadline tracking',
    ],
  },
  {
    title: 'Behind the Scenes',
    body: 'Managing the transaction while you focus on moving.',
    points: [
      'Open escrow & deliver disclosures',
      'Stay in communication with buyer’s side',
      'Track and meet deadlines',
      'Provide loan updates',
      'Keep you informed every step of the way',
    ],
  },
  {
    title: 'Inspections & Appraisal',
    body: 'I represent your interests during inspections and appraisals.',
    points: [
      'Schedule and attend inspections',
      'Review and explain inspection reports',
      'Navigate repair requests',
      'Be present during appraisal with comparables',
      'Ensure contingency removals',
    ],
  },
  {
    title: 'Closing & Transition',
    body: 'Sealing the deal with care and precision.',
    points: [
      'Final walkthrough coordination',
      'Verify all closing paperwork with escrow',
      'Confirm closing costs, dates, and figures',
      'Home warranty ordered',
      'Celebrate a successful and smooth closing!',
    ],
  },
]

export default function BuyingAndSellingPage() {
  return (
    <>
      <PageHero
        eyebrow="Halcyon’s Buying & Selling Services"
        title="Our Services"
        image="/images/hero-home.png"
      />
      <SubNav links={buySellNav} active="/buying-and-selling" />

      <section className="py-20">
        <div className="container-page">
          <div className="mx-auto max-w-3xl space-y-5 text-center leading-relaxed text-muted-foreground">
            <p>
              When it comes to buying or selling your home, having a clear, strategic, and personalized approach
              makes all the difference. Our comprehensive service covers every step of the journey — from pricing
              and preparation to marketing, negotiations, and closing — ensuring you feel informed, supported, and
              confident throughout the process.
            </p>
            <p>
              These nine core service areas, originally designed for sellers, also bring immense value to buyers.
              From understanding market dynamics and accurate pricing to evaluating a home’s true condition and
              navigating negotiations, we’re by your side every step of the way.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) * 100} className="flex flex-col border border-border bg-card p-7">
                <span className="font-serif text-2xl text-silver/60">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mt-2 font-serif text-lg leading-snug">{s.title}</h3>
                <p className="mt-2 text-sm italic text-muted-foreground">{s.body}</p>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {s.points.map((p) => (
                    <li key={p} className="flex gap-2">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-silver" aria-hidden="true" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ContactCta
        title="Why Choose Us?"
        body="We combine informed expertise with modern technology to deliver unmatched real estate services throughout California."
      />
    </>
  )
}
