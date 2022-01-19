import { Component } from "react";
import "./App.css";
import ScrollBox from "./components/ScrollBox";

class App extends Component {
  render() {
    return (
      <div>
        <ScrollBox
          ref={(ref) => {
            this.scrollBox = ref;
          }}
        />
        <button
          onClick={() => {
            this.scrollBox.scrollToBottom();
          }}
        >
          맨 뒤에
        </button>
      </div>
    );
  }
}

export default App;
