import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";

import App from "./components/App";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

const theme = createTheme({

});

root.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
  </BrowserRouter>
);
