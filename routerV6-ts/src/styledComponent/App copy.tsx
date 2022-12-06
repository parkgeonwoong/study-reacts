import React, { useState } from "react";
import styled from "styled-components";

function App() {
  const [value, setValue] = useState("");

  // input event
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    // console.log(event.currentTarget.value);
    // : React.ChangeEvent<HTMLInputElement>
    const {
      currentTarget: { value },
    } = event;
    setValue(value);
  };

  // form event
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Hello " + value);
  };

  return (
    <Container>
      <H1>Protected!</H1>
      <form onSubmit={onSubmit}>
        <input
          value={value}
          onChange={onChange}
          type="text"
          placeholder="userName"
        />
        <button>Log in</button>
      </form>
    </Container>
  );
}

const Container = styled.div`
  background-color: ${(props) => props.theme.bgColor};
`;

const H1 = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

export default App;
