import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Shield, ClipboardList, BookOpen, AlertTriangle } from "lucide-react";

const STEPS = [
  { icon: ClipboardList, title: "Jawab 15 Pertanyaan", desc: "Jawab pertanyaan dengan Ya atau Tidak sesuai kondisi yang Anda amati." },
  { icon: Shield, title: "Lihat Hasil Penilaian", desc: "Sistem menghitung skor dan menampilkan kategori potensi konflik." },
  { icon: BookOpen, title: "Dapatkan Rekomendasi", desc: "Terima rekomendasi dan materi edukasi sesuai hasil penilaian." },
];

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="font-bold text-lg">Penilaian Konflik</Link>
          <nav className="hidden sm:flex gap-6 text-sm">
            <Link href="/edukasi" className="hover:text-primary">Edukasi</Link>
            <Link href="/simulasi" className="hover:text-primary">Simulasi</Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <section className="py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              Sistem Penilaian Potensi Konflik
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Lakukan penilaian awal terhadap indikator potensi konflik di lingkungan Anda melalui 15 pertanyaan sederhana.
            </p>
            <Link href="/penilaian">
              <Button size="lg" className="text-base px-8 py-6">
                Mulai Penilaian
              </Button>
            </Link>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl font-bold text-center mb-10">Cara Kerja</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {STEPS.map((step, i) => (
                <Card key={i} className="text-center">
                  <CardHeader>
                    <div className="mx-auto mb-2 rounded-full bg-primary/10 p-3 w-fit">
                      <step.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{step.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl font-bold text-center mb-6">Edukasi Singkat</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Kenali Tanda-Tanda Konflik</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Konflik sering dimulai dari perbedaan pendapat yang tidak dikelola dengan baik. Kenali tanda-tandanya sejak dini.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Bijak Bermedia Sosial</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Verifikasi informasi sebelum menyebarkannya. Hindari komentar provokatif yang dapat memicu ketegangan.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="text-center mt-6">
              <Link href="/edukasi">
                <Button variant="outline">Lihat Semua Materi Edukasi</Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl font-bold text-center mb-6">Simulasi Kasus</h2>
            <p className="text-center text-muted-foreground mb-6">
              Pelajari melalui simulasi kasus untuk memahami bagaimana konflik dapat berkembang dan bagaimana cara mencegahnya.
            </p>
            <div className="text-center">
              <Link href="/simulasi">
                <Button variant="outline">Lihat Simulasi Kasus</Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4 max-w-3xl">
            <Alert>
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription className="text-xs text-muted-foreground">
                Hasil penilaian merupakan gambaran awal berdasarkan jawaban yang diberikan dan tidak dimaksudkan sebagai keputusan final atau diagnosis terhadap suatu konflik. Untuk kondisi yang serius atau darurat, gunakan saluran bantuan atau pelaporan resmi yang sesuai.
              </AlertDescription>
            </Alert>
          </div>
        </section>
      </main>

      <footer className="border-t py-6 bg-white">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Sistem Penilaian Potensi Konflik
        </div>
      </footer>
    </div>
  );
}
