/**
 * @desc : styled-components
 */
import styled, { keyframes } from "styled-components";

function App() {
  return (
    <Wrapper>
      <Box>
        <Emoji>😝</Emoji>
        <Emoji as="p">😝</Emoji>
      </Box>
      <Emoji>😝</Emoji>
      <Title>Hello world</Title>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
`;

// 1. animation 효과
const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg);
    border-radius: 0;
  } 50% {
    border-radius: 50%;
  } 100% {
    transform: rotate(360deg);
    border-radius: 0;
  }
`;

const Emoji = styled.span`
  font-size: 32px;
`;

const Box = styled.div`
  width: 200px;
  height: 200px;
  background-color: tomato;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${rotateAnimation} 3s linear infinite;
  /* 2. 다른 Element 타켓 (=nesting) */
  ${Emoji} {
    &:hover {
      font-size: 60px;
    }
  }
`;

// 3. Theme 적용해보기
const Title = styled.h2`
  color: ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.backgroundColor};
`;

export default App;
