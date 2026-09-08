// Datos iniciales de usuarios para la app
import type { User } from "../interfaces/auth";

export const seedUsers: User[] = [
  {
    id: 1,
    name: "Administrador",
    email: "admin@flowmer.com",
    password: "admin123",
    role: "admin",
  },
  {
    id: 2,
    name: "Player One",
    email: "player@flowmer.com",
    password: "player123",
    role: "client",
  },
];
