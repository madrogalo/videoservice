"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "inherit",
  },
  shape: { borderRadius: 10 },
  palette: {
    primary: {
      main: "#000",
      dark: "#818181",
      light: "#D1D1D1",
    },
    secondary: { main: "#7754F6" },
  },
});

export default theme;
