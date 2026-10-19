"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks } from "../content";
import { Icon } from "./icon";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const close = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="OKEFF Integrated Limited home" onClick={close}>
        <Image src="/okeff-logo.png" alt="OKEFF Integrated Limited" width={72} height={72} priority />
        <span className="brand-copy"><strong>OKEFF</strong><small>INTEGRATED LIMITED</small></span>
      </Link>
      <nav className={menuOpen ? "nav-links open" : "nav-links"} aria-label="Main navigation">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={close}
            className={pathname === link.href ? "active" : undefined}
            aria-current={pathname === link.href ? "page" : undefined}
          >
            {link.label}
          </Link>
        ))}
        <Link className="nav-cta" href="/contact" onClick={close}>Contact Our Team <Icon name="arrow" size={16} /></Link>
      </nav>
      <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}>
        <Icon name={menuOpen ? "x" : "menu"} />
      </button>
    </header>
  );
}
