/* eslint-disable */

import "./App.css";
import React, { useState } from "react";

function App() {
  const [post, setPost] = useState(["바 추천", "나 추천", "가 추천"]);
  const [like, setLike] = useState([0, 0, 0]);
  const [modal, setModal] = useState(false);
  const [title, setTitle] = useState(0);
  const [inputValue, setInputValue] = useState("");

  const [month, setMonth] = useState([1, 2, 3]);
  const [day, setDay] = useState([10, 11, 12]);

  let now = new Date();
  let todayMonth = now.getMonth() + 1;
  let todayDate = now.getDate();

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

  // 배열 상태에 추가
  const handleAdd = () => {
    const copyAdd = [inputValue, ...post];
    setPost(copyAdd);
    setLike([0, ...like]);
    setMonth([todayMonth, ...month]);
    setDay([todayDate, ...day]);
  };

  // 배열 상태 제거
  const handleRemove = (index) => {
    const copy = [...post];
    setPost(copy.filter((item) => item !== copy[index]));
  };

  return (
    <div className="App">
      <div className="black-nav">
        <h2 style={{ color: "white" }}>React</h2>
      </div>

      <button onClick={() => handleSort()}>정렬</button>

      {/* 반복 html -> map 적용 */}
      {post.map((item, index) => {
        return (
          <div className="list" key={index}>
            <h4
              onClick={() => {
                setModal(!modal);
                setTitle(index);
              }}
            >
              {item}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleCount(index);
                }}
                style={{ backgroundColor: "#dad7cd" }}
              >
                ❤️
              </button>
              {like[index]}
            </h4>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p>
                {month[index]}월 {day[index]}일 발행
              </p>
              <button
                onClick={() => {
                  handleRemove(index);
                }}
              >
                삭제
              </button>
            </div>
          </div>
        );
      })}

      {/* input 박스 */}
      <div style={{ display: "flex", margin: "10px" }}>
        <input
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
        <button
          onClick={() => {
            inputValue === "" ? alert("입력해주세요.") : handleAdd();
          }}
        >
          등록
        </button>
      </div>

      {/* <button onClick={() => setModal(!modal)}>modal</button> */}
      {modal ? (
        <Modal title={title} post={post} handleGender={handleGender} />
      ) : null}
    </div>
  );
}

const Modal = ({ post, title, handleGender }) => {
  return (
    <div className="modal">
      <h4>Title: {post[title]}</h4>
      <p>Date</p>
      <p>Context</p>
      <button onClick={handleGender}>수정</button>
    </div>
  );
};

export default App;
