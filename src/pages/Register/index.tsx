import { Link } from "react-router-dom";
import { RegisterForm } from "../../components/RegisterForm";

export function RegisterPage() {
  return (
    <div className="min-h-screen bg-[url('/login.png')] bg-cover bg-center bg-no-repeat flex items-center justify-center px-4 pt-14">
      <div className="w-full max-w-md bg-[#0e0e18]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center space-y-4 shadow-2xl">
        <h1 className="text-2xl font-bold text-white mb-2">Crear Cuenta</h1>
        <RegisterForm />
        <div className="pt-3 border-t border-white/5 flex flex-col gap-2">
          <p className="text-xs text-gray-400">
            ¿Ya tenés una cuenta?{" "}
            <Link to="/login" className="text-violet-400 font-semibold hover:underline">
              Iniciá sesión
            </Link>
          </p>
          <Link to="/" className="inline-block text-xs text-gray-500 hover:text-violet-400 transition-colors">
            ← Volver a la Tienda
          </Link>
        </div>
      </div>
    </div>
  );
}
