/**
 * @desc : TodoList
 * @todo :
 * 1. react-hook-form 사용하기
 * 2. Recoil 상태값 관리하기
 * 3. 기능구현 후 리팩토링
 */

import React from "react";
import { Helmet } from "react-helmet-async";
import styled from "styled-components";

import { useRecoilState, useRecoilValue } from "recoil";
import { Categories, categoryState, toDoSelector } from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

function ToDoList() {
  // ❓모든 카테고리를 랜더링할 필요가 없지 않을까? -> 카테고리별로 구분해서 랜더링
  // const toDos = useRecoilValue(todoState);

  // [selector] 상태값들
  const todos = useRecoilValue(toDoSelector);

  // 카테고리 상태값에 따른 필터링
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as Categories);
  };

  return (
    <Container>
      {/* 타이틀 */}
      <Helmet>
        <title>Todo List</title>
      </Helmet>

      <Box>
        <h1>🆃odo 🅻ist</h1>
      </Box>

      {/* 옵션 */}
      <Select value={category} onInput={onInput}>
        <option value={Categories.TODO}>👉 Todo</option>
        <option value={Categories.ACTIVE}>🔥 Active</option>
        <option value={Categories.DONE}>✅ Done</option>
      </Select>

      {/* 폼 */}
      <CreateToDo />

      {/* 리스트 */}
      <ul>
        {todos?.map((todo) => (
          // ❓ props를 일일이 넣어주는 것이 아닌 {...toDo}해도 값이 들어감
          <ToDo key={todo.id} {...todo} />
        ))}
      </ul>
    </Container>
  );
}

const Container = styled.div`
  max-width: 480px;
  margin: 0 auto;
  padding: 20px 0px;
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px 0px;
  margin-bottom: 20px;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px,
    rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;
  border-radius: 10px;
  background-color: white;

  h1 {
    font-size: 25px;
    font-weight: 700;
  }
`;

const Select = styled.select`
  width: 20%;
  height: 30px;
  margin-bottom: 20px;
  border: 1px solid #e5e5e5;
  border-radius: 10px;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  font-weight: 600;

  :hover {
    border: 2px solid #487eb0;
  }
`;

export default ToDoList;
