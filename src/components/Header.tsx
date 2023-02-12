/**
 * @desc : 네비게이션 역할
 * @TODO:
 * - SVG 애니메이션
 * - 현재 라우트에 따라 layoutId 애니메이션
 * - scroll에 따른 애니메이션
 */

import { motion, useAnimation, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
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
      stiffness: 200,
    },
  },
};

const navVariants = {
  top: {
    background: "linear-gradient(135deg, #0077ee, #00eec6)",
  },
  scroll: {
    background: "linear-gradient(135deg, #e84393, #fd79a8)",
  },
};

const Header = () => {
  // TODO: 현재 라우트 확인에 따른 layoutId 애니메이션
  const homeRoute = useMatch("");
  const tvRoute = useMatch("tv");

  // Search 상태 && 애니메이션
  const [searchOpen, setSearchOpen] = useState(false);
  const inputAnimation = useAnimation();
  const toggleSearch = () => {
    if (searchOpen) {
      inputAnimation.start({
        scaleX: 0,
        opacity: 0,
      });
    } else {
      inputAnimation.start({ scaleX: 1, opacity: 1 });
    }
    setSearchOpen((prev) => !prev);
  };

  // TODO: scroll 배경색 애니메이션
  const { scrollY } = useScroll();
  const navAnimation = useAnimation();

  // motionValue에 따른 scroll
  useEffect(() => {
    scrollY.onChange(() =>
      scrollY.get() > 80
        ? navAnimation.start("scroll")
        : navAnimation.start("top")
    );
  }, [scrollY, navAnimation]);

  return (
    <Nav variants={navVariants} animate={navAnimation} initial="top">
      {/* 좌측 레이아웃 */}
      <Col>
        <Logo
          variants={logoVariants}
          whileHover="active"
          initial="start"
          animate="end"
          transition={{
            default: { duration: 1, type: "spring" },
            fill: { duration: 1, delay: 0.5 },
          }}
          height="91px"
          viewBox="0 0 91 91"
          width="91px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path d="M2.776,82.355c9.909,0.493,19.864,0.474,29.785,0.675c4.745,0.096,9.491,0.192,14.236,0.289   c4.266,0.088,8.71,0.533,12.947-0.112c5.219-0.794,7.587-4.099,8.733-8.277c5.639,2.646,11.217,5.551,16.513,8.796   c2.229,1.366,4.858-0.429,4.974-2.854c0.6-12.705,1.109-25.559,0.538-38.273c-0.119-2.633-2.789-4.175-5.129-2.943   c-4.98,2.626-10.757,4.983-15.659,8.17C69.66,46.556,69.6,45.282,69.527,44c-0.083-1.503-1.197-2.745-2.762-2.763   c-1.384-0.015-2.768-0.044-4.151-0.063c6.359-3.657,10.901-10.495,10.446-18.095c-0.318-5.311-3.085-10.052-7.46-13.059   C60.25,6.346,53.666,6.367,47.451,6.877c-3.608,0.297-4.903,3.281-4.257,5.765c-4.441,2.589-8.013,6.445-9.174,11.454   c-0.71-3.47-2.85-6.56-5.808-8.536c-4.253-2.841-9.419-2.818-14.321-2.421c-2.886,0.233-3.913,2.631-3.378,4.613   c-4.341,2.521-7.654,6.531-7.629,11.875c0.022,4.417,2.598,8.021,6.14,10.307c-1.642,0.024-3.28,0.068-4.91,0.159   C0.094,40.318,0,45.797,3.699,46.475C2.823,57.563,1.154,68.648,0.141,79.721C0.007,81.189,1.46,82.289,2.776,82.355z    M62.79,75.273c-1.683,3.313-6.137,2.772-9.281,2.717c-15.992-0.289-32.028-0.98-48.026-0.914   C5.749,66.959,5.75,56.777,6.235,46.671c9.681,0.56,19.595-0.043,29.273-0.036c9.551,0.007,19.103,0.03,28.654,0.112   c0.373,6.491,0.7,12.979,0.045,19.471C63.918,69.068,64.117,72.656,62.79,75.273z M83.681,47.916   c0.01,9.057,0.073,18.098-0.146,27.154c-4.364-2.729-13.597-8.698-13.898-8.805c0.276-4.265,0.338-8.479,0.262-12.711   C72.776,52.668,81.92,48.717,83.681,47.916z M39.096,26.115c0.532-4.416,3.713-7.801,7.6-10.17c0.595,0.11,1.255,0.127,1.984,0.01   c6.434-1.03,16.544-1.124,17.253,7.675c0.579,7.199-5.986,13.501-12.848,14.088C46.634,38.268,38.208,33.489,39.096,26.115z    M33.868,30.115c0.858,4.525,3.912,8.25,7.859,10.693c-2.073-0.043-4.146-0.083-6.219-0.128c-3.112-0.068-6.25-0.2-9.396-0.336   C29.905,38.096,32.828,34.394,33.868,30.115z M7.201,28.596c0.342-3.598,2.951-6.334,6.114-8.242   c0.466,0.084,0.982,0.096,1.553,0.004c5.275-0.837,13.589-0.764,13.738,6.58c0.114,5.564-4.898,10.26-10.234,10.735   C13.316,38.124,6.65,34.391,7.201,28.596z" />
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
            animate={inputAnimation}
            initial={{ scaleX: 0 }}
            transition={{ type: "linear" }}
            placeholder="Search Movie and Tv"
          />
        </Search>
      </Col>
    </Nav>
  );
};

const Nav = styled(motion.nav)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
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
  width: 60px;
  height: 55px;
  fill: ${(props) => props.theme.white.lighter};
  path {
    /* stroke-width: 1px; */
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
