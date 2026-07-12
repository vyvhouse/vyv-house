import { Wordmark } from "./Brand";

export function Header() {
  return (
    <header className="system-nav">
      <a href="#top" aria-label="VYV House home"><Wordmark /></a>
      <nav aria-label="Main navigation">
        <a href="#residents">Residents</a>
        <a href="#protocol">Protocol</a>
        <a href="#events">Events</a>
        <a href="#log">Guestbook</a>
      </nav>
      <div className="nav-actions">
        <a href="https://github.com/vyvhouse/vyv-house" target="_blank" rel="noreferrer">GitHub</a>
        <a href="mailto:hello@vyv.house" className="nav-contact">Contact</a>
        <a href="#residents" className="nav-primary">Meet the house</a>
      </div>
    </header>
  );
}
