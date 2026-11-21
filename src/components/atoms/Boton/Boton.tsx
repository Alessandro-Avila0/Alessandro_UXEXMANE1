import type { ReactNode } from 'react'
import './Button.css'

interface ButtonProps {
  children: ReactNode
  variant?: 'pill' | 'outline' | 'light'
  icon?: ReactNode
  fullWidth?: boolean
  onClick?: () => void
}

function Boton({ children, variant = 'pill', icon, fullWidth = false, onClick }: ButtonProps) {
  return (
    <button
      className={`btn btn--${variant} ${fullWidth ? 'btn--full' : ''}`}
      onClick={onClick}
    >
      {icon}
      <span className="btn__label">{children}</span>
    </button>
  )
}

export default Boton