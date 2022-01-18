import { Component } from "react";

class EventPractice extends Component {
  state = {
    message: "",
  };
  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력"
          value={this.state.message}
          onChange={(e) => {
            this.setState({
              message: e.target.value,
            });
          }}
        ></input>
        <button
          onClick={() => {
            alert(this.state.message);
            this.setState({ message: "" });
          }}
        >
          Check
        </button>
      </div>
    );
  }
}

export default EventPractice;
