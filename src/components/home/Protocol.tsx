import { Check, Code2 } from "lucide-react";
import { SectionLabel } from "./Brand";
import { siteCopy, type Language } from "@/lib/i18n";

export function Protocol({ lang }: { lang: Language }) {
  const copy = siteCopy[lang].protocol;
  return (
    <section id="protocol" className="system-section protocol-section">
      <SectionLabel index="03">HOUSE_PROTOCOL</SectionLabel>
      <div className="section-heading"><div><p className="mono-kicker">{copy.kicker}</p><h2>{lang === "en" ? <>Small rules for<br />a high-trust room.</> : <>신뢰 높은 공간을 위한<br />작은 원칙.</>}</h2></div><p>{copy.body}</p></div>
      <ol className="protocol-list">{copy.rules.map(([number, title, description]) => <li key={number}><span>{number}</span><h3>{title}</h3><p>{description}</p><Check size={18} /></li>)}</ol>
      <div className="rhythm-terminal"><div className="rhythm-head"><Code2 size={15} /> house-rhythms.sh</div><div className="rhythm-grid">{copy.rhythms.map((rhythm) => <div key={rhythm.command}><code>$ {rhythm.command}</code><h3>{rhythm.label}</h3><p>{rhythm.detail}</p></div>)}</div></div>
    </section>
  );
}
