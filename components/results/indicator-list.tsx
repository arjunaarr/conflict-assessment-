import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DetectedIndicator } from "@/types/assessment";
import { AlertCircle } from "lucide-react";

interface IndicatorListProps {
  indicators: DetectedIndicator[];
}

export function IndicatorList({ indicators }: IndicatorListProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg flex items-center gap-2">
          <AlertCircle className="h-5 w-5 text-orange-500" />
          Indikator yang Terdeteksi
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {indicators.map((ind) => (
            <li key={ind.questionId} className="flex items-start gap-2 text-sm">
              <span className="text-orange-500 mt-0.5">•</span>
              <span>{ind.question}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
