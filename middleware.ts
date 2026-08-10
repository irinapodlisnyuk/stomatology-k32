import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Перехватываем запрос к системному файлу полифилов Next.js
  // Маска *_04.js сработает, даже если имя хэша изменится при обновлении фреймворка
  if (pathname.startsWith("/_next/static/chunks/") && pathname.endsWith("_04.js")) {
    // Возвращаем пустой JavaScript-ответ с весом 0 байт
    return new NextResponse("/* optimized */", {
      headers: {
        "Content-Type": "application/javascript; charset=utf-8",
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  }

  return NextResponse.next();
}

// Указываем Next.js запускать этот код только для папки со статическими чанками
export const config = {
  matcher: "/_next/static/chunks/:path*",
};