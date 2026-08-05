import { type NextRequest, NextResponse } from "next/server";

const MUSIC_HOST = "musicas.chapada.ia.br";
const musicRoutes: Record<string, string> = {
  "/": "/musicas",
  "/valentim-ha-de-voltar": "/musicas/valentim-ha-de-voltar",
  "/robots.txt": "/musicas/robots.txt",
  "/sitemap.xml": "/musicas/sitemap.xml",
};

export function proxy(request: NextRequest) {
  const host = (request.headers.get("x-forwarded-host") ?? request.headers.get("host") ?? "")
    .split(":")[0]
    .toLowerCase();
  const destination = host === MUSIC_HOST ? musicRoutes[request.nextUrl.pathname] : undefined;

  if (!destination) return NextResponse.next();

  return NextResponse.rewrite(new URL(destination, request.url));
}

export const config = {
  matcher: ["/", "/valentim-ha-de-voltar", "/robots.txt", "/sitemap.xml"],
};
