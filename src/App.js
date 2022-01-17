import "./App.css";
import { Component } from "react";
import MyComponent from "./MyComponent";

const App = () => {
  return (
    <MyComponent name="RREACT" favoriteNumber={1}>
      react
    </MyComponent>
  );
};

export default App;
