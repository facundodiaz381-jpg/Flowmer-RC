import { Link } from "react-router-dom";
import type { Game } from "../interfaces";
import { useGame } from "../context/GameContext";
import { useAuth } from "../context/AuthContext";

type GameCardProps = {
  game: Game;
};

export function GameCard({ game }: GameCardProps) {
  const { wishlist, toggleWishlist } = useGame();
  const { currentUser } = useAuth();

  // Si está logueado usa su id, si es visitante usa 0 (modo invitado)
  const currentUserId = currentUser ? currentUser.id : 0;
  const favorite = wishlist.some(
    (w) => w.userId === currentUserId && w.gameId === game.id,
  );

  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault(); // Evita navegar al detalle al tocar el corazón
    toggleWishlist(currentUserId, game.id);
  };

  return (
    <Link
      to={`/game/${game.id}`}
      className="group bg-[#0e0e18] rounded-xl overflow-hidden border border-white/5 hover:border-violet-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/5 hover:-translate-y-1 cursor-pointer flex flex-col relative"
    >
      {/* Portada con Badge de Precio */}
      <div className="relative overflow-hidden aspect-video">
        <img
          src={game.image}
          alt={game.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e18] via-transparent to-transparent opacity-60" />
        
        {/* Botón de Favoritos (Corazón) */}
        <button 
          onClick={toggleFavorite}
          className="absolute top-3 left-3 p-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 hover:bg-black/60 transition-colors z-10 group/btn"
          title={favorite ? "Quitar de favoritos" : "Añadir a favoritos"}
        >
          <svg 
            className={`w-5 h-5 transition-all duration-300 ${favorite ? 'fill-red-500 text-red-500 scale-110' : 'fill-transparent text-white group-hover/btn:scale-110'}`}
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
          </svg>
        </button>
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

      {/* Información del juego */}
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

        {/* Footer de la tarjeta con votos y desarrollador */}
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
