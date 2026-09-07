// Layout principal de la aplicación
// Controla qué páginas muestran el Navbar y Footer (Login, Register y Admin tienen su propio layout)
import { useLocation } from 'react-router-dom'
import { Navbar, Footer } from '../components'
import { AppRoutes } from '../routes'

const HIDDEN_LAYOUT_ROUTES = ['/login', '/register', '/admin']

export function MainLayout() {
  const { pathname } = useLocation()
  const hideLayout = HIDDEN_LAYOUT_ROUTES.some((route) => pathname.startsWith(route))

  return (
    <div className="min-h-screen flex flex-col bg-[#06060b] text-gray-100">
      {!hideLayout && <Navbar />}
      <main className="flex-1">
        <AppRoutes />
      </main>
      {!hideLayout && <Footer />}
    </div>
  )
}

