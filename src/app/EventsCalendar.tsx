"use client";

import { useState, type ReactNode } from "react";
import { ArrowUpRight, CalendarDays, History } from "lucide-react";

const CAL_ID = "cal-hHz7R98dsv1Lf3z";
const UPCOMING_EMBED_URL = `https://luma.com/embed/calendar/${CAL_ID}/events?lt=dark`;

type EventsTab = "upcoming" | "past";

const TABS: Array<{
  id: EventsTab;
  label: string;
  kicker: string;
  copy: string;
  publicUrl: string;
  icon: typeof CalendarDays;
}> = [
  {
    id: "upcoming",
    label: "Upcoming",
    kicker: "live from luma",
    copy: "Upcoming dinners, demo nights, and resident sprints. RSVP straight from the embed.",
    publicUrl: "https://luma.com/vyvhouse",
    icon: CalendarDays,
  },
  {
    id: "past",
    label: "Past",
    kicker: "what already happened",
    copy: "A running log of nights, jams, and gatherings that have already gone down at vyv.house.",
    publicUrl: "https://luma.com/vyvhouse?period=past",
    icon: History,
  },
];

type Props = {
  /** Server-rendered grid of past events, passed in from the page Server Component. */
  pastSlot: ReactNode;
};

export function EventsCalendar({ pastSlot }: Props) {
  const [active, setActive] = useState<EventsTab>("upcoming");
  const activeTab = TABS.find((tab) => tab.id === active) ?? TABS[0];
  const ActiveIcon = activeTab.icon;

  return (
    <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
      <div>
        <div className="editorial-kicker editorial-kicker-pink signal-kicker-pink mb-5">events / calendar</div>
        <h2 className="font-display text-4xl tracking-[-0.03em] md:text-6xl">
          what is{" "}
          <span
            className={
              active === "upcoming"
                ? "highlight-block-pink signal-highlight-pink"
                : "highlight-block-green"
            }
          >
            {active === "upcoming" ? "happening next" : "already done"}
          </span>
        </h2>
        <p className="mt-5 max-w-xl text-sm leading-6 text-white/65 md:text-base">{activeTab.copy}</p>

        <div role="tablist" aria-label="Event timeframe" className="events-tablist mt-7">
          {TABS.map((tab) => {
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

        <div className="mt-5 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.24em] text-white/42">
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
          className={`mt-5 inline-flex items-center gap-2 border border-white/12 px-4 py-2 text-sm font-medium text-white transition${
            active === "upcoming"
              ? " hover:border-[#ff3b7c]/55 hover:text-[#ff3b7c]"
              : " hover:border-[#d4ff00]/55 hover:text-[#d4ff00]"
          }`}
          style={{ borderRadius: "var(--radius-button)" }}
        >
          Open on Luma
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
            title="vyv.house upcoming events calendar"
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
