"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

/**
 * IntroGate – dipasang di halaman utama (/).
 * Saat komponen ini mount di browser, cek sessionStorage.
 * - sessionStorage terhapus otomatis saat tab/browser ditutup.
 * - Tidak terpengaruh fitur "session restore" browser seperti cookie.
 *
 * Alur:
 *   Tab baru / browser baru  → sessionStorage kosong → redirect ke /intro
 *   Navigasi dalam situs     → sessionStorage sudah ada 'intro_seen' → tetap di /
 */
export default function IntroGate() {
  const router = useRouter();

  useEffect(() => {
    const seen = sessionStorage.getItem("intro_seen");
    if (!seen) {
      // Belum lihat intro di sesi ini → arahkan ke /intro
      router.replace("/intro");
    }
  }, [router]);

  // Tidak merender elemen apapun yang terlihat
  return null;
}
