"use client";

import { Check, Circle } from "lucide-react";
import { useRef, type PointerEvent } from "react";

export function HouseTerminal({ residentCount }: { residentCount: number }) {
  const stageRef = useRef<HTMLDivElement>(null);

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    const stage = stageRef.current;
    if (!stage) return;
    const bounds = stage.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    stage.style.setProperty("--terminal-rx", `${y * -7}deg`);
    stage.style.setProperty("--terminal-ry", `${x * 9}deg`);
    stage.style.setProperty("--glow-x", `${(x + 0.5) * 100}%`);
    stage.style.setProperty("--glow-y", `${(y + 0.5) * 100}%`);
  }

  function resetPointer() {
    const stage = stageRef.current;
    if (!stage) return;
    stage.style.setProperty("--terminal-rx", "0deg");
    stage.style.setProperty("--terminal-ry", "0deg");
  }

  return (
    <div ref={stageRef} className="terminal-stage" onPointerMove={handlePointerMove} onPointerLeave={resetPointer}>
      <aside className="status-console" aria-label="Current house status">
        <div className="console-glow" aria-hidden="true" />
        <div className="console-head"><span><Circle size={8} fill="currentColor" /> vyv.house / live</span><span>⌘ K</span></div>
        <div className="console-screen">
          <div className="console-line"><span>~</span> house status <em>--live</em></div>
          <div className="console-output">
            <div><span>01 / system</span><strong>online</strong></div>
            <div><span>02 / residents</span><strong>{String(residentCount).padStart(2, "0")} active</strong></div>
            <div><span>03 / mode</span><strong>deep work</strong></div>
            <div><span>04 / base</span><strong>seoul, kr</strong></div>
          </div>
          <div className="console-signal" aria-label="House activity signal">
            <div><span>HOUSE SIGNAL</span><strong>87%</strong></div>
            <svg viewBox="0 0 420 74" preserveAspectRatio="none" aria-hidden="true">
              <defs><linearGradient id="signal-fill" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#b8f20d" stopOpacity=".28"/><stop offset="1" stopColor="#b8f20d" stopOpacity="0"/></linearGradient></defs>
              <path className="signal-area" d="M0 62 C28 58 32 44 60 48 S101 58 126 38 S174 43 198 31 S242 42 266 22 S310 34 337 18 S384 24 420 6 L420 74 L0 74 Z" />
              <path className="signal-line" d="M0 62 C28 58 32 44 60 48 S101 58 126 38 S174 43 198 31 S242 42 266 22 S310 34 337 18 S384 24 420 6" />
            </svg>
          </div>
          <div className="console-ready"><Check size={14} /> accepting collaborators <span className="cursor" /></div>
        </div>
        <div className="console-foot"><span>VYV OS / 26.07</span><span>UPTIME 99.9%</span></div>
      </aside>
    </div>
  );
}
