import { cn } from '@/lib/utils'

type SiteImageProps = {
  src?: string
  alt: string
  /** Text shown inside the placeholder when no src is provided. */
  label?: string
  className?: string
  imgClassName?: string
}

/**
 * Renders a real image when `src` is provided, otherwise a styled placeholder.
 * To use your own photos, drop the file in /public/images and set `src` (or the
 * matching `image` field in lib/site-data.ts) to its path, e.g. "/images/team/jane.jpg".
 */
export function SiteImage({ src, alt, label, className, imgClassName }: SiteImageProps) {
  if (src) {
    return (
      <img
        src={src || '/placeholder.svg'}
        alt={alt}
        className={cn('h-full w-full object-cover', imgClassName, className)}
        crossOrigin="anonymous"
      />
    )
  }

  return (
    <div
      role="img"
      aria-label={alt}
      className={cn(
        'flex h-full w-full flex-col items-center justify-center gap-1 bg-secondary p-4 text-center',
        className,
      )}
    >
      <span className="font-serif text-sm text-muted-foreground">{label ?? 'Photo'}</span>
      <span className="text-[10px] uppercase tracking-widest text-muted-foreground/70">Image placeholder</span>
    </div>
  )
}
