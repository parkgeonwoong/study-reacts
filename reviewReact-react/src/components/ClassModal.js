import React from "react";

// 클래스 컴포넌트
class Modal2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "park",
      age: 20,
    };
  }
  render() {
    return (
      <div>
        Hello {this.state.age}
        <button
          onClick={() => {
            this.setState({ age: 25 });
          }}
        >
          btn
        </button>
      </div>
    );
  }
}

export default Modal2;
