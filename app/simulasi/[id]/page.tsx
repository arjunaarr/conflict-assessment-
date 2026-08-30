import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Info } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default async function SimulasiDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <Link href="/simulasi" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="h-4 w-4" /> Kembali ke Daftar Simulasi
        </Link>

        <Card>
          <CardHeader>
            <CardTitle>Simulasi Kasus {id}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Alert>
              <Info className="h-4 w-4" />
              <AlertDescription>
                Konten simulasi ini akan diisi melalui panel admin. Struktur simulasi meliputi: skenario kasus, pertanyaan, pilihan jawaban, dan pembahasan.
              </AlertDescription>
            </Alert>

            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-sm mb-2">Skenario</h3>
                <p className="text-sm text-muted-foreground">Skenario kasus belum tersedia.</p>
              </div>
              <div>
                <h3 className="font-semibold text-sm mb-2">Pertanyaan</h3>
                <p className="text-sm text-muted-foreground">Pertanyaan simulasi belum tersedia.</p>
              </div>
              <div>
                <h3 className="font-semibold text-sm mb-2">Pembahasan</h3>
                <p className="text-sm text-muted-foreground">Pembahasan belum tersedia.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
