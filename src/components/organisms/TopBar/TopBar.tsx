import { useState } from 'react'
import { Cast, LogOut } from 'lucide-react'
import SearchBar from '../../molecules/SearchBar/SearchBar'
import Avatar from '../../atoms/Avatar/Avatar'
import Button from '../../atoms/Boton/Boton'
import './TopBar.css'

interface TopBarProps {
  isLoggedIn: boolean
  onLogin: () => void
  onLogout: () => void
}

function TopBar({ isLoggedIn, onLogin, onLogout }: TopBarProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="topbar">
      <SearchBar />
      <div className="topbar__right">
        <Cast size={20} />
        {isLoggedIn ? (
          <div className="topbar__profile">
            <Avatar src="https://picsum.photos/seed/profile/100" onClick={() => setMenuOpen(!menuOpen)} />
            {menuOpen && (
              <div className="topbar__menu">
                <button
                  onClick={() => {
                    setMenuOpen(false)
                    onLogout()
                  }}
                >
                  <LogOut size={16} /> Cerrar sesión
                </button>
              </div>
            )}
          </div>
        ) : (
          <Button variant="light" onClick={onLogin}>Iniciar sesión</Button>
        )}
      </div>
    </header>
  )
}

export default TopBar