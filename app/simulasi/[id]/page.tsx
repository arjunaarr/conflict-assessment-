"use client";

import { useState, use } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, MapPin, Calendar, MessageSquare, ChevronDown, ChevronUp, BookOpen } from "lucide-react";

const SIMULATIONS: Record<
  string,
  {
    id: string;
    title: string;
    location: string;
    year: string;
    category: string;
    categoryColor: string;
    scenario: string;
    question: string;
    keyPoints: string[];
  }
> = {
  "1": {
    id: "1",
    title: "Konflik Antarwarga karena Persoalan Jalan – Surabaya",
    location: "Jalan Asem Jajar Gang III, Tembok Dukuh, Surabaya",
    year: "2025",
    category: "Konflik Properti",
    categoryColor: "bg-blue-100 text-blue-800",
    scenario: `Kasus ini terjadi di Jalan Asem Jajar Gang III, Tembok Dukuh, Surabaya. Konflik melibatkan warga yang berselisih mengenai kepemilikan dan penggunaan tanah yang menjadi akses jalan bersama.

Menurut pemberitaan detikJatim, persoalan tersebut berawal dari konflik yang sudah berlangsung sejak sekitar 2011 dan berkaitan dengan urusan ahli waris, pembelian tanah warisan, serta dugaan kerancuan dalam proses jual beli tanah. Salah satu warga berinisial SH merasa sebagian tanah yang digunakan sebagai jalan merupakan bagian dari tanah miliknya. Sementara itu, beberapa tetangga merasa bahwa mereka telah membeli tanah dengan lebar sekitar satu meter untuk digunakan sebagai jalan bersama.

Pada 12 Oktober 2025, H kemudian memasang tembok di tengah jalan tersebut. Jalan yang sebelumnya memiliki lebar sekitar 1 meter menjadi hanya sekitar 50 sentimeter. Ia menyatakan bahwa 50 cm bagian jalan tersebut masuk dalam Sertifikat Hak Milik (SHM) miliknya. Sementara warga yang terdampak menganggap jalan tersebut telah dibeli bersama dan digunakan sebagai fasilitas umum.

Perselisihan tersebut kemudian mendapatkan perhatian Pemerintah Kota Surabaya. Wali Kota Surabaya Eri Cahyadi melakukan mediasi antara pihak-pihak yang berselisih dan melibatkan Badan Pertanahan Nasional (BPN) untuk melakukan pengukuran ulang guna memperjelas status tanah.`,
    question: `Jika kamu menjadi warga yang mengetahui adanya perselisihan mengenai hak penggunaan jalan, bagaimana kamu akan membedakan antara masalah hak pribadi dan kepentingan bersama? Langkah apa yang seharusnya dilakukan sebelum perselisihan tersebut berkembang menjadi konflik antarwarga?`,
    keyPoints: [
      "Konflik bermula dari ketidakjelasan status kepemilikan tanah yang berlangsung bertahun-tahun",
      "Pemasangan tembok secara sepihak memperburuk situasi yang sudah ada",
      "Mediasi oleh pemerintah dan BPN menjadi langkah penyelesaian",
      "Pentingnya penyelesaian jalur hukum sebelum mengambil tindakan sepihak",
    ],
  },
  "2": {
    id: "2",
    title: "Kericuhan Demonstrasi di Surabaya",
    location: "Gedung Negara Grahadi, Surabaya",
    year: "29–30 Agustus 2025",
    category: "Konflik Sosial",
    categoryColor: "bg-orange-100 text-orange-800",
    scenario: `Kasus ini terjadi di Surabaya pada 29–30 Agustus 2025. Aksi tersebut merupakan bagian dari respons terhadap meninggalnya seorang laki-laki berinisial AK berumur 21 tahun, pengemudi ojek online yang meninggal setelah terlindas kendaraan taktis Brimob dalam kericuhan demonstrasi di Jakarta.

Di Surabaya, massa yang menamakan diri Solidaritas AK melakukan aksi dan bergerak menuju Gedung Negara Grahadi. Pada awalnya, massa melakukan aksi dengan long march dan menyampaikan aspirasi. Namun, situasi kemudian berubah ketika sebagian massa mencoba menerobos pagar, melempar batu dan botol ke arah aparat serta Gedung Grahadi.

Dalam perkembangan berikutnya, terdapat fasilitas yang dibakar, termasuk motor yang berada di area Gedung Grahadi. Aparat kemudian menggunakan water cannon dan gas air mata untuk mengendalikan situasi.

Kericuhan tidak hanya berdampak kepada peserta aksi dan aparat. Sejumlah ruas jalan mengalami kerusakan dan ditutup sementara. Petugas gabungan kemudian membersihkan pecahan kaca dan puing-puing serta memperbaiki fasilitas yang terdampak. Peristiwa tersebut juga melibatkan sejumlah pelajar — detikJatim melaporkan bahwa 26 anak di Surabaya diduga terlibat dalam aksi anarkis tersebut.`,
    question: `Ketika sebuah aksi penyampaian pendapat yang awalnya berlangsung tertib mulai berubah menjadi kericuhan, tanda-tanda apa yang menunjukkan bahwa situasi telah memasuki tahap eskalasi konflik? Jika kamu berada di tengah massa, keputusan apa yang dapat kamu ambil untuk mencegah situasi semakin memburuk?`,
    keyPoints: [
      "Demonstrasi yang tertib dapat berubah menjadi kericuhan karena berbagai faktor",
      "Keterlibatan pelajar menunjukkan pentingnya edukasi tentang cara menyampaikan pendapat",
      "Penggunaan kekerasan merugikan semua pihak, termasuk peserta aksi sendiri",
      "Mengenali tanda-tanda eskalasi penting untuk pengambilan keputusan yang tepat",
    ],
  },
  "3": {
    id: "3",
    title: "Saling Ejek di Media Sosial Berujung Perkelahian – Surabaya",
    location: "Kantor Pemerintah Kota Surabaya",
    year: "28 Januari 2025",
    category: "Konflik Digital",
    categoryColor: "bg-purple-100 text-purple-800",
    scenario: `Kasus ini terjadi di Surabaya pada 28 Januari 2025. Satpol PP Kota Surabaya mengamankan tiga anak perempuan di bawah umur yang terlibat perkelahian.

Menurut keterangan resmi Satpol PP Kota Surabaya, perkelahian tersebut berkaitan dengan saling ejek melalui siaran langsung (live) TikTok. Perselisihan yang awalnya terjadi di ruang digital kemudian berkembang hingga ketiga anak tersebut bertemu secara langsung dan terlibat perkelahian di depan Kantor Pemerintah Kota Surabaya.

Kejadian tersebut diketahui setelah seorang warga yang sedang melintas melihat perkelahian tersebut. Warga kemudian melaporkan kejadian kepada petugas Satpol PP. Setelah diamankan, ketiga anak tersebut dibawa ke Kantor Satpol PP untuk dilakukan pendataan dan pembinaan lebih lanjut.

Kasus ini memperlihatkan bagaimana interaksi di media sosial dapat berkembang menjadi konflik di dunia nyata. Ejekan atau komentar yang awalnya terlihat sederhana dapat memicu emosi, terutama ketika persoalan tersebut terus berkembang melalui komunikasi digital.`,
    question: `Dalam kasus ini, konflik bermula dari interaksi di media sosial tetapi berkembang menjadi kekerasan secara langsung. Menurutmu, pada tahap mana konflik sebenarnya masih dapat dicegah, dan tindakan apa yang dapat dilakukan oleh teman, keluarga, atau lingkungan sekitar sebelum konflik berkembang menjadi perkelahian?`,
    keyPoints: [
      "Konflik digital dapat berubah menjadi kekerasan fisik nyata",
      "Peran keluarga dan lingkungan penting dalam mencegah eskalasi",
      "Media sosial mempercepat dan memperluas dampak perselisihan",
      "Literasi digital penting untuk generasi muda",
    ],
  },
  "4": {
    id: "4",
    title: "Perbedaan Kepentingan dalam Kegiatan Keagamaan – Sukabumi",
    location: "Desa Tangkil, Kecamatan Cidahu, Kabupaten Sukabumi, Jawa Barat",
    year: "2025",
    category: "Konflik Agama",
    categoryColor: "bg-yellow-100 text-yellow-800",
    scenario: `Kasus ini terjadi di Desa Tangkil, Kecamatan Cidahu, Kabupaten Sukabumi, Jawa Barat, pada 2025. Persoalan tersebut berkaitan dengan penggunaan sebuah vila untuk kegiatan keagamaan dan menimbulkan ketegangan antara sebagian warga dengan kelompok yang melakukan kegiatan tersebut.

Persoalan kemudian berkembang menjadi insiden yang lebih serius. Dalam pemberitaan dan laporan mengenai kasus tersebut, terdapat perbedaan pandangan mengenai kegiatan yang dilakukan serta kekhawatiran sebagian masyarakat terhadap aktivitas keagamaan di lingkungan mereka. Situasi yang tidak terselesaikan kemudian berujung pada tindakan perusakan terhadap tempat yang digunakan untuk kegiatan tersebut.

Kasus ini mendapat perhatian karena menyangkut kebebasan beragama dan berkeyakinan, kehidupan masyarakat yang beragam, serta cara menyampaikan keberatan terhadap kegiatan kelompok lain. Komnas HAM juga menyoroti pentingnya penyelesaian persoalan dengan memperhatikan hak-hak semua pihak dan mengedepankan dialog.`,
    question: `Ketika terjadi perbedaan pandangan mengenai kegiatan keagamaan di tengah masyarakat yang beragam, bagaimana cara membedakan antara menyampaikan keberatan dengan tindakan yang dapat mengarah pada intoleransi? Cara penyelesaian seperti apa yang dapat digunakan agar hak dan kepentingan semua pihak tetap dihormati?`,
    keyPoints: [
      "Kebebasan beragama dilindungi oleh hukum Indonesia",
      "Keberatan dapat disampaikan melalui dialog, bukan kekerasan",
      "Peran Komnas HAM dalam mediasi konflik keagamaan",
      "Toleransi bukan berarti tidak boleh berbeda pendapat, tetapi cara menyikapinya",
    ],
  },
  "5": {
    id: "5",
    title: "Konflik Massa dan Kepemilikan Ruko – Surabaya",
    location: "Jalan Krukah Utara Nomor 34, Kecamatan Wonokromo, Surabaya",
    year: "22 Juli 2026",
    category: "Konflik Hukum",
    categoryColor: "bg-red-100 text-red-800",
    scenario: `Kasus ini terjadi di Jalan Krukah Utara Nomor 34, Kecamatan Wonokromo, Surabaya, pada 22 Juli 2026. Peristiwa tersebut menjadi perhatian setelah video kedatangan puluhan orang ke sebuah ruko beredar di media sosial.

Menurut pemberitaan detikJatim, puluhan orang yang diduga berasal dari sebuah organisasi masyarakat datang ke ruko tersebut. Dalam rekaman yang beredar, terdapat dugaan intimidasi, perusakan pagar, dan adu dorong antara massa dengan pemilik ruko serta warga yang berada di lokasi. Peristiwa tersebut diketahui terjadi sekitar pukul 14.30 WIB.

Persoalan tersebut berkaitan dengan status dan kepemilikan ruko. Pemilik ruko menyampaikan bahwa bangunan tersebut sebelumnya kosong selama lebih dari dua tahun sebelum masuk dalam proses lelang. Sementara pihak organisasi masyarakat yang disebut dalam pemberitaan membantah melakukan aksi premanisme dan menyatakan bahwa kehadiran mereka berkaitan dengan pendampingan hukum.

Kasus tersebut kemudian dibawa ke jalur hukum. Pemilik ruko melaporkan kejadian tersebut kepada polisi. Wali Kota Surabaya Eri Cahyadi juga meminta agar persoalan diselesaikan melalui jalur hukum, bukan melalui tindakan massa.`,
    question: `Ketika suatu persoalan kepemilikan atau hak atas suatu tempat belum selesai secara hukum tetapi sudah melibatkan massa, apa saja risiko yang dapat muncul? Menurutmu, mengapa penyelesaian melalui jalur hukum dan dialog perlu didahulukan dibandingkan pengerahan massa?`,
    keyPoints: [
      "Sengketa properti sebaiknya diselesaikan melalui jalur hukum",
      "Pengerahan massa dapat memperkeruh situasi dan merugikan semua pihak",
      "Pemerintah kota berperan mendorong penyelesaian damai",
      "Terdapat dua versi berbeda dari pihak-pihak yang terlibat",
    ],
  },
  "6": {
    id: "6",
    title: "Konflik Masyarakat Pulau Rempang",
    location: "Pulau Rempang, Batam",
    year: "2023–2024",
    category: "Konflik Agraria",
    categoryColor: "bg-green-100 text-green-800",
    scenario: `Pulau Rempang, Batam, menjadi lokasi konflik antara masyarakat dan pemerintah terkait rencana pengembangan kawasan Rempang. Konflik tersebut berkaitan dengan rencana pengembangan kawasan yang berdampak pada masyarakat yang telah lama tinggal di wilayah tersebut.

Pada September 2023, terjadi bentrokan ketika aparat melakukan pengamanan terkait proses pengukuran dan pemasangan patok di kawasan yang akan dikembangkan. Peristiwa tersebut kemudian menimbulkan ketegangan antara sebagian masyarakat dengan aparat.

Persoalan tersebut terus menjadi perhatian pada 2024. Komnas HAM menyatakan bahwa konflik Rempang perlu ditangani melalui pendekatan dialogis dan inklusif. Komnas HAM juga menekankan pentingnya melibatkan masyarakat dalam penyelesaian persoalan dan memastikan hak-hak masyarakat tetap diperhatikan.`,
    question: `Dalam konflik Rempang terdapat perbedaan kepentingan antara rencana pengembangan kawasan dan kepentingan masyarakat yang tinggal di wilayah tersebut. Jika kamu menjadi pihak yang terlibat dalam proses pengambilan keputusan, bagaimana cara memastikan bahwa pembangunan tidak hanya mempertimbangkan kepentingan ekonomi, tetapi juga aspirasi dan hak masyarakat terdampak?`,
    keyPoints: [
      "Pembangunan ekonomi harus mempertimbangkan hak masyarakat yang tinggal di wilayah tersebut",
      "Pendekatan dialogis dan inklusif penting dalam penyelesaian konflik agraria",
      "Komnas HAM berperan memastikan hak-hak masyarakat diperhatikan",
      "Partisipasi masyarakat dalam proses pengambilan keputusan sangat krusial",
    ],
  },
  "7": {
    id: "7",
    title: "Konflik Tanjungbalai: Persoalan Rumah Ibadah dan Media Sosial",
    location: "Kota Tanjungbalai, Sumatera Utara",
    year: "29 Juli 2016",
    category: "Konflik Agama & Etnis",
    categoryColor: "bg-red-100 text-red-800",
    scenario: `Kasus Tanjungbalai merupakan salah satu contoh konflik sosial yang berhubungan dengan keberagaman agama dan etnis serta penyebaran informasi melalui media sosial. Peristiwa tersebut terjadi pada 29 Juli 2016 di Kota Tanjungbalai, Sumatera Utara.

Menurut pemantauan Komnas HAM, persoalan bermula ketika seorang warga menyampaikan keberatan mengenai suara pengeras suara dari sebuah rumah ibadah. Persoalan tersebut kemudian berkembang setelah informasi mengenai kejadian tersebut menyebar dan muncul dugaan provokasi melalui media sosial.

Situasi kemudian semakin memanas dan massa melakukan penyerangan serta pembakaran terhadap sejumlah rumah ibadah. Komnas HAM melakukan pemantauan dan menemukan adanya persoalan yang berkaitan dengan hak atas rasa aman, kebebasan beragama dan berkeyakinan, serta diskriminasi ras dan etnis.

Dalam rekomendasinya, Komnas HAM menekankan pentingnya memutus penyebaran komunikasi yang berorientasi pada kebencian terhadap agama dan etnis serta melakukan reintegrasi sosial antaragama dan antaretnis setelah konflik.`,
    question: `Kasus Tanjungbalai menunjukkan bagaimana persoalan yang berkaitan dengan agama dan etnis dapat berkembang menjadi konflik yang lebih luas. Jika kamu menerima informasi yang berpotensi memicu kebencian terhadap kelompok tertentu, bagaimana cara menilai apakah informasi tersebut benar, provokatif, atau berpotensi memperbesar konflik? Apa yang seharusnya dilakukan sebelum informasi tersebut disebarkan?`,
    keyPoints: [
      "Informasi yang tidak terverifikasi dapat memperparah konflik bernuansa SARA",
      "Media sosial mempercepat penyebaran provokasi",
      "Komnas HAM merekomendasikan reintegrasi sosial pasca konflik",
      "Verifikasi informasi sebelum menyebarkan sangat penting",
    ],
  },
  "8": {
    id: "8",
    title: "Konflik Sosial dalam Pemilu di Bima",
    location: "Kecamatan Parado, Kabupaten Bima, Nusa Tenggara Barat",
    year: "Februari 2024",
    category: "Konflik Politik",
    categoryColor: "bg-orange-100 text-orange-800",
    scenario: `Kasus ini terjadi setelah pelaksanaan Pemungutan Suara Ulang (PSU) di Kecamatan Parado, Kabupaten Bima, Nusa Tenggara Barat, pada Februari 2024. Komnas HAM mencatat adanya konflik sosial setelah proses pemilu sebelumnya.

Dalam peristiwa tersebut, sejumlah TPS menjadi sasaran perusakan dan pembakaran. Berdasarkan informasi yang diperoleh Komnas HAM dari kepolisian, kejadian tersebut berlangsung pada malam hari. Pelaku juga membawa senjata tajam.

Dari sekitar 34 TPS di Kecamatan Parado yang menjadi sasaran, sebanyak 68 kotak suara dilaporkan dibakar, sedangkan 102 kotak suara berhasil diamankan. Sebanyak 13 orang disebut sebagai pelaku perusakan TPS; pada saat Komnas HAM melakukan pemantauan, empat orang telah ditangkap dan sembilan lainnya masih dalam pencarian polisi.

Akibat kejadian tersebut, wilayah yang sebelumnya tidak dikategorikan rawan kemudian mendapat pengamanan lebih ketat untuk pelaksanaan PSU. Komnas HAM juga melakukan pemantauan terhadap proses PSU dan mencatat bahwa pelaksanaannya kemudian berjalan aman, lancar, dan tertib.`,
    question: `Perbedaan pilihan politik merupakan bagian dari kehidupan demokratis. Namun, dalam kasus Bima, konflik berkembang hingga terjadi perusakan dan pembakaran TPS. Menurutmu, faktor apa yang dapat menyebabkan perbedaan pilihan berubah menjadi konflik sosial? Apa peran masyarakat, khususnya generasi muda, dalam mencegah perbedaan politik berkembang menjadi kekerasan?`,
    keyPoints: [
      "Perbedaan pilihan politik adalah hal normal dalam demokrasi",
      "Kekerasan dalam pemilu merusak proses demokrasi dan merugikan semua pihak",
      "Pengawasan ketat pasca konflik membantu PSU berjalan aman",
      "Generasi muda berperan penting dalam menjaga kedamaian pemilu",
    ],
  },
  "9": {
    id: "9",
    title: "Konflik akibat Hoaks dan Informasi Provokatif",
    location: "Nasional",
    year: "1 Maret 2024",
    category: "Hoaks & Disinformasi",
    categoryColor: "bg-gray-100 text-gray-800",
    scenario: `Kasus ini menunjukkan bahwa informasi palsu dapat menjadi pemicu ketegangan di masyarakat. Pada 1 Maret 2024, Kementerian Komunikasi dan Digital (saat itu Kominfo) memberikan klarifikasi terhadap sebuah video yang beredar di YouTube.

Video tersebut diberi narasi seolah-olah menunjukkan kerusuhan yang terjadi pada 28 Februari 2024, termasuk klaim bahwa kantor KPU, Bawaslu, dan sejumlah kementerian telah dibakar sehingga pemerintahan lumpuh.

Setelah dilakukan pemeriksaan, informasi tersebut dinyatakan tidak benar. Kementerian menjelaskan bahwa video tersebut sebenarnya merupakan rekaman kericuhan demonstrasi yang terjadi di sekitar Kantor Bawaslu Jakarta pada 22 Mei 2019, bukan peristiwa pada 28 Februari 2024 seperti yang diklaim dalam unggahan tersebut.

Kasus ini penting karena informasi yang salah mengenai kerusuhan dapat menimbulkan kepanikan, kemarahan, atau ketegangan apabila masyarakat langsung mempercayai dan menyebarkannya tanpa melakukan pemeriksaan terlebih dahulu. Kementerian Komdigi juga menekankan bahwa masyarakat perlu berhati-hati terhadap disinformasi, fitnah, dan konten kebencian karena konten tersebut dapat berdampak terhadap kehidupan sosial dan persatuan masyarakat.`,
    question: `Sebuah video lama digunakan untuk membangun narasi seolah-olah sedang terjadi kerusuhan baru. Jika informasi tersebut sudah viral dan memicu kemarahan masyarakat, langkah apa saja yang harus dilakukan untuk memverifikasi informasi sebelum mempercayai atau menyebarkannya? Menurutmu, bagaimana penyebaran informasi yang tidak terverifikasi dapat memperbesar potensi konflik sosial?`,
    keyPoints: [
      "Video lama dapat digunakan ulang dengan narasi menyesatkan",
      "Verifikasi informasi sebelum menyebarkan sangat kritis",
      "Disinformasi dapat memicu kepanikan dan ketegangan sosial",
      "Situs pengecek fakta seperti cekfakta.com dapat membantu verifikasi",
    ],
  },
  "10": {
    id: "10",
    title: "Konflik Agraria Masyarakat Wadas",
    location: "Desa Wadas, Kecamatan Bener, Kabupaten Purworejo, Jawa Tengah",
    year: "2021–2022",
    category: "Konflik Agraria",
    categoryColor: "bg-green-100 text-green-800",
    scenario: `Desa Wadas, Kecamatan Bener, Kabupaten Purworejo, Jawa Tengah, pernah mengalami konflik antara sebagian warga dengan pihak yang mendukung rencana penambangan batu andesit untuk kebutuhan pembangunan Bendungan Bener.

Sebagian warga menolak rencana penambangan karena khawatir terhadap dampaknya terhadap lingkungan dan keberlangsungan kehidupan masyarakat. Menurut laporan Komnas HAM, warga juga menyampaikan persoalan mengenai kurangnya sosialisasi dan keterlibatan mereka dalam proses yang berkaitan dengan rencana tersebut.

Komnas HAM menerima pengaduan warga pada September 2021 mengenai dugaan perusakan lingkungan dan intimidasi. Komnas HAM kemudian melakukan pemantauan langsung dan berkoordinasi dengan Pemerintah Kabupaten Purworejo serta pihak-pihak terkait untuk memperoleh informasi mengenai persoalan tersebut.

Kasus Wadas menarik untuk pembelajaran karena memperlihatkan bagaimana perbedaan kepentingan pembangunan dengan kepentingan masyarakat dan lingkungan dapat berkembang menjadi konflik apabila komunikasi, partisipasi, dan penyelesaian masalah tidak berjalan dengan baik.`,
    question: `Ketika sebagian masyarakat menolak suatu rencana pembangunan karena mempertimbangkan lingkungan dan kehidupan mereka, sementara pemerintah melihat pembangunan tersebut memiliki kepentingan yang lebih luas, bagaimana seharusnya perbedaan kepentingan tersebut dikelola? Pada tahap apa dialog dan partisipasi masyarakat perlu dilakukan agar konflik dapat dicegah?`,
    keyPoints: [
      "Keterlibatan masyarakat sejak awal mencegah konflik yang lebih besar",
      "Kekhawatiran lingkungan harus dipertimbangkan dalam rencana pembangunan",
      "Komnas HAM berperan dalam menerima pengaduan dan memantau konflik agraria",
      "Dialog dan sosialisasi yang baik adalah kunci pencegahan konflik pembangunan",
    ],
  },
};

