import PropTypes from "prop-types";

const MyComponent = ({ name, favoriteNumber, children }) => {
  return (
    <div>
      My name {name} 입니다 <br />
      Children value {children}
      <br />
      좋아하는 숫자 {favoriteNumber}
    </div>
  );
};

MyComponent.defaultProps = {
  name: "기본이름",
};

MyComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired,
};

export default MyComponent;
