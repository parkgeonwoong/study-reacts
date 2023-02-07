/**
 * @desc : 헤더 컴포넌트
 * - 네비게이션 역할
 */

import styled from "styled-components";

const Header = () => {
  return (
    <Nav>
      <Col>
        <Items>
          <Logo />
          <Item>Home</Item>
          <Item>Tv Shows</Item>
        </Items>
      </Col>

      <Col>
        <button>Search</button>
      </Col>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: black;
  font-size: 14px;
  padding: 20px 60px;
  color: white;
  height: 80px;
`;

const Col = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.svg`
  margin: 50px;
  width: 95px;
  height: 25px;
`;

const Items = styled.ul`
  display: flex;
  align-items: center;
`;

const Item = styled.li`
  margin-right: 20px;
`;

export default Header;
