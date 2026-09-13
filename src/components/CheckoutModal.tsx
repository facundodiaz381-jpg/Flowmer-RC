// Modal de compra simulada — se abre desde GameDetailPage al hacer click en "Comprar"
import { useState } from "react";
import { Link } from "react-router-dom";
import type { Game } from "../interfaces";
import { useAuth } from "../context/AuthContext";

interface CheckoutModalProps {
  game: Game;
  isOpen: boolean;
  onClose: () => void;
}

// Opciones de método de pago disponibles
const PAYMENT_METHODS = [
  { id: "card" as const, label: "Tarjeta", icon: "💳" },
  { id: "mercadopago" as const, label: "Mercado Pago", icon: "💙" },
  { id: "wallet" as const, label: "Billetera", icon: "👛" },
];

type PaymentMethod = "card" | "mercadopago" | "wallet";

export function CheckoutModal({ game, isOpen, onClose }: CheckoutModalProps) {
  const { currentUser } = useAuth();
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("card");
  const [success, setSuccess] = useState(false);

  // Si el modal está cerrado no renderiza nada
  if (!isOpen) return null;

  const isFree = game.price === 0;
  const priceLabel = isFree ? "GRATIS" : `$${game.price.toFixed(2)}`;

  function handleClose() {
    setSuccess(false);
    onClose();
  }

  function handlePurchase() {
    setSuccess(true);
  }

  // --- Vista: compra exitosa ---
  if (success) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="fixed inset-0 bg-black/70" onClick={handleClose} />
        <div className="relative w-full max-w-sm bg-[#0e0e18] border border-white/10 rounded-2xl shadow-xl z-10">
          <div className="p-8 text-center space-y-4">
            <div className="w-14 h-14 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto text-2xl">
              ✓
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-1">¡Listo!</h3>
              <p className="text-gray-400 text-sm">
                Compraste <strong className="text-white">{game.title}</strong> correctamente.
              </p>
            </div>
            <div className="bg-white/5 rounded-lg p-3 text-left space-y-1.5 text-xs">
              <div className="flex justify-between text-gray-400">
                <span>Comprador</span>
                <span className="text-white">{currentUser?.name}</span>
              </div>
              <div className="flex justify-between text-gray-400">
                <span>Total</span>
                <span className="text-white font-semibold">
                  {isFree ? "Gratis" : `$${game.price.toFixed(2)}`}
                </span>
              </div>
            </div>
            <button
              onClick={handleClose}
              className="w-full bg-violet-600 hover:bg-violet-500 text-white font-semibold py-2.5 rounded-lg transition-colors text-sm"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    );
  }

  // --- Vista principal: formulario de compra ---
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-black/70" onClick={handleClose} />
      <div className="relative w-full max-w-md bg-[#0e0e18] border border-white/10 rounded-2xl shadow-xl overflow-hidden z-10">

        {/* Header */}
        <div className="px-5 py-4 border-b border-white/5 flex items-center justify-between">
          <span className="text-base font-semibold text-white">Resumen del pedido</span>
          <button
            onClick={handleClose}
            className="text-gray-500 hover:text-white transition-colors p-1"
            aria-label="Cerrar"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-5 space-y-5">
          {/* Portada y datos del juego */}
          <div className="flex gap-3 items-center">
            <img
              src={game.image}
              alt={game.title}
              className="w-20 h-14 object-cover rounded-lg border border-white/10 shrink-0"
            />
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold text-white truncate">{game.title}</p>
              <p className="text-xs text-gray-400 mt-0.5">{game.genre}</p>
            </div>
            <span className="text-base font-bold text-white shrink-0">{priceLabel}</span>
          </div>

          {/* Métodos de pago — se ocultan si el juego es gratis */}
          {!isFree && (
            <div className="space-y-2">
              <p className="text-xs text-gray-400">Método de pago</p>
              <div className="grid grid-cols-3 gap-2">
                {PAYMENT_METHODS.map(({ id, label, icon }) => (
                  <button
                    key={id}
                    type="button"
                    onClick={() => setPaymentMethod(id)}
                    className={`p-3 rounded-lg border flex flex-col items-center gap-1.5 transition-colors ${
                      paymentMethod === id
                        ? "bg-violet-600/20 border-violet-500 text-white"
                        : "bg-white/5 border-white/10 text-gray-400 hover:text-white"
                    }`}
                  >
                    <span className="text-base">{icon}</span>
                    <span className="text-xs">{label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Total */}
          <div className="flex justify-between items-center py-3 border-t border-white/5 text-sm">
            <span className="text-gray-400">Total</span>
            <span className="text-base font-bold text-white">{priceLabel}</span>
          </div>

          {/* Si hay sesión activa muestra el botón, si no un aviso con link */}
          {currentUser ? (
            <button
              onClick={handlePurchase}
              className="w-full bg-violet-600 hover:bg-violet-500 text-white font-semibold py-3 rounded-lg transition-colors text-sm"
            >
              {isFree ? "Obtener gratis" : `Pagar ${priceLabel}`}
            </button>
          ) : (
            <div className="bg-white/5 border border-white/10 rounded-lg p-4 text-center space-y-2">
              <p className="text-sm text-gray-300">
                Necesitás{" "}
                <Link to="/login" onClick={handleClose} className="text-violet-400 hover:underline">
                  iniciar sesión
                </Link>{" "}
                para completar la compra.
              </p>
              <Link
                to="/register"
                onClick={handleClose}
                className="text-xs text-gray-500 hover:text-gray-400 underline block"
              >
                ¿No tenés cuenta? Registrate
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
