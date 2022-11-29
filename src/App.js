/**
 * @desc : styled-components
 */
import styled from "styled-components";

function App() {
  return (
    <DivFater>
      <DivBox bgColor="teal" />
      <DivBox bgColor="tomato" />
      <BoxCircle bgColor="blue" />
    </DivFater>
  );
}

// 스타일
const DivFater = styled.div`
  display: flex;
`;

// 변수 사용해보기
const DivBox = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
`;

// 확장
const BoxCircle = styled(DivBox)`
  border-radius: 50%;
`;

export default App;
