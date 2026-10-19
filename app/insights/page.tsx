import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "../_components/icon";
import { PageHero } from "../_components/page-hero";
import { insights } from "../content";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Perspectives from OKEFF Integrated Limited on energy, cross-border trade, investment and public-private partnership.",
};

export default function InsightsPage() {
  return (
    <>
      <PageHero
        eyebrow="INSIGHTS"
        title={<>Insight for a <em>changing world.</em></>}
        lede="Perspectives on energy, trade, investment and public-sector partnership across Canada, Africa and global markets."
      />

      <section className="section insights">
        <div className="shell">
          <div className="insight-grid">
            {insights.map((post, i) => (
              <article className="insight-card" key={post.title}>
                <div className={`insight-visual visual-${i + 1}`}><Icon name={post.icon} size={52} /><span>OKEFF / 0{i + 1}</span></div>
                <div className="insight-body"><small>{post.tag} <i /> {post.date}</small><h3>{post.title}</h3><p>{post.text}</p></div>
              </article>
            ))}
          </div>
          <p className="insights-note">Full articles are coming soon. To discuss any of these themes with our team, <Link href="/contact">get in touch</Link>.</p>
        </div>
      </section>
    </>
  );
}
