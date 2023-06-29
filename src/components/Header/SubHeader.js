import React from "react";
import { styled } from "styled-components";

const SubHeaderContainer = styled.div`
  width: 100%;
  position: sticky;
  top: 0;
  backdrop-filter: blur(5px);
  display: flex;
  box-sizing: border-box;
  text-transform: capitalize;
  justify-content: flex-start;
  align-items: center;
  /* padding-bottom: 11px; */
  z-index: 3;
  background: ${(props) => props.theme.palette.background.light};
  /* background-color: rgba(255, 255, 255, 0.85); */
  ${(props) => props.theme.typography.subtitle1}
`;

const SubHeader = ({ children }) => {
  return <SubHeaderContainer>{children}</SubHeaderContainer>;
};

export default SubHeader;
