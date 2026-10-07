"use client";

import { useState, use } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ChevronDown, ChevronUp } from "lucide-react";
import InteractiveFlowchart from "../components/InteractiveFlowchart";

type Section = {
  title: string;
  content: string | string[] | { subtitle: string; text: string; isCategory?: boolean }[];
};

type EdukasiData = {
  title: string;
  color: string;
  intro: string | string[];
  sections: Section[];
};

const EDUCATION_DATA: Record<string, EdukasiData> = {
  "konflik-sosial": {
    title: "Konflik Sosial",
    color: "bg-blue-100 text-blue-800",
    intro: [
      "Konflik sosial diatur secara khusus dalam Undang-Undang Nomor 7 Tahun 2012 tentang Penanganan Konflik Sosial (UU PKS), Berdasarkan Pasal 1 angka 1 UU No. 7 Tahun 2012, yang dimaksud dengan Konflik Sosial adalah:",
      "\"Perseteruan dan/atau benturan fisik dengan kekerasan antara dua kelompok masyarakat atau lebih yang berlangsung dalam waktu tertentu dan berdampak luas yang mengakibatkan ketidakamanan dan disintegrasi sosial sehingga mengganggu stabilitas nasional dan menghambat pembangunan nasional\"",
      "Jadi lebih jelasnya, Konflik sosial adalah ketegangan, ketidaksepakatan, dan pertentangan antara individu atau kelompok yang memiliki kepentingan atau nilai yang berbeda. Konflik sosial bisa terjadi dalam berbagai skala, mulai dari konflik antara individu di dalam keluarga hingga konflik antara kelompok etnis atau antar negara. Konflik sosial antara individu bisa berupa perselisihan keluarga, sementara konflik sosial antara kelompok bisa berupa persaingan ekonomi atau konflik agama. Konflik sosial juga dapat disebabkan oleh ketidakadilan sosial, perbedaan kelas, atau ketidakseimbangan kekuasaan di antara kelompok-kelompok yang terlibat."
    ],
    sections: [
      {
        title: "Ciri-Ciri Konflik Sosial",
        content: [
          { subtitle: "1. Adanya Dua Pihak atau Lebih", text: "Melibatkan interaksi antara individu atau kelompok yang saling bertentangan." },
          { subtitle: "2. Perbedaan yang Tajam", text: "Didorong oleh benturan nilai, norma, status, atau kepentingan materi." },
          { subtitle: "3. Aksi Saling Menentang", text: "Adanya tindakan nyata untuk saling menjatuhkan atau merugikan pihak lawan." },
          { subtitle: "4. Bersifat Dinamis", text: "Konflik memiliki siklus, mulai dari ketegangan tersembunyi hingga pecah menjadi tindakan terbuka." },
          { subtitle: "5. Menimbulkan Dampak", text: "Selalu membawa konsekuensi, baik dampak negatif (kerusakan) maupun positif (solidaritas internal kelompok yang meningkat)." },
        ],
      },
      {
        title: "Penyebab Terjadinya Konflik Sosial",
        content: [
          { subtitle: "1. Perbedaan pendapat", text: "Perbedaan cara pandang terhadap suatu masalah dapat menimbulkan perselisihan." },
          { subtitle: "2. Perbedaan kepentingan", text: "Setiap individu atau kelompok memiliki kebutuhan dan tujuan yang berbeda sehingga dapat terjadi pertentangan." },
          { subtitle: "3. Perbedaan nilai dan budaya", text: "Keberagaman nilai, kebiasaan, dan budaya dapat menimbulkan perbedaan pemahaman apabila tidak disikapi dengan toleransi." },
          { subtitle: "4. Kesalahpahaman", text: "Komunikasi yang kurang baik dapat menyebabkan seseorang salah memahami maksud atau tindakan orang lain." },
          { subtitle: "5. Ketidakadilan", text: "Perlakuan yang dianggap tidak adil dapat menimbulkan rasa kecewa, ketidakpuasan, dan pertentangan." },
          { subtitle: "6. Penyebaran informasi yang tidak benar", text: "Berita bohong atau informasi yang belum terbukti kebenarannya dapat memicu kesalahpahaman dan memperbesar konflik." },
        ],
      },
      {
        title: "Bentuk-bentuk Konflik Sosial",
        content: [
          { subtitle: "A. Berdasarkan Sifat", text: "", isCategory: true },
          { subtitle: "1. Konflik Destruktif", text: "Konflik yang membawa akibat kurang menguntungkan bagi pihak yang berkonflik, yaitu mengakibatkan hilangnya nyawa atau harta benda, serta timbulnya persaingan, cemas, tegang, dan sebagainya." },
          { subtitle: "2. Konflik Konstruktif", text: "Suatu konflik yang mampu membawa ke arah keuntungan yang membangun." },
          { subtitle: "B. Berdasarkan Posisi Pelaku yang Berkonflik", text: "", isCategory: true },
          { subtitle: "1. Konflik Vertikal", text: "Konflik yang terjadi antara kelompok masyarakat yang berbeda (hierarki/tingkatan)." },
          { subtitle: "2. Konflik Horizontal", text: "Konflik yang terjadi di dalam kelompok sosial yang sama (setara)." },
          { subtitle: "3. Konflik Diagonal", text: "Konflik yang terjadi karena ketidakadilan alokasi sumber daya secara menyeluruh, sehingga menimbulkan pertentangan dari Masyarakat." },
        ],
      },
      {
        title: "Dampak Konflik Sosial bagi Masyarakat",
        content: [
          "Retaknya persatuan kelompok karena anggotanya saling berselisih.",
          "Menimbulkan aksi kekerasan, kerusuhan, dan penghancuran infrastruktur, bangunan, dan fasilitas umum.",
          "Merusak kegiatan ekonomi, mempengaruhi produksi dan distribusi barang dan jasa, serta menurunkan daya beli dan pertumbuhan ekonomi secara keseluruhan.",
          "Menyebabkan trauma dan kecemasan pada individu yang terlibat atau terkena dampaknya, terutama pada anak-anak dan kelompok rentan.",
          "Dapat menyebabkan hilangnya nyawa dan kerugian kemanusiaan yang besar pada individu dan masyarakat secara keseluruhan."
        ],
      },
      {
        title: "Contoh Konflik di Masyarakat",
        content: [
          { subtitle: "a. Diskriminasi", text: "Membeda-bedakan orang lain berdasarkan latar belakang mereka. Faktor penyebab diskriminasi adalah pengetahuan akan keberagaman yang rendah dan sikap saling menghormati sesama yang buruk. Akibatnya adalah sikap rendah diri korban dan gangguan keharmonisan." },
          { subtitle: "b. Rasisme", text: "Merendahkan ras manusia tertentu. Faktor penyebab rasisme adalah kesadaran diri yang buruk, sikap egois, dan kurangnya rasa saling menyayangi. Mengakibatkan terhambatnya kerukunan antarmasyarakat." },
          { subtitle: "c. Perudungan", text: "Mengganggu, merendahkan, dan mencelakai seseorang yang dianggap lemah. Disebabkan sikap egois dan ingin menang sendiri, tidak memiliki simpati dan empati. Akibatnya mengganggu kesehatan fisik dan psikis korban, serta perpecahan." },
          { subtitle: "d. Kekerasan", text: "Menyalahgunakan jabatan, wewenang, dan kelebihan fisik untuk menyakiti orang lain. Faktor penyebabnya adalah sikap temperamental, rendahnya simpati dan empati. Akibatnya rusaknya kerukunan dan keharmonisan." },
          { subtitle: "e. Terorisme", text: "Menebarkan teror atau rasa takut untuk meraih tujuan. Disebabkan rendahnya supremasi hukum, paham yang bertentangan dengan Pancasila. Akibatnya mengancam kedaulatan NKRI dan menebarkan kebencian." },
          { subtitle: "f. Korupsi", text: "Memperkaya diri dengan hak milik orang lain atau hak negara. Disebabkan rendahnya kejujuran dan supremasi hukum. Akibatnya sulit mencapai kesejahteraan rakyat dan kesenjangan sosial serta ekonomi." },
        ],
      },
      {
        title: "Tujuan Penanganan Konflik Sosial",
        content: [
          { subtitle: "a. Pasal 3 UU No. 7 Tahun 2012", text: "Menciptakan kehidupan masyarakat yang aman, tenteram, damai, dan sejahtera." },
          { subtitle: "b. Harmoni", text: "Memelihara kondisi damai dan harmonis dalam hubungan sosial kemasyarakatan." },
          { subtitle: "c. Toleransi", text: "Meningkatkan tenggang rasa dan toleransi dalam kehidupan bermasyarakat dan bernegara." },
          { subtitle: "d. Fungsi Pemerintahan", text: "Memelihara fungsi pemerintahan berjalan secara normal." },
          { subtitle: "e. HAM", text: "Melindungi hak asasi manusia (HAM) serta harta benda." },
          { subtitle: "f. Partisipasi", text: "Meningkatkan partisipasi masyarakat dalam penyelesaian konflik secara damai." },
        ],
      },
    ],
  },
  "kewaspadaan-dini": {
    title: "Kewaspadaan Dini",
    color: "bg-yellow-100 text-yellow-800",
    intro: [
      "Kewaspadaan dini adalah serangkaian upaya atau tindakan kepekaan, kesiagaan, dan antisipasi untuk mendeteksi serta mencegah segala potensi ancaman, tantangan, hambatan, dan gangguan (ATHG) sejak awal. Dalam kehidupan sehari-hari, kewaspadaan dini dapat dilakukan dengan memperhatikan perubahan situasi di lingkungan sekitar, mengenali munculnya perselisihan, serta memeriksa informasi yang diterima sebelum mempercayai atau menyebarkannya."
    ],
    sections: [
      {
        title: "Tiga Unsur Utama Kewaspadaan Dini",
        content: [
          { subtitle: "1. Mengenali", text: "Peka terhadap gejala atau perubahan yang tidak biasa di lingkungan sekitar, seperti meningkatnya ketegangan antarwarga, beredarnya isu provokatif, atau munculnya ujaran kebencian." },
          { subtitle: "2. Memahami", text: "Menganalisis penyebab, pihak yang terlibat, dan kemungkinan dampak dari tanda-tanda tersebut, bukan langsung berasumsi atau menghakimi." },
          { subtitle: "3. Merespons", text: "Mengambil tindakan yang tepat dan cepat, seperti mendamaikan pihak yang berselisih, mengklarifikasi kabar bohong, atau melapor ke ketua RT/RW, tokoh masyarakat, atau aparat berwenang." },
        ],
      },
      {
        title: "Contoh Tanda Awal yang Perlu Diwaspadai",
        content: [
          { subtitle: "1. Perselisihan kecil", text: "Perselisihan kecil antarwarga atau antarkelompok yang dibiarkan berlarut-larut." },
          { subtitle: "2. Hoaks atau provokasi", text: "Beredarnya hoaks atau provokasi di media sosial atau grup pesan." },
          { subtitle: "3. Sikap saling curiga", text: "Munculnya sikap saling curiga atau eksklusivitas kelompok." },
          { subtitle: "4. Ketimpangan", text: "Ketimpangan atau ketidakadilan yang menimbulkan kekecewaan." },
          { subtitle: "5. Orang mencurigakan", text: "Kehadiran orang tak dikenal dengan perilaku mencurigakan." },
        ],
      },
      {
        title: "Mengapa Kewaspadaan Dini Penting?",
        content: [
          { subtitle: "1. Mencegah eskalasi", text: "Mencegah konflik kecil membesar menjadi kerusuhan atau kekerasan." },
          { subtitle: "2. Menjaga persatuan", text: "Menjaga persatuan, ketertiban, dan rasa aman masyarakat." },
          { subtitle: "3. Efisiensi", text: "Menghemat sumber daya, karena penanganan dini lebih murah daripada pemulihan pascakonflik." },
          { subtitle: "4. Budaya peduli", text: "Membangun budaya saling peduli dan tanggung jawab bersama." },
        ],
      },
      {
        title: "Bagaimana Menerapkannya?",
        content: "Kewaspadaan dini adalah tanggung jawab bersama, bukan hanya aparat keamanan. Warga dapat menerapkannya dengan aktif menjaga lingkungan (misalnya lewat siskamling dan forum warga), bijak bermedia sosial dengan tidak menyebarkan informasi yang belum terverifikasi, mengedepankan dialog dan musyawarah dalam menyelesaikan perbedaan, serta melapor kepada pihak berwenang bila menemukan potensi ancaman."
      },
    ],
  },
  "toleransi": {
    title: "Toleransi",
    color: "bg-green-100 text-green-800",
    intro: [
      "Toleransi adalah sikap saling menghargai, menghormati, dan membolehkan segala perbedaan, baik berupa pandangan, pendapat, kepercayaan, kebiasaan, suku, maupun agama yang berbeda dari diri sendiri."
    ],
    sections: [
      {
        title: "Manfaat Toleransi",
        content: [
          { subtitle: "1. Menciptakan kerukunan", text: "Menciptakan kehidupan masyarakat yang rukun, aman, dan damai." },
          { subtitle: "2. Mencegah konflik", text: "Mencegah terjadinya konflik, perpecahan, dan permusuhan." },
          { subtitle: "3. Mempererat persaudaraan", text: "Mempererat rasa persaudaraan serta persatuan antarsesama." },
        ],
      },
      {
        title: "Mengapa Toleransi Efektif Mencegah Konflik?",
        content: [
          { subtitle: "1. Mengurangi rasa curiga", text: "Ketika orang saling menghargai, ruang bagi hoaks dan provokasi untuk memecah belah menjadi lebih sempit." },
          { subtitle: "2. Membuka ruang dialog", text: "Perbedaan dipandang sebagai hal yang wajar dan dapat dibicarakan, bukan ancaman yang harus dilawan." },
          { subtitle: "3. Menumbuhkan rasa memiliki bersama", text: "Setiap kelompok merasa diterima, sehingga kecil kemungkinan muncul kekecewaan yang berujung pada permusuhan." },
          { subtitle: "4. Meredam emosi", text: "Orang yang toleran cenderung mengendalikan diri dan mencari jalan keluar damai saat berselisih." },
        ],
      },
      {
        title: "Contoh Penerapan dalam Kehidupan Sehari-hari",
        content: [
          { subtitle: "1. Menghormati ibadah", text: "Menghormati umat agama lain yang sedang beribadah atau merayakan hari besar." },
          { subtitle: "2. Menghargai budaya", text: "Tidak mengejek logat, adat, atau kebiasaan suku lain." },
          { subtitle: "3. Menyampaikan pendapat", text: "Menyampaikan perbedaan pendapat dengan santun dalam musyawarah." },
          { subtitle: "4. Bijak bermedia sosial", text: "Tidak menyebarkan konten yang menyudutkan kelompok tertentu di media sosial." },
          { subtitle: "5. Gotong royong", text: "Bergotong royong tanpa memandang latar belakang." },
        ],
      },
    ],
  },
  "literasi-informasi": {
    title: "Literasi Informasi",
    color: "bg-purple-100 text-purple-800",
    intro: [
      "Literasi informasi adalah kemampuan untuk mencari, memahami, menilai, menggunakan, dan menyampaikan informasi secara tepat dan bertanggung jawab. Kemampuan ini penting bagi generasi muda karena informasi dapat diperoleh dengan mudah melalui media sosial, internet, dan berbagai platform digital.",
      "Memiliki literasi informasi berarti tidak langsung percaya pada setiap informasi yang diterima. Sebelum mempercayai atau menyebarkannya, kita perlu memeriksa sumber, memahami konteks, membandingkan dengan sumber lain, dan memastikan kebenarannya. Hal ini dapat membantu mencegah penyebaran hoaks, kesalahpahaman, dan informasi yang berpotensi memicu konflik sosial."
    ],
    sections: [
      {
        title: "Kenali Fakta, Opini, dan Hoaks",
        content: [
          { subtitle: "1. Fakta", text: "Informasi yang dapat dibuktikan kebenarannya melalui data, bukti, atau sumber yang terpercaya." },
          { subtitle: "2. Opini", text: "Pendapat atau pandangan seseorang terhadap suatu hal. Opini dapat berbeda antara satu orang dengan orang lainnya." },
          { subtitle: "3. Hoaks", text: "Informasi palsu atau menyesatkan yang disampaikan seolah-olah benar. Hoaks biasanya tidak memiliki sumber yang jelas atau bertentangan dengan fakta yang dapat diverifikasi." },
        ],
      },
      {
        title: "Mengapa Informasi Dapat Memicu Konflik?",
        content: [
          { subtitle: "1. Memicu emosi dan amarah", text: "Kabar bohong yang menyentuh isu sensitif (SARA) mudah membuat orang bereaksi tanpa berpikir panjang." },
          { subtitle: "2. Menumbuhkan prasangka dan kebencian", text: "Informasi yang menyudutkan satu kelompok membuat kelompok lain merasa curiga atau terancam." },
          { subtitle: "3. Menyebar sangat cepat", text: "Media sosial dan grup pesan membuat satu kabar bohong dapat menjangkau ribuan orang dalam hitungan menit." },
          { subtitle: "4. Sulit ditarik kembali", text: "Setelah tersebar, klarifikasi sering kalah cepat dan kalah viral dibanding kabar aslinya." },
          { subtitle: "5. Dimanfaatkan pihak tertentu", text: "Ada pihak yang sengaja menyebarkan hoaks untuk memecah belah masyarakat." },
        ],
      },
      {
        title: "Cara Memeriksa Kebenaran Informasi",
        content: [
          { subtitle: "1. Periksa sumbernya", text: "Apakah berasal dari media resmi, lembaga pemerintah, atau pakar yang kredibel? Waspadai akun anonim atau situs yang tidak dikenal." },
          { subtitle: "2. Baca isi secara utuh", text: "Jangan hanya berhenti di judul, karena judul sering dibuat sensasional." },
          { subtitle: "3. Cek tanggal dan konteks", text: "Kadang berita lama diunggah ulang seolah-olah baru terjadi." },
          { subtitle: "4. Bandingkan dengan sumber lain", text: "Bila kabar itu benar dan penting, biasanya diberitakan oleh beberapa media tepercaya." },
          { subtitle: "5. Periksa foto dan video", text: "Foto dapat diedit atau diambil dari peristiwa lain. Pencarian gambar terbalik (misalnya lewat Google Lens) dapat membantu menelusuri asal-usulnya." },
          { subtitle: "6. Gunakan situs pengecek fakta", text: "Contohnya cekfakta.com, turnbackhoax.id, atau kanal hoaks di situs resmi Komdigi." },
          { subtitle: "7. Tanyakan pada ahlinya", text: "Untuk informasi kesehatan, hukum, atau keagamaan, rujuklah pakar atau lembaga yang berwenang." },
        ],
      },
    ],
  },
  "musyawarah": {
    title: "Musyawarah",
    color: "bg-indigo-100 text-indigo-800",
    intro: [
      "Musyawarah adalah proses membahas suatu persoalan secara bersama-sama untuk mencapai kesepakatan (mufakat) yang dapat diterima semua pihak. Setiap orang diberi kesempatan menyampaikan pendapat, dan keputusan diambil dengan mempertimbangkan kepentingan bersama, bukan kepentingan pribadi atau golongan."
    ],
    sections: [
      {
        title: "Prinsip-Prinsip dalam Musyawarah",
        content: [
          { subtitle: "1. Mengutamakan kepentingan bersama", text: "Keputusan diambil demi kebaikan bersama, bukan keuntungan pribadi." },
          { subtitle: "2. Memberi kesempatan yang sama", text: "Setiap peserta berhak menyampaikan pendapat tanpa dibeda-bedakan." },
          { subtitle: "3. Mendengarkan dengan sungguh-sungguh", text: "Tidak memotong pembicaraan dan mau memahami sudut pandang orang lain." },
          { subtitle: "4. Menyampaikan pendapat dengan santun", text: "Berbeda pendapat boleh, tetapi tidak dengan emosi, hinaan, atau paksaan." },
          { subtitle: "5. Tidak memaksakan kehendak", text: "Tidak ada pihak yang boleh menekan atau mengintimidasi peserta lain." },
          { subtitle: "6. Mengedepankan mufakat", text: "Keputusan diusahakan diambil dengan kesepakatan bersama. Bila tidak tercapai, dapat ditempuh pemungutan suara (voting) sebagai jalan terakhir." },
          { subtitle: "7. Bertanggung jawab atas hasil", text: "Semua pihak ikut menjalankan dan menjaga keputusan yang telah disepakati." },
        ],
      },
      {
        title: "Cara Menyelesaikan Perbedaan melalui Musyawarah",
        content: [
          { subtitle: "1. Kenali pokok masalah", text: "Pastikan semua pihak memahami apa yang sedang dibahas." },
          { subtitle: "2. Kumpulkan pihak yang terlibat", text: "Hadirkan semua pihak yang berkepentingan agar tidak ada yang merasa diabaikan." },
          { subtitle: "3. Sampaikan pendapat secara bergiliran", text: "Beri waktu yang adil bagi setiap peserta." },
          { subtitle: "4. Dengarkan dan pahami", text: "Tanyakan bila ada yang kurang jelas, dan hindari menyimpulkan sebelum mendengar penjelasan lengkap." },
          { subtitle: "5. Cari titik temu", text: "Identifikasi kesamaan dan pikirkan solusi yang dapat mengakomodasi kepentingan banyak pihak." },
          { subtitle: "6. Kendalikan emosi", text: "Bila suasana memanas, ambil jeda sejenak atau libatkan penengah yang netral." },
          { subtitle: "7. Ambil keputusan bersama", text: "Utamakan mufakat, dan gunakan pemungutan suara bila mufakat tidak tercapai." },
          { subtitle: "8. Catat dan sepakati tindak lanjut", text: "Tentukan siapa melakukan apa agar keputusan benar-benar dijalankan." },
        ],
      },
      {
        title: "Contoh Musyawarah dalam Kehidupan Generasi Muda",
        content: [
          { subtitle: "1. Di kelas", text: "Menentukan pembagian tugas kelompok atau jadwal piket dengan mendengarkan usulan seluruh anggota." },
          { subtitle: "2. Di OSIS atau organisasi kampus", text: "Merancang program kerja, menentukan tema kegiatan, dan memilih ketua panitia." },
          { subtitle: "3. Di karang taruna atau komunitas", text: "Memutuskan kegiatan sosial, lomba, atau perayaan hari besar bersama warga." },
          { subtitle: "4. Di ekskul atau tim olahraga", text: "Menyepakati aturan latihan dan strategi tim." },
          { subtitle: "5. Di lingkungan pertemanan", text: "Memilih tempat berkumpul atau menyelesaikan salah paham antarteman tanpa bertengkar." },
          { subtitle: "6. Di ruang digital", text: "Berdiskusi di grup pesan atau forum daring dengan bahasa santun dan tidak menyerang pribadi." },
        ],
      },
    ],
  },
  "pencegahan-konflik": {
    title: "Pencegahan Konflik",
    color: "bg-teal-100 text-teal-800",
    intro: [
      "Pencegahan konflik penting dilakukan karena konflik yang dibiarkan berkembang tanpa penanganan dapat mengganggu berbagai aspek kehidupan bermasyarakat."
    ],
    sections: [
      {
        title: "Mengapa Konflik Perlu Dicegah?",
        content: [
          { subtitle: "1. Mengganggu Keamanan dan Ketertiban", text: "Konflik yang meluas dapat memicu tindakan kekerasan, kerusuhan, atau gangguan keamanan lainnya." },
          { subtitle: "2. Merusak Hubungan Sosial", text: "Konflik dapat merenggangkan hubungan antarindividu maupun antarkelompok yang sebelumnya hidup rukun." },
          { subtitle: "3. Mengancam Persatuan Bangsa", text: "Jika konflik antarkelompok dibiarkan, hal ini dapat mengikis rasa persatuan dan kesatuan bangsa." },
          { subtitle: "4. Menghambat Pembangunan", text: "Wilayah yang sering dilanda konflik cenderung tertinggal dalam pembangunan karena energi tersita untuk menangani konflik." },
          { subtitle: "5. Menimbulkan Kerugian", text: "Konflik dapat menimbulkan kerugian material maupun nonmaterial (trauma psikologis, hilangnya nyawa)." },
          { subtitle: "6. Menjaga Kerukunan", text: "Pencegahan konflik bertujuan agar perbedaan-perbedaan ini dapat dikelola secara damai." },
        ],
      },
      {
        title: "Mengenali Tanda-Tanda Situasi yang Berpotensi Menjadi Konflik",
        content: [
          { subtitle: "1. Meningkatnya ketegangan", text: "Suasana menjadi tidak nyaman, muncul sikap saling curiga, dan interaksi menjadi kaku." },
          { subtitle: "2. Kesalahpahaman yang berulang", text: "Perbedaan penafsiran yang tidak segera diluruskan, sehingga terus menumpuk." },
          { subtitle: "3. Provokasi", text: "Ucapan, tindakan, atau konten yang sengaja dibuat untuk memancing kemarahan." },
          { subtitle: "4. Penyebaran hoaks", text: "Kabar yang beredar cepat tanpa verifikasi dapat memicu kepanikan atau kemarahan." },
          { subtitle: "5. Sikap intoleran", text: "Munculnya penolakan terhadap perbedaan yang ditunjukkan melalui ucapan merendahkan atau diskriminasi." },
          { subtitle: "6. Perselisihan kecil yang dibiarkan", text: "Masalah yang sebenarnya sepele jika dibiarkan berlarut-larut dapat membesar." },
        ],
      },
    ],
  },
  "peran-generasi-muda": {
    title: "Peran Generasi Muda",
    color: "bg-orange-100 text-orange-800",
    intro: [
      "Generasi muda memiliki posisi yang sangat strategis dalam menjaga kerukunan bangsa. Selain jumlahnya besar dalam struktur demografi Indonesia, generasi muda juga tumbuh di tengah arus informasi dan teknologi yang berkembang pesat.",
      "Sikap dan kebiasaan yang dibangun sejak dini akan sangat memengaruhi wajah kerukunan sosial di masa mendatang. Generasi muda juga lebih mudah terpapar arus informasi, sehingga kemampuan menyaring informasi menjadi keterampilan krusial."
    ],
    sections: [
      {
        title: "Hal yang Dapat Dilakukan Generasi Muda",
        content: [
          { subtitle: "1. Menjaga toleransi", text: "Bersikap terbuka dan menerima orang lain yang berbeda latar belakang tanpa memaksakan keseragaman." },
          { subtitle: "2. Menghargai keberagaman", text: "Memandang perbedaan sebagai kekayaan bangsa, bukan ancaman." },
          { subtitle: "3. Menggunakan media sosial secara bijak", text: "Menyebarkan konten positif dan berhati-hati membagikan informasi agar tidak menyebar hoaks." },
          { subtitle: "4. Menolak provokasi", text: "Tidak mudah terpancing isu yang sengaja dibuat untuk memicu kemarahan." },
          { subtitle: "5. Membangun komunikasi positif", text: "Aktif menjalin interaksi sehat dengan berbagai latar belakang untuk meminimalisasi kesalahpahaman." },
          { subtitle: "6. Aktif dalam kegiatan bersama", text: "Ikut serta dalam kegiatan sosial atau organisasi lintas komunitas." },
          { subtitle: "7. Menjadi bagian lingkungan pemersatu", text: "Menciptakan dan menjaga lingkungan pertemanan yang menjunjung nilai-nilai persatuan." },
        ],
      },
      {
        title: "Generasi Muda sebagai Agen Perubahan",
        content: "Dengan karakteristiknya yang dinamis, kreatif, dan akrab dengan teknologi, generasi muda memiliki kesempatan besar untuk menjadi agen perdamaian di lingkungannya masing-masing. Sebuah unggahan positif di media sosial, ajakan untuk berdialog alih-alih berdebat, atau keputusan sederhana untuk tidak ikut menyebarkan informasi yang belum jelas kebenarannya—semua itu adalah bentuk nyata kontribusi generasi muda dalam menjaga kerukunan. Penting bagi generasi muda untuk menyadari bahwa peran mereka bukan hanya sebagai penerima manfaat, tetapi turut menjaga dan mewariskannya kepada generasi berikutnya."
      },
    ],
  },
};

