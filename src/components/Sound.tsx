import type { Game } from "../interfaces/products";

type GameCardProps = {
  game: Game;
};

export function Sound({ game }: GameCardProps) {
  if (!game || !game.sound) return null;

  const price = typeof game.mprice === "number" ? game.mprice : 0;
  const mrec = game.mrec || "Recomendado por FlowMer";
  const developer = game.developer || "el desarrollador";

  return (
    <a
      href={game.sound}
      target="_blank"
      rel="noopener noreferrer"
      className="group bg-[#0e0e18] rounded-xl overflow-hidden border border-white/5 hover:border-violet-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/5 hover:-translate-y-1 cursor-pointer flex flex-col w-full"
    >
      {/* Portada */}
      <div className="relative w-full overflow-hidden">
        <img
          src={game.image}
          alt={game.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e18] via-transparent to-transparent opacity-60" />

        {/* Precio */}
        <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm border border-white/10 px-3 py-1 rounded-lg">
          <span className="text-sm font-bold text-white">
            {price === 0 ? (
              <span className="text-emerald-400">GRATIS</span>
            ) : (
              `$${price.toFixed(2)}`
            )}
          </span>
        </div>
      </div>

      {/* soundtrack etiqueta */}
      <div className="flex justify-center bg-pink-600/80 backdrop-blur-sm border border-white/10 px-3 py-1">
        <span className="text-white text-xs font-bold uppercase tracking-wider">
          SoundTrack
        </span>
      </div>

      {/* Información */}
      <div className="p-3 sm:p-4 flex-1 flex flex-col justify-between">
        <div className="space-y-2">
          <p className="text-sm sm:text-base text-white break-words">
            Escucha la banda sonora oficial de {developer}.
          </p>
          <div className="bg-violet-600/30 border border-violet-500/30 px-3 py-1.5 rounded-xl">
            <p className="text-xs text-violet-200">
              <span className="font-semibold text-white">FlowMer te recomienda:</span> {mrec}
            </p>
          </div>
        </div>
      </div>
    </a>
  );
}

export default Sound;