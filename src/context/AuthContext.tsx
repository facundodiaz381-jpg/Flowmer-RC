// AuthContext — gestiona el usuario activo, login, registro y logout.
// Persiste la sesión en localStorage a través de storageService.

import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import type { User } from "../interfaces";
import {
  getUsers,
  saveUsers,
  getCurrentUser,
  saveCurrentUser,
  clearCurrentUser,
} from "../services/storageService";

// Forma del contexto expuesto a los componentes
type AuthContextType = {
  currentUser: User | null;
  login: (email: string, password: string) => boolean;
  register: (name: string, email: string, password: string) => boolean;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

// Hook personalizado para consumir el contexto desde cualquier componente
export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth debe usarse dentro de AuthProvider");
  return context;
}

type AuthProviderProps = {
  children: ReactNode;
};

export function AuthProvider({ children }: AuthProviderProps) {
  // Inicializa el estado leyendo la sesión guardada en localStorage
  const [currentUser, setCurrentUser] = useState<User | null>(getCurrentUser);

  // Busca al usuario por email+contraseña. Retorna false si no existe.
  function login(email: string, password: string): boolean {
    const users = getUsers();
    const found = users.find(
      (u) => u.email === email && u.password === password
    );
    if (!found) return false;
    saveCurrentUser(found);
    setCurrentUser(found);
    return true;
  }

  // Crea un usuario nuevo con rol 'client'. Retorna false si el email ya existe.
  function register(name: string, email: string, password: string): boolean {
    const users = getUsers();
    const existe = users.find((u) => u.email === email);
    if (existe) return false;

    const newUser: User = {
      id: Date.now(), // ID único basado en timestamp
      name,
      email,
      password,
      role: "client",
    };
    saveUsers([...users, newUser]);
    saveCurrentUser(newUser);
    setCurrentUser(newUser);
    return true;
  }

  // Limpia la sesión activa del estado y de localStorage
  function logout(): void {
    clearCurrentUser();
    setCurrentUser(null);
  }

  return (
    <AuthContext.Provider value={{ currentUser, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
