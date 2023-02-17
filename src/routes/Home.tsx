/**
 * @desc : 홈 컴포넌트
 * @TODO:
 * - react-query로 현재 상영작 가져오기
 * - 전체화면에 배경 이미지 가져오기
 * - 슬라이드 애니메이션 AnimatePresence
 * - 슬라이드 알고리즘
 * - Box 클릭 시 영화 상세 보여주기(동적 라우팅)
 */

import { useQuery } from "@tanstack/react-query";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import { useState } from "react";
import { useLocation, useMatch, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getMovies, IGetMoviesResult } from "../api/api";
import { Banner } from "../components/home/Banner";
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
  const toggleLeaving = () => setLeaving((prev) => !prev);

  // FIXME: 슬라이드 빠르게 넘어가면 간격이 커지는 버그
  const increaseIndex = () => {
    if (data) {
      if (leaving) return;
      toggleLeaving();

      // FIXME: index를 계속 늘려주는 방식이 아니라, 끝까지 갔을 때 0으로 돌아가는 방식으로 변경
      const totalMovies = data?.results.length - 1;
      const maxIndex = Math.floor(totalMovies / offSet) - 1;
      setSlideIndex((prev: number) => (prev === maxIndex ? 0 : prev + 1));
    }
  };

  // Box 클릭 시 영화 상세 보여주기
  const navigate = useNavigate();
  const bigMovieMatch = useMatch("/movie/:movieId");

  const onBoxClick = (movieId: number) => {
    navigate(`/movie/${movieId}`);
  };

  const onOverlayClick = () => {
    navigate("/");
  };
  const { scrollY } = useScroll();

  const { state } = useLocation();
  // 클릭한 영화를 찾는 것
  const clickedMovie =
    bigMovieMatch?.params.movieId &&
    data?.results.find(
      (movie) => movie.id + "" === bigMovieMatch.params.movieId
    );

  return (
    <Wrapper>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          {/* 배너 화면 */}
          <Banner data={data} increaseIndex={increaseIndex} />

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
                <div>Left Click</div>
                {data?.results
                  .slice(1)
                  .slice(offSet * slideIndex, offSet * slideIndex + offSet)
                  .map((movie) => (
                    <Box
                      layoutId={movie.id + ""}
                      variants={boxVariants}
                      initial="start"
                      whileHover="hover"
                      onClick={() => onBoxClick(movie.id)}
                      key={movie.id}
                      bgPhoto={makeImagePath(movie.backdrop_path, "w500")}
                    >
                      <Info variants={InfoVariants}>
                        <h4>{movie.title}</h4>
                      </Info>
                    </Box>
                  ))}
                <div>Right Click</div>
              </Row>
            </AnimatePresence>
          </Slider>

          {/* 영화 상세 화면 */}
          <AnimatePresence>
            {bigMovieMatch && (
              <>
                <Overlay
                  onClick={onOverlayClick}
                  exit={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                />
                <DetailMovie
                  layoutId={bigMovieMatch?.params.movieId}
                  style={{ top: scrollY.get() + 100 }}
                >
                  {clickedMovie && (
                    <>
                      <DetailImage
                        style={{
                          backgroundImage: `linear-gradient(to top, black, transparent), url(${makeImagePath(
                            clickedMovie.backdrop_path,
                            "w500"
                          )})`,
                        }}
                      />
                      <DetailTitle>{clickedMovie.title}</DetailTitle>
                      <DetailOverview>{clickedMovie.overview}</DetailOverview>
                    </>
                  )}
                </DetailMovie>
              </>
            )}
          </AnimatePresence>
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

const Slider = styled.div`
  position: relative;
  top: -80px;
`;

const Row = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 5px;
  position: absolute;
  width: 100%;
  padding: 10px;
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
  cursor: pointer;

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

const Overlay = styled(motion.div)`
  position: fixed; // FIXME: absoulte 와 fixed 차이
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  opacity: 0;
`;

const DetailMovie = styled(motion.div)`
  position: absolute;
  left: 0;
  right: 0;
  width: 40vw;
  height: 80vh;
  margin: 0 auto;
  border-radius: 15px;
  overflow: hidden;
  background-color: ${(props) => props.theme.black.lighter};
`;

const DetailImage = styled.div`
  width: 100%;
  background-position: center center;
  background-size: cover;
  height: 400px;
`;

const DetailTitle = styled.div`
  color: ${(props) => props.theme.white.lighter};
  padding: 20px;
  font-size: 46px;
  position: relative;
  top: -80px;
`;

const DetailOverview = styled.div`
  color: ${(props) => props.theme.white.lighter};
  padding: 20px;
  font-size: 16px;
  top: -80px;
  position: relative;
`;
export default Home;
