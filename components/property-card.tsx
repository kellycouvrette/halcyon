import { SiteImage } from '@/components/site-image'
import type { Property } from '@/lib/site-data'

export function PropertyCard({ property }: { property: Property }) {
  return (
    <a
      href={property.zillowUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col overflow-hidden border border-border bg-card transition-shadow hover:shadow-lg"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <SiteImage
          src={property.image}
          alt={property.title}
          label="Property Photo"
          imgClassName="transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 bg-background px-3 py-1 text-xs font-semibold uppercase tracking-wider text-foreground">
          {property.status === 'for-sale' ? 'For Sale' : 'For Rent'}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="font-serif text-2xl text-foreground">{property.price}</p>
        <h3 className="mt-2 text-lg leading-snug text-foreground text-balance group-hover:text-silver">
          {property.title}
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">{property.address}</p>
        <div className="mt-auto flex gap-5 border-t border-border pt-4 text-sm text-muted-foreground">
          <span>
            <strong className="text-foreground">{property.beds}</strong> Beds
          </span>
          <span>
            <strong className="text-foreground">{property.baths}</strong> Baths
          </span>
          <span>
            <strong className="text-foreground">{property.sqft.toLocaleString()}</strong> Sq Ft
          </span>
        </div>
      </div>
    </a>
  )
}
