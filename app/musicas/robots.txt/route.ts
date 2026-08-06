export function GET() {
  const body = [
    "User-agent: *",
    "Allow: /",
    "Sitemap: https://musicas.chapada.ia.br/sitemap.xml",
    "Host: https://musicas.chapada.ia.br",
    "",
  ].join("\n");

  return new Response(body, {
    headers: { "content-type": "text/plain; charset=utf-8" },
  });
}
