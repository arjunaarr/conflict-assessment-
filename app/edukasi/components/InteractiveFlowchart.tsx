"use client";

import { useState } from "react";

const PENCEGAHAN_FLOWCHART = [
  {
    id: 1,
    title: "1. Kenali masalah",
    shortDesc: "Pahami akar persoalan & pihak terlibat",
    content: (
      <div className="space-y-4 text-gray-700">
        <p>Langkah pertama dalam mencegah konflik adalah menyadari dan memahami dengan jelas persoalan yang sedang terjadi. Tanpa pemahaman yang tepat, upaya penyelesaian berisiko salah sasaran atau bahkan memperburuk keadaan.</p>
        
        <p className="font-semibold text-gray-900 mt-6 border-b pb-2">Hal-hal yang perlu diperhatikan saat mengenali masalah</p>
        <div className="space-y-3">
          <p className="leading-relaxed"><strong>1. Identifikasi sumber persoalan</strong> Apa sebenarnya yang menjadi pemicu ketegangan? Apakah berkaitan dengan perbedaan kepentingan, kesalahpahaman komunikasi, persaingan sumber daya, atau isu SARA? Menemukan akar masalah membantu menentukan pendekatan penyelesaian yang tepat.</p>
          <p className="leading-relaxed"><strong>2. Kenali pihak-pihak yang terlibat</strong> Siapa saja yang terdampak atau terlibat langsung dalam persoalan ini? Memahami posisi, kepentingan, dan sudut pandang masing-masing pihak akan memudahkan proses komunikasi dan mediasi.</p>
          <p className="leading-relaxed"><strong>3. Pahami konteks dan latar belakang</strong> Sebuah persoalan jarang muncul begitu saja. Biasanya ada rangkaian peristiwa atau riwayat hubungan sebelumnya yang memengaruhi situasi saat ini.</p>
          <p className="leading-relaxed"><strong>4. Bedakan masalah inti dengan gejala</strong> Terkadang yang terlihat di permukaan hanyalah gejala dari masalah yang lebih dalam. Mengenali masalah inti mencegah penyelesaian yang hanya bersifat sementara.</p>
          <p className="leading-relaxed"><strong>5. Amati skala dan potensi dampak</strong> Apakah persoalan ini bersifat individu, kelompok kecil, atau berpotensi meluas? Penilaian ini penting untuk menentukan seberapa cepat langkah penanganan perlu diambil.</p>
        </div>
        
        <p className="font-semibold text-gray-900 mt-6 border-b pb-2">Mengapa langkah ini penting?</p>
        <p>Mengenali masalah sejak dini memungkinkan seseorang atau kelompok untuk bertindak secara proaktif, sebelum ketegangan berkembang menjadi konflik terbuka. Kesalahan yang umum terjadi adalah mengabaikan tanda-tanda awal atau menganggap persoalan kecil tidak perlu ditangani padahal, ketegangan yang dibiarkan dapat menumpuk dan meledak menjadi konflik yang jauh lebih sulit diselesaikan.</p>
      </div>
    )
  },
  {
    id: 2,
    title: "2. Cek informasi",
    shortDesc: "Pastikan kebenaran sumber kabar",
    content: (
      <div className="space-y-4 text-gray-700">
        <p>Setelah masalah dikenali, langkah berikutnya adalah memastikan bahwa informasi yang dimiliki tentang persoalan tersebut benar, lengkap, dan berasal dari sumber yang dapat dipercaya. Bertindak berdasarkan informasi yang keliru justru dapat memperburuk situasi dan memicu konflik yang lebih besar.</p>
        
        <p className="font-semibold text-gray-900 mt-6 border-b pb-2">Mengapa langkah ini penting?</p>
        <p>Di era digital, informasi termasuk kabar bohong (hoaks), rumor, dan opini yang dibingkai seolah fakta dapat menyebar sangat cepat, terutama melalui media sosial. Informasi yang belum terverifikasi sering kali dibumbui dengan tambahan yang tidak akurat setiap kali diteruskan dari satu orang ke orang lain, sehingga semakin jauh dari kebenaran.</p>

        <p className="font-semibold text-gray-900 mt-6 border-b pb-2">Cara melakukan cek informasi yang baik</p>
        <ul className="space-y-3">
          <li><strong>1. Telusuri sumber asli</strong> Jangan hanya berhenti pada informasi yang diterima dari pesan berantai atau media sosial. Cari tahu dari mana informasi tersebut pertama kali berasal dan apakah sumbernya kredibel.</li>
          <li><strong>2. Bandingkan dengan beberapa sumber lain</strong> Jika suatu kabar hanya beredar dari satu sumber tanpa dikonfirmasi oleh sumber independen lain, sebaiknya bersikap skeptis terlebih dahulu sebelum mempercayainya sepenuhnya.</li>
          <li><strong>3. Perhatikan fakta versus opini</strong> Pisahkan antara apa yang benar-benar terjadi (fakta) dengan penafsiran, dugaan, atau opini pribadi seseorang tentang kejadian tersebut.</li>
          <li><strong>4. Waspadai konten yang bersifat provokatif</strong> Informasi yang sengaja dibuat untuk memancing emosi (menggunakan bahasa yang berlebihan, judul yang sensasional, atau gambar yang menyesatkan) patut dicurigai kebenarannya.</li>
          <li><strong>5. Tanyakan langsung kepada pihak terkait</strong> Jika informasi menyangkut pihak tertentu, langkah paling efektif adalah mengonfirmasi langsung kepada pihak tersebut, alih-alih hanya mengandalkan pihak ketiga.</li>
          <li><strong>6. Jangan buru-buru menyebarkan</strong> Menahan diri untuk tidak langsung membagikan informasi yang belum terverifikasi adalah bentuk tanggung jawab sosial.</li>
        </ul>

        <p className="font-semibold text-gray-900 mt-6 border-b pb-2">Dampak jika langkah ini diabaikan</p>
        <p>Ketika seseorang bertindak berdasarkan informasi yang salah atau belum terverifikasi, ia berisiko:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Menuduh atau menyalahkan pihak yang sebenarnya tidak bersalah</li>
          <li>Ikut menyebarkan kepanikan atau kebencian di masyarakat</li>
          <li>Memperkeruh situasi yang sebenarnya masih bisa diselesaikan secara sederhana</li>
          <li>Kehilangan kepercayaan orang lain jika informasi yang disebarkan terbukti salah</li>
        </ul>
      </div>
    )
  },
  {
    id: 3,
    title: "3. Kendalikan emosi",
    shortDesc: "Beri jeda sebelum bereaksi",
    content: (
      <div className="space-y-4 text-gray-700">
        <p>Setelah masalah dikenali dan informasi telah diverifikasi kebenarannya, langkah selanjutnya adalah mengendalikan emosi sebelum bertindak atau merespons situasi. Betapapun benar dan lengkapnya informasi yang dimiliki, respons yang dilandasi emosi yang meluap-luap tetap berisiko mengubah persoalan kecil menjadi konflik yang lebih besar.</p>

        <p className="font-semibold text-gray-900 mt-6 border-b pb-2">Mengapa langkah ini penting?</p>
        <p>Emosi seperti marah, tersinggung, atau merasa terancam adalah reaksi manusiawi yang wajar ketika menghadapi persoalan atau perselisihan. Namun, jika emosi tersebut dibiarkan mengambil alih tindakan tanpa disaring oleh pikiran yang jernih, seseorang cenderung:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Mengambil keputusan secara impulsif tanpa mempertimbangkan konsekuensinya</li>
          <li>Mengucapkan kata-kata yang menyakiti atau memprovokasi pihak lain</li>
          <li>Memperbesar persoalan yang sebenarnya masih bisa diselesaikan secara sederhana</li>
          <li>Kehilangan objektivitas dalam menilai situasi secara adil</li>
        </ul>

        <p className="font-semibold text-gray-900 mt-6 border-b pb-2">Cara mengendalikan emosi dengan baik</p>
        <ul className="space-y-3">
          <li><strong>1. Beri jeda sebelum bereaksi</strong> Saat merasa marah atau tersinggung, tahan diri untuk tidak langsung merespons. Beri waktu beberapa saat agar pikiran menjadi lebih tenang sebelum bertindak.</li>
          <li><strong>2. Sadari dan akui emosi yang dirasakan</strong> Alih-alih menekan atau mengabaikan emosi, penting untuk menyadari bahwa perasaan tersebut memang ada. Dengan mengenali emosi yang dirasakan, seseorang lebih mudah mengendalikannya.</li>
          <li><strong>3. Hindari mengambil keputusan penting saat emosi memuncak</strong> Keputusan atau ucapan yang disampaikan dalam kondisi marah sering kali disesali kemudian.</li>
          <li><strong>4. Fokus pada penyelesaian, bukan pada rasa ingin "menang"</strong> Emosi yang tidak terkendali sering mendorong seseorang untuk membuktikan diri benar atau mengalahkan pihak lain. Tujuan utama adalah mencari solusi terbaik bagi semua.</li>
          <li><strong>5. Gunakan cara-cara menenangkan diri yang sehat</strong> Setiap orang memiliki cara berbeda untuk menenangkan diri, misalnya berbicara dengan orang yang dipercaya, melakukan aktivitas fisik ringan, atau mengalihkan perhatian sejenak.</li>
          <li><strong>6. Berlatih empati terhadap pihak lain</strong> Mencoba memahami sudut pandang atau perasaan pihak lain dapat membantu meredam emosi negatif.</li>
        </ul>

        <p className="font-semibold text-gray-900 mt-6 border-b pb-2">Dampak jika emosi tidak dikendalikan</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Perselisihan kecil berubah menjadi konfrontasi yang lebih besar</li>
          <li>Kata-kata yang diucapkan dapat melukai dan sulit ditarik kembali</li>
          <li>Hubungan yang sebelumnya baik menjadi rusak akibat reaksi berlebihan</li>
          <li>Pihak lain ikut terpancing emosinya, sehingga situasi semakin sulit dikendalikan</li>
        </ul>
      </div>
    )
  },
  {
    id: 4,
    title: "4. Komunikasikan dengan baik",
    shortDesc: "Sampaikan secara terbuka & sopan",
    content: (
      <div className="space-y-4 text-gray-700">
        <p>Setelah emosi berhasil dikendalikan, langkah selanjutnya adalah menyampaikan pandangan, keberatan, atau perasaan kepada pihak yang bersangkutan secara terbuka namun tetap sopan. Komunikasi yang baik menjadi jembatan penting untuk meluruskan kesalahpahaman sebelum berkembang menjadi persoalan yang lebih besar.</p>

        <p className="font-semibold text-gray-900 mt-6 border-b pb-2">Mengapa langkah ini penting?</p>
        <p>Banyak konflik sebenarnya bukan berasal dari perbedaan kepentingan yang benar-benar besar, melainkan dari kesalahpahaman yang tidak pernah dikomunikasikan secara langsung. Ketika seseorang memendam kekecewaan atau justru menyampaikannya dengan cara yang kasar dan menyerang, pihak lain cenderung bersikap defensif, sehingga persoalan bukannya selesai, malah semakin runcing.</p>

        <p className="font-semibold text-gray-900 mt-6 border-b pb-2">Prinsip-prinsip komunikasi yang baik</p>
        <ul className="space-y-3">
          <li><strong>1. Sampaikan secara langsung, bukan melalui pihak ketiga</strong> Menyampaikan keberatan langsung kepada pihak yang bersangkutan jauh lebih efektif daripada membicarakannya di belakang atau melalui perantara.</li>
          <li><strong>2. Gunakan bahasa yang tidak menyerang (non-konfrontatif)</strong> Fokus pada penyampaian perasaan dan fakta, bukan menyalahkan atau merendahkan pihak lain.</li>
          <li><strong>3. Dengarkan sudut pandang pihak lain</strong> Komunikasi yang baik bersifat dua arah. Memberi kesempatan pihak lain untuk menjelaskan sudut pandangnya membantu menemukan akar masalah yang mungkin belum terlihat sebelumnya.</li>
          <li><strong>4. Pilih waktu dan tempat yang tepat</strong> Menyampaikan sesuatu yang sensitif sebaiknya dilakukan di tempat yang tenang dan pada waktu yang tepat.</li>
          <li><strong>5. Perhatikan bahasa tubuh dan nada bicara</strong> Komunikasi bukan hanya soal kata-kata, tetapi juga cara menyampaikannya. Nada bicara yang tenang dan bahasa tubuh yang terbuka membantu menciptakan suasana yang lebih kondusif.</li>
          <li><strong>6. Klarifikasi, jangan berasumsi</strong> Daripada menduga-duga maksud atau niat pihak lain, lebih baik langsung bertanya dan mengklarifikasi. Asumsi yang keliru sering kali menjadi pemicu kesalahpahaman.</li>
        </ul>

        <p className="font-semibold text-gray-900 mt-6 border-b pb-2">Dampak jika komunikasi tidak dilakukan dengan baik</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Kesalahpahaman terus berlarut-larut karena tidak pernah diluruskan</li>
          <li>Pihak lain merasa diserang sehingga bersikap defensif atau balas menyerang</li>
          <li>Persoalan kecil membesar karena masing-masing pihak hanya berasumsi tanpa klarifikasi</li>
          <li>Hubungan menjadi renggang meski sebenarnya masalah bisa diselesaikan dengan mudah</li>
        </ul>
      </div>
    )
  },
  {
    id: 5,
    title: "5. Hargai perbedaan",
    shortDesc: "Terima latar belakang berbeda",
    content: (
      <div className="space-y-4 text-gray-700">
        <p>Setelah komunikasi berjalan dengan baik dan masing-masing pihak mulai saling memahami, langkah selanjutnya adalah menyadari dan menghargai bahwa setiap pihak memiliki latar belakang, pandangan, kepentingan, dan cara pandang yang berbeda-beda. Perbedaan ini seharusnya tidak dipandang sebagai ancaman, melainkan sebagai hal wajar yang perlu dikelola dengan bijak.</p>

        <p className="font-semibold text-gray-900 mt-6 border-b pb-2">Mengapa langkah ini penting?</p>
        <p>Indonesia adalah negara yang sangat majemuk terdiri atas beragam suku, agama, ras, dan golongan (SARA), serta perbedaan pandangan. Konflik sering kali muncul bukan karena perbedaan itu sendiri, melainkan karena adanya sikap tidak menerima atau bahkan menolak keberadaan perbedaan tersebut. Ketika seseorang mampu menghargai perbedaan, ruang untuk memahami dan menerima pihak lain menjadi lebih terbuka.</p>

        <p className="font-semibold text-gray-900 mt-6 border-b pb-2">Cara menumbuhkan sikap menghargai perbedaan</p>
        <ul className="space-y-3">
          <li><strong>1. Menyadari bahwa perbedaan adalah hal alami</strong> Setiap orang tumbuh dengan latar belakang yang berbeda-beda, sehingga wajar jika cara pandang dan sikapnya pun berbeda.</li>
          <li><strong>2. Tidak memaksakan pandangan sendiri sebagai satu-satunya kebenaran</strong> Bersikap terbuka bahwa ada banyak sudut pandang yang bisa sama-sama valid.</li>
          <li><strong>3. Menghindari sikap merendahkan atau mendiskriminasi</strong> Menghargai perbedaan berarti tidak merendahkan, mengejek, atau memperlakukan pihak lain secara tidak adil hanya karena perbedaan.</li>
          <li><strong>4. Belajar memahami sebelum menilai</strong> Sebelum menilai suatu pandangan atau kebiasaan yang berbeda, luangkan waktu untuk memahami konteks dan alasan di baliknya.</li>
          <li><strong>5. Fokus pada kesamaan tujuan, bukan hanya perbedaan</strong> Meski berbeda latar belakang, biasanya ada tujuan atau kepentingan bersama yang bisa menjadi titik temu.</li>
          <li><strong>6. Membangun interaksi positif dengan kelompok yang berbeda</strong> Semakin sering berinteraksi secara positif dengan orang-orang dari latar belakang berbeda, semakin berkurang pula prasangka dan kecurigaan.</li>
        </ul>

        <p className="font-semibold text-gray-900 mt-6 border-b pb-2">Dampak jika perbedaan tidak dihargai</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Munculnya prasangka dan stereotip negatif terhadap kelompok tertentu</li>
          <li>Sikap eksklusif yang memisahkan diri dari kelompok yang dianggap berbeda</li>
          <li>Meningkatnya potensi diskriminasi dan perlakuan tidak adil</li>
          <li>Perbedaan kecil dapat berkembang menjadi konflik besar karena tidak ada ruang saling memahami</li>
        </ul>
      </div>
    )
  },
  {
    id: 6,
    title: "6. Musyawarahkan penyelesaian",
    shortDesc: "Cari solusi bersama, bukan sepihak",
    content: (
      <div className="space-y-4 text-gray-700">
        <p>Setelah masing-masing pihak saling menghargai perbedaan, langkah selanjutnya adalah mencari jalan keluar bersama melalui musyawarah—bukan dengan memaksakan kehendak sepihak. Musyawarah menjadi cara penyelesaian yang paling sesuai dengan nilai-nilai budaya Indonesia, di mana keputusan diambil melalui diskusi terbuka dan mempertimbangkan kepentingan semua pihak.</p>

        <p className="font-semibold text-gray-900 mt-6 border-b pb-2">Mengapa langkah ini penting?</p>
        <p>Solusi yang dipaksakan oleh salah satu pihak, meski terlihat menyelesaikan masalah secara cepat, cenderung tidak bertahan lama karena pihak yang merasa dirugikan berpotensi menyimpan kekecewaan yang bisa memicu konflik baru di kemudian hari. Sebaliknya, solusi yang dihasilkan melalui musyawarah lebih mudah diterima karena semua pihak merasa didengar dan dilibatkan dalam proses pengambilan keputusan.</p>

        <p className="font-semibold text-gray-900 mt-6 border-b pb-2">Prinsip-prinsip musyawarah yang efektif</p>
        <ul className="space-y-3">
          <li><strong>1. Beri kesempatan yang setara kepada semua pihak</strong> Setiap pihak harus mendapat kesempatan yang sama untuk menyampaikan pandangan.</li>
          <li><strong>2. Fokus pada kepentingan bersama, bukan posisi masing-masing</strong> Alih-alih bersikukuh pada posisi awal masing-masing, musyawarah yang baik mencoba menemukan kepentingan yang mendasari posisi tersebut.</li>
          <li><strong>3. Bersikap terbuka terhadap berbagai alternatif Solusi</strong> Jangan terpaku pada satu solusi saja. Diskusikan beberapa alternatif dan pertimbangkan konsekuensi masing-masing.</li>
          <li><strong>4. Utamakan mufakat, bukan keputusan sepihak</strong> Tujuan musyawarah adalah mencapai kesepakatan yang diterima bersama (mufakat).</li>
          <li><strong>5. Jaga suasana diskusi tetap kondusif</strong> Musyawarah membutuhkan suasana yang tenang dan saling menghormati. Hindari perdebatan yang berubah menjadi saling menyalahkan.</li>
          <li><strong>6. Catat dan pastikan kesepakatan dipahami bersama</strong> Memastikan semua pihak memahami dengan jelas apa yang telah disepakati, agar tidak muncul kesalahpahaman baru.</li>
        </ul>

        <p className="font-semibold text-gray-900 mt-6 border-b pb-2">Dampak jika musyawarah tidak dilakukan</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Pihak yang merasa dirugikan cenderung menyimpan kekecewaan yang bisa memicu konflik susulan</li>
          <li>Solusi yang dipaksakan sering kali tidak menyelesaikan akar masalah yang sebenarnya</li>
          <li>Kepercayaan antarpihak semakin menurun karena merasa tidak dilibatkan</li>
          <li>Hubungan yang sudah renggang menjadi semakin sulit dipulihkan</li>
        </ul>
      </div>
    )
  },
  {
    id: 7,
    title: "7. Libatkan pihak yang tepat",
    shortDesc: "Jika diperlukan, ajak mediator netral",
    content: (
      <div className="space-y-4 text-gray-700">
        <p>Langkah terakhir dalam alur pencegahan konflik ini bersifat kondisional—hanya dilakukan apabila musyawarah antarpihak yang berselisih belum juga membuahkan hasil. Ketika komunikasi langsung mengalami jalan buntu, melibatkan pihak ketiga yang netral menjadi solusi untuk membantu menengahi dan mencari jalan keluar yang lebih adil.</p>

        <p className="font-semibold text-gray-900 mt-6 border-b pb-2">Mengapa langkah ini penting?</p>
        <p>Tidak semua persoalan dapat diselesaikan hanya melalui dialog antara pihak yang berkonflik, terutama jika:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Perbedaan pandangan terlalu tajam sehingga sulit menemukan titik temu</li>
          <li>Ada ketimpangan kekuatan atau posisi antara pihak yang berselisih</li>
          <li>Emosi masih terlalu tinggi sehingga komunikasi langsung justru berisiko memperburuk keadaan</li>
          <li>Kepercayaan antarpihak sudah terlalu rusak untuk melanjutkan dialog tanpa perantara</li>
        </ul>
        <p>Dalam kondisi ini, kehadiran pihak ketiga yang netral dapat membantu meredakan ketegangan dan mengarahkan proses penyelesaian ke arah yang lebih konstruktif.</p>

        <p className="font-semibold text-gray-900 mt-6 border-b pb-2">Siapa saja pihak yang dapat dilibatkan?</p>
        <ul className="space-y-3">
          <li><strong>1. Tokoh Masyarakat</strong> Ketua RT/RW, kepala desa/lurah, atau tokoh yang dihormati di lingkungan setempat.</li>
          <li><strong>2. Tokoh agama</strong> Pemuka agama dapat berperan penting, terutama jika konflik menyentuh isu-isu yang berkaitan dengan keyakinan atau nilai-nilai keagamaan.</li>
          <li><strong>3. Tokoh adat</strong> Tokoh adat memiliki otoritas tersendiri dalam menyelesaikan sengketa berdasarkan hukum adat yang berlaku.</li>
          <li><strong>4. Guru atau pihak sekolah</strong> Untuk konflik yang terjadi di lingkungan pendidikan.</li>
          <li><strong>5. Aparat keamanan dan pemerintah</strong> Jika konflik berpotensi mengarah pada tindakan yang melanggar hukum atau mengancam keamanan.</li>
          <li><strong>6. Lembaga atau forum mediasi</strong> Beberapa daerah memiliki lembaga khusus seperti forum kerukunan umat beragama (FKUB) atau lembaga adat.</li>
        </ul>

        <p className="font-semibold text-gray-900 mt-6 border-b pb-2">Prinsip melibatkan pihak ketiga</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Pilih pihak yang benar-benar netral, tidak memihak salah satu pihak yang berselisih.</li>
          <li>Pastikan pihak tersebut dipercaya dan dihormati oleh pihak-pihak yang berselisih.</li>
          <li>Libatkan pada waktu yang tepat, tidak terlalu cepat maupun terlalu lambat.</li>
        </ul>

        <p className="font-semibold text-gray-900 mt-6 border-b pb-2">Dampak positif melibatkan pihak yang tepat</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Membantu meredakan ketegangan karena adanya perspektif netral yang tidak terbawa emosi</li>
          <li>Membuka kemungkinan solusi yang mungkin tidak terpikirkan oleh pihak yang berselisih</li>
          <li>Memberi rasa keadilan karena keputusan tidak diambil secara sepihak</li>
          <li>Mencegah konflik meluas karena ditangani sejak sebelum benar-benar memuncak</li>
        </ul>
      </div>
    )
  }
];

