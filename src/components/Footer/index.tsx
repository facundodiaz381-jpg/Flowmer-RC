// Footer compacto estilo Steam para FlowMer — responsive (móvil y desktop)
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="w-full bg-[#08080f] border-t border-white/5 text-gray-400 text-xs mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-6 space-y-4">
        {/* Fila superior: Logo y Aviso Legal estilo Steam */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-4 pb-4 border-b border-white/5 text-center sm:text-left">
          {/* Logo FlowMer */}
          <div className="flex items-center justify-center shrink-0">
            <Link to="/" className="flex items-center gap-1 group">
              <span className="text-xl font-black text-white tracking-tight group-hover:text-violet-400 transition-colors">
                Flow
              </span>
              <span className="text-xl font-black bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
                Mer
              </span>
            </Link>
          </div>

          {/* Texto de Copyright y Leyenda estilo Steam */}
          <div className="text-[11px] leading-relaxed text-gray-400 space-y-1 flex-1 sm:pl-6">
            <p>
              © 2025 FlowMer. Todos los derechos reservados. Todas las marcas
              comerciales pertenecen a sus respectivos dueños en Argentina y
              otros países.
            </p>
            <p className="text-gray-500 text-[10px]">
              Todos los precios incluyen IVA (donde sea aplicable). Las imágenes
              y contenidos son utilizados con fines demostrativos y educativos.
            </p>
          </div>
        </div>

        {/* Links Legales estilo Steam */}
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-3 gap-y-1.5 text-[11px] text-gray-400 text-center sm:text-left">
          <Link to="/404" className="hover:text-violet-400 transition-colors">
            Política de Privacidad
          </Link>
          <span className="text-gray-600 select-none">|</span>
          <Link to="/404" className="hover:text-violet-400 transition-colors">
            Términos Legales
          </Link>
          <span className="text-gray-600 select-none">|</span>
          <Link to="/404" className="hover:text-violet-400 transition-colors">
            Acuerdo de Suscriptor a FlowMer
          </Link>
          <span className="text-gray-600 select-none">|</span>
          <Link to="/404" className="hover:text-violet-400 transition-colors">
            Reembolsos
          </Link>
          <span className="text-gray-600 select-none">|</span>
          <Link to="/404" className="hover:text-violet-400 transition-colors">
            Configuración de Cookies
          </Link>
        </div>

        {/* Links de Navegación y Redes Sociales (centrado en móvil, justify-between en desktop) */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-3 border-t border-white/5">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-2 text-[11px] text-center sm:text-left">
            <Link
              to="/404"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Acerca de FlowMer
            </Link>
            <Link
              to="/404"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Equipo de Desarrollo
            </Link>
            <Link
              to="/404"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Catálogo de Juegos
            </Link>
            <Link
              to="/404"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Lista de Deseados
            </Link>
            <Link
              to="/404"
              className="text-gray-400 hover:text-white transition-colors flex items-center gap-1"
            >
              <span>Soporte</span>
              <svg
                className="w-2.5 h-2.5 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </Link>
          </div>

          {/* Redes Sociales centradas en móvil */}
          <div className="flex items-center justify-center gap-2 shrink-0">
            {/* YouTube */}
            <Link
              to="/404"
              aria-label="YouTube"
              title="YouTube"
              className="w-7 h-7 rounded-md bg-white/5 hover:bg-red-600/20 hover:text-red-400 text-gray-400 border border-white/5 flex items-center justify-center transition-all duration-200"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </Link>

            {/* X (Twitter) */}
            <Link
              to="/404"
              aria-label="X"
              title="X"
              className="w-7 h-7 rounded-md bg-white/5 hover:bg-white/10 hover:text-white text-gray-400 border border-white/5 flex items-center justify-center transition-all duration-200"
            >
              <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </Link>

            {/* Discord */}
            <Link
              to="/404"
              aria-label="Discord"
              title="Discord"
              className="w-7 h-7 rounded-md bg-white/5 hover:bg-indigo-600/20 hover:text-indigo-400 text-gray-400 border border-white/5 flex items-center justify-center transition-all duration-200"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
