import { Link } from 'react-router-dom'
import { services } from '../App'

const ArrowUpRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4" aria-hidden="true">
    <path d="M7 17 17 7M8 7h9v9" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function SiteFooter() {
  return (
    <footer className="bg-[#d65b55]">
      <div className="rounded-b-[25px] bg-ink px-4 pb-12 pt-14 text-white">
        <div className="section-wrap">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <Link to="/"><img src="/assets/images/tsa.png" alt="Tech Services Alliance" className="h-24 w-auto object-contain brightness-0 invert" /></Link>
            </div>
            <div>
              <p className="text-[18px] font-bold uppercase tracking-widest text-white/40">Menu</p>
              <div className="mt-6 space-y-3 text-base text-white/70">
                <Link className="block transition hover:text-white" to="/">Home</Link>
                <Link className="block transition hover:text-white" to="/#services">Services</Link>
                <Link className="block transition hover:text-white" to="/#portfolio">Portfolio</Link>
                <Link className="block transition hover:text-white" to="/blogs">Blogs</Link>
              </div>
            </div>
            <div>
              <p className="text-[18px] font-bold uppercase tracking-widest text-white/40">Services</p>
              <div className="mt-6 space-y-3 text-base text-white/70">
                {services.map((service) => (
                  <Link key={service.number} className="block transition hover:text-white" to="/#services">{service.title}</Link>
                ))}
              </div>
            </div>
            <div>
              <p className="text-[18px] font-bold uppercase tracking-widest text-white/40">Contact</p>
              <div className="mt-6 space-y-3 text-base text-white/70">
                <a className="block transition hover:text-white" href="mailto:info@techservicesalliance.com.np">info@techservicesalliance.com.np</a>
                <p>Tutepani, Lalitpur</p>
                <a className="block transition hover:text-white" href="tel:+9779846014430">9846014430</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#d65b55] px-4 py-6 text-white">
        <div className="section-wrap flex flex-col gap-3 text-xs sm:flex-row sm:justify-between">
          <p>© 2026 Tech Services Alliance. All rights reserved.</p>
          <p>Technology solutions for modern organisations.</p>
        </div>
      </div>
    </footer>
  )
}
