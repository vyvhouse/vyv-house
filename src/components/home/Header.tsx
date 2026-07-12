import { Wordmark } from "./Brand";
import { siteCopy, type Language } from "@/lib/i18n";
import Link from "next/link";

export function Header({ lang }: { lang: Language }) {
  const copy = siteCopy[lang].nav;
  return (
    <header className="system-nav">
      <a href="#top" aria-label="VYV House home"><Wordmark /></a>
      <nav aria-label={lang === "ko" ? "주요 메뉴" : "Main navigation"}>
        <a href="#residents">{copy.residents}</a>
        <a href="#protocol">{copy.protocol}</a>
        <a href="#events">{copy.events}</a>
        <a href="#log">{copy.guestbook}</a>
      </nav>
      <div className="nav-actions">
        <div className="language-switcher" aria-label={lang === "ko" ? "언어 선택" : "Language selection"}>
          <Link href="/" className={lang === "en" ? "is-active" : undefined} aria-current={lang === "en" ? "page" : undefined}>EN</Link>
          <Link href="/?lang=ko" className={lang === "ko" ? "is-active" : undefined} aria-current={lang === "ko" ? "page" : undefined}>KO</Link>
        </div>
      </div>
    </header>
  );
}
