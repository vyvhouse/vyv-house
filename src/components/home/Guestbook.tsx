import type { GuestbookEntry } from "@/types/guestbook";
import { ArrowUpRight } from "lucide-react";
import { SectionLabel } from "./Brand";

export function Guestbook({ entries }: { entries: GuestbookEntry[] }) {
  return (
    <section id="log" className="system-section log-section">
      <SectionLabel index="02">~/house.log</SectionLabel>
      <div className="section-heading inverse-heading"><div><p className="mono-kicker">APPEND-ONLY MEMORY</p><h2>Notes left<br />at the house.</h2></div><p>Every visitor changes the room a little. These are traces from builders who passed through.</p></div>
      <ol className="log-grid">
        {entries.map((entry, index) => (
          <li key={entry.id} className="log-entry">
            <div className="log-meta"><span>ENTRY #{String(index + 1).padStart(4, "0")}</span><span>STATUS / POSTED</span></div>
            <div className="log-author">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              {entry.avatarUrl ? <img src={entry.avatarUrl} alt="" width="48" height="48" loading="lazy" /> : null}
              <div><strong>{entry.name}</strong><span>{entry.title ?? "Guest"}</span></div>
            </div>
            <blockquote className={/[가-힣]/.test(entry.note) ? "is-korean" : undefined} lang={/[가-힣]/.test(entry.note) ? "ko" : undefined}>“{entry.note}”</blockquote>
            <div className="log-foot"><div>{entry.tags?.slice(0, 3).map((tag) => <span key={tag}>#{tag.replaceAll(" ", "-")}</span>)}</div>{entry.githubUrl ? <a href={entry.githubUrl} target="_blank" rel="noreferrer" aria-label={`${entry.name} on GitHub`}><ArrowUpRight size={16} /></a> : null}</div>
          </li>
        ))}
      </ol>
    </section>
  );
}
