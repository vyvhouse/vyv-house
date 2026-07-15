import Image from "next/image";
import { Radio } from "lucide-react";
import { siteCopy, type Language } from "@/lib/i18n";

export function Story({ lang }: { lang: Language }) {
  const copy = siteCopy[lang].story;
  const steps = lang === "ko"
    ? [
        { number: "1.", title: "가까이 살아갑니다", body: "같은 공간과 식탁을 나누며 서로의 작업이 자연스럽게 보이는 거리를 만듭니다.", image: "/photos/house-session.webp", alt: "VYV House에서 함께 시간을 보내는 사람들" },
        { number: "2.", title: "깊이 몰입합니다", body: "충분히 조용한 시간과 바로 옆에서 얻는 피드백으로 프로젝트를 앞으로 움직입니다.", image: "/photos/house-desk.webp", alt: "VYV House에서 프로젝트에 몰입하는 작업 공간" },
        { number: "3.", title: "맥락을 나눕니다", body: "함께 발견한 것과 실패한 것까지 나누며 개인보다 더 똑똑한 공간을 만듭니다.", image: "/photos/house-studio.webp", alt: "VYV House에서 작업의 맥락을 나누는 빌더들" },
      ]
    : [
        { number: "1.", title: "Live close", body: "Share a home and a table, creating the kind of proximity where good work is easy to see.", image: "/photos/house-session.webp", alt: "People spending time together at VYV House" },
        { number: "2.", title: "Build with focus", body: "Move projects forward with enough quiet to concentrate and useful feedback close at hand.", image: "/photos/house-desk.webp", alt: "A focused workspace at VYV House" },
        { number: "3.", title: "Share context", body: "Pass along discoveries and failed attempts, making the room smarter than any one person.", image: "/photos/house-studio.webp", alt: "Builders sharing context at VYV House" },
      ];

  return (
    <>
      <section className="manifesto-section method-section">
        <div className="method-heading">
          <p className="method-kicker">{lang === "ko" ? "우리의 방식" : "OUR METHOD"}</p>
          <h2>{lang === "ko" ? "VYV House의 방식" : "How VYV works"}</h2>
          <p>{copy.p1}</p>
        </div>
        <ol className="method-grid">
          {steps.map((step) => (
            <li key={step.title}>
              <figure>
                <Image src={step.image} alt={step.alt} fill sizes="(max-width: 700px) calc(100vw - 30px), 33vw" />
              </figure>
              <h3><span>{step.number}</span> {step.title}</h3>
              <p>{step.body}</p>
            </li>
          ))}
        </ol>
      </section>
      <section className="belief-section">
        <p className="belief-quote">
          {lang === "en" ? <>“A house should make<br />good work <em>easier.</em>”</> : <>“집은 좋은 작업을<br /><em>더 쉽게</em> 만들어야 합니다.”</>}
        </p>
        <div className="belief-note">
          <span>{lang === "ko" ? "우리가 믿는 것" : "WHAT WE BELIEVE"}</span>
          <p>{copy.p2}</p>
        </div>
      </section>
      <section className="house-signal" aria-label="Life at VYV House">
        <div className="signal-media">
          <div className="signal-collage">
            <figure className="collage-main"><Image src="/photos/house-table.webp" alt="Friends gathered around the long table at VYV House" fill loading="eager" sizes="(max-width: 1000px) calc(100vw - 24px), 65vw" /></figure>
            <figure className="collage-top"><Image src="/photos/house-workstation.webp" alt="A workstation running projects at VYV House" fill loading="eager" sizes="(max-width: 700px) 0px, (max-width: 1000px) 24vw, 16vw" /></figure>
            <figure className="collage-bottom"><Image src="/photos/house-demo-group.webp" alt="Builders together after a demo at VYV House" fill loading="eager" sizes="(max-width: 700px) 0px, (max-width: 1000px) 30vw, 19vw" /></figure>
          </div>
          <div className="image-stamp">CAPTURE_001 / HOUSE IN MOTION</div>
        </div>
        <div className="signal-note"><Radio size={18} /><p>{copy.signal[0]}<br />{copy.signal[1]}<br /><span>{copy.signal[2]}</span></p><small>{copy.signalBody}</small></div>
      </section>
    </>
  );
}
