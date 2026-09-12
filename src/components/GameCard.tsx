
import { Link } from "react-router-dom";
import type { Game } from "../interfaces/products"; 
import { useWishlist } from "../hooks/useWishlist"; 

type GameCardProps = {
  game: Game;
};

export function GameCard({ game }: GameCardProps) {
  const { isInWishlist, toggleWishlist } = useWishlist();
  const isFavorite = isInWishlist(game.id);

  const handleWishlistClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(game.id);
  };

  return (
    <Link
      to={`/game/${game.id}`}
      className="group bg-[#0e0e18] rounded-xl overflow-hidden border border-white/5 hover:border-violet-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/5 hover:-translate-y-1 cursor-pointer flex flex-col"
    >
      {}
      <div className="relative overflow-hidden aspect-video">
        <img
          src={game.image}
          alt={game.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e18] via-transparent to-transparent opacity-60" />

        {}
        <button
          type="button"
          onClick={handleWishlistClick}
          className={`absolute top-3 left-3 z-10 p-2 rounded-lg backdrop-blur-sm border transition-all duration-200 ${
            isFavorite
              ? "bg-violet-600/80 border-violet-400/50 text-white shadow-lg shadow-violet-500/30 scale-105"
              : "bg-black/60 border-white/10 text-gray-400 hover:text-white hover:border-white/30"
          }`}
          title={isFavorite ? "Quitar de la Wishlist" : "Añadir a la Wishlist"}
        >
          <span className="text-xs leading-none">{isFavorite ? "💜" : "🤍"}</span>
        </button>

        {}
        <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm border border-white/10 px-3 py-1 rounded-lg">
          <span className="text-sm font-bold text-white">
            {game.price === 0 ? (
              <span className="text-emerald-400">GRATIS</span>
            ) : (
              `$${game.price.toFixed(2)}`
            )}
          </span>
        </div>
      </div>

      {}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[11px] font-semibold tracking-wider uppercase text-violet-400 bg-violet-500/10 px-2 py-0.5 rounded">
              {game.category}
            </span>
            <span className="text-[11px] text-gray-600">·</span>
            <span className="text-[11px] text-gray-500">{game.genre}</span>
          </div>

          <h3 className="text-base font-bold text-white group-hover:text-violet-400 transition-colors duration-200 line-clamp-1">
            {game.title}
          </h3>

          <p className="text-gray-500 text-sm mt-1.5 line-clamp-2 leading-relaxed">
            {game.description}
          </p>
        </div>

        {}
        <div className="flex items-center justify-between mt-4 pt-3 border-t border-white/5 text-xs">
          <span className="text-gray-600 truncate max-w-[140px]">
            {game.developer}
          </span>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 text-green-500">
              👍 {game.upvotes}
            </span>
            <span className="flex items-center gap-1 text-red-500/70">
              👎 {game.downvotes}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}