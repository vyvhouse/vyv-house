import { MapPin } from "lucide-react";
import type { PastEvent } from "@/types/event";

type Props = {
  events: PastEvent[];
};

// Korean date header e.g. "5월 23일 토요일"
const SEOUL_DATE_HEADER = new Intl.DateTimeFormat("ko-KR", {
  timeZone: "Asia/Seoul",
  month: "long",
  day: "numeric",
  weekday: "long",
});

// Time label e.g. "오전 11:00"
const SEOUL_TIME = new Intl.DateTimeFormat("ko-KR", {
  timeZone: "Asia/Seoul",
  hour: "numeric",
  minute: "2-digit",
});

// Group key e.g. "2026-05-23"
const SEOUL_DAY_KEY = new Intl.DateTimeFormat("en-CA", {
  timeZone: "Asia/Seoul",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
});

function formatHostsLine(hosts: string[]): string {
  if (hosts.length === 0) return "";
  if (hosts.length <= 3) return hosts.join(", ");
  return `${hosts.slice(0, 2).join(", ")} 외 ${hosts.length - 2}명`;
}

type Section = {
  key: string;
  dateLabel: string;
  events: PastEvent[];
};

function groupByDay(events: PastEvent[]): Section[] {
  const map = new Map<string, Section>();
  for (const event of events) {
    const date = new Date(event.startAt);
    const key = SEOUL_DAY_KEY.format(date);
    let section = map.get(key);
    if (!section) {
      section = {
        key,
        dateLabel: SEOUL_DATE_HEADER.format(date),
        events: [],
      };
      map.set(key, section);
    }
    section.events.push(event);
  }
  return Array.from(map.values());
}

export function PastEventsGrid({ events }: Props) {
  if (events.length === 0) {
    return (
      <div className="past-events-empty">
        <p className="text-sm leading-6 text-white/65 md:text-base">
          No past events to show yet. Once the first vyv.house gathering wraps,
          it&apos;ll appear here automatically.
        </p>
      </div>
    );
  }

  const sections = groupByDay(events);

  return (
    <div className="past-timeline">
      {sections.map((section, sectionIdx) => {
        const isLast = sectionIdx === sections.length - 1;
        return (
          <section
            key={section.key}
            className={`past-timeline-section${isLast ? " is-last" : ""}`}
          >
            <header className="past-timeline-date">
              <span className="past-timeline-dot" aria-hidden="true" />
              <h3>{section.dateLabel}</h3>
            </header>

            <div className="past-timeline-line" aria-hidden="true" />

            <ol className="past-timeline-events">
              {section.events.map((event) => {
                const startDate = new Date(event.startAt);
                const timeLabel = SEOUL_TIME.format(startDate);
                const hostsLine = formatHostsLine(event.hosts);

                return (
                  <li key={event.id} className="past-event-row">
                    <a
                      href={`https://luma.com/${event.url}`}
                      target="_blank"
                      rel="noreferrer"
                      className="past-event-card"
                      aria-label={`${event.name} — ${section.dateLabel} ${timeLabel}`}
                    >
                      <div className="past-event-info">
                        <div className="past-event-time">{timeLabel}</div>
                        <h4 className="past-event-title">{event.name}</h4>
                        {hostsLine ? (
                          <div className="past-event-hosts">{hostsLine}</div>
                        ) : null}
                        {event.location ? (
                          <div className="past-event-location">
                            <MapPin size={12} aria-hidden="true" />
                            {event.location}
                          </div>
                        ) : null}
                      </div>

                      <div className="past-event-cover">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={event.coverUrl}
                          alt=""
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                    </a>
                  </li>
                );
              })}
            </ol>
          </section>
        );
      })}
    </div>
  );
}
