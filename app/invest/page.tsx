import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { SectionHeading, ContactCta } from '@/components/section'
import { Reveal } from '@/components/reveal'

export const metadata: Metadata = {
  title: 'Invest',
  description:
    'Build long-term wealth through San Diego real estate. Halcyon helps investors find, finance, and manage income properties.',
}

const benefits = [
  {
    title: 'Strong Appreciation',
    body: 'Appreciation has been averaging over 10% year over year on many San Diego properties — a powerful way to grow your net worth over time.',
  },
  {
    title: 'Leverage',
    body: 'The ability to recognize appreciation on the full asset value with only a percentage down is an excellent way to leverage your investment.',
  },
  {
    title: 'Tax Benefits',
    body: 'Real estate offers meaningful long-term tax advantages. We always encourage investors to consult with their CPA about their specific situation.',
  },
  {
    title: 'Passive Income',
    body: 'Rental properties can generate reliable monthly cash flow — and our property management division can handle the day-to-day for you.',
  },
]

const steps = [
  { title: 'Define Your Goals', body: 'Cash flow, appreciation, or both — we start by understanding what you want your portfolio to achieve.' },
  { title: 'Find the Right Property', body: 'We identify investment opportunities that fit your budget and strategy across San Diego County.' },
  { title: 'Analyze the Numbers', body: 'We help you evaluate cap rate, cash flow, and long-term return so you can invest with confidence.' },
  { title: 'Manage & Grow', body: 'Our property management team keeps your investment running smoothly as you build toward the next one.' },
]

export default function InvestPage() {
  return (
    <>
      <PageHero
        eyebrow="Build Wealth"
        title="Invest"
        subtitle="Is now the time to buy in San Diego? In Southern California, the answer is almost always a resounding yes."
        image="/images/hero-exterior.png"
      />

      <section className="bg-background">
        <div className="container-page py-16 sm:py-20">
          <SectionHeading eyebrow="Why Invest" title="The Case for San Diego Real Estate" center />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {benefits.map((b, i) => (
              <Reveal key={b.title} delay={(i % 2) * 100} className="border border-border bg-card p-8">
                <h3 className="text-xl text-foreground">{b.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{b.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary">
        <div className="container-page py-16 sm:py-20">
          <SectionHeading eyebrow="How It Works" title="Investing With Halcyon" center />
          <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <li key={step.title}>
                <Reveal delay={i * 100} className="flex h-full flex-col bg-card p-7">
                  <span className="font-serif text-4xl text-silver">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="mt-4 text-lg text-foreground">{step.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{step.body}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <ContactCta
        title="Ready to Invest?"
        body="Let’s talk about your goals and find the right opportunity for your portfolio. As always, consult your CPA on tax matters."
      />
    </>
  )
}
