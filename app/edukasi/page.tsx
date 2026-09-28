import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";

const EDUCATION_MATERIALS = [
  {
    slug: "konflik-sosial",
    title: "Konflik Sosial",
    color: "bg-blue-100 text-blue-800",
    description: "Pelajari pengertian konflik sosial menurut undang-undang, ciri-ciri, penyebab, bentuk-bentuk, hingga dampaknya bagi masyarakat.",
  },
  {
    slug: "kewaspadaan-dini",
    title: "Kewaspadaan Dini",
    color: "bg-yellow-100 text-yellow-800",
    description: "Kenali serangkaian upaya dan antisipasi untuk mendeteksi potensi ancaman konflik sejak awal agar dapat dicegah.",
  },
  {
    slug: "toleransi",
    title: "Toleransi",
    color: "bg-green-100 text-green-800",
    description: "Pahami pentingnya sikap saling menghargai perbedaan untuk mencegah konflik, serta manfaat penerapannya dalam kehidupan sehari-hari.",
  },
  {
    slug: "literasi-informasi",
    title: "Literasi Informasi",
    color: "bg-purple-100 text-purple-800",
    description: "Kemampuan membedakan fakta, opini, dan hoaks serta cara memeriksa kebenaran informasi agar tidak mudah terprovokasi.",
  },
  {
    slug: "musyawarah",
    title: "Musyawarah",
    color: "bg-indigo-100 text-indigo-800",
    description: "Cara menyelesaikan perbedaan melalui proses musyawarah yang baik untuk mencapai kesepakatan bersama secara adil.",
  },
  {
    slug: "pencegahan-konflik",
    title: "Pencegahan Konflik",
    color: "bg-teal-100 text-teal-800",
    description: "Panduan sistematis mengenai pentingnya mencegah konflik serta langkah-langkah nyata untuk mencegah eskalasi permasalahan.",
  },
  {
    slug: "peran-generasi-muda",
    title: "Peran Generasi Muda",
    color: "bg-orange-100 text-orange-800",
    description: "Bagaimana generasi muda dapat mengambil peran strategis sebagai agen perubahan dalam menciptakan kerukunan masyarakat.",
  },
];

export default function EdukasiPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="flex items-center gap-2 mb-2">
          <BookOpen className="h-6 w-6 text-primary" />
          <h1 className="text-2xl font-bold">Materi Edukasi</h1>
        </div>
        <p className="text-muted-foreground mb-8">
          Pelajari berbagai materi esensial mengenai pemahaman konflik sosial, kewaspadaan dini, toleransi, literasi informasi, musyawarah, serta peran aktif dalam menciptakan kerukunan.
        </p>

        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {EDUCATION_MATERIALS.map((mat) => (
            <Card key={mat.slug} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <Badge className={`${mat.color} w-fit mb-2`}>Materi</Badge>
                <CardTitle className="text-xl mt-1">{mat.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-6 line-clamp-3 leading-relaxed">{mat.description}</p>
                <Link href={`/edukasi/${mat.slug}`}>
                  <Button className="w-full sm:w-auto" variant="outline">
                    Mulai Belajar
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/">
            <Button variant="ghost">Kembali ke Beranda</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