export default function InteractiveFlowchart() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <div className="my-12 p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Diagram Langkah-Langkah Pencegahan Konflik</h2>
        <p className="text-gray-500">
          Konflik dapat dicegah melalui langkah-langkah sederhana yang dapat dilakukan secara bertahap. Berikut alurnya:
        </p>
      </div>

      {/* Grid of Steps — baris 1: langkah 1–4, baris 2: langkah 5–7 */}
      <div className="flex flex-col items-center gap-6 mb-4">
        {[PENCEGAHAN_FLOWCHART.slice(0, 4), PENCEGAHAN_FLOWCHART.slice(4)].map((row, rowIndex) => (
          <div key={rowIndex} className="flex flex-wrap justify-center items-center gap-2 sm:gap-4">
            {row.map((step, index) => {
              const isActive = activeStep === step.id;
              const isLastInRow = index === row.length - 1;

              return (
                <div key={step.id} className="flex items-center">
                  <button
                    onClick={() => setActiveStep(step.id)}
                    className={`w-36 sm:w-44 md:w-48 h-28 p-3 rounded-lg border-2 text-left transition-all duration-300 flex flex-col justify-center items-center text-center
                      ${isActive
                        ? "border-primary ring-4 ring-primary/20 scale-105 shadow-xl z-10"
                        : step.id === 7
                          ? "border-amber-700/40 hover:border-amber-600 hover:shadow-md hover:-translate-y-1"
                          : "border-emerald-700/40 hover:border-emerald-600 hover:shadow-md hover:-translate-y-1"}
                      ${step.id === 7 ? "bg-orange-50" : "bg-emerald-50/80"}
                    `}
                  >
                    <span className="font-bold text-sm text-gray-900 mb-1">{step.title}</span>
                    <span className="text-xs text-gray-600 leading-tight">{step.shortDesc}</span>
                  </button>

                  {!isLastInRow && (
                    <div className="hidden md:flex mx-1 lg:mx-2 text-gray-400">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>
      
      <p className="text-center text-sm italic text-gray-400 mb-10">
        Catatan: Setiap kotak dalam diagram dapat diklik untuk meminta penjelasan lebih lanjut mengenai langkah tersebut.
      </p>

      {/* Detail Panel */}
      <div className="bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden transition-all duration-500 min-h-[400px]">
        {activeStep === null ? (
          <div className="flex flex-col items-center justify-center h-[400px] text-gray-400">
            <svg className="w-16 h-16 mb-4 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
            </svg>
            <p className="text-lg font-medium">Silakan klik salah satu kotak di atas</p>
            <p className="text-sm">Untuk membaca penjelasan detail materinya.</p>
          </div>
        ) : (
          <div className="p-8 sm:p-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="flex items-center gap-4 mb-8 pb-6 border-b border-gray-200">
              <div className={`flex items-center justify-center w-12 h-12 rounded-full font-bold text-xl text-white shadow-inner ${activeStep === 7 ? 'bg-orange-500' : 'bg-teal-500'}`}>
                {activeStep}
              </div>
              <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight">
                {PENCEGAHAN_FLOWCHART.find(s => s.id === activeStep)?.title.replace(/^\d+\.\s*/, '')}
              </h3>
            </div>
            
            <div className="prose prose-sm sm:prose-base max-w-none prose-p:leading-relaxed prose-li:leading-relaxed">
              {PENCEGAHAN_FLOWCHART.find(s => s.id === activeStep)?.content}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
