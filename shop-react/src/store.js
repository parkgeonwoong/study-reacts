/**
 * @desc: Redux store 설정
 */

import { configureStore, createSlice } from "@reduxjs/toolkit";
import user from "./store/userSlice.js";

// 1️⃣ state 만들기 = useState
const cart = createSlice({
  name: "cart",
  initialState: [
    { id: 0, name: "White and Black", count: 2 },
    { id: 2, name: "Grey Yordan", count: 1 },
  ],

  // state 수정해주는 함수 만들기
  reducers: {
    addCount(state, action) {
      // 배열에서 특정 값 찾기
      const 번호 = state.findIndex((item) => {
        return item.id === action.payload;
      });
      state[번호].count += 1;
    },
    addItem(state, action) {
      state.push(action.payload);
    },
    removeItem(state, action) {
      // state.filter((item) => item.id !== action.payload);
      const 번호 = state.findIndex((item) => {
        return item.id === action.payload;
      });
      state.splice(번호, 1);
    },
  },
});

// 만든 함수 export
export const { addCount, addItem, removeItem } = cart.actions;

export default configureStore({
  reducer: {
    // 2️⃣ 위의 만든것 등록하기
    user: user.reducer,
    cart: cart.reducer,
  },
});
