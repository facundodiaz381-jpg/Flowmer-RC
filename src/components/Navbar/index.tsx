// Navbar principal de FlowMer — glassmorphism estilo Steam
import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useGame } from "../../context/GameContext";
import { SearchBar } from "../SearchBar";

export function Navbar() {
  const { currentUser, logout } = useAuth();
  const { searchTerm, setSearchTerm } = useGame();
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  function handleLogout(): void {
    logout();
    setMenuOpen(false);
    navigate("/");
  }

  const showSearch = location.pathname === "/";

  function isActive(path: string): boolean {
    return location.pathname === path;
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a12]/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-1 shrink-0 group">
          <span className="text-xl font-black text-white tracking-tight group-hover:text-violet-400 transition-colors duration-300">
            Flow
          </span>
          <span className="text-xl font-black bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
            Mer
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          <Link
            to="/"
            className={`text-[13px] font-medium px-3 py-1.5 rounded-md transition-all duration-200 ${isActive("/") ? "text-white bg-white/10" : "text-gray-400 hover:text-white hover:bg-white/5"}`}
          >
            Tienda
          </Link>
          {currentUser && (
            <Link
              to="/wishlist"
              className={`text-[13px] font-medium px-3 py-1.5 rounded-md transition-all duration-200 ${isActive("/wishlist") ? "text-white bg-white/10" : "text-gray-400 hover:text-white hover:bg-white/5"}`}
            >
              Wishlist
            </Link>
          )}
          <Link
            to="/about"
            className={`text-[13px] font-medium px-3 py-1.5 rounded-md transition-all duration-200 ${isActive("/about") ? "text-white bg-white/10" : "text-gray-400 hover:text-white hover:bg-white/5"}`}
          >
            About
          </Link>
        </nav>

        {showSearch && (
          <div className="flex-1 max-w-sm hidden sm:block">
            <SearchBar value={searchTerm} onChange={setSearchTerm} />
          </div>
        )}

        <div className="flex items-center gap-3">
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

          {currentUser?.role === "admin" && (
            <Link
              to="/admin"
              className="hidden sm:flex items-center gap-1.5 text-xs font-semibold text-violet-400 bg-violet-500/10 border border-violet-500/20 px-3 py-1.5 rounded-lg hover:bg-violet-500/20 transition-all duration-200"
            >
              ⚙ Admin
            </Link>
          )}

          {!currentUser && (
            <div className="flex items-center gap-2">
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

          {currentUser && (
            <div className="relative">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 px-2.5 py-1 rounded-lg transition-all duration-200"
              >
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-violet-600 to-fuchsia-600 flex items-center justify-center text-xs font-bold text-white">
                  {currentUser.name[0].toUpperCase()}
                </div>
                <span className="text-[13px] font-medium text-gray-200 hidden sm:block max-w-24 truncate">
                  {currentUser.name}
                </span>
                <svg
                  className={`w-3 h-3 text-gray-500 transition-transform duration-200 ${menuOpen ? "rotate-180" : ""}`}
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
        </div>
      </div>
    </header>
  );
}
