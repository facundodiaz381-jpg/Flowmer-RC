// Raíz de la app: monta los Providers globales y el layout principal
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { GameProvider } from './context/GameContext'
import { MainLayout } from './layout'

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <GameProvider>
          <MainLayout />
        </GameProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
