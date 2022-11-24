import { useContext, useEffect, useState } from "react";

import { Context1 } from "../App.js";

export default function TabComponent({ tabs }) {
  const { stock } = useContext(Context1);
  const [fade, setFade] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setFade("end");
    }, 100);

    return () => {
      setFade("");
    };
  }, [tabs]);

  return (
    <div className={`paddingBottom start ${fade}`}>
      {[<div>{stock} 내용0</div>, <div>내용1</div>, <div>내용2</div>][tabs]}
    </div>
  );
}

// const TabComponent = ({ tabs }) => {
//   if (tabs === 0) {
//     return <div >내용0</div>;
//   } else if (tabs === 1) {
//     return <div >내용1</div>;
//   } else if (tabs === 2) {
//     return <div >내용2</div>;
//   }
// };
