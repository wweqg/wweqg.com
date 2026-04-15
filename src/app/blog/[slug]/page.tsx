import { notFound } from 'next/navigation'
import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote/rsc'
import rehypePrettyCode from 'rehype-pretty-code'
import { Nav } from '@/components/layout/nav'
import { getAllPosts, getPostBySlug } from '@/lib/mdx'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}
  return {
    title: `${post.title} — Zhang Weiqiang`,
    description: post.description,
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  return (
    <>
      <Nav />
      <main className="blog-wrap" id="main-content">
        <article className="blog-post">
          <header className="blog-post-header">
            <Link href="/blog" className="blog-back">← Back to blog</Link>
            <h1>{post.title}</h1>
            <div className="blog-post-meta">
              <span>{post.date}</span>
              <span className="blog-post-dot">·</span>
              <span>{post.readingTime}</span>
            </div>
          </header>
          <div className="prose">
            <MDXRemote
              source={post.content}
              options={{
                mdxOptions: {
                  rehypePlugins: [
                    [rehypePrettyCode, { theme: 'github-dark-dimmed', keepBackground: true }],
                  ],
                },
              }}
            />
          </div>
        </article>
      </main>
    </>
  )
}
