import { Topic } from "@/lib/types";
import ObservationBar from "./ObservationBar";

interface HeroProps {
  topics: Topic[];
}

export default function Hero({ topics }: HeroProps) {
  return (
    <section className="relative min-h-[60vh] flex flex-col items-center justify-center px-4 overflow-hidden">
      {/* Detailed world map background */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/world-map.svg"
          alt=""
          className="w-full h-full object-contain"
          style={{ maxHeight: "100%" }}
        />
      </div>

      {/* Radial gradients */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: [
            "radial-gradient(ellipse 900px 500px at 10% 80%, rgba(194,54,22,0.3), transparent)",
            "radial-gradient(ellipse 700px 400px at 90% 15%, rgba(230,126,34,0.15), transparent)",
            "radial-gradient(ellipse 600px 350px at 50% 100%, rgba(240,165,0,0.12), transparent)",
            "radial-gradient(ellipse 1200px 600px at 50% 50%, rgba(194,54,22,0.06), transparent)",
          ].join(", "),
        }}
      />

      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(26,10,10,0.7) 0%, rgba(26,10,10,0.3) 30%, transparent 50%, transparent 75%, rgba(26,10,10,0.85) 100%)",
        }}
      />

      <div className="relative text-center max-w-3xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-8">
          <h1
            className="font-serif leading-none"
            style={{ fontSize: "clamp(64px, 12vw, 110px)" }}
          >
            <span className="font-bold text-ember" style={{ letterSpacing: "-4px" }}>
              Magma
            </span>
            <span className="text-white" style={{ letterSpacing: "-3px" }}>
              Watch
            </span>
          </h1>
          <div className="flex flex-col gap-2 mt-2">
            <div
              className="rounded-full"
              style={{
                width: 56,
                height: 2.5,
                backgroundColor: "var(--red)",
                opacity: 0.7,
              }}
            />
            <div
              className="rounded-full"
              style={{
                width: 44,
                height: 1.5,
                backgroundColor: "var(--ember)",
                opacity: 0.4,
              }}
            />
          </div>
        </div>

        <p className="font-serif italic text-ash-400 text-[22px] md:text-[24px] mb-4">
          Observe shifts before they surface.
        </p>

        <p className="text-[14px] md:text-[15px] text-ash-400 mb-10 max-w-lg mx-auto leading-relaxed">
          同じ出来事が、世界のどこで、誰に、どう異なって受け止められているか。そのズレから構造変化を読む。
        </p>

        <ObservationBar topics={topics} />

        <p className="font-mono text-[10px] text-ash-600 mt-8" style={{ lineHeight: 2 }}>
          Powered by ICE — Influence Change Engine
        </p>
      </div>
    </section>
  );
}
