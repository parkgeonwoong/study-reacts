/**
 * @desc: 페이지별 Nav 헤더
 */

import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const Header = () => {
  const navigate = useNavigate();

  // react-query 이용
  const result = useQuery(["작명"], () => {
    return axios
      .get(`https://codingapple1.github.io/userdata.json`)
      .then((result) => {
        return result.data;
      });
  });

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
        <Nav className="ms-auto">
          {result.isLoading && "loading..."}
          {result.error && "Error.."}
          {result.data && result.data.name}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
