import React from "react";
import ReactDOM from "react-dom/client";
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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={lightMode}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
