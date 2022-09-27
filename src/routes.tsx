import { Routes, Route } from "react-router-dom";

import { GreetingsPage } from "./pages/GreetingsPage";
import { RatePage } from "./pages/RatePage";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/interactive-rating-component" element={<RatePage />} />
      <Route
        path="/interactive-rating-component/greetings"
        element={<GreetingsPage />}
      />
    </Routes>
  );
}
