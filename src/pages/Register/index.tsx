// En desarrollo por el equipo de trabajo
// Módulo: Registro
// Usar RegisterForm de components/RegisterForm para el formulario
// Conectar con useAuth() del context para crear el usuario en localStorage
import { Link } from 'react-router-dom'
import RegisterForm from '../../routes/RegisterForm'

export function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-14 bg-[url(../../../public/login.png)]">
      <div className="w-full max-w-md bg-[#0e0e18] border border-white/5 rounded-2xl p-8 text-center space-y-4">
        <RegisterForm/>
        <Link to="/" className="inline-block text-sm text-violet-400 hover:underline">
          ← Volver a la Tienda
        </Link>
      </div>
    </div>
  )
}
