import { updateSession } from "@/utils/supabase/middleware";
import createMiddleware from "next-intl/middleware";
import type { NextRequest } from "next/server";
import { routing } from "./src/i18n/routing";

const intlMiddleware = createMiddleware(routing);

export async function middleware(request: NextRequest) {
  const intlResponse = await intlMiddleware(request);
  if (intlResponse) return intlResponse;
  return await updateSession(request);
}

export const config = {
  matcher: [
    // Match all pathnames except for
    // - api routes
    // - static files (e.g. favicon.ico, robots.txt)
    // - images
    // - _next
    "/((?!api|_next|.*\\..*).*)",
  ],
};
