# PERTANYAAN KONFLIK SOSIAL

> Dokumen terstruktur untuk digunakan sebagai referensi sistem penilaian konflik sosial.
> Format ini dibuat agar mudah dibaca oleh manusia maupun AI/IDE seperti Gemini IDE.
>
> **Sumber:** Dokumen "Pertanyaan Fasya"
> **Status:** Struktur dan isi mengikuti dokumen sumber.

---

## 1. TUJUAN DOKUMEN

Dokumen ini berisi:

1. Daftar pertanyaan penilaian konflik sosial.
2. Bobot masing-masing pertanyaan.
3. Perhitungan total skor.
4. Klasifikasi hasil berdasarkan rentang skor.
5. Tampilan hasil untuk setiap kategori.
6. Rekomendasi berdasarkan kategori hasil.
7. Materi edukasi yang sesuai.
8. Flow/alur sistem penilaian.

---

# 2. PERTANYAAN DAN BOBOT

Sistem memiliki **15 pertanyaan**. Setiap pertanyaan dijawab dengan **Ya/Tidak** dan memiliki bobot tertentu.

### Daftar Pertanyaan

| No. | Pertanyaan | Bobot |
|---:|---|---:|
| 1 | Apakah permasalahan melibatkan dua pihak atau kelompok atau lebih? | 1 |
| 2 | Apakah sudah terjadi perbedaan pendapat yang semakin sulit diselesaikan? | 1 |
| 3 | Apakah pihak yang terlibat mulai saling menyalahkan? | 1 |
| 4 | Apakah komunikasi atau dialog antara pihak yang terlibat mulai terganggu? | 2 |
| 5 | Apakah terdapat informasi yang belum jelas kebenarannya terkait permasalahan tersebut? | 2 |
| 6 | Apakah informasi tersebut mulai menyebar melalui media sosial atau grup percakapan? | 1 |
| 7 | Apakah terdapat komentar, ucapan, atau unggahan yang bersifat provokatif? | 2 |
| 8 | Apakah mulai muncul ajakan untuk memusuhi atau melakukan Tindakan terhadap pihak tertentu? | 2 |
| 9 | Apakah terdapat sikap diskriminatif atau perlakuan yang merendahkan kelompok/pihak tertentu? | 2 |
| 10 | Apakah pihak-pihak yang terlibat mulai membentuk atau memperkuat kelompok yang saling berseberangan? | 2 |
| 11 | Apakah sudah terdapat tekanan, intimidasi, atau ancaman secara verbal maupun digital? | 3 |
| 12 | Apakah permasalahan tersebut mulai mengganggu hubungan atau aktivitas masyarakat? | 2 |
| 13 | Apakah terdapat ajakan untuk mengumpulkan atau mengerahkan massa/kelompok? | 3 |
| 14 | Apakah sudah terjadi tindakan agresif atau kekerasan? | 3 |
| 15 | Apakah situasi sudah sulit dikendalikan atau berpotensi berkembang menjadi konflik yang lebih besar? | 3 |

---

# 3. ATURAN PERHITUNGAN SKOR

## 3.1 Jawaban

Setiap pertanyaan memiliki dua pilihan jawaban:

- `Ya`
- `Tidak`

## 3.2 Pemberian Skor

Jika jawaban pengguna adalah:

- `Ya` → mendapatkan bobot pertanyaan.
- `Tidak` → mendapatkan skor `0`.

### Rumus

```text
Skor Pertanyaan = Jawaban × Bobot
```

Dengan representasi:

```text
Ya    = 1
Tidak = 0
```

Sehingga:

```text
Skor Pertanyaan = Nilai Jawaban × Bobot
```

### Total Skor

```text
Total Skor = Σ seluruh skor pertanyaan
```

**Total skor maksimal = 30.**

---

# 4. KATEGORI HASIL

Hasil akhir ditentukan berdasarkan total skor.

| Rentang Skor | Kategori | Keterangan |
|---:|---|---|
| 0–6 | 🟢 Aman | Relatif Aman — Belum banyak indikator yang terdeteksi |
| 7–13 | 🟡 Waspada | Mulai terdapat indikator yang perlu diperhatikan |
| 14–21 | 🟠 Potensi Konflik | Terdapat beberapa indikator yang menunjukkan potensi eskalasi |
| 22–30 | 🔴 Risiko Tinggi | Terdapat banyak indikator serius yang membutuhkan perhatian lebih lanjut |

## 4.1 Aturan Klasifikasi

Gunakan aturan berikut:

```text
IF totalScore >= 0 AND totalScore <= 6
    kategori = "Aman"

ELSE IF totalScore >= 7 AND totalScore <= 13
    kategori = "Waspada"

ELSE IF totalScore >= 14 AND totalScore <= 21
    kategori = "Potensi Konflik"

ELSE IF totalScore >= 22 AND totalScore <= 30
    kategori = "Risiko Tinggi"
```

---

# 5. DETAIL HASIL DAN REKOMENDASI

## 5.1 HASIL 1 — AMAN

### Rentang Skor

```text
0–6
```

### Tampilan

**Kondisi Relatif Kondusif**

Belum banyak indikator potensi konflik yang terdeteksi berdasarkan jawaban yang diberikan.

### Rekomendasi

1. Tetap menjaga komunikasi yang baik.
2. Menghargai perbedaan pendapat.
3. Tidak mudah menyebarkan informasi yang belum terverifikasi.
4. Menjaga sikap toleransi.
5. Tetap peka terhadap perubahan situasi di lingkungan sekitar.

### Edukasi yang Disarankan

```text
Bagaimana Menjaga Lingkungan Tetap Harmonis?
```

---

## 5.2 HASIL 2 — WASPADA

### Rentang Skor

```text
7–13
```

### Tampilan

**Waspada**

Beberapa indikator awal potensi konflik mulai terdeteksi. Situasi perlu diperhatikan agar tidak berkembang menjadi masalah yang lebih besar.

### Rekomendasi

1. Verifikasi informasi sebelum menyebarkannya.
2. Hindari provokasi.
3. Jangan memperkeruh perdebatan.
4. Lakukan klarifikasi.
5. Utamakan komunikasi dan musyawarah.

### Edukasi

1. Mengenali Tanda-Tanda Awal Konflik
2. Bijak Bermedia Sosial
3. Komunikasi untuk Mencegah Konflik

---

## 5.3 HASIL 3 — POTENSI KONFLIK

### Rentang Skor

```text
14–21
```

### Tampilan

**Potensi Konflik**

Terdapat beberapa indikator yang menunjukkan adanya potensi eskalasi konflik. Situasi perlu dikelola dengan hati-hati dan tidak diperkeruh dengan tindakan provokatif.

### Rekomendasi

1. Hentikan penyebaran informasi yang belum terverifikasi.
2. Hindari tindakan provokatif.
3. Jangan melakukan intimidasi atau ancaman.
4. Upayakan klarifikasi dari sumber yang relevan.
5. Dorong komunikasi atau mediasi apabila memungkinkan.
6. Jika situasi semakin serius, gunakan jalur bantuan/pelaporan yang sesuai.

### Edukasi

1. Tahapan Eskalasi Konflik
2. Mengenal Mediasi dan Penyelesaian Konflik
3. Hoaks dan Provokasi sebagai Pemicu Konflik

---

## 5.4 HASIL 4 — RISIKO TINGGI

### Rentang Skor

```text
22–30
```

### Catatan Tampilan

Tampilan kategori ini harus **berbeda** karena sudah ada indikator serius seperti:

- Ancaman
- Pengerahan massa
- Kekerasan
- Situasi sulit dikendalikan

### Tampilan

**RISIKO TINGGI**

Jawaban menunjukkan adanya beberapa indikator serius yang perlu mendapatkan perhatian. Jangan melakukan tindakan yang dapat meningkatkan ketegangan atau membahayakan pihak lain.

### Rekomendasi

1. Tetap tenang dan hindari konfrontasi.
2. Jangan menyebarkan informasi provokatif.
3. Jangan melakukan tindakan balasan.
4. Jangan mengerahkan massa.
5. Utamakan keselamatan diri sendiri dan orang lain.
6. Segera koordinasikan atau gunakan saluran resmi yang sesuai apabila terdapat ancaman, kekerasan, atau keadaan darurat.

### Edukasi

1. Apa yang Harus Dilakukan Saat Konflik Meningkat?
2. Kewaspadaan dan Keselamatan dalam Situasi Konflik

---

# 6. IDENTIFIKASI INDIKATOR

Setelah total skor dihitung dan kategori ditentukan, sistem melakukan:

```text
Total Skor
    ↓
Klasifikasi Hasil
    ↓
Identifikasi Indikator
    ↓
Rekomendasi Otomatis
    ↓
Materi Edukasi yang Sesuai
```

Indikator yang dapat diidentifikasi berasal dari pertanyaan yang mendapatkan jawaban `Ya`.