export default function SimulasiDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const data = SIMULATIONS[id];
  const [showQuestion, setShowQuestion] = useState(false);

  if (!data) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <p className="text-muted-foreground">Kasus simulasi tidak ditemukan.</p>
        <Link href="/simulasi">
          <Button variant="outline">Kembali ke Daftar</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <Link
          href="/simulasi"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6"
        >
          <ArrowLeft className="h-4 w-4" /> Kembali ke Daftar Simulasi
        </Link>

        {/* Header */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2 mb-3">
            <Badge className={data.categoryColor}>{data.category}</Badge>
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              <MapPin className="h-3 w-3" /> {data.location}
            </span>
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              <Calendar className="h-3 w-3" /> {data.year}
            </span>
          </div>
          <h1 className="text-2xl font-bold">
            Kasus {data.id}: {data.title}
          </h1>
        </div>

        {/* Scenario */}
        <Card className="mb-4">
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              Skenario Kasus
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-sm text-foreground whitespace-pre-line leading-relaxed">
              {data.scenario}
            </div>
          </CardContent>
        </Card>

        {/* Key Points */}
        <Card className="mb-4">
          <CardHeader>
            <CardTitle className="text-base">Poin Kunci</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {data.keyPoints.map((point, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Simulation Question */}
        <Card className="border-primary/30 bg-primary/5">
          <CardHeader
            className="cursor-pointer select-none"
            onClick={() => setShowQuestion(!showQuestion)}
          >
            <CardTitle className="text-base flex items-center justify-between">
              <span className="flex items-center gap-2">
                <MessageSquare className="h-4 w-4 text-primary" />
                Pertanyaan Simulasi
              </span>
              {showQuestion ? (
                <ChevronUp className="h-4 w-4 text-muted-foreground" />
              ) : (
                <ChevronDown className="h-4 w-4 text-muted-foreground" />
              )}
            </CardTitle>
          </CardHeader>
          {showQuestion && (
            <CardContent>
              <p className="text-sm leading-relaxed">{data.question}</p>
            </CardContent>
          )}
          {!showQuestion && (
            <CardContent>
              <p className="text-xs text-muted-foreground italic">
                Klik untuk menampilkan pertanyaan simulasi dan renungkan jawabanmu.
              </p>
            </CardContent>
          )}
        </Card>

        {/* Navigation */}
        <div className="flex justify-between mt-6">
          {parseInt(id) > 1 ? (
            <Link href={`/simulasi/${parseInt(id) - 1}`}>
              <Button variant="outline" size="sm">
                ← Kasus Sebelumnya
              </Button>
            </Link>
          ) : (
            <div />
          )}
          {parseInt(id) < 10 ? (
            <Link href={`/simulasi/${parseInt(id) + 1}`}>
              <Button variant="outline" size="sm">
                Kasus Berikutnya →
              </Button>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>
    </div>
  );
}
