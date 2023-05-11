import { Routes, Route } from "react-router-dom";

import { LayoutComponent } from "./pages/LayoutComponent";
import { Home, HeroDetail } from "./pages/";
import { Text } from "./components/Text";
import { MarvelProvider } from "./context";

export function Router() {
  return (
    <LayoutComponent>
      <Routes>
        <Route
          path="/"
          element={
            <MarvelProvider>
              <Home />
            </MarvelProvider>
          }
        />

        <Route path="/hero/:id" element={<HeroDetail />} />
        <Route path="*" element={<Text>Page not Found</Text>} />
      </Routes>
    </LayoutComponent>
  );
}
