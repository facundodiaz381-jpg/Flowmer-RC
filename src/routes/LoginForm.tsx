import { useRef } from "react";
import { useAuth } from "../context/AuthContext";

const LoginForm = () => {
  const correo = useRef<HTMLInputElement>(null);
  const contraseña = useRef<HTMLInputElement>(null);

  const { login } = useAuth();

  const handleLogin = () => {
    const correoValor = correo.current?.value;
    const contraseñaValor = contraseña.current?.value;

    if (!correoValor || !contraseñaValor) {
      alert("Completa todos los campos");
      return;
    }

    const success = login(correoValor, contraseñaValor);

    if (success) {
      window.location.reload();
    } else {
      alert("El Correo Electronico o La Contraseña Son Incorrectos");
    }
  };

  return (
        <div className="flex flex-col text-white text">
        <p className="flex justify-start m-1.5px">Correo</p>
        <input className="text-black rounded-sm border-1 bg-white border-violet-500 indent-2" type="email" ref={correo} placeholder="Ingrese Su Correo Electrónico" name="Correo"/>
        <p className="flex justify-start m-1.5px">Contraseña</p>
        <input className="text-black rounded-sm border-1 bg-white border-violet-500 indent-2" type="password" ref={contraseña} placeholder="Ingrese Una Contraseña" name="Contraseña"/>
        <button className="items-center gap-2 bg-violet-600 hover:bg-violet-900 text-white font-semibold text-sm px-5 py-2 rounded-xl shadow-lg shadow-violet-600/30 transition-all cursor-pointer mt-3" onClick={handleLogin}>Login</button>
      </div>
  );
};

export default LoginForm;