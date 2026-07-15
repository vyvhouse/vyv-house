import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { Wordmark } from "@/components/home/Brand";
import { albumPhotos } from "@/data/album";
import type { Language } from "@/lib/i18n";

export const metadata = {
  title: "House album — VYV House",
  description: "A chronological record of life and work at VYV House in Seoul.",
};

const monthFormatters = {
  en: new Intl.DateTimeFormat("en-US", { month: "long", year: "numeric", timeZone: "UTC" }),
  ko: new Intl.DateTimeFormat("ko-KR", { year: "numeric", month: "long", timeZone: "UTC" }),
};
const dateFormatters = {
  en: new Intl.DateTimeFormat("en-US", { month: "short", day: "2-digit", year: "numeric", timeZone: "UTC" }),
  ko: new Intl.DateTimeFormat("ko-KR", { year: "numeric", month: "2-digit", day: "2-digit", timeZone: "UTC" }),
};

export default async function AlbumPage({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const { lang: requestedLanguage } = await searchParams;
  const lang: Language = requestedLanguage === "ko" ? "ko" : "en";
  const groups = Map.groupBy(albumPhotos, (photo) => photo.capturedAt.slice(0, 7));
  const copy = lang === "ko"
    ? { back: "홈으로", label: "VYV HOUSE / ARCHIVE", title: "하우스 앨범", intro: "함께 살고, 만들고, 나눈 시간들을 촬영일 순서로 기록합니다.", count: `${albumPhotos.length}장의 기록`, open: "크게 보기", closing: "집은 함께 만든 순간들로 기억됩니다.", closingLabel: "VYV HOUSE / SEOUL" }
    : { back: "Back home", label: "VYV HOUSE / ARCHIVE", title: "House album", intro: "A chronological record of living, building, and sharing a house in Seoul.", count: `${albumPhotos.length} photographs`, open: "Open image", closing: "A house is remembered through the moments made together.", closingLabel: "VYV HOUSE / SEOUL" };

  return (
    <main className="album-page" lang={lang}>
      <header className="album-nav">
        <Link href={lang === "ko" ? "/?lang=ko" : "/"} aria-label={copy.back}><Wordmark /></Link>
        <Link className="album-back" href={lang === "ko" ? "/?lang=ko" : "/"}><ArrowLeft size={13} /> {copy.back}</Link>
        <div className="language-switcher" aria-label={lang === "ko" ? "언어 선택" : "Language selection"}>
          <Link href="/album" className={lang === "en" ? "is-active" : undefined}>EN</Link>
          <Link href="/album?lang=ko" className={lang === "ko" ? "is-active" : undefined}>KO</Link>
        </div>
      </header>

      <section className="album-intro">
        <div>
          <span>{copy.label}</span>
          <span>{copy.count}</span>
        </div>
        <h1>{copy.title}</h1>
        <p>{copy.intro}</p>
      </section>

      <div className="album-archive">
        {[...groups.entries()].map(([month, photos], groupIndex) => (
          <section className="album-month" key={month} aria-labelledby={`month-${month}`}>
            <header>
              <span>{String(groupIndex + 1).padStart(2, "0")}</span>
              <h2 id={`month-${month}`}>{monthFormatters[lang].format(new Date(`${month}-01T00:00:00Z`))}</h2>
              <span>{photos.length.toString().padStart(2, "0")} IMAGES</span>
            </header>
            <div className="album-grid">
              {photos.map((photo, index) => (
                <figure className={photo.width / photo.height > 1.25 ? "is-landscape" : undefined} key={photo.id}>
                  <a href={photo.src} target="_blank" rel="noreferrer" aria-label={`${copy.open}, ${dateFormatters[lang].format(new Date(photo.capturedAt))}`}>
                    <Image
                      src={photo.src}
                      alt=""
                      width={photo.width}
                      height={photo.height}
                      sizes="(max-width: 700px) 45vw, (max-width: 1100px) 50vw, 33vw"
                      loading={groupIndex === 0 && index < 4 ? "eager" : "lazy"}
                    />
                    <ArrowUpRight size={14} />
                  </a>
                  <figcaption>
                    <span>{dateFormatters[lang].format(new Date(photo.capturedAt))}</span>
                    <span>{photo.id.replace("img_", "FRAME ")}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        ))}
      </div>

      <section className="album-closing">
        <div>
          <span>{copy.closingLabel}</span>
          <h2>{copy.closing}</h2>
          <Link href={lang === "ko" ? "/?lang=ko" : "/"}>{copy.back} <ArrowRight size={15} /></Link>
        </div>
      </section>
    </main>
  );
}
