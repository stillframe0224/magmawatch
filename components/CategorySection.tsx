import { Topic } from "@/lib/types";
import TopicCard from "./TopicCard";
import { CATEGORY_ICONS } from "./CategoryIcons";

interface CategorySectionProps {
  category: string;
  label: string;
  labelEn: string;
  topics: Topic[];
}

const CATEGORY_ACCENT: Record<string, string> = {
  security_alliance: "#c23616",
  technology_ai: "#e67e22",
  energy_resources: "#f0a500",
  culture_media: "#e67e22",
  democracy_governance: "#c23616",
  regional_conflicts: "#c23616",
  entertainment: "#f0a500",
  sports: "#e67e22",
  science_climate: "#f0a500",
};

export default function CategorySection({
  category,
  label,
  labelEn,
  topics,
}: CategorySectionProps) {
  const sorted = [...topics].sort((a, b) => a.rank - b.rank);
  const Icon = CATEGORY_ICONS[category];
  const accent = CATEGORY_ACCENT[category] ?? "#e67e22";

  return (
    <section className="mb-16">
      <div className="section-divider mb-8" />

      <div className="flex items-center gap-4 mb-6">
        {Icon && (
          <div
            className="flex items-center justify-center w-11 h-11 rounded-lg shrink-0"
            style={{
              color: accent,
              boxShadow: `inset 0 0 0 1px ${accent}44`,
              background: `linear-gradient(135deg, rgba(26,10,10,0.9), ${accent}11)`,
            }}
          >
            <Icon className="w-6 h-6" />
          </div>
        )}
        <div>
          <h2
            className="font-serif text-white text-[28px] leading-none"
            style={{ letterSpacing: "-1px" }}
          >
            {label}
          </h2>
          <div className="flex items-center gap-3 mt-1">
            <div
              className="h-[1px] w-12"
              style={{ background: `linear-gradient(90deg, ${accent}, transparent)` }}
            />
            <span
              className="font-mono text-[10px] text-ash-600 uppercase tracking-wider"
              style={{ lineHeight: 2 }}
            >
              {labelEn}
            </span>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {sorted.map((topic, i) => (
          <TopicCard key={topic.id} topic={topic} index={i} />
        ))}
      </div>
    </section>
  );
}
