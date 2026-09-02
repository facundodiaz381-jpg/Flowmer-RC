// En desarrollo por el equipo de trabajo
// Módulo: Registro
// Usar RegisterForm de components/RegisterForm para el formulario
// Conectar con useAuth() del context para crear el usuario en localStorage
import { Link } from 'react-router-dom'

export function RegisterPage() {
  return (
    <div className="min-h-screen bg-[#06060b] flex items-center justify-center px-4 pt-14">
      <div className="w-full max-w-md bg-[#0e0e18] border border-white/5 rounded-2xl p-8 text-center space-y-4">
        <h1 className="text-3xl font-bold text-white">Crear cuenta</h1>
        <p className="text-gray-500 text-sm">En desarrollo por el equipo de trabajo</p>
        <Link to="/" className="inline-block text-sm text-violet-400 hover:underline">
          ← Volver a la Tienda
        </Link>
      </div>
    </div>
  )
}
