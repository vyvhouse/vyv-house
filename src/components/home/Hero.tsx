import { ArrowUpRight, Copy, MapPin } from "lucide-react";
import { HouseGallery } from "./HouseGallery";
import { siteCopy, type Language } from "@/lib/i18n";
import Link from "next/link";

export function Hero({ residentCount, lang }: { residentCount: number; lang: Language }) {
  const { hero, proof } = siteCopy[lang];
  return (
    <>
      <section className="hero-system">
        <div className="cursor-heading">
          <span>{hero.label}</span>
          <h1>{hero.title}</h1>
          <p>{hero.subtitle}</p>
          <small>{hero.description}</small>
        </div>
        <div className="cursor-stage">
          <div className="cursor-stage-copy">
            <div className="stage-copy-top">
              <span>HOUSE_001</span>
              <span><i /> {residentCount} {hero.online}</span>
            </div>
            <div className="stage-copy-main">
              <h2>{hero.headline}</h2>
              <p>{hero.body}</p>
            </div>
            <div className="stage-command">
              <code>vyv join --seoul</code>
              <Copy size={15} aria-hidden="true" />
            </div>
            <div className="stage-location"><MapPin size={14} /> {hero.location}</div>
          </div>
          <div className="cursor-stage-media">
            <HouseGallery />
            <div className="media-wash" />
            <div className="media-label"><span>LIVE FROM THE HOUSE</span><span>FRAME_001—004</span></div>
            <Link href={lang === "ko" ? "/album?lang=ko" : "/album"} className="media-cta">
              {hero.cta} <ArrowUpRight size={15} />
            </Link>
          </div>
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
