"use client";

import { useState, use } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ChevronDown, ChevronUp } from "lucide-react";

type Section = {
  title: string;
  content: string | { subtitle: string; text: string }[];
};

type EdukasiData = {
  title: string;
  category: string;
  color: string;
  intro: string;
  sections: Section[];
};

const EDUCATION_DATA: Record<string, EdukasiData> = {
  "konflik-sosial": {
    title: "Apa Itu Konflik Sosial?",
    category: "Dasar",
    color: "bg-blue-100 text-blue-800",
    intro:
      "Konflik sosial diatur secara khusus dalam Undang-Undang Nomor 7 Tahun 2012 tentang Penanganan Konflik Sosial (UU PKS). Berdasarkan Pasal 1 angka 1 UU No. 7 Tahun 2012, yang dimaksud dengan Konflik Sosial adalah: \"Perseteruan dan/atau benturan fisik dengan kekerasan antara dua kelompok masyarakat atau lebih yang berlangsung dalam waktu tertentu dan berdampak luas yang mengakibatkan ketidakamanan dan disintegrasi sosial sehingga mengganggu stabilitas nasional dan menghambat pembangunan nasional.\"",
    sections: [
      {
        title: "Ciri-Ciri Konflik Sosial",
        content: [
          { subtitle: "Adanya Dua Pihak atau Lebih", text: "Melibatkan interaksi antara individu atau kelompok yang saling bertentangan." },
          { subtitle: "Perbedaan yang Tajam", text: "Didorong oleh benturan nilai, norma, status, atau kepentingan materi." },
          { subtitle: "Aksi Saling Menentang", text: "Adanya tindakan nyata untuk saling menjatuhkan atau merugikan pihak lawan." },
          { subtitle: "Bersifat Dinamis", text: "Konflik memiliki siklus, mulai dari ketegangan tersembunyi hingga pecah menjadi tindakan terbuka." },
          { subtitle: "Menimbulkan Dampak", text: "Selalu membawa konsekuensi, baik dampak negatif (kerusakan) maupun positif (solidaritas internal kelompok yang meningkat)." },
        ],
      },
      {
        title: "Penyebab Terjadinya Konflik Sosial",
        content: [
          { subtitle: "Perbedaan pendapat", text: "Perbedaan cara pandang terhadap suatu masalah dapat menimbulkan perselisihan." },
          { subtitle: "Perbedaan kepentingan", text: "Setiap individu atau kelompok memiliki kebutuhan dan tujuan yang berbeda sehingga dapat terjadi pertentangan." },
          { subtitle: "Perbedaan nilai dan budaya", text: "Keberagaman nilai, kebiasaan, dan budaya dapat menimbulkan perbedaan pemahaman apabila tidak disikapi dengan toleransi." },
          { subtitle: "Kesalahpahaman", text: "Komunikasi yang kurang baik dapat menyebabkan seseorang salah memahami maksud atau tindakan orang lain." },
          { subtitle: "Ketidakadilan", text: "Perlakuan yang dianggap tidak adil dapat menimbulkan rasa kecewa, ketidakpuasan, dan pertentangan." },
          { subtitle: "Penyebaran informasi yang tidak benar", text: "Berita bohong atau informasi yang belum terbukti kebenarannya dapat memicu kesalahpahaman dan memperbesar konflik." },
        ],
      },
      {
        title: "Bentuk-bentuk Konflik Sosial",
        content: [
          { subtitle: "Konflik Destruktif", text: "Konflik yang membawa akibat kurang menguntungkan bagi pihak yang berkonflik, yaitu mengakibatkan hilangnya nyawa atau harta benda, serta timbulnya persaingan, cemas, tegang, dan sebagainya." },
          { subtitle: "Konflik Konstruktif", text: "Konflik yang mampu membawa ke arah keuntungan yang membangun." },
          { subtitle: "Konflik Vertikal", text: "Konflik yang terjadi antara kelompok masyarakat yang berbeda (berbeda tingkatan/hierarki)." },
          { subtitle: "Konflik Horizontal", text: "Konflik yang terjadi di dalam kelompok sosial yang sama." },
          { subtitle: "Konflik Diagonal", text: "Konflik yang terjadi karena ketidakadilan alokasi sumber daya secara menyeluruh, sehingga menimbulkan pertentangan dari masyarakat." },
        ],
      },
      {
        title: "Dampak Konflik Sosial bagi Masyarakat",
        content: [
          { subtitle: "Retaknya persatuan", text: "Anggota kelompok saling berselisih dan kehilangan rasa kebersamaan." },
          { subtitle: "Aksi kekerasan", text: "Menimbulkan kerusuhan dan penghancuran infrastruktur, bangunan, dan fasilitas umum." },
          { subtitle: "Kerugian ekonomi", text: "Merusak kegiatan ekonomi, mempengaruhi produksi dan distribusi barang dan jasa, serta menurunkan daya beli." },
          { subtitle: "Trauma psikologis", text: "Menyebabkan trauma dan kecemasan pada individu yang terlibat atau terkena dampaknya, terutama pada anak-anak dan kelompok rentan." },
          { subtitle: "Korban jiwa", text: "Dapat menyebabkan hilangnya nyawa dan kerugian kemanusiaan yang besar." },
        ],
      },
      {
        title: "Contoh Konflik di Masyarakat",
        content: [
          { subtitle: "Diskriminasi", text: "Membeda-bedakan orang lain berdasarkan latar belakang mereka. Dipicu rendahnya pengetahuan akan keberagaman dan sikap kurang menghormati sesama." },
          { subtitle: "Rasisme", text: "Merendahkan ras manusia tertentu. Dipicu kesadaran diri yang buruk, sikap egois, dan kurangnya rasa saling menyayangi." },
          { subtitle: "Perundungan", text: "Mengganggu, merendahkan, dan mencelakai seseorang yang dianggap lemah. Dipicu sikap egois dan ingin menang sendiri." },
          { subtitle: "Kekerasan", text: "Menyalahgunakan jabatan, wewenang, dan kelebihan fisik untuk menyakiti orang lain. Dipicu sikap temperamental dan rendahnya empati." },
          { subtitle: "Terorisme", text: "Menebarkan teror atau rasa takut untuk meraih tujuan. Dipicu rendahnya supremasi hukum dan paham yang bertentangan dengan Pancasila." },
          { subtitle: "Korupsi", text: "Memperkaya diri dengan hak milik orang lain atau hak negara. Mengakibatkan sulitnya mencapai kesejahteraan rakyat." },
        ],
      },
      {
        title: "Tujuan Penanganan Konflik Sosial",
        content: "Mengacu pada Pasal 3 UU No. 7 Tahun 2012, penanganan konflik bertujuan untuk: (1) Menciptakan kehidupan masyarakat yang aman, tenteram, damai, dan sejahtera; (2) Memelihara kondisi damai dan harmonis dalam hubungan sosial kemasyarakatan; (3) Meningkatkan tenggang rasa dan toleransi dalam kehidupan bermasyarakat dan bernegara; (4) Memelihara fungsi pemerintahan berjalan secara normal; (5) Melindungi hak asasi manusia (HAM) serta harta benda; (6) Meningkatkan partisipasi masyarakat dalam penyelesaian konflik secara damai.",
      },
    ],
  },
  "kewaspadaan-dini": {
    title: "Kewaspadaan Dini",
    category: "Pencegahan",
    color: "bg-yellow-100 text-yellow-800",
    intro:
      "Kewaspadaan dini adalah serangkaian upaya atau tindakan kepekaan, kesiagaan, dan antisipasi untuk mendeteksi serta mencegah segala potensi ancaman, tantangan, hambatan, dan gangguan (ATHG) sejak awal. Dalam kehidupan sehari-hari, kewaspadaan dini dapat dilakukan dengan memperhatikan perubahan situasi di lingkungan sekitar, mengenali munculnya perselisihan, serta memeriksa informasi yang diterima sebelum mempercayai atau menyebarkannya.",
    sections: [
      {
        title: "Tiga Unsur Utama Kewaspadaan Dini",
        content: [
          { subtitle: "Mengenali", text: "Peka terhadap gejala atau perubahan yang tidak biasa di lingkungan sekitar, seperti meningkatnya ketegangan antarwarga, beredarnya isu provokatif, atau munculnya ujaran kebencian." },
          { subtitle: "Memahami", text: "Menganalisis penyebab, pihak yang terlibat, dan kemungkinan dampak dari tanda-tanda tersebut, bukan langsung berasumsi atau menghakimi." },
          { subtitle: "Merespons", text: "Mengambil tindakan yang tepat dan cepat, seperti mendamaikan pihak yang berselisih, mengklarifikasi kabar bohong, atau melapor ke ketua RT/RW, tokoh masyarakat, atau aparat berwenang." },
        ],
      },
      {
        title: "Contoh Tanda Awal yang Perlu Diwaspadai",
        content: [
          { subtitle: "Perselisihan kecil yang berlarut", text: "Perselisihan kecil antarwarga atau antarkelompok yang dibiarkan berlarut-larut tanpa penyelesaian." },
          { subtitle: "Hoaks atau provokasi di media sosial", text: "Beredarnya hoaks atau provokasi di media sosial atau grup pesan yang berpotensi memicu ketegangan." },
          { subtitle: "Sikap saling curiga", text: "Munculnya sikap saling curiga atau eksklusivitas kelompok yang semakin menguat." },
          { subtitle: "Ketimpangan dan ketidakadilan", text: "Ketimpangan atau ketidakadilan yang menimbulkan kekecewaan yang terakumulasi." },
          { subtitle: "Kehadiran orang mencurigakan", text: "Kehadiran orang tak dikenal dengan perilaku mencurigakan di lingkungan sekitar." },
        ],
      },
      {
        title: "Mengapa Kewaspadaan Dini Penting?",
        content: [
          { subtitle: "Mencegah konflik meluas", text: "Mencegah konflik kecil membesar menjadi kerusuhan atau kekerasan yang lebih besar." },
          { subtitle: "Menjaga ketertiban", text: "Menjaga persatuan, ketertiban, dan rasa aman masyarakat dari ancaman yang mungkin berkembang." },
          { subtitle: "Efisiensi sumber daya", text: "Menghemat sumber daya karena penanganan dini lebih murah daripada pemulihan pascakonflik." },
          { subtitle: "Budaya kepedulian", text: "Membangun budaya saling peduli dan tanggung jawab bersama dalam masyarakat." },
        ],
      },
      {
        title: "Cara Menerapkan Kewaspadaan Dini",
        content: "Kewaspadaan dini adalah tanggung jawab bersama, bukan hanya aparat keamanan. Warga dapat menerapkannya dengan: (1) Aktif menjaga lingkungan (misalnya lewat siskamling dan forum warga); (2) Bijak bermedia sosial dengan tidak menyebarkan informasi yang belum terverifikasi; (3) Mengedepankan dialog dan musyawarah dalam menyelesaikan perbedaan; (4) Melapor kepada pihak berwenang bila menemukan potensi ancaman.",
      },
    ],
  },
  "toleransi": {
    title: "Toleransi sebagai Pencegah Konflik",
    category: "Pencegahan",
    color: "bg-green-100 text-green-800",
    intro:
      "Toleransi adalah sikap saling menghargai, menghormati, dan membolehkan segala perbedaan, baik berupa pandangan, pendapat, kepercayaan, kebiasaan, suku, maupun agama yang berbeda dari diri sendiri.",
    sections: [
      {
        title: "Manfaat Toleransi",
        content: [
          { subtitle: "Menciptakan kerukunan", text: "Menciptakan kehidupan masyarakat yang rukun, aman, dan damai." },
          { subtitle: "Mencegah konflik", text: "Mencegah terjadinya konflik, perpecahan, dan permusuhan antar kelompok." },
          { subtitle: "Mempererat persaudaraan", text: "Mempererat rasa persaudaraan serta persatuan antarsesama." },
        ],
      },
      {
        title: "Mengapa Toleransi Efektif Mencegah Konflik?",
        content: [
          { subtitle: "Mengurangi rasa curiga", text: "Ketika orang saling menghargai, ruang bagi hoaks dan provokasi untuk memecah belah menjadi lebih sempit." },
          { subtitle: "Membuka ruang dialog", text: "Perbedaan dipandang sebagai hal yang wajar dan dapat dibicarakan, bukan ancaman yang harus dilawan." },
          { subtitle: "Menumbuhkan rasa memiliki bersama", text: "Setiap kelompok merasa diterima, sehingga kecil kemungkinan muncul kekecewaan yang berujung pada permusuhan." },
          { subtitle: "Meredam emosi", text: "Orang yang toleran cenderung mengendalikan diri dan mencari jalan keluar damai saat berselisih." },
        ],
      },
      {
        title: "Contoh Penerapan dalam Kehidupan Sehari-hari",
        content: [
          { subtitle: "Menghormati ibadah orang lain", text: "Menghormati umat agama lain yang sedang beribadah atau merayakan hari besar." },
          { subtitle: "Menghargai perbedaan budaya", text: "Tidak mengejek logat, adat, atau kebiasaan suku lain." },
          { subtitle: "Menyampaikan pendapat dengan santun", text: "Menyampaikan perbedaan pendapat dengan santun dalam musyawarah." },
          { subtitle: "Bijak di media sosial", text: "Tidak menyebarkan konten yang menyudutkan kelompok tertentu di media sosial." },
          { subtitle: "Gotong royong", text: "Bergotong royong tanpa memandang latar belakang suku, agama, atau ras." },
        ],
      },
    ],
  },
  "literasi-informasi": {
    title: "Literasi Informasi dan Hoaks",
    category: "Digital",
    color: "bg-purple-100 text-purple-800",
    intro:
      "Literasi informasi adalah kemampuan untuk mencari, memahami, menilai, menggunakan, dan menyampaikan informasi secara tepat dan bertanggung jawab. Kemampuan ini penting bagi generasi muda karena informasi dapat diperoleh dengan mudah melalui media sosial, internet, dan berbagai platform digital.",
    sections: [
      {
        title: "Kenali Fakta, Opini, dan Hoaks",
        content: [
          { subtitle: "Fakta", text: "Informasi yang dapat dibuktikan kebenarannya melalui data, bukti, atau sumber yang terpercaya." },
          { subtitle: "Opini", text: "Pendapat atau pandangan seseorang terhadap suatu hal. Opini dapat berbeda antara satu orang dengan orang lainnya." },
          { subtitle: "Hoaks", text: "Informasi palsu atau menyesatkan yang disampaikan seolah-olah benar. Hoaks biasanya tidak memiliki sumber yang jelas atau bertentangan dengan fakta yang dapat diverifikasi." },
        ],
      },
      {
        title: "Mengapa Informasi Dapat Memicu Konflik?",
        content: [
          { subtitle: "Memicu emosi dan amarah", text: "Kabar bohong yang menyentuh isu sensitif (SARA) mudah membuat orang bereaksi tanpa berpikir panjang." },
          { subtitle: "Menumbuhkan prasangka dan kebencian", text: "Informasi yang menyudutkan satu kelompok membuat kelompok lain merasa curiga atau terancam." },
          { subtitle: "Menyebar sangat cepat", text: "Media sosial dan grup pesan membuat satu kabar bohong dapat menjangkau ribuan orang dalam hitungan menit." },
          { subtitle: "Sulit ditarik kembali", text: "Setelah tersebar, klarifikasi sering kalah cepat dan kalah viral dibanding kabar aslinya." },
          { subtitle: "Dimanfaatkan pihak tertentu", text: "Ada pihak yang sengaja menyebarkan hoaks untuk memecah belah masyarakat." },
        ],
      },
      {
        title: "Cara Memeriksa Kebenaran Informasi",
        content: [
          { subtitle: "Periksa sumbernya", text: "Apakah berasal dari media resmi, lembaga pemerintah, atau pakar yang kredibel? Waspadai akun anonim atau situs yang tidak dikenal." },
          { subtitle: "Baca isi secara utuh", text: "Jangan hanya berhenti di judul, karena judul sering dibuat sensasional untuk menarik perhatian." },
          { subtitle: "Cek tanggal dan konteks", text: "Kadang berita lama diunggah ulang seolah-olah baru terjadi untuk memancing reaksi." },
          { subtitle: "Bandingkan dengan sumber lain", text: "Bila kabar itu benar dan penting, biasanya diberitakan oleh beberapa media tepercaya." },
          { subtitle: "Periksa foto dan video", text: "Foto dapat diedit atau diambil dari peristiwa lain. Pencarian gambar terbalik (misalnya lewat Google Lens) dapat membantu menelusuri asal-usulnya." },
          { subtitle: "Gunakan situs pengecek fakta", text: "Contohnya cekfakta.com, turnbackhoax.id, atau kanal hoaks di Kominfo." },
        ],
      },
    ],
  },
  "pencegahan-konflik": {
    title: "Langkah-Langkah Pencegahan Konflik",
    category: "Pencegahan",
    color: "bg-teal-100 text-teal-800",
    intro:
      "Konflik dapat dicegah melalui langkah-langkah sederhana yang dapat dilakukan secara bertahap. Berikut adalah 7 langkah pencegahan konflik yang saling berkaitan.",
    sections: [
      {
        title: "1. Kenali Masalah",
        content: [
          { subtitle: "Identifikasi sumber persoalan", text: "Apa sebenarnya yang menjadi pemicu ketegangan? Apakah berkaitan dengan perbedaan kepentingan, kesalahpahaman komunikasi, persaingan sumber daya, atau isu SARA? Menemukan akar masalah membantu menentukan pendekatan penyelesaian yang tepat." },
          { subtitle: "Kenali pihak-pihak yang terlibat", text: "Siapa saja yang terdampak atau terlibat langsung dalam persoalan ini? Memahami posisi, kepentingan, dan sudut pandang masing-masing pihak akan memudahkan proses komunikasi dan mediasi." },
          { subtitle: "Pahami konteks dan latar belakang", text: "Sebuah persoalan jarang muncul begitu saja. Biasanya ada rangkaian peristiwa atau riwayat hubungan sebelumnya yang memengaruhi situasi saat ini." },
          { subtitle: "Bedakan masalah inti dengan gejala", text: "Terkadang yang terlihat di permukaan hanyalah gejala dari masalah yang lebih dalam, seperti rasa tidak dihargai atau ketimpangan yang sudah lama dirasakan." },
        ],
      },
      {
        title: "2. Cek Informasi",
        content: [
          { subtitle: "Telusuri sumber asli", text: "Jangan hanya berhenti pada informasi yang diterima dari pesan berantai atau media sosial. Cari tahu dari mana informasi tersebut pertama kali berasal dan apakah sumbernya kredibel." },
          { subtitle: "Bandingkan dengan beberapa sumber lain", text: "Jika suatu kabar hanya beredar dari satu sumber tanpa dikonfirmasi oleh sumber independen lain, sebaiknya bersikap skeptis terlebih dahulu." },
          { subtitle: "Perhatikan fakta versus opini", text: "Pisahkan antara apa yang benar-benar terjadi (fakta) dengan penafsiran, dugaan, atau opini pribadi seseorang tentang kejadian tersebut." },
          { subtitle: "Waspadai konten provokatif", text: "Informasi yang sengaja dibuat untuk memancing emosi (menggunakan bahasa yang berlebihan, judul yang sensasional, atau gambar yang menyesatkan) patut dicurigai kebenarannya." },
        ],
      },
      {
        title: "3. Kendalikan Emosi",
        content: "Beri jeda sebelum bereaksi. Ketika informasi atau situasi memancing emosi, penting untuk tidak langsung bereaksi. Ambil waktu untuk menenangkan diri, berpikir jernih, dan mempertimbangkan konsekuensi dari tindakan yang akan diambil. Emosi yang tidak terkendali dapat memperburuk situasi dan mempercepat eskalasi konflik.",
      },
      {
        title: "4. Komunikasikan dengan Baik",
        content: "Sampaikan secara terbuka dan sopan. Komunikasi yang baik adalah kunci pencegahan konflik. Gunakan bahasa yang tidak menyerang atau menyudutkan pihak lain. Dengarkan dengan aktif dan tunjukkan bahwa kamu menghargai sudut pandang orang lain, meskipun tidak selalu setuju.",
      },
      {
        title: "5. Hargai Perbedaan",
        content: "Terima latar belakang yang berbeda. Indonesia adalah negara yang sangat beragam dari segi suku, agama, ras, dan golongan. Perbedaan ini bukan hambatan, melainkan kekayaan. Sikap menghargai dan menerima perbedaan dapat mencegah konflik yang bersumber dari prasangka dan diskriminasi.",
      },
      {
        title: "6. Musyawarahkan Penyelesaian",
        content: "Cari solusi bersama, bukan sepihak. Musyawarah adalah tradisi budaya Indonesia yang sangat relevan dalam penyelesaian konflik. Dengan melibatkan semua pihak yang berkepentingan dalam mencari solusi, keputusan yang dihasilkan akan lebih diterima dan berkelanjutan.",
      },
      {
        title: "7. Libatkan Pihak yang Tepat",
        content: [
          { subtitle: "Tokoh Masyarakat", text: "Ketua RT/RW, kepala desa/lurah, atau tokoh yang dihormati di lingkungan setempat sering kali memiliki pengaruh dan kepercayaan dari warga untuk membantu menengahi persoalan." },
          { subtitle: "Tokoh Agama", text: "Pemuka agama dapat berperan penting, terutama jika konflik menyentuh isu-isu yang berkaitan dengan keyakinan atau nilai-nilai keagamaan." },
          { subtitle: "Tokoh Adat", text: "Di banyak daerah, tokoh adat memiliki otoritas tersendiri dalam menyelesaikan sengketa berdasarkan hukum adat yang berlaku dan dihormati oleh masyarakat setempat." },
          { subtitle: "Guru atau Pihak Sekolah", text: "Untuk konflik yang terjadi di lingkungan pendidikan, guru, wali kelas, atau pihak sekolah dapat berperan sebagai mediator antara siswa atau pihak-pihak yang terlibat." },
          { subtitle: "Aparat Keamanan dan Pemerintah", text: "Jika konflik berpotensi mengarah pada tindakan yang melanggar hukum atau mengancam keamanan, melibatkan aparat kepolisian atau pemerintah setempat menjadi langkah yang diperlukan." },
        ],
      },
    ],
  },
  "tanda-awal-konflik": {
    title: "Mengenali Tanda-Tanda Awal Konflik",
    category: "Waspada",
    color: "bg-yellow-100 text-yellow-800",
    intro:
      "Sebelum konflik benar-benar terjadi, biasanya muncul tanda-tanda awal yang dapat dikenali jika masyarakat cukup peka terhadap lingkungan sekitarnya. Kemampuan mengenali tanda-tanda ini adalah langkah pertama dalam pencegahan konflik.",
    sections: [
      {
        title: "Tanda-Tanda Awal yang Perlu Diwaspadai",
        content: [
          { subtitle: "Meningkatnya ketegangan antarindividu atau antarkelompok", text: "Suasana menjadi tidak nyaman, muncul sikap saling curiga, dan interaksi yang biasanya cair menjadi kaku atau penuh kewaspadaan." },
          { subtitle: "Kesalahpahaman yang berulang", text: "Perbedaan penafsiran terhadap suatu peristiwa, ucapan, atau tindakan yang tidak segera diluruskan, sehingga terus menumpuk dan memperbesar jarak antarpihak." },
          { subtitle: "Provokasi", text: "Ucapan, tindakan, atau konten (termasuk di media sosial) yang sengaja dibuat untuk memancing kemarahan, memperuncing perbedaan, atau mengadu domba satu pihak dengan pihak lain." },
          { subtitle: "Penyebaran informasi yang belum terbukti (hoaks)", text: "Kabar yang beredar cepat tanpa verifikasi dapat memicu kepanikan, kemarahan, atau kebencian terhadap kelompok tertentu secara tidak berdasar." },
          { subtitle: "Sikap intoleran", text: "Mulai munculnya penolakan terhadap perbedaan, baik dalam hal suku, agama, ras, maupun pandangan, yang ditunjukkan melalui ucapan merendahkan, pengucilan, atau diskriminasi." },
          { subtitle: "Perselisihan kecil yang tidak segera diselesaikan", text: "Masalah yang sebenarnya sepele, jika dibiarkan berlarut-larut tanpa penyelesaian, dapat membesar dan melibatkan lebih banyak pihak." },
        ],
      },
    ],
  },
  "peran-generasi-muda": {
    title: "Peran Generasi Muda dalam Menciptakan Kerukunan",
    category: "Generasi Muda",
    color: "bg-indigo-100 text-indigo-800",
    intro:
      "Generasi muda memiliki posisi yang sangat strategis dalam menjaga kerukunan bangsa. Selain jumlahnya besar dalam struktur demografi Indonesia, generasi muda juga tumbuh di tengah arus informasi dan teknologi yang berkembang pesat, sehingga peran mereka menjadi kunci baik sebagai penerus nilai-nilai persatuan, maupun sebagai penentu arah kehidupan bermasyarakat di masa depan.",
    sections: [
      {
        title: "Hal yang Dapat Dilakukan Generasi Muda",
        content: [
          { subtitle: "Menjaga toleransi", text: "Bersikap terbuka dan menerima keberadaan orang lain yang berbeda suku, agama, ras, maupun pandangan, tanpa harus memaksakan keseragaman dalam segala hal." },
          { subtitle: "Menghargai keberagaman", text: "Memandang perbedaan sebagai kekayaan bangsa, bukan sebagai ancaman. Keberagaman budaya, bahasa, dan tradisi di Indonesia justru menjadi identitas yang memperkuat." },
          { subtitle: "Menggunakan media sosial secara bijak", text: "Memanfaatkan platform digital untuk menyebarkan konten yang positif dan edukatif, serta berhati-hati dalam membagikan informasi agar tidak ikut menyebarkan hoaks atau ujaran kebencian." },
          { subtitle: "Menolak provokasi", text: "Tidak mudah terpancing oleh isu-isu yang sengaja dibuat untuk memicu kemarahan atau permusuhan antarkelompok, baik yang beredar di dunia nyata maupun di media sosial." },
          { subtitle: "Membangun komunikasi yang positif", text: "Aktif menjalin interaksi yang sehat dan terbuka dengan teman-teman dari berbagai latar belakang, sehingga kesalahpahaman dapat diminimalkan." },
          { subtitle: "Aktif dalam kegiatan bersama", text: "Ikut serta dalam kegiatan sosial, organisasi, atau komunitas yang mempertemukan orang-orang dari beragam latar belakang, seperti OSIS, karang taruna, kegiatan gotong royong." },
          { subtitle: "Menjadi bagian dari lingkungan yang menjunjung persatuan", text: "Menciptakan dan menjaga lingkungan pertemanan, sekolah, kampus, maupun komunitas yang menjunjung tinggi nilai-nilai persatuan." },
        ],
      },
      {
        title: "Generasi Muda sebagai Agen Perubahan",
        content: "Dengan karakteristiknya yang dinamis, kreatif, dan akrab dengan teknologi, generasi muda memiliki kesempatan besar untuk menjadi agen perdamaian di lingkungannya masing-masing. Sebuah unggahan positif di media sosial, ajakan untuk berdialog alih-alih berdebat, atau keputusan sederhana untuk tidak ikut menyebarkan informasi yang belum jelas kebenarannya — semua itu adalah bentuk nyata kontribusi generasi muda dalam menjaga kerukunan.",
      },
    ],
  },
  "menjaga-harmonis": {
    title: "Bagaimana Menjaga Lingkungan Tetap Harmonis?",
    category: "Aman",
    color: "bg-green-100 text-green-800",
    intro:
      "Menjaga keharmonisan lingkungan adalah tanggung jawab bersama seluruh warga masyarakat. Dengan menerapkan nilai-nilai toleransi, komunikasi yang baik, dan kepedulian terhadap sesama, kita dapat menciptakan lingkungan yang rukun dan damai.",
    sections: [
      {
        title: "Prinsip-Prinsip Menjaga Keharmonisan",
        content: [
          { subtitle: "Komunikasi terbuka", text: "Bicarakan masalah secara langsung dan jujur sebelum berkembang menjadi perselisihan besar." },
          { subtitle: "Gotong royong", text: "Kegiatan bersama mempererat ikatan sosial dan mengurangi potensi konflik akibat jarak sosial." },
          { subtitle: "Musyawarah mufakat", text: "Selesaikan perbedaan pendapat melalui musyawarah yang mengutamakan kepentingan bersama." },
          { subtitle: "Saling menghormati", text: "Hargai hak, privasi, dan kepercayaan orang lain meskipun berbeda dari diri sendiri." },
        ],
      },
    ],
  },
  "bijak-bermedia-sosial": {
    title: "Bijak Bermedia Sosial",
    category: "Digital",
    color: "bg-purple-100 text-purple-800",
    intro:
      "Media sosial adalah alat komunikasi yang powerful. Namun, penggunaannya yang tidak bijak dapat memicu konflik sosial. Tips dan panduan berikut membantu kamu menggunakan media sosial secara bertanggung jawab.",
    sections: [
      {
        title: "Tips Bermedia Sosial yang Bertanggung Jawab",
        content: [
          { subtitle: "Verifikasi sebelum share", text: "Selalu periksa kebenaran informasi sebelum membagikannya kepada orang lain." },
          { subtitle: "Hindari komentar provokatif", text: "Komentar yang menyulut emosi dapat berkembang menjadi perselisihan nyata." },
          { subtitle: "Pikir sebelum posting", text: "Setiap unggahan dapat memiliki dampak yang tidak terduga terhadap orang lain." },
          { subtitle: "Jangan ikut-ikutan ujaran kebencian", text: "Menolak untuk berpartisipasi dalam penyebaran konten yang merendahkan kelompok tertentu." },
          { subtitle: "Laporkan konten berbahaya", text: "Gunakan fitur laporan (report) untuk konten yang mengandung kebencian atau hoaks." },
        ],
      },
    ],
  },
  "komunikasi-pencegahan": {
    title: "Komunikasi untuk Mencegah Konflik",
    category: "Waspada",
    color: "bg-yellow-100 text-yellow-800",
    intro:
      "Komunikasi yang efektif adalah kunci utama pencegahan konflik. Cara kita menyampaikan pesan dan mendengarkan orang lain sangat menentukan apakah perbedaan dapat diselesaikan secara damai.",
    sections: [
      {
        title: "Teknik Komunikasi Efektif",
        content: [
          { subtitle: "Mendengarkan aktif", text: "Berikan perhatian penuh saat orang lain berbicara, tunjukkan bahwa kamu memahami dan menghargai sudut pandang mereka." },
          { subtitle: "Gunakan bahasa yang tidak menyerang", text: "Gunakan kalimat 'Saya merasa...' daripada 'Kamu selalu...' untuk menghindari sikap defensif." },
          { subtitle: "Hindari generalisasi", text: "Jangan menyamaratakan semua anggota suatu kelompok berdasarkan tindakan satu atau beberapa orang." },
          { subtitle: "Cari titik temu", text: "Fokus pada kepentingan bersama, bukan pada posisi yang bertentangan." },
        ],
      },
    ],
  },
  "eskalasi-konflik": {
    title: "Tahapan Eskalasi Konflik",
    category: "Potensi Konflik",
    color: "bg-orange-100 text-orange-800",
    intro:
      "Konflik jarang terjadi secara tiba-tiba. Biasanya ada tahapan-tahapan yang dapat dikenali. Memahami tahapan ini membantu kita bertindak pada waktu yang tepat untuk mencegah konflik semakin parah.",
    sections: [
      {
        title: "Tahapan Eskalasi Konflik",
        content: [
          { subtitle: "1. Ketegangan laten (tersembunyi)", text: "Perbedaan atau ketidakpuasan yang belum terungkap secara terbuka. Tanda-tanda: suasana tegang, komunikasi kaku, saling curiga." },
          { subtitle: "2. Konflik muncul ke permukaan", text: "Perselisihan mulai dinyatakan secara terbuka, melalui kata-kata, kritik, atau tindakan ringan." },
          { subtitle: "3. Eskalasi", text: "Konflik semakin melibatkan lebih banyak pihak, emosi semakin tinggi, dan ancaman mulai muncul." },
          { subtitle: "4. Krisis (puncak)", text: "Konflik mencapai puncaknya dengan kemungkinan kekerasan fisik, kerusuhan, atau tindakan ekstrem lainnya." },
          { subtitle: "5. De-eskalasi", text: "Ketegangan mulai mereda setelah intervensi atau kelelahan salah satu atau semua pihak." },
          { subtitle: "6. Resolusi", text: "Pihak-pihak yang berkonflik mencapai kesepakatan atau penyelesaian melalui negosiasi, mediasi, atau jalur hukum." },
        ],
      },
    ],
  },
  "mediasi-penyelesaian": {
    title: "Mengenal Mediasi dan Penyelesaian Konflik",
    category: "Potensi Konflik",
    color: "bg-orange-100 text-orange-800",
    intro:
      "Mediasi adalah proses penyelesaian konflik yang melibatkan pihak ketiga yang netral untuk membantu pihak-pihak yang berkonflik mencapai kesepakatan. Ini adalah salah satu metode penyelesaian konflik yang paling efektif.",
    sections: [
      {
        title: "Metode Penyelesaian Konflik",
        content: [
          { subtitle: "Negosiasi", text: "Perundingan langsung antara pihak-pihak yang berkonflik tanpa melibatkan pihak ketiga." },
          { subtitle: "Mediasi", text: "Melibatkan mediator netral yang membantu memfasilitasi komunikasi dan pencarian solusi tanpa memaksakan keputusan." },
          { subtitle: "Arbitrase", text: "Melibatkan arbiter yang memiliki wewenang untuk membuat keputusan yang mengikat." },
          { subtitle: "Litigasi", text: "Penyelesaian melalui jalur pengadilan formal sesuai hukum yang berlaku." },
          { subtitle: "Rekonsiliasi", text: "Proses memulihkan hubungan antara pihak yang berkonflik untuk mengembalikan keharmonisan." },
        ],
      },
    ],
  },
  "hoaks-provokasi": {
    title: "Hoaks dan Provokasi sebagai Pemicu Konflik",
    category: "Potensi Konflik",
    color: "bg-orange-100 text-orange-800",
    intro:
      "Hoaks dan provokasi adalah dua faktor utama yang dapat memicu dan memperburuk konflik sosial di era digital. Memahami cara kerja dan dampaknya sangat penting untuk melindungi diri dan komunitas.",
    sections: [
      {
        title: "Jenis-Jenis Disinformasi",
        content: [
          { subtitle: "Hoaks murni", text: "Informasi yang sepenuhnya tidak benar dan dibuat dengan sengaja untuk menyesatkan." },
          { subtitle: "Berita menyesatkan", text: "Informasi yang sebagian benar tetapi dikemas sedemikian rupa sehingga menimbulkan kesan yang salah." },
          { subtitle: "Konten yang salah konteks", text: "Gambar atau video nyata yang diberi narasi yang salah, seperti video lama yang digunakan untuk menggambarkan kejadian baru." },
          { subtitle: "Konten manipulasi", text: "Informasi asli yang diubah atau diedit untuk mengubah maknanya." },
          { subtitle: "Propaganda", text: "Konten yang dibuat untuk mempromosikan sudut pandang tertentu, seringkali dengan cara yang tidak jujur." },
        ],
      },
    ],
  },
  "saat-konflik-meningkat": {
    title: "Apa yang Harus Dilakukan Saat Konflik Meningkat?",
    category: "Risiko Tinggi",
    color: "bg-red-100 text-red-800",
    intro:
      "Ketika konflik sudah meningkat dan situasi menjadi berbahaya, penting untuk mengetahui langkah-langkah yang tepat untuk menjaga keselamatan diri dan orang-orang di sekitar.",
    sections: [
      {
        title: "Langkah-langkah saat Konflik Meningkat",
        content: [
          { subtitle: "Jaga ketenangan diri", text: "Hindari bereaksi secara emosional yang dapat memperburuk situasi. Tarik napas dan berpikir jernih." },
          { subtitle: "Jauhi lokasi konflik", text: "Jika memungkinkan, segera menjauh dari lokasi yang berpotensi berbahaya." },
          { subtitle: "Hubungi pihak berwenang", text: "Laporkan situasi kepada kepolisian, pemerintah setempat, atau tokoh masyarakat yang dapat membantu." },
          { subtitle: "Jangan menyebarkan informasi yang belum jelas", text: "Pada saat konflik, informasi yang salah dapat memperburuk keadaan dengan cepat." },
          { subtitle: "Cari tempat aman", text: "Utamakan keselamatan diri dan orang-orang yang berada bersama kamu." },
        ],
      },
    ],
  },
  "kewaspadaan-keselamatan": {
    title: "Kewaspadaan dan Keselamatan dalam Situasi Konflik",
    category: "Risiko Tinggi",
    color: "bg-red-100 text-red-800",
    intro:
      "Memahami cara menjaga keselamatan diri dalam situasi konflik adalah keterampilan penting. Pengetahuan ini dapat membantu melindungi diri dan orang-orang di sekitar kita.",
    sections: [
      {
        title: "Prinsip Keselamatan dalam Situasi Konflik",
        content: [
          { subtitle: "Waspadai lingkungan sekitar", text: "Selalu perhatikan perubahan suasana dan tanda-tanda potensi bahaya di sekitar kamu." },
          { subtitle: "Kenali jalur evakuasi", text: "Ketahui jalur keluar dari lokasi-lokasi yang sering kamu kunjungi." },
          { subtitle: "Jangan jadi provokatif", text: "Hindari tindakan atau ucapan yang dapat memancing amarah pihak yang sedang berkonflik." },
          { subtitle: "Utamakan dialog", text: "Jika terlibat dalam perselisihan, selalu utamakan penyelesaian melalui dialog damai." },
          { subtitle: "Lindungi orang rentan", text: "Berikan prioritas keselamatan kepada anak-anak, lansia, dan kelompok rentan lainnya." },
        ],
      },
    ],
  },
};

