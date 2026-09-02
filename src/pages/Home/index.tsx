// Página de inicio: HeroCarousel + SearchBar + Filter + GameList
import { useGame } from '../../context/GameContext'
import { HeroCarousel } from '../../components/Carousel'
import { GameList } from '../../components/GameList'
import { Filter } from '../../components/Filter'
import { SearchBar } from '../../components/SearchBar'

export function HomePage() {
  const { games, searchTerm, setSearchTerm, selectedCategory, setSelectedCategory } = useGame()

  const categories = ['Todos', ...Array.from(new Set(games.map((g) => g.category)))]

  const filtered = games.filter((game) => {
    const matchSearch = game.title.toLowerCase().includes(searchTerm.toLowerCase())
    const matchCategory = selectedCategory === 'Todos' || game.category === selectedCategory
    return matchSearch && matchCategory
  })

  return (
    <div className="min-h-screen bg-[#06060b] text-gray-100 pt-14">
      {/* Carrusel de Destacados */}
      <HeroCarousel games={games} />

      {/* Sección del Catálogo */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        {/* Header con buscador móvil y filtros */}
        <div className="flex flex-col gap-5 mb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-white">Explorar catálogo</h2>
              <p className="text-sm text-gray-500 mt-0.5">{filtered.length} juegos disponibles</p>
            </div>

            {/* Buscador móvil con SearchBar */}
            <div className="w-full sm:w-64 sm:hidden">
              <SearchBar value={searchTerm} onChange={setSearchTerm} />
            </div>
          </div>

          {/* Filtros por categoría con Filter */}
          <Filter
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
        </div>

        {/* Grilla de Juegos (GameList) */}
        <GameList games={filtered} />
      </section>
    </div>
  )
}
