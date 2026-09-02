// Interfaces y tipos del proyecto FlowMer (TypeScript)

export type Role = "admin" | "client";

export interface SystemRequirements {
  os: string;
  processor: string;
  memory: string;
  graphics: string;
  storage: string;
}

export interface Game {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  genre: string;
  image: string;
  trailerUrl?: string; // URL de embed de YouTube opcional
  developer: string;
  systemRequirements: SystemRequirements;
  upvotes: number;
  downvotes: number;
}

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  role: Role;
}

export interface Review {
  id: number;
  gameId: number;
  userId: number;
  userName: string;
  comment: string;
  date: string;
}

export interface Vote {
  userId: number;
  gameId: number;
  type: "up" | "down";
}

export interface WishlistItem {
  userId: number;
  gameId: number;
}
