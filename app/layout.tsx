import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OKEFF Integrated Limited | Strategy, Investment & Trade",
  description:
    "OKEFF connects investors, governments and businesses with strategic opportunities across energy, infrastructure, trade and public-sector transformation.",
  keywords: [
    "investment facilitation",
    "trade finance",
    "oil and gas consulting",
    "public sector advisory",
    "OKEFF",
  ],
  openGraph: {
    title: "OKEFF Integrated Limited",
    description: "Connecting capital to opportunity across markets.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