Contoh:

```text
Pertanyaan 4 → Ya → Indikator komunikasi mulai terganggu
Pertanyaan 7 → Ya → Indikator komentar/ucapan/unggahan provokatif
Pertanyaan 11 → Ya → Indikator tekanan/intimidasi/ancaman
```

> Catatan: dokumen sumber tidak memberikan nama teknis/ID khusus untuk setiap indikator. Jika diimplementasikan dalam kode, ID indikator dapat dibuat secara konsisten berdasarkan nomor pertanyaan, misalnya `Q01`, `Q02`, ..., `Q15`.

---

# 7. FLOW SISTEM PENILAIAN

Alur sistem berdasarkan dokumen sumber:

```text
PENGGUNA
   ↓
Menjawab 15 pertanyaan
   ↓
Jawaban Ya/Tidak
   ↓
Sistem membaca jawaban
   ↓
Jawaban × Bobot
   ↓
Total Skor
   ↓
┌─────────────────────────────┐
│     KLASIFIKASI HASIL       │
├─────────────────────────────┤
│ 0–6   → Aman                │
│ 7–13  → Waspada             │
│ 14–21 → Potensi Konflik     │
│ 22–30 → Risiko Tinggi       │
└─────────────────────────────┘
   ↓
Identifikasi indikator
   ↓
Rekomendasi otomatis
   ↓
Materi edukasi yang sesuai
   ↓
SIMULASI KASUS
```

---

# 8. STRUKTUR DATA YANG DISARANKAN UNTUK IMPLEMENTASI

Bagian ini merupakan representasi terstruktur dari isi dokumen agar lebih mudah digunakan dalam pengembangan aplikasi.

## 8.1 Struktur Pertanyaan

```text
question
├── id
├── question
└── weight
```

Contoh:

```json
{
  "id": 1,
  "question": "Apakah permasalahan melibatkan dua pihak atau kelompok atau lebih?",
  "weight": 1
}
```

## 8.2 Struktur Jawaban

```text
answer
├── questionId
└── value
```

Nilai jawaban:

```text
Ya    → 1
Tidak → 0
```

Contoh:

```json
{
  "questionId": 1,
  "value": 1
}
```

## 8.3 Struktur Hasil

```text
result
├── minScore
├── maxScore
├── category
├── displayTitle
├── description
├── recommendations
└── education
```

---

# 9. DATA KATEGORI UNTUK IMPLEMENTASI

```json
[
  {
    "minScore": 0,
    "maxScore": 6,
    "category": "Aman",
    "displayTitle": "Kondisi Relatif Kondusif",
    "description": "Belum banyak indikator potensi konflik yang terdeteksi berdasarkan jawaban yang diberikan.",
    "recommendations": [
      "Tetap menjaga komunikasi yang baik.",
      "Menghargai perbedaan pendapat.",
      "Tidak mudah menyebarkan informasi yang belum terverifikasi.",
      "Menjaga sikap toleransi.",
      "Tetap peka terhadap perubahan situasi di lingkungan sekitar."
    ],
    "education": [
      "Bagaimana Menjaga Lingkungan Tetap Harmonis?"
    ]
  },
  {
    "minScore": 7,
    "maxScore": 13,
    "category": "Waspada",
    "displayTitle": "Waspada",
    "description": "Beberapa indikator awal potensi konflik mulai terdeteksi. Situasi perlu diperhatikan agar tidak berkembang menjadi masalah yang lebih besar.",
    "recommendations": [
      "Verifikasi informasi sebelum menyebarkannya.",
      "Hindari provokasi.",
      "Jangan memperkeruh perdebatan.",
      "Lakukan klarifikasi.",
      "Utamakan komunikasi dan musyawarah."
    ],
    "education": [
      "Mengenali Tanda-Tanda Awal Konflik",
      "Bijak Bermedia Sosial",
      "Komunikasi untuk Mencegah Konflik"
    ]
  },
  {
    "minScore": 14,
    "maxScore": 21,
    "category": "Potensi Konflik",
    "displayTitle": "Potensi Konflik",
    "description": "Terdapat beberapa indikator yang menunjukkan adanya potensi eskalasi konflik. Situasi perlu dikelola dengan hati-hati dan tidak diperkeruh dengan tindakan provokatif.",
    "recommendations": [
      "Hentikan penyebaran informasi yang belum terverifikasi.",
      "Hindari tindakan provokatif.",
      "Jangan melakukan intimidasi atau ancaman.",
      "Upayakan klarifikasi dari sumber yang relevan.",
      "Dorong komunikasi atau mediasi apabila memungkinkan.",
      "Jika situasi semakin serius, gunakan jalur bantuan/pelaporan yang sesuai."
    ],
    "education": [
      "Tahapan Eskalasi Konflik",
      "Mengenal Mediasi dan Penyelesaian Konflik",
      "Hoaks dan Provokasi sebagai Pemicu Konflik"
    ]
  },
  {
    "minScore": 22,
    "maxScore": 30,
    "category": "Risiko Tinggi",
    "displayTitle": "RISIKO TINGGI",
    "description": "Jawaban menunjukkan adanya beberapa indikator serius yang perlu mendapatkan perhatian. Jangan melakukan tindakan yang dapat meningkatkan ketegangan atau membahayakan pihak lain.",
    "recommendations": [
      "Tetap tenang dan hindari konfrontasi.",
      "Jangan menyebarkan informasi provokatif.",
      "Jangan melakukan tindakan balasan.",
      "Jangan mengerahkan massa.",
      "Utamakan keselamatan diri sendiri dan orang lain.",
      "Segera koordinasikan atau gunakan saluran resmi yang sesuai apabila terdapat ancaman, kekerasan, atau keadaan darurat."
    ],
    "education": [
      "Apa yang Harus Dilakukan Saat Konflik Meningkat?",
      "Kewaspadaan dan Keselamatan dalam Situasi Konflik"
    ]
  }
]
```

