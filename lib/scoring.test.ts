import { describe, it, expect } from "vitest";
import { calculateScore } from "@/lib/scoring";
import { classifyScore } from "@/lib/classification";
import { QUESTIONS } from "@/lib/questions";
import { AssessmentAnswer } from "@/types/assessment";

function makeAnswers(yesIds: number[]): AssessmentAnswer[] {
  return QUESTIONS.map((q) => ({
    questionId: q.id,
    answer: yesIds.includes(q.id) ? "YA" as const : "TIDAK" as const,
  }));
}

describe("Scoring & Classification", () => {
  it("Test 1: Semua TIDAK → Score 0 → Aman", () => {
    const answers = makeAnswers([]);
    const score = calculateScore(answers, QUESTIONS);
    expect(score).toBe(0);
    expect(classifyScore(score).key).toBe("AMAN");
  });

  it("Test 2: Score 6 → Aman", () => {
    // Q1(1)+Q2(1)+Q3(1)+Q6(1)+Q4(2) = 6
    const answers = makeAnswers([1, 2, 3, 6, 4]);
    const score = calculateScore(answers, QUESTIONS);
    expect(score).toBe(6);
    expect(classifyScore(score).key).toBe("AMAN");
  });

  it("Test 3: Score 7 → Waspada", () => {
    // Q1(1)+Q2(1)+Q3(1)+Q4(2)+Q5(2) = 7
    const answers = makeAnswers([1, 2, 3, 4, 5]);
    const score = calculateScore(answers, QUESTIONS);
    expect(score).toBe(7);
    expect(classifyScore(score).key).toBe("WASPADA");
  });

  it("Test 4: Score 13 → Waspada", () => {
    // Q1(1)+Q4(2)+Q5(2)+Q7(2)+Q8(2)+Q9(2)+Q10(2) = 13
    const answers = makeAnswers([1, 4, 5, 7, 8, 9, 10]);
    const score = calculateScore(answers, QUESTIONS);
    expect(score).toBe(13);
    expect(classifyScore(score).key).toBe("WASPADA");
  });

  it("Test 5: Score 14 → Potensi Konflik", () => {
    // Q1(1)+Q2(1)+Q4(2)+Q5(2)+Q7(2)+Q8(2)+Q9(2)+Q10(2) = 14
    const answers = makeAnswers([1, 2, 4, 5, 7, 8, 9, 10]);
    const score = calculateScore(answers, QUESTIONS);
    expect(score).toBe(14);
    expect(classifyScore(score).key).toBe("POTENSI_KONFLIK");
  });

  it("Test 6: Score 21 → Potensi Konflik", () => {
    // Q1(1)+Q2(1)+Q3(1)+Q6(1)+Q4(2)+Q5(2)+Q7(2)+Q8(2)+Q11(3)+Q13(3)+Q14(3) = 21
    const answers = makeAnswers([1, 2, 3, 6, 4, 5, 7, 8, 11, 13, 14]);
    const score = calculateScore(answers, QUESTIONS);
    expect(score).toBe(21);
    expect(classifyScore(score).key).toBe("POTENSI_KONFLIK");
  });

  it("Test 7: Score 22 → Risiko Tinggi", () => {
    // Q1(1)+Q4(2)+Q5(2)+Q7(2)+Q8(2)+Q9(2)+Q11(3)+Q12(2)+Q14(3)+Q15(3) = 22
    const answers = makeAnswers([1, 4, 5, 7, 8, 9, 11, 12, 14, 15]);
    const score = calculateScore(answers, QUESTIONS);
    expect(score).toBe(22);
    expect(classifyScore(score).key).toBe("RISIKO_TINGGI");
  });

  it("Test 8: Score 30 (semua YA) → Risiko Tinggi", () => {
    const answers = makeAnswers(QUESTIONS.map((q) => q.id));
    const score = calculateScore(answers, QUESTIONS);
    expect(score).toBe(30);
    expect(classifyScore(score).key).toBe("RISIKO_TINGGI");
  });

  it("Score < 0 throws", () => {
    expect(() => classifyScore(-1)).toThrow();
  });

  it("Score > 30 throws", () => {
    expect(() => classifyScore(31)).toThrow();
  });
});
