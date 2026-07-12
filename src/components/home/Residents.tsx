import type { Resident } from "@/types/resident";
import { GitHubIcon, SectionLabel, XIcon } from "./Brand";
import { residentCopyKo, siteCopy, type Language } from "@/lib/i18n";

export function Residents({ residents, lang }: { residents: Resident[]; lang: Language }) {
  const copy = siteCopy[lang].residents;
  return (
    <section id="residents" className="system-section residents-section">
      <SectionLabel index="01">/var/house/residents</SectionLabel>
      <div className="section-heading">
        <div><p className="mono-kicker">{copy.kicker}</p><h2>{lang === "en" ? <>People building<br />from the house.</> : <>이 집에서<br />만드는 사람들.</>}</h2></div>
        <p>{copy.body}</p>
      </div>
      <div className="resident-toolbar"><div><span className="status-dot" /> {residents.length} {copy.online}</div><span>Seoul, KR</span></div>
      <ul className="resident-list">
        {residents.map((resident, index) => (
          <li key={resident.id} className="resident-row">
            <div className="resident-card-head">
              <div className="resident-person">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={resident.avatarUrl} alt="" width="64" height="64" loading="lazy" />
                <div><span className="resident-index">RESIDENT_{String(index + 1).padStart(2, "0")}</span><h3>{resident.name}</h3><a href={resident.githubUrl} target="_blank" rel="noreferrer">@{resident.githubId}</a></div>
              </div>
            </div>
            <div className="resident-role">{lang === "ko" ? residentCopyKo[resident.id]?.role ?? resident.role ?? "거주자" : resident.role ?? "Resident"}</div>
            <p className="resident-description">{lang === "ko" ? residentCopyKo[resident.id]?.description ?? resident.description : resident.description}</p>
            <div className="resident-stack" aria-label={copy.areas}>{resident.tags?.slice(0, 3).map((tag) => <span key={tag}>{tag}</span>)}</div>
            <div className="resident-links">
              <a href={resident.githubUrl} target="_blank" rel="noreferrer"><GitHubIcon /> GitHub</a>
              {resident.xUrl ? <a href={resident.xUrl} target="_blank" rel="noreferrer"><XIcon /> @{resident.xHandle}</a> : null}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
