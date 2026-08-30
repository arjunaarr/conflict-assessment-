import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";

const EDUCATION_MATERIALS = [
  { slug: "menjaga-harmonis", title: "Bagaimana Menjaga Lingkungan Tetap Harmonis?", category: "Aman", color: "bg-green-100 text-green-800", description: "Langkah-langkah praktis untuk menjaga kerukunan dan keharmonisan di lingkungan sekitar." },
  { slug: "tanda-awal-konflik", title: "Mengenali Tanda-Tanda Awal Konflik", category: "Waspada", color: "bg-yellow-100 text-yellow-800", description: "Pelajari indikator awal yang menunjukkan potensi konflik agar dapat dicegah sejak dini." },
  { slug: "bijak-bermedia-sosial", title: "Bijak Bermedia Sosial", category: "Waspada", color: "bg-yellow-100 text-yellow-800", description: "Tips dan panduan untuk menggunakan media sosial secara bijak dan bertanggung jawab." },
  { slug: "komunikasi-pencegahan", title: "Komunikasi untuk Mencegah Konflik", category: "Waspada", color: "bg-yellow-100 text-yellow-800", description: "Teknik komunikasi efektif yang dapat membantu mencegah terjadinya konflik." },
  { slug: "eskalasi-konflik", title: "Tahapan Eskalasi Konflik", category: "Potensi Konflik", color: "bg-orange-100 text-orange-800", description: "Memahami tahapan bagaimana konflik dapat meningkat dan cara menghentikannya." },
  { slug: "mediasi-penyelesaian", title: "Mengenal Mediasi dan Penyelesaian Konflik", category: "Potensi Konflik", color: "bg-orange-100 text-orange-800", description: "Pengenalan metode mediasi sebagai salah satu cara penyelesaian konflik secara damai." },
  { slug: "hoaks-provokasi", title: "Hoaks dan Provokasi sebagai Pemicu Konflik", category: "Potensi Konflik", color: "bg-orange-100 text-orange-800", description: "Bagaimana hoaks dan provokasi dapat memicu dan memperburuk konflik." },
  { slug: "saat-konflik-meningkat", title: "Apa yang Harus Dilakukan Saat Konflik Meningkat?", category: "Risiko Tinggi", color: "bg-red-100 text-red-800", description: "Panduan keselamatan dan langkah yang harus diambil saat situasi konflik meningkat." },
  { slug: "kewaspadaan-keselamatan", title: "Kewaspadaan dan Keselamatan dalam Situasi Konflik", category: "Risiko Tinggi", color: "bg-red-100 text-red-800", description: "Informasi penting tentang menjaga keselamatan diri dalam situasi konflik." },
];

export default function EdukasiPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="flex items-center gap-2 mb-8">
          <BookOpen className="h-6 w-6 text-primary" />
          <h1 className="text-2xl font-bold">Materi Edukasi</h1>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {EDUCATION_MATERIALS.map((mat) => (
            <Card key={mat.slug} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge className={mat.color}>{mat.category}</Badge>
                </div>
                <CardTitle className="text-base mt-2">{mat.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">{mat.description}</p>
                <Link href={`/edukasi/${mat.slug}`}>
                  <Button variant="outline" size="sm">Baca Selengkapnya</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link href="/">
            <Button variant="ghost">Kembali ke Beranda</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
