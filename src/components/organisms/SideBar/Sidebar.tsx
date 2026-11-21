import { useState } from 'react'
import { Home, Compass, Library, History, Plus, Menu } from 'lucide-react'
import NavItem from '../../molecules/NavItem/NavItem'
import PlaylistItem from '../../molecules/PlaylistItem/PlaylistIte'
import Button from '../../atoms/Boton/Boton'
import { userPlaylists } from '../../../data/datosdePruba'
import './Sidebar.css'

interface SidebarProps {
  isLoggedIn: boolean
  onLogin: () => void
}

function Sidebar({ isLoggedIn, onLogin }: SidebarProps) {
  const [active, setActive] = useState('home')


  const navItems = [
    { id: 'home', label: 'Inicio', icon: <Home size={22} />, private: false },
    { id: 'explore', label: 'Explorar', icon: <Compass size={22} />, private: false },
    { id: 'library', label: 'Biblioteca', icon: <Library size={22} />, private: false },
    { id: 'history', label: 'Historial', icon: <History size={22} />, private: true },
  ].filter((n) => isLoggedIn || !n.private)

  return (
    <aside className="sidebar">
      <div className="sidebar__brand">
        <Menu size={22} />
        <span className="sidebar__logo">
          <span className="sidebar__logo-dot" /> Music
        </span>
      </div>

      <nav className="sidebar__nav">
        {navItems.map((n) => (
          <NavItem
            key={n.id}
            icon={n.icon}
            label={n.label}
            active={active === n.id}
            onClick={() => setActive(n.id)}
          />
        ))}
      </nav>

      {isLoggedIn ? (
        <div className="sidebar__playlists">
          <hr className="sidebar__divider" />
          <Button variant="pill" icon={<Plus size={18} />} fullWidth>
            Nueva playlist
          </Button>
          <div className="sidebar__list">
            {userPlaylists.map((p) => (
              <PlaylistItem key={p.id} playlist={p} />
            ))}
          </div>
        </div>
      ) : (
        <div className="sidebar__signin">
          <hr className="sidebar__divider" />
          <Button variant="pill" fullWidth onClick={onLogin}>Iniciar sesión</Button>
          <p>Inicia sesión para crear y compartir playlists y recibir recomendaciones personalizadas.</p>
        </div>
      )}
    </aside>
  )
}

export default Sidebar