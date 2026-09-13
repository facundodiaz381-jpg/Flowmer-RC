import { useRef } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const nombre = useRef<HTMLInputElement>(null);
  const correo = useRef<HTMLInputElement>(null);
  const contraseña = useRef<HTMLInputElement>(null);

  const { register } = useAuth();
  const navegar = useNavigate();

  const handleSignup = () => {
    const name = nombre.current?.value;
    const email = correo.current?.value;
    const password = contraseña.current?.value;

    if (!name || !email || !password) {
      alert("Completá todos los campos");
      return;
    }

    const registrado = register(name, email, password);

    if (!registrado) {
      alert("Ese correo ya está registrado");
      return;
    }
    alert("Cuenta creada correctamente");
    navegar("/");
  };

  return (
    <div>
      <div className="flex flex-col text-white">
        <p className="flex justify-start m-1.5">Usuario</p>
      <input className="text-black rounded-sm border border-violet-500 bg-white indent-2" type="text" ref={nombre} placeholder="Ingrese Un Nombre De Usuario" name="Usuario"/>
        <p className="flex justify-start m-1.5">Correo</p>
      <input className="text-black rounded-sm border border-violet-500 bg-white indent-2" type="email" ref={correo} placeholder="Ingrese Su Correo Electrónico" name="Correo"/>
        <p className="flex justify-start m-1.5">Contraseña</p>
      <input className="text-black rounded-sm border border-violet-500 bg-white indent-2" type="password" ref={contraseña} placeholder="Ingrese Una Contraseña" name="Contraseña"/>
        <button
          className="items-center gap-2 bg-violet-600 hover:bg-violet-900 text-white font-semibold text-sm px-5 py-2 rounded-xl shadow-lg shadow-violet-600/30 transition-all cursor-pointer mt-3"
          onClick={handleSignup}>
          Crear Cuenta
        </button>
      </div>
    </div>
  );
};

export default RegisterForm;