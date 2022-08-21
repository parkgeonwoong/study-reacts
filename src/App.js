/* eslint-disable */

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useState } from "react";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import data from "./data";
import Item from "./components/Item";
import url from "./assets/UrlSrc";
import Detail from "./routes/Detail";

function App() {
  const [product, setProduct] = useState(data);
  const [urlSrc, setUrlSrc] = useState(url);

  const navigate = useNavigate();

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
                navigate("/detail");
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
            </>
          }
        />
        <Route path="/detail" element={<Detail />} />
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
