const MyComponent = (props) => {
  return <div>My name {props.name} 입니다</div>;
};

MyComponent.defaultProps = {
  name: "기본이름",
};

export default MyComponent;
