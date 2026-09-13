import { BrowserRouter } from "react-router-dom";

import { AuthProvider } from "./context/AuthContext";
import { GameProvider } from "./context/GameContext";
import { AppRoutes } from "./routes/AppRoutes";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <GameProvider>
          <Navbar />
          <AppRoutes />
        </GameProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;