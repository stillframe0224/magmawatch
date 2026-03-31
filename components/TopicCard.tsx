"use client";

import { useState, useMemo } from "react";
import { Topic } from "@/lib/types";
import FlagIcon, { isCountryFlag } from "./FlagIcon";

interface TopicCardProps {
  topic: Topic;
  index: number;
}

function getRankColor(rank: number): string {
  if (rank === 1) return "text-red";
  if (rank === 2) return "text-ember";
  if (rank === 3) return "text-amber";
  return "text-ash-400";
}

function getTitleColor(rank: number): string {
  if (rank <= 2) return "#f09030";
  if (rank === 3) return "#e67e22";
  return "#d4701e";
}

function getPressureColor(p: number): string {
  if (p >= 80) return "#c23616";
  if (p >= 60) return "#e67e22";
  if (p >= 40) return "#f0a500";
  return "#999";
}

function getPressureGlow(p: number): string {
  if (p >= 80) return "0 0 12px rgba(194,54,22,0.5)";
  return "none";
}

function isRedditSource(s: string): boolean {
  return s.startsWith("r/");
}

export default function TopicCard({ topic, index }: TopicCardProps) {
  const [expanded, setExpanded] = useState(false);

  const titleFlags = useMemo(() => {
    const seen = new Set<string>();
    return topic.facets
      .map((f) => f.flag)
      .filter((f) => isCountryFlag(f) && !seen.has(f) && (seen.add(f), true));
  }, [topic.facets]);

  return (
    <article
      className={`animate-fade-in-up rounded-lg cursor-pointer transition-all duration-300 ${
        expanded
          ? "bg-surface-2 card-ring-hover"
          : "bg-surface card-ring hover:bg-surface-2 hover:card-ring-hover"
      }`}
      style={{ animationDelay: `${index * 80}ms` }}
      onClick={() => setExpanded(!expanded)}
    >
      {/* Collapsed: grid layout */}
      <div className="p-5 flex items-start gap-3">
        {/* Rank */}
        <span
          className={`font-mono text-[26px] font-semibold leading-none shrink-0 w-[44px] text-center ${getRankColor(
            topic.rank
          )}`}
        >
          {topic.rank}
        </span>

        {/* Body */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start gap-2 mb-2">
            <h3
              className="font-serif text-xl leading-snug"
              style={{
                color: getTitleColor(topic.rank),
                fontWeight: 700,
                letterSpacing: "-0.5px",
              }}
            >
              {topic.title}
            </h3>
            {titleFlags.length > 0 && (
              <div className="flex gap-1 shrink-0 mt-1">
                {titleFlags.map((f) => (
                  <FlagIcon key={f} flag={f} size={16} />
                ))}
              </div>
            )}
          </div>

          <div className="mb-2">
            <span className="font-mono text-[9px] text-red font-medium uppercase tracking-wider mr-2">
              SHIFT
            </span>
            <span className="text-[13px] text-ash-100">{topic.shift}</span>
          </div>

          {/* Source badges + spread/velocity */}
          <div className="flex flex-wrap items-center gap-1.5 mt-2">
            {topic.sources.map((src) => (
              <span
                key={src}
                className={`font-mono text-[9px] px-2 py-0.5 rounded-full ${
                  isRedditSource(src)
                    ? "text-[#e8a090] ring-reddit"
                    : "text-ash-400 ring-pill"
                }`}
                style={
                  isRedditSource(src)
                    ? {
                        background: "rgba(194,54,22,0.06)",
                        boxShadow: "inset 0 0 0 1px rgba(194,54,22,0.18)",
                      }
                    : undefined
                }
              >
                {src}
              </span>
            ))}
            <span className="font-mono text-[9px] text-ash-600 ml-1">
              Spread:{topic.spread} {topic.velocity}
            </span>
          </div>
        </div>

        {/* Pressure + chevron */}
        <div className="shrink-0 flex flex-col items-center w-[60px]">
          <span
            className="font-mono text-[26px] font-semibold leading-none"
            style={{
              color: getPressureColor(topic.pressure),
              textShadow: getPressureGlow(topic.pressure),
            }}
          >
            {topic.pressure}
          </span>
          <span
            className="font-mono uppercase mt-1"
            style={{ fontSize: "7px", lineHeight: 2, color: "#999" }}
          >
            PRESSURE
          </span>
          <span
            className={`text-ash-600 text-xs mt-1 transition-transform duration-200 ${
              expanded ? "rotate-180" : ""
            }`}
          >
            ▾
          </span>
        </div>
      </div>

      {/* Expanded */}
      {expanded && (
        <div
          className="px-5 pb-5 animate-fade-in-up"
          style={{ paddingLeft: "74px", animationDelay: "0ms" }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Gradient divider */}
          <div className="section-divider mb-5" />

          {/* Fault line */}
          <div className="mb-5">
            <span className="font-mono text-[9px] text-ember uppercase tracking-wider">
              Fault line:
            </span>
            <span className="font-mono text-[9px] text-ember ml-1.5">
              {topic.fault_line}
            </span>
          </div>

          {/* Facets */}
          <div className="mb-5">
            <h4
              className="font-mono text-[9px] text-ember uppercase tracking-wider mb-3"
              style={{ lineHeight: 2 }}
            >
              FACETS
            </h4>
            <div className="space-y-2">
              {topic.facets.map((f, i) => (
                <div
                  key={i}
                  className="bg-surface rounded-md p-3 card-ring"
                >
                  <div className="flex items-start gap-2">
                    <span className="shrink-0 mt-0.5"><FlagIcon flag={f.flag} /></span>
                    <div>
                      <span className="text-[13px] font-bold text-ash-100">
                        {f.label}
                      </span>
                      <p className="text-[12px] text-ash-400 mt-0.5 leading-relaxed">
                        {f.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Community Temperature Map */}
          <div className="mb-5">
            <h4
              className="font-mono text-[9px] text-ember uppercase tracking-wider mb-3"
              style={{ lineHeight: 2 }}
            >
              COMMUNITY TEMPERATURE MAP
            </h4>
            <div className="space-y-1">
              {topic.community.map((c, i) => {
                const isAbsent = c.presence === "absent";
                return (
                  <div
                    key={i}
                    className={`rounded-md px-3 py-2 transition-all ${
                      isAbsent
                        ? "border-l-2 border-dashed"
                        : "bg-surface card-ring"
                    }`}
                    style={{
                      opacity: isAbsent ? 0.4 : 1,
                      borderColor: isAbsent
                        ? "rgba(255,255,255,0.06)"
                        : "transparent",
                    }}
                  >
                    <div className="flex items-center gap-2 flex-wrap md:flex-nowrap">
                      <span className="shrink-0 w-[28px] flex items-center justify-center">
                        <FlagIcon flag={c.flag} />
                      </span>
                      <span className="font-mono text-[11px] font-bold text-ash-200 shrink-0 w-[110px] truncate">
                        {c.com}
                      </span>
                      <span
                        className="font-mono text-[18px] font-semibold shrink-0 w-[48px] text-right"
                        style={{ color: getPressureColor(c.pr) }}
                      >
                        {c.pr}
                      </span>
                      <span className="font-mono text-[11px] text-ash-400 shrink-0 w-[20px]">
                        {c.v}
                      </span>
                      <span className="text-[12px] text-ash-400 flex-1 min-w-0">
                        {c.frame}
                      </span>
                      <div className="flex gap-1 shrink-0">
                        {c.tone !== "—" && (
                          <span
                            className="font-mono px-1.5 py-0.5 rounded-full ring-pill"
                            style={{ fontSize: "8px", lineHeight: 2, color: "#999" }}
                          >
                            {c.tone}
                          </span>
                        )}
                        <span
                          className={`font-mono px-1.5 py-0.5 rounded-full ${
                            c.presence === "high"
                              ? "text-emerald-400"
                              : c.presence === "medium"
                              ? "text-amber"
                              : c.presence === "low"
                              ? "text-ash-600"
                              : "text-ash-600"
                          }`}
                          style={{
                            fontSize: "8px",
                            lineHeight: 2,
                            boxShadow: "inset 0 0 0 1px rgba(194,54,22,0.12)",
                          }}
                        >
                          {c.presence}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Watch next - amber well */}
          <div
            className="rounded-md p-4"
            style={{
              background: "rgba(240,165,0,0.04)",
              boxShadow:
                "inset 0 0 0 1px rgba(240,165,0,0.2), inset 0 2px 4px rgba(0,0,0,0.2)",
            }}
          >
            <h4
              className="font-mono text-amber uppercase tracking-wider mb-2 font-semibold"
              style={{ fontSize: "9px", lineHeight: 2 }}
            >
              WATCH NEXT
            </h4>
            <p className="text-[12px] text-ash-200 leading-relaxed">
              {topic.watch_next}
            </p>
          </div>
        </div>
      )}
    </article>
  );
}
