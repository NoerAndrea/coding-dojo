import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "../pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login></Login>,
  },
  {
    path: "/signin",
    element: <></>,
  },
]);

export function AppRoutes() {
  return <RouterProvider router={router} />;
}
