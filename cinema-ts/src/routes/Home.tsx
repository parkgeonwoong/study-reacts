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
import styled from "styled-components";
import {
  getMovies,
  getUpcoming,
  IGetMoviesResult,
  LIST_TYPE,
} from "../api/api";
import { Banner } from "../components/home/Banner";
import { Detail } from "../components/home/Detail";
import { Slider } from "../components/home/Slider";

const Home = () => {
  const { data: nowPlaying, isLoading } = useQuery<IGetMoviesResult>(
    [LIST_TYPE[0], "nowPlaying"],
    getMovies
  );

  const { data: upComingPlaying } = useQuery<IGetMoviesResult>(
    [LIST_TYPE[1], "upcoming"],
    getUpcoming
  );

  return (
    <Wrapper>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          {/* 배너 화면 */}
          <Banner data={nowPlaying} />

          {/* 슬라이드 화면 */}
          <SliderArea>
            <Slider
              data={nowPlaying}
              title="Now Playing"
              listType={LIST_TYPE[0]}
            />

            <Slider
              data={upComingPlaying}
              title="Upcoming"
              listType={LIST_TYPE[1]}
            />
          </SliderArea>

          {/* 영화 상세 화면 */}
          {/* <Detail data={nowPlaying} /> */}
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

const SliderArea = styled.div`
  position: relative;
`;

export default Home;
