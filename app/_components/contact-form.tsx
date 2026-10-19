"use client";

import { FormEvent, useState } from "react";
import { areasOfInterest } from "../content";
import { Icon } from "./icon";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    event.currentTarget.reset();
    setSubmitted(true);
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label><span>Full Name *</span><input name="name" required autoComplete="name" placeholder="Your full name" /></label>
      <label><span>Company Name</span><input name="company" autoComplete="organization" placeholder="Organization name" /></label>
      <label><span>Email Address *</span><input type="email" name="email" required autoComplete="email" placeholder="name@company.com" /></label>
      <label><span>Phone Number</span><input type="tel" name="phone" autoComplete="tel" placeholder="Phone number" /></label>
      <label><span>Country</span><input name="country" autoComplete="country-name" placeholder="Country" /></label>
      <label><span>Area of Interest *</span><select name="interest" required defaultValue=""><option value="" disabled>Select an area</option>{areasOfInterest.map((a) => <option key={a}>{a}</option>)}</select></label>
      <label className="full"><span>Brief Description of Opportunity</span><textarea name="opportunity" rows={3} placeholder="Sector, location, size and stage of the opportunity" /></label>
      <label className="full"><span>Message *</span><textarea name="message" required rows={4} placeholder="Tell us briefly about your objectives" /></label>
      <label className="full consent"><input type="checkbox" name="consent" required /><span>I consent to OKEFF Integrated Limited storing my details and contacting me about this enquiry. *</span></label>
      <button className="button primary" type="submit">Send enquiry <Icon name="arrow" size={18} /></button>
      {submitted && <p className="form-success" role="status">Thank you. Your enquiry has been noted and the OKEFF team will be in touch.</p>}
    </form>
  );
}
