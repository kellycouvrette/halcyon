import type { Metadata } from 'next'
import { PropertyListing } from '@/components/property-listing'

export const metadata: Metadata = {
  title: 'For Sale',
  description: 'Homes currently for sale with Halcyon Real Estate in San Diego County.',
}

export default function ForSalePage() {
  return (
    <PropertyListing
      title="For Sale"
      subtitle="Homes currently on the market with Halcyon Real Estate."
      filter="for-sale"
      active="/halcyon-properties/for-sale"
    />
  )
}
