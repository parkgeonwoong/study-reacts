/**
 * @desc : 홈 컴포넌트
 * @TODO:
 * - react-query로 현재 상영작 가져오기
 * - 전체화면에 배경 이미지 가져오기
 * - 슬라이드 애니메이션 AnimatePresence
 * - 슬라이드 알고리즘
 */

import { useQuery } from "@tanstack/react-query";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";
import { getMovies, IGetMoviesResult } from "../api/api";
import { makeImagePath } from "../util/utils";

const rowVariants = {
  hidden: { x: window.outerWidth + 5 },
  visible: { x: 0 },
  exit: { x: -window.outerWidth - 5 },
};

const boxVariants = {
  start: {
    scale: 1,
  },
  hover: {
    scale: 1.2,
    y: -30,
    transition: {
      delay: 0.2,
    },
  },
};

const InfoVariants = {
  hover: {
    opacity: 0.7,
  },
};

const offSet = 6; // 슬라이드 6개씩 보여줌

const Home = () => {
  const { data, isLoading } = useQuery<IGetMoviesResult>(
    ["movies", "nowPlaying"],
    getMovies
  );

  const [slideIndex, setSlideIndex] = useState(0);
  const [leaving, setLeaving] = useState(false);
  // FIXME: 슬라이드 빠르게 넘어가면 간격이 커지는 버그
  const increaseIndex = () => {
    if (data) {
      if (leaving) return;
      toggleLeaving();

      // FIXME: index를 계속 늘려주는 방식이 아니라, 끝까지 갔을 때 0으로 돌아가는 방식으로 변경
      const totalMovies = data?.results.length - 1;
      const maxIndex = Math.floor(totalMovies / offSet) - 1;
      setSlideIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
    }
  };
  const toggleLeaving = () => setLeaving((prev) => !prev);

  return (
    <Wrapper>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          {/* 배너 화면 */}
          <Banner
            onClick={increaseIndex}
            bgPhoto={makeImagePath(data?.results[0].backdrop_path || "")}
          >
            <Title>{data?.results[0].title}</Title>
            <OverView>{data?.results[0].overview}</OverView>
          </Banner>

          {/* 슬라이드 화면 */}
          <Slider>
            <AnimatePresence initial={false} onExitComplete={toggleLeaving}>
              <Row
                variants={rowVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                key={slideIndex}
                transition={{ type: "tween", duration: 1.5 }}
              >
                {data?.results
                  .slice(1)
                  .slice(offSet * slideIndex, offSet * slideIndex + offSet)
                  .map((movie) => (
                    <Box
                      variants={boxVariants}
                      initial="start"
                      whileHover="hover"
                      key={movie.id}
                      bgPhoto={makeImagePath(movie.backdrop_path, "w500")}
                    >
                      <Info variants={InfoVariants}>
                        <h4>{movie.title}</h4>
                      </Info>
                    </Box>
                  ))}
              </Row>
            </AnimatePresence>
          </Slider>
        </>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  overflow-x: hidden;
  padding-bottom: 200px;
`;

const Loader = styled.div`
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Banner = styled.div<{ bgPhoto: string }>`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 60px;
  /* FIXME: 백그라운드 이미지 & 점점 검게 효과 */
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8)),
    url(${(props) => props.bgPhoto});
  background-size: cover;
`;

const Title = styled.h2`
  font-size: 68px;
  margin-bottom: 20px;
  font-weight: 500;
`;

const OverView = styled.p`
  font-size: 25px;
  width: 50%;
`;

const Slider = styled.div`
  position: relative;
  top: -80px;
`;

const Row = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 5px;
  position: absolute;
  width: 100%;
  padding: 60px;
`;

// FIXME: 스타일 컴포넌트에 상속받은 props 타입
const Box = styled(motion.div)<{ bgPhoto: string }>`
  background-color: white;
  height: 150px;
  font-size: 66px;
  background-image: url(${(props) => props.bgPhoto});
  background-size: cover;
  background-position: center center;
  border-radius: 10px;

  // FIXME: 변형의 원점을 바꾼다.
  &:first-child {
    transform-origin: center left;
  }

  &:last-child {
    transform-origin: center right;
  }
`;

const Info = styled(motion.div)`
  padding: 10px;
  background-color: ${(props) => props.theme.black.lighter};
  position: absolute;
  width: 100%;
  bottom: 0;
  border-radius: 0 0 10px 10px;
  opacity: 0;

  h4 {
    font-size: 12px;
    font-weight: 500;
    text-align: center;
  }
`;

export default Home;
