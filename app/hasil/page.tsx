"use client";

import { useSyncExternalStore, useCallback } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { AssessmentResult } from "@/types/assessment";
import { ScoreDisplay } from "@/components/results/score-display";
import { IndicatorList } from "@/components/results/indicator-list";
import { RecommendationList } from "@/components/results/recommendation-list";
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

        {result.detectedIndicators.length > 0 && (
          <IndicatorList indicators={result.detectedIndicators} />
        )}

        <RecommendationList
          recommendations={result.recommendations}
          isHighRisk={isHighRisk}
        />

        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Materi Edukasi yang Disarankan
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {result.educationTopics.map((topic, i) => (
                <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>{topic}</span>
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

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button
            onClick={() => {
              sessionStorage.removeItem("assessmentResult");
              router.push("/penilaian");
            }}
          >
            Ulangi Penilaian
          </Button>
          <Link href="/">
            <Button variant="outline" className="w-full sm:w-auto">Kembali ke Beranda</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