function SectionContent({ content }: { content: string | { subtitle: string; text: string }[] }) {
  if (typeof content === "string") {
    return <p className="text-sm leading-relaxed text-muted-foreground">{content}</p>;
  }
  return (
    <ul className="space-y-3">
      {content.map((item, i) => (
        <li key={i} className="text-sm">
          <span className="font-semibold text-foreground">{item.subtitle}: </span>
          <span className="text-muted-foreground">{item.text}</span>
        </li>
      ))}
    </ul>
  );
}

function SectionCard({ section }: { section: Section }) {
  const [open, setOpen] = useState(true);
  return (
    <Card className="mb-4">
      <CardHeader
        className="cursor-pointer select-none"
        onClick={() => setOpen(!open)}
      >
        <CardTitle className="text-base flex items-center justify-between">
          {section.title}
          {open ? <ChevronUp className="h-4 w-4 text-muted-foreground" /> : <ChevronDown className="h-4 w-4 text-muted-foreground" />}
        </CardTitle>
      </CardHeader>
      {open && (
        <CardContent>
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
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <p className="text-muted-foreground">Materi tidak ditemukan.</p>
        <Link href="/edukasi">
          <Button variant="outline">Kembali</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <Link
          href="/edukasi"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6"
        >
          <ArrowLeft className="h-4 w-4" /> Kembali ke Daftar Edukasi
        </Link>

        {/* Header */}
        <div className="mb-6">
          <Badge className={data.color + " w-fit mb-2"}>{data.category}</Badge>
          <h1 className="text-2xl font-bold">{data.title}</h1>
        </div>

        {/* Intro */}
        <Card className="mb-4 border-l-4 border-l-primary">
          <CardContent className="pt-4">
            <p className="text-sm leading-relaxed">{data.intro}</p>
          </CardContent>
        </Card>

        {/* Sections */}
        {data.sections.map((section, i) => (
          <SectionCard key={i} section={section} />
        ))}
      </div>
    </div>
  );
}
