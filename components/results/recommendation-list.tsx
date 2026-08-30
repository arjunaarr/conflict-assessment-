import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ShieldAlert, Shield } from "lucide-react";

interface RecommendationListProps {
  recommendations: string[];
  isHighRisk: boolean;
}

export function RecommendationList({ recommendations, isHighRisk }: RecommendationListProps) {
  return (
    <Card className={cn(isHighRisk && "border-red-300 bg-red-50")}>
      <CardHeader>
        <CardTitle className={cn("text-lg flex items-center gap-2", isHighRisk && "text-red-700")}>
          {isHighRisk ? <ShieldAlert className="h-5 w-5" /> : <Shield className="h-5 w-5" />}
          Rekomendasi
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ol className="space-y-2 list-decimal list-inside">
          {recommendations.map((rec, i) => (
            <li key={i} className={cn("text-sm", isHighRisk ? "text-red-800" : "text-muted-foreground")}>
              {rec}
            </li>
          ))}
        </ol>
      </CardContent>
    </Card>
  );
}
