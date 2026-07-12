import { ContactAndFooter } from "@/components/home/Footer";
import { Guestbook } from "@/components/home/Guestbook";
import { Header } from "@/components/home/Header";
import { Hero } from "@/components/home/Hero";
import { Protocol } from "@/components/home/Protocol";
import { Residents } from "@/components/home/Residents";
import { SectionLabel } from "@/components/home/Brand";
import { Story } from "@/components/home/Story";
import { guestbookEntries } from "@/data/guestbook";
import { residents } from "@/data/residents";
import { fetchPastEvents, fetchUpcomingEvents } from "@/lib/luma";
import type { Language } from "@/lib/i18n";
import { EventGallery } from "@/components/home/EventGallery";
import { EventsCalendar } from "./EventsCalendar";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}) {
  const { lang: requestedLanguage } = await searchParams;
  const lang: Language = requestedLanguage === "ko" ? "ko" : "en";
  const [upcomingEvents, pastEvents] = await Promise.all([
    fetchUpcomingEvents(),
    fetchPastEvents(),
  ]);

  return (
    <main id="top" className="living-system" lang={lang}>
      <Header lang={lang} />
      <Hero residentCount={residents.length} lang={lang} />
      <Story lang={lang} />
      <Residents residents={residents} lang={lang} />
      <Guestbook entries={guestbookEntries} lang={lang} />
      <Protocol lang={lang} />
      <section id="events" className="system-section events-section">
        <SectionLabel index="04">RUNTIME / EVENTS</SectionLabel>
        <EventsCalendar
          lang={lang}
          hasUpcoming={upcomingEvents.length > 0}
          upcomingSlot={<EventGallery events={upcomingEvents} lang={lang} emptyState="upcoming" />}
          pastSlot={<EventGallery events={pastEvents} lang={lang} emptyState="past" />}
        />
      </section>
      <ContactAndFooter lang={lang} />
    </main>
  );
}
