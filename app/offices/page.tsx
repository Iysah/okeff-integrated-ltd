import type { Metadata } from "next";
import { CtaBand } from "../_components/cta-band";
import { Icon } from "../_components/icon";
import { PageHero } from "../_components/page-hero";
import { contact, offices } from "../content";

export const metadata: Metadata = {
  title: "Offices",
  description:
    "OKEFF Integrated Limited offices in Mississauga, Ontario, Canada and Lagos, Nigeria.",
};

export default function OfficesPage() {
  return (
    <>
      <PageHero
        eyebrow="GLOBAL PRESENCE"
        title={<>Local intelligence. <em>Global ambition.</em></>}
        lede="With offices in Canada and Nigeria, we connect commercial opportunities between North America, Africa and international markets."
      />

      <section className="section">
        <div className="shell office-grid">
          {offices.map((office) => (
            <article className="office-card" key={office.id} id={office.id}>
              <p className="eyebrow"><span />{office.label.toUpperCase()}</p>
              <h2>OKEFF Integrated Limited</h2>
              <p className="office-summary">{office.summary}</p>
              <ul>
                <li><Icon name="pin" size={20} /><address>{office.address.map((line) => <span key={line}>{line}<br /></span>)}</address></li>
                <li><Icon name="phone" size={20} /><a href={`tel:${office.phone.replace(/\s/g, "")}`}>{office.phone}</a></li>
                <li><Icon name="mail" size={20} /><a href={`mailto:${contact.email}`}>{contact.email}</a></li>
              </ul>
            </article>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
