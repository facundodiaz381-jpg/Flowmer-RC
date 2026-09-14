// ReviewList: Lista de reseñas de la comunidad y formulario de nueva reseña
import { useState } from "react";
import type { FormEvent } from "react";
import type { Review, User } from "../interfaces";
import { ReviewCard } from "./ReviewCard";
import { Link } from "react-router-dom";

type ReviewListProps = {
  gameId: number;
  reviews: Review[];
  currentUser: User | null;
  onAddReview?: (review: Omit<Review, "id" | "date">) => void;
};

export function ReviewList({
  gameId,
  reviews,
  currentUser,
  onAddReview,
}: ReviewListProps) {
  const [comment, setComment] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!comment.trim() || !currentUser || !onAddReview) return;

    onAddReview({
      gameId,
      userId: currentUser.id,
      userName: currentUser.name,
      comment: comment.trim(),
    });

    setComment("");
  }

  return (
    <div className="bg-[#0e0e18] border border-white/5 rounded-2xl p-6 shadow-lg space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xs font-bold uppercase tracking-widest text-violet-400">
          Reseñas de la comunidad ({reviews.length})
        </h2>
      </div>

      {/* Formulario para usuarios logueados */}
      {currentUser && onAddReview && (
        <form onSubmit={handleSubmit} className="space-y-3 bg-white/5 border border-white/5 p-4 rounded-xl">
          <label className="block text-xs font-medium text-gray-300">
            Escribí tu opinión como <span className="text-violet-400 font-semibold">{currentUser.name}</span>:
          </label>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="¿Qué te pareció este juego? Compartí tu experiencia..."
            rows={3}
            className="w-full bg-[#07070e] border border-white/10 rounded-lg p-3 text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:border-violet-500 transition-colors resize-none"
            required
          />
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={!comment.trim()}
              className="bg-violet-600 hover:bg-violet-500 disabled:opacity-40 disabled:cursor-not-allowed text-white text-xs font-bold px-4 py-2 rounded-lg transition-all shadow-md shadow-violet-600/20"
            >
              Publicar reseña
            </button>
          </div>
        </form>
      )}

      {/* Listado de reseñas */}
      {reviews.length === 0 ? (
        <div className="text-center py-8 bg-white/5 rounded-xl border border-white/5">
          <p className="text-gray-400 text-sm">
            Aún no hay reseñas publicadas para este título.
          </p>
          {!currentUser && (
            <Link
              to="/login"
              className="text-violet-400 text-xs font-semibold hover:underline mt-2 inline-block"
            >
              Iniciá sesión para ser el primero en opinar
            </Link>
          )}
        </div>
      ) : (
        <div className="space-y-3">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      )}
    </div>
  );
}
