import { createBrowserRouter, RouterProvider } from "react-router";
import { ThemeProvider } from "./components/ThemeContext";
import { AuthProvider } from "./contexts/AuthContext";
import { PurchaseProvider } from "./contexts/PurchaseContext";
import { UserDataProvider } from "./contexts/UserDataContext";
import { CardsPage } from "./components/CardsPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: CardsPage,
  },
  {
    path: "*",
    Component: CardsPage,
  },
]);

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <PurchaseProvider>
          <UserDataProvider>
            <RouterProvider router={router} />
          </UserDataProvider>
        </PurchaseProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}