import type { Metadata } from "next";
import { ContactForm } from "../_components/contact-form";
import { Icon } from "../_components/icon";
import { PageHero } from "../_components/page-hero";
import { contact, enquiryTopics } from "../content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact OKEFF Integrated Limited about oil and gas, trade finance, investment, international trade, commodities, carbon markets, vessel leasing and public-sector advisory.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="CONTACT OKEFF"
        title={<>Let’s build the right <em>partnership.</em></>}
        lede="We welcome enquiries from investors, businesses, financial institutions, suppliers, project owners and strategic partners."
      />

      <section className="contact">
        <div className="shell contact-grid">
          <div>
            <p className="eyebrow"><span />PLEASE CONTACT US REGARDING</p>
            <ul className="check-list topics">
              {enquiryTopics.map((topic) => <li key={topic}><Icon name="check" size={16} />{topic}</li>)}
            </ul>
            <div className="contact-details">
              <a href={`mailto:${contact.email}`}><Icon name="mail" size={18} />{contact.email}</a>
              <a href={`tel:${contact.canadaPhone.replace(/\s/g, "")}`}><Icon name="phone" size={18} />Canada: {contact.canadaPhone}</a>
              <a href={`tel:${contact.nigeriaPhone.replace(/\s/g, "")}`}><Icon name="phone" size={18} />Nigeria: {contact.nigeriaPhone}</a>
              <a href={`https://${contact.website}`}><Icon name="globe" size={18} />{contact.website}</a>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
