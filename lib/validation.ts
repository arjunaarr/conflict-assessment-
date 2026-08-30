import { z } from "zod";

export const answerSchema = z.object({
  questionId: z.number().int().min(1).max(15),
  answer: z.enum(["YA", "TIDAK"]),
});

export const assessmentSubmitSchema = z.object({
  answers: z
    .array(answerSchema)
    .length(15, "Silakan jawab semua pertanyaan terlebih dahulu.")
    .refine(
      (answers) => {
        const ids = answers.map((a) => a.questionId);
        return new Set(ids).size === ids.length;
      },
      { message: "Terdapat jawaban duplikat." }
    ),
});
