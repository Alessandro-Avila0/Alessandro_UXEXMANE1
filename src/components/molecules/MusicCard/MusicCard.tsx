import type { MusicItem } from '../../../types/musica'
import PlayButton from '../../atoms/BotondePlay/BotonPlay'
import './MusicCard.css'

interface MusicCardProps {
  item: MusicItem
}

function MusicCard({ item }: MusicCardProps) {
  const isVideo = item.type === 'video'

  return (
    <article className={`music-card ${isVideo ? 'music-card--video' : ''}`}>
      <div className="music-card__cover">
        <img src={item.cover} alt={item.title} loading="lazy" />
        {isVideo && (
          <div className="music-card__play">
            <PlayButton size="md" />
          </div>
        )}
      </div>
      <h3 className="music-card__title">{item.title}</h3>
      <p className="music-card__subtitle">{item.subtitle}</p>
    </article>
  )
}

export default MusicCard