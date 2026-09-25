const MAX_FILE_SIZE = 8 * 1024 * 1024;
const MIME_TYPES = new Set(["image/jpeg", "image/png", "image/webp"]);

export async function POST(request: Request) {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) return Response.json({ message: "A criação de imagens ainda não está configurada neste site." }, { status: 503 });

  let form: FormData;
  try { form = await request.formData(); }
  catch { return Response.json({ message: "Não foi possível ler a foto enviada." }, { status: 400 }); }

  const photo = form.get("photo");
  if (!(photo instanceof File)) return Response.json({ message: "Escolha uma foto para continuar." }, { status: 400 });
  if (!MIME_TYPES.has(photo.type)) return Response.json({ message: "Envie uma imagem JPG, PNG ou WebP." }, { status: 415 });
  if (photo.size === 0 || photo.size > MAX_FILE_SIZE) return Response.json({ message: "A foto precisa ter conteúdo e no máximo 8 MB." }, { status: 413 });

  try {
    const artResponse = await fetch(new URL("/cavalgada/cavaleiro-base.png", request.url), { cache: "force-cache" });
    if (!artResponse.ok) throw new Error("base artwork unavailable");
    const art = new Blob([await artResponse.arrayBuffer()], { type: "image/png" });
    const images = new FormData();
    images.append("model", "gpt-image-2.5-sunburst");
    images.append("quality", "medium");
    images.append("output_format", "png");
    images.append("image[]", art, "cavaleiro-base.png");
    images.append("image[]", photo, photo.name || "selfie.png");
    images.append("prompt", [
      "Create a photorealistic commemorative image using the first image as the fixed scene and the second image as the identity reference for the foreground rider.",
      "Change only the visible face of the single foreground rider so it naturally resembles the adult person in the second reference photo.",
      "Keep the rider's hat, clothing, pose, horse, tack, camera framing, lighting, and every background element from the first image unchanged: the old wooden 34 kV guard-wire poles and insulators, dirt road, forested Morro do Boqueirão, Casca I hydroelectric plant, chalet, and waterfall.",
      "Preserve the original landscape composition and natural warm color palette. Do not add people, animals, text, logos, or watermarks. Do not reproduce the selfie background. Blend the face realistically with matching scale, lighting, expression, and perspective. This is a clearly commemorative digital montage."
    ].join(" "));

    const generated = await fetch("https://api.openai.com/v1/images/edits", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}` },
      body: images,
      cache: "no-store",
    });
    if (!generated.ok) {
      const status = generated.status;
      return Response.json({ message: status === 429
        ? "O serviço está ocupado. Aguarde um pouco e tente novamente."
        : status === 401 || status === 403
          ? "A criação de imagens está temporariamente indisponível."
          : "Não foi possível criar a imagem agora. Tente novamente." }, { status: 502, headers: { "Cache-Control": "no-store" } });
    }
    const body = await generated.json() as { data?: Array<{ b64_json?: string }> };
    const image = body.data?.[0]?.b64_json;
    if (!image) throw new Error("image missing from response");
    return Response.json({ image }, { headers: { "Cache-Control": "no-store, max-age=0" } });
  } catch {
    return Response.json({ message: "Não foi possível criar a imagem agora. Verifique sua conexão e tente novamente." }, { status: 502, headers: { "Cache-Control": "no-store" } });
  }
}
