/**
 * @desc : Slider의 클릭 시 상세 페이지
 */

import { AnimatePresence, motion, useScroll } from "framer-motion";
import { useMatch, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { makeImagePath } from "../../util/utils";
import { IHomeData } from "./types";

export const Detail = ({ data }: IHomeData) => {
  // Box 클릭 시 영화 상세 보여주기
  const navigate = useNavigate();
  const onOverlayClick = () => navigate("/");
  const detailMovieMatch = useMatch("/movie/:movieId");
  const { scrollY } = useScroll(); // Y위치가 어디든 중앙에 배치하기 위함

  // 클릭한 영화를 찾는 것
  const clickedMovie =
    detailMovieMatch?.params.movieId &&
    data?.results.find(
      (movie) => movie.id + "" === detailMovieMatch.params.movieId
    );

  return (
    <AnimatePresence>
      {detailMovieMatch && (
        <>
          {/* 검은화면 */}
          <Overlay
            onClick={onOverlayClick}
            exit={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          />

          {/* 상세화면 */}
          <DetailMovie
            layoutId={detailMovieMatch?.params.movieId}
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
                <DetailWrite>
                  <DetailTitle>{clickedMovie.title}</DetailTitle>
                  <DetailVote>{clickedMovie.vote_average} / 10</DetailVote>
                  <DetailOverview>{clickedMovie.overview}</DetailOverview>
                </DetailWrite>
              </>
            )}
          </DetailMovie>
        </>
      )}
    </AnimatePresence>
  );
};

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

const DetailWrite = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  top: -80px;
  padding: 20px;
`;

const DetailTitle = styled.div`
  color: ${(props) => props.theme.white.lighter};
  font-size: 46px;
  font-weight: 500;
`;

const DetailVote = styled.div`
  padding: 20px 0px;
  font-size: 14px;
  font-weight: 500;
  opacity: 0.8;
`;

const DetailOverview = styled.div`
  color: ${(props) => props.theme.white.lighter};
  font-size: 16px;
`;
