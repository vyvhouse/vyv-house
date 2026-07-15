import { ArrowDown, ArrowUpRight, MapPin } from "lucide-react";
import { siteCopy, type Language } from "@/lib/i18n";
import Link from "next/link";

export function Hero({ residentCount, lang }: { residentCount: number; lang: Language }) {
  const { hero, proof } = siteCopy[lang];
  return (
    <>
      <section className="hero-system">
        <video
          className="hero-film"
          autoPlay
          muted
          loop
          playsInline
          poster="/photos/house-dinner.webp"
          aria-hidden="true"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="hero-film-wash" />
        <div className="cursor-heading">
          <span>{hero.label}</span>
          <h1>{hero.title}</h1>
          <p><em>{hero.subtitle}</em></p>
        </div>
        <div className="hero-foot">
          <div className="hero-intro">
            <p>{hero.body}</p>
            <div className="hero-actions">
              <a href="#contact" className="hero-primary">{lang === "ko" ? "함께하기" : "Join the house"} <ArrowUpRight size={15} /></a>
              <Link href={lang === "ko" ? "/album?lang=ko" : "/album"} className="hero-secondary">{hero.cta}</Link>
            </div>
          </div>
          <div className="hero-meta">
            <span><MapPin size={13} /> {hero.location}</span>
            <span>{residentCount} {hero.online}</span>
          </div>
          <a className="hero-scroll" href="#residents" aria-label={lang === "ko" ? "계속 보기" : "Explore the house"}><ArrowDown size={18} /></a>
        </div>
      </section>
      <section className="proof-strip" aria-label="House summary">
        <div><span>01 / {proof.format}</span><strong>{proof.residency}</strong></div>
        <div><span>02 / {proof.residents}</span><strong>{residentCount} {proof.people}</strong></div>
        <div><span>03 / {proof.location}</span><strong>{proof.city}</strong></div>
        <div><span>04 / {proof.status}</span><strong className="online"><span className="status-dot" /> {proof.open}</strong></div>
      </section>
    </>
  );
}
