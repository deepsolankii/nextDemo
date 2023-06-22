import { styled } from "styled-components";

const Container = styled.div`
  color: ${(props) => props.theme.palette.primary.main};
  background-color: ${(props) => props.theme.palette.background.default};
`;

const Test = () => {
  return <Container>test</Container>;
};

export default Test;
