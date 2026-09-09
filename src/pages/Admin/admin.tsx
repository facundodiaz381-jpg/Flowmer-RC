// Placeholder de AdminDashboard listo para implementar el CRUD
import { useEffect, useState } from "react";
import type { ChangeEvent } from "react";
import { Link } from "react-router-dom";

import type { Game } from "../../types/game";
import { AdminForm } from "../../components/admin/AdminForm";
import { AdminGameList } from "../../components/admin/AdminGameList";

type FormData = {
  name: string;
  price: string;
  category: string;
  image: string;
  description: string;
  developer: string;
  requirements: string;
};

const emptyForm: FormData = {
  name: "",
  price: "",
  category: "",
  image: "",
  description: "",
  developer: "",
  requirements: "",
};

export function Admin() {
  const [games, setGames] = useState<Game[]>([]);
  const [editing, setEditing] = useState<Game | null>(null);
  const [form, setForm] = useState<FormData>(emptyForm);

  useEffect(() => {
    const saved = localStorage.getItem("games");
    if (saved) setGames(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("games", JSON.stringify(games));
  }, [games]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const saveGame = () => {
    if (!form.name || !form.category || !form.description) {
      alert("Completá los campos obligatorios");
      return;
    }

    const game: Game = {
      id: editing ? editing.id : Date.now(),
      ...form,
      price: Number(form.price),
    };

    if (editing) {
      setGames(games.map((g) => (g.id === game.id ? game : g)));
    } else {
      setGames([...games, game]);
    }

    setEditing(null);
    setForm(emptyForm);
  };

  const editGame = (game: Game) => {
    setEditing(game);
    setForm({
      ...game,
      price: String(game.price),
    });
  };

  const deleteGame = (id: number) => {
    if (confirm("¿Querés eliminar este juego?")) {
      setGames(games.filter((game) => game.id !== id));
    }
  };

  return (
    <main className="min-h-screen bg-[#0B0B10] p-6 text-white">
      <div className="max-w-4xl mx-auto mb-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-[#7B3FA6]">
          Panel de Administración
        </h1>
        <Link
          to="/"
          className="text-sm text-violet-400 hover:underline"
        >
          ← Volver a la Tienda
        </Link>
      </div>

      <div className="max-w-4xl mx-auto space-y-6">
        <AdminForm
          form={form}
          editing={editing !== null}
          onChange={handleChange}
          onSave={saveGame}
          onCancel={() => {
            setEditing(null);
            setForm(emptyForm);
          }}
        />

        <AdminGameList
          games={games}
          onEdit={editGame}
          onDelete={deleteGame}
        />
      </div>
    </main>
  );
}
