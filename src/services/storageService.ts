// Capa de abstracción para localStorage

import type { Game, Review, User, Vote, WishlistItem } from "../types";
import { seedGames, seedUsers } from "./seedData";

const KEYS = {
  users: "flowmer_users",
  currentUser: "flowmer_current_user",
  games: "flowmer_games",
  reviews: "flowmer_reviews",
  votes: "flowmer_votes",
  wishlist: "flowmer_wishlist",
} as const;

export function initStorage(): void {
  const existingUsersRaw = localStorage.getItem(KEYS.users);

  if (!existingUsersRaw) {
    localStorage.setItem(KEYS.users, JSON.stringify(seedUsers));
  } else {
    const parsedUsers = JSON.parse(existingUsersRaw) as User[];
    const hasAdmin = parsedUsers.some((u) => u.email === "admin@flowmer.com");
    if (!hasAdmin) {
      localStorage.setItem(KEYS.users, JSON.stringify(seedUsers));
    }
  }

  const existingGamesRaw = localStorage.getItem(KEYS.games);
  if (!existingGamesRaw) {
    localStorage.setItem(KEYS.games, JSON.stringify(seedGames));
  } else {
    const parsedGames = JSON.parse(existingGamesRaw) as Game[];
    const needsSync =
      !parsedGames.some((g) => Boolean(g.trailerUrl)) ||
      parsedGames[0]?.title !== seedGames[0]?.title;
    if (needsSync) {
      localStorage.setItem(KEYS.games, JSON.stringify(seedGames));
    }
  }
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

export function getGames(): Game[] {
  return JSON.parse(localStorage.getItem(KEYS.games) ?? "[]") as Game[];
}

export function saveGames(games: Game[]): void {
  localStorage.setItem(KEYS.games, JSON.stringify(games));
}

export function getReviews(): Review[] {
  return JSON.parse(localStorage.getItem(KEYS.reviews) ?? "[]") as Review[];
}

export function saveReviews(reviews: Review[]): void {
  localStorage.setItem(KEYS.reviews, JSON.stringify(reviews));
}

export function getVotes(): Vote[] {
  return JSON.parse(localStorage.getItem(KEYS.votes) ?? "[]") as Vote[];
}

export function saveVotes(votes: Vote[]): void {
  localStorage.setItem(KEYS.votes, JSON.stringify(votes));
}

export function getWishlist(): WishlistItem[] {
  return JSON.parse(
    localStorage.getItem(KEYS.wishlist) ?? "[]",
  ) as WishlistItem[];
}

export function saveWishlist(wishlist: WishlistItem[]): void {
  localStorage.setItem(KEYS.wishlist, JSON.stringify(wishlist));
}
