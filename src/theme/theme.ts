import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#000000ff", // Roxo principal
    },
    secondary: {
      main: "#111111", // Preto para destaques/boxes
    },
    background: {
      default: "#ffffff", // Fundo branco
      paper: "#f5f5f5", // Leve cinza para contrastes sutis
    },
    text: {
      primary: "#111111", // Preto
      secondary: "#666666", // Cinza leve para parágrafos
    },
  },
  typography: {
    fontFamily: `'Inter', sans-serif`,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        a: {
          textDecoration: "none",
          color: "inherit", // opcional, para usar cor herdada
          '&:hover': {
          textDecoration: 'underline',
        },
        },
      },
    },
  },
});

export default theme;
