export type Answer = "YA" | "TIDAK";

export interface Question {
  id: number;
  question: string;
  weight: number;
  order: number;
}

export interface AssessmentAnswer {
  questionId: number;
  answer: Answer;
}

export interface DetectedIndicator {
  questionId: number;
  question: string;
  weight: number;
}

export type CategoryKey = "AMAN" | "WASPADA" | "POTENSI_KONFLIK" | "RISIKO_TINGGI";

export interface Category {
  key: CategoryKey;
  label: string;
  minScore: number;
  maxScore: number;
  color: string;
  description: string;
  title: string;
}

export interface AssessmentResult {
  totalScore: number;
  maxScore: number;
  category: Category;
  detectedIndicators: DetectedIndicator[];
  recommendations: string[];
  educationTopics: string[];
}
