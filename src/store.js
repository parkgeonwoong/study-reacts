/**
 * @desc: Redux store 설정
 */

import { configureStore, createSlice } from "@reduxjs/toolkit";

// 1️⃣ state 만들기 = useState
const user = createSlice({
  name: "user",
  initialState: "kim",

  // state 수정해주는 함수 만들기
  reducers: {
    changeName(state) {
      return "park" + state;
    },
  },
});

const cart = createSlice({
  name: "cart",
  initialState: [
    { id: 0, name: "White and Black", count: 2 },
    { id: 2, name: "Grey Yordan", count: 1 },
  ],

  reducers: {
    increment: (state, action) => {
      state.count += action.payload;
    },
  },
});

// 만든 함수 export
export const { changeName, increment } = user.actions;

export default configureStore({
  reducer: {
    // 2️⃣ 위의 만든것 등록하기
    user: user.reducer,
    cart: cart.reducer,
  },
});
