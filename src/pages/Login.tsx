import {
  Avatar,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  Stack,
  TextField,
  Typography,
  Link,
  Box,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { enqueueSnackbar } from "notistack";
import { isEmailValid } from "../config/interfaces/utils/validateEmail";
import { isPasswordValid } from "../config/interfaces/utils/validatePassword";
import { Link as RouterLink } from "react-router-dom";

export function Login() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const email = event.currentTarget.email.value;
    const password = event.currentTarget.password.value;

    if (!isEmailValid(email) || !isPasswordValid(password)) {
      enqueueSnackbar("Credenciais inválidas", {
        variant: "error",
      });
      return;
    }

    enqueueSnackbar("Usuário logado com sucesso!", {
      variant: "success",
    });
  };

  return (
    <Container component="main">
      <Stack>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Box
              sx={{
                marginTop: 8,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <img
                src="https://i.pinimg.com/originals/c3/70/c5/c370c515b2af5108750fb0f71b267450.jpg"
                alt="Login illustration"
                style={{ width: "80%", height: "80%", objectFit: "cover" }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box
              sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                height: "100%",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{ mt: 1, width: "100%" }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  ENTRAR
                </Button>
                <Grid container justifyContent="center" sx={{ mt: 2 }}>
                  <Grid item>
                    <Link component={RouterLink} to="/signin" variant="body2">
                      {"Não tem uma conta? Cadastre-se"}
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Stack>
    </Container>
  );
}
