// Footer columnar estilo Steam para FlowMer
import { Link } from "react-router-dom";
import { SOCIAL_LINKS } from "../data/socialLinks";

export function Footer() {
  return (
    <footer className="w-full bg-[#07070d] border-t border-white/5 text-gray-400 mt-auto py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* Columna izquierda: Logo, copyright y redes sociales */}
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
              © 2026 FlowMer Platform. Todos los derechos reservados. Todas las
              marcas registradas son propiedad de sus respectivos dueños en
              Argentina y otros países.
            </p>
            <p className="text-[11px] text-gray-500">
              IVA incluido en todos los precios, cuando corresponda.
            </p>

            {/* Iconos de redes — generados con .map() desde socialLinks.ts */}
            <div className="flex items-center gap-2.5 pt-2">
              {SOCIAL_LINKS.map((social) => (
                <Link
                  key={social.label}
                  to={social.to}
                  aria-label={social.label}
                  title={social.label}
                  className={`w-8 h-8 rounded-lg bg-white/5 text-gray-400 border border-white/5 flex items-center justify-center transition-all duration-200 ${social.hoverClass}`}
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d={social.path} />
                  </svg>
                </Link>
              ))}
            </div>
          </div>

          {/* Columnas de navegación estilo Steam */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">

            {/* FLOWMER */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-white">FlowMer</h3>
              <ul className="space-y-2 text-xs">
                <li><Link to="/about" className="hover:text-violet-400 transition-colors">Acerca de FlowMer</Link></li>
                <li><Link to="/" className="hover:text-violet-400 transition-colors">Catálogo de Juegos</Link></li>
                <li><Link to="/404" className="hover:text-violet-400 transition-colors">Acuerdo de Suscriptor</Link></li>
                <li><Link to="/404" className="hover:text-violet-400 transition-colors">Tarjetas de regalo</Link></li>
              </ul>
            </div>

            {/* EQUIPO */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-white">Equipo</h3>
              <ul className="space-y-2 text-xs">
                <li><Link to="/about" className="hover:text-violet-400 transition-colors">Sobre Nosotros</Link></li>
                <li><Link to="/about" className="hover:text-violet-400 transition-colors">Desarrolladores</Link></li>
                <li>
                  <a href="https://rollingcodeschool.com" target="_blank" rel="noreferrer" className="hover:text-violet-400 transition-colors flex items-center gap-1">
                    RollingCode <span className="text-[10px] text-gray-500">↗</span>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/facundodiaz381-jpg/Flowmer-RC" target="_blank" rel="noreferrer" className="hover:text-violet-400 transition-colors flex items-center gap-1">
                    GitHub <span className="text-[10px] text-gray-500">↗</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* LEGAL */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-white">Legal</h3>
              <ul className="space-y-2 text-xs">
                <li><Link to="/404" className="hover:text-violet-400 transition-colors">Privacidad</Link></li>
                <li><Link to="/404" className="hover:text-violet-400 transition-colors">Accesibilidad</Link></li>
                <li><Link to="/404" className="hover:text-violet-400 transition-colors">Avisos y políticas</Link></li>
                <li><Link to="/404" className="hover:text-violet-400 transition-colors">Cookies y Reembolsos</Link></li>
              </ul>
            </div>

            {/* MÁS */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-white">Más</h3>
              <ul className="space-y-2 text-xs">
                <li>
                  <button
                    onClick={() => alert("Descargando cliente oficial de FlowMer... 🚀")}
                    className="hover:text-violet-400 transition-colors text-left"
                  >
                    Obtener FlowMer
                  </button>
                </li>
                <li><Link to="/wishlist" className="hover:text-violet-400 transition-colors">Lista de Deseados</Link></li>
                <li><Link to="/login" className="hover:text-violet-400 transition-colors">Mi Cuenta</Link></li>
                <li><Link to="/404" className="hover:text-violet-400 transition-colors">Soporte oficial</Link></li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}
