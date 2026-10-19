import type { Metadata } from "next";
import { CtaBand } from "../_components/cta-band";
import { Icon } from "../_components/icon";
import { PageHero } from "../_components/page-hero";
import { industries } from "../content";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "OKEFF serves oil and gas, energy, international trade, commodities, carbon markets, mining, marine and offshore, financial services, manufacturing and the public sector.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="INDUSTRIES"
        title={<>Industries <em>we serve.</em></>}
        lede="We focus on sectors that shape economies, enable growth and create long-term value."
      />

      <section className="section industries">
        <div className="shell industry-grid">
          {industries.map((industry, index) => (
            <article className="industry-card detailed" key={industry.title}>
              <span className="industry-number">{String(index + 1).padStart(2, "0")}</span>
              <Icon name={industry.icon} size={34} />
              <h3>{industry.title}</h3>
              <p>{industry.text}</p>
            </article>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
