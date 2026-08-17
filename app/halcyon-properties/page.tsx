import type { Metadata } from 'next'
import { PropertyListing } from '@/components/property-listing'

export const metadata: Metadata = {
  title: 'Halcyon Properties',
  description: 'Browse homes for sale and available rentals across San Diego County with Halcyon Real Estate.',
}

export default function HalcyonPropertiesPage() {
  return (
    <PropertyListing
      title="Halcyon Properties"
      subtitle="Explore our current listings for sale and available rentals across San Diego County."
      active="/halcyon-properties"
    />
  )
}
