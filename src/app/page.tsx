import { residents } from "@/data/residents";
import { guestbookEntries } from "@/data/guestbook";
import { House, Mail, MapPin, Sparkles, Users, ArrowUpRight, NotebookPen, Globe2, Camera, CalendarDays } from "lucide-react";

function GitHubIcon({ className = "h-3.5 w-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M12 1.5C6.201 1.5 1.5 6.388 1.5 12.418c0 4.824 3.008 8.916 7.18 10.36.524.1.714-.233.714-.518 0-.256-.01-1.102-.014-1.998-2.922.652-3.538-1.286-3.538-1.286-.476-1.256-1.163-1.59-1.163-1.59-.95-.67.072-.656.072-.656 1.052.076 1.606 1.123 1.606 1.123.935 1.65 2.454 1.174 3.052.897.094-.697.366-1.174.666-1.444-2.333-.274-4.786-1.2-4.786-5.342 0-1.18.406-2.145 1.072-2.902-.108-.275-.464-1.383.102-2.882 0 0 .874-.287 2.864 1.108A9.675 9.675 0 0 1 12 6.853a9.68 9.68 0 0 1 2.607.364c1.988-1.395 2.86-1.108 2.86-1.108.568 1.5.212 2.607.104 2.882.668.757 1.07 1.722 1.07 2.902 0 4.152-2.457 5.064-4.796 5.333.376.334.712.99.712 1.996 0 1.442-.012 2.604-.012 2.958 0 .288.188.623.72.517 4.168-1.446 7.173-5.537 7.173-10.358C22.5 6.388 17.799 1.5 12 1.5Z" />
    </svg>
  );
}

function XIcon({ className = "h-3.5 w-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M18.901 2.25h3.68l-8.04 9.19L24 21.75h-7.406l-5.8-7.585-6.638 7.585H.474l8.6-9.83L0 2.25h7.594l5.243 6.932L18.901 2.25Zm-1.291 17.295h2.04L6.486 4.338H4.298L17.61 19.545Z" />
    </svg>
  );
}


const houseProtocols = [
  "live close to the work",
  "ship more than you explain",
  "share context before you share opinions",
  "prototype in public, refine in private",
  "make the room smarter than the individual",
];

const activities = [
  {
    title: "Late-night shipping",
    description: "Fast builds, tiny experiments, and messy prototypes that turn into real products by sunrise.",
  },
  {
    title: "Research jams",
    description: "Papers, prompts, wild ideas, and rabbit holes turned into tangible insight together.",
  },
  {
    title: "Demo dinners",
    description: "Founders, builders, and friends drop in, share progress, and pressure-test what is worth pushing further.",
  },
  {
    title: "Resident sprints",
    description: "Focused weeks where everyone is building different things, but momentum leaks helpfully across the room.",
  },
];

const stats = [
  { label: "Location", value: "Seoul" },
  { label: "Format", value: "Builder residency" },
  { label: "Tempo", value: "Night shift" },
  { label: "Status", value: "Open to collabs" },
];

