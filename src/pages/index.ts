// Barrel de páginas — re-exporta todas las páginas de la app para simplificar los imports.
// Uso recomendado: import { HomePage } from '../pages'
// (AppRoutes importa directamente desde las subcarpetas, ambos enfoques son válidos)
export { HomePage } from "./Home";
export { GameDetailPage } from "./GameDetail";
export { LoginPage } from "./Login";
export { RegisterPage } from "./Register";
export { WishlistPage } from "./Wishlist";
export { AboutPage } from "./About";
export { NotFoundPage } from "./NotFound";
export { AdminDashboard } from "./Admin";
