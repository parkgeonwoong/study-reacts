/**
 * @desc : styled-components
 */
import styled from "styled-components";

function App() {
  return (
    <DivFater>
      <DivBox bgColor="teal" />
      {/* 4. 태그만 바꾸는 방법 */}
      <DivBox as="button" bgColor="tomato">
        버튼?
      </DivBox>
      <BoxCircle bgColor="blue" />
      <Input />
      <Input />
    </DivFater>
  );
}

// 1. 스타일-컴포넌트
const DivFater = styled.div`
  display: flex;
`;

// 2. 변수 사용해보기
const DivBox = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
`;

// 3. 확장
const BoxCircle = styled(DivBox)`
  border-radius: 50%;
`;

// 5. 속성 대입하기
const Input = styled.input.attrs({ required: true })`
  background-color: skyblue;
`;

export default App;
