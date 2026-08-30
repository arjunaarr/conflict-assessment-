import { Progress } from "@/components/ui/progress";

interface AssessmentProgressProps {
  current: number;
  total: number;
}

export function AssessmentProgress({ current, total }: AssessmentProgressProps) {
  const percentage = Math.round((current / total) * 100);
  return (
    <div>
      <div className="flex justify-between text-sm text-muted-foreground mb-2">
        <span>{current}/{total}</span>
        <span>{percentage}%</span>
      </div>
      <Progress value={percentage} className="h-2" aria-label={`Progress ${current} dari ${total}`} />
    </div>
  );
}
