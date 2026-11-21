import type { MusicItem } from '../../../types/musica'
import PlayButton from '../../atoms/BotondePlay/BotonPlay'
import './FeaturedSection.css'

interface FeaturedSectionProps {
  item: MusicItem
}

function FeaturedSection({ item }: FeaturedSectionProps) {
  return (
    <section className="featured">
      <img className="featured__cover" src={item.cover} alt={item.title} />
      <div className="featured__info">
        <span className="featured__label">Recomendado para ti</span>
        <h2 className="featured__title">{item.title}</h2>
        <p className="featured__artist">{item.subtitle}</p>
        <PlayButton size="lg" />
      </div>
    </section>
  )
}

export default FeaturedSection