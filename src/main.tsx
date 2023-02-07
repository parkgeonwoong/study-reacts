import React from "react";
import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import GlobalStyle from "./styles/Global";
import { RouterProvider } from "react-router-dom";
import router from "./Router";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RecoilRoot>
      <RouterProvider router={router} />
      <ThemeProvider theme={theme}>
        <GlobalStyle />
      </ThemeProvider>
    </RecoilRoot>
  </React.StrictMode>
);
