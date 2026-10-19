import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import { SiteFooter } from "./_components/site-footer";
import { SiteHeader } from "./_components/site-header";
import { contact, offices, services, tagline } from "./content";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const description =
  "OKEFF Integrated Limited is a Canadian-based business advisory and investment facilitation company connecting investors, businesses, financial institutions, project owners and strategic partners with credible opportunities across Canada, Africa and global markets.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.okeff.com"),
  title: {
    default: `OKEFF Integrated Limited | ${tagline}`,
    template: "%s | OKEFF Integrated Limited",
  },
  description,
  keywords: [
    "investment facilitation",
    "investment matchmaking",
    "trade finance facilitation",
    "oil and gas advisory",
    "commodities advisory",
    "carbon markets advisory",
    "vessel leasing",
    "government and public sector advisory",
    "Canada Africa trade",
    "OKEFF",
  ],
  openGraph: {
    title: "OKEFF Integrated Limited",
    description: tagline,
    type: "website",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "OKEFF Integrated Limited",
  slogan: tagline,
  url: "https://www.okeff.com",
  logo: "https://www.okeff.com/okeff-logo.png",
  email: contact.email,
  description,
  areaServed: ["Canada", "Nigeria", "Africa"],
  knowsAbout: services.map((s) => s.title),
  address: {
    "@type": "PostalAddress",
    streetAddress: "404–250 Webb Drive",
    addressLocality: "Mississauga",
    addressRegion: "ON",
    postalCode: "L5B 3Z4",
    addressCountry: "CA",
  },
  location: offices.map((office) => ({
    "@type": "Place",
    name: `OKEFF Integrated Limited – ${office.label}`,
    telephone: office.phone,
    address: office.address.join(", "),
  })),
  contactPoint: offices.map((office) => ({
    "@type": "ContactPoint",
    telephone: office.phone,
    email: contact.email,
    contactType: "customer service",
    areaServed: office.id === "canada" ? "CA" : "NG",
  })),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
