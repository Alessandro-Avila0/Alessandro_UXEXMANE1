import { useState } from 'react'
import MainLayout from './components/templates/MainLayout/MainLayout'
import HomePage from './components/pages/HomePage/HomePage'

function App() {
  //cerrar sesión (bono :U del examn)
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