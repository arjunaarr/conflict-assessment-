import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FlaskConical, MapPin, Calendar } from "lucide-react";

const SIMULATIONS = [
  {
    id: "1",
    title: "Konflik Antarwarga karena Persoalan Jalan",
    location: "Surabaya",
    year: "2025",
    category: "Konflik Properti",
    categoryColor: "bg-blue-100 text-blue-800",
    description:
      "Konflik antartetangga berujung penembokan jalan di Jalan Asem Jajar Gang III, Surabaya. Perselisihan mengenai kepemilikan dan penggunaan tanah yang menjadi akses jalan bersama.",
  },
  {
    id: "2",
    title: "Kericuhan Demonstrasi",
    location: "Surabaya",
    year: "2025",
    category: "Konflik Sosial",
    categoryColor: "bg-orange-100 text-orange-800",
    description:
      "Aksi penyampaian pendapat yang berkembang menjadi kericuhan. Demonstrasi yang awalnya tertib berubah menjadi kekerasan yang melibatkan 26 pelajar.",
  },
  {
    id: "3",
    title: "Saling Ejek di Media Sosial Berujung Perkelahian",
    location: "Surabaya",
    year: "2025",
    category: "Konflik Digital",
    categoryColor: "bg-purple-100 text-purple-800",
    description:
      "Saling ejek melalui Live TikTok berujung perkelahian fisik antar remaja. Konflik digital yang berkembang menjadi kekerasan di dunia nyata.",
  },
  {
    id: "4",
    title: "Perbedaan Kepentingan dalam Kegiatan Keagamaan",
    location: "Sukabumi",
    year: "2025",
    category: "Konflik Agama",
    categoryColor: "bg-yellow-100 text-yellow-800",
    description:
      "Ketegangan terkait kegiatan keagamaan di Desa Tangkil. Perbedaan pandangan mengenai penggunaan vila untuk kegiatan keagamaan yang berujung perusakan.",
  },
  {
    id: "5",
    title: "Konflik Massa dan Kepemilikan Ruko",
    location: "Surabaya",
    year: "2026",
    category: "Konflik Hukum",
    categoryColor: "bg-red-100 text-red-800",
    description:
      "Perselisihan Ruko di Jalan Krukah Utara melibatkan organisasi masyarakat. Dugaan intimidasi dan perusakan pagar dalam sengketa kepemilikan properti.",
  },
  {
    id: "6",
    title: "Konflik Masyarakat Pulau Rempang",
    location: "Batam",
    year: "2023-2024",
    category: "Konflik Agraria",
    categoryColor: "bg-green-100 text-green-800",
    description:
      "Konflik antara masyarakat dan pemerintah terkait rencana pengembangan kawasan Rempang. Bentrokan terjadi saat pemasangan patok di kawasan yang akan dikembangkan.",
  },
  {
    id: "7",
    title: "Konflik Tanjungbalai: Persoalan Rumah Ibadah dan Media Sosial",
    location: "Tanjungbalai, Sumatera Utara",
    year: "2016",
    category: "Konflik Agama & Etnis",
    categoryColor: "bg-red-100 text-red-800",
    description:
      "Kerusuhan yang melibatkan keberagaman agama dan etnis serta penyebaran informasi melalui media sosial. Mengakibatkan penyerangan dan pembakaran rumah ibadah.",
  },
  {
    id: "8",
    title: "Konflik Sosial dalam Pemilu di Bima",
    location: "Bima, NTB",
    year: "2024",
    category: "Konflik Politik",
    categoryColor: "bg-orange-100 text-orange-800",
    description:
      "Perusakan dan pembakaran TPS di Kecamatan Parado setelah Pemungutan Suara Ulang (PSU). Sebanyak 68 kotak suara dibakar dan 34 TPS menjadi sasaran.",
  },
  {
    id: "9",
    title: "Konflik akibat Hoaks dan Informasi Provokatif",
    location: "Nasional",
    year: "2024",
    category: "Hoaks & Disinformasi",
    categoryColor: "bg-gray-100 text-gray-800",
    description:
      "Video lama digunakan untuk membangun narasi seolah-olah terjadi kerusuhan baru, termasuk klaim bahwa kantor KPU, Bawaslu, dan kementerian dibakar.",
  },
  {
    id: "10",
    title: "Konflik Agraria Masyarakat Wadas",
    location: "Purworejo, Jawa Tengah",
    year: "2021-2022",
    category: "Konflik Agraria",
    categoryColor: "bg-green-100 text-green-800",
    description:
      "Penolakan penambangan batu andesit di Desa Wadas untuk kebutuhan Bendungan Bener. Konflik antara masyarakat dengan pihak yang mendukung rencana penambangan.",
  },
];

export default function SimulasiPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="flex items-center gap-2 mb-2">
          <FlaskConical className="h-6 w-6 text-primary" />
          <h1 className="text-2xl font-bold">Simulasi Kasus</h1>
        </div>

        <p className="text-muted-foreground mb-8">
          Pelajari 10 kasus konflik nyata yang terjadi di Indonesia. Setiap kasus dilengkapi dengan
          pertanyaan simulasi untuk melatih kemampuan berpikir kritis dalam menghadapi situasi konflik.
        </p>

        <div className="grid gap-4">
          {SIMULATIONS.map((sim) => (
            <Card key={sim.id} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div className="flex-1">
                    <div className="flex flex-wrap gap-2 mb-2">
                      <Badge className={sim.categoryColor}>{sim.category}</Badge>
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <MapPin className="h-3 w-3" /> {sim.location}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3" /> {sim.year}
                      </span>
                    </div>
                    <CardTitle className="text-base">
                      Kasus {sim.id}: {sim.title}
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">{sim.description}</p>
                <Link href={`/simulasi/${sim.id}`}>
                  <Button variant="outline" size="sm">
                    Pelajari Kasus
                  </Button>
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
