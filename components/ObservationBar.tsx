import { Topic } from "@/lib/types";

interface ObservationBarProps {
  topics: Topic[];
}

export default function ObservationBar({ topics }: ObservationBarProps) {
  const totalTopics = topics.length;
  const categories = new Set(topics.map((t) => t.category)).size;
  const communities = new Set(topics.flatMap((t) => t.community.map((c) => c.com))).size;

  const items = [
    { label: "Topics", value: String(totalTopics), highlight: true },
    { label: "Categories", value: String(categories) },
    { label: "Communities", value: `${communities}+` },
    { label: "Languages", value: "EN・JP" },
    { label: "Period", value: "W4 2026.03" },
  ];

  return (
    <div
      className="inline-flex flex-wrap justify-center gap-x-4 gap-y-2 font-mono bg-surface rounded-lg px-5 py-3"
      style={{
        boxShadow:
          "inset 0 0 0 1px rgba(194,54,22,0.12), 0 2px 8px rgba(0,0,0,0.3)",
      }}
    >
      {items.map((item) => (
        <div key={item.label} className="flex flex-col items-center">
          <span
            className={`text-[27px] md:text-[30px] font-mono leading-none ${
              item.highlight ? "text-ember" : "text-white"
            }`}
            style={{ fontWeight: 500 }}
          >
            {item.value}
          </span>
          <span
            className="text-[9px] uppercase tracking-wider mt-1"
            style={{ color: "#999", lineHeight: 2 }}
          >
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}
