// Página "Sobre Nosotros" de FlowMer
import { Link } from "react-router-dom";

export function AboutPage() {
  return (
    <div className="min-h-screen bg-[#06060b] text-gray-100 pt-14">
      <div className="max-w-4xl mx-auto px-6 py-16 space-y-16">
        {/* Título */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-black text-white">
            Sobre{" "}
            <span className="bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
              FlowMer
            </span>
          </h1>
          <p className="text-gray-400 text-base max-w-xl mx-auto leading-relaxed">
            FlowMer es una plataforma de videojuegos desarrollada como proyecto
            para Rolling Code School. Permite explorar un catálogo de juegos,
            gestionar una lista de deseados, votar títulos y simular compras
            digitales.
          </p>
        </div>

        {/* Stack tecnológico */}
        <div className="bg-[#0e0e18] border border-white/5 rounded-2xl p-8 space-y-4">
          <h2 className="text-sm font-bold uppercase tracking-widest text-violet-400">
            Tecnologías
          </h2>
          <div className="flex flex-wrap gap-2">
            <span className="text-xs bg-white/5 border border-white/10 text-gray-300 px-3 py-1.5 rounded-lg">
              React
            </span>
            <span className="text-xs bg-white/5 border border-white/10 text-gray-300 px-3 py-1.5 rounded-lg">
              TypeScript
            </span>
            <span className="text-xs bg-white/5 border border-white/10 text-gray-300 px-3 py-1.5 rounded-lg">
              Vite
            </span>
            <span className="text-xs bg-white/5 border border-white/10 text-gray-300 px-3 py-1.5 rounded-lg">
              Tailwind CSS
            </span>
            <span className="text-xs bg-white/5 border border-white/10 text-gray-300 px-3 py-1.5 rounded-lg">
              React Router
            </span>
            <span className="text-xs bg-white/5 border border-white/10 text-gray-300 px-3 py-1.5 rounded-lg">
              localStorage
            </span>
          </div>
        </div>

        {/* Equipo */}
        <div className="space-y-6">
          <h2 className="text-sm font-bold uppercase tracking-widest text-violet-400">
            El equipo
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Lautaro Luna */}
            <div className="bg-[#0e0e18] border border-white/5 rounded-2xl p-6 text-center space-y-3">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-violet-600 to-fuchsia-600 flex items-center justify-center text-xl font-black text-white mx-auto">
                L
              </div>
              <div>
                <p className="text-sm font-bold text-white">Lautaro Luna</p>
                <p className="text-xs text-gray-500 mt-0.5">
                  Frontend Developer
                </p>
              </div>
              <a
                href="https://github.com/lautarolunaa00"
                target="_blank"
                rel="noreferrer"
                className="text-xs text-violet-400 hover:underline"
              >
                GitHub ↗
              </a>
            </div>

            {/* Lucas Alarcón */}
            <div className="bg-[#0e0e18] border border-white/5 rounded-2xl p-6 text-center space-y-3">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-violet-600 to-fuchsia-600 flex items-center justify-center text-xl font-black text-white mx-auto">
                L
              </div>
              <div>
                <p className="text-sm font-bold text-white">Lucas Alarcón</p>
                <p className="text-xs text-gray-500 mt-0.5">
                  Frontend Developer
                </p>
              </div>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="text-xs text-violet-400 hover:underline"
              >
                GitHub ↗
              </a>
            </div>

            {/* Facundo Díaz */}
            <div className="bg-[#0e0e18] border border-white/5 rounded-2xl p-6 text-center space-y-3">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-violet-600 to-fuchsia-600 flex items-center justify-center text-xl font-black text-white mx-auto">
                F
              </div>
              <div>
                <p className="text-sm font-bold text-white">Facundo Romano</p>
                <p className="text-xs text-gray-500 mt-0.5">
                  Frontend Developer
                </p>
              </div>
              <a
                href="https://github.com/facundodiaz381-jpg"
                target="_blank"
                rel="noreferrer"
                className="text-xs text-violet-400 hover:underline"
              >
                GitHub ↗
              </a>
            </div>

            {/* Josema */}
            <div className="bg-[#0e0e18] border border-white/5 rounded-2xl p-6 text-center space-y-3">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-violet-600 to-fuchsia-600 flex items-center justify-center text-xl font-black text-white mx-auto">
                J
              </div>
              <div>
                <p className="text-sm font-bold text-white">
                  Jose Maria Cazorla
                </p>
                <p className="text-xs text-gray-500 mt-0.5">
                  Frontend Developer
                </p>
              </div>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="text-xs text-violet-400 hover:underline"
              >
                GitHub ↗
              </a>
            </div>

            {/* Santiago */}
            <div className="bg-[#0e0e18] border border-white/5 rounded-2xl p-6 text-center space-y-3">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-violet-600 to-fuchsia-600 flex items-center justify-center text-xl font-black text-white mx-auto">
                S
              </div>
              <div>
                <p className="text-sm font-bold text-white">Santiago Díaz</p>
                <p className="text-xs text-gray-500 mt-0.5">
                  Frontend Developer
                </p>
              </div>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="text-xs text-violet-400 hover:underline"
              >
                GitHub ↗
              </a>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link
            to="/"
            className="text-sm text-gray-500 hover:text-violet-400 transition-colors"
          >
            ← Volver a la tienda
          </Link>
        </div>
      </div>
    </div>
  );
}
