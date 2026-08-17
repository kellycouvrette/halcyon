import { PageHero } from '@/components/page-hero'
import { SubNav } from '@/components/section'
import { PropertyCard } from '@/components/property-card'
import { Reveal } from '@/components/reveal'
import { properties } from '@/lib/site-data'

const propertyNav = [
  { label: 'All Properties', href: '/halcyon-properties' },
  { label: 'For Sale', href: '/halcyon-properties/for-sale' },
  { label: 'For Rent', href: '/halcyon-properties/for-rent' },
]

type Props = {
  title: string
  subtitle: string
  filter?: 'for-sale' | 'for-rent'
  active: string
}

export function PropertyListing({ title, subtitle, filter, active }: Props) {
  const list = filter ? properties.filter((p) => p.status === filter) : properties

  return (
    <>
      <PageHero eyebrow="Halcyon Properties" title={title} subtitle={subtitle} image="/images/hero-exterior.png" />
      <SubNav links={propertyNav} active={active} />

      <section className="bg-background">
        <div className="container-page py-16 sm:py-20">
          {list.length > 0 ? (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {list.map((property, i) => (
                <Reveal key={property.slug} delay={(i % 3) * 100}>
                  <PropertyCard property={property} />
                </Reveal>
              ))}
            </div>
          ) : (
            <p className="py-12 text-center text-muted-foreground">
              No properties are currently listed in this category. Please check back soon.
            </p>
          )}
        </div>
      </section>
    </>
  )
}
