/* eslint-disable */

import "./App.css";
import React, { useState } from "react";

function App() {
  const [post, setPost] = useState(["라 추천", "나 추천", "가 추천"]);
  const [like, setLike] = useState(0);

  // 상태 값 +1
  const handleCount = () => {
    setLike((num) => num + 1);
  };

  // 상태 값 배열/객체 변경
  const handleGender = () => {
    let copy = [...post];
    copy[0] = "다 추천";
    setPost(copy);
  };

  // 상태 값 정렬
  const handleSort = () => {
    let copySort = [...post];
    copySort.sort();
    setPost(copySort);
  };

  return (
    <div className="App">
      <div className="black-nav">
        <h2 style={{ color: "white" }}>React</h2>
      </div>
      <div
        style={{
          display: "flex",
          margin: "10px",
        }}
      >
        <button onClick={() => handleSort()}>정렬</button>
      </div>
      <div className="list">
        <h4 onClick={handleGender}>
          <span onClick={handleCount}>{post[0]} ✨</span> {like}
        </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4 onClick={handleGender}>
          <span onClick={handleCount}>{post[1]} ✨</span> {like}
        </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4 onClick={handleGender}>
          <span onClick={handleCount}>{post[2]} ✨</span> {like}
        </h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;
