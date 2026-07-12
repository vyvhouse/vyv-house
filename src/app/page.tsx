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
import { fetchPastEvents } from "@/lib/luma";
import { EventsCalendar } from "./EventsCalendar";
import { PastEventsGrid } from "./PastEventsGrid";

export default async function Home() {
  const pastEvents = await fetchPastEvents();

  return (
    <main id="top" className="living-system">
      <Header />
      <Hero residentCount={residents.length} />
      <Story />
      <Residents residents={residents} />
      <Guestbook entries={guestbookEntries} />
      <Protocol />
      <section id="events" className="system-section events-section">
        <SectionLabel index="04">RUNTIME / EVENTS</SectionLabel>
        <EventsCalendar pastSlot={<PastEventsGrid events={pastEvents} />} />
      </section>
      <ContactAndFooter />
    </main>
  );
}
