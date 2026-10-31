import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Redirect ke /intro sekarang ditangani oleh client-side sessionStorage
// di komponen IntroGate (app/components/IntroGate.tsx).
// Proxy ini dibiarkan pass-through agar tidak ada konflik dengan
// mekanisme session restore browser yang mempertahankan cookie.
export function proxy(request: NextRequest) {
  return NextResponse.next();
}

export const config = {
  matcher: ["/"],
};
