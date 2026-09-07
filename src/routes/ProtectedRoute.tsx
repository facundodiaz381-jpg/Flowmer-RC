// Redirige a /login si el usuario no está logueado
// Envuelve rutas que requieren sesión activa
import { Navigate } from "react-router-dom";
import type { ReactNode } from "react";
import { useAuth } from "../context/AuthContext";

type ProtectedRouteProps = {
  children: ReactNode;
};

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { currentUser } = useAuth();

  // Si no hay usuario logueado, redirige al login
  if (!currentUser) return <Navigate to="/login" replace />;

  return <>{children}</>;
}
