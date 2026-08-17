import type { Metadata } from 'next'
import { Quote } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { SectionHeading, ContactCta } from '@/components/section'
import { Reveal } from '@/components/reveal'
import { testimonials } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Client Testimonials',
  description: 'Hear what our clients have to say about their experience working with Halcyon Real Estate.',
}

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Client Testimonials"
        title="What Our Clients Say"
        subtitle="We take pride in providing exceptional service and building lasting relationships with every client we serve."
        image="/images/hero-interior.png"
      />

      <section className="py-20">
        <div className="container-page">
          <SectionHeading
            center
            eyebrow="Kind Words"
            title="Don’t Just Take Our Word For It"
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {testimonials.map((t, i) => (
              <Reveal key={t.author} delay={(i % 2) * 100}>
                <figure className="flex h-full flex-col border border-border bg-card p-8">
                  <Quote className="h-8 w-8 text-silver" aria-hidden="true" />
                  <blockquote className="mt-4 flex-1 font-serif text-lg leading-relaxed text-foreground">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-6 text-sm">
                    <span className="font-semibold text-foreground">{t.author}</span>
                    <span className="block text-muted-foreground">{t.location}</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ContactCta
        title="Ready to Write Your Own Success Story?"
        body="Contact Ginger Couvrette and the Halcyon team to get started today."
      />
    </>
  )
}
