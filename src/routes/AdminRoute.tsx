// Redirige a /login si el usuario no está logueado
// Redirige a / si el usuario logueado no tiene rol 'admin'
// Envuelve rutas exclusivas del panel de administración
import { Navigate } from "react-router-dom";
import type { ReactNode } from "react";
import { useAuth } from "../context/AuthContext";

type AdminRouteProps = {
  children: ReactNode;
};

export function AdminRoute({ children }: AdminRouteProps) {
  const { currentUser } = useAuth();

  // Sin sesión → al login
  if (!currentUser) return <Navigate to="/login" replace />;

  // Con sesión pero sin rol admin → al inicio
  if (currentUser.role !== "admin") return <Navigate to="/" replace />;

  return <>{children}</>;
}
