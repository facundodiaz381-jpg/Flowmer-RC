// HeroCarousel estilo Steam Store: Banner principal + Sidebar con miniaturas
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import type { Game } from "../interfaces";

type HeroCarouselProps = {
  games: Game[];
};

export function HeroCarousel({ games }: HeroCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const featuredGames = games.slice(0, 4);

  useEffect(() => {
    if (featuredGames.length === 0) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredGames.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [featuredGames.length]);

  if (featuredGames.length === 0) return null;

  const currentGame = featuredGames[currentIndex];

  return (
    <section className="relative overflow-hidden py-6 bg-[#080811]">
      <div className="absolute inset-0">
        <img
          src={currentGame.image}
          alt=""
          className="w-full h-full object-cover opacity-20 blur-xl scale-110 transition-all duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#06060b]/80 via-[#080811]/90 to-[#06060b]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <h2 className="text-xs font-bold uppercase tracking-widest text-violet-400 mb-3 flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-violet-500 animate-pulse" />
          Destacados y recomendados
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 rounded-2xl overflow-hidden border border-white/10 bg-[#0f0f1c] shadow-2xl shadow-violet-950/30">
          {/* Banner principal */}
          <Link
            to={`/game/${currentGame.id}`}
            className="lg:col-span-8 relative group overflow-hidden min-h-[350px] md:min-h-[420px] flex flex-col justify-end p-6 md:p-8 cursor-pointer"
          >
            <img
              src={currentGame.image}
              alt={currentGame.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b14] via-[#0b0b14]/50 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0b0b14]/80 via-transparent to-transparent" />
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[11px] font-bold tracking-wider uppercase text-violet-300 bg-violet-600/30 border border-violet-500/30 px-2.5 py-0.5 rounded-md">
                  {currentGame.category}
                </span>
                <span className="text-[11px] font-semibold text-gray-300 bg-black/40 px-2.5 py-0.5 rounded-md">
                  {currentGame.genre}
                </span>
              </div>
              <h3 className="text-3xl md:text-4xl font-black text-white mb-2 group-hover:text-violet-300 transition-colors">
                {currentGame.title}
              </h3>
              <p className="text-gray-300 text-sm max-w-xl line-clamp-2 mb-4 leading-relaxed">
                {currentGame.description}
              </p>
              <div className="flex items-center gap-4">
                <span className="inline-flex items-center gap-2 bg-violet-600 group-hover:bg-violet-500 text-white font-semibold text-sm px-5 py-2 rounded-xl shadow-lg shadow-violet-600/30 transition-all cursor-pointer">
                  Ver detalle
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </span>
                <span className="text-2xl font-black text-white">
                  {currentGame.price === 0
                    ? "GRATIS"
                    : `$${currentGame.price.toFixed(2)}`}
                </span>
              </div>
            </div>
          </Link>

          {/* Sidebar con miniaturas */}
          <div className="lg:col-span-4 bg-[#0a0a14] border-t lg:border-t-0 lg:border-l border-white/5 flex flex-col justify-between p-3 gap-2">
            <p className="text-xs font-semibold text-gray-400 px-3 py-1">
              Recomendados para vos
            </p>
            <div className="flex flex-col gap-2">
              {featuredGames.map((game, index) => {
                const isSelected = currentIndex === index;
                return (
                  <button
                    key={game.id}
                    onClick={() => setCurrentIndex(index)}
                    className={`flex items-center gap-3 p-2.5 rounded-xl text-left transition-all duration-300 relative overflow-hidden cursor-pointer ${
                      isSelected
                        ? "bg-white/10 border border-violet-500/40 shadow-lg shadow-violet-500/10"
                        : "bg-white/5 hover:bg-white/10 border border-transparent text-gray-400 hover:text-white"
                    }`}
                  >
                    {isSelected && (
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-violet-500 to-fuchsia-500" />
                    )}
                    <img
                      src={game.image}
                      alt={game.title}
                      className="w-16 h-12 rounded-lg object-cover flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <p
                        className={`text-sm font-bold truncate ${isSelected ? "text-white" : "text-gray-300"}`}
                      >
                        {game.title}
                      </p>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="text-[10px] text-violet-400 font-medium">
                          {game.category}
                        </span>
                        <span className="text-[11px] font-bold text-gray-200">
                          {game.price === 0
                            ? "GRATIS"
                            : `$${game.price.toFixed(2)}`}
                        </span>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
            <div className="px-3 pt-2 flex items-center justify-between text-xs text-gray-500 border-t border-white/5">
              <span>
                {currentIndex + 1} de {featuredGames.length}
              </span>
              <div className="flex gap-1">
                {featuredGames.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                      currentIndex === idx
                        ? "w-5 bg-violet-500"
                        : "w-1.5 bg-white/20"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
