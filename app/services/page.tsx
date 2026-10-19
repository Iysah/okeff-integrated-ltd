import type { Metadata } from "next";
import { CtaBand } from "../_components/cta-band";
import { Icon } from "../_components/icon";
import { PageHero } from "../_components/page-hero";
import { services } from "../content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Oil and gas advisory, trade finance facilitation, investment facilitation and matchmaking, international trade, commodities, carbon markets, vessel leasing, strategic business development and government advisory.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="OUR SERVICES"
        title={<>Advisory that moves <em>opportunity forward.</em></>}
        lede="OKEFF provides advisory, commercial facilitation and business development support across several interconnected sectors."
      />

      <nav className="service-index" aria-label="Services on this page">
        <div className="shell">
          {services.map((service) => <a key={service.id} href={`#${service.id}`}>{service.title}</a>)}
        </div>
      </nav>

      <section className="section service-detail-list">
        <div className="shell">
          {services.map((service, i) => (
            <article className="service-detail" id={service.id} key={service.id}>
              <div className="service-detail-head">
                <span>{String(i + 1).padStart(2, "0")}</span>
                <Icon name={service.icon} size={36} />
                <h2>{service.title}</h2>
              </div>
              <div className="service-detail-body">
                {service.intro.map((p) => <p className="lead" key={p}>{p}</p>)}
                {service.listLabel && <p className="list-label">{service.listLabel}</p>}
                {service.items && (
                  <ul className="check-list">
                    {service.items.map((item) => <li key={item}><Icon name="check" size={16} />{item}</li>)}
                  </ul>
                )}
                {service.note && <p className="service-note">{service.note}</p>}
              </div>
            </article>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
