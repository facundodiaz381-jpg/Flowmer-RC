// Navbar principal de FlowMer — responsive (desktop y móvil) con glassmorphism estilo Steam
import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useGame } from "../context/GameContext";
import { SearchBar } from "./SearchBar";

export function Navbar() {
  // Contextos globales para autenticación y catálogo
  const { currentUser, logout } = useAuth();
  const { searchTerm, setSearchTerm, wishlist } = useGame();
  
  const navigate = useNavigate();
  const location = useLocation();

  // Estados locales para los menús desplegables
  const [menuOpen, setMenuOpen] = useState(false); // Menú de usuario en desktop
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // Menú hamburguesa en mobile

  // Cálculo del contador de favoritos (según usuario activo o invitado)
  const currentUserId = currentUser ? currentUser.id : 0;
  const wishlistCount = wishlist.filter((w) => w.userId === currentUserId).length;

  // Auto-cierre de los menús al navegar a una nueva ruta
  useEffect(() => {
    setMobileMenuOpen(false);
    setMenuOpen(false);
  }, [location.pathname]);

  // Manejo de cierre de sesión
  function handleLogout(): void {
    logout();
    setMenuOpen(false);
    setMobileMenuOpen(false);
    navigate("/");
  }

  // La barra de búsqueda solo se muestra en la página principal
  const showSearch = location.pathname === "/";

  // Helper para resaltar la ruta activa en el menú
  function isActive(path: string): boolean {
    return location.pathname === path;
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a12]/90 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-4">
        
        {/* 1. LOGO PRINCIPAL */}
        <Link to="/" className="flex items-center gap-1 shrink-0 group">
          <span className="text-xl font-black text-white tracking-tight group-hover:text-violet-400 transition-colors duration-300">
            Flow
          </span>
          <span className="text-xl font-black bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
            Mer
          </span>
        </Link>

        {/* 2. NAVEGACIÓN DESKTOP (visible a partir de pantallas md) */}
        <nav className="hidden md:flex items-center gap-1">
          <Link
            to="/"
            className={`text-[13px] font-medium px-3 py-1.5 rounded-md transition-all duration-200 ${
              isActive("/")
                ? "text-white bg-white/10"
                : "text-gray-400 hover:text-white hover:bg-white/5"
            }`}
          >
            Tienda
          </Link>
          <Link
            to="/about"
            className={`text-[13px] font-medium px-3 py-1.5 rounded-md transition-all duration-200 ${
              isActive("/about")
                ? "text-white bg-white/10"
                : "text-gray-400 hover:text-white hover:bg-white/5"
            }`}
          >
            About
          </Link>
        </nav>

        {/* 3. BUSCADOR DESKTOP */}
        {showSearch && (
          <div className="flex-1 max-w-sm hidden sm:block">
            <SearchBar value={searchTerm} onChange={setSearchTerm} />
          </div>
        )}

        {/* 4. ACCIONES DERECHA (Favoritos, Login / Perfil / Hamburguesa) */}
        <div className="flex items-center gap-2 sm:gap-3">
          
          {/* Botón de Favoritos minimalista con número blanco */}
          <Link
            to="/wishlist"
            className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl transition-all duration-200 ${
              isActive("/wishlist")
                ? "bg-white/10 text-white border border-white/20"
                : "text-gray-400 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10"
            }`}
            title="Mi Lista de Deseados"
          >
            <svg
              className={`w-5 h-5 transition-all duration-200 hover:scale-110 ${
                wishlistCount > 0
                  ? "text-red-500 fill-red-500/20"
                  : "text-gray-400 fill-none"
              }`}
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
            {wishlistCount > 0 && (
              <span className="text-xs font-bold text-white">
                {wishlistCount}
              </span>
            )}
          </Link>

          {/* Botón Instalar Cliente (solo desktop grande) */}
          <button
            onClick={() =>
              alert("Descargando cliente oficial de FlowMer... 🚀")
            }
            className="hidden lg:flex items-center gap-1.5 bg-emerald-600/90 hover:bg-emerald-500 text-white text-xs font-semibold px-3 py-1.5 rounded-md border border-emerald-400/30 transition-all duration-200"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            Instalar FlowMer
          </button>

          {/* Acceso directo a Admin para administradores (Desktop) */}
          {currentUser?.role === "admin" && (
            <Link
              to="/admin"
              className="hidden sm:flex items-center gap-1.5 text-xs font-semibold text-violet-400 bg-violet-500/10 border border-violet-500/20 px-3 py-1.5 rounded-lg hover:bg-violet-500/20 transition-all duration-200"
            >
              ⚙ Admin
            </Link>
          )}

          {/* Botones Iniciar sesión / Registro en Desktop */}
          {!currentUser && (
            <div className="hidden md:flex items-center gap-2">
              <Link
                to="/login"
                className="text-[13px] font-medium text-gray-300 hover:text-white px-3 py-1.5 rounded-lg hover:bg-white/5 transition-all duration-200"
              >
                Iniciar sesión
              </Link>
              <Link
                to="/register"
                className="text-[13px] font-semibold bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white px-4 py-1.5 rounded-lg shadow-lg shadow-violet-500/20 transition-all duration-200"
              >
                Registrarse
              </Link>
            </div>
          )}

          {/* Avatar y Dropdown de Usuario logueado en Desktop */}
          {currentUser && (
            <div className="relative hidden md:block">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 px-2.5 py-1 rounded-lg transition-all duration-200"
              >
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-violet-600 to-fuchsia-600 flex items-center justify-center text-xs font-bold text-white">
                  {currentUser.name[0].toUpperCase()}
                </div>
                <span className="text-[13px] font-medium text-gray-200 max-w-24 truncate">
                  {currentUser.name}
                </span>
                <svg
                  className={`w-3 h-3 text-gray-500 transition-transform duration-200 ${
                    menuOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {menuOpen && (
                <>
                  <div
                    className="fixed inset-0"
                    onClick={() => setMenuOpen(false)}
                  />
                  <div className="absolute right-0 top-12 bg-[#12121e] border border-white/10 rounded-xl shadow-2xl shadow-black/50 py-1.5 w-52 z-50">
                    <div className="px-4 py-2.5 border-b border-white/5">
                      <p className="text-sm font-semibold text-white truncate">
                        {currentUser.name}
                      </p>
                      <p className="text-xs text-gray-500 truncate">
                        {currentUser.email}
                      </p>
                    </div>
                    <div className="py-1">
                      {currentUser.role === "admin" && (
                        <Link
                          to="/admin"
                          onClick={() => setMenuOpen(false)}
                          className="flex items-center gap-2.5 px-4 py-2 text-sm text-violet-400 hover:bg-white/5 transition-colors"
                        >
                          ⚙️ Panel Admin
                        </Link>
                      )}
                      <Link
                        to="/wishlist"
                        onClick={() => setMenuOpen(false)}
                        className="flex items-center gap-2.5 px-4 py-2 text-sm text-gray-300 hover:bg-white/5 transition-colors"
                      >
                        💜 Mi Wishlist
                      </Link>
                    </div>
                    <div className="border-t border-white/5 pt-1">
                      <button
                        onClick={handleLogout}
                        className="w-full text-left flex items-center gap-2.5 px-4 py-2 text-sm text-red-400 hover:bg-red-500/10 transition-colors"
                      >
                        🚪 Cerrar sesión
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          )}

          {/* 5. BOTÓN HAMBURGUESA MÓVIL (visible solo en pantallas < md) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white transition-colors"
            aria-label="Menú principal"
          >
            {mobileMenuOpen ? (
              // Ícono de cerrar (X)
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Ícono hamburguesa (☰)
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* 6. MENÚ MÓVIL DESPLEGABLE (DRAWER GLASSMORPHISM) */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0a14]/95 backdrop-blur-2xl border-b border-white/10 px-6 py-5 space-y-4 animate-in slide-in-from-top-4 duration-200 shadow-2xl">
          
          {/* Enlaces de navegación rápida */}
          <div className="flex flex-col gap-1 pb-3 border-b border-white/5">
            <Link
              to="/"
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                isActive("/")
                  ? "bg-violet-600/20 text-violet-300 border border-violet-500/30"
                  : "text-gray-300 hover:bg-white/5"
              }`}
            >
              <span>🏪</span> Tienda / Catálogo
            </Link>
            <Link
              to="/about"
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                isActive("/about")
                  ? "bg-violet-600/20 text-violet-300 border border-violet-500/30"
                  : "text-gray-300 hover:bg-white/5"
              }`}
            >
              <span>ℹ️</span> Acerca de Nosotros
            </Link>
            <Link
              to="/wishlist"
              className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                isActive("/wishlist")
                  ? "bg-violet-600/20 text-violet-300 border border-violet-500/30"
                  : "text-gray-300 hover:bg-white/5"
              }`}
            >
              <div className="flex items-center gap-3">
                <span>💜</span> Mi Lista de Deseados
              </div>
              {wishlistCount > 0 && (
                <span className="text-xs font-bold text-fuchsia-300 bg-fuchsia-500/20 border border-fuchsia-500/30 px-2 py-0.5 rounded-full">
                  {wishlistCount}
                </span>
              )}
            </Link>

            {/* Opción Admin si corresponde */}
            {currentUser?.role === "admin" && (
              <Link
                to="/admin"
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold text-violet-400 bg-violet-500/10 border border-violet-500/20 hover:bg-violet-500/20 transition-colors"
              >
                <span>⚙️</span> Panel de Administración
              </Link>
            )}
          </div>

          {/* Botón de Descargar App en móvil */}
          <button
            onClick={() =>
              alert("Descargando cliente oficial de FlowMer... 🚀")
            }
            className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold py-2.5 rounded-xl transition-colors"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            Descargar FlowMer App
          </button>

          {/* Perfil o Botones de Login en móvil */}
          {currentUser ? (
            <div className="pt-2 border-t border-white/5 space-y-3">
              <div className="flex items-center gap-3 px-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-600 to-fuchsia-600 flex items-center justify-center text-xs font-bold text-white">
                  {currentUser.name[0].toUpperCase()}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-white truncate">
                    {currentUser.name}
                  </p>
                  <p className="text-xs text-gray-500 truncate">
                    {currentUser.email}
                  </p>
                </div>
              </div>
              <button
                onClick={handleLogout}
                className="w-full text-center py-2.5 rounded-xl text-xs font-bold text-red-400 bg-red-500/10 border border-red-500/20 hover:bg-red-500/20 transition-colors"
              >
                Cerrar sesión
              </button>
            </div>
          ) : (
            <div className="pt-2 border-t border-white/5 grid grid-cols-2 gap-2">
              <Link
                to="/login"
                className="text-center py-2.5 rounded-xl text-xs font-semibold text-gray-300 bg-white/5 border border-white/10 hover:bg-white/10 hover:text-white transition-colors"
              >
                Iniciar sesión
              </Link>
              <Link
                to="/register"
                className="text-center py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 shadow-md shadow-violet-600/20 transition-all"
              >
                Registrarse
              </Link>
            </div>
          )}
        </div>
      )}
    </header>
  );
}
