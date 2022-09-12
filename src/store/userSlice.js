import { createSlice } from "@reduxjs/toolkit";

// 1️⃣ state 만들기 = useState
const user = createSlice({
  name: "user",
  initialState: { name: "park", age: 20 },

  // state 수정해주는 함수 만들기
  reducers: {
    changeName(state) {
      state.name = "KKIm";
    },
    incrementAge(state, action) {
      state.age += action.payload;
    },
  },
});

// 만든 함수 export
export const { changeName, incrementAge } = user.actions;

export default user;
