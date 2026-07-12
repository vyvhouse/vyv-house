import type { Resident } from "@/types/resident";
import { GitHubIcon, SectionLabel, XIcon } from "./Brand";

export function Residents({ residents }: { residents: Resident[] }) {
  return (
    <section id="residents" className="system-section residents-section">
      <SectionLabel index="01">/var/house/residents</SectionLabel>
      <div className="section-heading">
        <div><p className="mono-kicker">RUNNING PROCESSES</p><h2>People building<br />from the house.</h2></div>
        <p>Real people, real work. Follow the source, inspect what they are making, or come say hello.</p>
      </div>
      <div className="resident-toolbar"><div><span className="status-dot" /> {residents.length} residents online</div><span>Seoul, KR</span></div>
      <ul className="resident-list">
        {residents.map((resident, index) => (
          <li key={resident.id} className="resident-row">
            <div className="resident-card-head">
              <div className="resident-person">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={resident.avatarUrl} alt="" width="64" height="64" loading="lazy" />
                <div><span className="resident-index">RESIDENT_{String(index + 1).padStart(2, "0")}</span><h3>{resident.name}</h3><a href={resident.githubUrl} target="_blank" rel="noreferrer">@{resident.githubId}</a></div>
              </div>
              <div className="resident-state"><span className="status-dot" /> Active</div>
            </div>
            <div className="resident-role">{resident.role ?? "Resident"}</div>
            <p className="resident-description">{resident.description}</p>
            <div className="resident-stack" aria-label="Areas of work">{resident.tags?.slice(0, 3).map((tag) => <span key={tag}>{tag}</span>)}</div>
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
