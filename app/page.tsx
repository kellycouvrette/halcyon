import Link from 'next/link'
import { ArrowRight, Building2, Home as HomeIcon, LineChart } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { SectionHeading, ContactCta } from '@/components/section'
import { Reveal } from '@/components/reveal'
import { whyHalcyon, blogPosts } from '@/lib/site-data'

const pillars = [
  {
    icon: HomeIcon,
    title: 'Buying & Selling',
    body: 'A clear, strategic, and personalized approach to every transaction — from pricing to closing.',
    href: '/buying-and-selling',
  },
  {
    icon: Building2,
    title: 'Property Management',
    body: 'Full-service management that maximizes your investment and gives you peace of mind.',
    href: '/property-management',
  },
  {
    icon: LineChart,
    title: 'Investing',
    body: 'Trusted, proven guidance to help you make the right real estate investment decisions.',
    href: '/invest',
  },
]

export default function HomePage() {
  const latest = blogPosts.slice(0, 3)

  return (
    <>
      <PageHero title="Halcyon Real Estate" image="/images/hero-home.png" size="lg" />

      {/* Intro pillars */}
      <section className="py-20">
        <div className="container-page">
          <SectionHeading center eyebrow="Poway, California" title="A Higher Standard of Real Estate" />
          <p className="mx-auto mt-6 max-w-3xl text-center leading-relaxed text-muted-foreground">
            Halcyon Real Estate is a full-service brokerage serving Poway, San Diego County, and beyond. Whether
            you’re buying, selling, investing, or need your property managed, our seasoned team delivers the
            capabilities of a large brokerage with a genuine local feel.
          </p>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 100}>
                <Link
                  href={p.href}
                  className="group flex h-full flex-col border border-border bg-card p-8 transition-colors hover:border-silver"
                >
                  <p.icon className="h-9 w-9 text-silver" aria-hidden="true" />
                  <h3 className="mt-5 font-serif text-xl">{p.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-silver">
                    Learn More
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Halcyon */}
      <section className="bg-secondary py-20">
        <div className="container-page">
          <SectionHeading center eyebrow="Why Halcyon?" title="What Sets Us Apart" />
          <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {whyHalcyon.map((item, i) => (
              <Reveal key={item.title} delay={(i % 3) * 100} className="flex flex-col">
                <span className="font-serif text-3xl text-silver/60">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mt-3 font-serif text-lg">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-20">
        <div className="container-page">
          <SectionHeading center eyebrow="Recognition" title="Awarded & Trusted" />
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {[
              { t: 'SDAR Circle of Excellence', s: '2024 Gold Level Producer' },
              { t: 'Poway USD Certified Expert', s: 'Ginger Couvrette, Broker' },
              { t: 'Woman of the Year', s: 'Presented by CA Senator Brian W. Jones' },
            ].map((a, i) => (
              <Reveal
                key={a.t}
                delay={i * 100}
                className="flex flex-col items-center border border-border bg-card px-6 py-10 text-center"
              >
                <span className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-silver font-serif text-2xl italic text-silver">
                  H
                </span>
                <h3 className="mt-5 font-serif text-lg text-balance">{a.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{a.s}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="bg-secondary py-20">
        <div className="container-page">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <SectionHeading eyebrow="Our Blog" title="Latest from Living Halcyon" />
            <Link
              href="/living-halcyon"
              className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-silver hover:opacity-80"
            >
              All Articles
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {latest.map((post, i) => (
              <Reveal key={post.slug} delay={i * 100} className="flex flex-col border border-border bg-card">
                <div className="border-b border-border px-6 pt-6">
                  <p className="text-xs uppercase tracking-widest text-silver">{post.date}</p>
                  <h3 className="mt-2 pb-6 font-serif text-xl leading-snug text-balance">{post.title}</h3>
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
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ContactCta />
    </>
  )
}
