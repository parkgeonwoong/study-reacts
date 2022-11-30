import styled from "styled-components";

// Props interface
interface CircleProps {
  bgColor: string;
  borderColor?: string;
}

const Circle = ({ bgColor, borderColor }: CircleProps) => {
  return <Container bgColor={bgColor} borderColor={borderColor ?? bgColor} />;
};

// styled-components interface
interface ContainerProps {
  bgColor: string;
  borderColor: string;
}

const Container = styled.div<ContainerProps>`
  width: 100px;
  height: 100px;
  background-color: ${(props) => props.bgColor};
  border-radius: 50%;
  border: 1px solid ${(props) => props.borderColor};
`;

export default Circle;
