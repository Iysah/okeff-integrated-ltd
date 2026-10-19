import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "./_components/cta-band";
import { Icon } from "./_components/icon";
import { approach, coreServices, industries, insights, offices, whyChoose } from "./content";

export default function Home() {
  return (
    <>
      <section className="hero" id="top">
        <Image className="hero-image" src="/okeff-hero.png" alt="Energy platform, cargo vessel and port city at sunrise" fill priority sizes="100vw" />
        <div className="hero-shade" />
        <div className="hero-grid" aria-hidden="true" />
        <div className="shell hero-inner">
          <p className="eyebrow light"><span />INTEGRITY · STRATEGY · GROWTH · IMPACT</p>
          <h1>Connecting Capital. Creating Value. <em>Delivering Impact.</em></h1>
          <p className="hero-lede">OKEFF Integrated Limited is a Canadian-based business advisory and investment facilitation company connecting investors, businesses, financial institutions, project owners and strategic partners with credible opportunities across Canada, Africa and global markets.</p>
          <div className="hero-actions">
            <Link className="button gold" href="/services">Explore Our Services <Icon name="arrow" size={18} /></Link>
            <Link className="button ghost" href="/contact">Contact Our Team</Link>
          </div>
        </div>
        <a className="scroll-cue" href="#intro"><span>SCROLL TO DISCOVER</span><i /></a>
      </section>

      <section className="trust-strip" id="intro">
        <div className="shell trust-inner">
          <p>Advisory and facilitation across</p>
          <div><strong>2</strong><span>Offices<br />Canada · Nigeria</span></div>
          <div><strong>{coreServices.length}</strong><span>Core<br />Services</span></div>
          <div><strong>{industries.length}</strong><span>Industries<br />Served</span></div>
          <div className="trust-mark"><Icon name="globe" size={30} /><span>CANADA · AFRICA<br />GLOBAL MARKETS</span></div>
        </div>
      </section>

      <section className="section about" id="about">
        <div className="shell two-col">
          <div>
            <p className="eyebrow"><span />WHO WE ARE</p>
            <h2>Strategic Connections. Practical Solutions. <em>Long-Term Value.</em></h2>
          </div>
          <div className="about-copy">
            <p className="lead">OKEFF Integrated Limited provides advisory and facilitation services across oil and gas, trade finance, international trade, commodities, carbon markets, vessel leasing and strategic business development, government and public-sector advisory.</p>
            <p>We help clients identify opportunities, develop commercial relationships, connect with suitable investors and financiers, and navigate complex cross-border transactions.</p>
            <p>Our work is built on integrity, professionalism, trusted partnerships and a commitment to sustainable value creation.</p>
            <Link className="text-link" href="/about">Learn More About OKEFF <Icon name="arrow" size={18} /></Link>
          </div>
        </div>
      </section>

      <section className="section services" id="services">
        <div className="shell services-heading">
          <div>
            <p className="eyebrow light"><span />CORE SERVICES</p>
            <h2>Expertise that moves<br /><em>opportunity forward.</em></h2>
          </div>
          <p>Advisory, commercial facilitation and business development support across several interconnected sectors.</p>
        </div>
        <div className="shell service-grid">
          {coreServices.map((service, i) => (
            <article className="service-card" key={service.id}>
              <div className="card-top"><span>{String(i + 1).padStart(2, "0")}</span><Icon name={service.icon} size={31} /></div>
              <h3>{service.title}</h3>
              <p>{service.summary}</p>
              <Link href={`/services#${service.id}`} aria-label={`Learn more about ${service.title}`}><Icon name="arrow" size={20} /></Link>
            </article>
          ))}
        </div>
        <div className="shell services-more">
          <Link className="text-link light-link" href="/services">View All Services <Icon name="arrow" size={18} /></Link>
        </div>
      </section>

      <section className="section why">
        <div className="shell why-grid">
          <div>
            <p className="eyebrow"><span />WHY CHOOSE OKEFF</p>
            <h2>A Trusted Bridge Between <em>Capital and Opportunity</em></h2>
            <Link className="text-link" href="/experience">Our Experience <Icon name="arrow" size={18} /></Link>
          </div>
          <div className="why-list">
            {whyChoose.map((item, i) => (
              <article key={item}><span>{String(i + 1).padStart(2, "0")}</span><div><h3>{item}</h3></div><Icon name="check" size={22} /></article>
            ))}
          </div>
        </div>
      </section>

      <section className="section approach">
        <div className="shell">
          <div className="center-heading">
            <p className="eyebrow"><span />OUR APPROACH</p>
            <h2>From objective to <em>lasting value.</em></h2>
          </div>
          <ol className="approach-grid">
            {approach.map((step, i) => (
              <li key={step.title}><span>{i + 1}</span><h3>{step.title}</h3><p>{step.text}</p></li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section industries" id="industries">
        <div className="shell">
          <div className="center-heading">
            <p className="eyebrow"><span />INDUSTRIES</p>
            <h2>Deep sector perspective.<br /><em>Connected thinking.</em></h2>
          </div>
          <div className="industry-grid compact">
            {industries.map((industry, index) => (
              <Link className="industry-card" href="/industries" key={industry.title}>
                <span className="industry-number">{String(index + 1).padStart(2, "0")}</span>
                <Icon name={industry.icon} size={30} />
                <h3>{industry.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="presence" id="presence">
        <div className="shell presence-grid">
          <div className="presence-copy">
            <p className="eyebrow light"><span />GLOBAL PRESENCE</p>
            <h2>Local intelligence.<br /><em>Global ambition.</em></h2>
            <div className="office-list">
              {offices.map((office) => (
                <div key={office.id}><i /><span><small>{office.country.toUpperCase()}</small>{office.homeSummary}</span></div>
              ))}
            </div>
            <Link className="text-link light-link" href="/offices">View Our Offices <Icon name="arrow" size={18} /></Link>
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

      <section className="section insights" id="insights">
        <div className="shell">
          <div className="insights-title">
            <div><p className="eyebrow light"><span />LATEST INSIGHTS</p><h2>Insight for a changing world.</h2></div>
            <Link className="text-link light-link" href="/insights">View all insights <Icon name="arrow" size={18} /></Link>
          </div>
          <div className="insight-grid">
            {insights.map((post, i) => (
              <article className="insight-card" key={post.title}>
                <div className={`insight-visual visual-${i + 1}`}><Icon name={post.icon} size={52} /><span>OKEFF / 0{i + 1}</span></div>
                <div className="insight-body"><small>{post.tag} <i /> {post.date}</small><h3>{post.title}</h3><p>{post.text}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
