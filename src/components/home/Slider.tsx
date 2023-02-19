/**
 * @desc : home의 슬라이드 화면
 */

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { makeImagePath } from "../../util/utils";
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from "react-icons/io";
import { IHomeData } from "./types";

// Variant 선언
const rowVariants = {
  hidden: (isBack: boolean) => ({
    x: isBack ? -window.outerWidth - 5 : window.outerWidth + 5,
  }),
  visible: { x: 0 },
  exit: (isBack: boolean) => ({
    x: isBack ? window.outerWidth + 5 : -window.outerWidth - 5,
  }),
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

export const Slider = ({ data }: IHomeData) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const toggleLeaving = () => setLeaving((prev) => !prev);
  const [back, setBack] = useState(false);

  // FIXME: 슬라이드 빠르게 넘어가면 간격이 커지는 버그
  const flipIndex = (flip: boolean) => {
    if (data) {
      if (leaving) return;
      toggleLeaving();

      // FIXME: index를 계속 늘려주는 방식이 아니라, 끝까지 갔을 때 0으로 돌아가는 방식으로 변경
      const totalMovies = data?.results.length - 1;
      const maxIndex = Math.floor(totalMovies / offSet) - 1;

      // FIXME: 배너가 아닌 버튼에 따른 좌우 슬라이드 인덱스 계산
      if (flip) {
        return (
          setBack(false),
          setSlideIndex((prev: number) => (prev === maxIndex ? 0 : prev + 1))
        );
      }

      if (!flip) {
        return (
          setBack(true),
          setSlideIndex((prev: number) => (prev === 0 ? maxIndex : prev - 1))
        );
      }
    }
  };

  const navigate = useNavigate();
  const onBoxClick = (movieId: number) => {
    navigate(`/movie/${movieId}`);
  };

  return (
    <SliderWrapper>
      {/* <div>Hello world</div> */}
      <AnimatePresence
        initial={false}
        onExitComplete={toggleLeaving}
        custom={back}
      >
        <Row
          custom={back}
          variants={rowVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          key={slideIndex}
          transition={{ type: "tween", duration: 1.5 }}
        >
          {/* FIXME: 슬라이드를 이모티콘에 의해 움직임 */}
          <button onClick={() => flipIndex(false)}>
            <IoMdArrowRoundBack className="arrow" />
          </button>
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
          <button onClick={() => flipIndex(true)}>
            <IoMdArrowRoundForward className="arrow" />
          </button>
        </Row>
      </AnimatePresence>
    </SliderWrapper>
  );
};

const SliderWrapper = styled.div`
  position: relative;
  height: 200px;
  top: -80px;
  margin-bottom: 80px;
`;

const Row = styled(motion.div)`
  display: grid;
  grid-template-columns: 0.5fr repeat(6, 1fr) 0.5fr;
  gap: 5px;
  position: absolute;
  width: 100%;
  padding: 10px;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${(props) => props.theme.white.darker};
    border: none;
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0);

    :hover {
      opacity: 0.6;
    }

    .arrow {
      font-size: 30px;
    }
  }
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
