import shiftsData from "@/data/shifts.json";
import { notFound } from "next/navigation";
import FlagIcon from "@/components/FlagIcon";
import { SignalBadge } from "@/components/SignalBadge";

type Shift = {
  id: string;
  country: string;
  country_label: string;
  genre_label: string;
  community: string;
  title: string;
  shift: string;
  context: string;
  analysis: string;
  why_now: string;
  evidence: string[];
  frames: {
    pro: string;
    con: string;
    question: string;
  };
  watch_next: string;
  tags: string[];
  sources: string;
  confidence: number;
  date: string;
  updated: string;
  signal: string;
  heat: number;
  delta7d: number;
};

export function generateStaticParams() {
  return (shiftsData as Shift[]).map((s) => ({ id: s.id }));
}

function stripEmoji(label: string): string {
  return label.replace(/^[^\w\s]+\s*/, "").trim();
}

export default function ShiftPage({ params }: { params: { id: string } }) {
  const shift = (shiftsData as Shift[]).find((s) => s.id === params.id);
  if (!shift) notFound();

  return (
    <main className="min-h-screen py-8 px-4 md:px-6">
      <div className="max-w-[720px] mx-auto">

        {/* Brand + Back */}
        <div className="flex justify-between items-center mb-4">
          <a href="/" className="flex items-baseline gap-1 hover:opacity-80 transition-opacity">
            <span className="font-serif italic text-ember text-sm">Magma</span>
            <span className="font-serif text-ash-200 text-sm">Watch</span>
          </a>
          <a
            href="/"
            className="text-[10px] font-mono text-ash-400 hover:text-ember transition-colors"
          >
            ← Back
          </a>
        </div>

        {/* Badge row */}
        <div className="flex flex-wrap items-center gap-1.5 mb-3">
          <span className="inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-mono
                           text-ash-200 bg-surface-2 rounded ring-1 ring-surface-3">
            <FlagIcon flag={shift.country_label.split(" ")[0]} size={14} />
            {stripEmoji(shift.country_label)}
          </span>
          <span className="px-2 py-0.5 text-[10px] font-mono text-ash-200
                           bg-surface-2 rounded ring-1 ring-surface-3">
            {shift.genre_label}
          </span>
          <SignalBadge signal={shift.signal} />
        </div>

        {/* Title */}
        <h1 className="text-xl md:text-2xl font-serif text-ash-100 leading-snug mb-2">
          {shift.title}
        </h1>

        {/* Metrics row */}
        <div className="flex flex-wrap gap-3 mb-3 text-[11px] font-mono">
          <span className="text-ash-400">
            Heat <span className="text-ash-200">{shift.heat}</span>
          </span>
          <span className="text-ash-400">
            Δ7d{" "}
            <span className={shift.delta7d > 0 ? "text-red" : "text-ash-200"}>
              {shift.delta7d > 0 ? "+" : ""}{shift.delta7d}
            </span>
          </span>
          <span className="text-ash-400">
            Confidence{" "}
            <span className="text-ash-200">{(shift.confidence * 100).toFixed(0)}%</span>
          </span>
        </div>

        <div className="section-divider mb-4" />

        {/* Lead paragraph */}
        <p className="text-sm text-ash-200 leading-relaxed mb-6">
          {shift.shift}
        </p>

        {/* Why now — hero version */}
        <section className="mb-4">
          <h2 className="article-heading">Why now</h2>
          <p className="text-sm text-ash-200 leading-relaxed">
            {shift.why_now}
          </p>
        </section>

        {/* Watch next — hero version */}
        <section className="mb-6">
          <h2 className="article-heading">Watch next</h2>
          <p className="text-sm text-ash-200 leading-relaxed">
            {shift.watch_next}
          </p>
        </section>

        <div className="section-divider mb-6" />

        {/* Article body — below the fold */}
        <article className="space-y-8 article-body">

          {/* What changed */}
          <section>
            <h2 className="article-heading">What changed</h2>
            <p className="article-text">{shift.context}</p>
          </section>

          {/* Why it matters */}
          <section>
            <h2 className="article-heading">Why it matters</h2>
            <ArticleAnalysis text={shift.analysis} />
          </section>

          {/* Why now — full version */}
          <section>
            <h2 className="article-heading">Why now</h2>
            <p className="article-text">{shift.why_now}</p>
          </section>

          {/* Evidence */}
          <section>
            <h2 className="article-heading">Evidence</h2>
            <ul className="space-y-2">
              {shift.evidence.map((e, i) => (
                <li key={i} className="flex gap-2 text-sm text-ash-200 leading-relaxed">
                  <span className="text-ember flex-shrink-0 mt-0.5">▸</span>
                  <span>{e}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Competing frames */}
          <section>
            <h2 className="article-heading">Competing frames</h2>
            <div className="space-y-3">
              <FrameItem label="Pro" text={shift.frames.pro} />
              <FrameItem label="Con" text={shift.frames.con} />
              <FrameItem label="Open question" text={shift.frames.question} accent />
            </div>
          </section>

          {/* Watch next — full version */}
          <section>
            <h2 className="article-heading">Watch next</h2>
            <p className="article-text">{shift.watch_next}</p>
          </section>

        </article>

        {/* Footer meta */}
        <footer className="mt-10 pt-4">
          <div className="section-divider mb-4" />
          <div className="flex flex-wrap gap-4 text-[10px] font-mono text-ash-400">
            <span>Sources: {shift.sources}</span>
            <span>Confidence: {(shift.confidence * 100).toFixed(0)}%</span>
            <span>Updated: {shift.updated}</span>
          </div>
          <div className="flex flex-wrap gap-1.5 mt-3">
            {shift.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 text-[10px] font-mono text-ash-400
                           bg-surface-2 rounded ring-1 ring-surface-3"
              >
                {tag}
              </span>
            ))}
          </div>
        </footer>

      </div>
    </main>
  );
}

/* --- Sub-components --- */

function ArticleAnalysis({ text }: { text: string }) {
  const paragraphs = text.split(/\n\n+/).filter(Boolean);
  return (
    <div className="space-y-4">
      {paragraphs.map((p, i) => (
        <p key={i} className="article-text">{p}</p>
      ))}
    </div>
  );
}

function FrameItem({
  label,
  text,
  accent = false,
}: {
  label: string;
  text: string;
  accent?: boolean;
}) {
  return (
    <div className="flex gap-3">
      <span
        className={`flex-shrink-0 text-[10px] font-mono uppercase tracking-wider mt-0.5 w-20 text-right
          ${accent ? "text-ember" : "text-ash-400"}`}
      >
        {label}
      </span>
      <p className="text-sm text-ash-200 leading-relaxed">{text}</p>
    </div>
  );
}
