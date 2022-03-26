import { useEffect, useState } from "react";

const Hello = () => {
  useEffect(() => {
    console.log("Created :)");
    return () => console.log("destroyed :(");
  });
  return <h1>Hello</h1>;
};

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);

  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
