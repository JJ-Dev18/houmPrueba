import React from "react";
import ReactDOM from "react-dom/client";
import NotificationProvider from "./context/NotificacionProvider";
import { ModeProvider } from "./context/ModeContext";
import "./index.css";
import Main from "./Main";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ModeProvider>
    <NotificationProvider>
    <Main />
    </NotificationProvider>
  </ModeProvider>
);
