import { Routes, Route } from "react-router-dom";

import { GreetingsPage } from "./pages/GreetingsPage";
import { RatePage } from "./pages/RatePage";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<RatePage />} />
      <Route path="/greetings" element={<GreetingsPage />} />
    </Routes>
  );
}
