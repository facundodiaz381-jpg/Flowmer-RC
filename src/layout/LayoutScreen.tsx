// Layout principal — renderiza Navbar y Footer condicionalmente según la ruta.
import { useLocation } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { AppRoutes } from "../routes/AppRoutes";

// Rutas donde se oculta el layout (Login, Registro, Admin son pantalla completa).
// startsWith cubre sub-rutas futuras como /admin/settings.
const HIDDEN_LAYOUT_ROUTES = ["/login", "/register", "/admin"];

export function LayoutScreen() {
  const { pathname } = useLocation();
  const hideLayout = HIDDEN_LAYOUT_ROUTES.some((route) =>
    pathname.startsWith(route),
  );

  return (
    <div className="min-h-screen flex flex-col bg-[#06060b] text-gray-100">
      {!hideLayout && <Navbar />}
      <main className="flex-1">
        <AppRoutes />
      </main>
      {!hideLayout && <Footer />}
    </div>
  );
}
