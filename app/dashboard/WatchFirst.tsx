"use client";

import { useState } from "react";

type WatchFirstItem = {
  topic: string;
  region: string;
  heat: number;
  delta7d: number;
  spread: number;
  suppression: number;
  signal: string;
  whyNow: string | null;
  shiftId: string | null;
};

export function WatchFirst({ items }: { items: WatchFirstItem[] }) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  if (items.length === 0) return null;

  const toggle = (i: number) => {
    setExpandedIndex((prev) => (prev === i ? null : i));
  };

  return (
    <section className="mb-6">
      {/* Label */}
      <div className="flex items-center gap-2 mb-2">
        <span className="text-[10px] font-mono uppercase tracking-widest text-ember">
          Watch First
        </span>
        <div className="flex-1 h-px bg-ember/20" />
      </div>

      {/* Ticker line */}
      <div className="flex flex-wrap items-center gap-x-1 gap-y-1 text-sm">
        {items.map((item, i) => (
          <span key={i} className="contents">
            {i > 0 && (
              <span className="text-ash-600 mx-1 select-none">/</span>
            )}
            <button
              onClick={() => toggle(i)}
              className={`
                inline-flex items-center gap-1.5 px-1.5 py-0.5 rounded
                transition-colors cursor-pointer
                ${expandedIndex === i
                  ? "bg-ember/10 text-ember"
                  : "text-ash-200 hover:text-ember hover:bg-ember/5"
                }
              `}
            >
              {item.signal === "spike" && (
                <span className="text-amber text-xs">&#x1F525;</span>
              )}
              {item.signal === "accelerating" && (
                <span className="text-red text-xs">&#x25B2;</span>
              )}
              <span className="font-medium">{item.topic}</span>
              <span className="font-mono text-xs tabular-nums text-ash-400">
                &Delta;{item.delta7d > 0 ? "+" : ""}{item.delta7d}
              </span>
              <span
                className={`
                  text-[9px] font-mono uppercase tracking-wider
                  ${item.signal === "spike" ? "text-amber" : "text-red"}
                `}
              >
                {item.signal}
              </span>
            </button>
          </span>
        ))}
      </div>

      {/* Expandable detail cards */}
      {items.map((item, i) => {
        const open = expandedIndex === i;
        return (
          <div
            key={i}
            className={[
              "overflow-hidden transition-all duration-200 ease-out",
              open
                ? "max-h-60 opacity-100 mt-2"
                : "max-h-0 opacity-0 mt-0",
            ].join(" ")}
            aria-hidden={!open}
          >
            <div className="p-3 rounded-lg bg-surface-2 card-ring">
              <div className="flex flex-wrap items-start justify-between gap-4">
                {/* Left: topic info */}
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="text-ash-100 font-medium">
                      {item.topic}
                    </span>
                    <span className="text-xs text-ash-400">
                      {item.region}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-3 text-xs font-mono text-ash-400">
                    <span>
                      Heat{" "}
                      <span className="text-ash-200">{item.heat}</span>
                    </span>
                    <span>
                      &Delta;7d{" "}
                      <span className={item.delta7d > 0 ? "text-red" : "text-ash-200"}>
                        {item.delta7d > 0 ? "+" : ""}
                        {item.delta7d}
                      </span>
                    </span>
                    <span>
                      Spread{" "}
                      <span className="text-ash-200">{item.spread}</span>
                    </span>
                    <span>
                      Suppr.{" "}
                      <span className="text-ash-200">
                        {(item.suppression * 100).toFixed(0)}%
                      </span>
                    </span>
                  </div>
                  {item.whyNow && (
                    <p className="text-xs text-ash-300 leading-relaxed max-w-prose">
                      <span className="text-ember font-mono text-[10px] uppercase tracking-wider mr-1.5">
                        Why now
                      </span>
                      {item.whyNow}
                    </p>
                  )}
                </div>

                {/* Right: CTA */}
                {item.shiftId && (
                  <a
                    href={`/shifts/${item.shiftId}`}
                    tabIndex={open ? 0 : -1}
                    className="
                      flex-shrink-0 inline-flex items-center gap-1
                      px-3 py-1.5 rounded
                      text-xs font-mono text-ember
                      bg-ember/10 ring-1 ring-ember/20
                      hover:bg-ember/20 transition-colors
                    "
                  >
                    Open analysis
                    <span className="text-[10px]">&rarr;</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
