// Interfaces y tipos del módulo de autenticación y usuarios

// Roles posibles en el sistema
export type Role = "admin" | "client";

// Usuario registrado en la plataforma
export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  role: Role;
}
