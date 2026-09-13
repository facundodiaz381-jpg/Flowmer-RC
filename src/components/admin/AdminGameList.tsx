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
      <h2 className="mb-4 text-xl font-bold sm:text-2xl">
        Catálogo ({games.length})
      </h2>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {games.map((game) => (
          <div
            key={game.id}
            className="flex min-w-0 flex-col overflow-hidden rounded-xl border border-[#2b194c] bg-[#140b24] shadow-md"
          >
            <img
              src={game.image}
              alt={game.title}
              className="h-48 w-full object-cover sm:h-40"
            />

            <div className="flex-1 p-4">
              <p className="text-xs font-bold uppercase text-purple-400">
                {game.category}
              </p>

              <h3 className="mt-1 truncate font-bold">
                {game.title}
              </h3>

              <p className="mt-1 truncate text-xs text-zinc-400">
                {game.developer}
              </p>

              <p className="mt-1 text-xs text-zinc-500">
                👍 {game.upvotes} · 👎 {game.downvotes}
              </p>

              <p className="mt-2 font-bold text-yellow-400">
                {game.price === 0 ? "GRATIS" : `$${game.price}`}
              </p>
            </div>

            <div className="flex flex-col gap-2 border-t border-[#23153d] p-3 sm:flex-row">
              <button
                onClick={() => onEdit(game)}
                className="w-full rounded-lg bg-purple-600 px-3 py-2.5 text-sm transition-all hover:bg-purple-500 sm:flex-1"
              >
                Editar
              </button>

              <button
                onClick={() => onDelete(game.id)}
                className="w-full rounded-lg bg-red-600/20 px-3 py-2.5 text-sm text-red-400 transition-all hover:bg-red-600 hover:text-white sm:flex-1"
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
