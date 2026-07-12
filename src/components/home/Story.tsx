import Image from "next/image";
import { Radio } from "lucide-react";
import { SectionLabel } from "./Brand";

export function Story() {
  return (
    <>
      <section className="manifesto-section">
        <SectionLabel index="00">README.md</SectionLabel>
        <div className="manifesto-grid">
          <h2>A house should make<br />good work <em>easier.</em></h2>
          <div className="manifesto-copy">
            <p>We believe proximity creates momentum—not through mandatory networking, but through shared meals, direct feedback, and enough quiet to do the work.</p>
            <p>VYV is intentionally small. Residents bring a project, respect the house, and leave something useful behind.</p>
          </div>
        </div>
      </section>
      <section className="house-signal" aria-label="Life at VYV House">
        <div className="signal-media">
          <Image src="/signal-left.jpg" alt="A late night working session at VYV House" fill sizes="(max-width: 900px) 100vw, 58vw" />
          <div className="image-stamp">CAPTURE_001 / HOUSE IN MOTION</div>
        </div>
        <div className="signal-note"><Radio size={18} /><p>Part home,<br />part lab,<br /><span>always alive.</span></p><small>Experiments, conversations, and shared context accumulate here.</small></div>
      </section>
    </>
  );
}
