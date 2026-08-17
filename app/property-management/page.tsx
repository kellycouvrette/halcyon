import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { SectionHeading, ContactCta } from '@/components/section'
import { Reveal } from '@/components/reveal'
import { whyHalcyon } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Property Management',
  description:
    'Halcyon’s full-service property management division treats your investment like our own — from tenant screening to maintenance and reporting.',
}

const services = [
  'Strategic marketing of your rental',
  'Thorough tenant screening',
  'Reliable rent collection',
  'Proactive maintenance & work orders',
  'Clear monthly financial reporting',
  'Owner web portals & direct deposit',
]

export default function PropertyManagementPage() {
  return (
    <>
      <PageHero
        eyebrow="One of Our Four Pillars"
        title="Property Management"
        subtitle="We value your investment and treat your home like our own."
        image="/images/hero-home.png"
      />

      <section className="bg-background">
        <div className="container-page grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Since 2019"
              title="From 25 Properties to Over 230"
            />
            <div className="mt-6 space-y-5 leading-relaxed text-muted-foreground">
              <p>
                Halcyon started in property management in 2019 with 25 properties. Today we manage 230! That
                growth is a direct result of the trust our owners place in us and the care we bring to every
                property.
              </p>
              <p>
                We strive to provide property owners with exemplary service by valuing your investment and
                treating your home like our own — so your tenants are proud to call it home.
              </p>
            </div>
          </div>
          <ul className="grid gap-4">
            {services.map((service, i) => (
              <li key={service}>
                <Reveal delay={i * 60} className="flex items-center gap-4 border border-border bg-card p-5">
                  <span className="h-2 w-2 shrink-0 bg-silver" aria-hidden="true" />
                  <span className="text-foreground">{service}</span>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-secondary">
        <div className="container-page py-16 sm:py-20">
          <SectionHeading eyebrow="Why Choose Us" title="Why Halcyon Property Management" center />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyHalcyon.map((item, i) => (
              <Reveal key={item.title} delay={(i % 3) * 100} className="border-t-2 border-silver bg-card p-7">
                <h3 className="text-xl text-foreground">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{item.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ContactCta
        title="Let Us Manage Your Property"
        body="Whether you own one rental or a full portfolio, we’d love to show you what worry-free property management feels like."
      />
    </>
  )
}
