import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const ArrowUpRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4" aria-hidden="true">
    <path d="M7 17 17 7M8 7h9v9" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const TypewriterText = ({ words, className = '', typingSpeed = 85, pause = 1800 }) => {
  const [wordIndex, setWordIndex] = useState(0)
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setText(words[0])
      return undefined
    }

    const word = words[wordIndex]
    const complete = text === word
    const empty = text === ''
    const delay = complete && !isDeleting ? pause : isDeleting ? typingSpeed / 2 : typingSpeed
    const timeout = window.setTimeout(() => {
      if (complete && !isDeleting) setIsDeleting(true)
      else if (isDeleting && empty) {
        setIsDeleting(false)
        setWordIndex((wordIndex + 1) % words.length)
      } else setText(word.slice(0, text.length + (isDeleting ? -1 : 1)))
    }, delay)

    return () => window.clearTimeout(timeout)
  }, [isDeleting, pause, text, typingSpeed, wordIndex, words])

  return <span className={`typewriter-text ${className}`} aria-label={words[0]}>{text}<span className="typewriter-cursor" aria-hidden="true">|</span></span>
}

const Icon = ({ name }) => {
  const paths = {
    cloud: <><path d="M7 18h10a4 4 0 0 0 .7-7.94A6 6 0 0 0 6.1 8.56 4.5 4.5 0 0 0 7 18Z" /><path d="M12 10v6m-2-2 2 2 2-2" /></>,
    shield: <><path d="M12 3 5 6v5c0 4.2 2.9 8.1 7 10 4.1-1.9 7-5.8 7-10V6l-7-3Z" /><path d="m9 12 2 2 4-4" /></>,
    network: <><circle cx="6" cy="12" r="2" /><circle cx="18" cy="6" r="2" /><circle cx="18" cy="18" r="2" /><path d="m7.7 11 8.6-4M7.7 13l8.6 4" /></>,
    headset: <><path d="M4 14v-2a8 8 0 0 1 16 0v2" /><path d="M4 14h3v4H5a1 1 0 0 1-1-1v-3Zm16 0h-3v4h2a1 1 0 0 0 1-1v-3ZM17 18c0 2-2 3-5 3" /></>,
  }
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-7 w-7" aria-hidden="true">{paths[name]}</svg>
}

