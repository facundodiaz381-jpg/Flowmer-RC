import { Link } from "react-router-dom";
import { useWishlist } from "../../hooks/useWishlist";
import { useGame } from "../../context/GameContext";
import { GameCard } from "../../components/GameCard";
import type { Game } from "../../interfaces";

export function WishlistPage() {
  const { wishlistIds } = useWishlist();
  const { games } = useGame();

  // Filtra los juegos que están marcados con corazón
  const wishlistGames = games.filter((game: Game) =>
    wishlistIds.includes(String(game.id))
  );

  return (
    <div className="min-h-screen bg-[#06060b] text-gray-100 px-6 pt-28 pb-20">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="flex justify-between items-center border-b border-white/10 pb-4">
          <div>
            <h1 className="text-3xl font-bold text-white">Mis Favoritos</h1>
            <p className="text-gray-400 text-sm mt-1">
              {wishlistGames.length} juego(s) guardado(s)
            </p>
          </div>
          <Link to="/" className="text-sm text-violet-400 hover:underline">
            ← Volver a la Tienda
          </Link>
        </div>

        {wishlistGames.length === 0 ? (
          <div className="text-center py-16 space-y-3">
            <p className="text-gray-500 text-lg">No tienes juegos en tu lista de favoritos.</p>
            <Link
              to="/"
              className="inline-block bg-violet-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-violet-700 transition-colors"
            >
              Explorar Tienda
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {wishlistGames.map((game: Game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}