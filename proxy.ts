import { type NextRequest, NextResponse } from "next/server";

const MUSIC_HOST = "musicas.chapada.ia.br";
const PRIVATE_ARCHIVE_HOST = "acervo.chapada.ia.br";
const musicRoutes: Record<string, string> = {
  "/": "/musicas",
  "/valentim-ha-de-voltar": "/musicas/valentim-ha-de-voltar",
  "/rio-da-casca-meu-chao": "/musicas/rio-da-casca-meu-chao",
  "/pedra-rara": "/musicas/pedra-rara",
  "/joaquina-de-mina": "/musicas/joaquina-de-mina",
  "/robots.txt": "/musicas/robots.txt",
  "/sitemap.xml": "/musicas/sitemap.xml",
};

export function proxy(request: NextRequest) {
  const host = (request.headers.get("x-forwarded-host") ?? request.headers.get("host") ?? "")
    .split(":")[0]
    .toLowerCase();
  const isPrivateArchive = request.nextUrl.pathname.startsWith("/acervo-pessoal") || host === PRIVATE_ARCHIVE_HOST;

  if (isPrivateArchive) {
    const username = process.env.ACERVO_ADMIN_USER;
    const password = process.env.ACERVO_ADMIN_PASSWORD;
    const authorization = request.headers.get("authorization");
    let authenticated = false;

    if (username && password && authorization?.startsWith("Basic ")) {
      try {
        const [providedUser, providedPassword] = atob(authorization.slice(6)).split(":");
        authenticated = providedUser === username && providedPassword === password;
      } catch {
        authenticated = false;
      }
    }

    if (!username || !password) {
      return new NextResponse("A área privada ainda não foi configurada.", { status: 503 });
    }

    if (!authenticated) {
      return new NextResponse("Autenticação necessária.", {
        status: 401,
        headers: { "WWW-Authenticate": 'Basic realm="Acervo privado", charset="UTF-8"' },
      });
    }
  }

  if (host === PRIVATE_ARCHIVE_HOST && request.nextUrl.pathname === "/") {
    return NextResponse.rewrite(new URL("/acervo-pessoal", request.url));
  }

  const destination = host === MUSIC_HOST ? musicRoutes[request.nextUrl.pathname] : undefined;

  if (!destination) return NextResponse.next();

  return NextResponse.rewrite(new URL(destination, request.url));
}

export const config = {
  matcher: ["/", "/valentim-ha-de-voltar", "/rio-da-casca-meu-chao", "/pedra-rara", "/joaquina-de-mina", "/robots.txt", "/sitemap.xml", "/acervo-pessoal/:path*"],
};
