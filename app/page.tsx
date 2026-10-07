"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";

type IconName =
  | "arrow"
  | "bars"
  | "bridge"
  | "briefcase"
  | "building"
  | "chart"
  | "check"
  | "globe"
  | "leaf"
  | "menu"
  | "oil"
  | "ship"
  | "trade"
  | "x";

const iconPaths: Record<IconName, React.ReactNode> = {
  arrow: <><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></>,
  bars: <><path d="M4 20V10"/><path d="M10 20V4"/><path d="M16 20v-7"/><path d="M22 20H2"/></>,
  bridge: <><path d="M3 19h18"/><path d="M5 19V8"/><path d="M19 19V8"/><path d="M5 10c4 0 4-5 7-5s3 5 7 5"/><path d="M8 19v-5M12 19v-7M16 19v-5"/></>,
  briefcase: <><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5c0-1 1-2 2-2h4c1 0 2 1 2 2v2M3 12h18M10 12v2h4v-2"/></>,
  building: <><path d="M4 21V8l8-4 8 4v13"/><path d="M9 21v-5h6v5M8 10h.01M12 10h.01M16 10h.01M8 13h.01M12 13h.01M16 13h.01"/></>,
  chart: <><path d="M3 3v18h18"/><path d="m7 16 4-5 3 3 5-7"/><path d="M16 7h3v3"/></>,
  check: <path d="m5 12 4 4L19 6"/>,
  globe: <><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/></>,
  leaf: <><path d="M20 4C11 4 5 8 5 15c0 3 2 5 5 5 7 0 10-7 10-16Z"/><path d="M4 21c3-6 7-9 13-12"/></>,
  menu: <><path d="M4 7h16M4 12h16M4 17h16"/></>,
  oil: <><path d="M6 21h12M8 21l2-15h4l2 15M9 12h6M8 17h8M12 6V3M16 7l3 2v5"/><path d="M19 14c-2 2-2 4 0 5 2-1 2-3 0-5Z"/></>,
  ship: <><path d="m3 15 3 5h12l3-5H3Z"/><path d="M6 15V8h9l3 7M9 8V4h5v4M2 22c2-1 3-1 5 0 2-1 3-1 5 0 2-1 3-1 5 0 2-1 3-1 5 0"/></>,
  trade: <><path d="M7 7h12l-3-3M17 17H5l3 3"/><path d="M19 7v4M5 17v-4"/></>,
  x: <><path d="M6 6l12 12M18 6 6 18"/></>,
};

function Icon({ name, size = 24 }: { name: IconName; size?: number }) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      {iconPaths[name]}
    </svg>
  );
}

const services: { icon: IconName; number: string; title: string; text: string }[] = [
  { icon: "chart", number: "01", title: "Investment Matchmaking", text: "Connecting credible investors with high-potential opportunities, sponsors and strategic partners." },
  { icon: "trade", number: "02", title: "Trade Finance Facilitation", text: "Structuring pathways to finance for complex cross-border trade and commodity transactions." },
  { icon: "oil", number: "03", title: "Oil & Gas Consultancy", text: "Commercial and strategic advisory across the energy value chain, from opportunity to execution." },
  { icon: "ship", number: "04", title: "International Trade", text: "Facilitating trusted market access, transactions and partnerships across international corridors." },
  { icon: "bars", number: "05", title: "Commodities Advisory", text: "Commercial insight and transaction support for energy, mineral and agricultural commodities." },
  { icon: "leaf", number: "06", title: "Carbon Markets", text: "Helping organizations navigate carbon opportunities and the transition to lower-emission growth." },
  { icon: "bridge", number: "07", title: "Vessel Leasing", text: "Connecting operators with fit-for-purpose marine assets and commercially sound leasing solutions." },
  { icon: "briefcase", number: "08", title: "Strategic Business Development", text: "Helping organizations enter markets, shape partnerships and convert strategic intent into growth." },
  { icon: "building", number: "09", title: "Public Sector Advisory", text: "Strategy, transformation and investment support for governments and public-sector organizations." },
];

