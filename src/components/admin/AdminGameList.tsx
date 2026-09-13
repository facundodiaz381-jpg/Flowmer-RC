// Lista de catálogo en tarjetas estilo tienda moderna

import type { Game } from "../../interfaces";

type AdminGameListProps = {
  games: Game[];
  onEdit: (game: Game) => void;
  onDelete: (id: number) => void;
};

export function AdminGameList({
  games,
  onEdit,
  onDelete,
}: AdminGameListProps) {
  return (
    <section className="text-white">
      <h2 className="mb-4 text-xl font-bold">
        Catálogo ({games.length})
      </h2>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {games.map((game) => (
          <div
            key={game.id}
            className="overflow-hidden rounded-xl border border-[#2b194c] bg-[#140b24] shadow-md"
          >
            <img
              src={game.image}
              alt={game.title}
              className="h-40 w-full object-cover"
            />

            <div className="p-4">
              <p className="text-xs font-bold uppercase text-purple-400">
                {game.category}
              </p>

              <h3 className="mt-1 truncate font-bold">
                {game.title}
              </h3>

              <p className="mt-1 text-xs text-zinc-400">
                {game.developer}
              </p>

              <p className="mt-1 text-xs text-zinc-500">
                👍 {game.upvotes} · 👎 {game.downvotes}
              </p>

              <p className="mt-2 font-bold text-yellow-400">
                {game.price === 0 ? "GRATIS" : `$${game.price}`}
              </p>
            </div>

            <div className="flex gap-2 border-t border-[#23153d] p-3">
              <button
                onClick={() => onEdit(game)}
                className="flex-1 rounded-lg bg-purple-600 px-3 py-2 text-sm hover:bg-purple-500"
              >
                Editar
              </button>

              <button
                onClick={() => onDelete(game.id)}
                className="flex-1 rounded-lg bg-red-600/20 px-3 py-2 text-sm text-red-400 hover:bg-red-600 hover:text-white"
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
