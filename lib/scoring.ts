import { AssessmentAnswer, Question } from "@/types/assessment";

export function calculateScore(
  answers: AssessmentAnswer[],
  questions: Question[]
): number {
  let total = 0;
  for (const ans of answers) {
    if (ans.answer === "YA") {
      const q = questions.find((q) => q.id === ans.questionId);
      if (q) total += q.weight;
    }
  }
  return total;
}
