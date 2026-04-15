import Link from 'next/link'
import { Nav } from '@/components/layout/nav'
import { getAllPosts } from '@/lib/mdx'

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <>
      <Nav />
      <main className="blog-wrap" id="main-content">
        <header className="blog-header">
          <h1>Blog</h1>
          <p>Thoughts on engineering, systems, and the craft of building software.</p>
        </header>

        {posts.length === 0 ? (
          <p className="blog-empty">No posts yet. Check back soon.</p>
        ) : (
          <div className="blog-list">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="blog-item">
                <div className="blog-item-content">
                  <h2>{post.title}</h2>
                  <p>{post.description}</p>
                </div>
                <div className="blog-item-meta">
                  <span>{post.date}</span>
                  <span>{post.readingTime}</span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </main>
    </>
  )
}
