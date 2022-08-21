/* eslint-disable */

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import data from "./data";
import { useState } from "react";
import Item from "./components/Item";
import url from "./assets/UrlSrc";

function App() {
  const [product, setProduct] = useState(data);
  const [urlSrc, setUrlSrc] = useState(url);

  return (
    <div className="App">
      {/* Header */}
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* Main */}
      <div className="main-bg"></div>

      <div className="container">
        <div className="row">
          {product.map((item, index) => {
            return (
              <Item key={index} product={item} url={urlSrc} index={index} />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
