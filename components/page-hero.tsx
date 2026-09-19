import { cn } from '@/lib/utils'

type PageHeroProps = {
  title: string
  eyebrow?: string
  subtitle?: string
  image?: string
  size?: 'sm' | 'lg'
}

export function PageHero({ title, eyebrow, subtitle, image, size = 'sm' }: PageHeroProps) {
  return (
    <section
      className={cn(
        'relative flex items-center justify-center overflow-hidden bg-primary text-center text-primary-foreground',
        size === 'lg' ? 'min-h-[70vh]' : 'min-h-[42vh]',
      )}
    >
      {image ? (
        <img
          src={image || '/placeholder.svg'}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          crossOrigin="anonymous"
        />
      ) : null}
      <div className="absolute inset-0 bg-black/45" aria-hidden="true" />
      <div className="container-page relative z-10 py-20">
        {eyebrow && (
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-white">{eyebrow}</p>
        )}
        <h1 className="font-serif text-4xl uppercase tracking-[0.15em] text-balance sm:text-5xl md:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
