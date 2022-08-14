import React, { Component } from "react";
import "./ValidationSample.css";

class ValidationSample extends Component {
  input = React.createRef();

  state = {
    password: "",
    clicked: false,
    validated: false,
  };

  handleChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  handleClick = () => {
    this.setState({
      clicked: true,
      validated: this.state.password === "0000",
    });
    this.handleFocus();
    // 콜백 this.input.focus();
  };

  handleFocus = () => {
    this.input.current.focus();
  };

  render() {
    return (
      <div>
        <input
          ref={this.input}
          // 콜백  ref={(ref) => (this.input = ref)}
          type="password"
          value={this.state.password}
          onChange={this.handleChange}
          className={
            this.state.clicked
              ? this.state.validated
                ? "success"
                : "failure"
              : ""
          }
        ></input>
        <button onClick={this.handleClick}>검증</button>
      </div>
    );
  }
}

export default ValidationSample;
