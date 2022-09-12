/**
 * @desc: 페이지별 Nav 헤더
 */

import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
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
          <Nav.Link onClick={() => navigate("/cart")}>Cart</Nav.Link>
          <Nav.Link onClick={() => navigate("/event")}>Event</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
