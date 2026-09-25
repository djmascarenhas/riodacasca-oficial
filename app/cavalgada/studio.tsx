"use client";

import { useEffect, useRef, useState } from "react";

const MAX_FILE_SIZE = 8 * 1024 * 1024;

export default function CavalgadaStudio() {
  const fileRef = useRef<HTMLInputElement>(null);
  const [photo, setPhoto] = useState<File | null>(null);
  const [photoUrl, setPhotoUrl] = useState("");
  const [result, setResult] = useState("");
  const [consent, setConsent] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");

  useEffect(() => {
    return () => { if (photoUrl) URL.revokeObjectURL(photoUrl); };
  }, [photoUrl]);

  function selectPhoto(file?: File) {
    setError(""); setNotice(""); setResult(""); setConsent(false);
    if (!file) return;
    if (!["image/jpeg", "image/png", "image/webp"].includes(file.type)) {
      setPhoto(null); setPhotoUrl(""); setError("Escolha uma imagem JPG, PNG ou WebP."); return;
    }
    if (file.size > MAX_FILE_SIZE) {
      setPhoto(null); setPhotoUrl(""); setError("A imagem deve ter até 8 MB."); return;
    }
    setPhoto(file);
    setPhotoUrl(URL.createObjectURL(file));
  }

  async function createImage(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!photo || !consent) return;
    setBusy(true); setError(""); setNotice("Preparando sua lembrança da cavalgada…");
    try {
      const data = new FormData();
      data.append("photo", photo);
      const response = await fetch("/api/cavalgada/generate", { method: "POST", body: data });
      const payload = await response.json() as { image?: string; message?: string };
      if (!response.ok || !payload.image) throw new Error(payload.message || "Não foi possível criar a imagem agora. Tente novamente.");
      setResult(`data:image/png;base64,${payload.image}`);
      setNotice("Sua lembrança está pronta. Baixe ou compartilhe.");
    } catch (caught) {
      setNotice("");
      setError(caught instanceof Error ? caught.message : "Não foi possível criar a imagem agora. Tente novamente.");
    } finally { setBusy(false); }
  }

  async function shareImage() {
    if (!result) return;
    try {
      const blob = await (await fetch(result)).blob();
      const file = new File([blob], "eu-na-cavalgada.png", { type: "image/png" });
      if (navigator.share && navigator.canShare?.({ files: [file] })) {
        await navigator.share({ title: "Eu na Cavalgada do Rio da Casca", files: [file] });
      } else {
        const message = encodeURIComponent("Minha lembrança da 1ª Cavalgada Guarda-Fios do Rio da Casca 🐎");
        window.open(`https://wa.me/?text=${message}%20${encodeURIComponent(window.location.href)}`, "_blank", "noopener,noreferrer");
        setNotice("O WhatsApp foi aberto com o link da página. Baixe a imagem para anexá-la à conversa.");
      }
    } catch { setError("O compartilhamento não foi concluído. Você ainda pode baixar a imagem."); }
  }

  function startOver() {
    setResult(""); setPhoto(null); setPhotoUrl(""); setConsent(false); setError(""); setNotice("");
    if (fileRef.current) fileRef.current.value = "";
  }

  return <section className="cavalgada-studio" aria-labelledby="studio-title">
    <div className="studio-preview">
      <img className="studio-base" src={result || "/cavalgada/cavaleiro-base.png"} alt={result ? "Imagem criada para a cavalgada" : "Cavaleiro na estrada do Rio da Casca, com os antigos postes, a usina e a cachoeira ao fundo"} />
      {!result && photoUrl && <div className="selfie-chip"><img src={photoUrl} alt="Prévia da foto selecionada"/><span>Sua foto selecionada</span></div>}
      {!result && <span className="preview-label">ARTE DE REFERÊNCIA</span>}
      {result && <span className="preview-label">CRIAÇÃO DIGITAL</span>}
    </div>
    <div className="studio-controls">
      {!result ? <form onSubmit={createImage}>
        <p className="section-index">Sua lembrança começa aqui</p>
        <h2 id="studio-title">Prepare sua imagem</h2>
        <p className="studio-copy">Escolha uma selfie nítida, de frente e com boa iluminação. O rosto deve aparecer sem óculos escuros, chapéu ou filtros.</p>
        <div className="upload-actions">
          <label className="button upload-button" htmlFor="cavalgada-photo">{photo ? "Trocar foto" : "Escolher uma foto"}</label>
          <input ref={fileRef} id="cavalgada-photo" type="file" accept="image/jpeg,image/png,image/webp" capture="user" onChange={(event) => selectPhoto(event.target.files?.[0])} />
          <span>JPG, PNG ou WebP · até 8 MB</span>
        </div>
        {photo && <p className="selected-file"><span aria-hidden="true">✓</span> {photo.name}</p>}
        <label className="consent-row">
          <input type="checkbox" checked={consent} onChange={(event) => setConsent(event.target.checked)} />
          <span>Confirmo que tenho autorização para usar esta foto e aceito enviá-la à OpenAI para gerar a imagem. O site não armazena o arquivo enviado.</span>
        </label>
        <button className="button generate-button" type="submit" disabled={!photo || !consent || busy}>{busy ? "Criando sua lembrança…" : "Criar minha imagem"}<span aria-hidden="true">↗</span></button>
        <p className="privacy-note">Sua foto é enviada somente para a geração e não fica salva neste site. O resultado é uma montagem digital.</p>
        {error && <p className="form-message error" role="alert">{error}</p>}
        {notice && <p className="form-message" role="status">{notice}</p>}
      </form> : <div className="result-panel">
        <p className="section-index">Uma lembrança para guardar</p>
        <h2 id="studio-title">Você na cavalgada</h2>
        <p className="studio-copy">Baixe sua criação ou compartilhe com a família e os amigos.</p>
        <div className="result-actions">
          <a className="button" href={result} download="eu-na-cavalgada-rio-da-casca.png">Baixar imagem <span aria-hidden="true">↓</span></a>
          <button className="text-link share-button" type="button" onClick={shareImage}>Compartilhar</button>
          <button className="text-link reset-button" type="button" onClick={startOver}>Criar outra</button>
        </div>
        {notice && <p className="form-message" role="status">{notice}</p>}
        {error && <p className="form-message error" role="alert">{error}</p>}
        <p className="privacy-note">Guarde a imagem no seu aparelho. Ela não é mantida em uma galeria do site.</p>
      </div>}
    </div>
  </section>;
}
