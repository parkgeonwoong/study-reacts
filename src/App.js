/* eslint-disable */

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { useState } from "react";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import data from "./data";
import Item from "./components/Item";
import url from "./assets/UrlSrc";
import Detail from "./routes/Detail";
import axios from "axios";

function App() {
  const [product, setProduct] = useState(data);
  const [urlSrc, setUrlSrc] = useState(url);
  const [btnCount, setBtnCount] = useState(2);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  // 객체 추가
  const addProduct = (add) => {
    const copyProduct = [...product, ...add];
    setProduct(copyProduct);
  };

  return (
    <div className="App">
      {/* Header */}
      <Navbar bg="light" variant="light">
        <Container>
          <Link to="/" className="home">
            WoongShop
          </Link>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate("/detail/0");
              }}
            >
              Detail
            </Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
            <Nav.Link onClick={() => navigate("/event")}>Event</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

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
          path="/detail/:id"
          element={<Detail product={product} url={urlSrc} />}
        />
        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>This member </div>} />
        </Route>

        <Route path="/event" element={<Event />}>
          <Route path="one" element={<div>First order Service</div>} />
          <Route path="two" element={<div>Birthday Event</div>} />
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

const Event = () => {
  return (
    <div>
      <h4>🔥 Today Event!!</h4>
      <button onClick={() => navigate("/event/one")}>First</button>
      <Outlet></Outlet>
    </div>
  );
};

export default App;
