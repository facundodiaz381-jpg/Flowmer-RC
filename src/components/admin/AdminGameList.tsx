// Lista de catálogo en tarjetas estilo tienda moderna
import type { Game } from "../../types/game";

type AdminGameListProps = {
  games: Game[];
  onEdit: (game: Game) => void;
  onDelete: (id: number) => void;
};

// Imagen por defecto si falla la URL ingresada
const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=600&q=80";

export function AdminGameList({ games, onEdit, onDelete }: AdminGameListProps) {
  return (
    <section className="text-white">
      <h2 className="mb-4 text-xl font-bold tracking-tight">Catálogo ({games.length})</h2>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {games.map((game) => (
          <div key={game.id} className="group flex flex-col justify-between overflow-hidden rounded-xl bg-[#140b24] border border-[#2b194c] hover:border-purple-500/50 transition-all shadow-md">
            <div>
              <div className="relative h-40 w-full overflow-hidden bg-zinc-900">
                <img
                  src={game.image || FALLBACK_IMAGE}
                  alt={game.name}
                  onError={(e) => {
                    // Si falla el link de la imagen, muestra una por defecto
                    (e.currentTarget as HTMLImageElement).src = FALLBACK_IMAGE;
                  }}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-2 right-2 rounded-md bg-yellow-400 px-2 py-0.5 text-xs font-black text-black shadow">
                  {Number(game.price) === 0 ? "GRATIS" : `$${game.price}`}
                </span>
              </div>

              <div className="p-3.5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-purple-400">{game.category}</span>
                <h3 className="font-bold text-base truncate leading-tight mt-0.5">{game.name}</h3>
                <p className="text-xs text-zinc-400 mt-1 truncate">{game.developer}</p>
              </div>
            </div>

            <div className="flex border-t border-[#23153d] p-2.5 gap-2 bg-[#120a20]">
              <button
                onClick={() => onEdit(game)}
                className="flex-1 rounded-lg bg-purple-600/20 py-1.5 text-xs font-medium text-purple-300 hover:bg-purple-600 hover:text-white transition-all"
              >
                Editar
              </button>
              <button
                onClick={() => onDelete(game.id)}
                className="flex-1 rounded-lg bg-red-500/10 py-1.5 text-xs font-medium text-red-400 hover:bg-red-600 hover:text-white transition-all"
              >
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}