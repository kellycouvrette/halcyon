import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { SiteImage } from '@/components/site-image'
import { ContactCta } from '@/components/section'
import { properties, company } from '@/lib/site-data'

type Params = { slug: string }

export function generateStaticParams() {
  return properties.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>
}): Promise<Metadata> {
  const { slug } = await params
  const property = properties.find((p) => p.slug === slug)
  if (!property) return { title: 'Property Not Found' }
  return { title: property.title, description: property.description.slice(0, 155) }
}

export default async function PropertyDetailPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  const property = properties.find((p) => p.slug === slug)
  if (!property) notFound()

  const facts = [
    { label: 'Price', value: property.price },
    { label: 'Bedrooms', value: property.beds },
    { label: 'Bathrooms', value: property.baths },
    { label: 'Square Feet', value: property.sqft.toLocaleString() },
  ]

  return (
    <>
      <div className="container-page pt-10">
        <Link
          href="/halcyon-properties"
          className="text-sm font-semibold uppercase tracking-wider text-muted-foreground transition-colors hover:text-silver"
        >
          &larr; Back to Properties
        </Link>
      </div>

      <article className="container-page py-8 sm:py-12">
        <div className="flex flex-wrap items-center gap-3">
          <span className="bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary-foreground">
            {property.status === 'for-sale' ? 'For Sale' : 'For Rent'}
          </span>
          <span className="text-sm text-muted-foreground">{property.date}</span>
        </div>
        <h1 className="mt-4 text-3xl text-foreground text-balance sm:text-4xl">{property.title}</h1>
        <p className="mt-2 text-lg text-muted-foreground">{property.address}</p>

        <div className="mt-8 aspect-[16/9] w-full overflow-hidden border border-border">
          <SiteImage src={property.image} alt={property.title} label="Property Photo" />
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_320px]">
          <div>
            <h2 className="text-2xl text-foreground">About This Home</h2>
            <span className="mt-4 block h-px w-16 bg-silver" aria-hidden="true" />
            <p className="mt-6 leading-relaxed text-muted-foreground">{property.description}</p>
          </div>

          <aside className="h-fit border border-border bg-card p-7">
            <p className="font-serif text-3xl text-foreground">{property.price}</p>
            <dl className="mt-6 space-y-3">
              {facts.map((f) => (
                <div key={f.label} className="flex justify-between border-b border-border pb-3 text-sm">
                  <dt className="text-muted-foreground">{f.label}</dt>
                  <dd className="font-semibold text-foreground">{f.value}</dd>
                </div>
              ))}
            </dl>
            <a
              href={company.phoneHref}
              className="mt-6 block bg-primary px-6 py-3 text-center text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-opacity hover:opacity-90"
            >
              Call {company.phone}
            </a>
            <a
              href={`mailto:${company.email}`}
              className="mt-3 block border border-foreground/20 px-6 py-3 text-center text-sm font-semibold uppercase tracking-wider text-foreground transition-colors hover:border-silver hover:text-silver"
            >
              Request Info
            </a>
          </aside>
        </div>
      </article>

      <ContactCta
        title="Interested in This Property?"
        body="Contact us to schedule a showing or to ask any questions about this listing."
      />
    </>
  )
}
