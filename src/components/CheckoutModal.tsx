import { useState } from "react";
import { Link } from "react-router-dom";
import type { Game } from "../interfaces";
import { useAuth } from "../context/AuthContext";

interface CheckoutModalProps {
  game: Game;
  isOpen: boolean;
  onClose: () => void;
}

const PAYMENT_METHODS = [
  { id: "card" as const, label: "Tarjeta", icon: "💳" },
  { id: "mercadopago" as const, label: "Mercado Pago", icon: "💙" },
  { id: "wallet" as const, label: "Billetera", icon: "💰" },
];

type PaymentMethod = "card" | "mercadopago" | "wallet";

export function CheckoutModal({ game, isOpen, onClose }: CheckoutModalProps) {
  const { currentUser } = useAuth();
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("card");
  const [status, setStatus] = useState<
    "idle" | "processing" | "success" | "need_login"
  >("idle");

  if (!isOpen) return null;

  const isFree = game.price === 0;
  const priceLabel = isFree ? "GRATIS" : `$${game.price.toFixed(2)}`;

  function handleClose() {
    setStatus("idle");
    onClose();
  }

  function handlePurchase() {
    if (!currentUser) return setStatus("need_login");
    setStatus("processing");
    setTimeout(() => setStatus("success"), 1500);
  }

  const btnClass = (active: boolean) =>
    `p-3 rounded-xl border flex flex-col items-center justify-center gap-1.5 transition-all ${
      active
        ? "bg-violet-600/20 border-violet-500 text-white shadow-md shadow-violet-600/20"
        : "bg-white/5 border-white/10 text-gray-400 hover:border-white/20 hover:text-white"
    }`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-300"
        onClick={status !== "processing" ? handleClose : undefined}
      />
      {/* Tarjeta del Modal */}
      <div className="relative w-full max-w-lg bg-[#0e0e18] border border-white/10 rounded-2xl shadow-2xl shadow-violet-950/50 overflow-hidden z-10 transition-all transform animate-in fade-in zoom-in-95 duration-200">
        {/* Header con gradiente sutil */}
        <div className="px-6 py-4 border-b border-white/5 flex items-center justify-between bg-gradient-to-r from-violet-950/40 via-transparent to-fuchsia-950/40">
          <div className="flex items-center gap-2">
            <span className="text-lg font-black text-white tracking-tight">
              {status === "success"
                ? "¡Compra Confirmada!"
                : status === "need_login"
                  ? "Iniciar Sesión"
                  : "Resumen del Pedido"}
            </span>
            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
              🔒 Seguro
            </span>
          </div>
          {status !== "processing" && (
            <button
              onClick={handleClose}
              className="text-gray-400 hover:text-white p-1 rounded-lg hover:bg-white/5 transition-colors"
              aria-label="Cerrar modal"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          )}
        </div>

        {/* Contenido según el estado */}
        {status === "need_login" ? (
          <div className="p-8 text-center space-y-6 animate-in fade-in duration-200">
            <div className="w-16 h-16 bg-gradient-to-br from-violet-600/20 to-fuchsia-600/20 border border-violet-500/30 text-violet-300 rounded-2xl flex items-center justify-center mx-auto text-3xl shadow-lg shadow-violet-600/10">
              👤
            </div>

            <div>
              <h3 className="text-xl font-black text-white mb-2">
                Iniciá sesión para continuar
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm max-w-sm mx-auto leading-relaxed">
                Para adquirir{" "}
                <strong className="text-violet-300">{game.title}</strong> y
                agregarlo a tu biblioteca permanente de FlowMer, necesitas
                acceder a tu cuenta.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <Link
                to="/login"
                onClick={handleClose}
                className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-violet-600/30 transition-all duration-300 text-sm"
              >
                <span>🔑</span>
                <span>Iniciar Sesión</span>
              </Link>

              <Link
                to="/register"
                onClick={handleClose}
                className="w-full inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-gray-300 hover:text-white font-semibold py-3 rounded-xl transition-all duration-200 text-xs sm:text-sm"
              >
                ¿No tienes cuenta? Registrate gratis
              </Link>

              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="text-xs text-gray-500 hover:text-gray-400 underline pt-2 block mx-auto transition-colors"
              >
                ← Volver al resumen del juego
              </button>
            </div>
          </div>
        ) : status === "success" ? (
          <div className="p-8 text-center space-y-5">
            <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto text-3xl animate-bounce">
              ✓
            </div>
            <div>
              <h3 className="text-xl font-black text-white mb-1">
                ¡Gracias por tu compra!
              </h3>
              <p className="text-gray-400 text-sm">
                Has adquirido{" "}
                <strong className="text-violet-300">{game.title}</strong>{" "}
                exitosamente.
              </p>
            </div>

            <div className="bg-white/5 border border-white/5 rounded-xl p-4 text-left space-y-2 text-xs text-gray-300">
              <div className="flex justify-between">
                <span className="text-gray-400">Comprador:</span>
                <span className="font-semibold text-white">
                  {currentUser?.name ?? "Usuario Invitado"}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Entrega:</span>
                <span className="text-emerald-400 font-semibold">
                  Activación Inmediata
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Total pagado:</span>
                <span className="font-bold text-white">
                  {isFree ? "Gratis" : `$${game.price.toFixed(2)}`}
                </span>
              </div>
            </div>

            <button
              onClick={handleClose}
              className="w-full bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white font-bold py-3 rounded-xl shadow-lg shadow-violet-600/30 transition-all duration-300 text-sm"
            >
              Listo, volver al juego
            </button>
          </div>
        ) : (
          <div className="p-6 space-y-6">
            {/* 1. Ficha del Producto */}
            <div className="flex gap-4 p-3.5 bg-white/5 border border-white/5 rounded-xl items-center">
              <img
                src={game.image}
                alt={game.title}
                className="w-24 h-16 object-cover rounded-lg border border-white/10 shrink-0"
              />
              <div className="min-w-0 flex-1">
                <h4 className="text-sm font-bold text-white truncate">
                  {game.title}
                </h4>
                <p className="text-xs text-gray-400 mt-0.5">{game.genre}</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-[10px] bg-violet-500/20 text-violet-300 px-1.5 py-0.5 rounded font-semibold">
                    Digital
                  </span>
                  <span className="text-[10px] text-gray-400">
                    Licencia de por vida
                  </span>
                </div>
              </div>
              <div className="text-right shrink-0">
                <span className="text-base font-black text-white">{priceLabel}</span>
              </div>
            </div>

            {/* 2. Métodos de Pago */}
            {!isFree && (
              <div className="space-y-2.5">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-400 block">
                  Seleccionar Método de Pago
                </label>
                <div className="grid grid-cols-3 gap-2.5">
                  {PAYMENT_METHODS.map(({ id, label, icon }) => (
                    <button
                      key={id}
                      type="button"
                      onClick={() => setPaymentMethod(id)}
                      className={btnClass(paymentMethod === id)}
                    >
                      <span className="text-lg">{icon}</span>
                      <span className="text-xs font-semibold">{label}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* 3. Desglose de Precios */}
            <div className="bg-white/5 border border-white/5 rounded-xl p-4 space-y-2 text-xs">
              <div className="flex justify-between text-gray-400">
                <span>Subtotal</span>
                <span className="text-white font-medium">
                  {isFree ? "$0.00" : `$${game.price.toFixed(2)}`}
                </span>
              </div>
              <div className="flex justify-between text-gray-400">
                <span>Impuestos digitales (incluidos)</span>
                <span className="text-white font-medium">$0.00</span>
              </div>
              <div className="pt-2 border-t border-white/10 flex justify-between text-sm font-bold">
                <span className="text-white">Total a pagar:</span>
                <span className="text-lg font-black text-violet-300">{priceLabel}</span>
              </div>
            </div>

            {/* 4. Botón de Acción */}
            <div className="space-y-2">
              <button
                onClick={handlePurchase}
                disabled={status === "processing"}
                className="w-full bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 disabled:opacity-50 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-violet-600/30 transition-all duration-300 flex items-center justify-center gap-2 text-sm"
              >
                {status === "processing" ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    <span>Procesando pago seguro...</span>
                  </>
                ) : (
                  <>
                    <span>{isFree ? "🎮" : "🛍️"}</span>
                    <span>{isFree ? "Obtener Juego Gratis" : `Pagar ${priceLabel} y Descargar`}</span>
                  </>
                )}
              </button>

              <p className="text-[11px] text-gray-500 text-center">
                Al confirmar, aceptas los Términos de Servicio y la Política de
                Reembolso de FlowMer.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
