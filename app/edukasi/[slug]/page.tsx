import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";

const EDUCATION_DATA: Record<string, { title: string; category: string; color: string; content: string }> = {
  "menjaga-harmonis": {
    title: "Bagaimana Menjaga Lingkungan Tetap Harmonis?",
    category: "Aman",
    color: "bg-green-100 text-green-800",
    content: "Materi ini akan segera tersedia. Konten akan dikelola melalui panel admin.",
  },
  "tanda-awal-konflik": {
    title: "Mengenali Tanda-Tanda Awal Konflik",
    category: "Waspada",
    color: "bg-yellow-100 text-yellow-800",
    content: "Materi ini akan segera tersedia. Konten akan dikelola melalui panel admin.",
  },
  "bijak-bermedia-sosial": {
    title: "Bijak Bermedia Sosial",
    category: "Waspada",
    color: "bg-yellow-100 text-yellow-800",
    content: "Materi ini akan segera tersedia. Konten akan dikelola melalui panel admin.",
  },
  "komunikasi-pencegahan": {
    title: "Komunikasi untuk Mencegah Konflik",
    category: "Waspada",
    color: "bg-yellow-100 text-yellow-800",
    content: "Materi ini akan segera tersedia. Konten akan dikelola melalui panel admin.",
  },
  "eskalasi-konflik": {
    title: "Tahapan Eskalasi Konflik",
    category: "Potensi Konflik",
    color: "bg-orange-100 text-orange-800",
    content: "Materi ini akan segera tersedia. Konten akan dikelola melalui panel admin.",
  },
  "mediasi-penyelesaian": {
    title: "Mengenal Mediasi dan Penyelesaian Konflik",
    category: "Potensi Konflik",
    color: "bg-orange-100 text-orange-800",
    content: "Materi ini akan segera tersedia. Konten akan dikelola melalui panel admin.",
  },
  "hoaks-provokasi": {
    title: "Hoaks dan Provokasi sebagai Pemicu Konflik",
    category: "Potensi Konflik",
    color: "bg-orange-100 text-orange-800",
    content: "Materi ini akan segera tersedia. Konten akan dikelola melalui panel admin.",
  },
  "saat-konflik-meningkat": {
    title: "Apa yang Harus Dilakukan Saat Konflik Meningkat?",
    category: "Risiko Tinggi",
    color: "bg-red-100 text-red-800",
    content: "Materi ini akan segera tersedia. Konten akan dikelola melalui panel admin.",
  },
  "kewaspadaan-keselamatan": {
    title: "Kewaspadaan dan Keselamatan dalam Situasi Konflik",
    category: "Risiko Tinggi",
    color: "bg-red-100 text-red-800",
    content: "Materi ini akan segera tersedia. Konten akan dikelola melalui panel admin.",
  },
};

export default async function EdukasiDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = EDUCATION_DATA[slug];

  if (!data) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <p className="text-muted-foreground">Materi tidak ditemukan.</p>
        <Link href="/edukasi"><Button variant="outline">Kembali</Button></Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <Link href="/edukasi" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="h-4 w-4" /> Kembali ke Daftar Edukasi
        </Link>

        <Card>
          <CardHeader>
            <Badge className={data.color + " w-fit"}>{data.category}</Badge>
            <CardTitle className="text-xl mt-2">{data.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">{data.content}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
