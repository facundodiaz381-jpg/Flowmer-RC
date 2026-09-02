// Layout principal de la aplicación
// Controla qué páginas muestran el Navbar (Login, Register y Admin tienen su propio layout)
import { useLocation } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import { AppRoutes } from '../routes'

const HIDDEN_NAVBAR_ROUTES = ['/login', '/register', '/admin']

export function MainLayout() {
  const { pathname } = useLocation()
  const hideNavbar = HIDDEN_NAVBAR_ROUTES.some((route) => pathname.startsWith(route))

  return (
    <>
      {!hideNavbar && <Navbar />}
      <AppRoutes />
    </>
  )
}
