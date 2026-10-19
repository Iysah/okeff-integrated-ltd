import Image from "next/image";

export function PageHero({ eyebrow, title, lede }: { eyebrow: string; title: React.ReactNode; lede?: string }) {
  return (
    <section className="page-hero">
      <Image className="hero-image" src="/okeff-hero.png" alt="" fill priority sizes="100vw" />
      <div className="hero-shade" />
      <div className="hero-grid" aria-hidden="true" />
      <div className="shell page-hero-inner">
        <p className="eyebrow light"><span />{eyebrow}</p>
        <h1>{title}</h1>
        {lede && <p className="hero-lede">{lede}</p>}
      </div>
    </section>
  );
}
