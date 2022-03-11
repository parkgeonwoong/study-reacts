import ColorContext, { ColorConsumer } from "../contexts/color";

const ColorBox = () => {
  return (
    <ColorConsumer>
      {(value) => (
        <div style={{ display: "flex" }}>
          <div
            style={{
              margin: "0 10px",
              width: "64px",
              height: "64px",
              background: value.state.color,
            }}
          />
          <div
            style={{
              width: "32px",
              height: "32px",
              background: value.state.subcolor,
            }}
          ></div>
        </div>
      )}
    </ColorConsumer>
  );
};

export default ColorBox;
