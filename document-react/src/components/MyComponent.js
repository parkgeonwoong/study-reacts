import PropTypes from "prop-types";
import { Component } from "react";

class MyComponent extends Component {
  static defaultProps = {
    name: "기본 이름",
  };
  static propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired,
  };
  render() {
    const { name, favoriteNumber, children } = this.props;
    return (
      <div>
        My name {name} 입니다 <br />
        Children value {children}
        <br />
        좋아하는 숫자 {favoriteNumber}
      </div>
    );
  }
}

// 함수형 컴포넌트
// const MyComponent = (props) => {
//     const { name, children } = props;
//     return (
//       <div>
//         My name {name} 입니다 <br />
//         Children value {children}
//       </div>
//     );
//   };

export default MyComponent;
