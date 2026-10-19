import Link from "next/link";
import { Icon } from "./icon";

export function CtaBand() {
  return (
    <section className="cta-band">
      <div className="shell cta-inner">
        <div>
          <p className="eyebrow light"><span />START A CONVERSATION</p>
          <h2>Let’s build the right <em>partnership.</em></h2>
        </div>
        <div>
          <p>Whether you are seeking investment, trade finance, market access, a strategic partner or advisory support, OKEFF can help you evaluate the opportunity and connect with the right stakeholders.</p>
          <Link className="button gold" href="/contact">Speak With Our Team <Icon name="arrow" size={18} /></Link>
        </div>
      </div>
    </section>
  );
}
