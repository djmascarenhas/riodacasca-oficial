import { readFile } from "node:fs/promises";
import { join } from "node:path";

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

  let stage = "read_artwork";
  try {
    const artwork = await readFile(join(process.cwd(), "public", "cavalgada", "cavaleiro-base.png"));
    const art = new Blob([new Uint8Array(artwork)], { type: "image/png" });
    const images = new FormData();
    images.append("model", "gpt-image-2.5-sunburst");
    images.append("quality", "medium");
    images.append("output_format", "png");
    images.append("image[]", art, "cavaleiro-base.png");
    images.append("image[]", photo, photo.name || "selfie.png");
    images.append("prompt", [
      "Create a photorealistic commemorative image using the first image as the fixed Cavalgada Guarda-Fios poster and the second image as the identity reference for the prominent foreground rider.",
      "Change only the visible face of the prominent foreground rider so it naturally resembles the adult person in the second reference photo.",
      "Keep the rider's hat, clothing, pose, horse, tack, all other riders and horses, camera framing, lighting, and every background element from the first image unchanged: the poster typography and wording, old wooden 34 kV guard-wire poles and insulators, dirt road, forested Morro do Boqueirão, Casca I hydroelectric plant, chalet, and waterfall.",
      "Preserve the original poster composition, lettering, and natural warm color palette exactly. Do not add or remove people, animals, text, logos, or watermarks. Do not reproduce the selfie background. Blend only the foreground rider's face realistically with matching scale, lighting, expression, and perspective. This is a clearly commemorative digital montage."
    ].join(" "));

    stage = "request_openai";
    const generated = await fetch("https://api.openai.com/v1/images/edits", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}` },
      body: images,
      cache: "no-store",
    });
    if (!generated.ok) {
      const status = generated.status;
      console.error("cavalgada.openai_response", { status, requestId: generated.headers.get("x-request-id") });
      return Response.json({ message: status === 429
        ? "O serviço está ocupado. Aguarde um pouco e tente novamente."
        : status === 401 || status === 403
          ? "A criação de imagens está temporariamente indisponível."
          : "Não foi possível criar a imagem agora. Tente novamente." }, { status: status === 429 ? 429 : 503, headers: { "Cache-Control": "no-store" } });
    }
    stage = "parse_openai_response";
    const body = await generated.json() as { data?: Array<{ b64_json?: string }> };
    const image = body.data?.[0]?.b64_json;
    if (!image) throw new Error("image missing from response");
    return Response.json({ image }, { headers: { "Cache-Control": "no-store, max-age=0" } });
  } catch (error) {
    const cause = error instanceof Error ? (error as Error & { cause?: { code?: string } }).cause : undefined;
    console.error("cavalgada.generate_failed", {
      stage,
      name: error instanceof Error ? error.name : "unknown",
      message: error instanceof Error ? error.message : "unknown",
      causeCode: cause?.code,
    });
    return Response.json({ message: "Não foi possível criar a imagem agora. Verifique sua conexão e tente novamente." }, { status: 503, headers: { "Cache-Control": "no-store" } });
  }
}
