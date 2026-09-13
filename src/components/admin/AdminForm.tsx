// Formulario de creación/edición estilizado
import type { ChangeEvent } from "react";
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
  os: string;
  processor: string;
  memory: string;
  graphics: string;
  storage: string;
};
type AdminFormProps = {
  form: FormData;
  editing: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onSave: () => void;
  onCancel: () => void;
};
export function AdminForm({
  form,
  editing,
  onChange,
  onSave,
  onCancel,
}: AdminFormProps) {
  const inputClass =
    "w-full rounded-lg bg-[#140b24] border border-[#2c1a4d] p-2.5 text-sm text-white placeholder-zinc-500 outline-none focus:border-purple-500 transition-all";
  return (
    <section className="mb-8 rounded-xl border border-[#2f1b54] bg-[#1a0f30] p-6 text-white shadow-xl">
      <h2 className="mb-4 text-xl font-bold text-purple-200">
        {editing ? "Editar juego" : "Nuevo juego"}
      </h2>
      <div className="grid gap-3 md:grid-cols-2">
        <input
          name="title"
          placeholder="Título"
          value={form.title}
          onChange={onChange}
          className={inputClass}
        />
        <input
          name="price"
          type="number"
          step="0.01"
          placeholder="Precio (USD)"
          value={form.price}
          onChange={onChange}
          className={inputClass}
        />
        <input
          name="category"
          placeholder="Categoría"
          value={form.category}
          onChange={onChange}
          className={inputClass}
        />
        <input
          name="genre"
          placeholder="Género"
          value={form.genre}
          onChange={onChange}
          className={inputClass}
        />
        <input
          name="developer"
          placeholder="Desarrollador"
          value={form.developer}
          onChange={onChange}
          className={inputClass}
        />
        <input
          name="image"
          placeholder="URL de imagen"
          value={form.image}
          onChange={onChange}
          className={inputClass}
        />
        <input
          name="trailerUrl"
          placeholder="URL del tráiler"
          value={form.trailerUrl}
          onChange={onChange}
          className={inputClass}
        />
        <input
          name="sound"
          placeholder="URL de música"
          value={form.sound}
          onChange={onChange}
          className={inputClass}
        />
        <input
          name="mprice"
          type="number"
          step="0.01"
          placeholder="Precio mensual"
          value={form.mprice}
          onChange={onChange}
          className={inputClass}
        />
        <input
          name="os"
          placeholder="Sistema operativo"
          value={form.os}
          onChange={onChange}
          className={inputClass}
        />
        <input
          name="processor"
          placeholder="Procesador"
          value={form.processor}
          onChange={onChange}
          className={inputClass}
        />
        <input
          name="memory"
          placeholder="Memoria RAM"
          value={form.memory}
          onChange={onChange}
          className={inputClass}
        />
        <input
          name="graphics"
          placeholder="Tarjeta gráfica"
          value={form.graphics}
          onChange={onChange}
          className={inputClass}
        />
        <input
          name="storage"
          placeholder="Almacenamiento"
          value={form.storage}
          onChange={onChange}
          className={inputClass}
        />
        <textarea
          name="description"
          placeholder="Descripción"
          value={form.description}
          onChange={onChange}
          className={`${inputClass} h-24 resize-none md:col-span-2`}
        />
      </div>
      <div className="mt-4 flex gap-2">
        <button
          onClick={onSave}
          className="rounded-lg bg-purple-600 px-5 py-2 text-sm font-semibold text-white transition-all hover:bg-purple-500 active:scale-95"
        >
          {editing ? "Guardar cambios" : "Agregar juego"}
        </button>
        {editing && (
          <button
            onClick={onCancel}
            className="rounded-lg bg-zinc-800 px-5 py-2 text-sm font-semibold text-zinc-300 transition-all hover:bg-zinc-700 active:scale-95"
          >
            Cancelar
          </button>
        )}
      </div>
    </section>
  );
}
