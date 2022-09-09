/* eslint-disable */

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Button } from "react-bootstrap";
import { createContext, useState } from "react";
import { Routes, Route, useNavigate, Outlet } from "react-router-dom";
import axios from "axios";

import data from "./data";
import url from "./assets/UrlSrc";

import Header from "./components/Header";
import Item from "./components/Item";
import Detail from "./routes/Detail";
import Cart from "./routes/Cart";

// Context API 사용해보기
export const Context1 = createContext();

function App() {
  const [product, setProduct] = useState(data);
  const [stock] = useState([10, 11, 12]);
  const [urlSrc, setUrlSrc] = useState(url);
  const [btnCount, setBtnCount] = useState(2);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  // 상품(객체) 추가
  const addProduct = (add) => {
    const copyProduct = [...product, ...add];
    setProduct(copyProduct);
  };

  return (
    <div className="App">
      {/* Header */}
      <Header />

      {/* Main */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="main-bg"></div>

              <div className="container">
                <div className="row">
                  {product.map((item, index) => {
                    return (
                      <Item
                        key={index}
                        product={item}
                        url={urlSrc}
                        index={index}
                      />
                    );
                  })}
                </div>
              </div>

              <div style={{ display: "flex", justifyContent: "center" }}>
                {btnCount < 4 ? (
                  <Button
                    variant="primary"
                    onClick={() => {
                      loading ? alert("Loading!") : null;
                      // Ajax 사용
                      axios
                        .get(
                          `https://codingapple1.github.io/shop/data${btnCount}.json`
                        )
                        .then((result) => {
                          addProduct(result.data);
                          setLoading(false);
                        })
                        .catch(() => {
                          console.log("Failed server");
                        });

                      setBtnCount(btnCount + 1);
                    }}
                  >
                    더보기
                  </Button>
                ) : null}
              </div>
            </>
          }
        />
        <Route
          // 라우트 파라미터 사용
          path="/detail/:id"
          element={
            <Context1.Provider value={{ stock }}>
              <Detail product={product} url={urlSrc} />
            </Context1.Provider>
          }
        />

        {/* Redux 실험 */}
        <Route path="/cart" element={<Cart />} />

        {/* 라우트 nesting 해보기 */}
        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>This member </div>} />
        </Route>

        {/* 404 Page */}
        <Route path="*" element={<div>Not found</div>} />
      </Routes>
    </div>
  );
}

function About() {
  return (
    <div>
      <h4>Company About</h4>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
