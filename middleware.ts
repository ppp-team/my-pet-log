import { NextResponse, NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const accessToken = request.cookies.get("accessToken");
  const path = request.nextUrl.pathname;
  const petId = request.cookies.get("petId");

  if (accessToken) {
    if (path === "/" || path.startsWith("/login") || path.startsWith("/signup")) return NextResponse.redirect(new URL("/home", request.url));

    //petId여부에 따라 redirect
    if (path === "/diary/select" && !petId) return;
    if (path === "/diary/select" && petId) return NextResponse.redirect(new URL("/diary/my-pet", request.url));
    if (path.startsWith("/diary/my-pet") && !petId) return NextResponse.redirect(new URL("/diary/select", request.url));

    if (path === "/healthlog/select" && !petId) return;
    if (path === "/healthlog/select" && petId) return NextResponse.redirect(new URL("/healthlog", request.url));
    if (path.startsWith("/healthlog") && !petId) return NextResponse.redirect(new URL("/healthlog/select", request.url));
  } else {
    if (path === "/" || path.startsWith("/login") || path.startsWith("/signup")) {
    } else return NextResponse.redirect(new URL("/login", request.url));
  }
}
export const config = {
  matcher: ["/((?!api|_next/static\\/?).*)"],
};
