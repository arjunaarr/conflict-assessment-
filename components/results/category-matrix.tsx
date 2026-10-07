import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CategoryKey } from "@/types/assessment";
import { cn } from "@/lib/utils";
import { CheckCircle2, Layers } from "lucide-react";

interface CategoryMatrixProps {
  currentCategoryKey: CategoryKey;
  totalScore: number;
}

const CATEGORY_TIERS = [
  {
    key: "AMAN" as CategoryKey,
    range: "0–6",
    colorDot: "🟢",
    colorName: "Hijau",
    label: "Relatif Aman",
    description: "Belum banyak indikator yang terdeteksi",
    bgStyle: "bg-green-50 border-green-300 text-green-900",
    badgeStyle: "bg-green-600 text-white",
  },
  {
    key: "WASPADA" as CategoryKey,
    range: "7–13",
    colorDot: "🟡",
    colorName: "Kuning",
    label: "Waspada",
    description: "Mulai terdapat indikator yang perlu diperhatikan",
    bgStyle: "bg-yellow-50 border-yellow-300 text-yellow-900",
    badgeStyle: "bg-yellow-600 text-white",
  },
  {
    key: "POTENSI_KONFLIK" as CategoryKey,
    range: "14–21",
    colorDot: "🟠",
    colorName: "Oren",
    label: "Potensi Konflik",
    description: "Terdapat beberapa indikator yang menunjukkan potensi eskalasi",
    bgStyle: "bg-orange-50 border-orange-300 text-orange-900",
    badgeStyle: "bg-orange-600 text-white",
  },
  {
    key: "RISIKO_TINGGI" as CategoryKey,
    range: "22–30",
    colorDot: "🔴",
    colorName: "Merah",
    label: "Risiko Tinggi",
    description: "Terdapat banyak indikator serius yang membutuhkan perhatian lebih lanjut",
    bgStyle: "bg-red-50 border-red-300 text-red-900",
    badgeStyle: "bg-red-600 text-white",
  },
];

export function CategoryMatrix({ currentCategoryKey, totalScore }: CategoryMatrixProps) {
  return (
    <Card className="border-gray-200 shadow-sm">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg flex items-center gap-2">
          <Layers className="h-5 w-5 text-primary" />
          Kategori Hasil Penilaian
        </CardTitle>
        <p className="text-xs text-muted-foreground">
          Rentang skor dan klasifikasi potensi konflik berdasarkan total jumlah bobot pertanyaan yang dijawab &quot;Ya&quot;:
        </p>
      </CardHeader>
      <CardContent className="space-y-2.5">
        {CATEGORY_TIERS.map((tier) => {
          const isActive = tier.key === currentCategoryKey;
          return (
            <div
              key={tier.key}
              className={cn(
                "flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded-lg border transition-all gap-2",
                isActive
                  ? cn(tier.bgStyle, "border-2 shadow-sm font-medium")
                  : "bg-gray-50/50 border-gray-200 text-gray-700 opacity-80"
              )}
            >
              <div className="flex items-start sm:items-center gap-3">
                <span className="text-xl shrink-0 mt-0.5 sm:mt-0" role="img" aria-label={tier.colorName}>
                  {tier.colorDot}
                </span>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-bold text-sm min-w-[45px]">{tier.range}</span>
                    <span className="text-xs text-muted-foreground">/ {tier.colorName}</span>
                    <span className="font-semibold text-sm">{tier.label}</span>
                    {isActive && (
                      <Badge className={cn("text-[11px] px-2 py-0.5 font-bold flex items-center gap-1", tier.badgeStyle)}>
                        <CheckCircle2 className="h-3 w-3" /> Kategori Anda ({totalScore} Poin)
                      </Badge>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground mt-0.5">{tier.description}</p>
                </div>
              </div>
              <span className="text-xs font-semibold shrink-0 sm:text-right text-muted-foreground">
                Skor {tier.range}
              </span>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
