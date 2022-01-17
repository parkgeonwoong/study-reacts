const MyComponent = ({ name, children }) => {
  return (
    <div>
      My name {name} 입니다 <br />
      Children value {children}
    </div>
  );
};

MyComponent.defaultProps = {
  name: "기본이름",
};

export default MyComponent;
