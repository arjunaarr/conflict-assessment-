import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Question, Answer } from "@/types/assessment";
import { cn } from "@/lib/utils";

interface QuestionCardProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  selectedAnswer?: Answer;
  onAnswer: (answer: Answer) => void;
}

export function QuestionCard({
  question,
  questionNumber,
  totalQuestions,
  selectedAnswer,
  onAnswer,
}: QuestionCardProps) {
  return (
    <Card>
      <CardHeader>
        <p className="text-sm text-muted-foreground mb-1">
          Pertanyaan {questionNumber} dari {totalQuestions}
        </p>
        <CardTitle className="text-lg leading-relaxed">
          {question.question}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex gap-4">
          <Button
            size="lg"
            className={cn(
              "flex-1 h-14 text-lg font-semibold transition-all",
              selectedAnswer === "YA"
                ? "bg-green-600 hover:bg-green-700 text-white"
                : "bg-gray-100 hover:bg-gray-200 text-gray-700"
            )}
            variant={selectedAnswer === "YA" ? "default" : "outline"}
            onClick={() => onAnswer("YA")}
            aria-pressed={selectedAnswer === "YA"}
            aria-label="Jawab Ya"
          >
            YA
          </Button>
          <Button
            size="lg"
            className={cn(
              "flex-1 h-14 text-lg font-semibold transition-all",
              selectedAnswer === "TIDAK"
                ? "bg-red-600 hover:bg-red-700 text-white"
                : "bg-gray-100 hover:bg-gray-200 text-gray-700"
            )}
            variant={selectedAnswer === "TIDAK" ? "default" : "outline"}
            onClick={() => onAnswer("TIDAK")}
            aria-pressed={selectedAnswer === "TIDAK"}
            aria-label="Jawab Tidak"
          >
            TIDAK
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
