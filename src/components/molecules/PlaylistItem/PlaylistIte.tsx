import type { UserPlaylist } from '../../../types/musica'
import './PlaylistItem.css'

interface PlaylistItemProps {
  playlist: UserPlaylist
}

function PlaylistItem({ playlist }: PlaylistItemProps) {
  return (
    <button className="playlist-item">
      <span className="playlist-item__name">{playlist.name}</span>
      <span className="playlist-item__owner">{playlist.owner}</span>
    </button>
  )
}

export default PlaylistItem