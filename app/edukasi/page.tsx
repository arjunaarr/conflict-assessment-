import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";

const EDUCATION_MATERIALS = [
  // Materi Dasar
  {
    slug: "konflik-sosial",
    title: "Apa Itu Konflik Sosial?",
    category: "Dasar",
    color: "bg-blue-100 text-blue-800",
    description:
      "Definisi konflik sosial berdasarkan UU No. 7 Tahun 2012, ciri-ciri, penyebab, bentuk, dampak, dan contoh konflik di masyarakat.",
  },
  // Pencegahan
  {
    slug: "kewaspadaan-dini",
    title: "Kewaspadaan Dini",
    category: "Pencegahan",
    color: "bg-yellow-100 text-yellow-800",
    description:
      "Serangkaian upaya kepekaan dan antisipasi untuk mendeteksi serta mencegah potensi ATHG sejak awal. Meliputi tiga unsur: mengenali, memahami, dan merespons.",
  },
  {
    slug: "toleransi",
    title: "Toleransi sebagai Pencegah Konflik",
    category: "Pencegahan",
    color: "bg-green-100 text-green-800",
    description:
      "Memahami pentingnya toleransi dalam mencegah konflik, manfaatnya bagi masyarakat, dan contoh penerapannya dalam kehidupan sehari-hari.",
  },
  {
    slug: "pencegahan-konflik",
    title: "7 Langkah Pencegahan Konflik",
    category: "Pencegahan",
    color: "bg-teal-100 text-teal-800",
    description:
      "Panduan lengkap 7 langkah pencegahan konflik: kenali masalah, cek informasi, kendalikan emosi, komunikasikan dengan baik, hargai perbedaan, musyawarah, dan libatkan pihak tepat.",
  },
  {
    slug: "menjaga-harmonis",
    title: "Menjaga Lingkungan Tetap Harmonis",
    category: "Aman",
    color: "bg-green-100 text-green-800",
    description:
      "Prinsip-prinsip menjaga keharmonisan lingkungan melalui komunikasi terbuka, gotong royong, dan musyawarah mufakat.",
  },
  // Waspada
  {
    slug: "tanda-awal-konflik",
    title: "Mengenali Tanda-Tanda Awal Konflik",
    category: "Waspada",
    color: "bg-yellow-100 text-yellow-800",
    description:
      "Pelajari 6 tanda awal yang menunjukkan potensi konflik agar dapat dicegah sejak dini sebelum berkembang menjadi kekerasan.",
  },
  {
    slug: "bijak-bermedia-sosial",
    title: "Bijak Bermedia Sosial",
    category: "Waspada",
    color: "bg-yellow-100 text-yellow-800",
    description:
      "Tips dan panduan menggunakan media sosial secara bijak dan bertanggung jawab untuk mencegah penyebaran hoaks dan provokasi.",
  },
  {
    slug: "komunikasi-pencegahan",
    title: "Komunikasi untuk Mencegah Konflik",
    category: "Waspada",
    color: "bg-yellow-100 text-yellow-800",
    description:
      "Teknik komunikasi efektif termasuk mendengarkan aktif, bahasa yang tidak menyerang, dan cara mencari titik temu.",
  },
  // Digital
  {
    slug: "literasi-informasi",
    title: "Literasi Informasi dan Hoaks",
    category: "Digital",
    color: "bg-purple-100 text-purple-800",
    description:
      "Kemampuan membedakan fakta, opini, dan hoaks. Cara memeriksa kebenaran informasi sebelum mempercayai atau menyebarkannya.",
  },
  // Potensi Konflik
  {
    slug: "eskalasi-konflik",
    title: "Tahapan Eskalasi Konflik",
    category: "Potensi Konflik",
    color: "bg-orange-100 text-orange-800",
    description:
      "Memahami 6 tahapan bagaimana konflik dapat meningkat dari ketegangan tersembunyi hingga krisis, dan cara menghentikannya.",
  },
  {
    slug: "mediasi-penyelesaian",
    title: "Mediasi dan Penyelesaian Konflik",
    category: "Potensi Konflik",
    color: "bg-orange-100 text-orange-800",
    description:
      "Pengenalan berbagai metode penyelesaian konflik: negosiasi, mediasi, arbitrase, litigasi, dan rekonsiliasi.",
  },
  {
    slug: "hoaks-provokasi",
    title: "Hoaks dan Provokasi sebagai Pemicu Konflik",
    category: "Potensi Konflik",
    color: "bg-orange-100 text-orange-800",
    description:
      "Jenis-jenis disinformasi dan cara hoaks serta provokasi dapat memicu dan memperburuk konflik sosial.",
  },
  // Generasi Muda
  {
    slug: "peran-generasi-muda",
    title: "Peran Generasi Muda dalam Kerukunan",
    category: "Generasi Muda",
    color: "bg-indigo-100 text-indigo-800",
    description:
      "Posisi strategis generasi muda dalam menjaga kerukunan bangsa dan 7 hal yang dapat dilakukan sebagai agen perubahan.",
  },
  // Risiko Tinggi
  {
    slug: "saat-konflik-meningkat",
    title: "Apa yang Harus Dilakukan Saat Konflik Meningkat?",
    category: "Risiko Tinggi",
    color: "bg-red-100 text-red-800",
    description:
      "Panduan keselamatan dan langkah-langkah yang harus diambil saat situasi konflik meningkat dan berpotensi berbahaya.",
  },
  {
    slug: "kewaspadaan-keselamatan",
    title: "Kewaspadaan dan Keselamatan dalam Konflik",
    category: "Risiko Tinggi",
    color: "bg-red-100 text-red-800",
    description:
      "Prinsip menjaga keselamatan diri dalam situasi konflik, termasuk cara mengenali bahaya dan melindungi orang rentan.",
  },
];

const CATEGORIES = [
  { label: "Dasar", color: "bg-blue-100 text-blue-800" },
  { label: "Pencegahan", color: "bg-green-100 text-green-800" },
  { label: "Waspada", color: "bg-yellow-100 text-yellow-800" },
  { label: "Digital", color: "bg-purple-100 text-purple-800" },
  { label: "Generasi Muda", color: "bg-indigo-100 text-indigo-800" },
  { label: "Potensi Konflik", color: "bg-orange-100 text-orange-800" },
  { label: "Risiko Tinggi", color: "bg-red-100 text-red-800" },
];

export default function EdukasiPage() {
  const grouped = CATEGORIES.map((cat) => ({
    ...cat,
    items: EDUCATION_MATERIALS.filter((m) => m.category === cat.label),
  })).filter((g) => g.items.length > 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="flex items-center gap-2 mb-2">
          <BookOpen className="h-6 w-6 text-primary" />
          <h1 className="text-2xl font-bold">Materi Edukasi</h1>
        </div>
        <p className="text-muted-foreground mb-8">
          Pelajari berbagai materi tentang konflik sosial, cara pencegahan, literasi informasi, dan peran generasi muda
          dalam menjaga kerukunan.
        </p>

        {grouped.map((group) => (
          <div key={group.label} className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Badge className={group.color}>{group.label}</Badge>
              <span className="text-sm text-muted-foreground">{group.items.length} materi</span>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {group.items.map((mat) => (
                <Card key={mat.slug} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-base mt-1">{mat.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">{mat.description}</p>
                    <Link href={`/edukasi/${mat.slug}`}>
                      <Button variant="outline" size="sm">
                        Baca Selengkapnya
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}

        <div className="mt-8 text-center">
          <Link href="/">
            <Button variant="ghost">Kembali ke Beranda</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
