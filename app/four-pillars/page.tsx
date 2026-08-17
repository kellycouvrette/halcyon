import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { SectionHeading, ContactCta } from '@/components/section'
import { Reveal } from '@/components/reveal'

export const metadata: Metadata = {
  title: 'Four Pillars',
  description:
    'Halcyon has created a higher standard of real estate practices based on four core pillars: selling, buying, investing, and property management.',
}

const pillars = [
  {
    n: '1',
    title: 'Preparing & Selling a Home',
    body: 'From pricing strategy to marketing and negotiation, we guide sellers to the highest possible return with the least stress.',
  },
  {
    n: '2',
    title: 'Financial Preparedness, Locating & Purchasing a Home',
    body: 'We help buyers get financially ready, find the right property, and navigate the transaction with confidence.',
  },
  {
    n: '3',
    title: 'Analyzing & Locating Investment Real Estate',
    body: 'We run the numbers and pair you with specialists so your investment decisions are informed and profitable.',
  },
  {
    n: '4',
    title: 'Property Management',
    body: 'Full-service management that protects your investment, cares for your tenants, and keeps your property performing.',
  },
]

export default function FourPillarsPage() {
  return (
    <>
      <PageHero
        eyebrow="Halcyon’s Four Pillars"
        title="Why Choose Halcyon?"
        subtitle="Halcyon has created a higher standard of real estate practices built on four core pillars."
        image="/images/hero-home.png"
      />

      <section className="py-20">
        <div className="container-page">
          <SectionHeading center eyebrow="Our Foundation" title="Four Pillars of Service" />
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {pillars.map((p, i) => (
              <Reveal key={p.n} delay={i * 100} className="flex gap-6 border border-border bg-card p-8">
                <span className="font-serif text-5xl leading-none text-silver/70">{p.n}</span>
                <div>
                  <h3 className="font-serif text-xl">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mx-auto mt-14 max-w-2xl text-center leading-relaxed text-muted-foreground">
            Let Halcyon be your trusted real estate brokerage. Call us today and see how we can work together to
            buy, sell, or manage your home!
          </p>
        </div>
      </section>

      <ContactCta />
    </>
  )
}
