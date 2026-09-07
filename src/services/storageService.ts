// storageService — capa de abstracción de localStorage para toda la app.
// Todas las operaciones de lectura/escritura pasan por acá para centralizar
// el manejo de claves y el parseo de JSON.

import type { Game, Review, User, Vote, WishlistItem } from "../interfaces";
import { seedGames, seedUsers } from "../data/seedData";

// Claves usadas en localStorage. Centralizadas para evitar typos.
const KEYS = {
  users: "flowmer_users",
  currentUser: "flowmer_current_user",
  games: "flowmer_games",
  reviews: "flowmer_reviews",
  votes: "flowmer_votes",
  wishlist: "flowmer_wishlist",
} as const;

// Inicializa el localStorage con datos de semilla (seed) la primera vez
// que se carga la app, o si se detecta que los datos están desactualizados.
export function initStorage(): void {
  // --- Usuarios ---
  const existingUsersRaw = localStorage.getItem(KEYS.users);

  if (!existingUsersRaw) {
    // Primera carga: poblar con usuarios iniciales
    localStorage.setItem(KEYS.users, JSON.stringify(seedUsers));
  } else {
    const parsedUsers = JSON.parse(existingUsersRaw) as User[];
    const hasAdmin = parsedUsers.some((u) => u.email === "admin@flowmer.com");
    // Si no existe el admin (datos corruptos o viejos), repoblar
    if (!hasAdmin) {
      localStorage.setItem(KEYS.users, JSON.stringify(seedUsers));
    }
  }

  // --- Juegos ---
  const existingGamesRaw = localStorage.getItem(KEYS.games);
  if (!existingGamesRaw) {
    // Primera carga: poblar con el catálogo inicial
    localStorage.setItem(KEYS.games, JSON.stringify(seedGames));
  } else {
    const parsedGames = JSON.parse(existingGamesRaw) as Game[];
    // Forzar re-seed si: ningún juego tiene trailerUrl O el primer juego difiere del seed
    const needsSync =
      !parsedGames.some((g) => Boolean(g.trailerUrl)) ||
      parsedGames[0]?.title !== seedGames[0]?.title;
    if (needsSync) {
      localStorage.setItem(KEYS.games, JSON.stringify(seedGames));
    }
  }

  // --- Reseñas, Votos y Wishlist: inicializar como array vacío si no existen ---
  if (!localStorage.getItem(KEYS.reviews)) {
    localStorage.setItem(KEYS.reviews, JSON.stringify([]));
  }
  if (!localStorage.getItem(KEYS.votes)) {
    localStorage.setItem(KEYS.votes, JSON.stringify([]));
  }
  if (!localStorage.getItem(KEYS.wishlist)) {
    localStorage.setItem(KEYS.wishlist, JSON.stringify([]));
  }
}

// ─── Usuarios ───────────────────────────────────────────────────────────────

export function getUsers(): User[] {
  return JSON.parse(localStorage.getItem(KEYS.users) ?? "[]") as User[];
}

export function saveUsers(users: User[]): void {
  localStorage.setItem(KEYS.users, JSON.stringify(users));
}

export function getCurrentUser(): User | null {
  const raw = localStorage.getItem(KEYS.currentUser);
  return raw ? (JSON.parse(raw) as User) : null;
}

export function saveCurrentUser(user: User): void {
  localStorage.setItem(KEYS.currentUser, JSON.stringify(user));
}

export function clearCurrentUser(): void {
  localStorage.removeItem(KEYS.currentUser);
}

// ─── Juegos ─────────────────────────────────────────────────────────────────

export function getGames(): Game[] {
  return JSON.parse(localStorage.getItem(KEYS.games) ?? "[]") as Game[];
}

export function saveGames(games: Game[]): void {
  localStorage.setItem(KEYS.games, JSON.stringify(games));
}

// ─── Reseñas ────────────────────────────────────────────────────────────────

export function getReviews(): Review[] {
  return JSON.parse(localStorage.getItem(KEYS.reviews) ?? "[]") as Review[];
}

export function saveReviews(reviews: Review[]): void {
  localStorage.setItem(KEYS.reviews, JSON.stringify(reviews));
}

// ─── Votos ──────────────────────────────────────────────────────────────────

export function getVotes(): Vote[] {
  return JSON.parse(localStorage.getItem(KEYS.votes) ?? "[]") as Vote[];
}

export function saveVotes(votes: Vote[]): void {
  localStorage.setItem(KEYS.votes, JSON.stringify(votes));
}

// ─── Wishlist ───────────────────────────────────────────────────────────────

export function getWishlist(): WishlistItem[] {
  return JSON.parse(localStorage.getItem(KEYS.wishlist) ?? "[]") as WishlistItem[];
}

export function saveWishlist(wishlist: WishlistItem[]): void {
  localStorage.setItem(KEYS.wishlist, JSON.stringify(wishlist));
}
