import type { GuestbookEntry } from "@/types/guestbook";
import { ArrowUpRight } from "lucide-react";
import { SectionLabel } from "./Brand";
import { siteCopy, type Language } from "@/lib/i18n";

export function Guestbook({ entries, lang }: { entries: GuestbookEntry[]; lang: Language }) {
  const copy = siteCopy[lang].guestbook;
  return (
    <section id="log" className="system-section log-section">
      <SectionLabel index="02">~/house.log</SectionLabel>
      <div className="section-heading inverse-heading"><div><p className="mono-kicker">{copy.kicker}</p><h2>{lang === "en" ? <>Notes left<br />at the house.</> : <>하우스에<br />남겨진 기록.</>}</h2></div><p>{copy.body}</p></div>
      <ol className="log-grid">
        {entries.map((entry, index) => (
          <li key={entry.id} className="log-entry">
            <div className="log-meta"><span>ENTRY #{String(index + 1).padStart(4, "0")}</span><span>{copy.status}</span></div>
            <div className="log-author">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              {entry.avatarUrl ? <img src={entry.avatarUrl} alt="" width="48" height="48" loading="lazy" /> : null}
              <div><strong>{entry.name}</strong><span>{entry.title ?? copy.guest}</span></div>
            </div>
            <blockquote className={/[가-힣]/.test(entry.note) ? "is-korean" : undefined} lang={/[가-힣]/.test(entry.note) ? "ko" : undefined}>“{entry.note}”</blockquote>
            <div className="log-foot"><div>{entry.tags?.slice(0, 3).map((tag) => <span key={tag}>#{tag.replaceAll(" ", "-")}</span>)}</div>{entry.githubUrl ? <a href={entry.githubUrl} target="_blank" rel="noreferrer" aria-label={`${entry.name} on GitHub`}><ArrowUpRight size={16} /></a> : null}</div>
          </li>
        ))}
      </ol>
    </section>
  );
}
