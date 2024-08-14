import { CssBaseline } from "@mui/material";
import { AppRoutes } from "./routes/AppRoutes";
import { SnackbarProvider } from "notistack"; // npm install notistack

export default function App() {
  return (
    <SnackbarProvider>
      <CssBaseline />
      <AppRoutes />
    </SnackbarProvider>
  );
}