export const services = [
  { number: '01', title: 'Business Digitization', text: 'Turn manual workflows into connected, efficient digital experiences built for growth.', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=85' },
  { number: '02', title: 'Custom Web Applications', text: 'Reliable web platforms tailored to the way your team, customers and operations work.', image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=85' },
  { number: '03', title: 'App Development', text: 'Polished mobile products that make your service easy to use, wherever people are.', image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=85' },
  { number: '04', title: 'Digital Marketplace', text: 'Commerce ecosystems that bring sellers, buyers and payments together in one place.', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=85' },
  { number: '05', title: 'AI Consulting', text: 'Clear AI strategy and implementation support focused on meaningful business outcomes.', image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=85' },
  { number: '06', title: 'UI/UX Design', text: 'Thoughtful digital interfaces shaped around real people, clear journeys and conversion.', image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=1200&q=85' },
]

const workProcess = [
  { number: '01', title: 'Requirement Analysis', text: 'We learn your goals, users and business needs to define a focused project roadmap.' },
  { number: '02', title: 'UI/UX Design', text: 'We shape clear user journeys and intuitive interfaces before development begins.' },
  { number: '03', title: 'Development', text: 'Our team turns approved designs into secure, scalable digital products.' },
  { number: '04', title: 'Quality Assurance', text: 'We test every key interaction and scenario to make sure your product performs reliably.' },
  { number: '05', title: 'Deployment', text: 'We launch with care, configuring the right environment for a smooth release.' },
  { number: '06', title: 'Maintenance', text: 'We stay alongside your team with ongoing improvements, support and optimisation.' },
]

const technologies = [
  { name: 'WordPress', mark: 'W', image: 'https://cdn.simpleicons.org/wordpress' },
  { name: 'PHP', mark: 'php', image: 'https://cdn.simpleicons.org/php' },
  { name: 'React', mark: 'R', image: 'https://cdn.simpleicons.org/react' },
  { name: 'Next.js', mark: 'N', image: 'https://cdn.simpleicons.org/nextdotjs' },
  { name: 'Node.js', mark: 'N', image: 'https://cdn.simpleicons.org/nodedotjs' },
  { name: 'Vue', mark: 'V', image: 'https://cdn.simpleicons.org/vuedotjs' },
  { name: 'Figma', mark: 'F', image: 'https://cdn.simpleicons.org/figma' },
  { name: 'TypeScript', mark: 'TS', image: 'https://cdn.simpleicons.org/typescript' },
  { name: 'Adobe CC', mark: 'A', image: 'https://cdn.simpleicons.org/adobecreativecloud' },
  { name: 'Nest.js', mark: 'N', image: 'https://cdn.simpleicons.org/nestjs' },
  { name: 'Framer', mark: 'F', image: 'https://cdn.simpleicons.org/framer' },
  { name: 'Lighthouse', mark: 'L', image: 'https://cdn.simpleicons.org/lighthouse' },
  { name: 'Cloudflare', mark: 'C', image: 'https://cdn.simpleicons.org/cloudflare' },
  { name: 'PostgreSQL', mark: 'P', image: 'https://cdn.simpleicons.org/postgresql' },
]

const secondTechnologyRow = [...technologies.slice(5), ...technologies.slice(0, 5)]

const successStories = [
  { company: 'Himalayan Bank', category: 'Financial services', image: '/assets/images/mockups/mockup1.webp', quote: '“TSA gave us a clearer, more resilient foundation for the work our teams do every day. The transition felt considered from beginning to end.”', person: 'Chief Information Officer', result: '99.9%', resultLabel: 'service availability', metric: '24/7', metricLabel: 'proactive monitoring', accent: 'bg-[#305aa1]', panel: 'bg-[#1D3557]' },
  { company: 'Kantipur Hospital', category: 'Healthcare', image: '/assets/images/mockups/mockup2.jfif', quote: '“Our staff can now focus their energy on patients, confident that support is there whenever it is needed.”', person: 'Head of Operations', result: '40%', resultLabel: 'faster issue resolution', metric: '1', metricLabel: 'connected support desk', accent: 'bg-[#305aa1]', panel: 'bg-[#1D3557]' },
  { company: 'Nabil School', category: 'Education', image: '/assets/images/mockups/mockup3.webp', quote: '“The new cloud workspace makes it simple for our educators and students to stay connected, wherever learning happens.”', person: 'Director of Technology', result: '3x', resultLabel: 'more collaborative teams', metric: '100%', metricLabel: 'cloud-ready learning', accent: 'bg-[#305aa1]', panel: 'bg-[#1D3557]' },
]

export const blogPosts = [
  { slug: 'cyber-resilience', category: 'Cybersecurity', date: '06 Aug 2026', title: 'Five practical ways to make your business more cyber resilient.', visual: 'security', image: 'https://picsum.photos/seed/cyber/1200/700', excerpt: 'Small, consistent security habits can dramatically reduce your risk. Here are five practical steps any team can start today.', content: ['Cyber resilience is no longer an IT-only concern. Every business that stores customer data, takes payments or runs core operations online has a responsibility to protect that infrastructure — and the good news is that meaningful protection does not have to be complicated.', 'Start with the basics: enforce strong, unique passwords and enable multi-factor authentication everywhere it is available. Most breaches begin with a single compromised credential, so layered authentication is one of the cheapest and most effective defences you can buy.', 'Next, keep software up to date. Patch management is unglamorous but critical — the vulnerabilities attackers exploit most are usually months old and already have a public fix. Automate updates where you can and review exceptions monthly.', 'Finally, plan for the worst. Regular backups, a tested recovery runbook and a named incident owner mean that even a successful attack becomes a disruption rather than a disaster. Resilience is about how quickly you recover, not just how well you defend.'], author: 'TSA Team' },
  { slug: 'cloud-adoption-path', category: 'Cloud Solutions', date: '29 Jul 2026', title: 'A clearer path to cloud adoption for growing teams.', visual: 'cloud', image: 'https://picsum.photos/seed/cloud/1200/700', excerpt: 'Moving to the cloud does not have to be a big bang. A phased, business-first approach keeps risk low and momentum high.', content: ['Cloud adoption is often framed as a single decision: migrate everything, all at once. In practice the teams that succeed treat it as a journey with clear phases, measurable outcomes and plenty of room to course-correct.', 'Begin by understanding where your value actually lives. Not every workload benefits from the cloud equally, so prioritise applications with volatile usage, remote access needs or heavy compliance requirements first.', 'Security and cost controls should be in place before the first workload moves. Set budgets, alerts and access boundaries up front — it is far easier to manage a controlled migration than to retrofit governance after the fact.', 'Choose a partner who can show you examples of similar migrations rather than just slides. A team that has walked the path with other organisations will flag the traps before you hit them, and that experience is worth as much as any platform discount.'], author: 'TSA Team' },
  { slug: 'proactive-it-support', category: 'Managed Services', date: '18 Jul 2026', title: 'Why proactive IT support is a better way to work.', visual: 'support', image: 'https://picsum.photos/seed/support/1200/700', excerpt: 'Waiting for things to break is expensive. Proactive support finds problems early and keeps your teams productive.', content: ['Reactive IT support waits for a ticket and then races to fix what broke. Proactive support, by contrast, watches, measures and prevents — catching small problems before they ever become outages.', 'The economics are simple: a monitoring alert is cheap, an unplanned outage is expensive. When your systems are observed continuously, most issues can be resolved during a quiet window instead of in the middle of the working day.', 'A good managed service does not just react faster; it also removes repetitive work from your internal team. With routine maintenance, patching and health checks handled, your people spend their time on the projects that move the business forward.', 'Look for a partner that reports in business language, not just technical jargon. You should know the health of your infrastructure in the same way you know the health of your finances — clearly, regularly and without surprises.'], author: 'TSA Team' },
]

const portfolio = [
  { title: 'Clean Sewa', website: 'https://cleansewa.com/', image: '/assets/images/mockups/mockup1.webp', thumbnail: 'https://s.wordpress.com/mshots/v1/https%3A%2F%2Fcleansewa.com?w=600', text: 'Digital cleaning services marketplace connecting households with trusted professionals.', technologies: ['React', 'Node.js', 'TypeScript', 'PostgreSQL'] },
  { title: 'Arthako', website: 'https://app.arthako.com/', image: '/assets/images/mockups/mockup2.jfif', thumbnail: 'https://s.wordpress.com/mshots/v1/https%3A%2F%2Fapp.arthako.com?w=600', text: 'Fintech platform simplifying payments and financial workflows for modern businesses.', technologies: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL'] },
  { title: 'Nakarmi Sewing Machines', website: 'https://nakarmisewingmachines.com/', image: '/assets/images/mockups/mockup3.webp', thumbnail: 'https://s.wordpress.com/mshots/v1/https%3A%2F%2Fnakarmisewingmachines.com?w=600', text: 'E-commerce storefront for sewing machines with a seamless shopping experience.', technologies: ['WordPress', 'WooCommerce', 'PHP'] },
  { title: 'HiLife Nepal', website: 'https://hilifefoods.com.np/', image: '/assets/images/mockups/mockup4.jfif', thumbnail: 'https://s.wordpress.com/mshots/v1/https%3A%2F%2Fhilifefoods.com.np?w=600', text: 'Food brand platform showcasing products and expanding the brand online.', technologies: ['WordPress', 'WooCommerce', 'PHP'] },
  { title: 'Buddha Lumbini Treks', website: 'https://buddhalumbinitreks.com/', image: '/assets/images/mockups/mockup5.jpg', thumbnail: 'https://s.wordpress.com/mshots/v1/https%3A%2F%2Fbuddhalumbinitreks.com?w=600', text: 'Travel and trekking website with tour packages and booking enquiries.', technologies: ['WordPress', 'PHP', 'Cloudflare'] },
  { title: 'Ace Accounting', website: 'https://www.aceaccounting.co.nz/', image: '/assets/images/mockups/mockup6.jpg', thumbnail: 'https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.aceaccounting.co.nz?w=600', text: 'Accounting services website built for clarity, trust and client conversion.', technologies: ['Next.js', 'TypeScript', 'Node.js'] },
]

const clientLogos = [
  { name: 'Local Infrastructure Development Department', image: '/assets/images/clients/local-infrastructure-development-department.png' },
  { name: 'HiLife Nepal', image: '/assets/images/clients/hilife.png', website: 'https://hilifefoods.com.np/' },
  { name: 'Sewa Bazar', image: '/assets/images/clients/sewa-bazar.png' },
  { name: 'Moonstone', image: '/assets/images/clients/moonstone.png' },
  { name: 'Biogenic HealthTech', image: '/assets/images/clients/biogenic-healthtech.png' },
  { name: 'Redwood Groups', image: '/assets/images/clients/redwood.png' },
  { name: 'Centrum', image: '/assets/images/clients/centrum.png' },
  { name: 'Next Gen', image: '/assets/images/clients/next-gen.svg' },
  { name: 'Buddha Lumbini Treks', website: 'https://buddhalumbinitreks.com/', large: true, logoOnly: true, tallLogo: true },
  { name: 'Nakarmi Sewing Machines', image: '/assets/images/clients/nakarmi.png', website: 'https://nakarmisewingmachines.com/', large: true, darkLogo: true },
  { name: 'Sahara Nepal', image: '/assets/images/clients/sahara-nepal.png', website: 'https://www.saharanepal.org/', large: true },
  { name: 'Ace Accounting', website: 'https://www.aceaccounting.co.nz/', large: true, logoOnly: true },
  { name: 'Clean Sewa', image: '/assets/images/clients/clean-sewa.png', website: 'https://cleansewa.com/', large: true },
  { name: 'Himalayan Java', image: '/assets/images/clients/himalayan-java.png', large: true },
  { name: 'Arthako', image: '/assets/images/clients/arthako.png', website: 'https://app.arthako.com/' },
]

const TechnologyPill = ({ technology }) => (
  <div className="flex shrink-0 items-center gap-2 rounded-full border border-ink/10 bg-white px-3 py-1.5 shadow-sm">
    <div className="grid h-4 w-4 place-items-center">
      <img src={technology.image} alt="" className="max-h-4 max-w-4 object-contain" onError={(event) => { event.currentTarget.classList.add('hidden'); event.currentTarget.nextElementSibling.classList.remove('hidden') }} />
      <span className="hidden text-xs font-extrabold text-sky" aria-hidden="true">{technology.mark}</span>
    </div>
    <span className="body-copy text-xs font-semibold">{technology.name}</span>
  </div>
)

function App() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeStory, setActiveStory] = useState(0)
  const [activeProcess, setActiveProcess] = useState(0)
  const story = successStories[activeStory]
  const processStep = workProcess[activeProcess]

  useEffect(() => {
    const updateNavigation = () => setIsScrolled(window.scrollY > 28)
    updateNavigation()
    window.addEventListener('scroll', updateNavigation, { passive: true })
    return () => window.removeEventListener('scroll', updateNavigation)
  }, [])

  return (
    <div className="overflow-x-hidden">
      <header className={`inset-x-0 z-50 transition-all duration-300 ${isScrolled ? 'fixed top-3' : 'absolute top-0'}`}>
        <div className={`mx-auto flex items-center justify-between px-6 lg:px-8 ${isScrolled ? 'nav-pill h-16 max-w-6xl rounded-full border border-black/10 bg-white/70 shadow-soft backdrop-blur-xl' : 'section-wrap h-24'}`}>
          <a href="#home" className="flex items-center gap-3 text-ink" aria-label="Tech Services Alliance home">
            <img src="/assets/images/tsa.png" alt="Tech Services Alliance" className={`h-16 w-auto object-contain ${isScrolled ? '' : 'brightness-0 invert'}`} />
          </a>
          <div className="ml-auto flex items-center gap-6"><nav className={`hidden items-center gap-8 text-sm font-semibold md:flex ${isScrolled ? 'text-ink/80' : 'text-white/80'}`} aria-label="Main navigation">
              <a href="#products" className="transition hover:text-[#d65b55]">Products</a>
              <div className="group relative"><a href="#services" className="inline-flex items-center gap-1.5 transition hover:text-[#d65b55]">Services <span className="text-[10px] leading-none">▾</span></a><div className="invisible absolute left-0 top-full z-50 w-64 pt-3 opacity-0 transition group-hover:visible group-hover:opacity-100"><div className="rounded-[12px] border border-ink/10 bg-white p-2 text-ink shadow-soft">{services.map((service) => <a key={service.number} href="#services" className="block rounded-[8px] px-3 py-2 text-sm font-semibold transition hover:bg-[#F8F9FC] hover:text-[#d65b55]">{service.title}</a>)}</div></div></div>
              <a href="#portfolio" className="transition hover:text-[#d65b55]">Portfolio</a>
              <a href="#company" className="transition hover:text-[#d65b55]">Company</a>
              <Link to="/blogs" className="transition hover:text-[#d65b55]">Blogs</Link>
            </nav><Link to="/contact" className="rounded-full bg-[#d65b55] px-5 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-[#305aa1] hover:text-white">Let's talk</Link></div>
        </div>
      </header>

      <main>
        <section id="home" className="relative overflow-hidden bg-[linear-gradient(125deg,#000000_0%,#0E0F12_60%,#17191E_100%)] pt-32 text-white">
          <div className="pointer-events-none absolute -left-40 top-12 h-96 w-96 rounded-full bg-[#7AD5FF]/15 blur-3xl" /><div className="pointer-events-none absolute -right-32 bottom-0 h-[440px] w-[440px] rounded-full bg-[#8FB9FF]/25 blur-3xl" />
          <div className="section-wrap relative flex min-h-[600px] items-end pb-32 lg:pb-36">
            <div>
              <h1 className="max-w-5xl text-5xl font-extrabold leading-[1.04] tracking-tight text-white sm:text-6xl lg:text-7xl">We are Innovative Technology <TypewriterText words={['innovators.', 'partners in digital transformation.', 'a leading IT company in Nepal.']} className="typewriter-hero text-[#d65b55]" /></h1>
              <p className="mt-7 max-w-xl text-lg leading-8 text-white/75">Tech Services Alliance helps organisations across Nepal build secure, connected and future-ready digital operations.</p>
              <div className="mt-10 flex flex-wrap gap-4"><a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#d65b55] px-6 py-3.5 text-sm font-extrabold text-white transition hover:bg-[#305aa1] hover:text-white">Start a conversation <ArrowUpRight /></a><a href="#services" className="inline-flex items-center justify-center rounded-full border border-white/35 bg-white/5 px-6 py-3.5 text-sm font-extrabold text-white backdrop-blur-sm transition hover:bg-[#305aa1] hover:text-white">Explore services</a></div>
            </div>
            <div className="hidden" aria-hidden="true">
              <div className="col-span-2 rounded-[20px] border border-ink/10 bg-white/80 p-5 backdrop-blur-sm"><p className="font-mono text-xs uppercase tracking-wider text-sky">Your trusted tech partner</p><p className="mt-3 text-2xl font-bold leading-tight">Local understanding.<br />Global standards.</p></div>
              <div className="rounded-[20px] bg-sky p-5 text-white"><p className="text-3xl font-extrabold">24/7</p><p className="mt-1 text-sm font-bold">Support readiness</p></div>
              <div className="rounded-[20px] bg-white p-5 text-ink"><p className="text-3xl font-extrabold">360°</p><p className="mt-1 text-sm font-bold">IT partnership</p></div>
            </div>
          </div>
        </section>

        <section aria-label="Technologies used" className="overflow-hidden bg-[#F8F9FC] py-[30px]">
          <div className="section-wrap">
            <div className="mb-5"><p className="eyebrow">Our Technologies</p></div>
            <div className="tech-marquee-fade overflow-hidden">
              <div className="overflow-hidden py-1"><div className="tech-marquee flex w-max gap-2">{[...technologies, ...technologies].map((technology, index) => <TechnologyPill key={`first-${technology.name}-${index}`} technology={technology} />)}</div></div>
              <div className="mt-2 overflow-hidden py-1"><div className="tech-marquee-reverse flex w-max gap-2">{[...secondTechnologyRow, ...secondTechnologyRow].map((technology, index) => <TechnologyPill key={`second-${technology.name}-${index}`} technology={technology} />)}</div></div>
            </div>
          </div>
        </section>

        <section id="services" className="section-wrap py-[60px]">
          <div className="max-w-2xl"><p className="eyebrow">What We Do</p><h2 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">Digital services made to move business forward.</h2><p className="body-copy mt-6 max-w-xl leading-7">From an early idea to a high-performing digital product, our team combines strategy, technology and design around what matters most to your business.</p></div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{services.map((service) => <article key={service.number} className="group relative min-h-[370px] overflow-hidden rounded-[24px] bg-ink p-6 text-white shadow-soft sm:p-7"><img src={service.image} alt="" className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" /><div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.08)_15%,rgba(0,0,0,.9)_100%)]" /><div className="relative flex h-full flex-col"><div className="flex justify-end"><span className="grid h-10 w-10 place-items-center rounded-full bg-white text-ink transition group-hover:bg-[#d65b55] group-hover:text-white"><ArrowUpRight /></span></div><div className="mt-auto"><h3 className="text-2xl font-extrabold tracking-tight text-white">{service.title}</h3><p className="mt-3 max-w-sm text-sm font-medium leading-6 text-white/80">{service.text}</p></div></div></article>)}</div>
          <a href="#contact" className="mt-10 inline-flex items-center gap-2 rounded-full border border-ink px-5 py-2.5 text-sm font-bold text-ink">Talk about your project <ArrowUpRight /></a>
        </section>

        <section id="process" className="relative bg-[linear-gradient(125deg,#000000_0%,#0E0F12_60%,#17191E_100%)] py-[60px] text-white">
          <div className="section-wrap">
            <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-start"><div><p className="eyebrow">Our Working Process</p><h2 className="mt-4 max-w-2xl text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">A clear path from idea to impact.</h2></div><div className="flex gap-3"><button type="button" onClick={() => setActiveProcess((activeProcess - 1 + workProcess.length) % workProcess.length)} className="grid h-12 w-12 place-items-center rounded-xl bg-white/15 text-xl transition hover:bg-[#d65b55]" aria-label="Previous process step">←</button><button type="button" onClick={() => setActiveProcess((activeProcess + 1) % workProcess.length)} className="grid h-12 w-12 place-items-center rounded-xl bg-white/15 text-xl transition hover:bg-[#d65b55]" aria-label="Next process step">→</button></div></div>
            <div className="process-timeline mt-14">
              <div className="process-active-grid"><div key={`detail-${processStep.number}`} className="process-detail max-w-xl"><h3 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">{processStep.title}</h3><p className="mt-3 leading-7 text-white/75">{processStep.text}</p></div><div className="hidden self-end text-sm leading-7 text-white/60 lg:block">A collaborative, transparent process<br />built around your business goals.</div></div>
              <div className="relative -mx-5 mt-10 overflow-x-auto px-5 pb-6"><div className="relative min-w-[720px] pt-7"><div className="absolute left-0 right-0 top-[44px] h-px bg-white/30" /><div className="relative grid grid-cols-6">{workProcess.map((step, index) => <button key={step.number} type="button" onClick={() => setActiveProcess(index)} className="group relative text-left" aria-current={index === activeProcess ? 'step' : undefined}><span className={`process-node relative z-10 block h-8 w-8 rounded-full border-2 transition ${index === activeProcess ? 'process-node-active border-[#d65b55] bg-[#d65b55]' : 'border-[#C9CED6] bg-[#9AA2AD] group-hover:border-white group-hover:bg-white'}`} /><span className={`mt-5 block pr-4 text-base font-bold transition ${index === activeProcess ? 'text-white' : 'text-white/50 group-hover:text-white/85'}`}>{step.title}</span></button>)}</div></div></div>
            </div>
          </div>
        </section>

        <section id="success-stories" className="bg-[#F8F9FC] py-[60px]">
          <div className="section-wrap">
            <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="eyebrow">Customer Success Stories</p><h2 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">Technology with a<br className="hidden sm:block" /> measurable difference.</h2></div><p className="max-w-sm leading-7 text-slate-600">The best measure of our work is the momentum it gives to the people and organisations we support.</p></div>
            <article className="overflow-hidden rounded-[28px] bg-white lg:grid lg:grid-cols-[1.05fr_.95fr]">
              <div className="flex min-h-[430px] flex-col p-7 sm:p-10 lg:p-12"><div><p className="text-2xl font-extrabold tracking-tight text-ink">{story.company}</p><p className="mt-1 text-sm font-semibold text-[#d65b55]">{story.category}</p></div><blockquote className="mt-10 max-w-xl text-xl font-bold leading-8 tracking-tight text-ink sm:text-2xl sm:leading-9">{story.quote}</blockquote><p className="mt-6 text-sm font-semibold text-slate-600">{story.person}</p><a href="#contact" className="mt-7 inline-flex w-fit items-center gap-2 border-b border-ink pb-1 text-sm font-extrabold text-ink">Discuss a similar project <ArrowUpRight /></a><div className="mt-auto flex items-center gap-4 pt-10" aria-label="Customer success stories navigation"><button type="button" onClick={() => setActiveStory((activeStory - 1 + successStories.length) % successStories.length)} className="grid h-12 w-12 place-items-center rounded-full bg-white text-lg font-bold text-ink transition hover:bg-ink hover:text-white" aria-label="Previous story">←</button><div className="flex gap-2">{successStories.map((item, index) => <button key={item.company} type="button" onClick={() => setActiveStory(index)} className={`h-2 rounded-full transition-all ${index === activeStory ? 'w-6 bg-[#d65b55]' : 'w-2 bg-ink/20 hover:bg-ink/40'}`} aria-label={`Show ${item.company} success story`} aria-current={index === activeStory ? 'true' : undefined} />)}</div><button type="button" onClick={() => setActiveStory((activeStory + 1) % successStories.length)} className="grid h-12 w-12 place-items-center rounded-full bg-white text-lg font-bold text-ink transition hover:bg-ink hover:text-white" aria-label="Next story">→</button></div></div>
              <div className="relative min-h-[430px] overflow-hidden bg-[#F8F9FC]"><img src={story.image} alt={`${story.company} website`} className="absolute inset-0 h-full w-full object-cover object-top" loading="lazy" onError={(event) => event.currentTarget.classList.add('hidden')} /></div>
            </article>
            <div aria-label="Trusted client logos" className="mt-6 overflow-hidden rounded-[28px] bg-white py-10 sm:py-12">
              <div className="px-6 text-center sm:px-10"><p className="eyebrow">Trusted By</p><h3 className="mt-3 text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">Trusted by over 500+ businesses around the world</h3></div>
              <div className="mt-8 grid grid-cols-2 border-t border-ink/10 sm:mt-10 sm:grid-cols-3 lg:grid-cols-5">{clientLogos.map((client) => <div key={client.name} className="group flex min-h-[112px] items-center justify-center border-b border-r border-ink/10 bg-white px-5 py-6 sm:min-h-[130px]"><div className="flex w-full items-center justify-center gap-3">{client.image ? <img src={client.image} alt={client.name} className={`max-w-full object-contain ${client.darkLogo ? 'bg-black p-3' : 'mix-blend-multiply'} ${client.large ? 'max-h-20' : 'max-h-16'}`} loading="lazy" /> : client.logoOnly ? <img src={`https://www.google.com/s2/favicons?domain=${encodeURIComponent(client.website)}&sz=128`} alt={client.name} className={`shrink-0 object-contain ${client.tallLogo ? 'h-16 w-16' : client.large ? 'h-14 w-14' : 'h-10 w-10'}`} loading="lazy" /> : <><img src={`https://www.google.com/s2/favicons?domain=${encodeURIComponent(client.website)}&sz=128`} alt="" className={`shrink-0 object-contain ${client.large ? 'h-12 w-12' : 'h-8 w-8'}`} loading="lazy" /><span className={`text-center font-extrabold tracking-tight text-[#d65b55] ${client.large ? 'text-base' : 'text-sm'}`}>{client.name}</span></>}</div></div>)}</div>
            </div>
          </div>
        </section>

<section id="portfolio" className="overflow-hidden bg-white py-[60px]">
  <div className="section-wrap">
    <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end"><div><p className="eyebrow">Our Portfolio</p><h2 className="mt-4 max-w-2xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">Completed projects that move business forward.</h2><a href="#contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-extrabold text-white transition hover:bg-[#305aa1] hover:text-white">Explore more projects <ArrowUpRight /></a></div></div>
  </div>
  <div className="tech-marquee-fade mt-14 overflow-hidden"><div className="overflow-hidden py-1"><div className="portfolio-marquee flex w-max gap-6">{[...portfolio, ...portfolio].map((project, index) => <article key={`${project.title}-${index}`} className="group w-[280px] shrink-0 sm:w-[340px] lg:w-[380px]"><a href={project.website} target="_blank" rel="noreferrer" className="block" aria-label={`View ${project.title}`}><div className="portfolio-art overflow-hidden rounded-t-[20px]"><img src={project.image || project.thumbnail} alt={`${project.title} website`} className="aspect-[3/2] w-full object-cover object-top" loading="lazy" onError={(event) => event.currentTarget.classList.add('hidden')} /></div><div className="mt-4"><h3 className="text-xl font-extrabold leading-8 tracking-tight text-ink sm:text-2xl">{project.title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{project.text}</p><div className="mt-4 flex flex-wrap gap-2">{project.technologies.map((technology) => <span key={technology} className="rounded-full border border-ink/10 bg-[#F8F9FC] px-3 py-1 text-xs font-semibold text-ink">{technology}</span>)}</div></div></a></article>)}</div></div></div>
</section>

        <section id="insights" className="bg-[#F8F9FC] py-[60px]">
          <div className="section-wrap">
            <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end"><div><p className="eyebrow">Insights & Resources</p><h2 className="mt-4 max-w-2xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">Practical ideas for a smarter technology future.</h2></div><p className="max-w-sm leading-7 text-slate-600">Clear advice, fresh perspectives and useful updates from the TSA team.</p></div>
            <div className="mt-14 grid gap-8 md:grid-cols-3">{blogPosts.map((post) => <article key={post.slug} className="group"><Link to={`/blog/${post.slug}`} className="block" aria-label={`Read ${post.title}`}><div className="blog-art relative aspect-[1.24] overflow-hidden rounded-[20px] transition duration-300 group-hover:-translate-y-1"><img src={post.image} alt="" className="absolute inset-0 h-full w-full object-cover" loading="lazy" /><span className="absolute left-6 top-6 z-10 rounded-full border border-white/25 bg-white/20 px-3 py-1 text-[10px] font-bold uppercase tracking-widest">TSA Journal</span></div></Link><div className="mt-5 flex items-center gap-2 text-xs font-bold"><span className="text-[#305aa1]">{post.category}</span><span className="text-lime">•</span><span className="text-ink/60">{post.date}</span></div><h3 className="mt-4 text-xl font-extrabold leading-8 tracking-tight text-ink sm:text-2xl"><Link to={`/blog/${post.slug}`} className="transition group-hover:text-[#d65b55]">{post.title}</Link></h3><Link to={`/blog/${post.slug}`} className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-[#d65b55]">Read article <ArrowUpRight /></Link></article>)}</div>
            <div className="mt-14 text-center"><a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-extrabold text-white transition hover:bg-[#305aa1] hover:text-white">Explore all insights <ArrowUpRight /></a></div>
          </div>
        </section>

        <section id="contact" className="px-4 py-[60px]">
          <div className="section-card section-wrap relative overflow-hidden rounded-[28px] bg-[linear-gradient(125deg,#000000_0%,#0E0F12_60%,#17191E_100%)] px-7 py-16 text-white sm:px-12 sm:py-20 lg:px-16">
            <div className="absolute -right-20 -top-28 h-[420px] w-[420px] rounded-full border-[44px] border-white/10" /><div className="absolute right-14 top-12 hidden h-28 w-28 rounded-[32px] border border-white/25 bg-white/10 lg:block" />
            <div className="relative max-w-2xl"><p className="eyebrow">Start Your Next Project</p><h2 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">Submit your project and get free quotes in 1-hour</h2><p className="mt-6 max-w-xl text-lg leading-8 text-white/85">Let’s discuss how our resource augmentation and AI-powered development can accelerate your project delivery.</p><a href="https://calendly.com/meeting-brainstation-23/30min?bs23_visitor_id=BS23_zhOiqfYmDW2yeo&utm_content=BS23_zhOiqfYmDW2yeo" target="_blank" rel="noreferrer" className="mt-9 inline-flex items-center gap-3 rounded-full bg-white px-7 py-3.5 text-sm font-extrabold text-[#d65b55] shadow-soft transition hover:bg-[#305aa1] hover:text-white">Schedule a Call <ArrowUpRight /></a></div>
          </div>
        </section>
      </main>

      <footer className="bg-[#d65b55]"><div className="rounded-b-[25px] bg-ink px-4 pb-12 pt-14 text-white"><div className="section-wrap"><div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4"><div><img src="/assets/images/tsa.png" alt="Tech Services Alliance" className="h-24 w-auto object-contain brightness-0 invert" /></div><div><p className="text-[18px] font-bold uppercase tracking-widest text-white/40">Menu</p><div className="mt-6 space-y-3 text-base text-white/70"><Link to="/" className="block transition hover:text-white">Home</Link><Link to="/#services" className="block transition hover:text-white">Services</Link><Link to="/#portfolio" className="block transition hover:text-white">Portfolio</Link><Link to="/blogs" className="block transition hover:text-white">Blogs</Link><Link to="/contact" className="block transition hover:text-white">Contact</Link></div></div><div><p className="text-[18px] font-bold uppercase tracking-widest text-white/40">Services</p><div className="mt-6 space-y-3 text-base text-white/70">{services.map((service) => <Link key={service.number} to="/#services" className="block transition hover:text-white">{service.title}</Link>)}</div></div><div><p className="text-[18px] font-bold uppercase tracking-widest text-white/40">Contact</p><div className="mt-6 space-y-3 text-base text-white/70"><a className="block transition hover:text-white" href="mailto:info@techservicesalliance.com.np">info@techservicesalliance.com.np</a><p>Tutepani, Lalitpur</p><a className="block transition hover:text-white" href="tel:+9779846014430">9846014430</a></div></div></div></div></div><div className="bg-[#d65b55] px-4 py-6 text-white"><div className="section-wrap flex flex-col gap-3 text-xs sm:flex-row sm:justify-between"><p>© 2026 Tech Services Alliance. All rights reserved.</p><p>Technology solutions for modern organisations.</p></div></div></footer>
    </div>
  )
}

export default App
