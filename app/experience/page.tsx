import type { Metadata } from "next";
import { CtaBand } from "../_components/cta-band";
import { Icon } from "../_components/icon";
import { PageHero } from "../_components/page-hero";
import { highlights, whyPartner } from "../content";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Selected experience and corporate highlights from OKEFF Integrated Limited across carbon credits, oil and gas advisory and Canada–Nigeria trade development.",
};

export default function ExperiencePage() {
  return (
    <>
      <PageHero
        eyebrow="EXPERIENCE"
        title={<>Selected experience and <em>corporate highlights.</em></>}
      />

      <section className="section">
        <div className="shell">
          <div className="highlight-grid">
            {highlights.map((item) => (
              <article key={item.title}>
                <Icon name={item.icon} size={30} />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
          <p className="confidential-note">Certain engagements are confidential. Information is presented at a high level and does not disclose confidential counterparties, transaction details or commercially sensitive information.</p>
        </div>
      </section>

      <section className="section why">
        <div className="shell why-grid">
          <div>
            <p className="eyebrow"><span />WHY OKEFF</p>
            <h2>Why partner <em>with OKEFF.</em></h2>
          </div>
          <div className="why-list">
            {whyPartner.map((item, i) => (
              <article key={item.title}><span>{String(i + 1).padStart(2, "0")}</span><div><h3>{item.title}</h3><p>{item.text}</p></div><Icon name="check" size={22} /></article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
