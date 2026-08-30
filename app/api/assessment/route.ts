import { NextResponse } from "next/server";
import { assessmentSubmitSchema } from "@/lib/validation";
import { calculateScore } from "@/lib/scoring";
import { classifyScore } from "@/lib/classification";
import { getRecommendations, getEducationTopics } from "@/lib/recommendations";
import { QUESTIONS } from "@/lib/questions";
import { AssessmentResult, DetectedIndicator } from "@/types/assessment";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = assessmentSubmitSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.issues[0]?.message ?? "Data tidak valid." },
        { status: 400 }
      );
    }

    const { answers } = parsed.data;
    const totalScore = calculateScore(answers, QUESTIONS);
    const category = classifyScore(totalScore);

    const detectedIndicators: DetectedIndicator[] = answers
      .filter((a) => a.answer === "YA")
      .map((a) => {
        const q = QUESTIONS.find((q) => q.id === a.questionId)!;
        return { questionId: q.id, question: q.question, weight: q.weight };
      });

    const result: AssessmentResult = {
      totalScore,
      maxScore: 30,
      category,
      detectedIndicators,
      recommendations: getRecommendations(category.key),
      educationTopics: getEducationTopics(category.key),
    };

    return NextResponse.json(result);
  } catch {
    return NextResponse.json(
      { error: "Terjadi kesalahan pada server." },
      { status: 500 }
    );
  }
}
