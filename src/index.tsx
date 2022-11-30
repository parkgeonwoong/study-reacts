import React from "react";
import ReactDOM from "react-dom";
import CreateDOM from "react-dom/client";
import App from "./App";

// Theme import
import { ThemeProvider } from "styled-components";

// Theme Object
const darkMode = {
  textColor: "whitesmoke",
  backgroundColor: "#111",
};

const lightMode = {
  textColor: "#111",
  backgroundColor: "whitesmoke",
};

const root = CreateDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={lightMode}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
