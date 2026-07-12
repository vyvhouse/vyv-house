import Image from "next/image";
import { Radio } from "lucide-react";
import { SectionLabel } from "./Brand";
import { siteCopy, type Language } from "@/lib/i18n";

export function Story({ lang }: { lang: Language }) {
  const copy = siteCopy[lang].story;
  return (
    <>
      <section className="manifesto-section">
        <SectionLabel index="00">README.md</SectionLabel>
        <div className="manifesto-grid">
          <h2>{lang === "en" ? <>A house should make<br />good work <em>easier.</em></> : <>집은 좋은 작업을<br /><em>더 쉽게</em> 만들어야 합니다.</>}</h2>
          <div className="manifesto-copy">
            <p>{copy.p1}</p>
            <p>{copy.p2}</p>
          </div>
        </div>
      </section>
      <section className="house-signal" aria-label="Life at VYV House">
        <div className="signal-media">
          <div className="signal-collage">
            <figure className="collage-main"><Image src="/photos/house-table.webp" alt="Friends gathered around the long table at VYV House" fill sizes="(max-width: 900px) 100vw, 45vw" /></figure>
            <figure className="collage-top"><Image src="/photos/house-workstation.webp" alt="A workstation running projects at VYV House" fill sizes="(max-width: 900px) 50vw, 22vw" /></figure>
            <figure className="collage-bottom"><Image src="/photos/house-demo-group.webp" alt="Builders together after a demo at VYV House" fill sizes="(max-width: 900px) 50vw, 22vw" /></figure>
          </div>
          <div className="image-stamp">CAPTURE_001 / HOUSE IN MOTION</div>
        </div>
        <div className="signal-note"><Radio size={18} /><p>{copy.signal[0]}<br />{copy.signal[1]}<br /><span>{copy.signal[2]}</span></p><small>{copy.signalBody}</small></div>
      </section>
    </>
  );
}