function SectionContent({ content }: { content: string | string[] | { subtitle: string; text: string; isCategory?: boolean }[] }) {
  if (typeof content === "string") {
    return <p className="text-sm leading-relaxed text-muted-foreground">{content}</p>;
  }

  if (Array.isArray(content) && typeof content[0] === "string") {
    return (
      <ol className="list-decimal pl-4 space-y-2 text-muted-foreground marker:text-foreground marker:font-medium">
        {(content as string[]).map((item, i) => (
          <li key={i} className="text-sm leading-relaxed pl-1">
            {item}
          </li>
        ))}
      </ol>
    );
  }

  return (
    <div className="space-y-3">
      {(content as { subtitle: string; text: string; isCategory?: boolean }[]).map((item, i) => {
        if (item.isCategory) {
          return (
            <p key={i} className="text-sm pt-2 pb-1 text-base text-gray-800">
              {item.subtitle}
            </p>
          );
        }
        return (
          <p key={i} className="text-sm leading-relaxed text-muted-foreground">
            {item.subtitle} {item.text}
          </p>
        );
      })}
    </div>
  );
}

function SectionCard({ section }: { section: Section }) {
  const [open, setOpen] = useState(true);
  return (
    <Card className="mb-4 shadow-sm border-gray-100">
      <CardHeader
        className="cursor-pointer select-none bg-gray-50/50 hover:bg-gray-50 transition-colors py-4"
        onClick={() => setOpen(!open)}
      >
        <CardTitle className="text-base flex items-center justify-between font-semibold text-gray-800">
          {section.title}
          {open ? (
            <ChevronUp className="h-5 w-5 text-gray-400" />
          ) : (
            <ChevronDown className="h-5 w-5 text-gray-400" />
          )}
        </CardTitle>
      </CardHeader>
      {open && (
        <CardContent className="pt-4 animate-in slide-in-from-top-1 fade-in-20">
          <SectionContent content={section.content} />
        </CardContent>
      )}
    </Card>
  );
}