---

# 10. ATURAN IMPLEMENTASI PENTING

Saat mengimplementasikan sistem berdasarkan dokumen ini:

1. Jumlah pertanyaan harus **15**.
2. Setiap pertanyaan memiliki bobot sesuai tabel.
3. Jawaban hanya memiliki dua kondisi: `Ya` atau `Tidak`.
4. Jawaban `Ya` memberikan skor sesuai bobot.
5. Jawaban `Tidak` memberikan skor `0`.
6. Total skor maksimal adalah **30**.
7. Kategori harus mengikuti rentang skor yang telah ditentukan.
8. Setelah kategori ditemukan, sistem menampilkan:
   - Judul/status hasil.
   - Deskripsi.
   - Rekomendasi.
   - Materi edukasi.
9. Untuk kategori **Risiko Tinggi**, tampilan harus dibuat berbeda karena terdapat indikator serius.
10. Sistem juga mengidentifikasi indikator berdasarkan pertanyaan yang dijawab `Ya`.
11. Hasil rekomendasi bersifat otomatis berdasarkan kategori.
12. Alur terakhir sistem mengarah ke **Simulasi Kasus**.

---

# 11. REFERENSI CEPAT UNTUK GEMINI IDE

Jika Gemini IDE diminta mengembangkan atau mengubah fitur sistem penilaian, gunakan aturan inti berikut:

```text
INPUT:
15 pertanyaan dengan jawaban Ya/Tidak.

PROCESS:
1. Baca setiap jawaban.
2. Jika jawaban = Ya, tambahkan bobot pertanyaan ke total skor.
3. Jika jawaban = Tidak, tambahkan 0.
4. Hitung total skor.
5. Tentukan kategori berdasarkan rentang skor.
6. Identifikasi pertanyaan yang bernilai Ya sebagai indikator.
7. Tampilkan hasil sesuai kategori.
8. Tampilkan rekomendasi sesuai kategori.
9. Tampilkan materi edukasi sesuai kategori.
10. Setelah hasil selesai, arahkan ke simulasi kasus.

OUTPUT:
- Total skor
- Kategori
- Status/tampilan hasil
- Deskripsi
- Indikator
- Rekomendasi
- Materi edukasi
```

## Matriks Klasifikasi

```text
0–6   = Aman
7–13  = Waspada
14–21 = Potensi Konflik
22–30 = Risiko Tinggi
```

---

# 12. CATATAN SUMBER

Dokumen ini disusun berdasarkan file sumber yang diberikan.

Bagian yang merupakan isi sumber dipertahankan sesuai struktur dan istilah aslinya. Bagian **"Struktur Data yang Disarankan untuk Implementasi"**, contoh JSON, dan **"Referensi Cepat untuk Gemini IDE"** merupakan pengubahan format/representasi agar informasi sumber lebih mudah dipahami dan digunakan dalam pengembangan perangkat lunak.

Dokumen sumber berisi flow sampai tahap:

```text
SIMULASI KASUS
```

namun tidak memberikan detail lanjutan mengenai mekanisme atau aturan simulasi kasus.
