// Árbol de rutas principal de FlowMer
import { Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";
import { AdminRoute } from "./AdminRoute";

import { HomePage } from "../pages/Home";
import { GameDetailPage } from "../pages/GameDetail";
import { LoginPage } from "../pages/Login";
import { RegisterPage } from "../pages/Register";
import { WishlistPage } from "../pages/Wishlist";
import { AboutPage } from "../pages/About";
import { NotFoundPage } from "../pages/NotFound";
import { Admin } from "../pages/Admin/admin";

export function AppRoutes() {
  return (
    <Routes>
      {/* Rutas públicas */}
      <Route path="/" element={<HomePage />} />
      <Route path="/game/:id" element={<GameDetailPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/about" element={<AboutPage />} />

      {/* Ruta protegida: solo usuarios logueados */}
      <Route
        path="/wishlist"
        element={
          <ProtectedRoute>
            <WishlistPage />
          </ProtectedRoute>
        }
      />

      {/* Ruta protegida: solo rol administrador */}
      <Route
        path="/admin"
        element={
          <AdminRoute>
            <Admin />
          </AdminRoute>
        }
      />

      {/* 404 / No encontrado */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
