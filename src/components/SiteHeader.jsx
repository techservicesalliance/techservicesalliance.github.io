import { Link } from 'react-router-dom'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/#services' },
  { label: 'Portfolio', to: '/#portfolio' },
  { label: 'Blogs', to: '/blogs' },
]

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-[linear-gradient(125deg,#000000_0%,#0E0F12_60%,#17191E_100%)]">
      <div className="section-wrap flex h-24 items-center justify-between">
        <Link to="/" className="flex items-center gap-3" aria-label="Tech Services Alliance home">
          <img src="/assets/images/tsa.png" alt="Tech Services Alliance" className="h-16 w-auto object-contain brightness-0 invert" />
        </Link>
        <div className="ml-auto flex items-center gap-6">
          <nav className="hidden items-center gap-8 text-sm font-semibold text-white/80 md:flex" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link key={link.label} to={link.to} className="transition hover:text-[#d65b55]">{link.label}</Link>
            ))}
          </nav>
          <Link to="/contact" className="rounded-full bg-[#d65b55] px-5 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-[#305aa1] hover:text-white">Let's talk</Link>
        </div>
      </div>
    </header>
  )
}
