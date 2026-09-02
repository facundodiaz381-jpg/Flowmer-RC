// Página 404: se muestra cuando la ruta no existe
import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-9xl font-black text-violet-800 opacity-30">404</h1>
        <h2 className="text-3xl font-bold text-white -mt-6">
          Página no encontrada
        </h2>
        <p className="text-gray-500 mt-3">
          La ruta que buscás no existe o fue movida.
        </p>
        <Link
          to="/"
          className="inline-block mt-8 bg-violet-600 hover:bg-violet-700 text-white font-semibold px-6 py-3 rounded-lg transition"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}
