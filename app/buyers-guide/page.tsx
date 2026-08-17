import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { SubNav, SectionHeading, ContactCta } from '@/components/section'
import { buySellNav } from '@/lib/site-data'

export const metadata: Metadata = {
  title: "Buyer's Guide",
  description:
    'A step-by-step guide to buying a home with Halcyon Real Estate, from getting pre-approved to closing day.',
}

const steps = [
  {
    title: 'Get Pre-Approved',
    body: 'Before you start touring homes, meet with a lender to determine your budget. A pre-approval letter shows sellers you are a serious, qualified buyer and gives you a clear picture of what you can afford.',
  },
  {
    title: 'Define Your Needs',
    body: 'Make a list of your must-haves and nice-to-haves — location, number of bedrooms, schools, commute, and lifestyle. We use this to focus your search on the right homes.',
  },
  {
    title: 'Tour Homes',
    body: 'We schedule showings that fit your calendar and walk each property with you, pointing out both the highlights and the potential concerns you may not notice on your own.',
  },
  {
    title: 'Make an Offer',
    body: 'When you find the one, we prepare a competitive offer backed by local market data and negotiate on your behalf to protect your interests and your budget.',
  },
  {
    title: 'Inspections & Escrow',
    body: 'Once your offer is accepted, we guide you through inspections, appraisals, and contingencies, coordinating every deadline so nothing slips through the cracks.',
  },
  {
    title: 'Close & Get Your Keys',
    body: 'We review your closing documents with you, confirm the final numbers, and celebrate as you take ownership of your new home.',
  },
]

export default function BuyersGuidePage() {
  return (
    <>
      <PageHero
        eyebrow="For Buyers"
        title="Buyer's Guide"
        subtitle="Six clear steps from pre-approval to the day you get your keys."
        image="/images/hero-interior.png"
      />
      <SubNav links={buySellNav} active="/buyers-guide" />

      <section className="bg-background">
        <div className="container-page py-16 sm:py-20">
          <SectionHeading eyebrow="The Process" title="How Home Buying Works" center />
          <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map((step, i) => (
              <li key={step.title} className="flex flex-col border border-border bg-card p-7">
                <span className="font-serif text-4xl text-silver">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mt-4 text-xl text-foreground">{step.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <ContactCta
        title="Have Questions About Buying?"
        body="We are happy to walk you through any step of the process. Reach out and let’s find your next home together."
      />
    </>
  )
}
