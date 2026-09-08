// Interfaces y tipos del módulo de videojuegos (productos)

// Requisitos mínimos del sistema para correr un juego
export interface SystemRequirements {
  os: string;
  processor: string;
  memory: string;
  graphics: string;
  storage: string;
}

// Videojuego del catálogo de FlowMer
export interface Game {
  id: number;
  title: string;
  description: string;
  price: number;         // En USD. 0 = GRATIS
  category: string;      // Ej: "RPG", "Shooter", "Racing"
  genre: string;         // Ej: "Acción / Cyberpunk"
  image: string;         // URL de la imagen de portada
  trailerUrl?: string;   // URL de embed de YouTube (opcional)
  developer: string;
  systemRequirements: SystemRequirements;
  upvotes: number;
  downvotes: number;
}

// Reseña escrita por un usuario sobre un juego
export interface Review {
  id: number;
  gameId: number;
  userId: number;
  userName: string;
  comment: string;
  date: string;          // Ej: "07/09/2026"
}

// Voto (positivo o negativo) de un usuario sobre un juego
export interface Vote {
  userId: number;
  gameId: number;
  type: "up" | "down";
}

// Ítem de la lista de deseados (wishlist) de un usuario
export interface WishlistItem {
  userId: number;
  gameId: number;
}
