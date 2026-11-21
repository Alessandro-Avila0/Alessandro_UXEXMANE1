import type { MusicItem } from '../../../types/musica'
import './SongRow.css'

interface SongRowProps {
  item: MusicItem
}

function SongRow({ item }: SongRowProps) {
  return (
    <div className="song-row">
      <img className="song-row__cover" src={item.cover} alt={item.title} loading="lazy" />
      <div className="song-row__info">
        <p className="song-row__title">{item.title}</p>
        <p className="song-row__subtitle">{item.subtitle}</p>
      </div>
    </div>
  )
}

export default SongRow