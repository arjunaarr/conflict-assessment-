import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Question, Answer } from "@/types/assessment";

interface AssessmentSummaryProps {
  questions: Question[];
  answers: Map<number, Answer>;
  onBack: () => void;
  onSubmit: () => void;
  loading: boolean;
}

export function AssessmentSummary({
  questions,
  answers,
  onBack,
  onSubmit,
  loading,
}: AssessmentSummaryProps) {
  const allAnswered = answers.size === questions.length;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Ringkasan Jawaban</CardTitle>
        <p className="text-sm text-muted-foreground">
          Periksa kembali jawaban Anda sebelum mengirim.
        </p>
      </CardHeader>
      <CardContent className="space-y-3">
        {questions.map((q, i) => {
          const answer = answers.get(q.id);
          return (
            <div key={q.id} className="flex items-start gap-3 py-2 border-b last:border-0">
              <span className="text-sm text-muted-foreground w-8 shrink-0">{i + 1}.</span>
              <span className="text-sm flex-1">{q.question}</span>
              {answer ? (
                <Badge variant={answer === "YA" ? "default" : "secondary"} className="shrink-0">
                  {answer}
                </Badge>
              ) : (
                <Badge variant="outline" className="shrink-0 text-red-500">Belum</Badge>
              )}
            </div>
          );
        })}

        <div className="flex justify-between pt-4">
          <Button variant="outline" onClick={onBack}>Kembali</Button>
          <Button onClick={onSubmit} disabled={!allAnswered || loading}>
            {loading ? "Mengirim..." : "Kirim Penilaian"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
