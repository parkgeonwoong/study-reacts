/**
 * @desc : 네비게이션 역할
 * @TODO:
 * - SVG 애니메이션
 */

import { motion } from "framer-motion";
import { useState } from "react";
import { Link, useMatch } from "react-router-dom";
import styled from "styled-components";

// Variant 선언
const logoVariants = {
  start: { pathLength: 0, fill: "rgba(255, 255, 255, 0)" },
  end: {
    pathLength: 1,
    fill: "rgba(255, 255, 255, 1)",
  },
  active: {
    scale: 1.1,
    transition: {
      type: "spring",
    },
  },
};

const Header = () => {
  // 현재 라우트 확인
  const homeRoute = useMatch("");
  const tvRoute = useMatch("tv");

  // Search 상태
  const [searchOpen, setSearchOpen] = useState(false);
  const toggleSearch = () => setSearchOpen((prev) => !prev);

  return (
    <Nav>
      {/* 좌측 레이아웃 */}
      <Col>
        <Logo
          variants={logoVariants}
          whileHover="active"
          initial="start"
          animate="end"
          transition={{
            default: { duration: 1, type: "spring" },
            fill: { duration: 1, delay: 1 },
          }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          width="1024"
          height="276.742"
        >
          <motion.path d="M448 32H361.9l-1 1-127 127h92.1l1-1L453.8 32.3c-1.9-.2-3.8-.3-5.8-.3zm64 128V96c0-15.1-5.3-29.1-14-40l-104 104H512zM294.1 32H201.9l-1 1L73.9 160h92.1l1-1 127-127zM64 32C28.7 32 0 60.7 0 96v64H6.1l1-1 127-127H64zM512 192H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V192z" />
        </Logo>

        <Items>
          <Link to="">
            <Item>Home {homeRoute && <Circle layoutId="circle" />} </Item>
          </Link>
          <Link to="tv">
            <Item>Tv Shows {tvRoute && <Circle layoutId="circle" />}</Item>
          </Link>
        </Items>
      </Col>

      {/* 우측 레이아웃 */}
      <Col>
        <Search>
          <motion.svg
            onClick={toggleSearch}
            animate={{ x: searchOpen ? -180 : 0 }}
            whileHover={{ scale: 1.2, transition: { type: "spring" } }}
            transition={{ type: "linear" }}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            ></path>
          </motion.svg>

          <Input
            animate={{
              scaleX: searchOpen ? 1 : 0,
              opacity: searchOpen ? 1 : 0,
            }}
            transition={{ type: "linear" }}
            placeholder="Search for movie and Tv show"
          />
        </Search>
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
  background: linear-gradient(135deg, #0083ee, #00ceee);
  font-size: 14px;
  padding: 20px 60px;
  color: white;
  height: 80px;
`;

const Col = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled(motion.svg)`
  margin-right: 50px;
  width: 50px;
  height: 50px;
  fill: ${(props) => props.theme.white.lighter};
  path {
    stroke-width: 6px;
    stroke: white;
  }
`;

const Items = styled.ul`
  display: flex;
  align-items: center;
`;

const Item = styled.li`
  margin-right: 20px;
  color: ${(props) => props.theme.white.darker};
  transition: color 0.3s ease-in-out;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-weight: 700;
  /* font-size: 15px; */

  &:hover {
    color: ${(props) => props.theme.white.lighter};
  }
`;

const Circle = styled(motion.span)`
  position: absolute;
  width: 5px;
  height: 5px;
  border-radius: 5px;
  bottom: -5px;
  left: 0;
  right: 0;
  margin: 0 auto;
  background-color: ${(props) => props.theme.white.darker};
`;

const Search = styled.span`
  color: white;
  display: flex;
  align-items: center;
  position: relative;
  svg {
    cursor: pointer;
    height: 25px;
  }
`;

const Input = styled(motion.input)`
  transform-origin: right center;
  position: absolute;
  left: -150px;
  padding: 5px 10px;
  border: none;
  border-radius: 10px;
`;

export default Header;
