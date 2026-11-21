import { Play } from 'lucide-react'
import './PlayButton.css'

interface PlayButtonProps {
  size?: 'sm' | 'md' | 'lg'
  onClick?: () => void
}

function BotonPlay({ size = 'md', onClick }: PlayButtonProps) {
  return (
    <button className={`play-button play-button--${size}`} onClick={onClick} aria-label="Reproducir">
      <Play fill="currentColor" />
    </button>
  )
}

export default BotonPlay