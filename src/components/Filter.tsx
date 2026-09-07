// Filter: Selector de filtros por categoría o género
type FilterProps = {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
};

export function Filter({
  categories,
  selectedCategory,
  onSelectCategory,
}: FilterProps) {
  return (
    <div className="flex gap-2 flex-wrap">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelectCategory(cat)}
          className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
            selectedCategory === cat
              ? "bg-violet-600 text-white shadow-lg shadow-violet-500/25"
              : "bg-white/5 text-gray-400 border border-white/5 hover:bg-white/10 hover:text-white"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
