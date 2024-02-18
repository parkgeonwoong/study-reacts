/**
 * @desc : 라우팅 최상단 컴포넌트
 */

import { Outlet } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />

      <Outlet />
    </>
  );
}

export default App;
