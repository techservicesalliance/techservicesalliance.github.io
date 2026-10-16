import { useState } from 'react'
import { Link } from 'react-router-dom'
import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'
import { blogPosts } from '../App'

const readTime = (post) => Math.max(1, Math.round(post.content.join(' ').split(/\s+/).length / 200))

const formatDate = (date) => {
  const parsed = new Date(`${date} UTC`)
  if (Number.isNaN(parsed.getTime())) return date
  return parsed.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

const categories = ['All', ...new Set(blogPosts.map((post) => post.category))]

export default function BlogList() {
  const [activeCategory, setActiveCategory] = useState('All')
  const filtered = activeCategory === 'All' ? blogPosts : blogPosts.filter((post) => post.category === activeCategory)

  return (
    <div className="overflow-x-hidden bg-white">
      <SiteHeader />
      <main className="section-wrap py-12 sm:py-16">
        <nav className="flex flex-wrap items-center gap-2 text-sm font-semibold text-ink/50" aria-label="Breadcrumb">
          <Link to="/" className="transition hover:text-[#d65b55]">Home</Link>
          <span aria-hidden="true">/</span>
          <span className="text-ink/70">Blogs</span>
        </nav>

        <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl lg:text-5xl">All news</h1>
        <p className="mt-3 text-lg text-ink/60">Stay tuned about our Company</p>

        <div className="mt-10 flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full border px-5 py-2.5 text-sm font-bold transition ${activeCategory === category ? 'border-[#d65b55] bg-[#d65b55] text-white' : 'border-ink/10 bg-white text-ink hover:border-[#d65b55] hover:text-[#d65b55]'}`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post) => (
            <article key={post.slug} className="group flex flex-col overflow-hidden rounded-[12px] border border-ink/10 bg-white">
              <Link to={`/blog/${post.slug}`} className="block overflow-hidden" aria-label={`Read ${post.title}`}>
                <img src={post.image} alt="" className="aspect-[3/2] w-full object-cover transition duration-300 group-hover:scale-105" loading="lazy" />
              </Link>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-[#305aa1]">{post.category}</p>
                <h2 className="mt-3 text-lg font-extrabold leading-7 tracking-tight text-ink">
                  <Link to={`/blog/${post.slug}`} className="transition group-hover:text-[#d65b55]">{post.title}</Link>
                </h2>
                <div className="mt-3 text-xs font-bold text-ink/50">
                  {formatDate(post.date)} · {readTime(post)} min. read
                </div>
                <Link to={`/blog/${post.slug}`} className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-extrabold text-[#d65b55]">Read the article <ArrowUpRight /></Link>
              </div>
            </article>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}

const ArrowUpRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4" aria-hidden="true">
    <path d="M7 17 17 7M8 7h9v9" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)
