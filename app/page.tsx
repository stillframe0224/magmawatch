import { Topic } from "@/lib/types";
import topicsData from "@/data/topics.json";
import Hero from "@/components/Hero";
import CategorySection from "@/components/CategorySection";
import Footer from "@/components/Footer";

const CATEGORY_ORDER = [
  "security_alliance",
  "technology_ai",
  "energy_resources",
  "culture_media",
  "democracy_governance",
  "regional_conflicts",
  "entertainment",
  "sports",
  "science_climate",
];

export default function Home() {
  const topics = topicsData as Topic[];

  const categories = CATEGORY_ORDER.map((cat) => {
    const items = topics.filter((t) => t.category === cat);
    return {
      category: cat,
      label: items[0]?.category_label ?? cat,
      labelEn: items[0]?.category_en ?? cat,
      items,
    };
  }).filter((c) => c.items.length > 0);

  return (
    <main className="min-h-screen">
      <Hero topics={topics} />

      <div className="max-w-[960px] mx-auto px-4 md:px-6 pt-8 pb-4">
        {categories.map((c) => (
          <CategorySection
            key={c.category}
            category={c.category}
            label={c.label}
            labelEn={c.labelEn}
            topics={c.items}
          />
        ))}
      </div>

      <div className="max-w-[960px] mx-auto px-4 md:px-6">
        <Footer />
      </div>
    </main>
  );
}
