/* eslint-disable */

import "./App.css";
import React, { useState } from "react";

function App() {
  const [post, setPost] = useState(["라 추천", "나 추천", "가 추천"]);
  const [like, setLike] = useState([0, 0, 0]);
  const [modal, setModal] = useState(false);

  // 상태 값 +1
  const handleCount = (index) => {
    const copy = [...like];
    copy[index] = copy[index] + 1;
    setLike(copy);
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

      <button onClick={() => handleSort()}>정렬</button>

      {post.map((item, index) => {
        return (
          <div className="list" key={index}>
            <h4 onClick={handleGender}>
              {item}
              <button
                onClick={() => {
                  handleCount(index);
                }}
                style={{ backgroundColor: "#dad7cd" }}
              >
                ❤️
              </button>
              {like[index]}
            </h4>
            <p>2월 17일 발행</p>
          </div>
        );
      })}

      <button onClick={() => setModal(!modal)}>modal</button>
      {modal ? <Modal /> : null}
    </div>
  );
}

const Modal = () => {
  return (
    <div className="modal">
      <h4>Title</h4>
      <p>Date</p>
      <p>Context</p>
    </div>
  );
};

export default App;
