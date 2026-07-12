import { ArrowUpRight, Copy, MapPin } from "lucide-react";
import { HouseGallery } from "./HouseGallery";

export function Hero({ residentCount }: { residentCount: number }) {
  return (
    <>
      <section className="hero-system">
        <div className="cursor-heading">
          <span>VYV HOUSE</span>
          <h1>Live close.</h1>
          <p>Build with focus.</p>
          <small>A builder residency in Seoul.</small>
        </div>
        <div className="cursor-stage">
          <div className="cursor-stage-copy">
            <div className="stage-copy-top">
              <span>HOUSE_001</span>
              <span><i /> {residentCount} residents online</span>
            </div>
            <div className="stage-copy-main">
              <h2>Build alongside people who care about the work.</h2>
              <p>Shared meals, direct feedback, deep focus, and enough room for ambitious ideas to become real.</p>
            </div>
            <div className="stage-command">
              <code>vyv join --seoul</code>
              <Copy size={15} aria-hidden="true" />
            </div>
            <div className="stage-location"><MapPin size={14} /> Seoul, South Korea</div>
          </div>
          <div className="cursor-stage-media">
            <HouseGallery />
            <div className="media-wash" />
            <div className="media-label"><span>LIVE FROM THE HOUSE</span><span>FRAME_001—004</span></div>
            <a href="#residents" className="media-cta">Meet the residents <ArrowUpRight size={15} /></a>
          </div>
        </div>
      </section>
      <section className="proof-strip" aria-label="House summary">
        <div><span>01 / format</span><strong>Builder residency</strong></div>
        <div><span>02 / residents</span><strong>{residentCount} people in process</strong></div>
        <div><span>03 / operating from</span><strong>Seoul, South Korea</strong></div>
        <div><span>04 / status</span><strong className="online"><span className="status-dot" /> Open to collabs</strong></div>
      </section>
    </>
  );
}
