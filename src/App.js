/**
 * @desc : styled-components
 */
import styled, { keyframes } from "styled-components";

function App() {
  return (
    <Wrapper>
      <Box>
        <span>😝</span>
      </Box>
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

const Box = styled.div`
  width: 200px;
  height: 200px;
  background-color: tomato;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${rotateAnimation} 1s linear infinite;
  /* 2. 다른 Element 타켓 (=nesting) */
  span {
    font-size: 32px;
    &:hover {
      font-size: 60px;
    }
  }
`;

export default App;
