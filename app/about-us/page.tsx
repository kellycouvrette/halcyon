import type { Metadata } from 'next'
import { Mail, Phone } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { SectionHeading, ContactCta } from '@/components/section'
import { SiteImage } from '@/components/site-image'
import { Reveal } from '@/components/reveal'
import { team } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Meet the Halcyon Real Estate team — agents committed to service, professionalism, and competence for all your real estate needs.',
}

function AgentContact({ phone, email }: { phone?: string; email: string }) {
  return (
    <div className="mt-3 space-y-1 text-sm text-muted-foreground">
      {phone && (
        <a href={`tel:${phone.replace(/[^\d+]/g, '')}`} className="flex items-center justify-center gap-2 hover:text-silver">
          <Phone className="h-3.5 w-3.5" aria-hidden="true" />
          {phone}
        </a>
      )}
      <a href={`mailto:${email}`} className="flex items-center justify-center gap-2 break-all hover:text-silver">
        <Mail className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
        {email}
      </a>
    </div>
  )
}

export default function AboutUsPage() {
  const [founder, ...associates] = team

  return (
    <>
      <PageHero
        title="Meet the Team"
        subtitle="Our agents are committed to service, professionalism, and competence — and want to be your resource for all your real estate needs."
        image="/images/halcyonheadshots/halcyongroup.jpg"
      />

      {/* Founder */}
      <section className="py-12">
        <div className="container-page">
          <div className="mx-auto max-w-[300px] overflow-hidden rounded-lg border border-border bg-card shadow-sm">
            
            {/* Header: Title & Name on Top */}
            <div className="bg-primary p-3 text-center text-primary-foreground">
              <span className="text-xs font-semibold uppercase tracking-wider text-silver">
                Founder & Broker of Halcyon
              </span>
              <h3 className="mt-1 font-serif text-xl">{founder.name}</h3>
            </div>

            {/* Picture in the Middle (Background removed so it's fully black around the photo) */}
            <div className="bg-primary px-6 py-3 flex justify-center">
              <div className="w-full max-h-[220px] overflow-hidden flex justify-center">
                <SiteImage 
                  src={founder.image} 
                  alt={founder.name} 
                  label={founder.name} 
                  className="h-full w-auto object-contain"
                />
              </div>
            </div>

            {/* Contact Information on the Bottom */}
            <div className="bg-primary p-4 text-center text-sm text-primary-foreground/90 space-y-1.5">
              {founder.phone && (
                <a href={`tel:${founder.phone.replace(/[^\d+]/g, '')}`} className="block hover:text-silver">
                  {founder.phone}
                </a>
              )}
              <a href={`mailto:${founder.email}`} className="block break-all hover:text-silver">
                {founder.email}
              </a>
              {founder.calBRE && (
                <p className="text-xs text-primary-foreground/60 pt-1">{founder.calBRE}</p>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* Associates */}
      <section className="bg-secondary py-20">
        <div className="container-page">
          <SectionHeading center eyebrow="Our Associates" title="The Halcyon Team" />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {associates.map((member, i) => (
              <Reveal
                key={member.name}
                delay={(i % 3) * 100}
                className="flex flex-col border border-border bg-card p-6 text-center"
              >
                <div className="mx-auto aspect-[4/5] w-40 overflow-hidden bg-secondary">
                  <SiteImage src={member.image} alt={member.name} label={member.name} />
                </div>
                <h3 className="mt-5 font-serif text-lg">{member.name}</h3>
                <AgentContact phone={member.phone} email={member.email} />
                <p className="mt-2 text-xs uppercase tracking-wider text-muted-foreground/70">{member.calBRE}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ContactCta />
    </>
  )
}
