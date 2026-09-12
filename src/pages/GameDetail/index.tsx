// Página de detalle de un juego — Diseño Premium estilo Steam con tráiler de YouTube
import { useParams, Link } from "react-router-dom";
import { useGame } from "../../context/GameContext";
import { useAuth } from "../../context/AuthContext";
import { ReviewList } from "../../components/ReviewList";
import Sound from "../../components/admin/Sound";

export function GameDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { games, reviews, votes, addVote, toggleWishlist, wishlist } =
    useGame();
  const { currentUser } = useAuth();

  const game = games.find((g) => g.id === Number(id));

  if (!game) {
    return (
      <div className="min-h-screen bg-[#06060b] flex items-center justify-center pt-14">
        <div className="text-center">
          <p className="text-gray-400 text-xl">Juego no encontrado.</p>
          <Link to="/" className="text-violet-400 hover:underline mt-4 block">
            ← Volver a la Tienda
          </Link>
        </div>
      </div>
    );
  }

  const gameReviews = reviews.filter((r) => r.gameId === game.id);
  const userVote = currentUser
    ? votes.find((v) => v.userId === currentUser.id && v.gameId === game.id)
    : undefined;
  const inWishlist = currentUser
    ? wishlist.some((w) => w.userId === currentUser.id && w.gameId === game.id)
    : false;
  const totalVotes = game.upvotes + game.downvotes;
  const positivePercent =
    totalVotes > 0 ? Math.round((game.upvotes / totalVotes) * 100) : 0;

  function handleVote(type: "up" | "down"): void {
    if (!currentUser) return;
    addVote({ userId: currentUser.id, gameId: game!.id, type });
  }

  return (
    <div className="min-h-screen bg-[#06060b] text-gray-100 pt-14 relative overflow-hidden">
      {/* Luz de fondo ambiental (Ambient Glow) con la portada del juego */}
      <div className="absolute top-0 left-0 right-0 h-[500px] pointer-events-none overflow-hidden z-0">
        <img
          src={game.image}
          alt=""
          className="w-full h-full object-cover opacity-15 blur-3xl scale-125"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#06060b]/40 via-[#06060b]/80 to-[#06060b]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8">
        {/* Miga de pan / Navegación superior */}
        <div className="flex items-center gap-2 text-xs text-gray-500 mb-6">
          <Link to="/" className="hover:text-violet-400 transition-colors">
            Tienda
          </Link>
          <span>/</span>
          <span className="text-gray-400">{game.category}</span>
          <span>/</span>
          <span className="text-white font-medium truncate">{game.title}</span>
        </div>

        {/* Título y desarrollador principal */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-violet-300 bg-violet-600/30 border border-violet-500/30 px-2.5 py-0.5 rounded-md backdrop-blur-md">
              {game.category}
            </span>
            <span className="text-[11px] font-semibold text-gray-400 bg-white/5 border border-white/10 px-2.5 py-0.5 rounded-md">
              {game.genre}
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-white leading-tight">
            {game.title}
          </h1>
          <p className="text-gray-400 text-sm mt-1">
            Desarrollado por{" "}
            <span className="text-gray-200 font-semibold">
              {game.developer}
            </span>
          </p>
        </div>

        {/* Grilla Principal (12 columnas) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Columna Izquierda: Tráiler / Video + Descripción + Reseñas (7 u 8 columnas) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Tráiler de Video en HD estilo Steam / YouTube */}
            {game.trailerUrl ? (
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-violet-950/40 bg-black aspect-video group">
                <iframe
                  src={game.trailerUrl}
                  title={`Tráiler de ${game.title}`}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : (
              <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#0e0e18]">
                <img
                  src={game.image}
                  alt={game.title}
                  className="w-full h-auto object-cover"
                />
              </div>
            )}

            {/* Descripción del juego */}
            <div className="bg-[#0e0e18] border border-white/5 rounded-2xl p-6 shadow-lg">
              <h2 className="text-xs font-bold uppercase tracking-widest text-violet-400 mb-3 flex items-center gap-2">
                Acerca de este juego
              </h2>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                {game.description}
              </p>
            </div>
             <Sound game={game} />
            {/* Requisitos del sistema */}
            <div className="bg-[#0e0e18] border border-white/5 rounded-2xl p-6 shadow-lg">
              <h2 className="text-xs font-bold uppercase tracking-widest text-violet-400 mb-4">
                Requisitos del sistema
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {Object.entries(game.systemRequirements).map(([key, value]) => (
                  <div
                    key={key}
                    className="bg-white/5 border border-white/5 rounded-xl p-3.5"
                  >
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block mb-1">
                      {key}
                    </span>
                    <span className="text-gray-200 text-xs md:text-sm font-medium">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Reseñas de la comunidad con ReviewList */}
            <ReviewList
              reviews={gameReviews}
              isLoggedIn={Boolean(currentUser)}
            />
          </div>

          {/* Columna Derecha: Portada limpia + Comprar / Wishlist + Votos (5 columnas) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Portada Oficial sin cortes */}
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-violet-950/30 bg-[#0f0f1c]">
              <img
                src={game.image}
                alt={game.title}
                className="w-full h-auto object-cover"
              />

              {/* Caja de Compra / Precios */}
              <div className="p-6 bg-[#0a0a14] border-t border-white/5 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-gray-400">
                    Precio oficial
                  </span>
                  <span className="text-3xl font-black text-white">
                    {game.price === 0 ? (
                      <span className="text-emerald-400">GRATIS</span>
                    ) : (
                      `$${game.price.toFixed(2)}`
                    )}
                  </span>
                </div>

                {/* Botón Comprar / Wishlist */}
                <div className="space-y-2">
                  <button
                    onClick={() =>
                      alert(
                        `¡Gracias por tu interés en ${game.title}! Pronto se habilitará la pasarela de pago.`,
                      )
                    }
                    className="w-full bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white font-bold py-3 rounded-xl shadow-lg shadow-violet-600/30 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z"
                      />
                    </svg>
                    Comprar ahora
                  </button>

                  {currentUser ? (
                    <button
                      onClick={() => toggleWishlist(currentUser.id, game.id)}
                      className={`w-full py-2.5 rounded-xl border text-sm font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${
                        inWishlist
                          ? "bg-violet-600/20 border-violet-500/50 text-violet-300 hover:bg-violet-600/30"
                          : "bg-white/5 border-white/10 text-gray-300 hover:border-violet-500/50 hover:bg-white/10"
                      }`}
                    >
                      {inWishlist
                        ? "♥ Guardado en wishlist"
                        : "♡ Agregar a wishlist"}
                    </button>
                  ) : (
                    <Link
                      to="/login"
                      className="block text-center w-full py-2.5 rounded-xl border border-white/10 bg-white/5 text-gray-300 hover:text-white text-sm font-semibold transition-colors"
                    >
                      Iniciá sesión para guardar en wishlist
                    </Link>
                  )}
                </div>
              </div>
            </div>

            {/* Valoración de la Comunidad */}
            <div className="bg-[#0e0e18] border border-white/5 rounded-2xl p-6 shadow-lg space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-bold uppercase tracking-widest text-violet-400">
                  Valoración
                </h3>
                <span className="text-xs font-bold text-green-400 bg-green-500/10 border border-green-500/20 px-2.5 py-0.5 rounded-md">
                  {positivePercent}% Positivo
                </span>
              </div>

              {/* Barra de estado visual */}
              <div className="w-full bg-white/5 rounded-full h-2 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-green-500 to-emerald-400 rounded-full transition-all duration-500"
                  style={{ width: `${positivePercent}%` }}
                />
              </div>

              {/* Botones de Voto (+ / -) */}
              <div className="flex items-center gap-3 pt-2">
                <button
                  onClick={() => handleVote("up")}
                  disabled={!currentUser}
                  className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border text-sm font-bold transition-all duration-200 ${
                    userVote?.type === "up"
                      ? "bg-green-600/20 border-green-500/50 text-green-300"
                      : "bg-white/5 border-white/10 text-gray-400 hover:border-green-500/50 hover:text-green-300"
                  } disabled:opacity-40 disabled:cursor-not-allowed`}
                >
                  👍 <span>{game.upvotes.toLocaleString()}</span>
                </button>
                <button
                  onClick={() => handleVote("down")}
                  disabled={!currentUser}
                  className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border text-sm font-bold transition-all duration-200 ${
                    userVote?.type === "down"
                      ? "bg-red-600/20 border-red-500/50 text-red-300"
                      : "bg-white/5 border-white/10 text-gray-400 hover:border-red-500/50 hover:text-red-300"
                  } disabled:opacity-40 disabled:cursor-not-allowed`}
                >
                  👎 <span>{game.downvotes.toLocaleString()}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
