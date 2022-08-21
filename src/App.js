/* eslint-disable */

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useState } from "react";
import data from "./data";
import Item from "./components/Item";
import url from "./assets/UrlSrc";
import { Routes, Route, Link } from "react-router-dom";
import Detail from "./components/Detail";

function App() {
  const [product, setProduct] = useState(data);
  const [urlSrc, setUrlSrc] = useState(url);

  return (
    <div className="App">
      {/* Header */}
      <Navbar bg="light" variant="light">
        <Container>
          <Link to="/" className="home">
            WoongShop
          </Link>
          <Nav className="me-auto">
            <Nav.Link href="#features">Detail</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
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
      </Routes>
    </div>
  );
}

export default App;
