'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { ChevronDown, Menu, Phone, X } from 'lucide-react'
import { company, nav, type NavItem } from '@/lib/site-data'
import { cn } from '@/lib/utils'

function Monogram({ className }: { className?: string }) {
  return (
    <div className={cn('relative flex items-center justify-center', className)}>
      <Image
        src="/er-logo.png"
        alt={`${company.name} logo`}
        width={72}
        height={72}
        className="h-16 w-auto object-contain"
      />
    </div>
  )
}

function DesktopDropdown({ item, pathname }: { item: NavItem; pathname: string }) {
  if (!item.children) return null
  return (
    <div className="invisible absolute left-0 top-full min-w-64 border-t-2 border-silver bg-[#040707] opacity-0 shadow-xl transition-all group-hover:visible group-hover:opacity-100">
      <ul className="py-2">
        {item.children.map((child) => (
          <li key={child.href} className={child.children ? 'py-1' : undefined}>
            <Link
              href={child.href}
              className={cn(
                'block px-4 py-2.5 text-xs transition-colors hover:bg-white/5 hover:text-silver',
                child.children && 'font-semibold uppercase tracking-wider text-primary-foreground/90',
                pathname === child.href ? 'text-silver' : 'text-primary-foreground/80',
              )}
            >
              {child.label}
            </Link>
            {child.children && (
              <ul className="pb-1">
                {child.children.map((grandchild) => (
                  <li key={grandchild.href}>
                    <Link
                      href={grandchild.href}
                      className={cn(
                        'block px-4 py-2 pl-7 text-xs transition-colors hover:bg-white/5 hover:text-silver',
                        pathname === grandchild.href ? 'text-silver' : 'text-primary-foreground/70',
                      )}
                    >
                      {grandchild.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

function MobileNavItem({
  item,
  pathname,
  depth = 0,
  onNavigate,
}: {
  item: NavItem
  pathname: string
  depth?: number
  onNavigate: () => void
}) {
  const [open, setOpen] = useState(false)
  const isActive = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href)

  return (
    <li className={cn(depth === 0 && 'py-1')}>
      <div className="flex items-center justify-between">
        <Link
          href={item.href}
          className={cn(
            'py-2 text-xs',
            depth === 0 ? 'font-medium' : depth === 1 ? 'font-semibold uppercase tracking-wider' : '',
            isActive ? 'text-silver' : '',
          )}
          onClick={onNavigate}
        >
          {item.label}
        </Link>
        {item.children && (
          <button
            type="button"
            aria-label={`Toggle ${item.label} submenu`}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="p-2"
          >
            <ChevronDown className={cn('h-4 w-4 transition-transform', open && 'rotate-180')} />
          </button>
        )}
      </div>
      {item.children && open && (
        <ul className={cn('pb-2', depth === 0 ? 'pl-4' : 'pl-3')}>
          {item.children.map((child) => (
            <MobileNavItem key={child.href} item={child} pathname={pathname} depth={depth + 1} onNavigate={onNavigate} />
          ))}
        </ul>
      )}
    </li>
  )
}

export function SiteHeader() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href))

  return (
    <header className="sticky top-0 z-50 bg-[#040707] text-primary-foreground">
      <div className="container-page flex flex-col justify-between py-5 lg:h-30">
        
        {/* Top Section: Logo & Company Name (Left) + Phone Number stacked under */}
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" aria-label={`${company.name} home`}>
              <Monogram />
            </Link>
            <div className="flex flex-col">
              <Link href="/" className="font-serif text-2xl tracking-wide whitespace-nowrap sm:text-3xl">
                {company.name}
              </Link>
              <a
                href={company.phoneHref}
                className="mt-0.5 text-xs tracking-wide text-primary-foreground/70 transition-colors hover:text-silver"
              >
                {company.phone}
              </a>
            </div>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            className="inline-flex items-center justify-center p-2 lg:hidden"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Bottom Section: Navigation Menu pushed to the bottom right */}
        <div className="hidden lg:flex items-center justify-end pt-2">
          <nav aria-label="Header menu" className="flex items-center gap-6">
            {nav.map((item) => (
              <div key={item.label} className="group relative">
                <Link
                  href={item.href}
                  className={cn(
                    'flex items-center gap-1 py-1 text-xs font-medium tracking-wide transition-colors hover:text-silver',
                    isActive(item.href) ? 'text-silver' : 'text-primary-foreground/90',
                  )}
                >
                  {item.label}
                  {item.children && <ChevronDown className="h-3 w-3" aria-hidden="true" />}
                </Link>
                <DesktopDropdown item={item} pathname={pathname} />
              </div>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile nav dropdown */}
      {mobileOpen && (
        <nav aria-label="Mobile menu" className="border-t border-white/10 lg:hidden">
          <ul className="container-page divide-y divide-white/10 py-2">
            {nav.map((item) => (
              <MobileNavItem key={item.label} item={item} pathname={pathname} onNavigate={() => setMobileOpen(false)} />
            ))}
            <li className="py-3">
              <a
                href={company.phoneHref}
                className="flex items-center justify-center gap-2 border border-silver/70 px-4 py-2 text-xs font-medium text-silver transition-colors hover:bg-background hover:text-foreground"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call Us ({company.phone})
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}