export default function EdukasiDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const data = EDUCATION_DATA[slug];

  if (!data) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-gray-50">
        <p className="text-muted-foreground text-lg">Materi tidak ditemukan.</p>
        <Link href="/edukasi">
          <Button variant="outline" className="mt-2">Kembali ke Daftar Edukasi</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50/80 pb-12">
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 max-w-3xl flex items-center">
          <Link
            href="/edukasi"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors font-medium"
          >
            <ArrowLeft className="h-4 w-4" /> Daftar Materi
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-3xl">
        {/* Header */}
        <div className="mb-8">
          <Badge className={`${data.color} w-fit mb-4 px-3 py-1 text-xs font-semibold`}>
            Materi Pembelajaran
          </Badge>
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight leading-tight">{data.title}</h1>
        </div>

        {/* Intro */}
        <Card className="mb-8 border-l-4 border-l-primary shadow-sm border-r-0 border-t-0 border-b-0 bg-white rounded-r-xl">
          <CardContent className="pt-6 pb-6">
            <div className="space-y-4">
              {Array.isArray(data.intro) ? (
                data.intro.map((paragraph, idx) => (
                  <p key={idx} className="text-base leading-relaxed text-gray-700">
                    {paragraph}
                  </p>
                ))
              ) : (
                <p className="text-base leading-relaxed text-gray-700">{data.intro}</p>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Sections */}
        <div className="space-y-1">
          {slug === "pencegahan-konflik" ? (
            <>
              {data.sections.map((section, i) => (
                <SectionCard key={i} section={section} />
              ))}
              <InteractiveFlowchart />
            </>
          ) : (
            data.sections.map((section, i) => (
              <SectionCard key={i} section={section} />
            ))
          )}
        </div>
        
        <div className="mt-12 flex justify-center">
          <Link href="/edukasi">
            <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
              ← Kembali ke Daftar Materi
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
