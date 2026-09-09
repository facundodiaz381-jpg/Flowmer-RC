// Rutas de la app con react-router-dom.
// Acá va el AppRouter con todos los <Route />, incluyendo rutas protegidas para admin.
import { Routes, Route } from "react-router-dom";
import { Admin } from "../pages/Admin/admin";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
}