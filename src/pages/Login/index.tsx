import { Link } from "react-router-dom";
import { LoginForm } from "../../components/LoginForm";

export function LoginPage() {
  return (
    <div className="min-h-screen bg-[url(../../../public/login.png)] flex items-center justify-center px-4 pt-14">
      <div className="w-full max-w-md bg-[#0e0e18] border border-white/5 rounded-2xl p-8 text-center space-y-4 shadow-2xl">
        <h1 className="text-2xl font-bold text-white mb-2">Iniciar Sesión</h1>
        <LoginForm />
        <div className="pt-2">
          <Link to="/" className="inline-block text-sm text-violet-400 hover:underline">
            ← Volver a la Tienda
          </Link>
        </div>
      </div>
    </div>
  );
}
