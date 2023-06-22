import { styled } from "styled-components";

export const ButtonGlobal = styled.button`
  ${(props) => {
    if (props.variant === "primary") {
      return `background-color:${props.theme.palette.primary.light};
      color:${props.theme.palette.primary.contrastText};
      &:hover{background-color:${props.theme.palette.primary.main};}`;
    }
  }}
`;
