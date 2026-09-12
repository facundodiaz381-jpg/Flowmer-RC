import { BrowserRouter } from "react-router-dom";

import { AuthProvider } from "./context/AuthContext";
import { GameProvider } from "./context/GameContext";
import { WishlistProvider } from "./context/WishlistContext"; 
import { AppRoutes } from "./routes/AppRoutes";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      {}
      <WishlistProvider> 
        <AuthProvider>
          <GameProvider>
            <Navbar />
            <AppRoutes />
          </GameProvider>
        </AuthProvider>
      </WishlistProvider> 
    </BrowserRouter>
  );
}

export default App;