import { useState } from 'react'

interface Props {
  /** ID del video de YouTube */
  id: string
  title: string
  playLabel: string
}

/** Muestra la miniatura y carga el iframe de YouTube solo al hacer clic. */
export default function VideoEmbed({ id, title, playLabel }: Props) {
  const [playing, setPlaying] = useState(false)

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-neon/30 bg-night box-glow">
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={title}
          className="absolute inset-0 h-full w-full"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={playLabel}
          className="group absolute inset-0 h-full w-full"
        >
          <img
            src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover opacity-80 transition group-hover:opacity-100"
          />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand/90 text-3xl text-white shadow-[0_0_28px_rgb(0_229_255/0.6)] transition group-hover:scale-110">
              ▶
            </span>
          </span>
        </button>
      )}
    </div>
  )
}
