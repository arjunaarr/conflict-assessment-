import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Proxy: Redirect first-time visitors from / to /intro.
 * Once the user has seen the intro (cookie intro_seen=1 is set),
 * subsequent visits to / are served normally.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Only intercept the root path
  if (pathname === "/") {
    const introSeen = request.cookies.get("intro_seen");

    if (!introSeen) {
      // First visit — send to intro page
      return NextResponse.redirect(new URL("/intro", request.url));
    }
  }

  // All other requests pass through normally
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match only the root path /.
     * Exclude API routes, Next.js internals, static files and assets.
     */
    "/",
  ],
};
