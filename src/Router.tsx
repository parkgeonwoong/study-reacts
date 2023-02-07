/**
 * @desc : 라우터 설정
 * - App
 *  - Home
 *  - Tv
 *  - Search
 */

import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./routes/Home";
import Search from "./routes/Search";
import Tv from "./routes/Tv";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "tv",
        element: <Tv />,
      },
      {
        path: "search",
        element: <Search />,
      },
    ],
  },
]);

export default router;
