import { NextResponse, NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const accessToken = request.cookies.get("accessToken");
  const path = request.nextUrl.pathname;

  if (accessToken) {
    if (path === "/" || path.startsWith("/login") || path === "/signup") return NextResponse.redirect(new URL("/home", request.url));
  } else {
    if (path === "/" || path.startsWith("/login") || path === "/signup") {
    } else return NextResponse.redirect(new URL("/login", request.url));
  }
}
export const config = {
  matcher: ["/((?!api|_next/static\\/?).*)"],
};
