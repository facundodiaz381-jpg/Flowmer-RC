import { Link } from "react-router-dom";
import { LoginForm } from "../../components/LoginForm";

export function LoginPage() {
  return (
    <div className="min-h-screen bg-[url(../../../public/login.png)] flex items-center justify-center px-4 pt-14">
      <div className="w-full max-w-md bg-[#0e0e18] border border-white/5 rounded-2xl p-8 text-center space-y-4 shadow-2xl">
        <h1 className="text-2xl font-bold text-white mb-2">Iniciar Sesión</h1>
        <LoginForm />
        <div className="pt-3 border-t border-white/5 flex flex-col gap-2">
          <p className="text-xs text-gray-400">
            ¿No tenés una cuenta?{" "}
            <Link to="/register" className="text-violet-400 font-semibold hover:underline">
              Registrate
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
