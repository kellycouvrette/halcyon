import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { SubNav, SectionHeading, ContactCta, PillButton } from '@/components/section'
import { Reveal } from '@/components/reveal'
import { buySellNav } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Buyer Resources',
  description:
    'Helpful tools and resources for home buyers, including mortgage guidance, neighborhood insights, and school information.',
}

const resources = [
  {
    title: 'Mortgage & Financing',
    body: 'Understand loan types, down payment options, and how to get the most competitive rate. We can connect you with trusted local lenders.',
  },
  {
    title: 'Neighborhood Insights',
    body: 'Get to know San Diego County communities — from Poway and Rancho Bernardo to downtown — including amenities, commute, and lifestyle.',
  },
  {
    title: 'PUSD School Information',
    body: 'With associates who have served on the PUSD School Board, we are experts on the Poway Unified School District. Ask us for detailed school sheets.',
  },
  {
    title: 'First-Time Buyer Programs',
    body: 'Explore assistance programs and grants that may help first-time buyers with down payments and closing costs.',
  },
]

export default function BuyerResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="For Buyers"
        title="Buyer Resources"
        subtitle="Tools and local expertise to help you buy with confidence."
        image="/images/hero-exterior.png"
      />
      <SubNav links={buySellNav} active="/buyer-resources" />

      <section className="bg-background">
        <div className="container-page py-16 sm:py-20">
          <SectionHeading eyebrow="Helpful Tools" title="Resources for Buyers" center />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {resources.map((r, i) => (
              <Reveal key={r.title} delay={(i % 2) * 100} className="border border-border bg-card p-8">
                <h3 className="text-xl text-foreground">{r.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{r.body}</p>
              </Reveal>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <PillButton href="/living-halcyon">Read Our Buyer Articles</PillButton>
          </div>
        </div>
      </section>

      <ContactCta
        title="Need a Recommendation?"
        body="From lenders to inspectors, we have trusted partners throughout San Diego County. Reach out and we’ll point you in the right direction."
      />
    </>
  )
}
