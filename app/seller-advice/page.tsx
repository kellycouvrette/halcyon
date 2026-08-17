import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { SubNav, SectionHeading, ContactCta } from '@/components/section'
import { Reveal } from '@/components/reveal'
import { buySellNav } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Seller Advice',
  description:
    'Expert advice for home sellers — how to prepare, price, and market your home to sell quickly and for top dollar.',
}

const tips = [
  {
    title: 'Declutter',
    body: 'Remove excess furniture, personal items, and clutter. A spacious, neutral home helps buyers picture themselves living there.',
  },
  {
    title: 'Clean, Clean, Clean!',
    body: 'A thorough top-to-bottom cleaning makes a home more inviting and leaves a strong positive impression on buyers.',
  },
  {
    title: 'Enhance Curb Appeal',
    body: 'First impressions matter. Tidy the yard, landscaping, and entryway so buyers are excited to step inside.',
  },
  {
    title: 'Let in Natural Light',
    body: 'Open curtains and blinds and clean the windows. A bright, airy space is far more appealing to potential buyers.',
  },
  {
    title: 'Fresh Paint & Minor Repairs',
    body: 'A fresh coat of neutral paint and fixing small issues — light bulbs, leaky faucets, loose knobs — make a big difference.',
  },
  {
    title: 'Price It Right',
    body: 'We use local market data to price your home strategically, attracting strong offers without leaving money on the table.',
  },
]

export default function SellerAdvicePage() {
  return (
    <>
      <PageHero
        eyebrow="For Sellers"
        title="Seller Advice"
        subtitle="Tried-and-true tips to showcase your home and maximize your sale price."
        image="/images/hero-home.png"
      />
      <SubNav links={buySellNav} active="/seller-advice" />

      <section className="bg-background">
        <div className="container-page py-16 sm:py-20">
          <SectionHeading eyebrow="Maximizing Home Value" title="Prepare Your Home to Sell" center />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {tips.map((tip, i) => (
              <Reveal key={tip.title} delay={(i % 3) * 100} className="border-t-2 border-silver bg-card p-7 shadow-sm">
                <h3 className="text-xl text-foreground">{tip.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{tip.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ContactCta
        title="Thinking of Selling?"
        body="Let’s talk about your home, your timeline, and how we can position it to sell quickly and for top dollar."
      />
    </>
  )
}
