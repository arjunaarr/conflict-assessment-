"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { QUESTIONS } from "@/lib/questions";
import { AssessmentAnswer, Answer } from "@/types/assessment";
import { QuestionCard } from "@/components/assessment/question-card";
import { AssessmentProgress } from "@/components/assessment/progress";
import { AssessmentSummary } from "@/components/assessment/assessment-summary";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertTriangle } from "lucide-react";

export default function PenilaianPage() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Map<number, Answer>>(new Map());
  const [showSummary, setShowSummary] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const currentQuestion = QUESTIONS[currentIndex];
  const totalQuestions = QUESTIONS.length;

  function handleAnswer(questionId: number, answer: Answer) {
    setAnswers((prev) => {
      const next = new Map(prev);
      next.set(questionId, answer);
      return next;
    });
  }

  function handleNext() {
    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex((i) => i + 1);
    } else {
      setShowSummary(true);
    }
  }

  function handlePrev() {
    if (showSummary) {
      setShowSummary(false);
    } else if (currentIndex > 0) {
      setCurrentIndex((i) => i - 1);
    }
  }

  async function handleSubmit() {
    setLoading(true);
    setError(null);

    const payload: AssessmentAnswer[] = QUESTIONS.map((q) => ({
      questionId: q.id,
      answer: answers.get(q.id) ?? ("TIDAK" as Answer),
    }));

    try {
      const res = await fetch("/api/assessment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ answers: payload }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "Terjadi kesalahan.");
        setLoading(false);
        return;
      }
      sessionStorage.setItem("assessmentResult", JSON.stringify(data));
      router.push("/hasil");
    } catch {
      setError("Gagal mengirim penilaian. Silakan coba lagi.");
      setLoading(false);
    }
  }

  const currentAnswer = answers.get(currentQuestion?.id);
  const allAnswered = answers.size === totalQuestions;

  if (showSummary) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8 max-w-2xl">
          <AssessmentSummary
            questions={QUESTIONS}
            answers={answers}
            onBack={handlePrev}
            onSubmit={handleSubmit}
            loading={loading}
          />
          {error && (
            <Alert variant="destructive" className="mt-4">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          <Alert className="mt-4">
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription className="text-xs text-muted-foreground">
              Hasil penilaian merupakan gambaran awal berdasarkan jawaban yang diberikan dan tidak dimaksudkan sebagai keputusan final atau diagnosis terhadap suatu konflik.
            </AlertDescription>
          </Alert>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <div className="mb-6">
          <AssessmentProgress current={currentIndex + 1} total={totalQuestions} />
        </div>

        <QuestionCard
          question={currentQuestion}
          questionNumber={currentIndex + 1}
          totalQuestions={totalQuestions}
          selectedAnswer={currentAnswer}
          onAnswer={(answer) => handleAnswer(currentQuestion.id, answer)}
        />

        <div className="flex justify-between mt-6">
          <Button
            variant="outline"
            onClick={handlePrev}
            disabled={currentIndex === 0}
          >
            Sebelumnya
          </Button>
          <Button
            onClick={handleNext}
            disabled={!currentAnswer}
          >
            {currentIndex === totalQuestions - 1 ? "Ringkasan" : "Berikutnya"}
          </Button>
        </div>

        {!allAnswered && currentIndex === totalQuestions - 1 && (
          <p className="text-sm text-muted-foreground text-center mt-4">
            Silakan jawab semua pertanyaan terlebih dahulu.
          </p>
        )}
      </div>
    </div>
  );
}
