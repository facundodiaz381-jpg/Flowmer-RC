// Placeholder de AdminDashboard listo para implementar el CRUD
import { Link } from "react-router-dom";

export function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 px-6 py-20">
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <h1 className="text-3xl font-bold text-white">
          Panel de Administración
        </h1>
        <p className="text-gray-400 text-sm">
          CRUD de Videojuegos (En desarrollo)
        </p>
        <Link
          to="/"
          className="inline-block text-sm text-violet-400 hover:underline"
        >
          ← Volver a la Tienda
        </Link>
      </div>
    </div>
  );
}
