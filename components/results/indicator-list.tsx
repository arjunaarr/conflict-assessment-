import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DetectedIndicator } from "@/types/assessment";
import { AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface IndicatorListProps {
  indicators: DetectedIndicator[];
  categoryColor?: string;
}

const colorTheme: Record<string, { border: string; icon: string; bullet: string }> = {
  green: {
    border: "border-green-200 bg-green-50/20",
    icon: "text-green-600",
    bullet: "text-green-600",
  },
  yellow: {
    border: "border-yellow-200 bg-yellow-50/20",
    icon: "text-yellow-600",
    bullet: "text-yellow-600",
  },
  orange: {
    border: "border-orange-200 bg-orange-50/20",
    icon: "text-orange-600",
    bullet: "text-orange-600",
  },
  red: {
    border: "border-red-200 bg-red-50/20",
    icon: "text-red-600",
    bullet: "text-red-600",
  },
};

export function IndicatorList({ indicators, categoryColor = "orange" }: IndicatorListProps) {
  const theme = colorTheme[categoryColor] ?? colorTheme.orange;

  if (indicators.length === 0) return null;

  return (
    <Card className={cn("border shadow-sm", theme.border)}>
      <CardHeader className="pb-3">
        <CardTitle className="text-lg flex items-center gap-2">
          <AlertCircle className={cn("h-5 w-5", theme.icon)} />
          Indikator yang Terdeteksi
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2.5">
          {indicators.map((ind) => (
            <li key={ind.questionId} className="flex items-start gap-2.5 text-sm">
              <span className={cn("font-bold text-base leading-none mt-0.5", theme.bullet)}>
                •
              </span>
              <span className="text-gray-800 leading-normal">{ind.question}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
