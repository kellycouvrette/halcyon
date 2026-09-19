import Link from 'next/link'
import { cn } from '@/lib/utils'
import { company } from '@/lib/site-data'

export function SectionHeading({
  eyebrow,
  title,
  center,
  className,
}: {
  eyebrow?: string
  title: string
  center?: boolean
  className?: string
}) {
  return (
    <div className={cn(center && 'text-center', className)}>
      {eyebrow && (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-silver">{eyebrow}</p>
      )}
      <h2 className="font-serif text-3xl text-foreground text-balance sm:text-4xl">{title}</h2>
      <span
        className={cn('mt-5 block h-px w-16 bg-silver', center && 'mx-auto')}
        aria-hidden="true"
      />
    </div>
  )
}

export function ContactCta({
  title = 'Ready to Get Started?',
  body = 'Let’s talk about how Halcyon can help you reach your real estate goals.',
}: {
  title?: string
  body?: string
}) {
  return (
    <section className="bg-white text-black">
      <div className="container-page flex flex-col items-center gap-4 py-10 text-center">
        <h2 className="font-serif text-2xl sm:text-3xl">{title}</h2>
        <p className="max-w-xl text-xs sm:text-sm text-pretty leading-relaxed text-black/70">{body}</p>
        <div className="flex flex-col gap-3 sm:flex-row pt-1">
          <a
            href={company.phoneHref}
            className="bg-black text-white px-6 py-2.5 text-xs font-semibold uppercase tracking-wider transition-opacity hover:opacity-90"
          >
            Call {company.phone}
          </a>
          <a
            href={`mailto:${company.email}`}
            className="border border-black/30 px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-black transition-colors hover:border-black hover:bg-black/5"
          >
            Email Us
          </a>
        </div>
      </div>
    </section>
  )
}

export function SubNav({
  links,
  active,
}: {
  links: { label: string; href: string }[]
  active: string
}) {
  return (
    <nav aria-label="Section navigation" className="border-b border-border bg-secondary">
      <div className="container-page flex flex-wrap justify-center gap-1 py-3">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            aria-current={active === link.href ? 'page' : undefined}
            className={cn(
              'px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors',
              active === link.href
                ? 'bg-primary text-primary-foreground'
                : 'text-muted-foreground hover:text-silver',
            )}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  )
}

export function Prose({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn('space-y-5 leading-relaxed text-muted-foreground [&_strong]:text-foreground', className)}>
      {children}
    </div>
  )
}

export function PillButton({
  href,
  children,
  variant = 'solid',
}: {
  href: string
  children: React.ReactNode
  variant?: 'solid' | 'outline'
}) {
  return (
    <Link
      href={href}
      className={cn(
        'inline-flex items-center justify-center px-7 py-3 text-sm font-semibold uppercase tracking-wider transition-colors',
        variant === 'solid'
          ? 'bg-primary text-primary-foreground hover:opacity-90'
          : 'border border-foreground/20 text-foreground hover:border-silver hover:text-silver',
      )}
    >
      {children}
    </Link>
  )
}
