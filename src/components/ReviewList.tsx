// ReviewList: Lista de reseñas de la comunidad
import type { Review } from "../interfaces";
import { ReviewCard } from "./ReviewCard";
import { Link } from "react-router-dom";

type ReviewListProps = {
  reviews: Review[];
  isLoggedIn: boolean;
};

export function ReviewList({ reviews, isLoggedIn }: ReviewListProps) {
  return (
    <div className="bg-[#0e0e18] border border-white/5 rounded-2xl p-6 shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xs font-bold uppercase tracking-widest text-violet-400">
          Reseñas de los jugadores ({reviews.length})
        </h2>
      </div>

      {reviews.length === 0 ? (
        <div className="text-center py-8 bg-white/5 rounded-xl border border-white/5">
          <p className="text-gray-400 text-sm">
            Aún no hay reseñas publicadas para este título.
          </p>
          {!isLoggedIn && (
            <Link
              to="/login"
              className="text-violet-400 text-xs font-semibold hover:underline mt-2 inline-block"
            >
              Iniciá sesión para opinar
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
