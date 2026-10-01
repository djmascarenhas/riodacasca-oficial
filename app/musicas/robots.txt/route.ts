export function GET() {
  const body = [
    "User-agent: *",
    "Allow: /",
    "Sitemap: https://riodacasca.chapada.ia.br/musicas/sitemap.xml",
    "Host: https://riodacasca.chapada.ia.br",
    "",
  ].join("\n");

  return new Response(body, {
    headers: { "content-type": "text/plain; charset=utf-8" },
  });
}
