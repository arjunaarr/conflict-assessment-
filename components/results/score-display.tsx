import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Category } from "@/types/assessment";
import { cn } from "@/lib/utils";

const colorMap: Record<string, { bg: string; text: string; badge: string }> = {
  green: { bg: "bg-green-50 border-green-200", text: "text-green-700", badge: "bg-green-100 text-green-800" },
  yellow: { bg: "bg-yellow-50 border-yellow-200", text: "text-yellow-700", badge: "bg-yellow-100 text-yellow-800" },
  orange: { bg: "bg-orange-50 border-orange-200", text: "text-orange-700", badge: "bg-orange-100 text-orange-800" },
  red: { bg: "bg-red-50 border-red-200", text: "text-red-700", badge: "bg-red-100 text-red-800" },
};

interface ScoreDisplayProps {
  score: number;
  maxScore: number;
  category: Category;
}

export function ScoreDisplay({ score, maxScore, category }: ScoreDisplayProps) {
  const colors = colorMap[category.color] ?? colorMap.green;

  return (
    <Card className={cn("border-2", colors.bg)}>
      <CardContent className="text-center py-8">
        <p className="text-sm text-muted-foreground mb-2">Total Skor</p>
        <p className={cn("text-5xl font-bold mb-3", colors.text)}>
          {score} <span className="text-2xl text-muted-foreground font-normal">/ {maxScore}</span>
        </p>
        <Badge className={cn("text-sm px-4 py-1", colors.badge)}>
          {category.label}
        </Badge>
      </CardContent>
    </Card>
  );
}
