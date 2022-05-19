import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { ModeProvider } from "./context/ModeContext";
import "./index.css";
import Main from "./Main";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ModeProvider>
    <Main />
  </ModeProvider>
);
