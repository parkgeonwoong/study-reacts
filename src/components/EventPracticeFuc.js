import { useState } from "react";

// const EventPracticeFuc = () => {
//   const [username, setUsername] = useState("");
//   const [message, setMessage] = useState("");
//   const handleUserChange = (e) => setUsername(e.target.value);
//   const handleMessageChange = (e) => setMessage(e.target.value);
//   const handleClick = () => {
//     alert(username + ": " + message);
//     setUsername("");
//     setMessage("");
//   };
//   const handleKeyPress = (e) => {
//     if (e.key === "Enter") {
//       handleClick();
//     }
//   };
//   return (
//     <div>
//       <h1>함수 컴포넌트 이벤트 연습</h1>
//       <input
//         type="text"
//         name="username"
//         placeholder="사용자이름"
//         value={username}
//         onChange={handleUserChange}
//       ></input>
//       <input
//         type="text"
//         name="message"
//         placeholder="내용"
//         value={message}
//         onChange={handleMessageChange}
//         onKeyPress={handleKeyPress}
//       ></input>
//       <button onClick={handleClick}>Check</button>
//     </div>
//   );
// };

const EventPracticeFuc = () => {
  const [form, setForm] = useState({
    username: "",
    message: "",
  });

  const { username, message } = form;
  const onChange = (e) => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextForm);
  };

  const onClick = () => {
    alert(username + ": " + message);
    setForm({
      username: "",
      message: "",
    });
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };

  return (
    <div>
      <h1>함수 컴포넌트 이벤트 연습</h1>
      <input
        type="text"
        name="username"
        placeholder="사용자이름"
        value={username}
        onChange={onChange}
      ></input>
      <input
        type="text"
        name="message"
        placeholder="내용"
        value={message}
        onChange={onChange}
        onKeyPress={onKeyPress}
      ></input>
      <button onClick={onClick}>Check</button>
    </div>
  );
};

export default EventPracticeFuc;
