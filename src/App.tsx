import { BrowserRouter } from "react-router-dom";

import { AuthProvider } from "./context/AuthContext";
import { GameProvider } from "./context/GameContext";
import { AppRoutes } from "./routes/AppRoutes";
import { Navbar } from "./components/Navbar";
import { WishlistProvider } from './context/WishlistContext';

function App() {
  return (
    <WishlistProvider>
    <BrowserRouter>
      <AuthProvider>
        <GameProvider>
          <Navbar />
          <AppRoutes />
        </GameProvider>
      </AuthProvider>
    </BrowserRouter>
</WishlistProvider>
  );
}

export default App;