const principles = [
  ["live close to the work", "A house where the line between conversation and execution is intentionally thin."],
  ["cross-pollination by default", "Builders across product, code, design, research, and culture influence each other daily."],
  ["internet-native but human", "Dark screens, whiteboards, long dinners, prototypes, and ambient obsession in one place."],
];

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@vyv.house",
    accent: "text-[#ff3b7c]",
  },
  {
    icon: MapPin,
    label: "Base",
    value: "Seoul / exact location shared privately",
    accent: "text-[#ff3b7c]",
  },
  {
    icon: Users,
    label: "Openings",
    value: "Current residents listed publicly. Collaborations and visits open by context.",
    accent: "text-white/80",
  },
];

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-[#060708] text-[#f3f4f6]">
      <div className="pointer-events-none absolute inset-0 soft-grid opacity-[0.14]" />
      <div className="hero-orb absolute left-[-10rem] top-[-2rem] h-80 w-80 bg-[rgba(212,255,0,0.2)]" />
      <div className="hero-orb absolute right-[-8rem] top-28 h-80 w-80 bg-[rgba(255,59,124,0.16)]" />

      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/8 bg-[#060708]/90 backdrop-blur-xl supports-[backdrop-filter]:bg-[#060708]/82">
        <div className="site-container flex items-center justify-between px-5 py-4 md:px-8">
          <a href="#top" className="font-display text-xl tracking-wide text-white">
            <span className="text-white">vyv</span>
            <span className="text-[#ff3b7c]">.</span>
            <span className="text-[#d4ff00]">house</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm text-white/66 md:flex">
            <a href="#about" className="transition hover:text-white">about</a>
            <a href="#residents" className="transition hover:text-white">residents</a>
            <a href="#guestbook" className="transition hover:text-white">guestbook</a>
            <a href="#life" className="transition hover:text-white">life</a>
            <a href="#events" className="transition hover:text-white">events</a>
            <a href="#join" className="transition hover:text-white">join</a>
          </nav>
          <a
            href="#join"
            className="border border-white/12 px-4 py-2 text-sm font-medium text-white transition hover:border-[#d4ff00]/55 hover:text-[#d4ff00]"
            style={{ borderRadius: "var(--radius-button)" }}
          >
            say hi
          </a>
        </div>
      </header>

      <section id="top" className="site-container px-5 pb-16 pt-28 md:px-8 md:pb-24 md:pt-32">
        <div className="hero-grid gap-10 items-center">
          <div>
            <div className="editorial-kicker editorial-kicker-pink mb-6">
              <House size={14} className="text-[#d4ff00]" />
              hacker house / builder residency
            </div>

            <h1 className="max-w-5xl font-display text-[3.4rem] leading-[0.92] tracking-[-0.045em] md:text-[6.4rem]">
              a house for
              <br />
              <span className="gradient-text">builders with taste</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-white/72 md:text-lg">
              <span className="highlight-block-pink">vyv-house</span> is a vibey hacker house where founders,
              researchers, designers, and internet weirdos live close to the work — building,
              testing, hosting, and cross-pollinating ideas in real time.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#residents"
                className="inline-flex items-center justify-center gap-2 bg-[#d4ff00] px-5 py-3 font-semibold text-black transition hover:bg-[#e2ff57]"
                style={{ borderRadius: "var(--radius-button)" }}
              >
                Meet the residents
                <ArrowUpRight size={18} />
              </a>
              <a
                href="#join"
                className="inline-flex items-center justify-center gap-2 border border-white/12 px-5 py-3 font-medium text-white transition hover:border-white/24 hover:bg-white/[0.03]"
                style={{ borderRadius: "var(--radius-button)" }}
              >
                Apply / Contact
              </a>
            </div>

          </div>

          <div className="hero-signal-card">
            <div className="hero-signal-head">
              <div className="text-lg font-semibold text-white md:text-xl">A moment from vyv.house</div>
              <div className="hero-live-pill">
                <span className="hero-live-dot" />
                live
              </div>
            </div>

            <div className="hero-visual-shell mt-5">
              <video
                className="hero-visual"
                src="/hero-video.mp4"
                autoPlay
                muted
                loop
                playsInline
              />
              <div className="hero-visual-overlay" aria-hidden="true" />
              <div className="hero-visual-noise" aria-hidden="true" />
            </div>

            <div className="hero-signal-stats">
              <div className="hero-signal-stat">
                <div className="text-[11px] uppercase tracking-[0.24em] text-white/42">residents</div>
                <div className="mt-2 font-emphasis text-4xl text-[#d4ff00]">06</div>
              </div>
              <div className="hero-signal-stat">
                <div className="text-[11px] uppercase tracking-[0.24em] text-white/42">mode</div>
                <div className="mt-2 font-emphasis text-4xl text-[#ff3b7c]">ship</div>
              </div>
            </div>
          </div>
        </div>

        <div className="data-strip mt-14 grid md:grid-cols-4">
          {stats.map((item) => (
            <div key={item.label} className="data-cell px-0 py-4 md:px-5">
              <div className="text-[11px] uppercase tracking-[0.24em] text-white/42">{item.label}</div>
              <div className="mt-2 text-sm text-white/76 md:text-base">{item.value}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="site-container px-5 py-16 md:px-8 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <div className="editorial-kicker mb-5">what is vyv-house</div>
            <h2 className="font-display text-4xl tracking-[-0.03em] md:text-6xl">
              a <span className="highlight-block-pink">creative bunker</span> for people who build
            </h2>
          </div>
          <div className="space-y-0">
            {principles.map(([title, description]) => (
              <div
                key={title}
                className="grid gap-4 border-b border-white/8 py-6 md:grid-cols-[0.9fr_1.1fr] md:gap-8"
              >
                <div className="text-sm uppercase tracking-[0.18em] text-white/48">{title}</div>
                <p className="max-w-xl text-sm leading-6 text-white/70 md:text-base">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="site-container px-5 pb-16 md:px-8 md:pb-24">
        <div className="signal-split pt-6">
          <div className="signal-image-panel">
            <img src="/signal-left.jpg" alt="vyv.house atmosphere" className="signal-image" />
            <div className="signal-image-noise" aria-hidden="true" />
            <div className="signal-image-scanlines" aria-hidden="true" />
          </div>

          <div>
            <div className="editorial-kicker editorial-kicker-pink mb-5 signal-kicker-pink">signal / atmosphere</div>
            <div className="max-w-4xl">
              <h2 className="font-display text-4xl tracking-[-0.03em] md:text-6xl">
                part residency, part lab, part <span className="highlight-block-pink signal-highlight-pink">internet salon</span>
              </h2>
              <div className="mt-6 max-w-3xl space-y-4 text-base leading-7 text-white/72 md:text-lg">
                <p>
                  We optimize for proximity: to work, to feedback, to energy, and to the kind of
                  people who make your ideas sharper just by being in the room.
                </p>
                <p>
                  This is where products get unstuck, collaborations start naturally, and new
                  rituals for AI-native building get tested in the open.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-14 pt-6 text-center">
          <div className="editorial-kicker editorial-kicker-pink signal-kicker-pink justify-center">house protocol</div>
          <div className="mt-8 space-y-4 text-2xl leading-tight tracking-[-0.03em] text-white/88 md:text-4xl">
            {houseProtocols.map((line, index) => (
              <p key={line} className={index === houseProtocols.length - 1 ? "text-[#ff3b7c]" : ""}>
                {line}
              </p>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      <section id="residents" className="site-container px-5 py-16 md:px-8 md:py-24">
        <div className="mb-10 max-w-4xl">
          <div className="editorial-kicker mb-4">the residents</div>
          <h2 className="font-display text-4xl tracking-[-0.03em] md:text-6xl">the people make the house</h2>
          <p className="mt-5 max-w-2xl text-sm leading-6 text-white/65 md:text-base">
            Real residents only — profiles link directly to the people currently building from the house.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {residents.map((resident) => (
            <article
              key={resident.id}
              className="resident-card p-5 transition duration-300 hover:-translate-y-1 hover:border-[#d4ff00]/35"
            >
              <div className="flex items-start gap-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={resident.avatarUrl}
                  alt={resident.name}
                  className="h-20 w-20 border border-white/10 object-cover"
                  style={{ borderRadius: "0.45rem" }}
                />
                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-xl font-semibold text-white">{resident.name}</h3>
                      <p className="mt-1 text-sm text-[#ff3b7c]">{resident.role}</p>
                    </div>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2 text-sm text-white/65">
                    <a href={resident.githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:text-white">
                      <GitHubIcon /> {resident.githubId}
                    </a>
                    {resident.xUrl ? (
                      <a href={resident.xUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:text-white">
                        <XIcon /> @{resident.xHandle}
                      </a>
                    ) : null}
                  </div>
                </div>
              </div>
              <p className="mt-5 text-sm leading-6 text-white/72">{resident.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {resident.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60"
                    style={{ borderRadius: "var(--radius-chip)" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="guestbook" className="site-container px-5 pt-8 pb-16 md:px-8 md:pt-12 md:pb-24">
        <div className="mb-10 max-w-4xl">
          <div className="editorial-kicker editorial-kicker-pink mb-4">guestbook</div>
          <h2 className="font-display text-4xl tracking-[-0.03em] md:text-6xl">
            leave your <span className="highlight-block-pink">internet card</span>
          </h2>
          <p className="mt-5 max-w-2xl text-sm leading-6 text-white/65 md:text-base">
            For people who actually visited vyv.house. Leave a small card — your name, GitHub, X, website,
            and one short note about who you are or what you are building.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {guestbookEntries.map((entry) => (
            <article
              key={entry.id}
              className="guestbook-card p-5 transition duration-300 hover:-translate-y-1 hover:border-[#ff3b7c]/35"
            >
              <div className="flex items-start gap-4">
                {entry.avatarUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={entry.avatarUrl}
                    alt={entry.name}
                    className="h-20 w-20 border border-white/10 object-cover"
                    style={{ borderRadius: "0.45rem" }}
                  />
                ) : null}
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.24em] text-white/42">
                    <NotebookPen size={14} className="text-[#ff3b7c]" />
                    {entry.status === "open" ? "open slot" : "guest entry"}
                  </div>
                  <h3 className="mt-3 text-xl font-semibold text-white">{entry.name}</h3>
                  {entry.title ? <p className="mt-1 text-sm text-[#ff3b7c]">{entry.title}</p> : null}
                </div>
              </div>

              <p className="mt-5 text-sm leading-6 text-white/72">{entry.note}</p>

              <div className="mt-5 flex flex-wrap gap-3 text-sm text-white/65">
                {entry.githubUrl && entry.githubHandle ? (
                  <a href={entry.githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:text-white">
                    <GitHubIcon /> {entry.githubHandle}
                  </a>
                ) : null}
                {entry.xUrl && entry.xHandle ? (
                  <a href={entry.xUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:text-white">
                    <XIcon /> @{entry.xHandle}
                  </a>
                ) : null}
                {entry.instagramUrl && entry.instagramHandle ? (
                  <a href={entry.instagramUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:text-white">
                    <Camera size={14} /> @{entry.instagramHandle}
                  </a>
                ) : null}
                {entry.websiteUrl ? (
                  <a href={entry.websiteUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:text-white">
                    <Globe2 size={14} /> {entry.websiteLabel ?? "website"}
                  </a>
                ) : null}
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {entry.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60"
                    style={{ borderRadius: "var(--radius-chip)" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <div className="section-divider" />

      <section id="life" className="site-container px-5 pt-8 pb-16 md:px-8 md:pt-12 md:pb-24">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <div className="editorial-kicker editorial-kicker-pink signal-kicker-pink mb-5">life at the house</div>
            <h2 className="font-display text-4xl tracking-[-0.03em] md:text-6xl">
              what actually <span className="highlight-block-pink signal-highlight-pink">happens here</span>
            </h2>
          </div>
          <div className="border-t border-white/8">
            {activities.map((activity) => (
              <div key={activity.title} className="grid gap-4 border-b border-white/8 py-6 md:grid-cols-[0.9fr_1.1fr] md:gap-8">
                <div>
                  <div className="mb-3 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.24em] text-white/42">
                    <Sparkles size={14} className="text-[#ff3b7c]" />
                    activity
                  </div>
                  <h3 className="text-lg font-semibold text-white md:text-xl">{activity.title}</h3>
                </div>
                <p className="max-w-xl text-sm leading-6 text-white/68 md:text-base">{activity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="events" className="site-container px-5 pt-8 pb-16 md:px-8 md:pt-12 md:pb-24">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <div className="editorial-kicker editorial-kicker-pink signal-kicker-pink mb-5">events / calendar</div>
            <h2 className="font-display text-4xl tracking-[-0.03em] md:text-6xl">
              what is <span className="highlight-block-pink signal-highlight-pink">happening next</span>
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-6 text-white/65 md:text-base">
              Upcoming dinners, demo nights, and resident sprints. Powered by the
              <span className="text-white/80"> vyv.house</span> calendar on Luma — RSVP directly from the embed.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.24em] text-white/42">
              <CalendarDays size={14} className="text-[#ff3b7c]" />
              live from luma
            </div>
            <a
              href="https://luma.com/vyvhouse"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 border border-white/12 px-4 py-2 text-sm font-medium text-white transition hover:border-[#ff3b7c]/55 hover:text-[#ff3b7c]"
              style={{ borderRadius: "var(--radius-button)" }}
            >
              Open on Luma
              <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="events-frame">
            <iframe
              src="https://luma.com/embed/calendar/cal-hHz7R98dsv1Lf3z/events?lt=dark"
              className="events-iframe"
              loading="lazy"
              allowFullScreen
              aria-hidden="false"
              tabIndex={0}
              title="vyv.house events calendar"
            />
            <div className="events-frame-noise" aria-hidden="true" />
          </div>
        </div>
      </section>

      <section id="join" className="site-container px-5 pt-8 pb-16 md:px-8 md:pt-12 md:pb-24">
        <div className="grid gap-10 pt-6 md:grid-cols-[1.15fr_0.85fr] md:items-end">
          <div>
            <div className="editorial-kicker editorial-kicker-pink mb-5">join / contact</div>
            <h2 className="font-display text-4xl tracking-[-0.03em] md:text-6xl">
              want to <span className="highlight-block-pink">build from here?</span>
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/72">
              If you are a founder, builder, researcher, or operator who wants to live near momentum,
              send context. Applications, collaborations, and dinner conversations are all welcome.
            </p>
          </div>

          <div className="border-t border-white/8">
            {contactItems.map(({ icon: Icon, label, value, accent }) => (
              <div key={label} className="flex items-start gap-4 border-b border-white/8 py-5">
                <Icon size={16} className={`mt-1 ${accent}`} />
                <div>
                  <div className="text-[11px] uppercase tracking-[0.24em] text-white/42">{label}</div>
                  <div className="mt-2 text-sm leading-6 text-white/76 md:text-base">{value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      <footer className="px-5 py-8 md:px-8">
        <div className="site-container flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-3">
            <div>
              <div className="font-display text-2xl">vyv.house</div>
              <div className="mt-1 text-sm text-white/45">live together, think together, ship together.</div>
            </div>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-xs uppercase tracking-widest text-white/40">Powered by</span>
              <img src="/hashed-logo-transparent.png" alt="Hashed" className="h-[14px] opacity-60 object-contain" />
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-sm text-white/55">
            <a href="https://github.com/vyvhouse/vyv-house" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">GitHub</a>
            <a href="https://x.com/simonkim_nft" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">X</a>
            <a href="mailto:hello@vyv.house" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
