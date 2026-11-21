import type { ReactNode } from 'react'
import './NavItem.css'

interface NavItemProps {
  icon: ReactNode
  label: string
  active?: boolean
  onClick?: () => void
}

function NavItem({ icon, label, active = false, onClick }: NavItemProps) {
  return (
    <button className={`nav-item ${active ? 'nav-item--active' : ''}`} onClick={onClick}>
      {icon}
      <span className="nav-item__label">{label}</span>
    </button>
  )
}

export default NavItem