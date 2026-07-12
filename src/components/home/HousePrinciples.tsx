import type { Language } from "@/lib/i18n";

const principles = [
  {
    text: "live close to the work",
    ko: "작업 가까이에서 살아갑니다",
  },
  {
    text: "ship more than you explain",
    ko: "설명보다 더 많이 세상에 내놓습니다",
  },
  {
    text: "share context before you share opinions",
    ko: "의견보다 맥락을 먼저 나눕니다",
  },
  {
    text: "prototype in public, refine in private",
    ko: "공개적으로 실험하고, 조용히 다듬습니다",
  },
  {
    text: "make the room smarter than the individual",
    ko: "개인보다 더 똑똑한 공간을 만듭니다",
  },
] as const;

export function HousePrinciples({ lang }: { lang: Language }) {
  return (
    <section className="house-principles" aria-label="VYV House principles">
      <div className="house-principles-shell">
        <header className="house-principles-head">
          <span>HOUSE_PROTOCOL</span>
          <span>05 DEFAULTS</span>
        </header>
        <ol>
          {principles.map((principle, index) => (
            <li key={principle.text}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{principle.text}</p>
              {lang === "ko" ? <small>{principle.ko}</small> : null}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
