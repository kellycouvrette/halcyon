import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { ContactCta } from '@/components/section'
import { Reveal } from '@/components/reveal'
import { blogPosts } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Living Halcyon',
  description: 'Real estate tips, market insights, and local knowledge from the Halcyon Real Estate team.',
}

export default function LivingHalcyonPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Blog"
        title="Living Halcyon"
        subtitle="Tips, insights, and local knowledge to guide you through every step of your real estate journey."
        image="/images/hero-interior.png"
      />

      <section className="py-20">
        <div className="container-page grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, i) => (
            <Reveal key={post.slug} delay={(i % 3) * 100}>
              <article className="flex h-full flex-col border border-border bg-card">
                <div className="border-b border-border px-6 pt-6">
                  <p className="text-xs uppercase tracking-widest text-silver">{post.date}</p>
                  <h2 className="mt-2 pb-6 font-serif text-xl leading-snug text-balance">{post.title}</h2>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="flex-1 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
                  <Link
                    href={`/living-halcyon/${post.slug}`}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-silver hover:opacity-80"
                  >
                    Read More
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <ContactCta />
    </>
  )
}
