import type { Metadata } from 'next'
import { PropertyListing } from '@/components/property-listing'

export const metadata: Metadata = {
  title: 'For Rent',
  description: 'Rental properties currently available through Halcyon Real Estate in San Diego County.',
}

export default function ForRentPage() {
  return (
    <PropertyListing
      title="Available for Rent"
      subtitle="Rental homes currently available through our property management division."
      filter="for-rent"
      active="/halcyon-properties/for-rent"
    />
  )
}
