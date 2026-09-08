// Footer columnar profesional estilo Steam para FlowMer
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="w-full bg-[#07070d] border-t border-white/5 text-gray-400 mt-auto py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Columna Izquierda: Logo, Copyright y Redes Sociales */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="inline-flex items-center gap-1 group">
              <span className="text-2xl font-black text-white tracking-tight group-hover:text-violet-400 transition-colors">
                Flow
              </span>
              <span className="text-2xl font-black bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
                Mer
              </span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-violet-400 border border-violet-500/30 px-1.5 py-0.5 rounded ml-2">
                Gaming
              </span>
            </Link>

            <p className="text-xs text-gray-400 leading-relaxed max-w-sm">
              © 2026 FlowMer Platform. Todos los derechos reservados. Todas las marcas registradas son propiedad de sus respectivos dueños en Argentina y otros países.
            </p>
            <p className="text-[11px] text-gray-500">
              IVA incluido en todos los precios, cuando corresponda.
            </p>

            {/* Redes Sociales */}
            <div className="flex items-center gap-2.5 pt-2">
              <Link
                to="/404"
                aria-label="YouTube"
                title="YouTube"
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-red-600/20 hover:text-red-400 text-gray-400 border border-white/5 flex items-center justify-center transition-all duration-200"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </Link>
              <Link
                to="/404"
                aria-label="X (Twitter)"
                title="X"
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 hover:text-white text-gray-400 border border-white/5 flex items-center justify-center transition-all duration-200"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </Link>
              <Link
                to="/404"
                aria-label="Discord"
                title="Discord"
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-indigo-600/20 hover:text-indigo-400 text-gray-400 border border-white/5 flex items-center justify-center transition-all duration-200"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Columnas Derechas: Estilo Steam */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {/* Columna 1: FLOWMER */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-white">
                FLOWMER
              </h3>
              <ul className="space-y-2 text-xs">
                <li>
                  <Link to="/about" className="hover:text-violet-400 transition-colors">
                    Acerca de FlowMer
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:text-violet-400 transition-colors">
                    Catálogo de Juegos
                  </Link>
                </li>
                <li>
                  <Link to="/404" className="hover:text-violet-400 transition-colors">
                    Acuerdo de Suscriptor
                  </Link>
                </li>
                <li>
                  <Link to="/404" className="hover:text-violet-400 transition-colors">
                    Tarjetas de regalo
                  </Link>
                </li>
              </ul>
            </div>

            {/* Columna 2: EQUIPO */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-white">
                EQUIPO
              </h3>
              <ul className="space-y-2 text-xs">
                <li>
                  <Link to="/about" className="hover:text-violet-400 transition-colors">
                    Sobre Nosotros
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-violet-400 transition-colors">
                    Desarrolladores
                  </Link>
                </li>
                <li>
                  <a
                    href="https://rollingcodeschool.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-violet-400 transition-colors flex items-center gap-1"
                  >
                    <span>RollingCode</span>
                    <span className="text-[10px] text-gray-500">↗</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/facundodiaz381-jpg/Flowmer-RC"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-violet-400 transition-colors flex items-center gap-1"
                  >
                    <span>GitHub</span>
                    <span className="text-[10px] text-gray-500">↗</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Columna 3: LEGAL */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-white">
                LEGAL
              </h3>
              <ul className="space-y-2 text-xs">
                <li>
                  <Link to="/404" className="hover:text-violet-400 transition-colors">
                    Privacidad
                  </Link>
                </li>
                <li>
                  <Link to="/404" className="hover:text-violet-400 transition-colors">
                    Accesibilidad
                  </Link>
                </li>
                <li>
                  <Link to="/404" className="hover:text-violet-400 transition-colors">
                    Avisos y políticas
                  </Link>
                </li>
                <li>
                  <Link to="/404" className="hover:text-violet-400 transition-colors">
                    Cookies y Reembolsos
                  </Link>
                </li>
              </ul>
            </div>

            {/* Columna 4: MÁS */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-white">
                MÁS
              </h3>
              <ul className="space-y-2 text-xs">
                <li>
                  <button
                    onClick={() =>
                      alert("Descargando cliente oficial de FlowMer... 🚀")
                    }
                    className="hover:text-violet-400 transition-colors text-left"
                  >
                    Obtener FlowMer
                  </button>
                </li>
                <li>
                  <Link to="/wishlist" className="hover:text-violet-400 transition-colors">
                    Lista de Deseados
                  </Link>
                </li>
                <li>
                  <Link to="/login" className="hover:text-violet-400 transition-colors">
                    Mi Cuenta
                  </Link>
                </li>
                <li>
                  <Link to="/404" className="hover:text-violet-400 transition-colors">
                    Soporte oficial
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
