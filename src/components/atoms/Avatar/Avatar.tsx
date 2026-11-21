import './Avatar.css'

interface AvatarProps {
  src: string
  alt?: string
  size?: number
  onClick?: () => void
}

function Avatar({ src, alt = 'Perfil', size = 32, onClick }: AvatarProps) {
  return (
    <button className="avatar" onClick={onClick} style={{ width: size, height: size }}>
      <img src={src} alt={alt} />
    </button>
  )
}

export default Avatar