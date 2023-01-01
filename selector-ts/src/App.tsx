import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { hourSelector, minuteState } from "./atoms";

function App() {
  const [minutes, setMinutes] = useRecoilState(minuteState);

  // ❓ selector의 get = hours, set = setHours
  const [hours, setHours] = useRecoilState(hourSelector);

  const onMinuteChange = (event: React.FormEvent<HTMLInputElement>) => {
    // ❓ 문자열을 숫자로 바꾸는 shortCut
    setMinutes(+event.currentTarget.value);
  };
  const onHourChange = (event: React.FormEvent<HTMLInputElement>) => {
    setHours(+event.currentTarget.value);
  };

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Recoil</title>
        </Helmet>

        <Title>Recoil 연습</Title>

        <Wrapper>
          <input
            value={minutes}
            onChange={onMinuteChange}
            type="number"
            placeholder="Minutes"
          />
          <input
            value={hours}
            onChange={onHourChange}
            type="number"
            placeholder="Hours"
          />
        </Wrapper>
      </HelmetProvider>
    </>
  );
}

const Title = styled.h1`
  font-size: 30px;
  font-weight: 600;
  text-align: center;
  margin: 20px 0px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 480px;
  margin: 0 auto;
  padding: 20px 0px;

  input {
    font-size: 20px;
    text-align: center;
    border: 1px solid #000;
    border-radius: 10px;
    margin: 0 10px;
    padding: 10px 0px;
  }
`;

export default App;
