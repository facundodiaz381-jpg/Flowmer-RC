// Formulario de creación/edición estilizado
import type { ChangeEvent } from "react";

type FormData = {
  name: string;
  price: string;
  category: string;
  image: string;
  description: string;
  developer: string;
  requirements: string;
};

type AdminFormProps = {
  form: FormData;
  editing: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onSave: () => void;
  onCancel: () => void;
};

export function AdminForm({ form, editing, onChange, onSave, onCancel }: AdminFormProps) {
  const inputClass = "w-full rounded-lg bg-[#140b24] border border-[#2c1a4d] p-2.5 text-sm text-white placeholder-zinc-500 outline-none focus:border-purple-500 transition-all";

  return (
    <section className="mb-8 rounded-xl bg-[#1a0f30] p-6 border border-[#2f1b54] text-white shadow-xl">
      <h2 className="mb-4 text-xl font-bold text-purple-200">{editing ? "Editar juego" : "Nuevo juego"}</h2>

      <div className="grid gap-3 md:grid-cols-2">
        <input name="name" placeholder="Nombre" value={form.name} onChange={onChange} className={inputClass} />
        <input name="price" type="number" placeholder="Precio ($)" value={form.price} onChange={onChange} className={inputClass} />
        <input name="category" placeholder="Categoría" value={form.category} onChange={onChange} className={inputClass} />
        <input name="developer" placeholder="Desarrollador" value={form.developer} onChange={onChange} className={inputClass} />
        <input name="image" placeholder="URL de imagen (https://...)" value={form.image} onChange={onChange} className={inputClass} />
        <input name="requirements" placeholder="Requisitos" value={form.requirements} onChange={onChange} className={inputClass} />
        <textarea name="description" placeholder="Descripción" value={form.description} onChange={onChange} className={`${inputClass} md:col-span-2 h-20 resize-none`} />
      </div>

      <div className="mt-4 flex gap-2">
        <button onClick={onSave} className="rounded-lg bg-purple-600 px-5 py-2 text-sm font-semibold text-white hover:bg-purple-500 active:scale-95 transition-all">
          {editing ? "Guardar cambios" : "Agregar juego"}
        </button>
        {editing && (
          <button onClick={onCancel} className="rounded-lg bg-zinc-800 px-5 py-2 text-sm font-semibold text-zinc-300 hover:bg-zinc-700 active:scale-95 transition-all">
            Cancelar
          </button>
        )}
      </div>
    </section>
  );
}