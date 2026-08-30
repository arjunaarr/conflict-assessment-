import { CategoryKey } from "@/types/assessment";

const RECOMMENDATIONS: Record<CategoryKey, string[]> = {
  AMAN: [
    "Tetap menjaga komunikasi yang baik.",
    "Menghargai perbedaan pendapat.",
    "Tidak mudah menyebarkan informasi yang belum terverifikasi.",
    "Menjaga sikap toleransi.",
    "Tetap peka terhadap perubahan situasi di lingkungan sekitar.",
  ],
  WASPADA: [
    "Verifikasi informasi sebelum menyebarkannya.",
    "Hindari provokasi.",
    "Jangan memperkeruh perdebatan.",
    "Lakukan klarifikasi.",
    "Utamakan komunikasi dan musyawarah.",
  ],
  POTENSI_KONFLIK: [
    "Hentikan penyebaran informasi yang belum terverifikasi.",
    "Hindari tindakan provokatif.",
    "Jangan melakukan intimidasi atau ancaman.",
    "Upayakan klarifikasi dari sumber yang relevan.",
    "Dorong komunikasi atau mediasi apabila memungkinkan.",
    "Jika situasi semakin serius, gunakan jalur bantuan/pelaporan yang sesuai.",
  ],
  RISIKO_TINGGI: [
    "Tetap tenang dan hindari konfrontasi.",
    "Jangan menyebarkan informasi provokatif.",
    "Jangan melakukan tindakan balasan.",
    "Jangan mengerahkan massa.",
    "Utamakan keselamatan diri sendiri dan orang lain.",
    "Segera koordinasikan atau gunakan saluran resmi yang sesuai apabila terdapat ancaman, kekerasan, atau keadaan darurat.",
  ],
};

const EDUCATION_TOPICS: Record<CategoryKey, string[]> = {
  AMAN: ["Bagaimana Menjaga Lingkungan Tetap Harmonis?"],
  WASPADA: [
    "Mengenali Tanda-Tanda Awal Konflik",
    "Bijak Bermedia Sosial",
    "Komunikasi untuk Mencegah Konflik",
  ],
  POTENSI_KONFLIK: [
    "Tahapan Eskalasi Konflik",
    "Mengenal Mediasi dan Penyelesaian Konflik",
    "Hoaks dan Provokasi sebagai Pemicu Konflik",
  ],
  RISIKO_TINGGI: [
    "Apa yang Harus Dilakukan Saat Konflik Meningkat?",
    "Kewaspadaan dan Keselamatan dalam Situasi Konflik",
  ],
};

export function getRecommendations(key: CategoryKey): string[] {
  return RECOMMENDATIONS[key];
}

export function getEducationTopics(key: CategoryKey): string[] {
  return EDUCATION_TOPICS[key];
}
