import { useState } from 'react'
import { Link } from 'react-router-dom'
import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'

const inputClass = 'w-full rounded-[12px] border border-ink/15 bg-white px-4 py-3.5 text-sm text-ink outline-none transition placeholder:text-ink/40 focus:border-[#d65b55]'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <div className="overflow-x-hidden bg-white">
      <SiteHeader />
      <main className="section-wrap py-12 sm:py-16">
        <nav className="flex flex-wrap items-center gap-2 text-sm font-semibold text-ink/50" aria-label="Breadcrumb">
          <Link to="/" className="transition hover:text-[#d65b55]">Home</Link>
          <span aria-hidden="true">/</span>
          <span className="text-ink/70">Contacts</span>
        </nav>

        <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl lg:text-5xl">Our Contacts</h1>
        <p className="mt-3 text-lg text-ink/60">Contact us. And we will be glad to answer your questions.</p>

        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-xl font-extrabold tracking-tight text-ink">Please fill out the form.</h2>
            {!submitted ? (
              <form className="mt-6 space-y-5" onSubmit={(event) => { event.preventDefault(); setSubmitted(true) }}>
                <div>
                  <label htmlFor="company" className="mb-2 block text-sm font-bold text-ink">Company name</label>
                  <input id="company" name="company" type="text" placeholder="Company name" className={inputClass} required />
                </div>
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-bold text-ink">Your name</label>
                  <input id="name" name="name" type="text" placeholder="Your name" className={inputClass} required />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-bold text-ink">Email</label>
                  <input id="email" name="email" type="email" placeholder="Email" className={inputClass} required />
                </div>
                <div>
                  <label htmlFor="comments" className="mb-2 block text-sm font-bold text-ink">Comments</label>
                  <textarea id="comments" name="comments" rows="5" placeholder="Comments" className={inputClass} />
                </div>
                <button type="submit" className="inline-flex items-center justify-center rounded-full bg-[#d65b55] px-7 py-3.5 text-sm font-extrabold text-white transition hover:bg-[#305aa1]">Send message</button>
              </form>
            ) : (
              <div className="mt-6 rounded-[12px] border border-ink/10 bg-[#F8F9FC] p-8">
                <h2 className="text-2xl font-extrabold tracking-tight text-ink">Submission successful</h2>
                <p className="mt-4 leading-7 text-ink/70">Thank you for completing the form. Your information has been received, and our team will contact you shortly to assist with your project needs.</p>
              </div>
            )}
          </div>

          <div>
            <h2 className="text-xl font-extrabold tracking-tight text-ink">Contact information</h2>
            <div className="mt-6 space-y-5">
              <div className="rounded-[12px] border border-ink/10 bg-[#F8F9FC] p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-ink/50">Phone</p>
                <a href="tel:+9779846014430" className="mt-2 block text-lg font-extrabold text-ink transition hover:text-[#d65b55]">9846014430</a>
              </div>
              <div className="rounded-[12px] border border-ink/10 bg-[#F8F9FC] p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-ink/50">Email</p>
                <a href="mailto:info@techservicesalliance.com.np" className="mt-2 block text-lg font-extrabold text-ink transition hover:text-[#d65b55]">info@techservicesalliance.com.np</a>
              </div>
              <div className="rounded-[12px] border border-ink/10 bg-[#F8F9FC] p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-ink/50">Address</p>
                <p className="mt-2 text-lg font-extrabold text-ink">Tutepani, Lalitpur, Nepal</p>
              </div>
              <div className="rounded-[12px] border border-ink/10 bg-[#F8F9FC] p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-ink/50">Social media</p>
                <div className="mt-3 flex gap-3">
                  <a href="https://x.com/" target="_blank" rel="noreferrer" aria-label="X" className="grid h-11 w-11 place-items-center rounded-full bg-ink text-sm font-extrabold text-white transition hover:bg-[#d65b55]">X</a>
                  <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="grid h-11 w-11 place-items-center rounded-full bg-ink text-sm font-extrabold text-white transition hover:bg-[#d65b55]">in</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
