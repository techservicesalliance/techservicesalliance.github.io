import { Link, useParams } from 'react-router-dom'
import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'
import { blogPosts } from '../App'

const readTime = (post) => Math.max(1, Math.round(post.content.join(' ').split(/\s+/).length / 200))

const formatDate = (date) => {
  const parsed = new Date(`${date} UTC`)
  if (Number.isNaN(parsed.getTime())) return date
  return parsed.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

const ShareButtons = ({ title }) => {
  const url = typeof window !== 'undefined' ? window.location.href : ''
  const shareLinks = [
    { label: 'LinkedIn', href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}` },
    { label: 'Facebook', href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}` },
    { label: 'X', href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}` },
  ]
  return (
    <div className="flex items-center gap-3">
      {shareLinks.map((link) => (
        <a key={link.label} href={link.href} target="_blank" rel="noreferrer" aria-label={`Share on ${link.label}`} className="grid h-10 w-10 place-items-center rounded-full border border-ink/10 bg-white text-xs font-extrabold text-ink transition hover:bg-[#d65b55] hover:text-white">{link.label[0]}</a>
      ))}
    </div>
  )
}

export default function BlogDetails() {
  const { slug } = useParams()
  const post = blogPosts.find((item) => item.slug === slug)

  if (!post) {
    return (
      <div className="overflow-x-hidden bg-white">
        <SiteHeader />
        <main className="section-wrap py-32 text-center">
          <p className="eyebrow">Not found</p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-ink">Article not found</h1>
          <p className="mt-4 text-slate-600">The article you are looking for does not exist.</p>
          <Link to="/blogs" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#d65b55] px-6 py-3.5 text-sm font-extrabold text-white transition hover:bg-[#305aa1]">Back to blogs</Link>
        </main>
        <SiteFooter />
      </div>
    )
  }

  const related = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 3)

  return (
    <div className="overflow-x-hidden bg-white">
      <SiteHeader />
      <main className="section-wrap py-12 sm:py-16">
        <article className="mx-auto max-w-4xl">
          <nav className="flex flex-wrap items-center gap-2 text-sm font-semibold text-ink/50" aria-label="Breadcrumb">
            <Link to="/" className="transition hover:text-[#d65b55]">Home</Link>
            <span aria-hidden="true">/</span>
            <Link to="/blogs" className="transition hover:text-[#d65b55]">Blogs</Link>
            <span aria-hidden="true">/</span>
            <span className="truncate text-ink/70">{post.title}</span>
          </nav>

          <h1 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl">{post.title}</h1>

          <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-3 text-sm font-bold text-ink/60">
            <span>{formatDate(post.date)}</span>
            <span className="h-1 w-1 rounded-full bg-ink/30" aria-hidden="true" />
            <span>{readTime(post)} min. read</span>
            <span className="h-1 w-1 rounded-full bg-ink/30" aria-hidden="true" />
            <span>Share on social networks</span>
            <ShareButtons title={post.title} />
          </div>

          <div className="blog-art relative mt-10 aspect-[2/1] overflow-hidden rounded-[20px]">
            <img src={post.image} alt="" className="absolute inset-0 h-full w-full object-cover" />
          </div>

          <div className="mt-12 space-y-7 text-lg leading-8 text-ink/85">
            {post.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-14 flex flex-col gap-4 border-t border-ink/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm font-extrabold text-ink">Share on social networks</p>
            <ShareButtons title={post.title} />
          </div>
        </article>
      </main>

      {related.length > 0 && (
        <section className="border-t border-ink/10 bg-[#F8F9FC] py-[60px]">
          <div className="section-wrap">
            <h2 className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">See also</h2>
            <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <article key={item.slug} className="group flex flex-col overflow-hidden rounded-[12px] border border-ink/10 bg-white">
                  <Link to={`/blog/${item.slug}`} className="block overflow-hidden" aria-label={`Read ${item.title}`}>
                    <img src={item.image} alt="" className="aspect-[3/2] w-full object-cover transition duration-300 group-hover:scale-105" loading="lazy" />
                  </Link>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-xs font-bold uppercase tracking-widest text-[#305aa1]">{item.category}</p>
                    <h3 className="mt-3 text-lg font-extrabold leading-7 tracking-tight text-ink">
                      <Link to={`/blog/${item.slug}`} className="transition group-hover:text-[#d65b55]">{item.title}</Link>
                    </h3>
                    <div className="mt-3 text-xs font-bold text-ink/50">
                      {formatDate(item.date)} · {readTime(item)} min. read
                    </div>
                    <Link to={`/blog/${item.slug}`} className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-extrabold text-[#d65b55]">Read the article <ArrowUpRight /></Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
      <SiteFooter />
    </div>
  )
}

const ArrowUpRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4" aria-hidden="true">
    <path d="M7 17 17 7M8 7h9v9" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)
