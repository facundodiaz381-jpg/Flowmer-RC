// ReviewCard: Tarjeta de reseña individual de un usuario
import type { Review } from '../../types'

type ReviewCardProps = {
  review: Review
}

export function ReviewCard({ review }: ReviewCardProps) {
  return (
    <div className="bg-white/5 border border-white/5 rounded-xl p-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-bold text-white">{review.userName}</span>
        <span className="text-xs text-gray-500">{review.date}</span>
      </div>
      <p className="text-gray-300 text-sm leading-relaxed">{review.comment}</p>
    </div>
  )
}
