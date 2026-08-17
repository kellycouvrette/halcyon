import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { ContactCta, SubNav, PillButton } from '@/components/section'
import { buySellNav } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Buy',
  description: 'Buying with Halcyon — clarity, insight, and a seamless buying experience tailored just for you.',
}

export default function BuyPage() {
  return (
    <>
      <PageHero eyebrow="Interested in Buying?" title="Buying with Halcyon" image="/images/hero-exterior.png" />
      <SubNav links={buySellNav} active="/buy" />

      <section className="py-20">
        <div className="container-page max-w-3xl text-center">
          <p className="text-lg leading-relaxed text-muted-foreground">
            The right guidance in buying your home can make all the difference. I’m here to provide clarity,
            insight, and a seamless buying experience tailored just for you.
          </p>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            Explore the resources below for more information regarding Halcyon’s buying services.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <PillButton href="/buyers-guide">Buyer’s Guide</PillButton>
            <PillButton href="/buyer-resources" variant="outline">
              Buyer Resources
            </PillButton>
          </div>
        </div>
      </section>

      <ContactCta
        title="Let’s Find Your Next Home"
        body="Contact us today at (858) 243-5304 to schedule your personalized buyer consultation."
      />
    </>
  )
}
