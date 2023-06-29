import React from "react";
import { styled } from "styled-components";

const MainContainer = styled.div`
  max-width: 600px;
  /* padding: 0 14px; */
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  border-left: 1px solid ${(props) => props.theme.palette.grey["50016"]};
  border-right: 1px solid ${(props) => props.theme.palette.grey["50016"]};
  /* background-color: blue; */
`;
const MainSectionLayout = ({ children }) => {
  return <MainContainer>{children}</MainContainer>;
};

export default MainSectionLayout;
