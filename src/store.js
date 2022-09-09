/**
 * @desc: Redux store 설정
 */

import { configureStore, createSlice } from "@reduxjs/toolkit";

// 1️⃣ state 만들기 = useState
const user = createSlice({
  name: "user",
  initialState: "kim",
});

const stock = createSlice({
  name: "stock",
  initialState: [
    { id: 0, name: "White and Black", count: 2 },
    { id: 2, name: "Grey Yordan", count: 1 },
  ],
});

export default configureStore({
  reducer: {
    // 2️⃣ 위의 만든것 등록하기
    user: user.reducer,
    stock: stock.reducer,
  },
});
