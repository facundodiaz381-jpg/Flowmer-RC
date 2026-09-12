import {useRef} from "react"
import {useAuth} from "../context/AuthContext";

const RegisterForm = () => {
  const nombre = useRef<HTMLInputElement>(null);
  const correo = useRef<HTMLInputElement>(null);
  const contraseña = useRef<HTMLInputElement>(null);

  const { register } = useAuth();

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
  };

  return (
    <div>
      <div className="flex flex-col text-white text">
        <p className="flex justify-start m-1.5px">Usuario</p>
        <input className="text-black rounded-sm border-1 bg-white border-violet-500 indent-2" type="text" ref={nombre} placeholder="Ingrese Un Nombre De Usuario" name="Usuario"/>
        <p className="flex justify-start m-1.5px">Correo</p>
        <input className="text-black rounded-sm border-1 bg-white border-violet-500 indent-2" type="email" ref={correo} placeholder="Ingrese Su Correo Electrónico" name="Correo"/>
        <p className="flex justify-start m-1.5px">Contraseña</p>
        <input className="text-black rounded-sm border-1 bg-white border-violet-500 indent-2" type="password" ref={contraseña} placeholder="Ingrese Una Contraseña" name="Contraseña"/>
        <button className="items-center gap-2 bg-violet-600 hover:bg-violet-900 text-white font-semibold text-sm px-5 py-2 rounded-xl shadow-lg shadow-violet-600/30 transition-all cursor-pointer mt-3" onClick={handleSignup}>
          Crear Cuenta
        </button>
      </div>
    </div>
  );
};

export default RegisterForm