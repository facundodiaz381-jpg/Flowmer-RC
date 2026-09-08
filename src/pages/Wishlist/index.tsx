// WishlistPage — Lista de deseados personalizada por usuario con persistencia en localStorage
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useGame } from "../../context/GameContext";
import { GameCard } from "../../components/GameCard";

export function WishlistPage() {
  const { currentUser } = useAuth();
  const { games, wishlist } = useGame();

  // Filtrar los juegos que el usuario actual tiene en su wishlist
  const userWishlistGameIds = wishlist
    .filter((item) => item.userId === currentUser?.id)
    .map((item) => item.gameId);

  const wishlistGames = games.filter((game) =>
    userWishlistGameIds.includes(game.id),
  );

  const totalPrice = wishlistGames.reduce((acc, game) => acc + game.price, 0);

  return (
    <div className="min-h-screen bg-[#06060b] text-gray-100 pt-24 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header de la Wishlist */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-white/5">
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-3xl font-black text-white tracking-tight">
                Mi Lista de Deseados
              </h1>
              <span className="text-xs font-bold text-violet-400 bg-violet-500/10 border border-violet-500/20 px-2.5 py-0.5 rounded-full">
                {wishlistGames.length} {wishlistGames.length === 1 ? "juego" : "juegos"}
              </span>
            </div>
            <p className="text-gray-400 text-sm mt-1">
              Juegos guardados por <span className="text-white font-medium">{currentUser?.name}</span>
            </p>
          </div>

          {wishlistGames.length > 0 && (
            <div className="flex items-center gap-4 bg-white/5 border border-white/10 px-4 py-2.5 rounded-xl">
              <span className="text-xs text-gray-400">Total estimado:</span>
              <span className="text-lg font-black text-white">
                ${totalPrice.toFixed(2)}
              </span>
            </div>
          )}
        </div>

        {/* Contenido: Grilla o Estado Vacío */}
        {wishlistGames.length === 0 ? (
          <div className="text-center py-20 bg-[#0e0e18] border border-white/5 rounded-2xl p-8 max-w-xl mx-auto shadow-xl">
            <div className="w-16 h-16 bg-violet-600/10 border border-violet-500/20 text-violet-400 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
              💜
            </div>
            <h2 className="text-xl font-bold text-white mb-2">
              Tu lista de deseados está vacía
            </h2>
            <p className="text-gray-400 text-sm mb-6 max-w-sm mx-auto">
              Explorá nuestro catálogo y hacé clic en el corazón de cualquier juego para guardarlo acá.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white text-sm font-bold px-6 py-3 rounded-xl shadow-lg shadow-violet-600/20 transition-all duration-300"
            >
              ← Explorar Catálogo
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {wishlistGames.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
