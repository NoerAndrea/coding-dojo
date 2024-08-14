import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "../pages/Login";
import { LoginCreate } from "../pages/LoginCreate";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/signin",
    element: <LoginCreate />,
  },
]);

export function AppRoutes() {
  return <RouterProvider router={router} />;
}
