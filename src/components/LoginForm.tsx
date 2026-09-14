import { useRef } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export function LoginForm() {
  const correo = useRef<HTMLInputElement>(null);
  const contraseña = useRef<HTMLInputElement>(null);

  const { login } = useAuth();
  const navegar = useNavigate();

  const handleLogin = () => {
    const correoValor = correo.current?.value;
    const contraseñaValor = contraseña.current?.value;

    if (!correoValor || !contraseñaValor) {
      alert("Completa todos los campos");
      return;
    }

    const success = login(correoValor, contraseñaValor);

    if (success) {
      alert("Inicio de sesión correcto");
      navegar("/");
    } else {
      alert("El correo electrónico o la contraseña son incorrectos");
    }
  };

  return (
    <div className="flex flex-col text-white space-y-3">
      <div>
        <p className="flex justify-start mb-1 text-sm font-medium">Correo</p>
        <input
          className="w-full text-black rounded-sm border border-violet-500 bg-white indent-2 py-1.5 text-sm"
          type="email"
          ref={correo}
          placeholder="Ingrese su correo electrónico"
          name="Correo"
        />
      </div>
      <div>
        <p className="flex justify-start mb-1 text-sm font-medium">Contraseña</p>
        <input
          className="w-full text-black rounded-sm border border-violet-500 bg-white indent-2 py-1.5 text-sm"
          type="password"
          ref={contraseña}
          placeholder="Ingrese su contraseña"
          name="Contraseña"
        />
      </div>
      <button
        className="w-full items-center gap-2 bg-violet-600 hover:bg-violet-700 text-white font-semibold text-sm px-5 py-2.5 rounded-xl shadow-lg shadow-violet-600/30 transition-all cursor-pointer mt-2"
        onClick={handleLogin}
      >
        Iniciar sesión
      </button>
    </div>
  );
}

export default LoginForm;
