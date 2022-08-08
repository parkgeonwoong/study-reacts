/* eslint-disable */

import "./App.css";
import React, { useState } from "react";

function App() {
  const [post, setPost] = useState([
    "남자 코트 추천",
    "맛집 추천",
    "카페 추천",
  ]);
  const [like, setLike] = useState(0);

  const handleCount = () => {
    setLike((num) => num + 1);
  };

  const handleGender = () => {
    console.log(post.map((item) => item));
  };

  const items = post.map((item, index) => (
    <div className="list" key={index}>
      <h4>
        {item}
        <span onClick={handleCount}> ✨</span> {like}
      </h4>
      <p>2월 17일 발행</p>
    </div>
  ));

  return (
    <div className="App">
      <div className="black-nav">
        <h2 style={{ color: "white" }}>ReactBlog</h2>
      </div>
      <div className="list">
        <h4 onClick={handleGender}>
          <span onClick={handleCount}>{post[0]} ✨</span> {like}
        </h4>
        <p>2월 17일 발행</p>
      </div>
      <div>{items}</div>
    </div>
  );
}

export default App;
