import { ArrowUpRight, House, Mail, MapPin, Users } from "lucide-react";
import { Wordmark } from "./Brand";

export function ContactAndFooter() {
  return (
    <>
      <section id="contact" className="contact-section">
        <div className="contact-copy"><span>NEW SESSION?</span><h2>Build from here.</h2><p>Applications, collaborations, visits, and dinner conversations all start with context.</p></div>
        <a href="mailto:hello@vyv.house" className="contact-mail"><span>hello@vyv.house</span><ArrowUpRight size={28} /></a>
        <div className="contact-details"><span><MapPin size={15} /> Seoul / exact location shared privately</span><span><Users size={15} /> Residents listed publicly</span><span><House size={15} /> Visits open by context</span></div>
      </section>
      <footer className="system-footer"><Wordmark /><p>A living system for people who build.</p><div><a href="https://github.com/vyvhouse/vyv-house" target="_blank" rel="noreferrer">GitHub</a><a href="mailto:hello@vyv.house"><Mail size={14} /> Contact</a></div></footer>
    </>
  );
}
