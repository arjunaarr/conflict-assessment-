"use client";

import { useSyncExternalStore, useCallback } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { AssessmentResult } from "@/types/assessment";
import { ScoreDisplay } from "@/components/results/score-display";
import { RecommendationList } from "@/components/results/recommendation-list";
import { CategoryMatrix } from "@/components/results/category-matrix";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertTriangle, BookOpen } from "lucide-react";

function useAssessmentResult() {
  const subscribe = useCallback((cb: () => void) => {
    window.addEventListener("storage", cb);
    return () => window.removeEventListener("storage", cb);
  }, []);
  const getSnapshot = useCallback(() => sessionStorage.getItem("assessmentResult"), []);
  const getServerSnapshot = useCallback(() => null, []);
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

export default function HasilPage() {
  const router = useRouter();
  const stored = useAssessmentResult();
  const result: AssessmentResult | null = stored ? JSON.parse(stored) : null;

  if (!result) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Memuat hasil...</p>
      </div>
    );
  }

  const isHighRisk = result.category.key === "RISIKO_TINGGI";

  return (
    <div className={`min-h-screen ${isHighRisk ? "bg-red-50" : "bg-gray-50"}`}>
      <div className="container mx-auto px-4 py-8 max-w-2xl space-y-6">
        <h1 className="text-2xl font-bold text-center">Hasil Penilaian</h1>

        <ScoreDisplay
          score={result.totalScore}
          maxScore={result.maxScore}
          category={result.category}
        />

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">{result.category.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">{result.category.description}</p>
          </CardContent>
        </Card>

        <CategoryMatrix
          currentCategoryKey={result.category.key}
          totalScore={result.totalScore}
        />

        <RecommendationList
          recommendations={result.recommendations}
          isHighRisk={isHighRisk}
        />

        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary" />
              Materi Edukasi yang Disarankan
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {result.educationTopics.map((topic, i) => (
                <li key={i} className="text-sm text-muted-foreground flex items-center justify-between gap-2 p-2 rounded-md hover:bg-gray-100 transition-colors">
                  <div className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span className="font-medium text-gray-800">{topic}</span>
                  </div>
                  <Link href="/edukasi" className="text-xs text-primary font-medium hover:underline flex items-center gap-1 shrink-0">
                    Pelajari Materi &rarr;
                  </Link>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Alert>
          <AlertTriangle className="h-4 w-4" />
          <AlertDescription className="text-xs text-muted-foreground">
            Hasil penilaian merupakan gambaran awal berdasarkan jawaban yang diberikan dan tidak dimaksudkan sebagai keputusan final atau diagnosis terhadap suatu konflik. Untuk kondisi yang serius atau darurat, gunakan saluran bantuan atau pelaporan resmi yang sesuai.
          </AlertDescription>
        </Alert>

        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
          <Link href="/simulasi" className="w-full sm:w-auto">
            <Button className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90">
              Lanjut ke Simulasi Kasus &rarr;
            </Button>
          </Link>
          <Button
            variant="outline"
            className="w-full sm:w-auto"
            onClick={() => {
              sessionStorage.removeItem("assessmentResult");
              router.push("/penilaian");
            }}
          >
            Ulangi Penilaian
          </Button>
          <Link href="/" className="w-full sm:w-auto">
            <Button variant="ghost" className="w-full sm:w-auto">
              Kembali ke Beranda
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
