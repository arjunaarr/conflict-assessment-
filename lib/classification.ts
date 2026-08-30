import { Category, CategoryKey } from "@/types/assessment";

const CATEGORIES: Category[] = [
  {
    key: "AMAN",
    label: "Aman",
    minScore: 0,
    maxScore: 6,
    color: "green",
    title: "Kondisi Relatif Kondusif",
    description: "Belum banyak indikator potensi konflik yang terdeteksi berdasarkan jawaban yang diberikan.",
  },
  {
    key: "WASPADA",
    label: "Waspada",
    minScore: 7,
    maxScore: 13,
    color: "yellow",
    title: "Waspada",
    description: "Beberapa indikator awal potensi konflik mulai terdeteksi. Situasi perlu diperhatikan agar tidak berkembang menjadi masalah yang lebih besar.",
  },
  {
    key: "POTENSI_KONFLIK",
    label: "Potensi Konflik",
    minScore: 14,
    maxScore: 21,
    color: "orange",
    title: "Potensi Konflik",
    description: "Terdapat beberapa indikator yang menunjukkan adanya potensi eskalasi konflik. Situasi perlu dikelola dengan hati-hati dan tidak diperkeruh dengan tindakan provokatif.",
  },
  {
    key: "RISIKO_TINGGI",
    label: "Risiko Tinggi",
    minScore: 22,
    maxScore: 30,
    color: "red",
    title: "RISIKO TINGGI",
    description: "Jawaban menunjukkan adanya beberapa indikator serius yang perlu mendapatkan perhatian. Jangan melakukan tindakan yang dapat meningkatkan ketegangan atau membahayakan pihak lain.",
  },
];

export function classifyScore(score: number): Category {
  if (score < 0 || score > 30) {
    throw new Error("Score must be between 0 and 30");
  }
  if (score <= 6) return CATEGORIES[0];
  if (score <= 13) return CATEGORIES[1];
  if (score <= 21) return CATEGORIES[2];
  return CATEGORIES[3];
}

export function getCategoryByKey(key: CategoryKey): Category {
  const cat = CATEGORIES.find((c) => c.key === key);
  if (!cat) throw new Error(`Unknown category: ${key}`);
  return cat;
}

export { CATEGORIES };
