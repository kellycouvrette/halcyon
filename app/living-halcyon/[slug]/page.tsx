import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { ContactCta } from '@/components/section'
import { blogPosts } from '@/lib/site-data'

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) return {}
  return { title: post.title, description: post.excerpt }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) notFound()

  return (
    <>
      <PageHero eyebrow={post.date} title={post.title} image={post.image ?? '/images/hero-interior.png'} />

      <article className="py-16">
        <div className="mx-auto w-full max-w-3xl px-6">
          <Link
            href="/living-halcyon"
            className="mb-10 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-silver hover:opacity-80"
          >
            <ArrowLeft className="h-4 w-4" />
            Living Halcyon
          </Link>

          <div className="space-y-10">
            {post.content.map((block, i) => (
              <section key={i}>
                {block.heading && <h2 className="mb-4 font-serif text-2xl text-foreground">{block.heading}</h2>}
                <div className="space-y-4 leading-relaxed text-muted-foreground">
                  {block.body?.map((p, j) => <p key={j}>{p}</p>)}
                  {block.links && (
                    <ul className="grid gap-2 sm:grid-cols-2">
                      {block.links.map((link) => (
                        <li key={link.name}>
                          <a
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-medium text-silver underline-offset-4 hover:underline"
                          >
                            {link.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </section>
            ))}
          </div>
        </div>
      </article>

      <ContactCta title="Have Questions?" body="Give us a call and let’s talk about your real estate goals." />
    </>
  )
}
