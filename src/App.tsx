import { BrowserRouter } from "react-router-dom";

import { AuthProvider } from "./context/AuthContext";
import { GameProvider } from "./context/GameContext";
import { WishlistProvider } from "./context/WishlistContext"; 
import { AppRoutes } from "./routes/AppRoutes";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
        <AuthProvider>
          <WishlistProvider>
          <GameProvider>
            <Navbar />
            <AppRoutes />
          </GameProvider>
          </WishlistProvider>
        </AuthProvider>
    </BrowserRouter>
  );
}

export default App;