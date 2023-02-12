/**
 * @desc : 네비게이션 역할
 * @ref : header 파일 분리
 * @TODO:
 * - SVG 애니메이션 (LeftIcon.tsx)
 * - 현재 라우트에 따라 layoutId 애니메이션 (LeftIcon.tsx)
 * - scroll에 따른 애니메이션
 */

import { motion, useAnimation, useScroll } from "framer-motion";
import { useEffect } from "react";
import styled from "styled-components";

import { LeftIcon } from "./header/LeftIcon";
import { RightIcon } from "./header/RightIcon";

// Variant 선언
const navVariants = {
  top: {
    background: "linear-gradient(135deg, #0077ee, #00eec6)",
  },
  scroll: {
    background: "linear-gradient(135deg, #e84393, #fd79a8)",
  },
};

const Header = () => {
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
      <LeftIcon />

      {/* 우측 레이아웃 */}
      <RightIcon />
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

export const Col = styled.div`
  display: flex;
  align-items: center;
`;

export default Header;
