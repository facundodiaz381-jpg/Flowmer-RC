// Panel de administración

import { useState } from "react";
import type { ChangeEvent } from "react";
import { Link } from "react-router-dom";
import type { Game } from "../../interfaces";
import { useGame } from "../../context/GameContext";
import { AdminForm } from "../../components/admin/AdminForm";
import { AdminGameList } from "../../components/admin/AdminGameList";
import { Navbar } from "../../components/Navbar";
type FormData = {
  title: string;
  description: string;
  price: string;
  category: string;
  genre: string;
  image: string;
  trailerUrl: string;
  developer: string;
  sound: string;
  mprice: string;
  mrec: string;
  os: string;
  processor: string;
  memory: string;
  graphics: string;
  storage: string;
};

const emptyForm: FormData = {
  title: "",
  description: "",
  price: "",
  category: "",
  genre: "",
  image: "",
  trailerUrl: "",
  developer: "",
  sound: "",
  mprice: "",
  mrec: "",
  os: "",
  processor: "",
  memory: "",
  graphics: "",
  storage: "",
};

export function Admin() {
  
  const [editing, setEditing] = useState<Game | null>(null);
  const [form, setForm] = useState<FormData>(emptyForm);
  
  const { games, addGame, updateGame, deleteGame } = useGame();
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const saveGame = () => {
    if (!form.title || !form.category || !form.description) {
      alert("Completá los campos obligatorios");
      return;
    }

    const gameData = {
      title: form.title,
      description: form.description,
      rec: false,
      price: Number(form.price) || 0,
      category: form.category,
      genre: form.genre,
      image: form.image,
      trailerUrl: form.trailerUrl || undefined,
      developer: form.developer,
      sound: form.sound,
      mprice: Number(form.mprice) || 0,
      mrec: form.mrec || "Recomendado por la comunidad",
      systemRequirements: {
        os: form.os,
        processor: form.processor,
        memory: form.memory,
        graphics: form.graphics,
        storage: form.storage,
      },
    };

    if (editing) {
      updateGame({
        ...editing,
        ...gameData,
      });
    } else {
      addGame(gameData);
    }

    setEditing(null);
    setForm(emptyForm);
  };

  const editGame = (game: Game) => {
    setEditing(game);

    setForm({
      title: game.title,
      description: game.description,
      price: String(game.price),
      category: game.category,
      genre: game.genre,
      image: game.image,
      trailerUrl: game.trailerUrl ?? "",
      developer: game.developer,
      sound: game.sound,
      mprice: String(game.mprice),
      mrec: game.mrec || "",
      os: game.systemRequirements.os,
      processor: game.systemRequirements.processor,
      memory: game.systemRequirements.memory,
      graphics: game.systemRequirements.graphics,
      storage: game.systemRequirements.storage,
    });
  };

  const cancelEdit = () => {
    setEditing(null);
    setForm(emptyForm);
  };

 return (
  <>
    <Navbar />

    <main className="min-h-screen bg-[#0B0B10] pt-20 p-6 text-white">
      <div className="mx-auto mb-6 flex max-w-5xl items-center justify-between">
        <h1 className="text-3xl font-bold text-[#7B3FA6]">
          Panel de Administración
        </h1>

        <Link to="/" className="text-sm text-violet-400 hover:underline">
          ← Volver a la Tienda
        </Link>
      </div>

      <div className="mx-auto max-w-5xl space-y-6">
        <AdminForm
          form={form}
          editing={editing !== null}
          onChange={handleChange}
          onSave={saveGame}
          onCancel={cancelEdit}
        />
        

        <AdminGameList
          games={games}
          onEdit={editGame}
          onDelete={deleteGame}
        />
      </div>
    </main>
  </>
);}
