type SpotifyEmbedProps = {
  href: string;
  title: string;
};

function getEmbedDetails(href: string) {
  try {
    const url = new URL(href);
    if (url.hostname !== "open.spotify.com") return null;

    const parts = url.pathname.split("/").filter(Boolean);
    const entityIndex = parts.findIndex((part) => part === "album" || part === "track");
    const type = parts[entityIndex];
    const id = parts[entityIndex + 1];

    if (!type || !id || !/^[A-Za-z0-9]+$/.test(id)) return null;

    return {
      height: type === "album" ? 352 : 152,
      src: `https://open.spotify.com/embed/${type}/${id}?utm_source=generator`,
    };
  } catch {
    return null;
  }
}

export default function SpotifyEmbed({ href, title }: SpotifyEmbedProps) {
  const embed = getEmbedDetails(href);
  if (!embed) return null;

  return (
    <div className="spotify-embed">
      <p>Ouça nesta página</p>
      <iframe
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        allowFullScreen
        height={embed.height}
        loading="lazy"
        src={embed.src}
        title={`Player do Spotify: ${title}`}
        width="100%"
      />
    </div>
  );
}
