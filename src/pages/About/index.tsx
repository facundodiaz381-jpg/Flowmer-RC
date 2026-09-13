// En desarrollo — módulo a cargo del equipo
import { Link } from "react-router-dom";

export function AboutPage() {
  return (
    <div className="min-h-screen bg-[#06060b] text-gray-100 px-6 pt-28 pb-20">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl font-bold text-white">Sobre FlowMer</h1>
        <Link to="/" className="inline-block text-sm text-violet-400 hover:underline mt-4">
          ← Volver a la Tienda
        </Link>
      </div>
    </div>
  );
}
