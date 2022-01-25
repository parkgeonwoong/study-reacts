import "./App.css";
import { useState } from "react";
import Counter from "./hooks/Counter";
import Info from "./hooks/Info";

const App = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {" "}
        {visible ? "숨기기" : "보이기"}{" "}
      </button>
      <hr />
      {visible && <Info />}
    </div>
  );
};

export default App;
