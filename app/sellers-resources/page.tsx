import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { SubNav, SectionHeading, ContactCta, PillButton } from '@/components/section'
import { Reveal } from '@/components/reveal'
import { buySellNav } from '@/lib/site-data'

export const metadata: Metadata = {
  title: "Seller's Resources",
  description:
    'Resources for home sellers, including our marketing approach, home valuation, and staging guidance.',
}

const resources = [
  {
    title: 'Strategic Marketing',
    body: 'Professional photography, targeted online exposure, and a proven marketing plan put your home in front of the right buyers.',
  },
  {
    title: 'Home Valuation',
    body: 'Get an accurate, data-driven estimate of your home’s value based on current local market conditions and recent comparable sales.',
  },
  {
    title: 'Staging Guidance',
    body: 'We advise on simple, cost-effective staging that highlights your home’s strengths and helps it show at its very best.',
  },
  {
    title: 'Negotiation & Closing',
    body: 'We negotiate on your behalf and manage every deadline through escrow so your sale closes smoothly and on time.',
  },
]

export default function SellersResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="For Sellers"
        title="Seller's Resources"
        subtitle="Everything you need to sell your home with confidence."
        image="/images/hero-interior.png"
      />
      <SubNav links={buySellNav} active="/sellers-resources" />

      <section className="bg-background">
        <div className="container-page py-16 sm:py-20">
          <SectionHeading eyebrow="Selling With Halcyon" title="Resources for Sellers" center />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {resources.map((r, i) => (
              <Reveal key={r.title} delay={(i % 2) * 100} className="border border-border bg-card p-8">
                <h3 className="text-xl text-foreground">{r.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{r.body}</p>
              </Reveal>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <PillButton href="/seller-advice">See Our Seller Advice</PillButton>
          </div>
        </div>
      </section>

      <ContactCta
        title="What's Your Home Worth?"
        body="Request a complimentary, no-obligation home valuation and let’s discuss your selling goals."
      />
    </>
  )
}
