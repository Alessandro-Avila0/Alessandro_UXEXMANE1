import type { ReactNode } from 'react'
import Sidebar from '../../organisms/SideBar/Sidebar'
import TopBar from '../../organisms/TopBar/TopBar'
import './MainLayout.css'

interface MainLayoutProps {
  children: ReactNode
  isLoggedIn: boolean
  onLogin: () => void
  onLogout: () => void
}

function MainLayout({ children, isLoggedIn, onLogin, onLogout }: MainLayoutProps) {
  return (
    <div className="layout">
      <Sidebar isLoggedIn={isLoggedIn} onLogin={onLogin} />
      <div className="layout__main">
        <TopBar isLoggedIn={isLoggedIn} onLogin={onLogin} onLogout={onLogout} />
        <main className="layout__content">{children}</main>
      </div>
    </div>
  )
}

export default MainLayout