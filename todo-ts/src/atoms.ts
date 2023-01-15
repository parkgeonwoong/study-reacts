/**
 * @desc : Recoil Atoms 파일
 */

import { atom, selector } from "recoil";

// [enum] string값들로 하드코딩을 방지하기 위해
export enum Categories {
  "TODO" = "TODO",
  "ACTIVE" = "ACTIVE",
  "DONE" = "DONE",
}
export interface IToDo {
  text: string;
  id: number;
  category: Categories;
}

// [Atom] todo
export const todoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
  // localStorage 도큐먼트 참고
  effects: [
    ({ setSelf, onSet }) => {
      const localKey = "Todo";
      const savedValue = localStorage.getItem(localKey);
      if (savedValue !== null) {
        setSelf(JSON.parse(savedValue));
      }

      onSet((newValue, _, isReset) => {
        isReset
          ? localStorage.removeItem(localKey)
          : localStorage.setItem(localKey, JSON.stringify(newValue));
      });
    },
  ],
});

// [Atom] category
export const categoryState = atom<Categories>({
  key: "category",
  default: Categories.TODO,
});

// Selector
export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    // selector가 atom을 읽을 때는 get을 사용한다.
    const toDos = get(todoState);
    const category = get(categoryState);

    // 3.2번 한줄로 줄이기
    return toDos.filter((todo) => todo.category === category);

    // 2. 조건에 따른 상태값 리턴
    // if (category === "TODO")
    //   return toDos.filter((todo) => todo.category === "TODO");
    // if (category === "ACTIVE")
    //   return toDos.filter((todo) => todo.category === "ACTIVE");
    // if (category === "DONE")
    //   return toDos.filter((todo) => todo.category === "DONE");

    // 1. 모든 상태값 배열로 반환하는 법
    // return [
    //   toDos.filter((todo) => todo.category === "TODO"),
    //   toDos.filter((todo) => todo.category === "ACTIVE"),
    //   toDos.filter((todo) => todo.category === "DONE"),
    // ];
  },
});
