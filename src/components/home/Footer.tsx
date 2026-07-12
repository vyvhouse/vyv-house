import { ArrowUpRight, House, Mail, MapPin, Users } from "lucide-react";
import { Wordmark } from "./Brand";
import { siteCopy, type Language } from "@/lib/i18n";

export function ContactAndFooter({ lang }: { lang: Language }) {
  const copy = siteCopy[lang].contact;
  return (
    <>
      <section id="contact" className="contact-section">
        <div className="contact-copy"><span>{copy.label}</span><h2>{copy.headline}</h2><p>{copy.body}</p></div>
        <a href="mailto:hello@vyv.house" className="contact-mail"><span>hello@vyv.house</span><ArrowUpRight size={28} /></a>
        <div className="contact-details"><span><MapPin size={15} /> {copy.location}</span><span><Users size={15} /> {copy.listed}</span><span><House size={15} /> {copy.visits}</span></div>
      </section>
      <footer className="system-footer"><Wordmark /><p>{copy.footer}</p><div><a href="https://github.com/vyvhouse/vyv-house" target="_blank" rel="noreferrer">GitHub</a><a href="mailto:hello@vyv.house"><Mail size={14} /> {siteCopy[lang].nav.contact}</a></div></footer>
    </>
  );
}
