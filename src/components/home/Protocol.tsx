import { Check, Code2 } from "lucide-react";
import { SectionLabel } from "./Brand";

const protocols = [
  ["01", "Bring a project", "Come with something you want to move forward, not a polished pitch."],
  ["02", "Respect the runtime", "Protect quiet hours, shared space, and the attention of people around you."],
  ["03", "Share the diff", "Offer context, useful feedback, and what you learned while building."],
  ["04", "Leave it better", "A prototype, a lesson, a clean kitchen, or a new connection all count."],
];

const rhythms = [
  { command: "ship --late", label: "Late-night shipping", detail: "Tiny experiments become working products before the room goes quiet." },
  { command: "research --together", label: "Research jams", detail: "Papers, prompts, and rabbit holes turn into shared context." },
  { command: "demo --dinner", label: "Demo dinners", detail: "Friends drop in, share progress, and pressure-test what matters." },
  { command: "sprint --resident", label: "Resident sprints", detail: "Different projects, one room, and momentum that travels sideways." },
];

export function Protocol() {
  return (
    <section id="protocol" className="system-section protocol-section">
      <SectionLabel index="03">HOUSE_PROTOCOL</SectionLabel>
      <div className="section-heading"><div><p className="mono-kicker">HOW WE OPERATE</p><h2>Small rules for<br />a high-trust room.</h2></div><p>No grand manifesto. Just a few defaults that make living and building together work.</p></div>
      <ol className="protocol-list">{protocols.map(([number, title, description]) => <li key={number}><span>{number}</span><h3>{title}</h3><p>{description}</p><Check size={18} /></li>)}</ol>
      <div className="rhythm-terminal"><div className="rhythm-head"><Code2 size={15} /> house-rhythms.sh</div><div className="rhythm-grid">{rhythms.map((rhythm) => <div key={rhythm.command}><code>$ {rhythm.command}</code><h3>{rhythm.label}</h3><p>{rhythm.detail}</p></div>)}</div></div>
    </section>
  );
}
