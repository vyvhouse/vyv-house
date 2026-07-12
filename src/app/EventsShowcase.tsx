import type { ReactNode } from "react";
import { siteCopy, type Language } from "@/lib/i18n";

type Props = {
  eventsSlot: ReactNode;
  lang: Language;
  mode: "upcoming" | "past";
};

export function EventsShowcase({ eventsSlot, lang, mode }: Props) {
  const copy = siteCopy[lang].events;
  const isUpcoming = mode === "upcoming";

  return (
    <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
      <div>
        <div className="editorial-kicker editorial-kicker-pink signal-kicker-pink mb-5">{copy.label}</div>
        <h2 className="font-display text-4xl tracking-[-0.03em] md:text-6xl">
          {isUpcoming ? copy.next : copy.done}{" "}
          <span className={isUpcoming ? "highlight-block-pink signal-highlight-pink" : "highlight-block-green"}>
            {isUpcoming ? copy.nextHighlight : copy.doneHighlight}
          </span>
        </h2>
        <p className="mt-5 max-w-xl text-sm leading-6 text-white/65 md:text-base">
          {isUpcoming ? copy.upcomingBody : copy.pastBody}
        </p>
      </div>

      <div className="events-canvas">{eventsSlot}</div>
    </div>
  );
}
