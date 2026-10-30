import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FlaskConical, MapPin, Calendar, ArrowRight } from "lucide-react";

const SIMULATIONS = [
  {
    id: "1",
    title: "Konflik Antarwarga karena Persoalan Jalan",
    location: "Surabaya",
    year: "2025",
    category: "Konflik Properti",
    description:
      "Konflik antartetangga berujung penembokan jalan di Jalan Asem Jajar Gang III, Surabaya. Perselisihan mengenai kepemilikan dan penggunaan tanah yang menjadi akses jalan bersama.",
  },
  {
    id: "2",
    title: "Kericuhan Demonstrasi",
    location: "Surabaya",
    year: "2025",
    category: "Konflik Sosial",
    description:
      "Aksi penyampaian pendapat yang berkembang menjadi kericuhan. Demonstrasi yang awalnya tertib berubah menjadi kekerasan yang melibatkan 26 pelajar.",
  },
  {
    id: "3",
    title: "Saling Ejek di Media Sosial Berujung Perkelahian",
    location: "Surabaya",
    year: "2025",
    category: "Konflik Digital",
    description:
      "Saling ejek melalui Live TikTok berujung perkelahian fisik antar remaja. Konflik digital yang berkembang menjadi kekerasan di dunia nyata.",
  },
  {
    id: "4",
    title: "Perbedaan Kepentingan dalam Kegiatan Keagamaan",
    location: "Sukabumi",
    year: "2025",
    category: "Konflik Agama",
    description:
      "Ketegangan terkait kegiatan keagamaan di Desa Tangkil. Perbedaan pandangan mengenai penggunaan vila untuk kegiatan keagamaan yang berujung perusakan.",
  },
  {
    id: "5",
    title: "Konflik Massa dan Kepemilikan Ruko",
    location: "Surabaya",
    year: "2026",
    category: "Konflik Hukum",
    description:
      "Perselisihan Ruko di Jalan Krukah Utara melibatkan organisasi masyarakat. Dugaan intimidasi dan perusakan pagar dalam sengketa kepemilikan properti.",
  },
  {
    id: "6",
    title: "Konflik Masyarakat Pulau Rempang",
    location: "Batam",
    year: "2023-2024",
    category: "Konflik Agraria",
    description:
      "Konflik antara masyarakat dan pemerintah terkait rencana pengembangan kawasan Rempang. Bentrokan terjadi saat pemasangan patok di kawasan yang akan dikembangkan.",
  },
  {
    id: "7",
    title: "Konflik Tanjungbalai: Persoalan Rumah Ibadah dan Media Sosial",
    location: "Tanjungbalai, Sumatera Utara",
    year: "2016",
    category: "Konflik Agama & Etnis",
    description:
      "Kerusuhan yang melibatkan keberagaman agama dan etnis serta penyebaran informasi melalui media sosial. Mengakibatkan penyerangan dan pembakaran rumah ibadah.",
  },
  {
    id: "8",
    title: "Konflik Sosial dalam Pemilu di Bima",
    location: "Bima, NTB",
    year: "2024",
    category: "Konflik Politik",
    description:
      "Perusakan dan pembakaran TPS di Kecamatan Parado setelah Pemungutan Suara Ulang (PSU). Sebanyak 68 kotak suara dibakar dan 34 TPS menjadi sasaran.",
  },
  {
    id: "9",
    title: "Konflik akibat Hoaks dan Informasi Provokatif",
    location: "Nasional",
    year: "2024",
    category: "Hoaks & Disinformasi",
    description:
      "Video lama digunakan untuk membangun narasi seolah-olah terjadi kerusuhan baru, termasuk klaim bahwa kantor KPU, Bawaslu, dan kementerian dibakar.",
  },
  {
    id: "10",
    title: "Konflik Agraria Masyarakat Wadas",
    location: "Purworejo, Jawa Tengah",
    year: "2021-2022",
    category: "Konflik Agraria",
    description:
      "Penolakan penambangan batu andesit di Desa Wadas untuk kebutuhan Bendungan Bener. Konflik antara masyarakat dengan pihak yang mendukung rencana penambangan.",
  },
];

export default function SimulasiPage() {
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
            <Link href="/edukasi" className="text-white/90 hover:text-white transition-colors">Edukasi</Link>
            <Link href="/simulasi" className="text-white font-semibold">Simulasi</Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <section className="border-b bg-white py-10 md:py-14">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="flex items-center gap-2 text-slate-600 mb-3 text-sm font-medium">
              <FlaskConical className="h-4 w-4" />
              <span>Studi Kasus & Analisis</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight mb-3">
              Simulasi Kasus Nyata
            </h1>
            <p className="text-slate-600 max-w-3xl leading-relaxed text-sm md:text-base">
              Pelajari 10 kasus konflik nyata yang terjadi di Indonesia. Setiap kasus dilengkapi dengan pertanyaan simulasi untuk melatih kemampuan berpikir kritis dalam menghadapi situasi konflik di masyarakat.
            </p>
          </div>
        </section>

        <section className="py-10 md:py-12">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid gap-4">
              {SIMULATIONS.map((sim) => (
                <Card
                  key={sim.id}
                  className="group border border-slate-200/80 hover:border-slate-300 hover:shadow-md transition-all duration-200 bg-white"
                >
                  <CardHeader className="pb-3">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <div className="flex flex-wrap items-center gap-2">
                        <Badge variant="outline" className="bg-slate-100 text-slate-700 border-slate-200 font-medium text-xs">
                          {sim.category}
                        </Badge>
                        <span className="flex items-center gap-1 text-xs text-slate-500">
                          <MapPin className="h-3 w-3" /> {sim.location}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-slate-500">
                          <Calendar className="h-3 w-3" /> {sim.year}
                        </span>
                      </div>
                      <span className="text-xs font-semibold text-slate-400 group-hover:text-slate-600 transition-colors">
                        Kasus #{sim.id}
                      </span>
                    </div>
                    <CardTitle className="text-lg font-bold text-slate-900 group-hover:text-slate-700 transition-colors">
                      {sim.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <p className="text-sm text-slate-600 leading-relaxed max-w-3xl">
                      {sim.description}
                    </p>
                    <Link href={`/simulasi/${sim.id}`} className="shrink-0">
                      <Button
                        variant="outline"
                        className="w-full sm:w-auto text-slate-700 border-slate-300 hover:bg-slate-900 hover:text-white transition-all text-sm font-medium"
                      >
                        <span>Pelajari Kasus</span>
                        <ArrowRight className="h-4 w-4 ml-1.5" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
