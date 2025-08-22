// src/theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#00bcd4",
    },
    background: {
      default: "#f5f7fa",
      paper: "#ffffff",
    },
    text: {
      primary: "#1a1a1a", 
      secondary: "#5f6368", 
    },
  },
  typography: {
    fontFamily: "Inter, Poppins, Arial, sans-serif",
    h1: { fontWeight: 700, fontSize: "2.5rem" },
    h2: { fontWeight: 600, fontSize: "2rem" },
    body1: { fontSize: "1rem", lineHeight: 1.6 },
  },
  shape: {
    borderRadius: 12, 
  },
});

export default theme;
