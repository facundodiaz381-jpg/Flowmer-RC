// Punto de entrada. No tocar.
// initStorage inicializa el localStorage con los datos del seed si no existen

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { initStorage } from './services/storageService'

// Inicializa los datos antes de montar la app
initStorage()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
