"use client";

import { useState, type ReactNode } from "react";
import { ArrowUpRight, CalendarDays, History } from "lucide-react";
import { siteCopy, type Language } from "@/lib/i18n";

const CAL_ID = "cal-hHz7R98dsv1Lf3z";
const UPCOMING_EMBED_URL = `https://luma.com/embed/calendar/${CAL_ID}/events?lt=dark`;

type EventsTab = "upcoming" | "past";

type Tab = {
  id: EventsTab;
  label: string;
  kicker: string;
  copy: string;
  publicUrl: string;
  icon: typeof CalendarDays;
};

type Props = {
  /** Server-rendered grid of past events, passed in from the page Server Component. */
  pastSlot: ReactNode;
  lang: Language;
};

export function EventsCalendar({ pastSlot, lang }: Props) {
  const copy = siteCopy[lang].events;
  const tabs: Tab[] = [
    { id: "upcoming", label: copy.upcoming, kicker: copy.upcomingKicker, copy: copy.upcomingBody, publicUrl: "https://luma.com/vyvhouse", icon: CalendarDays },
    { id: "past", label: copy.past, kicker: copy.pastKicker, copy: copy.pastBody, publicUrl: "https://luma.com/vyvhouse?period=past", icon: History },
  ];
  const [active, setActive] = useState<EventsTab>("upcoming");
  const activeTab = tabs.find((tab) => tab.id === active) ?? tabs[0];
  const ActiveIcon = activeTab.icon;

  return (
    <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
      <div>
        <div className="editorial-kicker editorial-kicker-pink signal-kicker-pink mb-5">{copy.label}</div>
        <h2 className="font-display text-4xl tracking-[-0.03em] md:text-6xl">
          {active === "upcoming" ? copy.next : copy.done}{" "}
          <span
            className={
              active === "upcoming"
                ? "highlight-block-pink signal-highlight-pink"
                : "highlight-block-green"
            }
          >
            {active === "upcoming" ? copy.nextHighlight : copy.doneHighlight}
          </span>
        </h2>
        <p className="mt-5 max-w-xl text-sm leading-6 text-white/65 md:text-base">{activeTab.copy}</p>

        <div role="tablist" aria-label={copy.timeframe} className="events-tablist mt-7">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = tab.id === active;
            return (
              <button
                key={tab.id}
                role="tab"
                type="button"
                aria-selected={isActive}
                aria-controls={`events-panel-${tab.id}`}
                id={`events-tab-${tab.id}`}
                onClick={() => setActive(tab.id)}
                className={`events-tab events-tab-${tab.id}${isActive ? " is-active" : ""}`}
              >
                <Icon size={14} aria-hidden="true" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        <div className="events-meta mt-5 inline-flex items-center gap-2">
          <ActiveIcon
            size={14}
            className={active === "upcoming" ? "text-[#ff3b7c]" : "text-[#d4ff00]"}
            aria-hidden="true"
          />
          {activeTab.kicker}
        </div>

        <a
          href={activeTab.publicUrl}
          target="_blank"
          rel="noreferrer"
          className={`events-external mt-5 inline-flex items-center gap-2${
            active === "upcoming"
              ? " hover:border-[#ff3b7c]/55 hover:text-[#ff3b7c]"
              : " hover:border-[#d4ff00]/55 hover:text-[#d4ff00]"
          }`}
          style={{ borderRadius: "var(--radius-button)" }}
        >
          {copy.open}
          <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      </div>

      <div className="events-canvas">
        <div
          id="events-panel-upcoming"
          role="tabpanel"
          aria-labelledby="events-tab-upcoming"
          hidden={active !== "upcoming"}
          className="events-frame"
        >
          <iframe
            src={UPCOMING_EMBED_URL}
            className="events-iframe is-active"
            loading="lazy"
            allowFullScreen
            tabIndex={active === "upcoming" ? 0 : -1}
            title={lang === "ko" ? "vyv.house 예정 이벤트 캘린더" : "vyv.house upcoming events calendar"}
          />
          <div className="events-frame-noise" aria-hidden="true" />
        </div>

        <div
          id="events-panel-past"
          role="tabpanel"
          aria-labelledby="events-tab-past"
          hidden={active !== "past"}
          className="events-past-panel"
        >
          {pastSlot}
        </div>
      </div>
    </div>
  );
}
