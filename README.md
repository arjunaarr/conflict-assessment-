# Sistem Penilaian Potensi Konflik

Aplikasi web untuk melakukan penilaian awal terhadap indikator potensi konflik berdasarkan 15 pertanyaan dengan jawaban Ya/Tidak dan bobot yang telah ditentukan.

Website bersifat **informatif dan preventif**. Hasil merupakan penilaian berbasis indikator yang dimasukkan pengguna, bukan diagnosis atau keputusan final mengenai suatu konflik.

## Fitur

- **Penilaian Konflik** — 15 pertanyaan Ya/Tidak dengan progress bar, satu pertanyaan per layar, ringkasan sebelum submit
- **Perhitungan Skor Otomatis** — Server menghitung ulang skor berdasarkan bobot pertanyaan (total maks 30)
- **Klasifikasi 4 Kategori** — Aman (0–6), Waspada (7–13), Potensi Konflik (14–21), Risiko Tinggi (22–30)
- **Identifikasi Indikator** — Menampilkan indikator spesifik berdasarkan jawaban "Ya"
- **Rekomendasi** — Saran tindakan sesuai kategori hasil
- **Materi Edukasi** — Artikel edukasi relevan berdasarkan kategori
- **Simulasi Kasus** — Struktur simulasi kasus (placeholder, dikelola via admin)
- **Disclaimer** — Peringatan bahwa hasil bukan keputusan final

## Tech Stack

| Teknologi | Fungsi |
|---|---|
| [Next.js](https://nextjs.org) (App Router) | Framework |
| [TypeScript](https://www.typescriptlang.org) | Bahasa |
| [Tailwind CSS](https://tailwindcss.com) | Styling |
| [shadcn/ui](https://ui.shadcn.com) | Komponen UI |
| [Zod](https://zod.dev) | Validasi |
| [Vitest](https://vitest.dev) | Testing |

## Struktur Halaman

| Route | Deskripsi |
|---|---|
| `/` | Landing page — hero, cara kerja, edukasi singkat, simulasi, disclaimer |
| `/penilaian` | Kuesioner 15 pertanyaan Ya/Tidak |
| `/hasil` | Hasil penilaian — skor, kategori, indikator, rekomendasi, edukasi |
| `/edukasi` | Daftar materi edukasi |
| `/edukasi/[slug]` | Detail materi edukasi |
| `/simulasi` | Daftar simulasi kasus |
| `/simulasi/[id]` | Detail simulasi kasus |

## Cara Kerja

```
Pengguna → Jawab 15 pertanyaan → Server hitung skor
→ Klasifikasi kategori → Tampilkan indikator
→ Rekomendasi otomatis → Materi edukasi
```

## Memulai

### Prasyarat

- Node.js 18+
- npm

### Instalasi

```bash
git clone <repo-url>
cd conflict-assessment
npm install
```

### Development

```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000).

### Build

```bash
npm run build
npm start
```

### Test

```bash
npm test
```

8 test case boundary wajib + 2 edge case (skor negatif & skor > 30).

## Klasifikasi Skor

| Skor | Kategori | Warna |
|---:|---|---|
| 0–6 | Aman | Hijau |
| 7–13 | Waspada | Kuning |
| 14–21 | Potensi Konflik | Oranye |
| 22–30 | Risiko Tinggi | Merah |

## Deploy ke Vercel

1. Push repository ke GitHub
2. Import project di [vercel.com](https://vercel.com)
3. Vercel otomatis mendeteksi Next.js — klik **Deploy**

## Struktur Project

```
app/
├── page.tsx                  # Landing page
├── penilaian/page.tsx        # Kuesioner
├── hasil/page.tsx            # Hasil penilaian
├── edukasi/                  # Materi edukasi
├── simulasi/                 # Simulasi kasus
└── api/assessment/route.ts   # API scoring

components/
├── assessment/               # Komponen kuesioner
├── results/                  # Komponen hasil
└── ui/                       # shadcn/ui

lib/
├── scoring.ts                # Perhitungan skor
├── classification.ts         # Klasifikasi kategori
├── recommendations.ts        # Rekomendasi & edukasi
├── validation.ts             # Validasi Zod
└── questions.ts              # Data 15 pertanyaan

types/
└── assessment.ts             # TypeScript types
```

## Roadmap

- [x] Landing page
- [x] Assessment 15 pertanyaan
- [x] Scoring & klasifikasi
- [x] Halaman hasil
- [x] Materi edukasi
- [x] Simulasi kasus (struktur)
- [x] Testing
- [ ] Database (PostgreSQL + Drizzle ORM)
- [ ] Admin panel (CRUD pertanyaan, edukasi, simulasi)
- [ ] Authentication admin

## Disclaimer

Hasil penilaian merupakan gambaran awal berdasarkan jawaban yang diberikan dan tidak dimaksudkan sebagai keputusan final atau diagnosis terhadap suatu konflik. Untuk kondisi yang serius atau darurat, gunakan saluran bantuan atau pelaporan resmi yang sesuai.

## Lisensi

Private
