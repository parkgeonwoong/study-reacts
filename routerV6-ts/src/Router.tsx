/**
 * @desc: BrowserRouter는 JSX로 연결됨
 * 이 파일에 Header Home, About 모임
 */

import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import About from "./screens/About";
import Home from "./screens/Home";
import Root from "./Root";
import NotFound from "./screens/NotFound";
import User from "./users/User";
import Followers from "./screens/Followers";

// 객체 형식 Router
const router = createBrowserRouter([
  {
    path: "/", // routes 컨테이너 라고 보자
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
        errorElement: <NotFound />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "users/:userId",
        element: <User />,
        children: [
          {
            path: "follower",
            element: <Followers />,
          },
        ],
      },
    ],
    errorElement: <NotFound />,
  },
]);

export default router;

/* BrowserRouter 사용      
<BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter> */
