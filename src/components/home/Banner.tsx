/**
 * @desc : home의 배너화면
 */

import styled from "styled-components";
import { makeImagePath } from "../../util/utils";
import { IHomeData } from "./types";

export const Banner = ({ data }: IHomeData) => {
  return (
    <Main bgPhoto={makeImagePath(data?.results[0].backdrop_path || "")}>
      <Title>{data?.results[0].title}</Title>
      <OverView>{data?.results[0].overview}</OverView>
    </Main>
  );
};

const Main = styled.div<{ bgPhoto: string }>`
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
