import React from "react";
import "../assets/Modal.css";

const Modal = ({ post, title, handleGender, month, day, open, close }) => {
  return (
    <div className="modal">
      <section>
        <header>
          <h4>{post[title]}</h4>
          <button className="close" onClick={close}>
            &times;
          </button>
        </header>
        <main>
          <p>
            Date: {month[title]}월 {day[title]}일{" "}
          </p>
        </main>
        <footer>
          <button onClick={handleGender}>수정</button>
          <button onClick={close}>close</button>
        </footer>
      </section>
    </div>
  );
};

export default Modal;
