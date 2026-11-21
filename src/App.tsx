import { useState } from 'react'
import MainLayout from './components/templates/MainLayout/MainLayout'
import HomePage from './components/pages/HomePage/HomePage'

function App() {
  // Estado que simula iniciar / cerrar sesión (bono del examen)
  const [isLoggedIn, setIsLoggedIn] = useState(true)

  return (
    <MainLayout
      isLoggedIn={isLoggedIn}
      onLogin={() => setIsLoggedIn(true)}
      onLogout={() => setIsLoggedIn(false)}
    >
      <HomePage isLoggedIn={isLoggedIn} />
    </MainLayout>
  )
}

export default App