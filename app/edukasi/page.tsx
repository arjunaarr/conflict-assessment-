import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Scale,
  Eye,
  HeartHandshake,
  SearchCheck,
  MessageSquareText,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  BookOpen,
} from "lucide-react";

const EDUCATION_MATERIALS = [
  {
    slug: "konflik-sosial",
    title: "Konflik Sosial",
    icon: Scale,
    description: "Pelajari pengertian konflik sosial menurut undang-undang, ciri-ciri, penyebab, bentuk-bentuk, hingga dampaknya bagi masyarakat.",
  },
  {
    slug: "kewaspadaan-dini",
    title: "Kewaspadaan Dini",
    icon: Eye,
    description: "Kenali serangkaian upaya dan antisipasi untuk mendeteksi potensi ancaman konflik sejak awal agar dapat dicegah.",
  },
  {
    slug: "toleransi",
    title: "Toleransi",
    icon: HeartHandshake,
    description: "Pahami pentingnya sikap saling menghargai perbedaan untuk mencegah konflik, serta manfaat penerapannya dalam kehidupan sehari-hari.",
  },
  {
    slug: "literasi-informasi",
    title: "Literasi Informasi",
    icon: SearchCheck,
    description: "Kemampuan membedakan fakta, opini, dan hoaks serta cara memeriksa kebenaran informasi agar tidak mudah terprovokasi.",
  },
  {
    slug: "musyawarah",
    title: "Musyawarah",
    icon: MessageSquareText,
    description: "Cara menyelesaikan perbedaan melalui proses musyawarah yang baik untuk mencapai kesepakatan bersama secara adil.",
  },
  {
    slug: "pencegahan-konflik",
    title: "Pencegahan Konflik",
    icon: ShieldCheck,
    description: "Panduan sistematis mengenai pentingnya mencegah konflik serta langkah-langkah nyata untuk mencegah eskalasi permasalahan.",
  },
  {
    slug: "peran-generasi-muda",
    title: "Peran Generasi Muda",
    icon: Sparkles,
    description: "Bagaimana generasi muda dapat mengambil peran strategis sebagai agen perubahan dalam menciptakan kerukunan masyarakat.",
  },
];

export default function EdukasiPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50/50">
      <header
        className="border-b sticky top-0 z-50 bg-cover bg-center bg-no-repeat shadow-sm"
        style={{ backgroundImage: "url('/bg_header.png')" }}
      >
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 shrink-0" aria-label="Halaman utama">
            <Image
              src="/logo-bakesbangpol-web.png"
              alt="Logo Badan Kesatuan Bangsa dan Politik Kota Surabaya"
              width={40}
              height={40}
              className="h-10 w-10 object-contain drop-shadow"
              priority
            />
            <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center p-1 shadow-sm shrink-0">
              <Image
                src="/logo-unesa.png"
                alt="Logo Universitas Negeri Surabaya"
                width={36}
                height={36}
                className="h-full w-full object-contain"
                priority
              />
            </div>
          </Link>
          <nav className="hidden sm:flex gap-6 text-sm font-medium">
            <Link href="/" className="text-white/90 hover:text-white transition-colors">Beranda</Link>
            <Link href="/edukasi" className="text-white font-semibold">Edukasi</Link>
            <Link href="/simulasi" className="text-white/90 hover:text-white transition-colors">Simulasi</Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <section className="border-b bg-white py-10 md:py-14">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="flex items-center gap-2 text-slate-600 mb-3 text-sm font-medium">
              <BookOpen className="h-4 w-4" />
              <span>Materi Pembelajaran</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight mb-3">
              Materi Edukasi Pencegahan Konflik Sosial
            </h1>
            <p className="text-slate-600 max-w-3xl leading-relaxed text-sm md:text-base">
              Pelajari berbagai materi esensial mengenai pemahaman konflik sosial, kewaspadaan dini, toleransi, literasi informasi, musyawarah, serta peran aktif dalam menciptakan kerukunan masyarakat.
            </p>
          </div>
        </section>

        <section className="py-10 md:py-12">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-5">
              {EDUCATION_MATERIALS.map((mat) => {
                const IconComponent = mat.icon;
                return (
                  <Card
                    key={mat.slug}
                    className="group border border-slate-200/80 hover:border-slate-300 hover:shadow-md transition-all duration-200 bg-white flex flex-col justify-between"
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between gap-4 mb-3">
                        <div className="h-10 w-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-700 group-hover:bg-slate-900 group-hover:text-white transition-colors">
                          <IconComponent className="h-5 w-5" />
                        </div>
                        <Badge variant="outline" className="bg-slate-100 text-slate-700 border-slate-200 font-medium text-xs">
                          Modul
                        </Badge>
                      </div>
                      <CardTitle className="text-lg font-bold text-slate-900 group-hover:text-slate-700 transition-colors">
                        {mat.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0 flex flex-col flex-1 justify-between">
                      <p className="text-sm text-slate-600 mb-6 leading-relaxed line-clamp-3">
                        {mat.description}
                      </p>
                      <Link href={`/edukasi/${mat.slug}`} className="w-full">
                        <Button
                          variant="outline"
                          className="w-full justify-between text-slate-700 border-slate-300 hover:bg-slate-900 hover:text-white transition-all text-sm font-medium"
                        >
                          <span>Mulai Belajar</span>
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