const industries = [
  { title: "Energy & Natural Resources", icon: "oil" as IconName },
  { title: "Infrastructure", icon: "bridge" as IconName },
  { title: "Trade & Commodities", icon: "trade" as IconName },
  { title: "Financial Services", icon: "chart" as IconName },
  { title: "Government & Public Sector", icon: "building" as IconName },
  { title: "Maritime & Logistics", icon: "ship" as IconName },
];

const insights = [
  { tag: "ENERGY", date: "Perspective", title: "Unlocking value across Africa’s evolving energy landscape", text: "Where disciplined capital, local insight and strategic partnership can accelerate bankable outcomes." },
  { tag: "TRADE", date: "Briefing", title: "Making complex cross-border transactions investable", text: "The essential role of credible counterparties, risk alignment and fit-for-purpose finance." },
  { tag: "PUBLIC SECTOR", date: "Outlook", title: "Building public-private partnerships that endure", text: "A practical framework for aligning public priorities with long-term private investment." },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    event.currentTarget.reset();
    setSubmitted(true);
  }

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "OKEFF Integrated Limited",
            url: "https://www.okeff.com",
            email: "info@okeff.com",
            areaServed: ["Canada", "Nigeria", "Africa"],
            knowsAbout: [
              "Investment Facilitation",
              "Trade Finance",
              "Oil and Gas Consultancy",
              "International Trade",
              "Public Sector Advisory",
            ],
          }),
        }}
      />
      <header className="site-header">
        <a className="brand" href="#top" aria-label="OKEFF Integrated Limited home">
          <Image src="/okeff-logo.png" alt="OKEFF Integrated Limited" width={72} height={72} priority />
          <span className="brand-copy"><strong>OKEFF</strong><small>INTEGRATED LIMITED</small></span>
        </a>
        <nav className={menuOpen ? "nav-links open" : "nav-links"} aria-label="Main navigation">
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#industries" onClick={() => setMenuOpen(false)}>Industries</a>
          <a href="#presence" onClick={() => setMenuOpen(false)}>Experience</a>
          <a href="#insights" onClick={() => setMenuOpen(false)}>Insights</a>
          <a className="nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>Start a conversation <Icon name="arrow" size={16} /></a>
        </nav>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}>
          <Icon name={menuOpen ? "x" : "menu"} />
        </button>
      </header>

      <section className="hero" id="top">
        <Image className="hero-image" src="/okeff-hero.png" alt="Energy platform, cargo vessel and port city at sunrise" fill priority sizes="100vw" />
        <div className="hero-shade" />
        <div className="hero-grid" aria-hidden="true" />
        <div className="shell hero-inner">
          <p className="eyebrow light"><span />INTEGRITY · STRATEGY · GROWTH · IMPACT</p>
          <h1>Connecting capital<br />to <em>opportunity.</em></h1>
          <p className="hero-lede">We help governments, investors and businesses navigate complex markets, build strategic partnerships and create enduring value.</p>
          <div className="hero-actions">
            <a className="button gold" href="#services">Explore our expertise <Icon name="arrow" size={18} /></a>
            <a className="button ghost" href="#about">Discover OKEFF</a>
          </div>
        </div>
        <div className="hero-index"><span>01</span><i /><span>04</span></div>
        <a className="scroll-cue" href="#intro"><span>SCROLL TO DISCOVER</span><i /></a>
      </section>

      <section className="trust-strip" id="intro">
        <div className="shell trust-inner">
          <p>Trusted perspective across</p>
          <div><strong>2</strong><span>Global<br />Markets</span></div>
          <div><strong>9</strong><span>Integrated<br />Services</span></div>
          <div><strong>6</strong><span>Strategic<br />Industries</span></div>
          <div className="trust-mark"><Icon name="globe" size={30} /><span>LOCAL INSIGHT<br />GLOBAL REACH</span></div>
        </div>
      </section>

      <section className="section about" id="about">
        <div className="shell two-col">
          <div className="section-intro reveal">
            <p className="eyebrow"><span />WHO WE ARE</p>
            <h2>Strategy grounded in insight. <em>Partnerships built to last.</em></h2>
          </div>
          <div className="about-copy reveal">
            <p className="lead">OKEFF Integrated Limited is a premium international advisory and investment facilitation company bridging opportunity, capital and execution.</p>
            <p>We work at the intersection of business, government and finance—bringing the local intelligence, global relationships and commercial discipline required to move ambitious opportunities forward.</p>
            <a className="text-link" href="#contact">More about OKEFF <Icon name="arrow" size={18} /></a>
          </div>
        </div>
        <div className="shell values-row">
          {["Integrity in every engagement", "Strategy with commercial clarity", "Growth through partnership", "Impact that endures"].map((item, i) => (
            <div className="value" key={item}><span>0{i + 1}</span><p>{item}</p></div>
          ))}
        </div>
      </section>

      <section className="section services" id="services">
        <div className="shell services-heading">
          <div>
            <p className="eyebrow light"><span />WHAT WE DO</p>
            <h2>Expertise that moves<br /><em>opportunity forward.</em></h2>
          </div>
          <p>Integrated advisory and facilitation capabilities designed for high-stakes decisions and complex transactions.</p>
        </div>
        <div className="shell service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <div className="card-top"><span>{service.number}</span><Icon name={service.icon} size={31} /></div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <a href="#contact" aria-label={`Discuss ${service.title}`}><Icon name="arrow" size={20} /></a>
            </article>
          ))}
        </div>
      </section>

      <section className="section industries" id="industries">
        <div className="shell">
          <div className="center-heading">
            <p className="eyebrow"><span />INDUSTRIES</p>
            <h2>Deep sector perspective.<br /><em>Connected thinking.</em></h2>
            <p>We focus on sectors that shape economies, enable growth and create long-term value.</p>
          </div>
          <div className="industry-grid">
            {industries.map((industry, index) => (
              <a className="industry-card" href="#contact" key={industry.title}>
                <span className="industry-number">0{index + 1}</span>
                <Icon name={industry.icon} size={34} />
                <h3>{industry.title}</h3>
                <span className="circle-arrow"><Icon name="arrow" size={18} /></span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="presence" id="presence">
        <div className="shell presence-grid">
          <div className="presence-copy">
            <p className="eyebrow light"><span />GLOBAL PRESENCE</p>
            <h2>Local intelligence.<br /><em>Global ambition.</em></h2>
            <p>With a presence in Canada and Nigeria, we connect international capital and capability with opportunity across Africa and beyond.</p>
            <div className="office-list">
              <div><i /><span><small>CANADA OFFICE</small>North American relationships and global access</span></div>
              <div><i /><span><small>NIGERIA OFFICE</small>Local insight and African market execution</span></div>
            </div>
          </div>
          <div className="map-panel" aria-label="Map showing OKEFF presence in Canada and Nigeria">
            <svg viewBox="0 0 800 430" role="img" aria-hidden="true">
              <path className="world" d="M73 96l58-37 77 1 50 42-23 39-59 6-22 26-46-15-29-30zm235 5 44-23 53 15 17 28-35 31-26 65-20 11-27-51-38-31zm119 91 45-51 62-7 41 32 14 68 53 50-39 51-63-14-43-56-48 8-42-43zm164-106 49-26 88 20 17 40-68 18-46-21z" />
              <path className="route" d="M157 100C255 62 385 95 466 231" />
              <circle className="pulse" cx="157" cy="100" r="17" /><circle className="dot" cx="157" cy="100" r="6" />
              <circle className="pulse" cx="466" cy="231" r="17" /><circle className="dot" cx="466" cy="231" r="6" />
              <text x="120" y="80">CANADA</text><text x="479" y="255">NIGERIA</text>
            </svg>
          </div>
        </div>
      </section>

      <section className="section why">
        <div className="shell why-grid">
          <div>
            <p className="eyebrow"><span />WHY OKEFF</p>
            <h2>Clarity for complexity.<br /><em>Confidence to act.</em></h2>
            <p className="why-lede">We combine strategic thinking with the relationships and practical judgment needed to unlock progress.</p>
          </div>
          <div className="why-list">
            {[
              ["01", "Trusted relationships", "A carefully built network spanning investors, institutions, operators and public-sector leaders."],
              ["02", "Cross-market perspective", "International standards paired with grounded understanding of local markets and realities."],
              ["03", "Integrated execution", "Advice that goes beyond recommendations to help align stakeholders and move initiatives forward."],
              ["04", "Long-term value", "Partnerships and solutions designed for resilient growth, shared benefit and measurable impact."],
            ].map(([n, title, text]) => (
              <article key={n}><span>{n}</span><div><h3>{title}</h3><p>{text}</p></div><Icon name="check" size={22} /></article>
            ))}
          </div>
        </div>
      </section>

      <section className="section insights" id="insights">
        <div className="shell">
          <div className="insights-title">
            <div><p className="eyebrow light"><span />PERSPECTIVES</p><h2>Insight for a changing world.</h2></div>
            <a className="text-link light-link" href="#contact">View all insights <Icon name="arrow" size={18} /></a>
          </div>
          <div className="insight-grid">
            {insights.map((post, i) => (
              <article className="insight-card" key={post.title}>
                <div className={`insight-visual visual-${i + 1}`}><Icon name={i === 0 ? "oil" : i === 1 ? "ship" : "building"} size={52} /><span>OKEFF / 0{i + 1}</span></div>
                <div className="insight-body"><small>{post.tag} <i /> {post.date}</small><h3>{post.title}</h3><p>{post.text}</p><a href="#contact" aria-label={`Read ${post.title}`}><Icon name="arrow" size={18} /></a></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="shell contact-grid">
          <div>
            <p className="eyebrow"><span />START A CONVERSATION</p>
            <h2>Let’s build what<br /><em>comes next.</em></h2>
            <p>Tell us about the opportunity, market or challenge you are navigating. Our team will respond with a clear next step.</p>
            <a href="mailto:info@okeff.com" className="contact-email">info@okeff.com <Icon name="arrow" size={19} /></a>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <label><span>Name *</span><input name="name" required placeholder="Your full name" /></label>
            <label><span>Company</span><input name="company" placeholder="Organization name" /></label>
            <label><span>Email *</span><input type="email" name="email" required placeholder="name@company.com" /></label>
            <label><span>Phone</span><input type="tel" name="phone" placeholder="Phone number" /></label>
            <label className="full"><span>Country</span><input name="country" placeholder="Country" /></label>
            <label className="full"><span>Service required</span><select name="service" defaultValue=""><option value="" disabled>Select a service</option>{services.map(s => <option key={s.title}>{s.title}</option>)}</select></label>
            <label className="full"><span>Message *</span><textarea name="message" required rows={4} placeholder="Tell us briefly about your objectives" /></label>
            <button className="button primary" type="submit">Send enquiry <Icon name="arrow" size={18} /></button>
            {submitted && <p className="form-success" role="status">Thank you. Your enquiry has been noted and the OKEFF team will be in touch.</p>}
          </form>
        </div>
      </section>

      <footer>
        <div className="shell footer-main">
          <div className="footer-brand"><Image src="/okeff-logo.png" alt="OKEFF Integrated Limited" width={110} height={110} /><p>Rooted in faith. Driven by excellence.<br />Committed to impact.</p></div>
          <div><h4>Company</h4><a href="#about">About OKEFF</a><a href="#presence">Our footprint</a><a href="#insights">Insights</a><a href="#contact">Contact</a></div>
          <div><h4>Expertise</h4><a href="#services">Investment</a><a href="#services">Trade finance</a><a href="#services">Oil & gas</a><a href="#services">Public sector</a></div>
          <div><h4>Offices</h4><p>Canada</p><p>Nigeria</p><a href="mailto:info@okeff.com">info@okeff.com</a></div>
        </div>
        <div className="shell footer-bottom"><span>© {new Date().getFullYear()} OKEFF Integrated Limited. All rights reserved.</span><span>Privacy &nbsp;&nbsp; Terms &nbsp;&nbsp;·&nbsp;&nbsp; Crafted by Zorfts</span></div>
      </footer>
    </main>
  );
}
