// En desarrollo por el equipo de trabajo
// Módulo: Sobre FlowMer
// Mostrar nombre del proyecto, descripción, integrantes del equipo y foto de cada uno
import { Link } from 'react-router-dom'

export function AboutPage() {
  return (
    <div className="min-h-screen bg-[#06060b] text-gray-100 px-6 pt-28 pb-20">
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <h1 className="text-3xl font-bold text-white">Sobre FlowMer</h1>
        <p className="text-gray-500 text-sm">En desarrollo por el equipo de trabajo</p>
        <Link to="/" className="inline-block text-sm text-violet-400 hover:underline">
          ← Volver a la Tienda
        </Link>
      </div>
    </div>
  )
}
