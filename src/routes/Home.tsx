/**
 * @desc : 홈 컴포넌트
 * @TODO:
 * - react-query로 현재 상영작 가져오기
 * - 전체화면에 배경 이미지 가져오기
 * - 슬라이드 애니메이션 AnimatePresence
 * - 슬라이드 알고리즘
 * - Box 클릭 시 영화 상세 보여주기(동적 라우팅)
 * - 리팩토링 (분할)
 * @FIXME:
 * - 슬라이드 빠르게 넘어가면 간격이 커지는 버그
 * - 슬라이드 끝까지 갔을 때 0으로 돌아가는 방식으로 변경(알고리즘)
 * - 슬라이드 버튼 생성 (배너에서 -> 슬라이더로 교체)
 */

import { useQuery } from "@tanstack/react-query";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import { useMatch, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getMovies, IGetMoviesResult } from "../api/api";
import { Banner } from "../components/home/Banner";
import { Slider } from "../components/home/Slider";
import { makeImagePath } from "../util/utils";

const Home = () => {
  const { data, isLoading } = useQuery<IGetMoviesResult>(
    ["movies", "nowPlaying"],
    getMovies
  );

  // Box 클릭 시 영화 상세 보여주기
  const navigate = useNavigate();
  const bigMovieMatch = useMatch("/movie/:movieId");

  const onOverlayClick = () => {
    navigate("/");
  };
  const { scrollY } = useScroll();

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
          <Banner data={data} />

          {/* 슬라이드 화면 */}
          <Slider data={data} />

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
                            clickedMovie.backdrop_path
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
