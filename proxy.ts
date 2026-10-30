import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Proxy: Redirect first-time visitors from / to /intro.
 * Once the user has seen the intro (cookie intro_seen=1 is set),
 * subsequent visits to / are served normally.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip jika bukan root path (anti-loop)
  if (pathname !== "/") return NextResponse.next();

  const introSeen = request.cookies.get("intro_seen");

  // Sudah lihat intro → lanjut normal
  if (introSeen) return NextResponse.next();

  // Belum lihat intro → redirect ke /intro
  const url = request.nextUrl.clone();
  url.pathname = "/intro";
  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    /*
     * Hanya cocokkan root path /.
     * Exclude prefetch Next.js agar tidak loop saat Link hover.
     */
    {
      source: "/",
      missing: [
        { type: "header", key: "next-router-prefetch" },
        { type: "header", key: "purpose", value: "prefetch" },
      ],
    },
  ],
};
