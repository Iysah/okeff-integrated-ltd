import type { Metadata } from "next";
import Image from "next/image";
import { CtaBand } from "../_components/cta-band";
import { PageHero } from "../_components/page-hero";
import { coreValues, tagline } from "../content";

export const metadata: Metadata = {
  title: "About",
  description:
    "OKEFF Integrated Limited is an international business advisory and investment facilitation company headquartered in Mississauga, Ontario, with operations in Lagos, Nigeria.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="ABOUT OKEFF"
        title={<>About OKEFF <em>Integrated Limited</em></>}
        lede="An international business advisory and investment facilitation company headquartered in Mississauga, Ontario, with operations in Lagos, Nigeria."
      />

      <section className="section">
        <div className="shell two-col">
          <div>
            <p className="eyebrow"><span />WHO WE ARE</p>
            <h2>Bridging the gap between <em>opportunity and execution.</em></h2>
          </div>
          <div className="about-copy">
            <p className="lead">We support investors, businesses, project owners, financial institutions, manufacturers, commodity traders and government-related stakeholders seeking credible commercial opportunities and strategic partnerships.</p>
            <p>Our role is to help bridge the gap between opportunity and execution. We identify suitable partners, support transaction development, facilitate introductions and provide advisory services that help clients move opportunities forward.</p>
            <p>OKEFF operates across oil and gas, trade finance, international trade, commodities, carbon markets, vessel leasing and business development.</p>
          </div>
        </div>
      </section>

      <section className="section vision">
        <div className="shell vision-grid">
          <article>
            <p className="eyebrow light"><span />OUR VISION</p>
            <p>To become a trusted international advisory and investment facilitation company connecting capital, markets and strategic opportunities across global markets.</p>
          </article>
          <article>
            <p className="eyebrow light"><span />OUR MISSION</p>
            <p>To help clients create sustainable value by connecting them with suitable investors, financiers, markets, suppliers and strategic partners through professional advisory, commercial insight and trusted relationships.</p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="center-heading">
            <p className="eyebrow"><span />OUR CORE VALUES</p>
            <h2>The principles behind <em>every engagement.</em></h2>
          </div>
          <div className="values-grid">
            {coreValues.map((value, i) => (
              <article key={value.title}><span>{String(i + 1).padStart(2, "0")}</span><h3>{value.title}</h3><p>{value.text}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="section founder">
        <div className="shell founder-grid">
          <div>
            <p className="eyebrow"><span />A MESSAGE FROM OUR FOUNDER</p>
            <h2>Connecting opportunities <em>across continents.</em></h2>
          </div>
          <div className="founder-copy">
            <p className="lead">OKEFF was founded with a simple vision—to bridge global capital with transformative opportunities that create sustainable economic value.</p>
            <p>We believe that the world&apos;s greatest opportunities exist where expertise, trusted relationships, and strategic capital come together. Through our international network and deep understanding of the energy, commodities, infrastructure, and trade sectors, we connect investors, governments, project owners, and businesses with opportunities capable of delivering measurable and lasting impact.</p>
            <p>Our commitment extends beyond transactions. We build long-term partnerships founded on integrity, professionalism, transparency, and excellence. Whether facilitating investment into upstream oil and gas assets, arranging trade finance, supporting commodity transactions, or advising on strategic projects, our objective remains the same: <strong>{tagline}</strong></p>
            <p className="signature"><strong>Eddie Okonkwo</strong><span>Founder &amp; CEO</span></p>
          </div>
        </div>
      </section>

      <section className="section brand-meaning">
        <div className="shell two-col">
          <div className="brand-mark">
            <Image src="/okeff-logo.png" alt="The OKEFF logo: a tree held in two hands within a gold circle" width={360} height={360} />
          </div>
          <div className="about-copy">
            <p className="eyebrow"><span />OUR BRAND MEANING</p>
            <p className="lead">The OKEFF logo represents growth, protection, integration and value creation.</p>
            <p>The tree reflects growth, sustainability and long-term impact. The hands represent guidance, support and responsible stewardship. The circle symbolizes unity, integration and wholeness, while the leaves reflect productivity, multiplication and lasting value.</p>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
