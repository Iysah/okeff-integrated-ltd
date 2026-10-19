import Image from "next/image";
import Link from "next/link";
import { contact, disclaimer, navLinks, offices, tagline } from "../content";

export function SiteFooter() {
  return (
    <footer>
      <div className="shell footer-main">
        <div className="footer-brand">
          <Image src="/okeff-logo.png" alt="OKEFF Integrated Limited" width={110} height={110} />
          <strong>OKEFF Integrated Limited</strong>
          <p>{tagline}</p>
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
          <a href={`https://${contact.website}`}>{contact.website}</a>
        </div>
        <div>
          <h4>Quick Links</h4>
          <Link href="/">Home</Link>
          {navLinks.map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}
          <Link href="/contact">Contact</Link>
        </div>
        {offices.map((office) => (
          <div key={office.id}>
            <h4>{office.label}</h4>
            <p>{office.address.map((line) => <span key={line}>{line}<br /></span>)}</p>
            <a href={`tel:${office.phone.replace(/\s/g, "")}`}>{office.country}: {office.phone}</a>
          </div>
        ))}
      </div>
      <div className="shell footer-note"><p>{disclaimer}</p></div>
      <div className="shell footer-bottom"><span>© {new Date().getFullYear()} OKEFF Integrated Limited. All rights reserved.</span><span>Privacy &nbsp;&nbsp; Terms &nbsp;&nbsp;·&nbsp;&nbsp; Crafted by Zorfts</span></div>
    </footer>
  );
}
