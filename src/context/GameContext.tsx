// GameContext: estado global del catálogo, wishlist, votos y reseñas

import { createContext, useContext, useState } from 'react'
import type { ReactNode } from 'react'
import type { Game, Review, Vote, WishlistItem } from '../types'
import {
  getGames,
  saveGames,
  getReviews,
  saveReviews,
  getVotes,
  saveVotes,
  getWishlist,
  saveWishlist,
} from '../services/storageService'

type GameContextType = {
  games: Game[]
  reviews: Review[]
  votes: Vote[]
  wishlist: WishlistItem[]
  searchTerm: string
  setSearchTerm: (term: string) => void
  selectedCategory: string
  setSelectedCategory: (category: string) => void
  addGame: (game: Omit<Game, 'id' | 'upvotes' | 'downvotes'>) => void
  updateGame: (game: Game) => void
  deleteGame: (id: number) => void
  addReview: (review: Omit<Review, 'id' | 'date'>) => void
  addVote: (vote: Vote) => void
  toggleWishlist: (userId: number, gameId: number) => void
}

const GameContext = createContext<GameContextType | null>(null)

export function useGame(): GameContextType {
  const context = useContext(GameContext)
  if (!context) throw new Error('useGame debe usarse dentro de GameProvider')
  return context
}

type GameProviderProps = {
  children: ReactNode
}

export function GameProvider({ children }: GameProviderProps) {
  const [games, setGames] = useState<Game[]>(getGames)
  const [reviews, setReviews] = useState<Review[]>(getReviews)
  const [votes, setVotes] = useState<Vote[]>(getVotes)
  const [wishlist, setWishlist] = useState<WishlistItem[]>(getWishlist)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('Todos')

  function addGame(gameData: Omit<Game, 'id' | 'upvotes' | 'downvotes'>): void {
    const newGame: Game = { ...gameData, id: Date.now(), upvotes: 0, downvotes: 0 }
    const updated = [...games, newGame]
    saveGames(updated)
    setGames(updated)
  }

  function updateGame(updatedGame: Game): void {
    const updated = games.map((g) => (g.id === updatedGame.id ? updatedGame : g))
    saveGames(updated)
    setGames(updated)
  }

  function deleteGame(id: number): void {
    const updated = games.filter((g) => g.id !== id)
    saveGames(updated)
    setGames(updated)
  }

  function addReview(reviewData: Omit<Review, 'id' | 'date'>): void {
    const newReview: Review = {
      ...reviewData,
      id: Date.now(),
      date: new Date().toLocaleDateString('es-AR'),
    }
    const updated = [...reviews, newReview]
    saveReviews(updated)
    setReviews(updated)
  }

  function addVote(vote: Vote): void {
    const filtered = votes.filter(
      (v) => !(v.userId === vote.userId && v.gameId === vote.gameId)
    )
    const updated = [...filtered, vote]
    saveVotes(updated)
    setVotes(updated)

    const updatedGames = games.map((g) => {
      if (g.id !== vote.gameId) return g
      const gameVotes = updated.filter((v) => v.gameId === g.id)
      return {
        ...g,
        upvotes: gameVotes.filter((v) => v.type === 'up').length,
        downvotes: gameVotes.filter((v) => v.type === 'down').length,
      }
    })
    saveGames(updatedGames)
    setGames(updatedGames)
  }

  function toggleWishlist(userId: number, gameId: number): void {
    const existe = wishlist.find(
      (w) => w.userId === userId && w.gameId === gameId
    )
    const updated = existe
      ? wishlist.filter((w) => !(w.userId === userId && w.gameId === gameId))
      : [...wishlist, { userId, gameId }]
    saveWishlist(updated)
    setWishlist(updated)
  }

  return (
    <GameContext.Provider
      value={{
        games,
        reviews,
        votes,
        wishlist,
        searchTerm,
        setSearchTerm,
        selectedCategory,
        setSelectedCategory,
        addGame,
        updateGame,
        deleteGame,
        addReview,
        addVote,
        toggleWishlist,
      }}
    >
      {children}
    </GameContext.Provider>
  )
}
