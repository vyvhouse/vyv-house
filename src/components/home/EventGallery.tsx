import { ArrowUpRight, CalendarDays } from "lucide-react";
import type { CalendarEvent } from "@/types/event";
import { siteCopy, type Language } from "@/lib/i18n";

type Props = {
  events: CalendarEvent[];
  lang: Language;
  emptyState: "upcoming" | "past";
};

function eventUrl(url: string) {
  return url.startsWith("http") ? url : `https://luma.com/${url}`;
}

export function EventGallery({ events, lang, emptyState }: Props) {
  const copy = siteCopy[lang].events;
  const dateFormatter = new Intl.DateTimeFormat(lang === "ko" ? "ko-KR" : "en-US", {
    timeZone: "Asia/Seoul",
    month: lang === "ko" ? "long" : "short",
    day: "numeric",
    weekday: "short",
    hour: "numeric",
    minute: "2-digit",
  });

  if (events.length === 0) {
    return (
      <div className="event-empty-state">
        <div className="event-empty-icon"><CalendarDays size={34} aria-hidden="true" /></div>
        <span>QUEUE_000</span>
        <h3>{emptyState === "upcoming" ? copy.emptyTitle : lang === "ko" ? "지난 이벤트가 없습니다" : "No past events yet"}</h3>
        <p>{emptyState === "upcoming" ? copy.emptyBody : lang === "ko" ? "첫 이벤트가 끝나면 이곳에 자동으로 기록됩니다." : "Completed events will be archived here automatically."}</p>
      </div>
    );
  }

  return (
    <ol className="event-gallery">
      {events.map((event, index) => {
        const dateLabel = dateFormatter.format(new Date(event.startAt));
        const hosts = event.hosts.slice(0, 3).join(", ");

        return (
          <li key={event.id} className={index === 0 ? "is-featured" : undefined}>
            <a href={eventUrl(event.url)} target="_blank" rel="noreferrer" aria-label={`${event.name} — ${dateLabel}`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={event.coverUrl} alt="" loading="lazy" decoding="async" />
              <div className="event-card-wash" aria-hidden="true" />
              <div className="event-card-top"><span>EVENT_{String(index + 1).padStart(2, "0")}</span><ArrowUpRight size={16} /></div>
              <div className="event-card-copy">
                <time dateTime={event.startAt}>{dateLabel}</time>
                <h3>{event.name}</h3>
                {hosts ? <p><span>{copy.hostedBy}</span> {hosts}</p> : null}
              </div>
            </a>
          </li>
        );
      })}
    </ol>
  );
}
