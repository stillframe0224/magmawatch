export interface Facet {
  flag: string;
  label: string;
  desc: string;
}

export interface CommunityTemp {
  flag: string;
  com: string;
  pr: number;
  v: string;
  frame: string;
  tone: string;
  presence: "high" | "medium" | "low" | "absent";
}

export interface Topic {
  id: string;
  category: string;
  category_label: string;
  category_en: string;
  rank: number;
  title: string;
  shift: string;
  pressure: number;
  spread: number;
  velocity: string;
  sources: string[];
  fault_line: string;
  facets: Facet[];
  community: CommunityTemp[];
  watch_next: string;
}
