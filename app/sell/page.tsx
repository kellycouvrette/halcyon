import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { ContactCta, SubNav, PillButton } from '@/components/section'
import { buySellNav } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Sell',
  description: 'Selling with Halcyon — clarity, insight, and a seamless selling experience tailored just for you.',
}

export default function SellPage() {
  return (
    <>
      <PageHero eyebrow="Interested in Selling?" title="Selling with Halcyon" image="/images/hero-home.png" />
      <SubNav links={buySellNav} active="/sell" />

      <section className="py-20">
        <div className="container-page max-w-3xl text-center">
          <p className="text-lg leading-relaxed text-muted-foreground">
            Whether you’re selling your first home or your fifth, the right guidance makes all the difference. I’m
            here to provide clarity, insight, and a seamless selling experience tailored just for you.
          </p>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            Explore the resources below for more information regarding Halcyon’s selling services.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <PillButton href="/seller-advice">Seller Advice</PillButton>
            <PillButton href="/sellers-resources" variant="outline">
              Seller’s Resources
            </PillButton>
          </div>
        </div>
      </section>

      <ContactCta
        title="Let’s Get Your Home Sold"
        body="Contact us today at (858) 243-5304 to schedule your seller consultation."
      />
    </>
  )
}
