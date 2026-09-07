// Raíz de la app: monta los Providers globales y el layout principal
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { GameProvider } from './context/GameContext'
import { LayoutScreen } from './layout/LayoutScreen'

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <GameProvider>
          <LayoutScreen />
        </GameProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
