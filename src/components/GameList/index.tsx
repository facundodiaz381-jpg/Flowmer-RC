// GameList: Grilla de videojuegos del catálogo que renderiza los componentes GameCard
import type { Game } from '../../types'
import { GameCard } from '../GameCard'

type GameListProps = {
  games: Game[]
}

export function GameList({ games }: GameListProps) {
  if (games.length === 0) {
    return (
      <div className="text-center py-20 bg-white/5 rounded-2xl border border-white/5">
        <p className="text-gray-400 text-lg font-semibold mb-1">No se encontraron juegos</p>
        <p className="text-gray-600 text-sm">Probá cambiando los filtros de categoría o el término de búsqueda.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  )
}
