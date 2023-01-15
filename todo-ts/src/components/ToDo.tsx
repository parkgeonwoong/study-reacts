/**
 * @desc : Todo 생성한 것을 보여주는 컴포넌트
 */

import styled from "styled-components";
import { useSetRecoilState } from "recoil";
import { Categories, IToDo, todoState } from "../atoms";

function ToDo({ text, category, id }: IToDo) {
  const setToDos = useSetRecoilState(todoState);

  // ❓ 타입스크립트 인터페이스 불러와서 속성 하나만 쓰는 법
  const onClick = (action: IToDo["category"]) => {
    // ❓ 수정할 때 map으로 바꿈, 위치가 어디있는지 생각해라(index, id 등)
    setToDos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, category: action } : { ...todo }
      )
    );
  };

  const handleDelete = () => {
    setToDos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <LiBox>
      <span>{text}</span>
      {category !== Categories.TODO && (
        <button onClick={() => onClick(Categories.TODO)}>👉 TODO</button>
      )}
      {category !== Categories.ACTIVE && (
        <button onClick={() => onClick(Categories.ACTIVE)}>🔥 ACTIVE</button>
      )}
      {category !== Categories.DONE && (
        <button onClick={() => onClick(Categories.DONE)}>✅ DONE</button>
      )}
      <button onClick={handleDelete}>❌</button>
    </LiBox>
  );
}

const LiBox = styled.li`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
  margin: 10px 0px;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px,
    rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;
  border-radius: 10px;
  background-color: white;

  span {
    font-size: 18px;
    font-weight: 700;
  }

  button {
    padding: 5px 10px;
    border-radius: 5px;
    border: none;
    background-color: #f1f3f5;
    color: #212529;
    font-size: 12px;
    font-weight: 700;
    cursor: pointer;

    :hover {
      background-color: #e9ecef;
    }
  }
`;

export default ToDo;
